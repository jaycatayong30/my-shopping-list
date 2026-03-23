import React, { useState, useEffect, useMemo } from "react";

const startCurr = [
  "USD",
  "EUR",
  "JPY",
  "GBP",
  "CNY",
  "INR",
  "CHF",
  "CAD",
  "BRL",
  "ZAR",
];

const targetCurr = [
  "USD",
  "EUR",
  "JPY",
  "GBP",
  "CNY",
  "INR",
  "CHF",
  "CAD",
  "BRL",
  "ZAR",
];

export function CurrencyConverter() {
  const [val, setVal] = useState(1);
  const [startCurrency, setStartCurrency] = useState();
  const [targetCurrency, setTargetCurrency] = useState();
  const [amount, setAmount] = useState();
  const [conversion, setConversion] = useState();

  return (
    <div>
      <div>
        <h1>Currency Converter</h1>
      </div>
      <div>
        <label>
          {startCurrency}`to`{targetCurrency} Conversion
        </label>
        <input
          type="number"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      </div>
      <div>
        <label className="section column">
          Start Currrency
          <select
            value={startCurrency}
            onChange={(e) => setStartCurrency(e.target.value)}
          >
            <option value="">Select one</option>
            {startCurr.map((sCurr) => (
              <option key={sCurr} value={sCurr}>
                {sCurr}
              </option>
            ))}
          </select>
        </label>
        <label>
          Target Currency
          <select
            value={targetCurrency}
            onChange={(e) => setTargetCurrency(e.target.value)}
          >
            <option value="">Select one</option>
            {targetCurr.map((tCurr) => (
              <option key={tCurr} value={tCurr}>
                {tCurr}
              </option>
            ))}
          </select>
        </label>
        <label 
        onChange={(e) => setVal(e.target.value)}>
          Converted Amount: {conversion}
        </label>
      </div>
      <button
        onClick={() => window.history.back()}
        style={{ marginTop: "20px" }}
      >
        Back
      </button>
    </div>
  );
}
