import { render, screen } from "@testing-library/react";
import CustomCheckbox from ".";

describe("Label is present", () => {
  it("should render the label", async () => {
    render(<CustomCheckbox label="Checkbox" />);
    const label = await screen.findByText("Checkbox");
    expect(label).toBeInTheDocument()
  });
  it("should render the input type checkbox", async () => {
    render(<CustomCheckbox label="Checkbox" />);
    const checkbox = await screen.findByRole("checkbox");
    expect(checkbox).toBeInTheDocument()
  });
})
