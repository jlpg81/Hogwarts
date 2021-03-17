
import { render, screen } from "@testing-library/react";
import axios from "axios";
// import axios from "axios";
import App from "./App";
import { mockUser } from "./mocks";

//jest.mock("axios");

test("should render app children", () => {
  render(<App />);

  expect(
    screen.getByText("Home maintenance made easier and better")
  ).toBeInTheDocument();
});

// test("trying something from Mo's demo", () => {
//   render(<App />);
//   const text = screen.getByText("Home maintenance made easier and better");
//   expect(text).toBeInTheDocument();
// });

it("Should retrieve JWT token on initiation", () => {
  Object.defineProperty(window, "localStorage", {
    value: {
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn(),
    },
    writable: true,
  });
  //jest.mock("axios");
  // jest.mock("axios", () => (str) => {
  //   if (str === "http://localhost:4000/orders") return {data: }
  // });
  render(<App />);
  expect(localStorage.getItem).toHaveBeenCalled();
});

//WORK IN PROGRESS
// it("should do something in the benigging", () => {
//   Object.defineProperty(window, "localStorage", {
//     value: {
//       getItem: jest.fn(),
//       setItem: jest.fn(),
//       removeItem: jest.fn(),
//     },
//     writable: true,
//   });
//   jest.mock("axios", () => (str) => {
//     if (str === "http://localhost:4000/orders") return { data: [] };
//     else return { data: [mockUser] };
//   });
//   render(<App />);
//   console.log(App.user);
// });
//this is WIP
// it("Should retrieve JWT token on initiation", () => {
//   Object.defineProperty(window, "localStorage", {
//     value: {
//       getItem: jest.fn(),
//       setItem: jest.fn(),
//       removeItem: jest.fn(),
//     },
//     writable: true,
//   });
//   const data = { mockUser }

//   render(<App />);
//   axios.get
// });
