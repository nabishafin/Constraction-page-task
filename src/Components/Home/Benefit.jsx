import BenefitCart from "./BenefitCart";
import mini1 from '../../../public/Assets/mini1.png'
import mini2 from '../../../public/Assets/mini2.png'
import mini3 from '../../../public/Assets/mini3.png'
import mini4 from '../../../public/Assets/mini4.png'
const Benefit = () => {
    return (
        <div className="flex flex-col items-center justify-center p-4 mt-5 sm : ">
            <h1 className="text-4xl font-bold text-center">Benefits of Hiring Through Us</h1>
            <p className="mt-5 text-center ">Benefit from our efficient hiring process, matching qualified candidates to your construction
                projects, ensuring quality and reliability</p>
            <div className="flex flex-col gap-16 p-20 lg:gap-4 sm : lg:flex-row">
                <BenefitCart
                    icon={mini1} tag={'Access to Labor'} details={'We Provide a pool of highly profestional ready to contribute to your projects globally'}>
                </BenefitCart>

                <BenefitCart
                    icon={mini2} tag={'Cost  Solutions'} details={'Our service are designed to save you  by taking care of the entire service '}>
                </BenefitCart>

                <BenefitCart
                    icon={mini3} tag={'Compliance '} details={'We handle all necessary paperwork, ensuring compliance with international labor '}>
                </BenefitCart>

                <BenefitCart
                    icon={mini4} tag={'Tailored Recruitment'} details={'We customize our recruitment process to match the specific requirements of your projects'}>
                </BenefitCart>
            </div>
        </div >
    );
};

export default Benefit;