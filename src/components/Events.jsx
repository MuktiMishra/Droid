import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const events = [
  {
    id: 1,
    name: 'Robotics Workshop',
    description: 'Join us for an exciting workshop where you will learn to build your first robot!',
    image: './event1.png',
  },
  {
    id: 2,
    name: 'Annual Robotics Competition',
    description: 'Participate in our annual competition and showcase your skills!',
    image: 'https://source.unsplash.com/featured/?competition,robotics',
  },
  {
    id: 3,
    name: 'Guest Speaker Series',
    description: 'Learn from industry experts about the future of robotics.',
    image: 'https://source.unsplash.com/featured/?guest,speaker,robotics',
  },
];

const EventSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = events.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {events.map((event, index) => (
        <div
          key={event.id}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${event.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
            <div className="text-center text-white p-8">
              <h1 className="text-4xl font-bold mb-4">{event.name}</h1>
              <p className="text-lg">{event.description}</p>
            </div>
          </div>
        </div>
      ))}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent text-white p-2 rounded-full focus:outline-none"
        onClick={prevSlide}
      >
        <i className="fas fa-chevron-left text-2xl" />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent text-white p-2 rounded-full focus:outline-none"
        onClick={nextSlide}
      >
        <i className="fas fa-chevron-right text-2xl" />
      </button>
    </div>
  );
};

export default EventSlider;
