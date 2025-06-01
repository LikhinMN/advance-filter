import React from "react";
import Nav from "./Navigation/Nav.jsx";
import Sidebar from "./sidebar/Sidebar.jsx";
import Card from "./product/Card.jsx";
import Search from "./component/Search.jsx";
import "./index.css"; 
const App = () => {

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="h-[10vh]">
        <Nav />
      </div>
      <div className="flex-1 flex flex-col md:flex-row gap-8 px-4 max-w-7xl mx-auto w-full">
        <aside className="md:block md:w-1/4 max-w-xs">
          <Sidebar />
        </aside>
        <main className="flex-1 flex flex-col gap-6">
          <Search />
          <div className="h-[80vh] remove-scrollbar">
            <Card />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
