import { render, screen } from "@testing-library/react";
import App from "./App";

test("should render app", () => {
  const { container } = render(<App />);
  //screen.getByText("Hello Salvatore");
  expect(container.textContent).toMatch("Hello Salvatore");
});

test("should render app children", () => {
  const { container } = render(<App />);

  expect(container.textContent).toMatch(
    "Home maintenance made easier and betterLorem Ipsum is not simply random text."
  );
});
