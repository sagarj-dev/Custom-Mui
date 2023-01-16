import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Page1 from "./Pages/Page1/Page1";
import Page2 from "./Pages/Page2/Page2";
import Page3 from "./Pages/Page3/Page3";
import Page4 from "./Pages/Page4/Page4";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/1" element={<Page1 />} />
          <Route path="/2" element={<Page2 />} />
          <Route path="/3" element={<Page3 />} />
          <Route path="/4" element={<Page4 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
