
const {ContactForm} = require('../common/contactForm');

export const Contact = () => {
    return (
        <div className='w-full bg-[url("./assets/feature_bg.jpeg")] bg-cover bg-bottom md:bg-center'>  
        <ContactForm/>
       <div className='container bg-indigo-950 bg-opacity-80 text-cyan-100 mx-auto rounded-md'>
       <p className='mx-1 py-2 font-semibold text-lg md:text-xl text-center'>
            Thank you for your message and feedback.<br/> Your feedback will help us better serve you
        </p>
       </div>
        </div>
    )
}

