import { useEffect, useState } from 'react';

import './App.css';
import axios from 'axios';
import RocketLoader from "./composants/RocketLoader.tsx";
import HeroSection from "./composants/HeroSection.tsx";

const API_KEY = '';
const BASE_URL = 'https://api.nasa.gov/planetary/apod';// Pour styliser le mur

async function fetchApodImages (count = 10) {
    try {
        const response = await axios.get(`${BASE_URL}?api_key=${API_KEY}&count=${count}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching APOD data:', error);
        return [];
    }
}

type ApodImage = {
    date: string;
    explanation: string;
    url: string;
    title: string;
    media_type: string;
};

const App = () => {
    const [images, setImages] = useState<ApodImage[]>([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        loadImages();
    }, [page]);

    const loadImages = async () => {
        setLoading(true);
        const newImages = await fetchApodImages(10); // Charge 10 images à la fois
        setImages((prevImages) => [...prevImages, ...newImages]);
        setLoading(false);
    };

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const fullHeight = document.documentElement.scrollHeight;

        if (scrollY + windowHeight >= fullHeight - 100 && !loading) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading]);

    return (

        <div className="min-h-screen bg-gray-900 text-white">
            <div className="container mx-auto py-10 px-5">
                <HeroSection/>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {images.map((image) => (
                        <div
                            key={image.date}
                            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105"
                        >
                            <img
                                src={image.url}
                                alt={image.title}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                                <p className="text-sm text-gray-400">{image.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {loading && <RocketLoader/>}
            </div>
        </div>
    );
};

export default App;