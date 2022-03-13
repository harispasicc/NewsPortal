import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Article from "../pages/Article";

afterEach(() => {
  cleanup();
});

test("should render NewsList component", () => {
  render(<Article />);
  const NewsItemElement = screen.getByTestId("Article-1");
  expect(NewsItemElement).toBeInTheDocument();
  expect(NewsItemElement).toHaveTextContent("Back To Home");
});
