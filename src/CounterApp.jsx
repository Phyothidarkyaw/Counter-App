import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import useCounterStore from "./useStore";

const CounterApp = () => {
  // const [count, setCount] = useState(0);
  const { count, increaseCount, resetCount, decreaseCount } = useCounterStore();
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

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleIncreaseBtn = () => {
    // setCount(count + 1);
    increaseCount();
    startAnimation();
  };
  const handleResetBtn = () => {
    // setCount(0);
    resetCount();
    startAnimation();
  };
  const handleDecreaseBtn = () => {
    // count > 0 && setCount(count - 1);
    count > 0 && decreaseCount();
    startAnimation();
  };
  return (
    <Container>
      <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 p-4">
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
              <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 blur-lg opacity-30 rounded-full"></div>
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

          {/* Footer */}
          <div className="pt-8 border-t border-gray-200">
            <div className="text-center text-gray-500 text-sm">
              <p>Built with React & Tailwind CSS</p>
              <p className="mt-1">Press and hold for rapid counting</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CounterApp;
