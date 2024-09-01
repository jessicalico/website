import contactjessica from '../assets/contactjessica.jpeg';

const Contact = () => {
    return (
        <div className='w-full h-screen text-[#fdffde] text-3xl flex flex-col justify-center items-center text-center'>
          <div className='grid grid-flow-cols-dense grid-cols-1 sm:grid-cols-3 gap-3'>
            <div className='order-first row-span-1 sm:col-span-2 font-custom content-center'>
              <div className='p-4 flex justify-center'>
                <span className='typewriter-container ml-2'>
                    <span className='text-[#cea2fd]'>contact</span>
                </span>
              </div>
            </div>
            <div className=' col-start-3 row-start-1 row-span-2 sm:row-span-3 p-4 rounded-md justify-center'>
                <img className='max-h-40 sm:max-h-96 rounded-md' src={contactjessica} alt="about me" />
            </div>
            <div className='max-w-3xl text-wrap row-span-1 sm:col-span-2 content-center text-2xl font-customtwo p-4 text-white'>
              <div className="p-3">
                Note: The email button may not work on Google Chrome. 
                Please email <span className='text-[#cea2fd]'>jessica@labcat.pro</span> if you'd like to contact me.
              </div>
              You can contact <span className='text-[#cea2fd]'>Jessica</span> 	&#40;me&#41; using the following: 
            </div>
            <div className='row-span-1 sm:col-span-2 content-center font-customtwo'>
                <div className='grid grid-flow-col-dense grid-cols-2 gap-3 font-custom text-2xl'>
                  <a 
                    href="mailto:jessica@labcat.pro" 
                    target="_blank" rel="noreferrer" 
                    className='col-span-1 content-center p-4 bg-[#cea2fd] rounded-lg hover:bg-[#e5cafe] hover:text-white'
                  >
                    <button>email</button>
                  </a>
                  <a 
                    href="https://www.instagram.com/jessicalico.pro/" 
                    target="_blank" rel="noreferrer" 
                    className='col-span-1 content-center p-4 bg-[#cea2fd] rounded-lg hover:bg-[#e5cafe] hover:text-white'
                  >
                    <button>instagram</button>
                  </a>
                </div>
            </div>
          </div>
        </div>
      )
};

export default Contact;

