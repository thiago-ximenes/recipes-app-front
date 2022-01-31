import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../components/Header/Header';
import renderWithRouter from './renderWithRouter';

describe('Header', () => {
  const profile = 'profile-top-btn';
  const title = 'page-title';
  const search = 'search-top-btn';
  const searchInput = 'search-input';

  test(`9 - Verifique se os seguintes elementos:
  tem os data-testids 'profile-top-btn', 'page-title' e 'search-top-btn'`, () => {
    renderWithRouter(<Header />);
    const testeProfile = screen.getByTestId(profile);
    const testetitle = screen.getByTestId(title);
    const testeSearch = screen.getByTestId(search);

    expect(testeProfile).toBeInTheDocument();
    expect(testetitle).toBeInTheDocument();
    expect(testeSearch).toBeInTheDocument();
  });

  test('11 - Redirecione a pessoa usuária para a tela de perfil', () => {
    const { history } = renderWithRouter(<Header />);
    const testeProfile = screen.getByTestId(profile);

    userEvent.click(testeProfile);
    expect(history.location.pathname).toBe('/profile');
  });

  test(`12 - Desenvolva o botão de busca que:
  ao ser clicado, a barra de busca deve aparecer. O mesmo serve para escondê-la`, () => {
    renderWithRouter(<Header />);
    const testeSearch = screen.getByTestId(search);
    expect(screen.queryByTestId(searchInput)).not.toBeInTheDocument();
    userEvent.click(testeSearch);
    expect(screen.queryByTestId(searchInput)).toBeInTheDocument();
    userEvent.click(testeSearch);
    expect(screen.queryByTestId(searchInput)).not.toBeInTheDocument();
  });
});
