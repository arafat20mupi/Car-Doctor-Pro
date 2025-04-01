"use client";
import { useEffect, useState } from "react";
import ServiceCard from "./ServicesCard";

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services`)
            .then(res => {
                if (!res.ok) throw new Error("Failed to fetch services");
                return res.json();
            })
            .then(data => {
                setServices(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
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

            {loading && <p className="text-center text-lg">Loading services...</p>}
            {error && <p className="text-center text-red-500">Error: {error}</p>}

            {!loading && !error && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map(service => (
                        <ServiceCard key={service._id} service={service} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Services;
