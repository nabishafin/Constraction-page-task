

const BenefitCart = (prop) => {
    const { icon, tag, details } = prop
    return (
        <div className="relative w-80">
            <div className="flex flex-col items-center justify-center p-10 border-b-4 border-red-500 rounded-lg shadow-2xl " >
                <h3 className="mb-2 text-2xl font-bold">{tag}</h3>
                <p>{details}</p>
            </div>
            <div className="m-2" >
                <img className="absolute w-16 rounded-full left-32 bottom-44 bg-rose-500" src={icon} alt="" />
            </div>
        </div >
    );
}
export default BenefitCart;