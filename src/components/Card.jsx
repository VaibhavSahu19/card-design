import React, { useEffect, useState } from 'react'
import getData from '../data/data';

function Card() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const tempData = async () => {
            try {
                const result = await getData();
                setData(result);
                console.log(result);
            } catch (error) {
                setError("Failed to fetch Data");
            }finally{
                setLoading(false);
            }
        }
        tempData();
    }, []);

    if(loading){
        return <div className='text-2xl font-bold'>Loading....</div>
    }
    if(error){
        return <div>{error}</div>
    }

    const finalData = data ? data.results[0] : null;


    return (
        <div className="flex justify-center items-center gap-6 p-4 bg-gradient-to-r from-blue-50 to-gray-50 shadow-lg rounded-lg w-full max-w-sm  hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out border-4 border-[black]">
            <div className="relative p-1 border-4 border-black rounded-md bg-gradient-to-b from-gray-200 to-white">
                <img
                    className="w-24 h-24 object-cover rounded-sm"
                    src={finalData.picture.thumbnail}
                    alt="Profile Thumbnail"
                />
            </div>
            <div className="flex flex-col space-y-2 text-gray-800">
                <div className="font-semibold text-xl text-indigo-600">
                    Name: <span className="text-gray-900">{finalData.name.title + " " + finalData.name.first + " " + finalData.name.last}</span>
                </div>
                <div className="text-sm text-gray-700 flex items-center gap-2">
                    <span className="font-medium text-purple-700">Gender:</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full shadow-sm border border-purple-300">
                        {finalData.gender}
                    </span>
                </div>
                <div className="text-sm text-gray-700 flex items-center gap-2">
                    <span className="font-medium text-purple-700">Phone:</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-lg shadow-sm border border-green-300">
                        {finalData.phone}
                    </span>
                </div>
            </div>
        </div>

    )
}

export default Card