import Image from "next/image";
import arrowWhiteIcon from "../../public/icons/arrow-down-white.png";
import arrowBlackIcon from "../../public/icons/black-arrow.png";
import { useState } from "react";
import { useTheme } from "next-themes";

interface DropdownProps {
  values: string[];
  label: string;
  onItemSelect: (value: string) => void;
  selectedValue: string;
}

export default function Dropdown({
  values,
  label,
  onItemSelect,
  selectedValue,
}: DropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { resolvedTheme } = useTheme();

  let iconSrc;

  switch (resolvedTheme) {
    case "light":
      iconSrc = arrowBlackIcon;
      break;
    case "dark":
      iconSrc = arrowWhiteIcon;
      break;
  }

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="items-center inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white dark:bg-dark-blue px-3 py-2 text-sm font-semibold text-dark-blue dark:text-gray-200 shadow-sm hover:bg-gray-200 dark:hover:bg-gray-900"
          id="menu-button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {label}
          <Image
            // @ts-ignore
            src={iconSrc}
            className="inset-y-0 left-3 flex items-center pl-3 pointer-events-none h-4 w-6"
            alt="arrow-down"
          />
        </button>
      </div>
      {isDropdownOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-dark-blue shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
        >
          {values.map((value) => {
            return (
              <button
                key={value}
                className={`block px-4 py-3 text-sm ${
                  selectedValue === value
                    ? "text-green-700"
                    : "text-dark-blue dark:text-gray-200"
                }`}
                onClick={() => {
                  onItemSelect(value);
                }}
              >
                {value}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
