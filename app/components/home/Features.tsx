import FeatureCard from "./FeatureCard";
import rating from '../../assets/rating.png';
import gear from '../../assets/gear.png';
import calender from '../../assets/calendar.png';

export default function Features() {

    const featureCardData = [
        {
            image: gear,
            title: "Personalized Planning",
            description: "Our AI-driven platform crafts unique travel plans tailored to your preferences, ensuring a unique experience that suits you. Share your plans with the Travelandz community to receive valuable suggestions and ideas from fellow travelers."
        },
        {
            image: calender,
            title: "Real-time Availability",
            description: "Stay up-to-date with the latest information on hotels, attractions, and transportation. Our AI travel planning platform connects to real-time systems, allowing you to effortlessly plan and book every aspect of your unique AI vacation itinerary with confidence."
        },
        {
            image: rating,
            title: "User-friendly Interface",
            description: "Navigating our AI travel planner is a breeze, thanks to our intuitive design. We've created a seamless user experience that simplifies the planning process, allowing you to focus on creating unforgettable vacation's memories with AI trip planner."
        },
    ]

    return (
        <div className='py-44  text-textDark'>
            <div className='max-w-4xl space-y-6 text-center mx-auto'>
                <h1 className="text-[40px] font-bold px-24">Unparalleled Features for Effortless AI Trip Planning</h1>
                <p className="text-lg">Travelandz is an AI trip planner that uses the tools of travel agencies, allowing it to offer the best price for hotels and activities available.</p>
            </div>
            <div className='mt-14 grid grid-cols-3 gap-6'>
                {
                    featureCardData.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} />
                    ))
                }
            </div>
        </div>
    );
};
