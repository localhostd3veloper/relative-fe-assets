import Binance from "../svgs/Binance";
import Ethereum from "../svgs/Ethereum";
import Bin from "../svgs/singular/Bin";
import Btc from "../svgs/singular/Btc";
import Eth from "../svgs/singular/Eth";
import Shib from "../svgs/singular/Shib";
import Sol from "../svgs/singular/Sol";
import Solana from "../svgs/Solana";

export const data = [
  {
    id: 1,
    name: "Bitcoin (BTC)",
    price: "$31,812.80",
    change: "+10%",
    tvl: "$60,000",
    pairs: [Solana, Ethereum, Binance],
    icon: Btc,
  },
  {
    id: 2,
    name: "Solana (SOL)",
    price: "$32.83",
    change: "-12.32%",
    tvl: "$60,000",
    pairs: [Solana, Ethereum, Binance],
    icon: Sol,
  },
  {
    id: 3,
    name: "Ethereum (ETH)",
    price: "$31,812.80",
    change: "-11.93%",
    tvl: "$60,000",
    pairs: [Solana, Ethereum, Binance],
    icon: Eth,
  },
  {
    id: 4,
    name: "Binance USD (BUSD)",
    price: "$31,812.80",
    change: "+0.26%",
    tvl: "$60,000",
    pairs: [Solana, Ethereum, Binance],
    icon: Bin,
  },
  {
    id: 5,
    name: "Shiba Inu (SHIB)",
    price: "$0.00000001948",
    change: "-8.1%",
    tvl: "$60,000",
    pairs: [Solana, Ethereum, Binance],
    icon: Shib,
  },
];
