function Discover() {
  return (
    <div className="p-4 ">
      <h1 className="text-2xl font-bold p-4">Discover Things to do</h1>
      <div className="flex space-x-4 max-w-screen overflow-auto hide-scroll rounded-lg">
        <div>
          <img
            className="min-w-[270px] rounded-lg"
            src="./Assets/sheep.webp"
            alt=""
          />
          <h1 className="text-xl font-semibold">Experiences</h1>
          <p className="text-sm">find unforgetable acivities near you</p>
        </div>
        <div>
          <img
            className="min-w-[270px] rounded-lg"
            src="./Assets/online-exp.webp"
            alt=""
          />
          <h1 className="text-xl font-semibold">Online Experiences</h1>
          <p className="text-sm">Live, interactive activities led by hosts</p>
        </div>
        <div className="relative">
          <img
            className="min-w-[270px] rounded-lg"
            src="./Assets/olompics.webp"
            alt=""
          />
          <p className="absolute top-2 left-2 bg-white p-1 text-blue-700 font-semibold rounded-lg text-sm">
            Featured
          </p>
          <h1 className="text-xl font-semibold">Olyompians & Paralympians</h1>
          <p className="text-sm">find unforgetable acivities near you</p>
        </div>
      </div>
    </div>
  );
}

export default Discover;
