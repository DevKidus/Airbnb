import { useContext, useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { DataContext } from "../Context API/Data";
import { format } from "date-fns";

import Loading from "./Common/Loading";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import { rooms } from "../FakeDb/data";
import Room from "./Mini/Room";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function Search() {
  let { searchLoading } = useContext(DataContext);
  let history = useHistory();
  if (history.action === "POP") history.push("/");

  let { search, startDate, endDate, noGuests } = history.location.params;

  let formatStartDate = format(new Date(startDate), "dd MMMM yy");
  let formatEndDate = format(new Date(endDate), "dd MMMM yy");

  let range = `${formatStartDate} - ${formatEndDate}`;

  let choose = useRef();

  return (
    <div className="mt-[78px]">
      <Header placeholder={`${search} | ${range} | ${noGuests} guests`} />
      {searchLoading ? (
        <Loading />
      ) : (
        <div className="p-8">
          <p className="font-semibold">300+ Stays</p>
          <p className="font-semibold">{range}</p>
          <p className="font-semibold">for {noGuests} guests</p>
          <h1 className="font-semibold text-3xl">Stays in {search}</h1>
          <div>
            <div className="flex justify-end space-x-3">
              <div
                className=" place-items-center hidden sm:grid md:hidden   cursor-pointer text-xl "
                onClick={(e) => {
                  choose.current.scrollTo(0, 0);
                }}
              >
                <FaAngleLeft />
              </div>
              <div
                className={`inline-flex pb-4  mt-5 space-x-3  overflow-y-hidden overflow-x-auto w-0 md:h-auto transition-all duration-200 hide-scroll  h-auto max-w-screen scroll-smooth`}
                ref={choose}
              >
                <p className="option">Cancellation availability</p>
                <p className="option">types of places</p>
                <p className="option">Price based</p>
                <p className="option">Rooms and beds</p>
                <p className="option">More+</p>
              </div>
              <div
                className=" place-items-center hidden sm:grid md:hidden   cursor-pointer text-xl "
                onClick={() => {
                  choose.current.scrollTo(1000, 0);
                }}
              >
                <FaAngleRight />
              </div>
            </div>
          </div>
          <div className="space-y-5">
            {rooms.map((room) => {
              return <Room key={room.id} room={room} />;
            })}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Search;
