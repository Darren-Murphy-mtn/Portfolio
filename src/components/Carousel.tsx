import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  images: string[];
  basePath: string;
  alt: string;
}

export default function Carousel({ images, basePath, alt }: CarouselProps) {
  const [index, setIndex] = useState(0);
  function prev() {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }
  function next() {
    setIndex((i) => (i + 1) % images.length);
  }
  return (
    <div className="relative">
      <Image
        src={`/${basePath}/${images[index]}`}
        alt={alt}
        width={800}
        height={450}
        className="w-full rounded"
        priority={index === 0}
      />
      {images.length > 1 && (
        <>
          <button
            aria-label="Previous image"
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded bg-black/50 p-1 text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Next image"
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded bg-black/50 p-1 text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}
    </div>
  );
}