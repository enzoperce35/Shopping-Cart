import { useParams, MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Header from "../src/app/header";

vi.mock('react-router-dom', async () => {
  const mod = await vi.importActual('react-router-dom');

  return {
    ...mod,
    useParams: vi.fn()
  };
});

let homeLink;
let cartLink;

function queryPageLinks() {
  homeLink = screen.queryByTestId('home-link');
  cartLink = screen.queryByTestId('cart-link');
}

describe('Header', () => {
  afterEach(() => {
    vi.mocked(useParams).mockReset();
  });

  it('displays the Heading', () => {
    vi.mocked(useParams).mockReturnValue({page: ''});

    render(<MemoryRouter><Header /></MemoryRouter>);

    const heading = screen.getByRole('heading', {name: 'This Is Header'});

    expect(heading).toBeInTheDocument();
  })

  test('Header for Default/Home Page', () => {
    vi.mocked(useParams).mockReturnValue({page: 'home'});

    render(<MemoryRouter><Header /></MemoryRouter>);

    queryPageLinks();

    expect(cartLink).toBeInTheDocument();
    expect(homeLink).not.toBeInTheDocument();
  })

  test('Header for Cart Page', () => {
    vi.mocked(useParams).mockReturnValue({page: 'cart'});

    render(<MemoryRouter><Header /></MemoryRouter>);

    queryPageLinks();

    expect(homeLink).toBeInTheDocument();
    expect(cartLink).not.toBeInTheDocument();
  })

  test('Header for Shop Page', () => {
    vi.mocked(useParams).mockReturnValue({page: 'shop'});

    render(<MemoryRouter><Header /></MemoryRouter>);

    queryPageLinks();

    expect(homeLink).toBeInTheDocument();
    expect(cartLink).toBeInTheDocument();
  })
})
