import React from "react";
import Image from "next/image";
import searchIconWhite from "../../public/icons/search-white.png";
import searchIconBlack from "../../public/icons/search-black.png";
import { useTheme } from "next-themes";

interface Props {
  searchValue: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputSearch({ searchValue, onSearch }: Props) {
  const { resolvedTheme } = useTheme();

  let iconSrc;

  switch (resolvedTheme) {
    case "light":
      iconSrc = searchIconBlack;
      break;
    case "dark":
      iconSrc = searchIconWhite;
      break;
  }

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-3 flex items-center pl-3 pointer-events-none">
        <Image
          className="w-5 h-5"
          // @ts-ignore
          src={iconSrc}
          alt="search"
        />
      </div>
      <input
        onChange={onSearch}
        className="bg-white dark:bg-dark-blue text-black dark:text-white text-sm rounded-lg block w-full pl-12 p-2.5"
        placeholder="Search for a country"
        value={searchValue}
      />
    </div>
  );
}
