import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const links = <>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li>
            <details>
                <summary>Employers</summary>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li>
        <li>
            <details>
                <summary>Find Worker</summary>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li>
        <li><NavLink className="text-rose-600" to="/industry">Industry</NavLink></li>
        <li>
            <details>
                <summary>Resources</summary>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
    </>

    return (
        <div className="font-bold lg:mr-20 lg:ml-20">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="text-xl btn btn-ghost "><img className="hidden sm : lg:block" src="../../../public/Assets/Logo.png" alt="" /></Link>
                </div>
                <div className="hidden navbar-center lg:flex">
                    <ul className="px-1 menu menu-horizontal">
                        {links}
                    </ul>
                </div>
                <div className="gap-3 navbar-end ">
                    <div>
                        <img src="../../../public/Assets/Country Icon.png" alt="" />
                    </div>
                    <details>
                        <summary>
                        </summary>
                        <ul className="hidden p-2">
                            <li><a>1</a></li>
                            <li><a>2</a></li>
                        </ul>
                    </details>

                </div>
            </div>
        </div>
    );
};

export default Navbar