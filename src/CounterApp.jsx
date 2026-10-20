import { useRef, useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [animate, setAnimate] = useState(false);
  const timeoutRef = useRef(null);

  const startAnimation = () => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Start animation
    setAnimate(true);

    // Set timeout to stop animation after 1000ms
    timeoutRef.current = setTimeout(() => {
      setAnimate(false);
      timeoutRef.current = null;
    }, 100);
  };

  const handleIncreaseBtn = () => {
    setCount(count + 1);
    startAnimation();
  };
  const handleResetBtn = () => {
    setCount(0);
    startAnimation();
  };
  const handleDecreaseBtn = () => {
    count > 0 && setCount(count - 1);
    startAnimation();
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 md:p-10 space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
            Counter App
          </h1>
          <p className="text-gray-500 text-lg">
            Click to increase or decrease the count
          </p>
        </div>

        {/* Counter Display */}
        <div className="space-y-10">
          <div className="relative text-center">
            <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 blur-lg opacity-20 rounded-full"></div>
            <h1
              className={`relative text-9xl md:text-10xl font-bold  bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${
                animate ? "scale-80" : ""
              }`}
            >
              {count}
            </h1>
          </div>

          {/* Button Row */}
          <div className="grid grid-cols-3 gap-4">
            {/* Decrease Button */}
            <button
              onClick={handleDecreaseBtn}
              className="bg-red-600 text-white py-4 px-2 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-red-500 hover:shadow-lg hover:-translate-y-1 active:translate-y-1"
            >
              -
            </button>

            {/* Reset Button */}
            <button
              onClick={handleResetBtn}
              className="bg-gray-600 text-white py-4 px-2 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-gray-500 hover:shadow-lg hover:-translate-y-1 active:translate-y-1"
            >
              Reset
            </button>

            {/* Increase Button */}
            <button
              onClick={handleIncreaseBtn}
              className="bg-green-600 text-white py-4 px-2 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-green-500 hover:shadow-lg hover:-translate-y-1 active:translate-y-1"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterApp;
