import React from "react";
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from "../app";

beforeEach(() => {
    render(<App />);
  })
test('load and display app', async () => {
    // render(<App />);
    const personName = await waitFor(() => screen.getByTestId('name'));
console.log(personName);
    expect(personName.textContent).toBe('RESTy');

});
test(' ', async () => {
    // render(<App />);
    const method = screen.getByTestId('method');
    expect(method).toHaveTextContent('Request Method:');
});
test('handle click', async () => {

    const get = screen. getByTestId('GET');
    const post =  screen. getByTestId('POST');
    const put =  screen.getByTestId('PUT');
    const Delete = screen.getByTestId('DELETE');



    fireEvent.click(get);
    expect(get.textContent).toBe('GET');
    fireEvent.click(post);
    expect(post.textContent).toBe('POST');
   fireEvent.click(put);
    expect(put.textContent).toBe("PUT");
   fireEvent.click(Delete);
    expect(Delete.textContent).toBe("DELETE");
  });
