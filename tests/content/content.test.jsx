import { afterEach, describe, expect, it, vi } from "vitest";
import { MemoryRouter, useParams } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Content from "../../src/app/content/content";

vi.mock('react-router-dom', async () => {
  const mod = await vi.importActual('react-router-dom');

  return {
    ...mod,
    useParams: vi.fn()
  };
});

let homePage; 
let cartPage;
let shopPage;

function queryPages() {
  homePage = screen.queryByTestId('home')
  shopPage = screen.queryByTestId('shop')
  cartPage = screen.queryByTestId('cart')
}

describe('Content', () => {
  afterEach(() => {
    vi.mocked(useParams).mockReset();
  })

  it('renders the Shop page', () => {
    vi.mocked(useParams).mockReturnValue({page: 'shop'})

    render(<MemoryRouter><Content /></MemoryRouter>);

    queryPages();

    expect(shopPage).toBeInTheDocument();
    expect(homePage).not.toBeInTheDocument();
    expect(cartPage).not.toBeInTheDocument();
  })

  it('renders the Cart page', () => {
    vi.mocked(useParams).mockReturnValue({page: 'cart'})

    render(<MemoryRouter><Content /></MemoryRouter>);

    queryPages();

    expect(cartPage).toBeInTheDocument();
    expect(homePage).not.toBeInTheDocument();
    expect(shopPage).not.toBeInTheDocument();
  })

  it('renders the Home page', () => {
    vi.mocked(useParams).mockReturnValue({page: ''})

    render(<MemoryRouter><Content /></MemoryRouter>);

    queryPages();

    expect(homePage).toBeInTheDocument();
    expect(cartPage).not.toBeInTheDocument();
    expect(shopPage).not.toBeInTheDocument();
  })
})
