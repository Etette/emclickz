import { Link } from "react-router-dom";
const {Button} = require('../common/button');
const { AiOutlineAntCloud } = require('react-icons/ai');

export const Home = () => {
    return (
        <div className="bg-[url('./assets/home.gif')] bg-cover md:bg-bottom shrink-0 h-auto">
        {/* Header Section */}
        <div className=" text-white text-center py-2 md:py-10">
            <div className="container mx-auto bg-[url('./assets/home1.gif')] bg-cover shrink-0 mb-4 rounded-lg shadow-2xl">
             <h1 className="text-6xl md:text-8xl font-serif font-extrabold p-2 pb-1"><span className="bg-indigo-900 bg-opacity-50">Em<span className="text-cyan-300 ">Clickz</span></span></h1>
             <p className="text-2xl md:text-4xl text-cyan-200 font-serif font-extrabold  mb-3"><span className="bg-indigo-900 bg-opacity-70">MetaClickz</span></p>
             <Link to="/features">
             <button className="bg-sky-300 text-blue-900 px-8 py-3 mb-2 rounded-full font-bold hover:bg-indigo-800 hover:text-white transition duration-300">
                 <span className="flex items-center gap-1">Explore <AiOutlineAntCloud/></span>
            </button>
             </Link>
            </div>
            <div className="container mx-auto bg-slate-950 bg-opacity-50 h-auto rounded-xl">
             {/* <h1 className="text-2xl font-serif font-extrabold py-4 bg-slate-950 bg-opacity-70 rounded-xl">WHAT WE DO/WHO WE ARE</h1> */}
             <p className=" text-lg md:text-xl font-bold font-sans px-3 py-5 text-justify text-cyan-100"><em>Em<span className="text-sky-600">Clickz</span></em> is an innovative and dynamic technology firm poised to
             revolutionalize the industry. we deliver cutting-edge solutions that address pressing challenges
              and enpower businesses to thrive in this digital era.<br/>
              Our focus lies in software development, blockchain development, web development and mentorship for
              aspiring techies. leaveraging advanced technologies such as artificial intelligence, blockchain advanced cloud computing, <em className="font-extrabold">Em<span className="text-sky-600">Clickz</span></em> aims to deliver high-performance, scalable and secure solutions to our clients.<br/><br/>
               At <em>Em<span className="text-sky-600">Clickz</span></em>, we pride ourselves on our talented and diverse team of experts who possess a deep understanding
               of existing and emerging technologies and market trends. this expertise allows us to stay ahead
               of the competition and deliver innovative products and services with a focus on customer satisfaction.
               <br/><br/>  <em>Em<span className="text-sky-600">Clickz</span></em> is well-positioned to disrupt the tech industry with our innovative solutions and forward
               -thinking approach. we are committed to driving digital transformation for our clients and creating
               long-term value for our partners and stakeholders.<br/>
               Join Us on this exciting journey as we reshape the future of technology.
               </p>
               <div>
               <Link to='/about'><Button label="More About Us" /></Link>
               </div>
            </div>
      </div>
    </div>
    );
};