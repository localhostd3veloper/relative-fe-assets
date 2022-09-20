import Card from "./Card";
import { data } from "./static/data";

function App() {
  return (
    <div className="h-screen bg-[#14172B] flex gap-5 items-center justify-center text-white">
      {data.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          price={item.price}
          tvl={item.tvl}
          change={item.change}
          pairs={item.pairs}
          Icon={item.icon}
          gradColor={item.gradColor}
        />
      ))}
    </div>
  );
}

export default App;
