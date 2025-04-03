import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="p-2">
                <Image src={img} alt={title} width={350} height={200} className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-xl text-orange-500">Price: ${price}</p>
                <div className="card-actions">
                    <Link href={`/services/${_id}`}>
                        <button className="btn btn-primary">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
