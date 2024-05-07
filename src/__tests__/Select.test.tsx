import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Select from "../components/Select";

const options = [
  {
    value: 1,
    label: 'Philippines',
  },
  {
    value: 2,
    label: 'Australia',
  }
]

describe("Select component", () => {
  test("renders select component with Philippines", () => {
    render(<Select value={1} label="Select" options={options} />);
    expect(screen.getByText("Philippines")).toBeDefined();
  });

  test("renders select component with Australia", () => {
    render(<Select value={2} label="Select" options={options} />);
    expect(screen.getByText("Australia")).toBeDefined();
  });
})