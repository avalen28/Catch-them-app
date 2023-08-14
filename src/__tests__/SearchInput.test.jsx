import { render, screen } from "@testing-library/react";
import SearchInput from "../components/SearchInput"

test("Check that the button is rendered", () => {
  render(<SearchInput />);

  const button = screen.getByRole("button", {type: /submit/i});

  expect(button).toBeInTheDocument();
});

test("Check that the input is rendered", () => {
  render(<SearchInput />);

  const input = screen.getByRole("textbox", { type: /text/i });

  expect(input).toBeInTheDocument();
});
