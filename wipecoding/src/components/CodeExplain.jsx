import { useState } from "react";
import openai from "openai";

const CodeExplain = () => {
  const [code, setCode] = useState("");
  const [explanation, setExplanation] = useState("");

  const explainCode = async () => {
    const response = await openai.createCompletion({
      model: "gpt-4",
      prompt: `Explain the following code:\n${code}`,
      max_tokens: 100,
    });
    setExplanation(response.data.choices[0].text);
  };

  return (
    <div>
      <textarea value={code} onChange={(e) => setCode(e.target.value)} />
      <button onClick={explainCode}>Explain</button>
      <p>{explanation}</p>
    </div>
  );
};

export default CodeExplain;
