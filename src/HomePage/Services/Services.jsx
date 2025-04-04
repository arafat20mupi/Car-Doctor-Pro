"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "./ServicesCard";
import { Loader2 } from "lucide-react";

const getService = async () => {
    const response = await axios.get(`/api/services`);
    return response.data;
};

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const data = await getService();
                setServices(data.data);
            } catch (error) {
                console.error("Error fetching services:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchServices();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen text-orange-600">
                <Loader2 className="animate-spin w-8 h-8" />
                <span className="ml-2">Loading...</span>
            </div>
        );
    }

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
                {services.map((service) => (
                    <ServiceCard key={service._id} service={service} />
                ))}
            </div>
        </div>
    );
};

export default Services;
