// @ts-nocheck
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/svelte";
import Button__SvelteComponent_ from "./Button.svelte";
import { vi } from "vitest";

describe("Button Component", () => {
  test("should render button with default props", async () => {
    const { getByRole } = render(Button__SvelteComponent_);

    const button = getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("");

    // Check default styles
    expect(button).toHaveClass("capitalize");
    expect(button).toHaveClass("rounded-lg");
    expect(button).toHaveClass("font-semibold");
    expect(button).toHaveClass("text-sm");
    expect(button).toHaveClass("py-2");
    expect(button).toHaveClass("w-full");
    expect(button).toHaveClass("min-w-[100px]");
    expect(button).toHaveClass("h-[inherit]");
  });

  test("should render button with custom props", async () => {
    const { getByRole } = render(Button__SvelteComponent_, {
      type: "submit",
      outline: true,
      styles: "custom-class",
    });

    const button = getByRole("button");
    expect(button).toHaveAttribute("type", "submit");
    expect(button).toHaveTextContent("");

    // Check custom styles
    expect(button).not.toHaveClass("text-cr-light");
    expect(button).toHaveClass("text-cr-red-violet");
    expect(button).toHaveClass("border");
    expect(button).toHaveClass("border-cr-red-violet");
    expect(button).toHaveClass("custom-class");
    expect(button).not.toHaveClass("bg-gradient-to-tr");
    expect(button).not.toHaveClass("from-cr-red-linear-start");
    expect(button).not.toHaveClass("to-cr-red-linear-end");
  });

  test("should call handleClick once function on click", async () => {
    const mock = vi.fn();
    const { getByTestId } = render(Button__SvelteComponent_, {
      handleClick: mock,
    });
    const button = getByTestId("btn");

    await fireEvent.click(button);

    expect(mock).toBeCalledTimes(1);
  });
});
