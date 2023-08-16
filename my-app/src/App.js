import React from "react";
import ColorList from "./ColorList";
import AddColorForm from "./AddColorForm";
import { Routes, Route } from "react-router-dom";
import { ColorDetails } from "./ColorDetails";
import ColorProvider from "./color-hooks";

export default function App() {
  return (
    <ColorProvider>
      <AddColorForm />
      <Routes>
        <Route path="/" element={<ColorList />} />
        <Route path=":id" element={<ColorDetails />} />
      </Routes>
    </ColorProvider>
  );
}
