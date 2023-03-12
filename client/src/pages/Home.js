import React, { useEffect, useState } from 'react'
import { Image } from 'cloudinary-react';

function Home() {

    const [imageIds, setImageIds]= useState([]);

    const loadImages=async()=>{
        try {
            const res=await fetch('/api/images');
            const data= await res.json();
            console.log(data);
            setImageIds(data);
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadImages();
    },[])
    

  return (
    <div>
    <h1 className="title">Cloudinary Gallery</h1>
    <div className="gallery">
        {imageIds &&
            imageIds.map((imageId, index) => (
                <Image
                    key={index}
                    cloudName="da7gxivyc"
                    publicId={imageId}
                    width="300"
                    crop="scale"
                />
            ))}
    </div>
</div>
  )
}

export default Home