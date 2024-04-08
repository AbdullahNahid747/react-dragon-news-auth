/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [ categories, setCategories ] = useState([]);

  useEffect(() => {
    fetch('categories.json')
    .then(response => response.json())
      .then(data => setCategories(data));
  } , [])

  return (
    <div>
      <div>
        <h2 className="text-2xl">All Categories</h2>
        <details className="dropdown mt-5">
          <summary className="m-1 btn">National News</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <div>
              <li>
                <a>Breaking News</a>
              </li>
              <li>
                <a>Regular News</a>
              </li>
              <li>
                <a>International News</a>
              </li>
              <li>
                <a>Sports</a>
              </li>
              <li>
                <a>Entertainment</a>
              </li>
              <li>
                <a>Culture</a>
              </li>
              <li>
                <a>Arts</a>
              </li>
              <li>
                <a>All News</a>
              </li>
            </div>
          </ul>
        </details>
      </div>

      <div className=" mt-80 space-y-6">
        {
            categories.map( category => <Link
                className="block ml-4 text-xl font-semibold"
                 key={category.id}
                 to={`/categories/${category.id}`}>{category.name}
                </Link>)
        }
      </div>
    </div>
  );
};

export default LeftSideNav;
