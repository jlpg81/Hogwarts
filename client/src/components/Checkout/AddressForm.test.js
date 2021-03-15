import AddressForm from "./AddressForm";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import mockUser from "../mocks";

describe("Testing general features of the Address Form", () => {
  beforeEach(() => {
    render(
      <AddressForm
        user={mockUser}
        createOrder={() => {}}
        handleNext={() => {}}
      />
    );
  });

  it("Should render parts of the Address Form", () => {
    expect(
      screen.getByRole("heading", { name: "Service Details" })
    ).toBeInTheDocument();
    expect(screen.getByText("Address")).toBeInTheDocument();
    expect(screen.getByText("Mobile")).toBeInTheDocument();
  });

  it("Should render button in address form", () => {
    expect(
      screen.getByRole("button", { name: "Confirm Order" })
    ).toBeInTheDocument();
  });
  it("Should render textbox in address form test", () => {
    expect(screen.getByRole("textbox", { name: "Name" })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Email" })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Mobile" })).toBeInTheDocument();
    expect(
      screen.getByRole("datepicker", { name: "Preferred Date and Time" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: "Apartment-size" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: "Number of rooms" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: "Address" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", {
        name: "Other Information",
      })
    ).toBeInTheDocument();
  });

  it("Should type in a textbox", () => {
    const typedValue = "120 m";
    userEvent.type(
      screen.getByRole("textbox", { name: "Apartment-size" }),
      typedValue
    );
    expect(screen.getByRole("textbox", { name: "Apartment-size" })).toHaveValue(
      typedValue
    );
  });
});
