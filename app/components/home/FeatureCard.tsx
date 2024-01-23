import Image, { StaticImageData } from "next/image";

interface TFeature {
    feature: {
        image: StaticImageData,
        title: string;
        description: string
    }
}

export default function FeatureCard({ feature }: TFeature) {
    return (
        <div className='p-6 rounded-xl bg-white shadow'>
            <Image src={feature?.image} width={42} height={42} alt="icon" />
            <h1 className="pb-6 pt-8 text-textDark font-bold text-2xl">{feature?.title}</h1>
            <p className="text-[#3C3C43] text-lg">{feature?.description}</p>
        </div>
    );
};
