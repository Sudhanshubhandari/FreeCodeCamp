import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Courses = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from MongoDB
        const response = await axios.get("/api/courses");
        setData(response.data.courses);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="flex justify-center mt-10 tc">
        <div>
          <h1 className="text-2xl font-bold">Welcome To FreeCodeCamp.org</h1>
          <br />
          <h2>
            "I &nbsp; have &nbsp; not &nbsp; failed ,&nbsp; I've
            &nbsp;just&nbsp; found&nbsp; 10,000 &nbsp;ways
            <br />
          </h2>
          <h2 className="flex items-center justify-center">
            that&nbsp; won't&nbsp; work."{" "}
          </h2>
          <h3 className="cursive text-xs flex justify-center ml-10 ">
            -Thomas A. Edison
          </h3>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-20">
        <div>
          {" "}
          {data.map((item, index) => {
            return <Card item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
