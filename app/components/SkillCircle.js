"use client"
import { useEffect } from 'react';
import { skills } from './Tech';

const SkillCircle = () => {
  useEffect(() => {
    // Animation logic goes here
    const skillItems = document.querySelectorAll('.skill-item');

    skillItems.forEach((item) => {
      const angle = parseInt(item.getAttribute('data-angle'), 10);
      const radius = 160; // Adjust the radius as needed
      const centerX = 36; // Adjust the center X coordinate as needed
      const centerY = 36; // Adjust the center Y coordinate as needed
      const radians = (angle * Math.PI) / 180;
      const x = centerX + radius * Math.cos(radians);
      const y = centerY + radius * Math.sin(radians);
      item.style.transform = `translate(${x}px, ${y}px)`;
    });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
    {skills.map((skill, index) => (
      <div
      key={index}
      className={`relative w-16 h-16 md:w-24 md:h-24 rounded-full bg-blue-500 ${
        index % 2 === 0 ? 'col-span-2' : ''
      }`}
      style={{
        transform: `rotate(${index * 60}deg) translateY(-50%)`,
      }}
    >
        <div className="relative flex items-center justify-center">
      <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center">
        <img src={skill.icon} alt={skill.title} className="w-8 h-8 text-white" />
      </div>
      <div className="text-center mt-2">{skill.title}</div>
    </div>
    </div>
    ))}
  </div>
  );
};

export default SkillCircle;
