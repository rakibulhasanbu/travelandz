import { FaRegCircleCheck } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { SlArrowDown } from "react-icons/sl";
import CollapseSection from "./CollapseSection";

export default function Overview() {
    const facilityData = [
        {
            text: "24/7 Front desk"
        },
        {
            text: "Valet parking"
        },
        {
            text: "Swimming pool"
        },
        {
            text: "Golf park"
        },
        {
            text: "Airport pickup"
        },
        {
            text: "Spa and Gym"
        },
        {
            text: "Free WiFi all rooms"
        },
    ]
    return (
        <div className='flex gap-6'>
            {/* Overview section here  */}
            <div className='w-8/12'>
                <h2 className="text-2xl font-bold pb-6">Overview</h2>
                <div className='space-y-3 text-[#3C3C43] text-lg'>
                    <p>
                        Fuga omnis consequuntur quia cupiditate aut nulla. Blanditiis quam veritatis. Commodi quia eum quia asperiores aliquid id. Officia explicabo fugit sequi ipsa ut quo repellat. Quidem magni adipisci non voluptate modi modi et earum unde. Soluta consectetur eos eos ea vel mollitia consequatur qui ut.
                    </p>
                    <p>
                        Ut dolorem consequatur eligendi. Consectetur commodi ratione. Commodi fuga numquam aut deleniti hic. Commodi dolor excepturi et occaecati voluptas voluptatem. Minus dolorem exercitationem. Fugiat quia omnis odit doloremque hic animi. Dolorem vel facilis quisquam illum modi beatae. Impedit sunt consectetur sed libero exercitationem exercitationem. Et et sunt. Et omnis in. Aut qui optio enim beatae excepturi ipsum facere non.
                    </p>
                </div>
                <hr className="text-borderColor my-10" />
                <div className=''>
                    <h2 className="text-textDark text-2xl pb-6 font-bold">Facilities</h2>
                    <div className='grid grid-cols-4 gap-y-6'>
                        {
                            facilityData.map((facility, index) => (
                                <div key={index} className='flex items-center gap-4'>
                                    <FaRegCircleCheck className="text-[#3C3C43]" />
                                    <p className="text-[#3C3C43]">{facility?.text}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='pt-10 pb-40'>
                    <h3 className="text-3xl font-bold text-textDark pb-4">Personalized Recommendations For You</h3>
                    <p>I have added recommended experiences for you, please feel free to add or remove new ones.</p>
                    <div className='py-10 space-y-6'>

                        <CollapseSection />
                        <CollapseSection />
                        <CollapseSection />
                    </div>
                </div>
            </div>
            {/* checkout section here  */}
            <div className='w-4/12 h-fit rounded-2xl space-y-4 bg-white border border-borderColor shadow-md p-6'>
                <h3 className="text-lg font-bold">$25 per night</h3>
                <div className='rounded-2xl flex border border-borderColor'>
                    <div className='w-1/2 px-4 py-3.5 space-y-2'>
                        <h4 className="font-medium">Check-in</h4>
                        <p className="text-lg">03 June 2023</p>
                    </div>
                    <div className='w-1/2 px-4 py-3.5 space-y-2 border-l border-l-borderColor p-6'>
                        <h4 className="font-medium">Check-out</h4>
                        <p className="text-lg">06 June 2023</p>
                    </div>
                </div>
                <div className='rounded-2xl px-4 py-3.5 flex items-center justify-between border border-borderColor'>
                    <div className='space-y-2'>
                        <h4 className="font-medium">Guests</h4>
                        <p className="text-lg">2 adults</p>
                    </div>
                    <SlArrowDown className="text-2xl text-textDark" />
                </div>
                <div className='rounded-2xl px-4 py-3.5 flex items-center justify-between border border-borderColor'>
                    <div className='space-y-2'>
                        <h4 className="font-medium">Room type</h4>
                        <p className="text-lg">Deluxe room</p>
                    </div>
                    <FiPlus className="text-2xl text-textDark" />
                </div>
                <div className='my-4 flex items-center gap-4 p-1.5 shadow-lg bg-[#F6F6F6] rounded-full'>
                    <div className='w-1/2 border border-borderColor bg-white py-2 text-center rounded-full'>
                        Hotel only
                    </div>
                    <p className="font-medium text-[#8E8E92]">Hotel + Experiences</p>
                </div>

                <div className='flex items-center justify-between'>
                    <h4 className="text-textDark text-4xl font-bold">$75</h4>
                    <p className="text-[#8E8E92]">Tax will calculate in checkout</p>
                </div>
                <div className='py-4'>
                    <button className="button w-full" >Checkout Hotel</button>
                </div>
                <h4 className="text-textDark text-center">Free Cancellation until 2023-06-03</h4>
            </div>
        </div>
    );
};
