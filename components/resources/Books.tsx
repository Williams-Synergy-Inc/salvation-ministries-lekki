"use client"
import { useState, useEffect } from "react";

interface IDataItem {
	id: string;
	question: string;
	answer: string;
}

const Books = () => {
   const [books, setbooks] = useState<IDataItem[]>([]);
		useEffect(() => {
			const fetchData = async () => {
				try {
					const response = await fetch(
						"https://salvation-ministries.up.railway.app/api/v1/misc/faq/all"
					);
					if (!response.ok) {
						throw new Error("Failed to fetch data");
					}
					const result = await response.json();
					setbooks(result.data);
				} catch (error) {
					setbooks([]);
				} finally {
					return;
				}
			};

			fetchData();
		}, []);
  return (
     <div className="flex flex-col gap-5 items-center justify-center p-5 text-center">
        <p className='text-primary-blue text-xl'>Discover your next book</p>

        <p className="text-gray-500">Coming soon</p>
    </div>
  )
}

export default Books