import AddressForm from "./AddressForm";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import mockUser from "../mocks";

test("Should render parts of the Address Form", () => {
  //const createOrder = jest.fn()
  render(
    <AddressForm user={mockUser} createOrder={() => {}} handleNext={() => {}} />
  );

  expect(screen.getByText("Address")).toBeInTheDocument();
});

test("Should render button in address form", () => {
  render(
    <AddressForm user={mockUser} createOrder={() => {}} handleNext={() => {}} />
  );
  expect(
    screen.getByRole("button", { name: "Confirm Order" })
  ).toBeInTheDocument();
});
test("Should render textbox in address form test", () => {
  render(
    <AddressForm user={mockUser} createOrder={() => {}} handleNext={() => {}} />
  );
  expect(screen.getByRole("textbox", { name: "Email" })).toBeInTheDocument();
});

test("Should type in a textbox", () => {
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
