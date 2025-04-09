import { useState } from "react";

export default function CurrencyComparisonTool() {
  const [amount, setAmount] = useState(1000);
  const [usdToLocal, setUsdToLocal] = useState(4.6);
  const [idrToLocal, setIdrToLocal] = useState(0.0003);
  const [usdToIdr, setUsdToIdr] = useState(15800);
  const [feeUsdLocal, setFeeUsdLocal] = useState(0.02);
  const [feeIdrLocal, setFeeIdrLocal] = useState(0.03);
  const [feeIdrUsd, setFeeIdrUsd] = useState(0.02);
  const [feeUsdIdr, setFeeUsdIdr] = useState(0.02);

  const costUsd = (amount / usdToLocal) * (1 + feeUsdLocal);
  const costIdr = (amount / idrToLocal) * (1 + feeIdrLocal);
  const costIdrViaUsd = ((1 / usdToIdr) * (1 + feeIdrUsd)) * (amount / usdToLocal) * (1 + feeUsdLocal);
  const costUsdViaIdr = (usdToIdr * (1 + feeUsdIdr)) * (amount / idrToLocal) * (1 + feeIdrLocal);

  const minCost = Math.min(costUsd, costIdr, costIdrViaUsd, costUsdViaIdr);
  const recommendation =
    minCost === costUsd ? "Use USD" :
    minCost === costIdr ? "Use IDR" :
    minCost === costIdrViaUsd ? "Convert IDR to USD first" :
    "Convert USD to IDR first";

  return (
    <main className="p-4 max-w-md mx-auto space-y-4">
      <h1 className="text-xl font-bold text-center">Currency Comparison Tool</h1>
      <div className="space-y-3 bg-white p-4 rounded-xl shadow">
        <label>Amount to Spend in Local Currency</label>
        <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />

        <label>1 USD = Local</label>
        <input type="number" value={usdToLocal} onChange={(e) => setUsdToLocal(Number(e.target.value))} />

        <label>1 IDR = Local</label>
        <input type="number" value={idrToLocal} onChange={(e) => setIdrToLocal(Number(e.target.value))} />

        <label>1 USD = IDR</label>
        <input type="number" value={usdToIdr} onChange={(e) => setUsdToIdr(Number(e.target.value))} />

        <label>Exchange Fee USD → Local (%)</label>
        <input type="number" step="0.01" value={feeUsdLocal} onChange={(e) => setFeeUsdLocal(Number(e.target.value))} />

        <label>Exchange Fee IDR → Local (%)</label>
        <input type="number" step="0.01" value={feeIdrLocal} onChange={(e) => setFeeIdrLocal(Number(e.target.value))} />

        <label>Fee IDR → USD (%)</label>
        <input type="number" step="0.01" value={feeIdrUsd} onChange={(e) => setFeeIdrUsd(Number(e.target.value))} />

        <label>Fee USD → IDR (%)</label>
        <input type="number" step="0.01" value={feeUsdIdr} onChange={(e) => setFeeUsdIdr(Number(e.target.value))} />

        <div className="mt-4 p-3 bg-green-100 rounded-xl text-center font-semibold text-green-800">
          Recommendation: {recommendation}
        </div>
      </div>
    </main>
  );
}
