import React, { useState } from "react";

export default function WordCounter() {
  const [text, setText] = useState("");

  const words = text.trim().split(/\s+/).filter(Boolean);

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">🧠 Word Counter</h2>
      <textarea value={text} onChange={(e) => setText(e.target.value)} className="border p-2 w-full h-40"></textarea>
      <p className="mt-2">Words: {words.length}</p>
      <p>Characters: {text.length}</p>
    </div>
  );
}
