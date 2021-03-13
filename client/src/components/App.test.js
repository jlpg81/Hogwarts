import { render, screen } from "@testing-library/react";
import App from "./App";
import AddressForm from "./Checkout/AddressForm";

test("should render app children", () => {
  const { container } = render(<App />);

  expect(container.textContent).toMatch(
    "Home maintenance made easier and betterLorem Ipsum is not simply random text."
  );
});

test("trying something from Mo's demo", () => {
  render(<App />);
  // console.log("is also this green", render(<App />));
  const text = screen.getByText("Home maintenance made easier and better");
  expect(text).toBeInTheDocument();
});

test("playing with the Address Form", () => {
  render(
    <AddressForm user={mockUser} createOrder={() => {}} handleNext={() => {}} />
  );

  expect(screen.getByText("Address")).toBeInTheDocument();
});

test("another address form test", () => {
  render(
    <AddressForm user={mockUser} createOrder={() => {}} handleNext={() => {}} />
  );
  expect(screen.getByRole("button", { type: "submit" })).toBeInTheDocument();
});
const mockUser = {
  email: "ball@ball.ball",
  id: 999999999,
  location: "ball",
  name: "ball",
  password: "$2b$10$BXdm2Y4fU.8UlqvqRP1OFuOITshxMps8HIsu91sPd8yXe24KbxB/2",
  phone: "13456",
};
