import { render } from "@testing-library/react";

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
    const { getByText } = render(<h1>Equilibrium #3429</h1>);

    expect(getByText("Equilibrium #3429")).toBeInTheDocument();
    expect(
      getByText("Our Equilibrium collection promotes balance and calm.")
    ).toBeInTheDocument();
    expect(getByText("0.041 ETH")).toBeInTheDocument();
    expect(getByText("3 days left")).toBeInTheDocument();
    expect(getByText("Creation of Jules Wyvern")).toBeInTheDocument();
  });
});
