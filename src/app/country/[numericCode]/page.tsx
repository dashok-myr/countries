import { COUNTRIES } from "../../../../contries-data";
import Image from "next/image";
import whiteArrow from "../../../../public/icons/white-arrow.png";
import React from "react";
import Button from "@/components/Button";

export default function CountryDescription({
  params,
}: {
  params: { numericCode: string };
}) {
  const { numericCode } = params;

  if (!numericCode) return null;

  const country = COUNTRIES.find((country) => {
    return country.numericCode === numericCode;
  });

  if (!numericCode || !country) return null;

  return (
    <div className="max-w-[80%] h-full m-auto mt-10 md:mt-20">
      <Button icon={whiteArrow} />
      <div className="flex flex-col md:flex md:flex-row justify-center items-center mt-10">
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20">
          <div className="flex flex-col flex-1">
            <Image
              src={country.flags.png}
              alt="flag"
              width="800"
              height="900"
            />
          </div>
          <div className="flex flex-col flex-1 self-auto md:self-center max-h-96">
            <div className="font-bold text-2xl pb-5 text-very-dark-blue dark:text-white">
              {country.name}
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-3 text-very-dark-blue dark:text-gray-200">
              <div className="flex flex-col gap-2">
                <div className="flex">
                  <div className="font-medium">Native Name:</div>
                  <div className="font-thin">{country.nativeName}</div>
                </div>
                <div className="flex">
                  <div className="font-medium">Population:</div>
                  <div className="font-thin">{country.population}</div>
                </div>
                <div className="flex">
                  <div className="font-medium">Region:</div>
                  <div className="font-thin">{country.region}</div>
                </div>
                <div className="flex">
                  <div className="font-medium">Sub Region:</div>
                  <div className="font-thin">{country.subregion}</div>
                </div>
                <div className="flex">
                  <div className="font-medium">Capital:</div>
                  <div className="font-thin">{country.capital}</div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex">
                  <div className="font-medium">Top Level Domain: </div>
                  <div className="font-thin">{country.topLevelDomain[0]}</div>
                </div>
                <div className="flex">
                  <div className="font-medium">Currencies:</div>
                  <div className="font-thin">{country.currencies[0].name}</div>
                </div>
                <div className="flex">
                  <div className="font-medium">Languages:</div>
                  <div className="font-thin">{country.languages[0].name}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
