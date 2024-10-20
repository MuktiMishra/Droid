import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { FaLinkedin } from 'react-icons/fa'; // Import LinkedIn icon

const teamMembers = [
  { name: "John Doe", designation: "Developer", image: "./team1.jpg", linkedin: "#" },
  { name: "Jane Smith", designation: "Designer", image: "./team2.jpg", linkedin: "#" },
  { name: "John Doe", designation: "Developer", image: "./team1.jpg", linkedin: "#" },
  { name: "John Doe", designation: "Developer", image: "./team1.jpg", linkedin: "#" },
  { name: "John Doe", designation: "Developer", image: "./team1.jpg", linkedin: "#" },
  { name: "John Doe", designation: "Developer", image: "./team1.jpg", linkedin: "#" },
  { name: "John Doe", designation: "Developer", image: "./team1.jpg", linkedin: "#" },
  // Add more members as needed
];

const TeamSlider = () => {
  return (
    <div className="w-full h-full">
      {/* Header */}
      <h2 className="text-4xl font-bold text-center mt-10 mb-6">Our Team</h2>

      {/* Slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3} /* Adjust the number of visible slides */
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="w-full h-full"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            {/* Card */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden w-80 h-[400px] flex flex-col">
              {/* Image */}
              <div className="h-3/4">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>

              {/* Card Footer */}
              <div className="flex flex-col items-center justify-center p-4 bg-slate-100 text-black h-1/4">
                <h3 className="text-xl font-semibold" >{member.name}</h3>
                <p className="text-sm">{member.designation}</p>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mt-2 text-blue-500 hover:text-blue-400">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamSlider;
