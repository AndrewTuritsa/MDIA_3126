'use client';
import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [imageData, setImageData] = useState(null);
  // TODO
  //
  // - Button that fetches
  // - Container for buttons
  // - fetch contnet (handle and format)
  // - error handling
  // - styling
  // - breakpoints (mobile-fisrt methodology)


  async function fetchImage() {
    const API_URL = "https://picsum.photos/v2/list?limit=5"
    setLoading(true);
    const response = await fetch(API_URL);
    const data = await response.json();

    // console.log("button clicked");
    // alert('Button Clicked');
    setImageData(data);
    setLoading(false);
  }


  const Header = () => {
    return(
      <section>
        <h1>Midterm app</h1>
        <button 
        className='border-2'
        onClick={fetchImage}>
        Get Image
        </button>
      </section>
    )
  };

  const ImageListContainer = () => {
    if(loading) {
    return <section>Loading...</section>
    }
    if (imageData) {
      const imageListItems = [];

      imageData.forEach((image, i) => {
        imageListItems.push(
          <article key={image.id}>
            <img src={image.download_url}/>
            <p>Author: {image.author}</p>
            <a href={image.download_url}>Download</a>
            <hr/>   
          </article>)
      });
        return(
          <section>{imageListItems}</section>
        )
    };

  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <ImageListContainer />
    </div>
  );
}
