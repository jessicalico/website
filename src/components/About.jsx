import React from 'react';
import aboutjessica from '../assets/aboutjessica.jpg'

const About = () => {
  return (
    <div className='w-full h-screen text-[#fdffde] text-3xl flex flex-col justify-center items-center text-center'>
      <div className='grid grid-flow-cols-dense grid-cols-1 sm:grid-cols-3 gap-3'>
        <div className='row-span-1 sm:row-span-3 p-4 justify-center'>
            <img className='rounded-md max-h-40 sm:max-h-96' src={aboutjessica} alt="about me" />
        </div>
        <div className='row-span-1 sm:col-span-2 font-custom content-center'>
          <div className='p-4 flex justify-center'>
            <span className='typewriter-container ml-2'>
                <span className='text-[#cea2fd]'>about me</span>
            </span>
          </div>
        </div>
        <div className='max-w-3xl row-span-1 sm:col-span-2 content-center text-xl text-wrap font-customtwo p-4 text-white'>
          Hello! I'm <span className='text-[#cea2fd]'>Jessica</span>, a high school student living in New Jersey.
          I created this website using React Tailwind. I'm not very good at it just yet, but I'm learning more every day.
          In addition to coding, I'm interested in a variety of subjects - from psychology to calculus to painting to music!
          In my free time, I enjoy spending time with my dog, playing the piano, crocheting, and practicing my French :&#41;
          À bientôt!
        </div>
        <div className='row-span-1 sm:col-span-2 content-center font-customtwo'>
          <button className='bg-[#cea2fd] p-4 font-custom text-2xl rounded-lg'>watch my intro video here!</button>
        </div>
      </div>
    </div>
  )
  };

export default About;