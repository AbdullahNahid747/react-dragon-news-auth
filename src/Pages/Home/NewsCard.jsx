import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const NewsCard = ({ news }) => {
  const { title, image_url, details, _id } = news;
  return (
    <div className="card bg-base-100 shadow-xl mb-16 ">
      <figure>
        <img
          src={image_url}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
            {
                details.length > 200 
                ? <p>{`${details.slice(0, 200)}...`} <Link
                to={`/news/${_id}`}
                className=" text-blue-600 font-bold"> Read More</Link></p>
                : <p>{details}</p>
            }
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
