import "@testing-library/jest-dom";
import { render,screen } from "@testing-library/react";
import {Contactus} from "../Contactus.jsx"



test("should have form fields and submit button", () => {
  render(<Contactus />);

  // inputs
  const nameInput = screen.getByPlaceholderText(/enter your name/i);
  const emailInput = screen.getByPlaceholderText(/abc@gmail.com/i);
  const addressInput = screen.getByPlaceholderText(/enter your address/i);

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(addressInput).toBeInTheDocument();

  // button
  const submitButton = screen.getByRole("button", { name: /submit/i });
  expect(submitButton).toBeInTheDocument();
});
