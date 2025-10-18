import { el } from "date-fns/locale";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard/NewsCard";

const Catagory = () => {
  const catagoriesData = useLoaderData();
  const [newsData, setnewsData] = useState([]);
  const catagoryId = useParams().id;
  useEffect(() => {
    if (catagoryId == "0") {
      setnewsData(catagoriesData);
      return;
    } else if (catagoryId == "1") {
      const filterDataByPickdate = catagoriesData.filter(
        (singleData) => singleData.others.is_today_pick === true
      );
      setnewsData(filterDataByPickdate);
      return;
    } else {
      const filteredData = catagoriesData.filter(
        (singleCatData) => singleCatData.category_id === parseInt(catagoryId)
      );
      setnewsData(filteredData);
    }
  }, [catagoriesData, catagoryId]);

  return (
    <div>
      <h1>
        Total {newsData.length} News found
      </h1>
      {
        newsData.map(news=><NewsCard key={news.id} news={news}></NewsCard>)
      }
    </div>
  );
};

export default Catagory;
