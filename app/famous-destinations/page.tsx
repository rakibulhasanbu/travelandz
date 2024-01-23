import FamousGallery from "../components/famous-destinations/FamousGallery";
import MobileCheckout from "../components/famous-destinations/MobileCheckout";
import Overview from "../components/famous-destinations/Overview";

export default function FamousDestinationPage() {
    return (
        <div className='container mx-auto px-4 lg:px-0'>
            <FamousGallery />
            <Overview />
            <MobileCheckout />
        </div>
    );
};
