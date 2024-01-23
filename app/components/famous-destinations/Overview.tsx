import { FaRegCircleCheck } from "react-icons/fa6";
import CollapseSection from "./CollapseSection";
import CheckoutSection from "./CheckoutSection";

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
        <div className='flex flex-col lg:flex-row gap-6'>
            {/* Overview section here  */}
            <div className='w-full lg:w-8/12'>
                <h2 className="text-2xl font-bold pt-4 lg:pt-0 pb-6">Overview</h2>
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
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-y-6'>
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

                <div className='pt-10 pb-10 lg:pb-40'>
                    <h3 className="text-2xl lg:text-3xl font-bold text-textDark pb-4">Personalized Recommendations For You</h3>
                    <p>I have added recommended experiences for you, please feel free to add or remove new ones.</p>
                    <div className='py-10 space-y-6'>

                        <CollapseSection day="Day 1" date="03 June 2023" />
                        <CollapseSection day="Day 2" date="04 June 2023" />
                        <CollapseSection day="Day 3" date="05 June 2023" />
                        <CollapseSection day="Day 4" date="06 June 2023" />
                    </div>
                </div>
            </div>
            {/* checkout section here  */}
            <CheckoutSection />
        </div>
    );
};
