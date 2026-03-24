import React, { useState, useMemo } from "react";

const exchangeRates = {
  USD: 1,
  PHP: 59.55,
  EUR: 0.85,
  JPY: 110.0,
  GBP: 0.75,
  CNY: 6.45,
  INR: 75.0,
  CHF: 0.92,
  CAD: 1.25,
  BRL: 5.5,
  ZAR: 18.0,
};

export function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [startCurrency, setStartCurrency] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");

  const memoizedConversions = useMemo(() => {
    if (startCurrency === "") return {};

    const rateFrom = exchangeRates[startCurrency];
    const computedList = {};

    for (const currKey in exchangeRates) {
      const rateTo = exchangeRates[currKey];
      computedList[currKey] = (amount / rateFrom) * rateTo;
    }

    return computedList; 
    
  }, [amount, startCurrency]); 

  const finalAmount = memoizedConversions[targetCurrency];

  return (
    <div>
      <div>
        <h1>Currency Converter</h1>
      </div>

      <div>
        <label>
          {startCurrency || "Start"} to {targetCurrency || "Target"} Conversion
        </label>
        <br />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>
      <br />
      <div style={{ marginTop: "20px" }}>
        <label className="section column">
          Start Currency:
          <select
            value={startCurrency}
            onChange={(e) => setStartCurrency(e.target.value)}
          >
            <option value="">Select one</option>
            {Object.keys(exchangeRates).map((sCurr) => (
              <option key={sCurr} value={sCurr}>
                {sCurr}
              </option>
            ))}
          </select>
        </label>

        <br />

        <label>
          Target Currency:
          <select
            value={targetCurrency}
            onChange={(e) => setTargetCurrency(e.target.value)}
          >
            <option value="">Select one</option>
            {Object.keys(exchangeRates).map((tCurr) => (
              <option key={tCurr} value={tCurr}>
                {tCurr}
              </option>
            ))}
          </select>
        </label>

        <br />
        <br />

        <label>
          Converted Amount:{" "}

          {startCurrency === "" || targetCurrency === "" || finalAmount === undefined
            ? "Choose currency to convert."
            : `${finalAmount.toFixed(2)} ${targetCurrency}`}
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