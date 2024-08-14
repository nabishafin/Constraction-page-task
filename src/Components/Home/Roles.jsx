import RolesCart from "./RolesCart";
import pic1 from "../../../public/Assets/Image 2.png"
import pic2 from "../../../public/Assets/Image 3.png"
import pic3 from "../../../public/Assets/Image 4.png"
import pic4 from "../../../public/Assets/Image 5.png"
import pic5 from "../../../public/Assets/Image 6.png"
import pic6 from "../../../public/Assets/Image 7.png"

const Roles = () => {
    return (
        <div className="p-4 mt-5 sm : ">
            <h1 className="text-4xl font-bold text-center">Roles We Fill</h1>
            <p className="mt-5 text-center ">We fill roles in construction, matching skilled professionals like engineers, supervisors,
                and laborers to projects requiring expertise and efficiency</p>
            <div className="items-center justify-center gap-4 mt-10 lg:flex ">
                <RolesCart
                    img={pic1} name={"Project Managers"} paragraph={"Project managers are the backbone of any successful construction project."}  >
                </RolesCart>
                <RolesCart
                    img={pic2} name={"Site Supervisors"} paragraph={"Site supervisors are the on-the-ground leaders who ensure safely."}  >
                </RolesCart>
                <RolesCart
                    img={pic3} name={"Engineers (Civil)"} paragraph={"Civil engineers are the masterminds behind the infrastructure."}  >
                </RolesCart>
                <RolesCart
                    img={pic4} name={"Architects"} paragraph={"Architects are the creative visionaries who transform ideas into tangible spaces."}  >
                </RolesCart>
            </div>

            <div className="items-center justify-center gap-4 lg:mt-4 lg:flex">
                <RolesCart
                    img={pic5} name={"Skilled Tradespeople"} paragraph={"Skilled workers are the heart and soul of the construction industry."}  >
                </RolesCart>
                <RolesCart
                    img={pic6} name={"General Laborers"} paragraph={"General laborers are the backbone of the construction needed"}  >
                </RolesCart>

            </div>
        </div>
    );
};

export default Roles;