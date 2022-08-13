import React from "react";
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from "../app";


test('load and display app', async () => {
    render(<App />);
    const personName = await waitFor(() => screen.getByTestId('name'));

    expect(personName.textContent).toBe('RESTy');

});
test(' ', async () => {
    render(<App />);
    const method = screen.getByTestId('method');
    expect(method).toHaveTextContent('Request Method:');
});
