import { Link } from 'react-router-dom';
const {Button} = require('../common/button');

// avatar
const MT = require('../assets/MT2.jpg');
const AKB = require('../assets/Eja.jpg');
const HAP = require('../assets/Hap.jpg');
const AFP = require('../assets/aftPrep.png');
const VDF = require('../assets/VDF.jpeg');

// load variables
const REACT_APP_AKIBA_ETOK = process.env.REACT_APP_AKIBA_ETOK;
const REACT_APP_MT = process.env.REACT_APP_MT;
const REACT_APP_WOMI = process.env.REACT_APP_WOMI;
const REACT_APP_AFT_PREP = process.env.REACT_APP_AFT_PREP;
const REACT_APP_VDV = process.env.REACT_APP_VDV;



export const Testimonial = () => {
    return (
    <div className="bg-[url('./assets/dkglope.gif')] bg-contain h-fit p-5">
        <div className="container mx-auto bg-indigo-950 bg-opacity-80 py-16 rounded-lg mb-3 shadow-xl">
          <h2 className="text-3xl font-bold font-serif text-center text-blue-200 mb-8">Testimonials</h2>
          <div className="md:flex   md:justify-around gap-3 md:gap-0">
            <div className="max-w-lg bg-indigo-950 rounded-lg shadow-2xl p-8 mb-5 md:mb-0">
              <div className="mb-4">
                <img
                  src={AKB}
                  alt="AKB avater"
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />
                <p className="text-white text-center">"Through their unparalleled technical expertise and innovative solutions, EmClickz has transformed our business,
                propelling us to new heights of success in the rapidly evolving digital landscape" </p>
              </div>
              <p className="text-blue-200">- <Link to={REACT_APP_AKIBA_ETOK} target='_blank' className='underline text-cyan-200'>Akiba Etok </Link><br/>
              <em>Co-founder </em><Link to={REACT_APP_MT} target='_blank' className='underline 
              font-bold text-cyan-300'>
                MT2
              </Link>
              </p>
            </div>
            <div className="max-w-lg bg-indigo-950 rounded-lg shadow-2xl p-8">
              <div className="mb-4">
                <img
                  src={HAP}
                  alt="Customer Avatar"
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />
                <p className="text-white text-center">"EmClickz totally levelled up my tech game with their mind-blowing skills and game-changing solutions.<br/>
                They've got that magical touch and now i'm soaring to the top!!"</p>
              </div>
              <p className="text-blue-200">- <Link to={REACT_APP_WOMI} target='_blank' className='underline text-cyan-200'>Happiness Uket </Link><br/>
              <em>Content Creator <span className='text-sm'>&</span> Virtual Assistant </em><Link to={REACT_APP_WOMI} target='_blank' className='underline 
              font-bold text-cyan-300'>
                LinkedIn
              </Link>
              </p>
            </div>
            {/* <div className="max-w-lg bg-indigo-950 rounded-lg shadow-2xl p-8">
              <div className="mb-4">
                <img
                  src={HAP}
                  alt="Customer Avatar"
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />
                <p className="text-white">"Great experience with your tech product."</p>
              </div>
              <p className="text-blue-200">- <Link to='' className='underline text-cyan-200'>Happiness Uket </Link><br/>
              <em>Content Creator </em><Link to='' className='underline 
              font-bold text-cyan-300'>
                TikTok
              </Link>
              </p>
            </div> */}
          </div>
        </div>
        <div className="container mx-auto bg-indigo-950 bg-opacity-60 py-16 rounded-lg mb-1 shadow-2xl">
          <div className='w-11/12 mx-auto py-2 rounded-lg flex justify-center bg-indigo-900
          bg-opacity-50 shadow-2xl mb-5'>
          <h2 className="text-3xl font-bold font-serif text-center text-blue-200">Partners</h2>
          </div>
          <div className="md:flex  md:justify-center gap-1 md:gap-3 mb-4">
            <div className="max-w-lg mb-5 md:mb-0 md:max-w-sm bg-indigo-900 bg-opacity-80 rounded-lg shadow-2xl p-6">
              <div className="mb-4">
                <img
                  src={MT}
                  alt="MT2 logo"
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />
                <p className="text-white text-center">"Revolutionalized our fashion game with innovative cutting-edge technical solutions.<br/>Happy to partner with Emclcickz".</p>
              </div>
              <p className='text-white'>- <Link to={REACT_APP_MT} target='_blank' className=" text-cyan-300 font-bold underline">MT2</Link>
              </p>
            </div>
            <div className="max-w-lg mb-5 md:mb-0 md:max-w-sm bg-indigo-900 bg-opacity-80 rounded-lg shadow-2xl p-8">
              <div className="mb-4">
                <img
                  src={AFP}
                  alt="Customer Avatar"
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />
                <p className="text-white">"Your intrinsic contribution on afternoonprep.com is highly appreciated.<br/>Great experience with your tech service."</p>
              </div>
              <p className='text-white'>- <Link to={REACT_APP_AFT_PREP} target='_blank' className="text-cyan-300 font-bold underline">Afternoonprep</Link>
              </p>
            </div>
            <div className="max-w-lg mb-5 md:mb-0 md:max-w-sm bg-indigo-900 bg-opacity-80 rounded-lg shadow-2xl p-8">
              <div className="mb-4">
                <img
                  src={VDF}
                  alt="Customer Avatar"
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />
                <p className="text-white">"With their consistent innovations and Immerse technical web2 & web3 solutions in the tech space, we utilize and highly recommend EmClickz"</p>
              </div>
              <p className='text-white'>- <Link to={REACT_APP_VDV} className="text-cyan-300 font-bold underline">VenderVault</Link>
              </p>
            </div>
          </div>
          <div className='w-11/12 mx-auto py-2 rounded-lg flex justify-center '>
            <Link to='/contact'>
              <Button label='Partner with EmClickz' />
            </Link>
          </div>
        </div>
        {/* <div className='bg-transparent flex justify-center rounded-lg shadow-xl'>
          <Link to='/contact'>
          <button className="bg-blue-400 text-neutral-900 px-8 py-3 rounded-full font-bold hover:bg-blue-200 shadow-lg transition duration-300 mb-1">
            <span className='animate-pulse'>book an appointment</span>
          </button>
          </Link>
        </div> */}
    </div>
    );
}