import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

test('Contact form renders', () => {
    const form = render(<ContactForm />);
    expect(form).toBeVisible;
})

test('Form inputs that are required', () => {
    const { getByTestId, getByText } = render(<ContactForm />);
    
    const firstName = getByTestId('first-name');
    const lastName = getByTestId('last-name');
    const email = getByTestId('email');
    const message = getByTestId('message');
    const submit = getByTestId('submit-button');

    expect(firstName).toBeRequired;
    expect(lastName).toBeRequired;
    expect(email).toBeRequired;
    expect(message).toBeRequired;
    expect(submit).toHaveAttribute('type', 'submit')

    fireEvent.change(firstName, {target: {value: 'Test First'}});
    fireEvent.change(lastName, {target: {value: 'Test Last'}});
    fireEvent.change(email, {target: {value: 'Test Email'}});
    fireEvent.change(message, {target: {value: 'Test Message'}});

    fireEvent.click(submit)
})