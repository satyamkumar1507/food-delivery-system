import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header.jsx"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";



test("should render Header component with a login button", () => {

    render(
    <BrowserRouter>
     <Provider store={appStore}>   
    <Header/>
    </Provider>
    </BrowserRouter>
    );

   const loginButton = screen.getByRole("button",{name:"LogIn"});

   //const loginButton = screen.getByText("LogIn");

   expect(loginButton).toBeInTheDocument();
})


   test("should render Header component with cart item 0", () => {

    render(
    <BrowserRouter>
     <Provider store={appStore}>   
    <Header/>
    </Provider>
    </BrowserRouter>
    );

   const cartItem = screen.getByText('Cart(0)');

   expect(cartItem).toBeInTheDocument();

})


 test("should render Header component eith cart items", () => {

    render(
    <BrowserRouter>
     <Provider store={appStore}>   
    <Header/>
    </Provider>
    </BrowserRouter>
    );

   const cartItem = screen.getByText(/Cart/);

   expect(cartItem).toBeInTheDocument();

})

test("should change login button to logout button onclick", () => {

    render(
    <BrowserRouter>
     <Provider store={appStore}>   
    <Header/>
    </Provider>
    </BrowserRouter>
    );

   const loginButton = screen.getByRole("button",{name:"LogIn"});

   fireEvent.click(loginButton);

   const logoutButton = screen.getByRole("button",{name:"Logout"});

   expect(logoutButton).toBeInTheDocument();
})