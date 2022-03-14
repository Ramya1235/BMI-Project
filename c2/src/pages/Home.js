import { useSelector } from "react-redux";
import Subnav from "./Subnav";

const Home = () => {
    const {user} = useSelector((state) => ({...state}));
    return (
        <div className=" ">

            <Subnav />
        </div>
        
    )
};

export  default Home;
