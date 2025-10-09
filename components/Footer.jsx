import { Separator } from "./ui/separator"
import Link from "next/link"

import { FaInstagram } from "react-icons/fa"
import { FiFacebook } from "react-icons/fi"
import { FiYoutube } from "react-icons/fi"
import { FaLinkedinIn } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="flex bg-[#0d0d0d] text-white px-6 py-12 md:px-12 lg:px-16">
            <div className="grow max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:gap-x-12 lg:gap-x-16 py-8 md:py-12 lg:grid-cols-5">
                    {/* logo  */}
                    <div className="flex flex-col col-span-2 sm:col-span-1 gap-6 justify-start items-start">
                        <Link
                            href="/"
                            className="w-full flex-col flex tracking-[.2000rem] leading-tight hover:opacity-80 transition-opacity"
                        >
                            <span className="text-2xl md:text-3xl font-light">Indian</span>
                            <span className="text-4xl md:text-5xl font-extralight bg-gradient-to-r from-theme via-[#ff9d5c] to-[#fa9c5e] bg-clip-text text-transparent">
                                Stonex
                            </span>
                        </Link>

                        {/* details  */}
                        <div className="w-full space-y-4">
                            <div className="text-sm leading-relaxed text-gray-300 font-light tracking-wide">
                                <p className="font-normal mb-2 tracking-wider">Address:</p>
                                <p>
                                    In Front of Post Office, Near Truck Union, Vasundhara Nagar, Manglana Road, Makrana Rajasthan India
                                </p>
                                <p>Pin: 341505</p>
                            </div>

                            <div className="flex flex-col gap-2 text-sm text-gray-300 font-light tracking-wide">
                                <a href="tel:+919319374633" className=" transition-colors flex items-center gap-2">
                                    <span className="font-normal  tracking-wider">Call:</span> +91  7014116801
                                    
                                </a>
                                <a
                                    href="mailto:info@indianstonex.com"
                                    className=" transition-colors flex items-center gap-2"
                                >
                                    <span className="font-normal  tracking-wider">Email:</span> info@indianstonex.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* links  */}
                    <div className="flex flex-col gap-5">
                        <h3 className="text-lg md:text-xl font-light tracking-widest uppercase">
                            Our Space
                        </h3>
                        <div className="flex flex-col gap-3">
                            <Link
                                href={"/About"}
                                className="text-sm text-gray-300 hover:translate-x-1 transition-all duration-200 font-light tracking-wide"
                            >
                                About Us
                            </Link>
                            <Link
                                href={"/"}
                                className="text-sm text-gray-300 hover:translate-x-1 transition-all duration-200 font-light tracking-wide"
                            >
                                The Team
                            </Link>
                            <Link
                                href={"/"}
                                className="text-sm text-gray-300  hover:translate-x-1 transition-all duration-200 font-light tracking-wide"
                            >
                                Artisans
                            </Link>
                            <Link
                                href={"/OurClients"}
                                className="text-sm text-gray-300 hover:translate-x-1 transition-all duration-200 font-light tracking-wide"
                            >
                                Our Clients
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h3 className="text-lg md:text-xl font-light tracking-widest uppercase">
                            Quick Links
                        </h3>
                        <div className="flex flex-col gap-3">
                            <Link
                                href={"/marble-pooja-room-designs"}
                                className="text-sm text-gray-300 hover:translate-x-1 transition-all duration-200 font-light tracking-wide"
                            >
                                Pooja Room
                            </Link>
                            <Link
                                href={"/premium-marble-temple-for-home"}
                                className="text-sm text-gray-300  hover:translate-x-1 transition-all duration-200 font-light tracking-wide"
                            >
                                Custom Temple
                            </Link>
                            <Link
                                href={"/communal-temple-design"}
                                className="text-sm text-gray-300 hover:translate-x-1 transition-all duration-200 font-light tracking-wide"
                            >
                                Community Temple
                            </Link>
                            <Link
                                href={"/AppointmentPage"}
                                className="text-sm text-gray-300 hover:translate-x-1 transition-all duration-200 font-light tracking-wide"
                            >
                                Schedule a Visit
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h3 className="text-lg md:text-xl font-light tracking-widest uppercase">Legal</h3>
                        <div className="flex flex-col gap-3">
                            <Link
                                href={"/terms-and-conditions"}
                                className="text-sm text-gray-300 hover:translate-x-1 transition-all duration-200 font-light tracking-wide"
                            >
                                Terms & Conditions
                            </Link>
                            <Link
                                href={"/privacy-policy"}
                                className="text-sm text-gray-300 hover:translate-x-1 transition-all duration-200 font-light tracking-wide"
                            >
                                Privacy Policy
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h3 className="text-lg md:text-xl font-light  tracking-widest uppercase ">
                            Need Help
                        </h3>
                        <div className="flex flex-col gap-3">
                            <Link
                                href={"#faq"}
                                className="text-sm text-gray-300 hover:translate-x-1 transition-all duration-200 font-light tracking-wide"
                            >
                                FAQs
                            </Link>
                            <Link
                                href={"/"}
                                className="text-sm text-gray-300  hover:translate-x-1 transition-all duration-200 font-light tracking-wide"
                            >
                                Call Us
                            </Link>
                        </div>
                    </div>
                </div>

                {/* icons   */}
                <div className="flex gap-6 py-8 w-full justify-start">
                    <a
                        href="https://www.instagram.com/indian_stonex?igsh=dzA3aWpoNXF1dGVk"
                        className="text-gray-300  transition-all duration-200 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,126,46,0.5)]"
                    >
                        <FaInstagram className="h-6 w-6 md:h-7 md:w-7" />
                    </a>
                    <a
                        href="https://www.facebook.com/share/1BEsC7YXEM/"
                        className="text-gray-300  transition-all duration-200 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,126,46,0.5)]"
                    >
                        <FiFacebook className="h-6 w-6 md:h-7 md:w-7" />
                    </a>
                    <a
                        href="https://youtube.com/@indianstonex-c3i?si=Z1i5Ge1sLZyp7Tdo"
                        className="text-gray-300 transition-all duration-200 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,126,46,0.5)]"
                    >
                        <FiYoutube className="h-6 w-6 md:h-7 md:w-7" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/indian-stonex-091ab1385?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        className="text-gray-300 transition-all duration-200 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,126,46,0.5)]"
                    >
                        <FaLinkedinIn className="h-6 w-6 md:h-7 md:w-7" />
                    </a>
                </div>

                {/* divider  */}
                <Separator className="w-full bg-gradient-to-r from-gray-800 via-[#ff7e2e]/20 to-gray-800" />

                {/* Copyright section  */}
                <div className="flex justify-center items-center py-6 text-sm text-gray-400 font-light tracking-wider">
                    © Indian Stonex Private Limited, 2025. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer
