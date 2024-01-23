import Image from "next/image";
import eventImage from '../../assets/event.png'

export default function EventCard() {
    return (
        <div className='max-w-sm'>
            <Image src={eventImage} width={384} height={140} alt="event image" className="rounded-t-2xl" />
        </div>
    );
};
