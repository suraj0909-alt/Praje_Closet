import { useState } from "react";
import "./ProductGallery.css";

export default function ProductGallery({ images, name }) {
  const [active, setActive] = useState(0);

  return (
    <div className="product-gallery">
      <div className="gallery-main">
        <img src={images[active]} alt={name} />
      </div>
      <div className="gallery-thumbs">
        {images.map((src, i) => (
          <button
            key={src + i}
            className={`gallery-thumb ${i === active ? "active" : ""}`}
            onClick={() => setActive(i)}
            aria-label={`View image ${i + 1}`}
          >
            <img src={src} alt="" />
          </button>
        ))}
      </div>
    </div>
  );
}
