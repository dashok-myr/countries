import Dropdown from "@/components/Dropdown";
import { COUNTRIES } from "../../contries-data";
import React, { useState } from "react";
import InputSearch from "@/components/InputSearch";
import CountryCard from "@/components/CountryCard";
import Link from "next/link";

const continents = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedContinent, setSelectedContinent] = useState("All");

  let countries = COUNTRIES;
  if (searchValue) {
    countries = countries.filter((country) => {
      if (country.name.toLowerCase().includes(searchValue)) {
        return country;
      }
    });
  }

  if (selectedContinent !== "All") {
    countries = countries.filter((country) => {
      return country.region.toLowerCase() === selectedContinent.toLowerCase();
    });
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <InputSearch
          searchValue={searchValue}
          onSearch={(e) => setSearchValue(e.target.value)}
        />
        <Dropdown
          values={continents}
          label="Filter by region"
          onItemSelect={(value) => {
            setSelectedContinent(value);
          }}
          selectedValue={selectedContinent}
        />
      </div>
      <div className="items-center">
        <CountryCard countries={countries} />
      </div>
    </div>
  );
}
