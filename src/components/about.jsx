//const logo = require('../assets/hero-image.png')
const {Button} = require('../common/button');

export const About = () => {
    return (
        <div className="py-5 h-fit bg-[url('./assets/web_dev.jpeg')] bg-cover bg-center shrink-0 ">
                 {/* About Section */}
      
        <div className="container mx-auto bg-indigo-950 bg-opacity-80 p-3 py-1 mb-3">
          <h2 className="text-2xl md:text-4xl font-extrabold text-center text-cyan-200 mb-8
          bg-slate-500 bg-opacity-60 py-1 rounded-md shadow-2xl">About Us</h2>
          <p className=" text-blue-200 mb-5 md:text-lg">
            Welcome to <span className='font-extrabold'>Em<span className='text-blue-600'>Clickz</span></span>, a pioneering tech company that drives global transformation through advanced technological solutions.
            With a strong commitment to technical excellence, we offer a comprehensive range of services encompassing software engineering, blockchain development, web development and
            mentorship.<br/> our mission is to empower businesses and individuals to navigate the digital landscape with confidence and achieve unparalleled success. By fostering collaborative
             synergy, embracing innovative methodologies and upholding ethical integrity, we are shaping a future where technology becomes a catalyst for positive change and where aspiring
             tech talents can thrive.<br/> With our vision, mission and values, we envision a future where technological boundaries are surpased, where business leverage tech prowess to achieve
             unparalleled growth and where emerging tech enthusiasts find a nurturing environment to hone their skills and contribute to global tech landscape.
          </p>
          <div className="container text-center p-3 mb-1">
            <h3 className='shadow-2xl font-extrabold text-lg text-cyan-200 md:text-2xl bg-slate-500 bg-opacity-60 rounded py-2'>
              Our Vision
            </h3>
            {/* use image for bg */}
            {/* <img
              src={logo}
              alt="About Us"
              className="rounded-lg animate-spin-slow"
            /> */}
            <p className='font-semibold text-cyan-200 py-1 md:text-lg'>Poineering Innovation through technical excellence</p>
          </div>
          <div className="container text-center p-3 mb-3">
            <h3 className='font-extrabold md:text-2xl bg-slate-500 bg-opacity-60 text-cyan-200 text-lg rounded py-1'>Our Mission</h3>
            <p className='text-cyan-100 text-start py-2 md:text-lg'>
              At <span className='font-extrabold'>Em<span className='text-blue-600'>Clickz</span></span>, our mission is to empower individulas and businesses to harness the full potential of technology. We are dedicated to fostering innovation, bridging gaps,
              and driving digital transformation.through our comprehensive suite of services, including software engineering, blockchain development, web development and mentorship, 
              we aim to cultivate a community of forward-thinking individuals and organizations.
            </p>
          </div>
          <div className="container text-center mb-3">
            <h3 className='font-extrabold md:text-2xl bg-slate-500 bg-opacity-60 py-1 text-lg text-cyan-200 rounded'>Core Values</h3>
            <ul className='text-cyan-100 py-2 md:text-lg'>
              <li className='py-1'>
                <h4 className=''><span className='font-bold text-lg'>Excellence :</span>   We are committed to delivering solutions that exhibit the highest levels of quality, innovation and performace.</h4>
              </li>
              <li className='py-1'>
                <h4 className=''><span className='font-bold text-lg'>Empowerment :</span>  We believe in empowering our clients and partners with the knowledge and tools to succeed in a rapidly eveolving tech landscape.</h4>
              </li>
              <li className='py-1'>
                <h4 className=''><span className='font-bold text-lg'>Collaboration :</span>   Collaboration is at the heart of what we do. we collaborate internally and externally to achieve shared goals and drive impactful outcomes.</h4>
              </li>
              <li className='py-1'>
                <h4 className=''><span className='font-bold text-lg'>Innovation :</span>   We embrace innovation as a driving force behind our offerings, ensuring that we remain at the forefront of technological advancement.</h4>
              </li>
              <li className='py-1'>
                <h4 className=''><span className='font-bold text-lg'>Education :</span>   We are passionate about education and knowledge-sharing. Our mentorship programs and initiatives aim to empower the next generation of tech enthusiasts.</h4>
              </li>
              <li className='py-1'>
                <h4 className=' '><span className='font-bold text-lg'>Integrity :</span>   We conduct our business with integrity, transparancy and ethical principles that guide our interactions with clients, partners and team members.</h4>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <Button label='contact us'/>
        </div>
        </div>
        
      </div>
    );
}

//md:w-3/4 lg:w-1/2