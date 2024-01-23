import Image from "next/image";
import heroImage from '../../assets/hero.png'

export default function Hero() {
    return (
        <div className='relative lg:pt-6 '>
            <Image placeholder="blur" src={heroImage} height={660} width={1280} alt="hero" className="h-[110vh] lg:h-[90dvh] w-full object-cover lg:rounded-3xl" />
            <div className='absolute top-0 left-0 bg-transparent w-full h-full px-4 py-12 lg:p-28 text-center'>
                <h2 className="text-white text-3xl lg:text-5xl font-bold lg:px-24 pb-5">Experience Wanderlust at its Finest with AI-Powered Travel Planner</h2>
                <h4 className="text-white">Discover the best prices, secure your mobile tickets, and set off on a journey of a lifetime.</h4>
                {/* form section here  */}
                <div className='bg-white rounded-2xl px-4 py-5 lg:p-6 mt-10 lg:mt-14'>
                    <div className='flex items-center gap-6 border-b border-greyish'>
                        <p className="font-medium border-b-secondary border-b">Business Trip</p>
                        <p className="text-darkish/50">Vacationing</p>
                    </div>
                    <div className='flex  flex-col lg:flex-row gap-6 pt-5 pb-2'>
                        <div className='w-full lg:w-[26%] flex flex-col  items-start justify-start'>
                            <p className="font-medium">Destination</p>
                            <input type="text" placeholder="What is your destination" className="w-full py-2 rounded-full px-4 border border-darkish/10 shadow" />
                        </div>
                        <div className='w-full lg:w-[18%] flex flex-col  items-start justify-start'>
                            <p className="font-medium">Check-in</p>
                            <input type="text" placeholder="DD/MM/YYYY" className="w-full py-2 rounded-full px-4 border border-darkish/10 shadow" />
                        </div>
                        <div className='w-full lg:w-[18%] flex flex-col  items-start justify-start'>
                            <p className="font-medium">Check-out</p>
                            <input type="text" placeholder="DD/MM/YYYY" className=" w-full py-2 rounded-full px-4 border border-darkish/10 shadow" />
                        </div>
                        <div className='w-full lg:w-[18%] flex flex-col  items-start justify-start'>
                            <p className="font-medium">Guests</p>
                            <input type="text" placeholder="1" className="w-full py-2 rounded-full px-4 border border-darkish/10 shadow" />
                        </div>
                        <div className='w-full lg:w-[20%] flex items-end justify-end h-16'>
                            <button className="w-full px-8 py-2.5 rounded-full font-semibold bg-gradient-to-r from-[#DD727D] to-[#582B2F] text-white" >Explore Plans</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
