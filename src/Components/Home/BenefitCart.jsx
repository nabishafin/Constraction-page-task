

const BenefitCart = (prop) => {
    const { icon, tag, details } = prop
    return (
        <div className="relative w-80">
            <div className="flex flex-col items-center justify-center p-10 border-b-4 border-red-500 rounded-lg shadow-2xl " >
                <h3 className="mb-2 text-2xl font-bold">{tag}</h3>
                <p>{details}</p>
            </div>
            <div className="border-red-500" >
                <img className="absolute rounded-full left-36 w-14 bottom-44 bg-rose-400" src={icon} alt="" />
            </div>
        </div>
    );
}
export default BenefitCart;