import React from "react";

interface ImageType extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  src: string;
  alt: string;
}

export const Image: React.FC<ImageType> = ({
  className,
  src,
  alt,
  ...props
}) => {
  return (
    <div className={`${className} overflow-hidden `}>
      <img
        className="object-cover w-full h-full bg-center"
        src={src}
        alt={alt}
        {...props}
      />
    </div>
  );
};
