import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard';

const News = () => {

    const [news, setNews] = useState()

    const getData = async () => {
        const response = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-11-05&sortBy=publishedAt&apiKey=340ebf46bd7f482eab6b264c9f92c318");
        if (response.status == 200) {
            const data = await response.json();
            console.log(data.articles);
            setNews(data.articles);
        }
    }

    useEffect(() => {
        getData()
    }, [])




    return (
        <div class="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-1">

            {news && (news.map((item, index) => {
                return (
                    <NewsCard key={index} data={item} />
                )
            })
            )}
        </div>
    )
}

export default News
