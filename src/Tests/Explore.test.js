import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import Explore from '../pages/Explore';

describe('Explore', () => {
  const foodButton = screen.getByTestId('explore-foods');
  const drinkButton = screen.getByTestId('explore-drinks');
  const foodButtonTest = screen.getByText(/explore foods/i);
  const drinkButtonTest = screen.getByText(/explore drinks/i);

  test('67 - Implemente os elementos'
    + 'da tela de explorar respeitando os atributos descritos no protótipo', () => {
    renderWithRouter(<Explore />);
    expect(foodButton).toBeInTheDocument();
    expect(drinkButton).toBeInTheDocument();
  });

  test('68 - Desenvolva a tela de maneira que tenha 2 botões:'
    + 'um para explorar comidas e o outro para explorar bebidas', () => {
    renderWithRouter(<Explore />);
    expect(foodButtonTest).toBeInTheDocument();
    expect(drinkButtonTest).toBeInTheDocument();
  });

  test('69 - Redirecione a pessoa usuária ao clicar em um dos botões,'
  + 'a rota deve mudar para a página de explorar comidas ou de explorar bebidas', () => {
    renderWithRouter(<Explore />);
    fireEvent.click(drinkButton);
    // expect(history.location.pathname).toBe('/explore/foods');
    fireEvent.click(foodButton);
    // expect(history.location.pathname).toBe('/explore/drinks');
  });
});
