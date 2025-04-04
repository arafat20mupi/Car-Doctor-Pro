"use client"
import Link from "next/link";
import logo from '../../public/assets/logo.svg'
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";

const navItems = <>
    <li><Link href={'/'} >Home</Link> </li>
    <li> <Link href={'/about'} >About</Link> </li>
    <li> <Link href={'/services'} >Services</Link> </li>
    <li> <Link href={'/blog'} >Blog</Link> </li>
    <li> <Link href={'/contact'} >Contact</Link> </li>
</>;

const Navber = () => {
    const { status } = useSession();

    return (
        <div className="navbar bg-base-100  mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link href={'/'} className="btn btn-ghost normal-case text-xl">
                    <Image height={50} width={80} src={logo} alt="navber logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <button className="">
                    <FaShoppingBag className="text-xl" />
                </button>
                <button className="">
                    <FaSearch className="text-xl" />
                </button>
                <button className="btn hover:bg-[#FF3811] border-[#FF3811]">Appointment</button>
                {
                    status === 'loading' ? (
                        <span>Loading...</span>
                    ) : status === "authenticated" ? (
                        <button className="btn btn-primary" onClick={() => signOut()}>
                            Logout
                        </button>
                    ) : (
                        <Link href="/login">
                            <button className="btn bg-[#FF3811]">Login</button>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default Navber;