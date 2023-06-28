import React from 'react'

const NewsCard = ({ data }) => {
    // console.log(data.title)

    const text_truncate = (str, length, ending) => {
        if (length == null) {
            length = 180;
        }
        if (ending == null) {
            ending = '...';
        }
        if (str.length > length) {
            return str.substring(0, length - ending.length) + ending;
        } else {
            return str;
        }
    };

    return (
        <div class="p-8" >
            <div class="max-w-sm rounded overflow-hidden shadow-lg"  >
                <img class="w-full" src={data.urlToImage} />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{data.title}</div>
                    <p >
                        {data.description}
                    </p>
                    <button class="bg-gray-200 rounded px-2 py-1 text-sm font-semibold text-gray-700 mr-2 m-2 grid  justify-items-start"> <a href={data.url} target='_blank'>Read more...</a></button>
                </div>
            </div>
        </div>
    )
}

export default NewsCard
