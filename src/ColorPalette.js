import React, { useState } from "react";

export default function ColorPalette() {
  const [colors, setColors] = useState([]);

  const generatePalette = () => {
    const newColors = Array.from({ length: 5 }, () => "#" + Math.floor(Math.random() * 16777215).toString(16));
    setColors(newColors);
  };

  return (
    <div className="text-center p-6">
      <h2 className="text-2xl font-bold mb-4">🎨 Color Palette Generator</h2>
      <button onClick={generatePalette} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
        Generate Palette
      </button>
      <div className="flex justify-center gap-2">
        {colors.map((c, i) => (
          <div key={i} style={{ backgroundColor: c }} className="w-20 h-20 rounded shadow" title={c}></div>
        ))}
      </div>
    </div>
  );
}
