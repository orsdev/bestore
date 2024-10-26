"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

interface ICustomImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const placeholderImage = "https://fakeimg.pl/250x250";

const CustomImage = ({ src, alt, width, height, className }: ICustomImage) => {
  const isLoadedRef = useRef(false);
  const [isBrokenImage, setIsBrokenImage] = useState(false);

  useEffect(() => {
    isLoadedRef.current = true;
  }, []);

  const imageSrc = useMemo(() => {
    if (!isLoadedRef.current) {
      return placeholderImage;
    } else if (isLoadedRef.current && !isBrokenImage) {
      return src;
    } else {
      return placeholderImage;
    }
  }, [isBrokenImage, isLoadedRef]);

  return (
    <>
      <Image
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcdnhDPQAHCgKqPe59lgAAAABJRU5ErkJggg=="
        className={cn("w-full", className)}
        onError={() => {
          setIsBrokenImage(true);
        }}
      />
    </>
  );
};

export default CustomImage;
