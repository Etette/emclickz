import React, { useEffect, useState} from "react";
const {FormBanner} = require('./formBanner');

// load .env
const REACT_APP_FORMS_PREE = process.env.REACT_APP_FORMS_PREE;


// icons
const {AiFillPhone} = require('react-icons/ai');
const {AiFillMail} = require('react-icons/ai');
const {AiTwotonePicture} = require('react-icons/ai');
const {BiBook} = require('react-icons/bi');
const {BiBookContent} = require('react-icons/bi');



export const ContactForm = () => {
    const initial_form_data = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    }

    // form states
    const [FormData, setFormData] = useState(initial_form_data);
    const [isSending, setIsSending] = useState(false);
    const [showBanner, setShowBanner] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData, [name]: value
        }));
        // console.log(FormData)
    };

    // const reloadForm = () => {
    //     return setTimeout(() => {
    //         setIsSending(false);
    //       }, 3000);
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);
       

        const formEndPoint = REACT_APP_FORMS_PREE;

        setTimeout(async () => {
            try {
                const res = await fetch(formEndPoint, {
                    method: 'POST',
                    headers:  {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(FormData)
                });
                if(!res) {
                    console.log('couldnt fetch response');
                    return false // alert data not sent
                }
                console.log("Successfull")
                return true;
            } catch (err) {
                return {success: false, msg: "Handlle submit failed", error: err};
            }
        }, 2500);

        setShowBanner(true);
        setFormData(initial_form_data);
        setIsSending(false);
        setTimeout(()=> setShowBanner(false), 5000);

    };

    useEffect(() => {
        if(isSending) {
            document.activeElement.blur();
        }
    }, [isSending]);

    return (
        <div>
        <form className="bg-indigo-950 bg-opacity-50 md:bg-opacity-70 m-4 md:m-8 p-6 shadow-md rounded-md" onSubmit={handleSubmit}>
            <p className='font-semibold mb-3 text-lg md:text-2xl text-cyan-100 text-clip text-center'>We value and appreciate you reaching out to us.<br/> Our dedicated customer service will respond to you in a few minutes.</p>
            <hr className="py-1 mb-3 shadow-xl"/>
            <div className="mb-4">
                <label htmlFor="name" className="text-cyan-100 font-bold font-serif mb-1 flex gap-2">Name <span className="py-1"><AiTwotonePicture/></span>
                    <label className="text-red-600">*</label>
                    
                </label>
                <input
                 type="text"
                 id="name"
                 name="name"
                 placeholder="Enter your name"
                 value={FormData.name}
                 onChange={handleChange} required
                 className="w-full bg-transparent border text-black border-teal-300 rounded-md py-2 px-3
                 focus:outline-sky-700 focus:bg-blue-200"/>
            </div>

            <div className="mb-4"> 
                <label htmlFor="email" className="text-cyan-100 font-bold font-serif mb-1 flex gap-2">Email <span  className="py-1">
                    <AiFillMail/>
                    </span>
                    <label className="text-red-600"> *</label>
                    
                </label>
                <input
                 type="email"
                 id="email"
                 name="email"
                 placeholder="example@example.com"
                 value={FormData.email}
                 onChange={handleChange} required
                 className="w-full bg-transparent border focus:bg-blue-200 border-teal-300 text-black rounded-md py-2 px-3 focus:outline-sky-700" />
                 
            </div>

            <div className="mb-4">
                <div className="flex justify-between">
                <label htmlFor="phone" className="text-cyan-100 flex gap-2 font-bold mb-1 font-serif">phone <span className="py-1"><AiFillPhone/></span></label>
                <em className="font-medium text-sm text-cyan-200 px-4"> optional</em>
                </div>
                <input
                 type="number"
                 id="phone"
                 name="phone"
                 placeholder="+234-XXX-XXX-XXXX"
                 value={FormData.phone}
                 onChange={handleChange}
                 className="w-full border bg-transparent focus:bg-blue-200 border-teal-300 text-black rounded-md py-2 px-3 focus:outline-sky-700" />
            </div>
            <div className="mb-4">
                <label htmlFor="subject" className="text-cyan-100 gap-2 font-bold font-serif mb-1 flex">subject <span className="py-1"><BiBook/></span>
                    <label className="text-red-600"> *</label>
                </label>
                
                <input
                 type="text"
                 id="subject"
                 name="subject"
                 placeholder=""
                 value={FormData.subject}
                 onChange={handleChange} required
                 className="w-full border bg-transparent focus:bg-blue-200 border-teal-300 text-black rounded-md py-2 px-3 focus:outline-sky-700"/>
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="flex gap-2 font-bold mb-1 text-cyan-100">message<span className="py-1"><BiBookContent/></span>
                <label className="text-red-600"> *</label>
                </label>
                <textarea
                 id="message"
                 name="message"
                 value={FormData.message}
                 onChange={handleChange} 
                 className="w-full border bg-transparent focus:bg-blue-200 border-teal-300 text-black rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                 required/>
            </div>
            <div className="flex justify-center">
            <button
            type="submit"
            disabled={isSending}
            // onClick={handleSubmit} // onclick change button text to sending and then sent when sent. reload  form field after 5secs
            className="bg-blue-300 text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-blue-900 hover:text-white  transition duration-300">
                {
                    isSending ? 'Sending' : 'Send'
                }
            </button>
            </div>
        </form>
        {showBanner && <FormBanner msg="message was sent successfully!" />}
        </div>
    );
}

