import React, { useState } from "react";

interface ImageCarouselProps {
  images: string[];
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const nextImage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false); 
  };

  return (
    <div className="md:w-[500px] md:h-[500px] w-[300px] h-[300px] xl:w-[700px] xl:h-[600px] flex justify-between gap-x-7  xl:gap-x-40">
      <button
        onClick={prevImage}
        className="transform p-2 md:bg-black/20 h-[50px] w-[48px] rounded-full mt-auto mb-auto"
      >
        &#8592;
      </button>

      <div className="relative w-full h-full overflow-hidden">
        <div
          className={`absolute w-full h-full flex transition-all duration-500 ease-in-out`}
          style={{
            transform: `translateX(-${currentImageIndex * 100}%)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Imagen del producto ${index + 1}`}
              className="w-full h-full "
              loading="lazy"
            />
          ))}
        </div>
      </div>

      <button
        onClick={nextImage}
        className="transform p-2 md:bg-black/20 h-[50px] w-[48px] rounded-full mt-auto mb-auto"
      >
        &#8594;
      </button>
    </div>
  );
};
