import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import NewsItem from "../components/NewsItem";

afterEach(() => {
  cleanup();
});

test("should render NewsList component", () => {
  render(<NewsItem />);
  const NewsItemElement = screen.getByTestId("NewsItem-1");
  expect(NewsItemElement).toBeInTheDocument();
  expect(NewsItemElement).toHaveTextContent("Read full article");
});
