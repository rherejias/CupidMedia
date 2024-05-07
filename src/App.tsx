import { useCallback, useEffect, useState } from "react";
import Select from "./components/Select";
import { ICountry, ICountryState } from "./types";
import { getCountry, getState } from "./services/api";

function App() {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<ICountry>();

  const [states, setStates] = useState<ICountryState[]>([]);
  const [selectedState, setSelectedState] = useState<ICountryState>();

  const fetchCountries = async () => {
    setCountries(await getCountry());
  };

  const fetchStates = useCallback(async () => {
    setStates(await getState(selectedCountry!.id));
  }, [selectedCountry?.id])

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    selectedCountry?.id && fetchStates();
  }, [selectedCountry?.id])

  return (
    <div className="mt-6 w-96 mx-auto flex flex-col gap-3" >
      <h1>
        Country Selector
      </h1>
      <Select
        label="Country"
        value={selectedCountry?.id}
        options={countries.map(({ id: value, value: label }) => ({
          value,
          label,
        }))}
        onChange={(value) => {
          setSelectedCountry(countries.find(({ id }) => id === value));
          setSelectedState(undefined);
        }}
      />
      <Select
        label="States"
        value={selectedState?.id}
        options={states.map(({ id: value, value: label }) => ({
          value,
          label,
        }))}
        onChange={(value) => setSelectedState(states.find(({ id }) => id === value))}
      />

      {(selectedCountry && selectedState) && <div>
        You selected {selectedCountry?.value} - {selectedState?.value}
      </div>}
    </div>
  );
}

export default App;
