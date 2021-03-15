
import { render, screen } from "@testing-library/react";
import App from "./App";
// import AddressForm from "./Checkout/AddressForm";
// import userEvent from "@testing-library/user-event";
// import mockUser from "./mocks";

test("should render app children", () => {
  render(<App />);

  expect(
    screen.getByText("Home maintenance made easier and better")
  ).toBeInTheDocument();
});

test("trying something from Mo's demo", () => {
  render(<App />);
  const text = screen.getByText("Home maintenance made easier and better");
  expect(text).toBeInTheDocument();
});

