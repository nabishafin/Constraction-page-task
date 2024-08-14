import { NavLink } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import bg from '../../../public/Assets/Background image 1.png';

const Tittle = () => {
    return (
        <div style=
            {{ background: `url(${bg})` }} className="flex items-center justify-center h-40 bg-center bg-cover">
            <div className="text-white">
                < h1 className="mb-2 text-5xl font-bold text-center" > Construction</h1 >
                <div className="flex items-center justify-center gap-3 text-2xl font-medium">
                    <NavLink to="/">Home </NavLink>
                    <p><MdKeyboardDoubleArrowRight /></p>
                    <NavLink to="/industry" >Industry</NavLink>
                    <p><MdKeyboardDoubleArrowRight /></p>
                    <NavLink to="/construction" >Construction</NavLink>
                </div>
            </div>
        </div >
    );
};

export default Tittle;