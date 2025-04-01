import Image from 'next/image';
import img1 from '../../public/assets/images/banner/1.jpg';
import img2 from '../../public/assets/images/banner/2.jpg';
import img3 from '../../public/assets/images/banner/3.jpg';
import img4 from '../../public/assets/images/banner/4.jpg';

const slides = [
    { id: "slide1", img: img1, next: "slide2", prev: "slide4" },
    { id: "slide2", img: img2, next: "slide3", prev: "slide1" },
    { id: "slide3", img: img3, next: "slide4", prev: "slide2" },
    { id: "slide4", img: img4, next: "slide1", prev: "slide3" },
];

const BannerSlide = ({ id, img, next, prev }) => (
    <div id={id} className="carousel-item relative w-full">
        <Image src={img} layout="responsive" width={1920} height={600} className="w-full rounded-xl" alt="Banner Image" priority={id === "slide1"} />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-transparent">
            <div className="text-white space-y-7 pl-12 w-1/2">
                <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                <p>There are many variations of passages available, but the majority have suffered alteration in some form.</p>
                <div>
                    <button className="btn bg-[#FF3811] mr-5">Discover More</button>
                    <button className="btn btn-outline btn-secondary">Latest Project</button>
                </div>
            </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href={`#${prev}`} className="btn btn-circle mr-5" aria-label="Previous slide">❮</a>
            <a href={`#${next}`} className="btn btn-circle" aria-label="Next slide">❯</a>
        </div>
    </div>
);

const Banner = () => (
    <div className="carousel w-full h-[600px]">
        {slides.map(slide => (
            <BannerSlide key={slide.id} {...slide} />
        ))}
    </div>
);

export default Banner;
