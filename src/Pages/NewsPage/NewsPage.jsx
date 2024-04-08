import {useParams} from "react-router-dom";
import Header from "../Shared/Header/Header";
import NavBar from "../Shared/NavBar/NavBar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const NewsPage = () => {
    const {id} = useParams()
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <div className=" grid md:grid-cols-4 gap-8">
                {/*  */}
                <div className=" col-span-3">
                    <h1 className="text-5xl">News</h1> 
                    <p>{id}</p>
                </div>
                {/*  */}
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsPage;