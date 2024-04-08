import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import NavBar from "../Shared/NavBar/NavBar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BrakingNews from "./BrakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();
  // console.log(news);

  return (
    <div>
      <Header></Header>
      <BrakingNews></BrakingNews>
      <NavBar></NavBar>
      <div className=" grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* 1st div */}
        <div>
          <LeftSideNav className=" "></LeftSideNav>
        </div>
        {/* 2nd div News Container*/}
        <div className=" col-span-2 ">
          {
            news.map(aNews => <NewsCard 
              key={aNews.id}
              news={aNews}
              ></NewsCard>)
          }
        </div>
        {/* 3rd div */}
        <div className="">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
