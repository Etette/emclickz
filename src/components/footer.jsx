// import {AiFillCopyrightCircle} from 'react-icons/ai'


// const year = (date) => {
//     return new Intl.DateTimeFormat(
//         'en-us',
//         {year: 'numeric'},
//         // {weekday: 'long'},
//     ).format(date);
// }

// export const Footer = () => {
//     const today = new Date()
//     return (
//         <footer className="h-fit bg-blue-400 flex justify-center gap-4 font-semibold text-white">
//             <AiFillCopyrightCircle/>
//             <p className="p-1 text-neutral-950 font-bold"> {year(today)} All Rights Reserved |</p>
//             <p className="p-1 font-bold animate-pulse">poweredBy <em>EmClickz</em></p>
//         </footer>
//     );
// }

import { AiFillCopyrightCircle } from 'react-icons/ai';

// helper to get year
const day = (date) => {
    return new Intl.DateTimeFormat(
        'en-us',
        {year: 'numeric'},
        // {weekday: 'long'},
    ).format(date);
}

export const Footer = () => {
    const today = new Date()
    return (
        <footer className="h-auto max-w-screen bg-indigo-950 bg-opacity-90 shadow-md text-white">
            <div className="">
                <ul className="flex justify-center items-center py-1">
                    <li>
                        <ul className='flex items-center gap-1 font-semibold'>
                            <li><AiFillCopyrightCircle/> </li>
                            <li className='font-serif text-xs md:text-sm'>{day(today)} |</li>
                        </ul>
                    </li>
                    <li className="font-serif text-xs md:text-sm font-semibold">All Rights Reserved </li>
                    <li className="font-semibold mx-4"><i className="text-sm text-blue-400">...PoweredBy</i> <em className="animate-pulse"><b>Em<span className='text-blue-700'>Clickz</span></b></em></li>
                </ul>
            </div>
        </footer>
    );
}