import { useEffect, useState } from "react";

function LiveAnyWhere() {
  return (
    <div className="p-4 ">
      <div>
        <h1 className="text-2xl font-bold my-4">Live anywhere</h1>
        <div className="max-w-screen flex overflow-x-auto space-x-4 hide-scroll rounded-lg lg:justify-around">
          <div>
            <img
              className="rounded-lg min-w-[250px]"
              src="./Assets/img-3.webp"
              alt=""
            />
            <p className="font-semibold text-xl">Outdoor gateways</p>
          </div>
          <div>
            <img
              className="rounded-lg min-w-[250px]"
              src="./Assets/img-1.webp"
              alt=""
            />
            <p className="font-semibold text-xl">Unique Stays</p>
          </div>
          <div>
            <img
              className="rounded-lg min-w-[250px]"
              src="./Assets/img-2.webp"
              alt=""
            />
            <p className="font-semibold text-xl">Entire homes</p>
          </div>
          <div>
            <img
              className="rounded-lg min-w-[250px]"
              src="./Assets/img-1.webp"
              alt=""
            />
            <p className="font-semibold text-xl">Pets Allowed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveAnyWhere;
