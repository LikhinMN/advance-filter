import React, { useState } from "react";
import Nav from "./Navigation/Nav.jsx";
import Sidebar from "./sidebar/Sidebar.jsx";
import Card from "./product/Card.jsx";
import Search from "./component/Search.jsx";
import "./index.css";
import Data from "../db/data.jsx";

const App = () => {
  const [input, setInput] = useState("");
  const [selected, setSelected] = useState(null);

  function filterData(data, selected, input) {
    let allData = data;

    if (input) {
      allData = allData.filter(product =>
        product.title.toLowerCase().includes(input.toLowerCase())
      );
    }
    if (selected && selected !== "All" && selected !== "All brands") {
      if (selected === "above-200") {
        allData = allData.filter(product => Number(product.newPrice) > 200);
      } else if (selected === "Under $50") {
        allData = allData.filter(product => Number(product.newPrice) < 50);
      } else if (selected === "$50 - $100") {
        allData = allData.filter(product => Number(product.newPrice) >= 50 && Number(product.newPrice) <= 100);
      } else if (selected === "$100 - $200") {
        allData = allData.filter(product => Number(product.newPrice) > 100 && Number(product.newPrice) <= 200);
      } else {
        allData = allData.filter(
          ({ category, color, company }) =>
            category === selected ||
            color === selected ||
            company === selected
        );
      }
    }
    return allData;
  }

  const result = filterData(Data, selected, input);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Nav />
      <div className="flex-1 flex flex-col md:flex-row gap-8 px-4 py-8 max-w-7xl mx-auto w-full">
        <aside className="md:block md:w-1/4 max-w-xs mb-8 md:mb-0">
          <Sidebar setSelected={setSelected} />
        </aside>
        <main className="flex-1 flex flex-col gap-6">
          <div className="mb-2">
            <Search handleChange={e => setInput(e.target.value)} value={input} />
          </div>
          <div className="flex-1">
            <div className="h-[80vh] remove-scrollbar">
              <Card product={result} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
