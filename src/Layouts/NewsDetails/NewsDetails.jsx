import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import RightAside from '../HomeLayout/RightAside';
import { useLoaderData, useParams } from 'react-router';
import NewSDatailedCard from '../../Components/NewDetailedCard/NewSDatailedCard';
import './NewsDetail.css'

const NewsDetails = () => {
    const [newsData,setnewsData]=useState({})
    const Id=useParams().id;
    const NewsData=useLoaderData();
    useEffect(()=>{
        const clickedNewsData=NewsData.find(sinData=>sinData.id===Id)
      
       setnewsData(clickedNewsData)
    },[NewsData,Id])
    useEffect(()=>{

        window.scrollTo({top:0,behavior:'smooth'})
    },[])
    // console.log(newsData,Id)

    return (
        <div>
            <header>
            <Header></Header>
            </header>
            <main className='grid grid-cols-12 w-10/12 mx-auto pr-7 '>
              {/* left Section */}
              <section className='col-span-9'>
                <h1 className='font-semibold text-xl text-base-400'>Dragon News</h1>  
                <NewSDatailedCard newsData={newsData}></NewSDatailedCard>
              </section>
              {/* Right Aside */}
              <section className='col-span-3 NewDetails'>
                <RightAside></RightAside>
              </section>

            </main>
        </div>
    );
};

export default NewsDetails;
/**
 * author
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