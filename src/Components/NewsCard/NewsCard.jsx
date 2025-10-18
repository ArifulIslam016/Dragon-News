import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  return (
    <div className="max-w-md bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      {/* Author Info */}
      <div className="flex items-center px-4 py-3">
        <img
          src={news.author.img}
          alt={news.author.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <p className="text-gray-800 font-semibold">{news.author.name}</p>
          <p className="text-gray-500 text-sm">
            {new Date(news.author.published_date).toLocaleDateString()}
          </p>
        </div>
        <div className="ml-auto text-gray-400 cursor-pointer flex">
        <CiBookmark />
        <CiShare2/>

        

        </div>
      </div>

      {/* Title */}
      <div className="px-4 pb-3">
        <h2 className="font-bold text-gray-900 text-lg">{news.title}</h2>
      </div>

      {/* Image */}
      <img
        src={news.image_url}
        alt={news.title}
        className="w-full h-48 object-cover"
      />

      {/* Details */}
      <div className="px-4 py-3">
        <p className="text-gray-700 text-sm line-clamp-3">
          {news.details}
        </p>
        <p className="text-red-500 mt-2 cursor-pointer">Read More</p>
      </div>

      {/* Footer: Rating & Views */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200">
        <div className="flex items-center space-x-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ${
                i < news.rating.number ? "text-yellow-400" : "text-gray-300"
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.38 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-gray-700 text-sm ml-1">{news.rating.number}</span>
        </div>
        <div className="flex items-center space-x-1 text-gray-500">
         <FaEye />

          <span className="text-sm">{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
