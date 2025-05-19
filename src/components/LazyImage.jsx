import { useRef } from "react";

const LazyImage = ({ src, alt, className }) => {
  const imgRef = useRef();

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
    />
  );
};

export default LazyImage;
