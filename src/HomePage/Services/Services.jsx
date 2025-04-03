
import axios from "axios";
import ServiceCard from "./ServicesCard";
const getService = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/services`)
    return response.data;
}
const Services = () => {
    const services = getService()
    console.log(services);
    return (
        <div className="mt-4 container mx-auto">
            <div className="text-center flex flex-col justify-center gap-2 items-center mb-10">
                <h3 className="text-2xl font-bold text-orange-600">Service</h3>
                <h2 className="text-5xl">Our Service Area</h2>
                <p className="w-1/2">
                    The majority have suffered alteration in some form, by injected humour, or randomised
                    words which do not look even slightly believable.
                </p>
            </div>
            {
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map(service => (
                        <ServiceCard key={service._id} service={service} />
                    ))}
                </div>
            }
        </div>
    );
};

export default Services;
