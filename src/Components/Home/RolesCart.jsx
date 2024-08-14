import { MdNavigateNext } from "react-icons/md";

const RolesCart = (prop) => {
    const { img, name, paragraph } = prop
    return (
        <div className="p-1 sm :">
            <div className="w-auto shadow-2xl lg:w-72 card bg-base-100">
                <figure className="px-4 pt-2">
                    <img
                        src={img}
                        alt="loading "
                        className="rounded-xl" />
                </figure>
                <div className="items-center text-center card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{paragraph}</p>
                    <div className="flex items-center justify-center card-actions">
                        <a className="text-red-500 " href="">Contact-Us</a>
                        <p className="mt-1 text-red-500" ><MdNavigateNext /></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RolesCart;