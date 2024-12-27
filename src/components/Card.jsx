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
        <div className="flex justify-center items-center gap-6 p-4 bg-gradient-to-r from-blue-50 to-gray-50 shadow-lg rounded-lg w-full max-w-sm border border-gray-300 hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out">
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
                <div className="text-sm text-gray-700">
                    <span className="font-medium text-purple-700">Gender:</span> {finalData.gender}
                </div>
                <div className="text-sm text-gray-700">
                    <span className="font-medium text-purple-700">Phone:</span> {finalData.phone}
                </div>
            </div>
        </div>
    )
}

export default Card