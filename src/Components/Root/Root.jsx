import { Outlet } from "react-router-dom";
import Navbar from "../Shered/navbar";
import Footer from "../Shered/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;