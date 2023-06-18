import Image from "next/image";
import { ICountry } from "@/app/ICountries";
import Link from "next/link";

interface CountryCardProps {
  countries: ICountry[];
}

export default function CountryCard({ countries }: CountryCardProps) {
  if (!countries.length) return null;

  return (
    <>
      {countries.map((country) => {
        return (
          <Link key={country.name} href={`/country/${country.numericCode}`}>
            <div className="flex flex-col">
              <div className="h-[170px]">
                <Image
                  className="object-cover h-full"
                  src={country.flags.png}
                  alt="flag"
                  width={650}
                  height={750}
                />
              </div>
              <div className="bg-white dark:bg-dark-blue p-5">
                <div className="flex flex-col text-very-dark-blue dark:text-gray-200">
                  <div className="text-xl font-semibold pb-3">
                    {country.name}
                  </div>
                  <div className="">
                    <div className="flex">
                      <div className="text-lg font-medium">Population: </div>
                      <div className="font-light">{country.population}</div>
                    </div>
                    <div className="flex">
                      <div className="font-medium">Region: </div>
                      <div className="font-light">{country.region}</div>
                    </div>
                    <div className="flex">
                      <div className="font-medium">Capital: </div>
                      <div className="font-light">{country.capital}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
}
