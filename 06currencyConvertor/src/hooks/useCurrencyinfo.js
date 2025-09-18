import { useEffect, useState } from "react";

// Hook: fetch exchange rates for given base currency
function useCurrencyInfo(baseCurrency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!baseCurrency) return;

    // Frankfurter API (no API key required)
    fetch(`https://api.frankfurter.app/latest?from=${baseCurrency.toUpperCase()}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.rates || {});
      })
      .catch((err) => {
        console.error("Error fetching currency data:", err);
        setData({});
      });
  }, [baseCurrency]);

  return data;
}

export default useCurrencyInfo;
