"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Loader2, BadgeCheck, Download, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ServiceDetailsPage = () => {
    const { id } = useParams();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchService = async () => {
            try {
                const res = await fetch(`/api/services/${id}`);
                const result = await res.json();
                if (result.success) {
                    setService(result.data);
                }
            } catch (error) {
                console.error("Failed to fetch service:", error);
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchService();
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen text-orange-600">
                <Loader2 className="animate-spin w-8 h-8" />
                <span className="ml-2">Loading...</span>
            </div>
        );
    }

    if (!service) {
        return <div className="text-center mt-10 text-red-500">Service not found</div>;
    }

    return (
        <div className="container mx-auto py-12 px-4 flex flex-col md:flex-row gap-8">
            {/* Left Content */}
            <div className="md:w-3/4 w-full bg-white shadow-lg rounded-2xl p-8">
                <Image
                    width={600}
                    height={400}
                    src={service.img}
                    alt={service.title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h1 className="text-3xl font-bold text-orange-600 mb-4">{service.title}</h1>
                <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>

                {/* Facilities */}
                <h2 className="text-xl font-semibold text-orange-500 mb-4">Facilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.facility.map((item) => (
                        <div key={item._id} className="border p-4 rounded-lg shadow-sm">
                            <div className="flex items-start space-x-2">
                                <BadgeCheck className="text-orange-500 mt-1" />
                                <div>
                                    <p className="text-gray-800 font-medium">{item.name}</p>
                                    <p className="text-sm text-gray-600">{item.details}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Sidebar */}
            <div className="md:w-1/4 w-full space-y-6">
                {/* Services List */}
                <div className="bg-white shadow-lg rounded-lg p-4">
                    <h3 className="text-xl font-semibold text-orange-600 mb-3">Services</h3>
                    <ul className="space-y-2">
                        {["Full Car Repair", "Engine Repair", "Automotive Services", "Engine Oil Change", "Battery Charge"].map((service) => (
                            <li key={service} className="bg-orange-100 p-2 rounded-lg flex justify-between items-center">
                                {service}
                                <ChevronRight className="w-4 h-4 text-orange-600" />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Download Section */}
                <div className="bg-black text-white p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">Download</h3>
                    <div className="space-y-2">
                        <button className="flex items-center bg-orange-600 px-4 py-2 rounded-lg w-full">
                            <Download className="mr-2" /> Our Brochure
                        </button>
                        <button className="flex items-center bg-orange-600 px-4 py-2 rounded-lg w-full">
                            <Download className="mr-2" /> Company Details
                        </button>
                    </div>
                </div>

                {/* Car Doctor Promo */}
                <div className="bg-orange-600 text-white p-6 rounded-lg text-center">
                    <h3 className="text-xl font-semibold">Car Doctor</h3>
                    <p className="text-sm mt-2">Need Help? We Are Here</p>
                    <button className="mt-4 bg-white text-orange-600 px-4 py-2 rounded-lg font-semibold w-full">Get A Quote</button>
                </div>

                {/* Price & Checkout */}
                <div className="bg-white shadow-lg rounded-lg p-4 text-center">
                    <p className="text-2xl font-semibold text-gray-800">Price: <span className="text-green-600">${service.price}</span></p>
                    <button className="mt-4 bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg w-full hover:bg-orange-700 transition-all duration-300">
                        <Link href={`/checkout/${service._id}`} className="flex items-center justify-center">
                            Proceed Checkout
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsPage;