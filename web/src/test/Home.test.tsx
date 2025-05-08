import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../store';
import App from '../App';

describe('Home Component', () => {
    it('should render the counter and increment/decrement correctly', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        );

        // Check initial state
        expect(screen.getByText(/Counter: 0/i)).toBeInTheDocument();

        // Click increase button
        fireEvent.click(screen.getByText('Increase'));
        expect(screen.getByText(/Counter: 1/i)).toBeInTheDocument();

        // Click decrease button
        fireEvent.click(screen.getByText('Decrease'));
        expect(screen.getByText(/Counter: 0/i)).toBeInTheDocument();
    });
});
