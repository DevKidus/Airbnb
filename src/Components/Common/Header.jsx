import { FaUserCircle, FaUsers } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { FiGlobe } from "react-icons/fi";
import { MdMenu } from "react-icons/md";
import { SiAirbnb } from "react-icons/si";
import { Link, useHistory } from "react-router-dom";
import { useContext, useState } from "react";

// Data picker styles
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { DataContext } from "../../Context API/Data";

function Header({ placeholder }) {
  let { search, setSearch } = useContext(DataContext);
  let [startDate, setStartDate] = useState(new Date());
  let [endDate, setEndDate] = useState(new Date());
  let [noGuests, setnoGuests] = useState(1);

  let history = useHistory();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <header className={`z-50 w-full fixed top-0  bg-white shadow-md`}>
      <div
        className={`z-50 w-full grid sm:grid-cols-4 py-4 md:grid-cols-3 grid-cols-1  items-center  px-8  transition-all duration-300 bg-white `}
      >
        {/* Left - Logo, Search*/}
        <Link to="/" className="items-center relative hidden sm:inline-flex">
          <img className="h-8" src="https://links.papareact.com/qd3" alt="" />
        </Link>

        {/* Middle - Search */}
        <div className="flex items-center space-x-3 sm:col-span-2 md:col-span-1 text-red-400">
          <Link to="/" className="text-3xl sm:hidden">
            <SiAirbnb />
          </Link>

          <div className=" flex-grow flex items-center border-2 h-full p-1 rounded-full shadow-md w-full  bg-white ">
            <input
              className={`flex-grow w-full h-full outline-none bg-transparent  px-2 text-gray-600 placeholder-gray-400 `}
              type="text"
              placeholder={placeholder || "Start your search"}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <div>
              <BiSearch
                className="cursor-pointer bg-red-500 text-white p-1.5 h-8 w-8 rounded-full font-semibold"
                onClick={() => {
                  history.push({
                    pathname: "/search",
                    params: {
                      search,
                      startDate: startDate.toISOString(),
                      endDate: endDate.toISOString(),
                      noGuests,
                    },
                  });

                  setSearch("");
                }}
              />
            </div>
          </div>
        </div>

        {/* Right - Become, Globe, Menu, User*/}
        <div
          className={`hidden sm:flex justify-end items-center text-gray-600 space-x-3 text-xl  `}
        >
          <p className="hidden md:inline-flex font-semibold text-base">
            Become a host
          </p>
          <FiGlobe />
          <div className="flex border-2 p-2 rounded-full space-x-2">
            <MdMenu />
            <FaUserCircle />
          </div>
        </div>
      </div>

      {search && (
        <div className="w-full grid place-content-center">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5861"]}
            onChange={({ selection }) => {
              setStartDate(selection.startDate);
              setEndDate(selection.endDate);
            }}
          />
          <div className="w-full flex justify-between items-center border-b p-2 mb-2">
            <h1 className="font-bold text-2xl">No of guests</h1>
            <div className="flex justify-end items-center">
              <FaUsers className="text-2xl" />
              <input
                className="w-[70px] border-2 text-red-400 p-1 ml-3 rounded-md font-semibold text-center text-xl"
                type="number"
                value={noGuests}
                min={1}
                onChange={(e) => setnoGuests(e.target.value)}
              />
            </div>
          </div>
          <div className="flex py-2">
            <button
              className="flex-grow text-gray-600"
              onClick={() => {
                setSearch("");
              }}
            >
              Cancel
            </button>
            <button
              className="flex-grow text-red-400"
              onClick={() => {
                history.push({
                  pathname: "/search",
                  params: {
                    search,
                    startDate: startDate.toISOString(),
                    endDate: endDate.toISOString(),
                    noGuests,
                  },
                });
                setSearch("");
              }}
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
