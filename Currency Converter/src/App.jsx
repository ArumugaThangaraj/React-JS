import "./App.css";
import { useState, useEffect } from "react";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [debouncedAmount, setDebouncedAmount] = useState(amount);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);

  // Debounce logic: update debouncedAmount after 500ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedAmount(amount);
    }, 500);

    return () => clearTimeout(timer);
  }, [amount]);

  // Fetch exchange rate when currencies change
  useEffect(() => {
    const getExchangeAmount = async () => {
      try {
        const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const data = await res.json();
        setExchangeRate(data.rates[toCurrency]);
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
      }
    };
    getExchangeAmount();
  }, [fromCurrency, toCurrency]);

  // Calculate converted amount when debouncedAmount or exchangeRate changes
  useEffect(() => {
    if (exchangeRate !== null) {
      setConvertedAmount((debouncedAmount * exchangeRate).toFixed(2));
    }
  }, [debouncedAmount, exchangeRate]);

  const handleAmount = (e) => {
    const value = parseFloat(e.target.value);
    setAmount(isNaN(value) ? 0 : value);
  };

  const handleFromCurrency = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrency = (e) => {
    setToCurrency(e.target.value);
  };

  return (
    <div className="container">
      <h3>Currency Converter</h3>

      <label htmlFor="Amount">Amount</label>
      <input
        type="number"
        id="Amount"
        value={amount}
        onChange={handleAmount}
        placeholder="Enter amount"
      />

      <div className="converter">
        <div>
          <label htmlFor="FromCurrency">From Currency</label>
          <select id="FromCurrency" value={fromCurrency} onChange={handleFromCurrency}>
            <option value="USD">USD - United States Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound Sterling</option>
            <option value="JPY">JPY - Japanese Yen</option>
            <option value="AUD">AUD - Australian Dollar</option>
            <option value="CAD">CAD - Canadian Dollar</option>
            <option value="CNY">CNY - Chinese Yuan</option>
            <option value="INR">INR - Indian Rupee</option>
            <option value="BRL">BRL - Brazilian Real</option>
            <option value="ZAR">ZAR - South African Rand</option>
          </select>
        </div>

        <div>
          <label htmlFor="ToCurrency">To Currency</label>
          <select id="ToCurrency" value={toCurrency} onChange={handleToCurrency}>
            <option value="USD">USD - United States Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound Sterling</option>
            <option value="JPY">JPY - Japanese Yen</option>
            <option value="AUD">AUD - Australian Dollar</option>
            <option value="CAD">CAD - Canadian Dollar</option>
            <option value="CNY">CNY - Chinese Yuan</option>
            <option value="INR">INR - Indian Rupee</option>
            <option value="BRL">BRL - Brazilian Real</option>
            <option value="ZAR">ZAR - South African Rand</option>
          </select>
        </div>

        <div className="result">
          <p>
            {debouncedAmount} {fromCurrency} is equal to {convertedAmount} {toCurrency}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
