import React from "react";
import { render } from "@testing-library/react";


import App from "./App";

test("renders App without crashing", () => {
  const page = render(<App />);
  expect(page).toBeVisible;
});


