import React, { useState } from "react";

export default function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(10);

  const total = bill + (bill * tip) / 100;

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">💰 Tip Calculator</h2>
      <input type="number" placeholder="Bill Amount" value={bill} onChange={(e) => setBill(Number(e.target.value))} className="border p-2 mb-2" />
      <br />
      <input type="number" placeholder="Tip %" value={tip} onChange={(e) => setTip(Number(e.target.value))} className="border p-2 mb-2" />
      <p className="text-xl mt-2">Total: ₹{total.toFixed(2)}</p>
    </div>
  );
}

