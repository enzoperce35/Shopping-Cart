import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, useParams } from "react-router-dom";
import Shop from "../../src/app/content/shop";

vi.mock('react-router-dom', async () => {
  const mod = await vi.importActual('react-router-dom');

  return {
    ...mod,
    useParams: vi.fn()
  };
});

describe('Shop', () => {
  it('displays the Heading', () => {
    vi.mocked(useParams).mockReturnValue({shop: 'Shop1'})

    render(<MemoryRouter><Shop/></MemoryRouter>)

    const shopHeading = screen.getByRole('heading', {name: 'This Is Shop1'});

    expect(shopHeading).toBeInTheDocument();
  })
})
