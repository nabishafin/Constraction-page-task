import { GoChevronRight } from "react-icons/go";
import location from "../../../public/Assets/Icon 8.png"
import massage from "../../../public/Assets/Icon 10.png"
import call from "../../../public/Assets/Icon9.png"

const Footer = () => {

    return (
        <div className="mt-10 bg-sky-900">
            <footer className="p-5 pt-20 sm: lg:pl-40 lg:pr-40 footer text-base-content">
                <aside>
                    <img src="../../../public/Assets/Logo.png" alt="" />
                    <p className="mt-3 mb-3 text-white">Hire & Fire is a cutting-edge job <br /> website  designed to
                        connect <br /> employers with top-tier talent across <br /> various
                        industries.  Utilizing advanced matching <br /> algorithms, it
                        streamlines the hiring process, <br /> ensuring quick and
                        effective placements.</p>
                    <button className="px-4 py-1 border-none bg-rose-700 btn">Contact-us</button>
                </aside>
                <nav className="text-white">
                    <h6 className="text-lg">Quick Links</h6>

                    <div className="flex">
                        <GoChevronRight className="mt-1" />
                        <a className="link link-hover"> Home</a>
                    </div>
                    <div className="flex">
                        <GoChevronRight className="mt-1" />
                        <a className="link link-hover">  Services</a>
                    </div>
                    <div className="flex">
                        <GoChevronRight className="mt-1" />
                        <a className="link link-hover"> about Us</a>
                    </div>
                    <div className="flex">
                        <GoChevronRight className="mt-1" />
                        <a className="link link-hover"> Industries We Serve</a>
                    </div>
                    <div className="flex">
                        <GoChevronRight className="mt-1" />
                        <a className="link link-hover"> Blog & News</a>
                    </div>
                    <div className="flex">
                        <GoChevronRight className="mt-1" />
                        <a className="link link-hover"> FAQ</a>
                    </div>
                    <div className="flex">
                        <GoChevronRight className="mt-1" />
                        <a className="link link-hover"> Contact Us</a>
                    </div>

                </nav>

                <nav className="text-white">
                    <h6 className="text-lg">Our Services</h6>

                    <div className="flex">
                        <GoChevronRight className="mt-1" />
                        <a className="link link-hover"> Permanent Requitment</a>
                    </div>
                    <div className="flex">
                        <GoChevronRight className="mt-1" />
                        <a className="link link-hover">  Contract Staffing</a>
                    </div>
                    <div className="flex">
                        <GoChevronRight className="mt-1" />
                        <a className="link link-hover"> housing & Accomodation Support</a>
                    </div>
                    <div className="flex">
                        <GoChevronRight className="mt-1" />
                        <a className="link link-hover"> Compliance and Legal Support</a>
                    </div>
                    <div className="flex">
                        <GoChevronRight className="mt-1" />
                        <a className="link link-hover"> Workforce Planning</a>
                    </div>
                    <div className="flex">
                        <GoChevronRight className="mt-1" />
                        <a className="link link-hover"> Background Checks</a>
                    </div>
                    <div className="flex">
                        <GoChevronRight className="mt-1" />
                        <a className="link link-hover"> Onboarding Support</a>
                    </div>

                </nav>
                <aside className="text-white">
                    <h3 className="text-lg">Get In Touch</h3>
                    <p className="mt-3 mb-3 ">Subscribe Our Newsletter to Get Latest Update & News</p>
                    <div className="">
                        <input className="p-2 rounded-l-lg" type="text" />
                        <button className="p-2 rounded-r-lg bg-rose-700">Subscribe</button>
                    </div>
                    <div className="mt-4">
                        <div className="flex gap-2 mb-2">
                            <img className="p-1 bg-white rounded-full" src={call} alt="" />
                            <p className="mt-1">+40 123 456 789</p>
                        </div>
                        <div className="flex gap-2 mb-2">
                            <img className="p-1 bg-white rounded-full" src={massage} alt="" />
                            <p className="mt-1">contact@hireandfire.agency</p>
                        </div>
                        <div className="flex gap-2 mb-2">
                            <img className="p-1 bg-white rounded-full" src={location} alt="" />
                            <p className="mt-1">Strada ING. Zablovschi, Nr. 10 noBucuresti, Romania
                            </p>
                        </div>
                    </div>
                </aside>
            </footer>
            <div className="flex items-center justify-center mt-10 lg:pl-20 lg:pr-20">
                <hr className="w-10/12 text-white " />
            </div>

            <div className="flex flex-col gap-8 p-20 mr-40 text-white lg:ml-40 lg:justify-between lg:flex-row">
                <div>
                    <p>Copyright 2024 “Hire & Fire” All Rights Reserved.</p>
                </div>
                <div className="flex gap-10">
                    <p>privacy Policy</p>
                    <p>Terms & Conditions</p>
                    <p>Cookie Policy</p>
                </div>
                <div className="flex gap-4">
                    <p className="mt-1">Follow Us</p>
                    <div className="flex gap-8 sm :">
                        <img className="p-1 bg-white rounded-full" src={massage} alt="" />
                        <img className="p-1 rounded-full bg-rose-700" src={call} alt="" />

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Footer;