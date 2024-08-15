import Benefit from "./Benefit";
import From from "./From";
import Recruitment from "./Recruitment";
import Roles from "./Roles";
import Tittle from "./Tittle";


const Home = () => {

    return (
        <div className="mt-5">
            <Tittle></Tittle>
            <Recruitment></Recruitment>
            <Roles></Roles>
            <Benefit></Benefit>
            <From></From>
        </div>
    );
};

export default Home;