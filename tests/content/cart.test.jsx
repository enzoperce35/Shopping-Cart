import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, useParams } from "react-router-dom";
import Cart from "../../src/app/content/cart";

vi.mock('react-router-dom', async () => {
  const mod = await vi.importActual('react-router-dom');

  return {
    ...mod,
    useParams: vi.fn()
  };
});

describe('Cart', () => {
  beforeEach(() => {
    vi.mocked(useParams).mockReturnValue({shop: 'Shop1'});

    render(<MemoryRouter><Cart /></MemoryRouter>);
  })

  it('displays the Heading', () => {
    const cartHeading = screen.getByRole('heading', {name: 'This Is Cart'});

    expect(cartHeading).toBeInTheDocument();
  })

  it('displays a shop', () => {
    const shopLink = screen.getByRole('link');

    expect(shopLink).toBeInTheDocument();
  })
})
