// BMICalculator.jsx
import React, { useState } from "react";

export default function BMICalculator() {
  const [height, setHeight] = useState(""); // cm
  const [weight, setWeight] = useState(""); // kg
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculate = (e) => {
    e.preventDefault();
    const h = Number(height) / 100; // meters
    const w = Number(weight);
    if (!h || !w) return alert("Please enter valid height and weight");
    const val = w / (h * h);
    const rounded = Number(val.toFixed(2));
    setBmi(rounded);

    let cat = "Unknown";
    if (rounded < 18.5) cat = "Underweight";
    else if (rounded < 25) cat = "Normal";
    else if (rounded < 30) cat = "Overweight";
    else cat = "Obese";
    setCategory(cat);
  };

  return (
    <div style={{ padding: 20, maxWidth: 420, margin: "auto", textAlign: "center" }}>
      <h3>BMI Calculator</h3>
      <form onSubmit={calculate}>
        <input
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value.replace(/[^\d.]/g, ""))}
          style={{ padding: 8, width: "45%", marginRight: "8%", borderRadius: 6, border: "1px solid #ccc" }}
        />
        <input
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value.replace(/[^\d.]/g, ""))}
          style={{ padding: 8, width: "45%", borderRadius: 6, border: "1px solid #ccc" }}
        />
        <div style={{ marginTop: 12 }}>
          <button type="submit" style={{ padding: "8px 16px", borderRadius: 6 }}>Calculate</button>
        </div>
      </form>

      {bmi !== null && (
        <div style={{ marginTop: 16 }}>
          <p><b>BMI:</b> {bmi}</p>
          <p><b>Category:</b> {category}</p>
        </div>
      )}
    </div>
  );
}
