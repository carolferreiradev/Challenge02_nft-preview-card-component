import { render } from "@testing-library/react";
import { Home } from "./Home";

jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        asPath: "/",
      };
    },
  };
});
describe("Home component", () => {
  test("home component renders correctly", () => {
    const { getByText } = render(<Home />);

    expect(getByText("Equilibrium #3429")).toBeInTheDocument();
    expect(
      getByText("Our Equilibrium collection promotes balance and calm.")
    ).toBeInTheDocument();
    expect(getByText("0.041 ETH")).toBeInTheDocument();
    expect(getByText("3 days left")).toBeInTheDocument();
    expect(getByText("Creation of")).toBeInTheDocument();
    expect(getByText("Jules Wyvern")).toBeInTheDocument();
  });
});
