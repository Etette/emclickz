import { Link } from 'react-router-dom';

const S_E = require('../assets/linux.gif');
const B_C = require('../assets/blockchain.jpeg');
const W_D = require('../assets/dkglope.gif');
const M_E = require('../assets/image0.jpeg');
const {Button} = require('../common/button');


export const Feature = () => {
    return (
      <div className="bg-[url('./assets/glope_contact.jpeg')] md:bg-cover  shrink-0">
        <div className='bg-transparent  m-1 rounded-md'>
        <h2 className="text-4xl font-extrabold font-serif text-center py-5 ">
            <em className='bg-blue-950 bg-opacity-90  rounded-md text-blue-200 shadow-2xl'>Features and Services</em>
          </h2>
        </div>
      
        <div className="container mx-auto text-cyan-100 py-16 bg-indigo-950 bg-opacity-80 md:bg-opacity-70 rounded-lg shadow-xl mb-3">
          {/* Feature Grid */}
          <div className="mx-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 py-2 text-center">
            <div className="mx-4 mb-6 ">
              <img
                src={S_E} 
                alt="Feature Icon"
                className="w-60 h-30 mr-4 rounded-lg mb-3 shadow-2xl mx-20 md:mx-3"
              />
              <div className="bg-indigo-950 bg-opacity-60 py-4 rounded-lg shadow-2xl">
              <p className='font-extrabold text-lg md:text-xl text-cyan-100'>Software Development</p>
              <p className='font-semibold'>Elevate your digital presence with our software engineering expertise. From custom application development to intricate coding solutions and 
                AI integration, we craft robust and scalable software tailored to your unique business and personal needs, ensuring seamless user experiences and unparalleled performance.
              </p>
              </div>
              <div className='py-2 flex justify-center'>
            <Link to='/contact'>
              <Button label="Develop a Software" className='shadow-2xl'/> 
            </Link>
          </div>
            </div>
            <div className="mx-4 mb-6">
              <img
                src={B_C} // Replace with your feature icon path
                alt="Feature Icon-2"
                className="w-60 h-30 mr-4 rounded-lg mb-3 shadow-2xl mx-20 md:mx-3"
              />
              <div className="bg-indigo-950 bg-opacity-60 py-4 rounded-lg shadow-2xl">
              <p className='font-extrabold text-lg md:text-xl text-cyan-100'>Blockchain Development</p>
              <p className='font-semibold'>Enter the world of decentralized innovation with our blockchain development services. We harness the power of blockchain technology to create secure,
                and temper-proof solutions utilizing best practises, enabling you to revolutionalize industries, streamline processes and redefine trust.
              </p>
              </div>
              <div className='py-2 flex justify-center'>
            <Link to='/contact'>
              <Button label='Unlock Blockchain Magic' className='shadow-2xl'/> 
            </Link>
          </div>
            </div>
            <div className="mx-4 mb-6">
              <img
                src={W_D} // Replace with your feature icon path
                alt="Feature Icon-3"
                className="w-60 h-30 mr-4 rounded-lg mb-3 shadow-2xl mx-20 md:mx-3"
              />
              <div className="bg-indigo-950 bg-opacity-60 py-4 rounded-lg shadow-2xl">
              <p className='font-extrabold text-lg md:text-xl text-cyan-100'>Web Development</p>
              <p className='font-semibold'>Immerse your audience in captivating online experience through our web development prowess. Our team crafts visually stunning and functionally dynamic 
                websites that resonate with your brand's essence,encouraging users and driving meaningful interactions.
              </p>
              </div>
              <div className='py-2 flex justify-center'>
            <Link to='/contact'>
              <Button label="Build your web brand" className='shadow-2xl'/> 
            </Link>
          </div>
            </div>
            <div className="mx-4 ">
              <img
                src={M_E} // Replace with your feature icon path
                alt="Feature Icon-4"
                className="w-60 h-30 mr-4 rounded-lg mb-3 shadow-2xl mx-20 md:mx-3"
              />
              <div className="bg-indigo-950 bg-opacity-60 py-4 rounded-lg shadow-2xl">
              <p className='font-extrabold text-lg md:text-xl text-cyan-100'>Mentorship</p>
              <p className='font-semibold'>Embark on your tech journey with confidence with our mentorship program. Our experinnced mentors provide guidance, knowledge and real-world insights,
                nurturing your skills and helping you navigate the dynamic tech landscape with finesse.
              </p>
              </div>
            <div className='py-2 flex justify-center'>
            <Link to='/contact'>
              <Button label='Improve my skill' className='shadow-2xl'/> 
            </Link>
          </div>
            </div>
          </div>
          
        </div>
      </div>  
    );
}