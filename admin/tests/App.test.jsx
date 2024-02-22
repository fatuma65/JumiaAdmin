import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import App from "../src/App";
import { BrowserRouter } from "react-router-dom";

describe("renders main page correctly", async () => {
  it("should render the page correctly", async () => {
    render(
      <BrowserRouter>
              <App />

      </BrowserRouter>
    );
    //  const get = screen.getByText('hello world')

    expect(screen.getByText("hello world")).toBeDefined();
  });

  // it('should render an error message if an error occurs while fetching the products', async () => {
  //   const error = new Error('test error');
  //   global.fetch = jest.fn().mockImplementation(() => Promise.reject(error));

  //   const { getByText } = render(<ProductList />);

  //   expect(getByText(`Error: ${error.message}`)).toBeInTheDocument();
  // });

  // it('should render the products', async () => {
  //   const { getByText } = render(<ProductList />);

  //   expect(getByText('test product')).toBeInTheDocument();
  // });

  // it('should navigate to the product details page when a product is clicked', async () => {
  //   const navigate = jest.fn();
  //   jest.spyOn(ReactRouterDOM, 'useNavigate').mockReturnValue(navigate);

  //   const { getByText } = render(<ProductList />);

  //   fireEvent.click(getByText('test product'));

  //   expect(navigate).toHaveBeenCalledWith('/product/details/1');
  // });
});
