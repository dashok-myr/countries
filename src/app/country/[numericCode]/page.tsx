import { COUNTRIES } from "../../../../contries-data";

export default function CountryDescription({ params }) {
  console.log(params, "params");
  const { numericCode } = params;

  if (!numericCode) return null;

  const country = COUNTRIES.find((country) => {
    return country.numericCode === numericCode;
  });

  if (!numericCode || !country) return null;

  return <div>{country.name}</div>;
}
