import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import homepagejessica from '../assets/homepagejessica.jpeg';

const Hero = () => {
  return (
    <div className='w-full h-screen text-[#fdffde] text-3xl flex flex-col justify-center items-center text-center'>
      <div className='grid grid-flow-cols-dense grid-cols-1 sm:grid-cols-3 gap-3'>
        <div className='row-span-1 sm:row-span-3 p-4 rounded-md justify-center'>
            <img className='max-h-40 sm:max-h-96 rounded-md' src={homepagejessica} alt="me!" />
        </div>
        <div className='row-span-1 sm:col-span-2 font-custom content-center'>
          <div className='p-4 flex justify-center'>
            <span className='typewriter-container ml-2'>
                <span className='text-[#cea2fd]'>jessica</span>
                <TypeAnimation
                    sequence={[
                    " is feeling whimsical.",
                    1000,
                    " is feeling compassionate.",
                    1000,
                    " is feeling bold.",
                    1000,
                    " is feeling appreciative.",
                    1000,
                    " is feeling enthusiastic.",
                    1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                />
            </span>
          </div>
        </div>
        <div className='row-span-1 sm:col-span-2 content-center text-2xl font-customtwo p-4 text-white'>
          Hello! I'm <span className='text-[#cea2fd]'>Jessica</span>. Welcome to my website!
        </div>
        <div className='row-span-1 sm:col-span-2 content-center font-customtwo'>
            <button className='bg-[#cea2fd] p-4 font-custom text-2xl rounded-lg hover:bg-[#e5cafe] hover:text-white'>
              more about me
            </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
