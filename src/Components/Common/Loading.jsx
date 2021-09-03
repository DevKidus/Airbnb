function Loading() {
  return (
    <div className="grid place-items-center py-3">
      <div className="loader">
        <svg className="circular-loader" viewBox="25 25 50 50">
          <circle
            className="loader-path"
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke="#70c542"
            strokeWidth="4"
          />
        </svg>
      </div>
    </div>
  );
}

export default Loading;
