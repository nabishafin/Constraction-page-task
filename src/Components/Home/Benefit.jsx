import BenefitCart from "./BenefitCart";


const Benefit = () => {
    return (
        <div className="flex flex-col items-center justify-center p-4 mt-5 sm :">
            <h1 className="text-4xl font-bold text-center">Benefits of Hiring Through Us</h1>
            <p className="mt-5 text-center ">Benefit from our efficient hiring process, matching qualified candidates to your construction
                projects, ensuring quality and reliability</p>
            <div className="flex gap-4 p-20">
                <BenefitCart></BenefitCart>
                <BenefitCart></BenefitCart>
                <BenefitCart></BenefitCart>
                <BenefitCart></BenefitCart>
            </div>
        </div>
    );
};

export default Benefit;