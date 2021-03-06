import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import LoginForm from "./LoginForm";

describe("Given the LoginForm component", () => {
  describe("When it's called", () => {
    test("Then it should render 1 label with text Username", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginForm />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByLabelText("Username")).toBeInTheDocument();
    });

    test("Then it should render 1 label with text Password", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginForm />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByLabelText("Password")).toBeInTheDocument();
    });

    test("Then it should render 1 button with text 'Login'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginForm />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
    });

    test("Then it should render 1 link with text 'Create account'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginForm />
          </Provider>
        </BrowserRouter>
      );

      expect(
        screen.getByRole("link", { name: "Create account" })
      ).toBeInTheDocument();
    });
  });

  describe("When it's called and clicked 'Login' button", () => {
    test("Then it should reset the value on the inputs", () => {
      const testText = "test";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginForm />
          </Provider>
        </BrowserRouter>
      );

      const usernameInput = screen.getByLabelText("Username");
      const passwordInput = screen.getByLabelText("Password");
      const submitButton = screen.getByRole("button", { name: "Login" });

      userEvent.type(usernameInput, testText);
      userEvent.type(passwordInput, testText);
      userEvent.click(submitButton);

      expect(usernameInput).toHaveValue("");
      expect(passwordInput).toHaveValue("");
    });
  });
});
