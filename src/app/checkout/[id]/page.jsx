"use client";

import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import bgimage from "../../../../public/assets/images/checkout/checkout.png";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";
const CheckoutPage = () => {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
    const { id } = useParams();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const { data } = useSession();
    console.log(data?.user);
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
    const onSubmit = async (data) => {

    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Banner Section */}
            <div className="relative max-w-4xl mx-auto">
                <div
                    className="w-full h-56  bg-cover bg-center flex items-center justify-center"
                    style={{ backgroundImage: `url(${bgimage.src})` }} // ✅ Corrected
                >
                    <h1 className="text-white text-4xl font-bold">Check Out</h1>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-orange-600 px-6 py-2 text-white rounded-t-lg">
                    Checkout for {service.title}
                </div>
            </div>

            {/* Checkout Form */}
            <div className="max-w-4xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1  gap-4">
                        <input

                            type="text"
                            {...register("name", { required: "Your Name is required" })}
                            placeholder="Your Name"
                            defaultValue={data?.user?.name}
                            className="w-full p-3 border rounded-lg focus:outline-orange-500"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <input

                                type="text"
                                {...register("price", { required: "Service Price is required" })}
                                placeholder="Service Price"
                                defaultValue={service.price}
                                className="w-full p-3 border rounded-lg focus:outline-orange-500"
                            />
                            {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
                        </div>
                        <div>
                            <input
                                type="date"
                                {...register("date", { required: "Service Price is required" })}
                                className="w-full p-3 border rounded-lg focus:outline-orange-500"
                            />
                            {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
                        </div>
                    </div>

                    {/* Contact Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <input
                                type="tel"
                                {...register("phone", { required: "Phone number is required" })}
                                placeholder="Your Phone"
                                className="w-full p-3 border rounded-lg focus:outline-orange-500"
                            />
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                        </div>
                        <div>
                            <input
                                type="email"
                                {...register("email", { required: "Email is required" })}
                                placeholder="Your Email"
                                defaultValue={data?.user?.email}
                                className="w-full p-3 border rounded-lg focus:outline-orange-500"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>
                    </div>

                    {/* Message Box */}
                    <div>
                        <textarea
                            {...register("message")}
                            placeholder="Your Message"
                            rows="4"
                            className="w-full p-3 border rounded-lg focus:outline-orange-500"
                        ></textarea>
                    </div>

                    {/* Order Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-orange-600 text-white py-3 rounded-lg text-lg font-semibold flex items-center justify-center"
                    >
                        {isSubmitting ? <Loader2 className="animate-spin w-5 h-5 mr-2" /> : "Order Confirm"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CheckoutPage;
