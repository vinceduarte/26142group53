import { render, screen } from '@testing-library/react';
import App from './App';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Forgot from './components/Forgot/Forgot'

test('renders sustainable fisheries home page without login token', () => {
  render(<App />);
  const linkElement = screen.getByText("Sustainable Fisheries");
  expect(linkElement).toBeInTheDocument();
});

test('renders successful sign up page', () => {
  render(<SignUp />);
  const linkElement = screen.getByText("Sign Up:");
  expect(linkElement).toBeInTheDocument();
});

test('renders successful login page', () => {
  render(<Login />);
  const linkElement = screen.getByText("Sign In:");
  expect(linkElement).toBeInTheDocument();
});

test('renders successful forgot password page', () => {
  render(<Forgot />);
  const linkElement = screen.getByText("Forgot Password?");
  expect(linkElement).toBeInTheDocument();
});
