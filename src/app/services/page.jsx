"use client"
import ServiceCard from "@/HomePage/Services/ServicesCard";
import axios from "axios";
import { useEffect, useState } from "react";

const ServicesPage = () => {
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
                <h2 className="text-5xl text-orange-600">Our Service </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map(service => (
                    <ServiceCard key={service._id} service={service} />
                ))}
            </div>
        </div>
    );
};

export default ServicesPage;
