import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Whatced from "./Whatced";
import Add from "./Add";
import Watch from "./Watch";
import Anasayfa from "./Anasayfa";

const RouterConfig = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Anasayfa />}>
          {" "}
        </Route>
        <Route path="/watch" element={<Watch />}>
          Wathc{" "}
        </Route>

        <Route path="/whatced" element={<Whatced />}>
          Whatched{" "}
        </Route>
        <Route path="/add" element={<Add />}>
          Add{" "}
        </Route>
      </Routes>
    </div>
  );
};

export default RouterConfig;
