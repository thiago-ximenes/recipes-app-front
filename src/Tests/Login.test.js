<<<<<<< HEAD
import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../pages/Login';
import renderWithRouter from './renderWithRouter';
=======
// import React from 'react';
// import { fireEvent, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import Login from '../Components/Login';
// import renderWithRouter from './renderWithRouter';
>>>>>>> main-group-29

// describe('Login', () => {
//   // test-id
//   const emailInput = 'email-input';
//   const passwordInput = 'password-input';
//   const loginButton = 'login-submit-btn';
//   // inputs & botao
//   const testEmailInput = screen.getByTestId(emailInput);
//   const testPasswordInput = screen.getByTestId(passwordInput);
//   const testLoginButton = screen.getByTestId(loginButton);
//   // emails e senhas
//   const validPassword = '123456';
//   const invalidPassword = '12345';
//   const validEmail = 'email@mail.com';
//   const invalidEmail0 = 'email';
//   const invalidEmail1 = 'email@com';
//   const invalidEmail2 = 'emailcom@';
//   const invalidEmail3 = 'email@mail.';

//   test('2 - Crie todos os elementos que devem respeitar'
//     + 'os atributos descritos no protótipo para a tela de login', () => {
//     renderWithRouter(<Login />);
//     expect(testEmailInput).toBeInTheDocument();
//     expect(testPasswordInput).toBeInTheDocument();
//     expect(testLoginButton).toBeInTheDocument();
//   });

//   test('3 - Desenvolva a tela de maneira que a pessoa deve conseguir'
//     + 'escrever seu email no input de email', () => {
//     renderWithRouter(<Login />);
//     fireEvent.change(emailInput, { target: { value: validEmail } });
//     expect(emailInput.value).toBe(validEmail);
//   });

//   test('4 - Desenvolva a tela de maneira que a pessoa deve'
//     + 'conseguir escrever sua senha no input de senha', () => {
//     renderWithRouter(<Login />);
//     fireEvent.change(passwordInput, { target: { value: validPassword } });
//     expect(passwordInput.value).toBe(validPassword);
//   });

//   test('5 - Desenvolva a tela de maneira que o formulário só seja válido após'
//     + 'um email válido e uma senha de mais de 6 caracteres serem preenchidos', () => {
//     renderWithRouter(<Login />);
//     expect(testLoginButton).toBeDisabled();

//     userEvent.type(testEmailInput, invalidEmail0);
//     userEvent.type(testPasswordInput, validPassword);
//     expect(testLoginButton).toBeDisabled();

//     userEvent.type(testEmailInput, invalidEmail1);
//     userEvent.type(testPasswordInput, validPassword);
//     expect(testLoginButton).toBeDisabled();

//     userEvent.type(testEmailInput, invalidEmail2);
//     userEvent.type(testPasswordInput, validPassword);
//     expect(testLoginButton).toBeDisabled();

//     userEvent.type(testEmailInput, invalidEmail3);
//     userEvent.type(testPasswordInput, validPassword);
//     expect(testLoginButton).toBeDisabled();

//     userEvent.type(testEmailInput, validEmail);
//     userEvent.type(testPasswordInput, invalidPassword);
//     expect(testLoginButton).toBeDisabled();

//     userEvent.type(testEmailInput, validEmail);
//     userEvent.type(testPasswordInput, validPassword);
//     expect(testLoginButton).toBeEnabled();
//   });

//   test('6 - Salve 2 tokens no localStorage após a submissão,'
//     + 'identificados pelas chaves mealsToken e cocktailsToken', () => {
//     renderWithRouter(<Login />);
//     userEvent.type(testEmailInput, validEmail);
//     userEvent.type(testPasswordInput, validPassword);
//     fireEvent.click(testLoginButton);
//     const tokenMeals = localStorage.getItem('mealsToken', JSON.parse('1'));
//     expect(tokenMeals).toBeDefined();
//     const tokenCocktails = localStorage.getItem('cocktailsToken', JSON.parse('1'));
//     expect(tokenCocktails).toBeDefined();
//   });

//   test('7 - Salve o e-mail da pessoa usuária no'
//     + 'localStorage na chave user após a submissão', () => {
//     renderWithRouter(<Login />);
//     userEvent.type(testEmailInput, validEmail);
//     userEvent.type(testPasswordInput, validPassword);
//     fireEvent.click(testLoginButton);
//     const tokenUser = localStorage.getItem('user', JSON.parse('email: login.email'));
//     expect(tokenUser).toBeDefined();
//   });

//   test('8 - Redirecione a pessoa usuária para a tela principal'
//     + 'de receitas de comidas após a submissão e validação com sucesso do login', () => {
//     const { history } = renderWithRouter(<Login />);
//     userEvent.type(testEmailInput, validEmail);
//     userEvent.type(testPasswordInput, validPassword);
//     fireEvent.click(testLoginButton);
//     expect(history.location.pathname).toBe('/foods');
//   });
// });
