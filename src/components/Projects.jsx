import Cards from "./Cards";
import YouTube from "../assets/youtube.png";
import Nosh from "../assets/noshlogo.png"

const Projects = () => {
    return(
        <div className='w-full h-screen flex flex-col justify-center items-center text-center'>
            <div className='grid grid-flow-cols-dense grid-cols-1 sm:grid-cols-3 gap-5 text-left font-customtwo '> 
                <a href="https://www.youtube.com/@goldythemoldy" target="_blank" rel="noreferrer">
                    <Cards imgSrc={YouTube}>
                        <h3 className="text-xl font-bold mb-2">YouTube</h3>
                        <p>
                            Check out my YouTube channel, where I make edits!
                        </p>
                    </Cards>
                </a>
                <a href="https://linktr.ee/noshteam" target="_blank" rel="noreferrer">
                    <Cards imgSrc={Nosh}>
                        <h3 className="text-xl font-bold mb-2">NOSH</h3>
                        <p>
                            Explore a project I started - Nutrition Odyssey for Student Health, or NOSH.
                        </p>
                    </Cards>
                </a>
                <a href="https://linktr.ee/noshteam" target="_blank" rel="noreferrer">
                    <Cards imgSrc={YouTube}>
                        <h3 className="text-xl font-bold mb-2">Blog</h3>
                        <p>
                            A new project where I write about my sPiCy life experiences.
                        </p>
                    </Cards>
                </a>
            </div>
        </div>
    )
};

export default Projects;