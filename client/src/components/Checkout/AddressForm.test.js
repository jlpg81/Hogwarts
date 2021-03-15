import AddressForm from "./AddressForm";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockUser } from "../mocks";

describe("Testing general features of the Address Form", () => {
  let component;
  beforeEach(() => {
    component = render(
      <AddressForm
        user={mockUser}
        createOrder={() => {}}
        handleNext={() => {}}
      />
    );
  });

  afterEach(() => {
    component.unmount();
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
    expect(screen.getByRole("textbox", { name: "Rooms" })).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: "Address" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", {
        name: "Other Information",
      })
    ).toBeInTheDocument();
  });

  it("should have some textboxES prefilled", () => {
    expect(screen.getByRole("textbox", { name: "Name" })).toHaveValue(
      mockUser.name
    );
    expect(screen.getByRole("textbox", { name: "Email" })).toHaveValue(
      mockUser.email
    );
    expect(screen.getByRole("textbox", { name: "Mobile" })).toHaveValue(
      mockUser.phone
    );
    expect(screen.getByRole("textbox", { name: "Address" })).toHaveValue(
      mockUser.location
    );
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
    const secondValue = "4";
    userEvent.type(screen.getByRole("textbox", { name: "Rooms" }), secondValue);
    expect(screen.getByRole("textbox", { name: "Rooms" })).toHaveValue(
      secondValue
    );
  });
});

describe("Testing button features", () => {
  it("should call createOrder on submission", async () => {
    const createOrder = jest.fn();
    render(
      <AddressForm
        user={mockUser}
        createOrder={createOrder}
        handleNext={() => {}}
      />
    );
    userEvent.click(screen.getByText("Confirm Order"));
    await waitFor(() => expect(createOrder).toHaveBeenCalled());
  });
});
describe("Testing function features", () => {
  it("should call createOrder with given values", async () => {
    const createOrder = jest.fn();
    let component = render(
      <AddressForm
        user={mockUser}
        createOrder={createOrder}
        handleNext={() => {}}
      />
    );
    const typedValue = "120 m";
    userEvent.type(
      screen.getByRole("textbox", { name: "Apartment-size" }),
      typedValue
    );
    const secondValue = "4";
    const emptyDate = "";
    userEvent.type(screen.getByRole("textbox", { name: "Rooms" }), secondValue);
    userEvent.click(screen.getByText("Confirm Order"));
    await waitFor(() => {
      expect(createOrder).toHaveBeenCalledWith(
        2,
        mockUser.name,
        mockUser.email,
        mockUser.phone,
        mockUser.location,
        typedValue,
        secondValue,
        emptyDate,
        40
      );
    });
    component.unmount();
  });
});
// jest.mock('./components/home/home.jsx', () => () => <div data-testid="home"></div>)
