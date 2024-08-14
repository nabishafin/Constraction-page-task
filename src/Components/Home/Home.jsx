import Recruitment from "./Recruitment";
import Roles from "./Roles";
import Tittle from "./Tittle";


const Home = () => {

    return (
        <div className="mt-5 border-2 lg:mr-10 lg:ml-10">
            <Tittle></Tittle>
            <Recruitment></Recruitment>
            <Roles></Roles>
        </div>
    );
};

export default Home;