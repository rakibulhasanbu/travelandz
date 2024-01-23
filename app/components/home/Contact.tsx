import { MdArrowOutward } from "react-icons/md";

export default function Contact() {
    return (
        <div id="contact" className='py-20 lg:py-44 lg:px-64 px-4'>
            <h1 className="text-2xl lg:text-4xl font-bold pb-4 lg:pb-6 text-center">How Can We Help?</h1>
            <p className="lg:text-lg pb-12 text-center">Travelandz is an AI trip planner that uses the tools of travel agencies, allowing it to offer the best price for hotels and activities available.</p>

            <form className="bg-white rounded-3xl p-8 space-y-4 lg:mx-32 shadow">
                <div className='space-y-1'>
                    <label className="font-medium" htmlFor="name">Your name</label>
                    <input type="text" id="name" placeholder="Your name" className="w-full py-2 rounded-full px-4 border border-darkish/10 shadow" />
                </div>
                <div className='space-y-1'>
                    <label className="font-medium" htmlFor="number">Phone number</label>
                    <input type="text" id="number" placeholder="Your Phone number" className="w-full py-2 rounded-full px-4 border border-darkish/10 shadow" />
                </div>
                <div className='space-y-1'>
                    <label className="font-medium" htmlFor="address">Email address</label>
                    <input type="text" id="address" placeholder="Your Email address" className="w-full py-2 rounded-full px-4 border border-darkish/10 shadow" />
                </div>
                <div className='space-y-1'>
                    <label className="font-medium" htmlFor="Message">Message</label>
                    <textarea rows={5} id="Message" placeholder="Type Your Message" className="w-full py-2 rounded-xl px-4 border border-darkish/10 shadow" />
                </div>
                <div className='w-full'>
                    <button className="w-full text-lg px-8 py-2 rounded-full font-semibold bg-gradient-to-r from-[#DD727D] to-[#582B2F] text-white flex items-center justify-center gap-2" >Send Inquiry <MdArrowOutward className="text-white text-lg" /></button>
                </div>
            </form>
        </div>
    );
};
