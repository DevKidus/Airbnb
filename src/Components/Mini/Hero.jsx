function Hero() {
  return (
    <div className="relative">
      <img
        className="h-[calc(100vh-200px)] w-full object-cover"
        src="./Assets/Hero.webp"
        alt="Hero"
      />
      <div
        className="absolute top-1/2 left-1/2 grid place-items-center space-y-5"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <p className="font-semibold text-xl text-center">
          Not Sure Where to go? Perfect
        </p>
        <button className="bg-white rounded-full shadow-lg px-5 py-2 font-bold text-purple-600 md:text-xl md:px-7 md:py-4 hover:shadow-md transition-all duration-300">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Hero;
