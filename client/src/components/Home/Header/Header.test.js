import Header from "./Header";
import mockUser from "../../mocks";
import { render, screen } from "@testing-library/react";

test("should render Header", () => {
  render(<Header user={mockUser} />);

  expect(
    screen.getByText("Home maintenance made easier and better")
  ).toBeInTheDocument();
});
