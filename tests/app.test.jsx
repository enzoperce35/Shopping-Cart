import App from "../src/app/App";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";

let container;
let header;
let content;

describe("App component", () => {
  beforeEach(() => {
    render(<MemoryRouter><App /></MemoryRouter>);

    container = screen.getByTestId('container');
    header = screen.getByTestId('header');
    content = screen.getByTestId('content');
  })

  it('should render the App container', () => {
    expect(container).toBeInTheDocument();
  }),

  it('should render the App header', () => {
    expect(container).toContainElement(header);
  })

  it('should render the App content', () => {
    expect(container).toContainElement(content);
  })
});
