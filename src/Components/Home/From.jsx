import frombg from '../../../public/Assets/Background image 2.png';
import location from '../../../public/Assets/location.png';
import massage from '../../../public/Assets/massage.png';
const From = () => {
    return (
        <div className="justify-center rounded-lg lg:flex">
            <div className="shadow-2xl">
                <div className="flex-col hero-content lg:flex-row">
                    <div style=
                        {{ background: `url(${frombg})` }} className="flex flex-col items-center justify-center w-auto p-12 text-center text-white lg:text-left rounded-xl">

                        <h1 className="mb-2 text-5xl font-bold">Contact Us</h1>
                        <p className='text-2xl'>Say Someting to start a live chatagong</p>
                        <div className='flex gap-2 '>
                            <img className='w-6 mt-4' src={location} alt="" />
                            <div className='mt-6'>
                                <h2 className='mb-2'>Company Location</h2>
                                <p>Bucureşti Sectorul 1, Strada ING.
                                </p>
                            </div>
                        </div>
                        <div className='flex gap-2 '>
                            <img className='w-6 mt-4' src={massage} alt="" />
                            <div className='mt-6'>
                                <h2 className='mb-2'>Company Location</h2>
                                <p>Bucureşti Sectorul 1, Strada ING.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="w-full max-w-sm ">
                        <form className="card-body">
                            <div className="form-control">
                                {/* xs */}
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full h-10 mb-2 input input-bordered" />
                                {/* sm */}
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="w-full mb-2 h-14 input input-bordered" />
                                {/* md */}
                                <input
                                    type="text"
                                    placeholder="Phone-Number"
                                    className="w-full h-20 mb-2 input input-bordered" />
                                {/* lg */}
                                <input
                                    type="text"
                                    placeholder="Write Your Massage"
                                    className="w-full h-28 input input-bordered" />
                            </div>
                            <div className="mt-2 form-control">
                                <button className="btn btn-primary">Sent-Massage</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default From;