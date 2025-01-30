import React from "react";
import "./App.css";
import "animate.css/animate.compat.css";
import AppRouter from "./core/appRouter";

function App() {
  return (
    <React.Suspense fallback={""}>
      <div className="text-black font-bold bg-white w-full p-0 m-0 max-w-full ">
        <AppRouter />
      </div>
    </React.Suspense>
  );
}

export default App;
