import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RESTO_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import ResCard from "./ResCard";
import ShimmerUI from "./ShimmerUI";

const Body = () => {
  const [res, setRes] = useState([]);
  const [filterRes, setFilterRes] = useState([]);
  const [text, setText] = useState("");
  const onlineStatus = useOnlineStatus();

  const fetchData = async () => {
    const data = await fetch(RESTO_API);
    const json = await data.json();

    setRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (onlineStatus === false)
    return (
      <h3 className="offline">
        Looks like you're offline!! please check your internet conection
      </h3>
    );

  if (!res || res.length === 0) {
    return <ShimmerUI />;
  }

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="w-1/2">
            <input
              className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Search for restaurants and food"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="flex gap-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md transition duration-300 ease-in-out"
              onClick={() => {
                const filterResto = res.filter((resto) =>
                  resto?.info?.name?.toLowerCase()?.includes(text.toLowerCase())
                );
                setFilterRes(filterResto);
              }}
            >
              Search
            </button>
            <button
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-md transition duration-300 ease-in-out"
              onClick={() => {
                const filterRestorent = res.filter(
                  (resto) => resto?.info?.avgRating > 4
                );
                setRes(filterRestorent);
                setFilterRes(filterRestorent);
              }}
            >
              Top Rated Restaurants
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filterRes.map((restorent) => (
            <Link
              key={restorent?.info?.id}
              to={"/restorent/" + restorent?.info?.id}
            >
              <ResCard resData={restorent} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
