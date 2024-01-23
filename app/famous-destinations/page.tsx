import FamousGallery from "../components/famous-destinations/FamousGallery";
import Overview from "../components/famous-destinations/Overview";

export default function FamousDestinationPage() {
    return (
        <div className='container mx-auto'>
            <FamousGallery />
            <Overview />
        </div>
    );
};
