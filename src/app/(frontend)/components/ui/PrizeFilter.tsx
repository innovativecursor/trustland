import { useState } from "react";

const PriceFilter: React.FC = () => {
  const [range, setRange] = useState<number>(10); // Default value in range

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRange(Number(e.target.value));
  };

  return (
    <div className="p-4">
      <h3 className="font-medium mb-2">Filter by Price</h3>
      <p className="ml-2 text-sm text-gray-400 font-semibold">
        Your Range: {range - 2}M – {range + 2}M
      </p>
      <div className="relative">
        {/* Single Range Slider */}
        <input
          type="range"
          min="3"
          max="20"
          value={range}
          onChange={handleChange}
          className="w-full h-2 bg-gray-200 rounded-full appearance-none accent-[#339438]"
        />
      </div>
      <hr className="text-gray-400 mt-6" />
    </div>
  );
};

export default PriceFilter;