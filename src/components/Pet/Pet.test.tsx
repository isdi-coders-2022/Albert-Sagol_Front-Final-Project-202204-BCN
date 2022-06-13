import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import Pet from "./Pet";

describe("Given the Pet component", () => {
  describe("When it's called and receives 'testName', 'testPicture', 'male' and 'dog'", () => {
    test("Then it should render a image with alternative text 'dog named testName'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Pet
              name="testName"
              picture="testPicture"
              sex="male"
              animal="dog"
              id="test"
              token="testToken"
              adminUser={true}
            />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByAltText("dog named testName")).toBeInTheDocument();
    });

    test("Then it should render a element of list with the text 'testName'", () => {
      render(
        <BrowserRouter>
          {" "}
          <Provider store={store}>
            <Pet
              key={"testKey"}
              name="testName"
              picture="testPicture"
              sex="male"
              animal="dog"
              id="testId"
              token="testToken"
              adminUser={true}
            />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByText("testName", { exact: true })).toBeInTheDocument();
    });

    test("Then it should render a image with alternative text 'male icon'", () => {
      render(
        <BrowserRouter>
          {" "}
          <Provider store={store}>
            <Pet
              name="testName"
              picture="testPicture"
              sex="male"
              animal="dog"
              id="test"
              token="testToken"
              adminUser={true}
            />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByAltText("male icon")).toBeInTheDocument();
    });
  });

  describe("When it's called and receives 'nameTest', 'pictureTest', 'female' and 'cat'", () => {
    test("Then it should render a image with alternative text 'cat named nameTest'", () => {
      render(
        <BrowserRouter>
          {" "}
          <Provider store={store}>
            <Pet
              name="nameTest"
              picture="pictureTest"
              sex="female"
              animal="cat"
              id="test"
              token="testToken"
              adminUser={true}
            />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByAltText("cat named nameTest")).toBeInTheDocument();
    });

    test("Then it should render a image with alternative text 'female icon'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Pet
              name="nameTest"
              picture="pictureTest"
              sex="female"
              animal="cat"
              id="test"
              token="testToken"
              adminUser={true}
            />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByAltText("female icon")).toBeInTheDocument();
    });
  });
});