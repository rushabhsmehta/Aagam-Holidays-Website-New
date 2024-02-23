'use client'
import Image from 'next/image';

export default function ContactUs() {
    return (
        <div className="w-[350px] container mx-auto my-10 p-4 bg-gray-50 shadow-2xl rounded-lg">
            <div className="md:flex md:space-x-6">
                <div className="md:flex-1">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h2>
                    <p className="mb-6 text-gray-600">Feel free to contact us any time. We will get back to you as soon as we can!</p>
                    <form>
                        <div className="mb-2">
                            <input className="shadow-sm focus:ring-2 focus:ring-indigo-500 border rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none" id="name" type="text" placeholder="Your Name" />
                        </div>
                        <div className="mb-2">
                          
                            <input className="shadow-sm focus:ring-2 focus:ring-indigo-500 border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none" id="phone" type="tel" placeholder="Phone Number" />
                        </div>

                        <div className="mb-2">                         
                            <input className="shadow-sm focus:ring-2 focus:ring-indigo-500 border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none" id="email" type="email" placeholder="Email" />
                        </div>
                        <div className="mb-2">
                           
                            <textarea className="shadow-sm focus:ring-2 focus:ring-indigo-500 border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none" id="message" rows={4} placeholder="Your message"></textarea>
                        </div>
                        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition ease-in-out duration-150" type="button">
                            Send
                        </button>
                    </form>
                </div>
                
            </div>
        </div>
    );
}
