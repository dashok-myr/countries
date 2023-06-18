import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface ButtonProps {
  icon: string | StaticImageData;
}

export default function Button({ icon }: ButtonProps) {
  return (
    <div className="relative">
      <Image src={icon} alt="arrow" className="absolute h-4 w-4 top-1 left-5" />
      <Link
        href="/"
        className="bg-dark-blue text-gray-200 shadow-xl py-2 pl-12 pr-8 rounded-xl"
      >
        Back
      </Link>
    </div>
  );
}
