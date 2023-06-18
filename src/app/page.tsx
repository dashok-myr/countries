'use client'
import Dropdown from "@/components/Dropdown";
import { COUNTRIES } from "../../contries-data";
import React, { useState } from "react";
import InputSearch from "@/components/InputSearch";
import CountryCard from "@/components/CountryCard";

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
      <div className="flex flex-col gap-4 md:flex md:flex-row md:justify-between md:items-center md:mb-4">
        <InputSearch
          searchValue={searchValue}
          onSearch={(e) => setSearchValue(e.target.value)}
        />
        <div className="self-end mb-4 md:mb-0 md:self-auto">
          <Dropdown
            values={continents}
            label="Filter by region"
            onItemSelect={(value) => {
              setSelectedContinent(value);
            }}
            selectedValue={selectedContinent}
          />
        </div>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-4 items-center gap-14 ">
        <CountryCard countries={countries} />
      </div>
    </div>
  );
}
