import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../../src/app/content/home";

describe('Home', () => {
  beforeEach(() => {
    render(<MemoryRouter><Home /></MemoryRouter>);
  })

  it('displays the Heading', () => {
    const homeHeading = screen.getByRole('heading', {name: 'This Is Home'});

    expect(homeHeading).toBeInTheDocument();
  })

  it('displays the shops', () => {
    const shopLinks = screen.getAllByRole('link');

    shopLinks.forEach(link => expect(link).toBeInTheDocument());
  })
})
