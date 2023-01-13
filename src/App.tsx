import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Page1 from "./Pages/Page1/Page1";
import Page2 from "./Pages/Page2/Page2";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/1" element={<Page1 />} />
          <Route path="/2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
