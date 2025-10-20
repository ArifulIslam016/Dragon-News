import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";

const NewSDatailedCard = ({ newsData }) => {
  const { category_id, title, details, image_url } = newsData;
  // console.log(newsData)
  return (
    <div className="m-6 p-4 shadow-lg shadow-gray-400 rounded-2xl">
      <img
        className="h-[411px] object-cover w-full rounded-xl p-6"
        src={image_url}
        alt="Image of News"
      />
      <h1 className="pt-5 pb-3 text-3xl font-semibold text-black">{title}</h1>
      <p className="text-justify">{details}</p>
      <Link className="flex gap-2 items-center bg-secondary px-7 py-2 text-white  w-fit mt-8" to={`/catagories/${category_id}`}> <FaArrowLeftLong />
AllCatagories</Link>
    </div>
  );
};

export default NewSDatailedCard;
/***
 * {id: 'bcdefa0123456789bcdefa01', category_id: 2, title: "Bangladesh's Export Earnings Show Strong Growth in Q1 2025", rating: {…}, total_view: 6789, …}
author
: 
{name: 'Shirin Akter', published_date: '2025-04-22T17:00:00.000Z', img: 'https://randomuser.me/api/portraits/women/29.jpg'}
category_id
: 
2
details
: 
"Bangladesh's export sector has demonstrated robust performance in the first quarter of 2025, registering significant growth compared to the same period last year. Key sectors such as readymade garments and leather goods have contributed substantially to this positive trend. The increase in export earnings is attributed to rising global demand and the government's supportive policies aimed at enhancing trade competitiveness. Analysts predict continued growth in the coming quarters, provided that global economic conditions remain favorable and domestic industries maintain their momentum. This positive export performance is expected to have a favorable impact on the country's foreign exchange reserves and overall economic stability."
id
: 
"bcdefa0123456789bcdefa01"
image_url
: 
"https://apparelresources.com/wp-content/uploads/2024/11/Bangladeshs-RMG-exports-decline-by-2.8-per-cent-in-FY-25-Q1-.jpg"
others
: 
{is_today_pick: true, is_trending: true}
production
: 
true
rating
: 
{number: 4, badge: 'trending'}
tags
: 
(5) ['exports', 'economy', 'business', 'growth', 'trade']
thumbnail_url
: 
"https://apparelresources.com/wp-content/uploads/2024/11/Bangladeshs-RMG-exports-decline-by-2.8-per-cent-in-FY-25-Q1-.jpg"
title
: 
"Bangladesh's Export Earnings Show Strong Growth in Q1 2025"
total_view
: 
6789
[[Prototype]]
: 
Object
 */
