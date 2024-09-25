

import React, { useEffect, useState } from 'react';
import PageNames from "../../components/PageNames";

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [filteredImages, setFilteredImages] = useState([]);
    const [activeGroup, setActiveGroup] = useState('all');

    useEffect(() => {
        const fetchImages = async () => {
            // Fetch the JSON from the public directory
            const response = await fetch('/data/gallery.json'); 
            const data = await response.json();
            setImages(data);
            // Initialize with all images
            setFilteredImages(data); 
        };

        fetchImages();
    }, []);

    const handleGroupChange = (group) => {
        setActiveGroup(group);
        if (group === 'all') {
            setFilteredImages(images);
        } else {
            setFilteredImages(images.filter(image => image.group === group));
        }
    };

    return (
        <div className="container box-border w-full lg:w-10/12 mx-auto h-auto">
            <div className="wrapper mt-8">
                <PageNames />

                <div className="flex items-center justify-center mt-16">
                    <h1 className="volunteer-header font-bold leading-10 text-center 
                    text-darkgrey-100 text-4xl ml-10 uppercase">
                        Gallery
                    </h1>
                </div>

                <div className='gallery-nav mt-8'>
                    <nav className='flex justify-center gap-3 mb-5'>
                        {['all', 'group1', 'group2', 'group3','team'].map((group) => (
                            <button
                                key={group}
                                onClick={() => handleGroupChange(group)}
                                className={`px-4 py-2 rounded border-galleryBorder
                                    ${activeGroup === group ? 'bg-main-orange text-white' : 'bg-neutral-white text-black'}
                                    border transition duration-200 capitalize hover:bg-main-orange hover:text-white`}
                            >
                                {group} 
                            </button>
                        ))}
                    </nav>
                    <div className="gallery grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4 mt-4">
                        {filteredImages.map((image, index) => (
                            <div className='' key={index}>
                                <img src={image.src} alt={image.alt} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
