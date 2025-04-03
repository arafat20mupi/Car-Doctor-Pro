"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "./ServicesCard";

const Services = () => {
    const [services, setServices] = useState([]);
    console.log(services);
    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/services`);
                setServices(response.data.data); // Assuming the API response structure
            } catch (error) {
                console.error("Error fetching services:", error);
            }
        };
        fetchServices();
    }, []);

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.slice(0, 6).map(service => (
                    <ServiceCard key={service._id} service={service} />
                ))}
            </div>
        </div>
    );
};

export default Services;
