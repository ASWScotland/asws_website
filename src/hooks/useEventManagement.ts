import { useState, useEffect, useMemo } from 'react';
import { Event, PastEvent, EventManager } from '../utils/eventManager';
import { allUpcomingEvents, staticPastEvents } from '../data/eventsData';

export const useEventManagement = () => {
  const [events, setEvents] = useState<Event[]>(allUpcomingEvents);
  const [pastEvents, setPastEvents] = useState<PastEvent[]>(staticPastEvents);
  const [lastUpdateTime, setLastUpdateTime] = useState<Date>(new Date());

  // Automatically categorize events based on current date
  const { upcomingEvents, automaticallyMovedEvents } = useMemo(() => {
    const upcoming: Event[] = [];
    const moved: PastEvent[] = [];

    events.forEach(event => {
      if (EventManager.isEventUpcoming(event.date)) {
        upcoming.push(event);
      } else {
        // Convert to past event
        moved.push(EventManager.convertToPastEvent(event));
      }
    });

    return {
      upcomingEvents: EventManager.sortEventsByDate(upcoming, true),
      automaticallyMovedEvents: moved
    };
  }, [events, lastUpdateTime]);

  // Combined past events (static + automatically moved)
  const allPastEvents = useMemo(() => {
    const combined = [...pastEvents, ...automaticallyMovedEvents];
    return combined.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [pastEvents, automaticallyMovedEvents]);

  // Update events periodically (every hour)
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdateTime(new Date());
    }, 60 * 60 * 1000); // Update every hour

    return () => clearInterval(interval);
  }, []);

  // Update events at midnight
  useEffect(() => {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const msUntilMidnight = tomorrow.getTime() - now.getTime();
    
    const timeout = setTimeout(() => {
      setLastUpdateTime(new Date());
      
      // Set up daily interval after first midnight update
      const dailyInterval = setInterval(() => {
        setLastUpdateTime(new Date());
      }, 24 * 60 * 60 * 1000);
      
      return () => clearInterval(dailyInterval);
    }, msUntilMidnight);

    return () => clearTimeout(timeout);
  }, []);

  // Remove events that have been automatically moved from the main events list
  useEffect(() => {
    if (automaticallyMovedEvents.length > 0) {
      const movedEventIds = automaticallyMovedEvents.map(e => e.id);
      setEvents(prevEvents => prevEvents.filter(e => !movedEventIds.includes(e.id)));
    }
  }, [automaticallyMovedEvents]);

  const addEvent = (newEvent: Event) => {
    setEvents(prevEvents => [...prevEvents, newEvent]);
  };

  const updateEvent = (eventId: number, updatedEvent: Partial<Event>) => {
    setEvents(prevEvents => 
      prevEvents.map(event => 
        event.id === eventId ? { ...event, ...updatedEvent } : event
      )
    );
  };

  const deleteEvent = (eventId: number) => {
    setEvents(prevEvents => prevEvents.filter(event => event.id !== eventId));
  };

  const addPastEvent = (newPastEvent: PastEvent) => {
    setPastEvents(prevEvents => [...prevEvents, newPastEvent]);
  };

  const getEventsByType = (type: string) => {
    return upcomingEvents.filter(event => event.type === type);
  };

  const getEventsByStatus = (status: string) => {
    return upcomingEvents.filter(event => event.status === status);
  };

  const getPriorityEvents = () => {
    return upcomingEvents.filter(event => event.priority);
  };

  const getEventsThisWeek = () => {
    return upcomingEvents.filter(event => {
      const days = EventManager.getDaysUntilEvent(event.date);
      return days >= 0 && days <= 7;
    });
  };

  const getEventsThisMonth = () => {
    return upcomingEvents.filter(event => {
      const days = EventManager.getDaysUntilEvent(event.date);
      return days >= 0 && days <= 30;
    });
  };

  return {
    // Event lists
    upcomingEvents,
    pastEvents: allPastEvents,
    allEvents: events,
    
    // Event management functions
    addEvent,
    updateEvent,
    deleteEvent,
    addPastEvent,
    
    // Filtered event getters
    getEventsByType,
    getEventsByStatus,
    getPriorityEvents,
    getEventsThisWeek,
    getEventsThisMonth,
    
    // Utility functions
    isEventPast: EventManager.isEventPast,
    isEventUpcoming: EventManager.isEventUpcoming,
    getEventStatus: EventManager.getEventStatus.bind(EventManager),
    getDaysUntilEvent: EventManager.getDaysUntilEvent.bind(EventManager),
    isRegistrationOpen: EventManager.isRegistrationOpen.bind(EventManager),
    
    // Metadata
    lastUpdateTime,
    automaticallyMovedCount: automaticallyMovedEvents.length
  };
};