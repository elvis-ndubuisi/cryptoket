// @ts-nocheck
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import TopSellerCard__SvelteComponent_ from "./TopSellerCard.svelte";

describe("TopSellerCard component", () => {
  test("renders seller name correctly", () => {
    const sellerName = "John Doe";
    const { getByText } = render(TopSellerCard__SvelteComponent_, {
      sellerName,
    });

    expect(getByText(sellerName)).toBeInTheDocument();
  });

  test("renders seller rank correctly", () => {
    const sellerRank = "Gold";
    const { getByText } = render(TopSellerCard__SvelteComponent_, {
      sellerRank,
    });

    expect(getByText(sellerRank)).toBeInTheDocument();
  });
});
