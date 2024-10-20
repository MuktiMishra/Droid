// src/ProjectSlider.js
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { FaTimes } from 'react-icons/fa'; // Exit icon

const projects = [
  {
    id: 1,
    image: 'https://via.placeholder.com/300x200.png?text=Project+1',
    video: 'https://www.example.com/video1.mp4',
    title: 'Project 1',
    description: 'This is the description for Project 1.',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/300x200.png?text=Project+2',
    video: 'https://www.example.com/video2.mp4',
    title: 'Project 2',
    description: 'This is the description for Project 2.',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/300x200.png?text=Project+3',
    video: 'https://www.example.com/video3.mp4',
    title: 'Project 3',
    description: 'This is the description for Project 3.',
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/300x200.png?text=Project+3',
    video: 'https://www.example.com/video3.mp4',
    title: 'Project 3',
    description: 'This is the description for Project 3.',
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/300x200.png?text=Project+3',
    video: 'https://www.example.com/video3.mp4',
    title: 'Project 3',
    description: 'This is the description for Project 3.',
  },
  {
    id: 6,
    image: 'https://via.placeholder.com/300x200.png?text=Project+3',
    video: 'https://www.example.com/video3.mp4',
    title: 'Project 3',
    description: 'This is the description for Project 3.',
  },
  {
    id: 7,
    image: 'https://via.placeholder.com/300x200.png?text=Project+3',
    video: 'https://www.example.com/video3.mp4',
    title: 'Project 3',
    description: 'This is the description for Project 3.',
  },
  {
    id: 8,
    image: 'https://via.placeholder.com/300x200.png?text=Project+3',
    video: 'https://www.example.com/video3.mp4',
    title: 'Project 3',
    description: 'This is the description for Project 3.',
  },
  {
    id: 9,
    image: 'https://via.placeholder.com/300x200.png?text=Project+3',
    video: 'https://www.example.com/video3.mp4',
    title: 'Project 3',
    description: 'This is the description for Project 3.',
  },
];

const ProjectSlider = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleDemoClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="w-full h-full">
      <h2 className="text-4xl font-bold text-center mt-10 mb-6">Our Projects</h2>
      
      <Swiper
        spaceBetween={30}
        slidesPerView={3} // Adjust the number of visible slides
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="w-full h-full"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} className="flex justify-center items-center">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden w-80 h-[400px] flex flex-col">
              <div className="h-3/4">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-slate-100 text-black h-1/4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <button
                  onClick={() => handleDemoClick(project)}
                  className="mt-2 bg-blue-600 text-white py-1 px-3 rounded"
                >
                  Demo
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedProject && (
        <Modal project={selectedProject} onClose={closeModal} />
      )}
    </div>
  );
};

const Modal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-white rounded-lg shadow-lg p-4 w-11/12 max-w-2xl relative h-auto">
        <button className="absolute top-2 right-2" onClick={onClose}>
          <FaTimes size={24} />
        </button>
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        <video className="w-full rounded-lg" src={project.video} controls />
        <p className="mt-2">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectSlider;
