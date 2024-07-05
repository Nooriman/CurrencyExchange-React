import "./App.css";
import { countryList } from "../../utilities/countryList";
import { map } from "lodash";
import { CountryDetails } from "../../utilities/interface";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {map(countryList, (country: CountryDetails) => (
        <>
          <span>Name: {country.name}</span>
          <span>Prefix: {country.prefix}</span>
          <span>Country Code: {country.country_code}</span>
          <hr />
        </>
      ))}
    </div>
  );
}

export default App;
