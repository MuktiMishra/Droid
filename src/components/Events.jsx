import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Chevron icons
import { PuffLoader } from 'react-spinners'; // Loading spinner (you can use any other spinner)

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
  const [loading, setLoading] = useState(true); // Loading state
  const length = events.length;

  // Handles next and previous slide
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    setLoading(true); // Set loading true when changing slide
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    setLoading(true); // Set loading true when changing slide
  };

  // Function to handle image load
  const handleImageLoad = () => {
    setLoading(false); // Image is loaded
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Loading Spinner */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <PuffLoader color="#ffffff" size={60} />
        </div>
      )}

      {events.map((event, index) => (
        <div
          key={event.id}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={event.image}
            alt={event.name}
            className="object-cover w-full h-full"
            onLoad={handleImageLoad} // Call this when image is loaded
            style={{ display: loading ? 'none' : 'block' }} // Hide the image until it's fully loaded
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white p-8">
              <h1 className="text-4xl font-bold mb-4">{event.name}</h1>
              <p className="text-lg">{event.description}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent text-white p-2 rounded-full focus:outline-none"
        onClick={prevSlide}
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent text-white p-2 rounded-full focus:outline-none"
        onClick={nextSlide}
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
};

export default EventSlider;
