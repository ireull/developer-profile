import { fireEvent, render, screen } from "@testing-library/react";
import User from "../components/User/User";
import UserContext from "../context/UserContext";

const skillsSort = [
  { name: "Ruby", exp: 2 },
  { name: "PHP", exp: 6 },
  { name: "JavaScript", exp: 4 },
];

describe("<User/>", () => {
  test("username is changable", () => {
    const container = render(
      <UserContext.Provider value={{ skillsSort }}>
        <User />
      </UserContext.Provider>
    );

    const userNameInput = container.getByLabelText("name-input", {
      selector: "input",
    });

    fireEvent.change(userNameInput, { target: { value: "Tom Cruse" } });
    expect(userNameInput.value).toBe("Tom Cruse");
  });

  test("address is changable", () => {
    const container = render(
      <UserContext.Provider value={{ skillsSort }}>
        <User />
      </UserContext.Provider>
    );

    const userAddress = container.getByLabelText("address-input", {
      selector: "input",
    });

    fireEvent.change(userAddress, { target: { value: "Ottawa" } });
    expect(userAddress.value).toBe("Ottawa");
  });
});
