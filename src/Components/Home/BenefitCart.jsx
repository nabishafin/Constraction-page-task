

const BenefitCart = () => {
    return (
        <div className="relative w-76">
            <div className="flex flex-col items-center justify-center p-10 border-b-4 border-red-500 rounded-lg shadow-2xl " >
                <h3 className="mb-2 text-2xl font-bold">Access to Skilled Labor</h3>
                <p>
                    We Provide a pool of highly trained
                    professtional ready to contribute to your
                    projects globally</p>
            </div>
            <div >
                <img className="absolute rounded-full p-4red-500 left-40 w-14 bottom-44" src="../../../public/Assets/mini1.png" alt="" />
            </div>
        </div>
    );
};

export default BenefitCart;