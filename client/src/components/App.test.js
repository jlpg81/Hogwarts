import { render, screen } from "@testing-library/react";
import App from "./App";
import AddressForm from "./Checkout/AddressForm";
import userEvent from "@testing-library/user-event";
import Header from "./Home/Header/Header";

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
  expect(
    screen.getByRole("button", { name: "Confirm Order" })
  ).toBeInTheDocument();
});
test("another address form test", () => {
  render(
    <AddressForm user={mockUser} createOrder={() => {}} handleNext={() => {}} />
  );
  expect(screen.getByRole("textbox", { name: "Email" })).toBeInTheDocument();
});

test("Typing in a textbox", () => {
  render(
    <AddressForm user={mockUser} createOrder={() => {}} handleNext={() => {}} />
  );
  const typedValue = "120 m";
  userEvent.type(
    screen.getByRole("textbox", { name: "Apartment-size" }),
    typedValue
  );
  expect(screen.getByRole("textbox", { name: "Apartment-size" })).toHaveValue(
    typedValue
  );
});

test("should render Header", () => {
  const { container } = render(<Header user={mockUser} />);

  expect(container.textContent).toMatch(
    "Home maintenance made easier and betterLorem Ipsum is not simply random text."
  );
});

const mockUser = {
  email: "ball@ball.ball",
  id: 999999999,
  location: "ball",
  name: "ball",
  password: "$2b$10$BXdm2Y4fU.8UlqvqRP1OFuOITshxMps8HIsu91sPd8yXe24KbxB/2",
  phone: "13456",
};
