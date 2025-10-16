export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: string;
  status: string;
  capacity: number;
  registered: number;
  features: string[];
  partner?: string;
  priority?: boolean;
  specialNote?: string;
  attendees?: number;
  highlights?: string[];
  images?: string[];
}

export interface PastEvent {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  attendees: number;
  type: string;
  highlights: string[];
  images: string[];
}

export class EventManager {
  static isEventPast(eventDate: string): boolean {
    // TBC dates are considered upcoming, not past
    if (eventDate === 'TBC' || eventDate === 'TBA') {
      return false;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to start of day for accurate comparison

    const eventDateObj = new Date(eventDate);
    eventDateObj.setHours(0, 0, 0, 0);

    return eventDateObj < today;
  }

  static isEventToday(eventDate: string): boolean {
    // TBC dates are never "today"
    if (eventDate === 'TBC' || eventDate === 'TBA') {
      return false;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const eventDateObj = new Date(eventDate);
    eventDateObj.setHours(0, 0, 0, 0);

    return eventDateObj.getTime() === today.getTime();
  }

  static isEventUpcoming(eventDate: string): boolean {
    // TBC dates are considered upcoming
    if (eventDate === 'TBC' || eventDate === 'TBA') {
      return true;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const eventDateObj = new Date(eventDate);
    eventDateObj.setHours(0, 0, 0, 0);

    return eventDateObj >= today;
  }

  static convertToPastEvent(upcomingEvent: Event): PastEvent {
    return {
      id: upcomingEvent.id,
      title: upcomingEvent.title,
      date: upcomingEvent.date,
      location: upcomingEvent.location,
      description: upcomingEvent.description,
      attendees: upcomingEvent.registered, // Use registered count as attendees
      type: upcomingEvent.type,
      highlights: upcomingEvent.features, // Convert features to highlights
      images: upcomingEvent.images || [
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    };
  }

  static filterUpcomingEvents(events: Event[]): Event[] {
    return events.filter(event => this.isEventUpcoming(event.date));
  }

  static filterPastEvents(events: Event[]): Event[] {
    return events.filter(event => this.isEventPast(event.date));
  }

  static sortEventsByDate(events: Event[], ascending: boolean = true): Event[] {
    return [...events].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return ascending ? dateA - dateB : dateB - dateA;
    });
  }

  static getEventStatus(eventDate: string): string {
    // TBC dates show as "Coming Soon"
    if (eventDate === 'TBC' || eventDate === 'TBA') {
      return 'Coming Soon';
    }

    if (this.isEventPast(eventDate)) {
      return 'Past Event';
    } else if (this.isEventToday(eventDate)) {
      return 'Today';
    } else {
      const today = new Date();
      const eventDateObj = new Date(eventDate);
      const diffTime = eventDateObj.getTime() - today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays <= 7) {
        return 'This Week';
      } else if (diffDays <= 30) {
        return 'This Month';
      } else {
        return 'Future Event';
      }
    }
  }

  static getDaysUntilEvent(eventDate: string): number {
    // TBC dates return a large number to indicate far future
    if (eventDate === 'TBC' || eventDate === 'TBA') {
      return 999;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const eventDateObj = new Date(eventDate);
    eventDateObj.setHours(0, 0, 0, 0);

    const diffTime = eventDateObj.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  static isRegistrationOpen(eventDate: string): boolean {
    // TBC dates don't have registration open yet
    if (eventDate === 'TBC' || eventDate === 'TBA') {
      return false;
    }

    // Registration closes 1 day before the event
    const daysUntil = this.getDaysUntilEvent(eventDate);
    return daysUntil > 1;
  }
}