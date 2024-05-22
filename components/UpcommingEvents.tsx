"use client"
import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { sampleEvents, Event } from '../data/events';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface EventCardProps {
  event: Event;
  onEventExpired: (id: number) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onEventExpired }) => {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  useEffect(() => {
    const eventDate = new Date(`${event.date}T${event.time}`);
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        setShowConfetti(true);
        setTimeout(() => {
          setShowConfetti(false);
          onEventExpired(event.id);
        }, 5000); // Show confetti for 5 seconds before removing the event
      } else {
        setTimeLeft(distance);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [event, onEventExpired]);

  const formatTimeLeft = (distance: number) => {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 w-[90%] mx-auto">
      <img src={event.image} alt={event.title} className="w-full h-72 object-cover rounded-md mb-4" />
      <h3 className="text-3xl font-semibold mb-2">{event.title}</h3>
      <p className="text-gray-600 mb-2">{event.venue}</p>
      <p className="text-gray-600 mb-2">{event.date} at {event.time}</p>
      <p className="text-gray-600 mb-4">{event.motive}</p>
      <div className="text-primary-crimson font-bold text-2xl mb-2">{formatTimeLeft(timeLeft)}</div>
      {showConfetti && <Confetti recycle={false} numberOfPieces={500} />}
    </div>
  );
};

const UpcomingEvents: React.FC = () => {
  const [events, setEvents] = useState<Event[]>(sampleEvents);

  const handleEventExpired = (id: number) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
  };

  const getNextUpcomingEvent = (events: Event[]): Event | null => {
    const now = new Date().getTime();
    const upcomingEvents = events.filter(event => new Date(`${event.date}T${event.time}`).getTime() > now);
    upcomingEvents.sort((a, b) => new Date(`${a.date}T${a.time}`).getTime() - new Date(`${b.date}T${b.time}`).getTime());
    return upcomingEvents.length > 0 ? upcomingEvents[0] : null;
  };

  const nextEvent = getNextUpcomingEvent(events);

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Upcoming Event</h2>
        <div className="w-full max-w-full mx-auto">
          {nextEvent ? (
            <EventCard event={nextEvent} onEventExpired={handleEventExpired} />
          ) : (
            <p className="text-center text-gray-600">No upcoming events</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
