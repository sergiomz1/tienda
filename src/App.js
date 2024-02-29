import React, { useEffect } from "react";
import { BrowserRouter, Routers, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import "./App.css";

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <TooltipComponent>
            <button>
              <FiSettings></FiSettings>
              <h2>HOLA</h2>
            </button>
          </TooltipComponent>
        </div>
      </div>
    </BrowserRouter>
  );
};
