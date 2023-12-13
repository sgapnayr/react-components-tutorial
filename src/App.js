import "./App.css";
import BaseCard from "./components/BaseCard";

function App() {
  const productData = [
    {
      price: "$100.00",
      title: "Keyboard 2000",
      text: "This is better than yamahas...",
    },
    {
      price: "$1200.00",
      title: "Vacuum 5000",
      text: "This is better than dyson...",
    },
    {
      price: "$49.99",
      title: "Window Cleaner",
      text: "Built with premium chemicals...",
    },
    {
      price: "$129.99",
      title: "Green Cleaner",
      text: "Built with the most super premium chemicals...",
    },
  ];

  return (
    <div className="App">
      {productData.map((product, idx) => (
        <BaseCard
          key={idx}
          price={product.price}
          title={product.title}
          text={product.text}
        />
      ))}
    </div>
  );
}

export default App;
