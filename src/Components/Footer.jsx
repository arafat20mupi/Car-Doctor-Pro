import Image from 'next/image';
import logo from '../../public/assets/logo.svg';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer grid grid-cols-1 md:grid-cols-4 w-full justify-between p-10 bg-base-200 text-base-content">
            <div className="flex flex-col gap-3 ">
                <Image height={80} width={100} src={logo} alt="logo" />
                <p>Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                <div className="grid grid-flow-col gap-4">
                    <a href="#" className="social-icon p-2 text-xl "><FaGoogle /></a>
                    <a href="#" className="social-icon p-2 text-xl "><FaFacebook /></a>
                    <a href="#" className="social-icon p-2 text-xl "><FaTwitter /></a>
                    <a href="#" className="social-icon p-2 text-xl "><FaLinkedin /></a>
                </div>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;