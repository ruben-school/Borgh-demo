import React from 'react';
import { getByRole, getByTestId, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Nav from './Nav';


describe('Render navbar and clicks on links', () => {
    test("renders Navbar component", () => {
        render(<Nav />);
        const links = [];
        links.push(screen.getByTestId("/doorvoertijden")) // voeg links hier toe
        for (let i = 0; i < links.length; i++) {
            userEvent.click(links[i]);
          }
    })
});
