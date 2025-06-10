import React from "react";

const cunrrencies = [
  {
    name: "Coinbase",
    icon: "/coinbase.png",
  },
  {
    name: "Gemini",
    icon: "/gemini.png",
  },
  {
    name: "Binance",
    icon: "/binance.png",
  },
  {
    name: "Kucoin",
    icon: "/kucoin.png",
  },
  {
    name: "Ledger",
    icon: "/ledger.png",
  },
  {
    name: "Trezor",
    icon: "/trezor.png",
  },
];

const DigitalCurrency = ({ onSelection, modalHandler }) => {
  return (
    <div className="bg-[#FFFFFF] rounded-lg space-y-4 px-4 py-2 ">
      {cunrrencies.map((currency) => (
        <div
          key={currency.name}
          onClick={() => {
            onSelection("digital_currency_platform", currency.name);
            modalHandler();
          }}
          className=" border-b flex items-center gap-2  pb-2 cursor-pointer border-gray-300"
        >
          <img src={currency.icon} className="w-8 h-8" />
          <p className="text-center">{currency.name}</p>
        </div>
      ))}
    </div>
  );
};

export default DigitalCurrency;
