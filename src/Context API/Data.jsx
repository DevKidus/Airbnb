import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  let [searchLoading, setSearchLoading] = useState(true);
  let [search, setSearch] = useState("");

  let [homeLoading, setHomeLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setHomeLoading(false);
    }, 3000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setSearchLoading(false);
    }, 3000);
  }, []);

  return (
    <DataContext.Provider
      value={{ homeLoading, searchLoading, search, setSearch }}
    >
      {children}
    </DataContext.Provider>
  );
};
