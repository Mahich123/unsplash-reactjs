import React, { useState } from "react";
import unsplash from "./unsplash.js"

function Home() {
  const [images, setImages] = useState([]);

  unsplash("hello world",
    (res) => {
      setImages(res.images);
    }
  )

  return (
        images.map((image, i) => (
          <a ref="nofollow" target="_blank" href={image}>{image}</a>
        ))
  );
}

export default Home;