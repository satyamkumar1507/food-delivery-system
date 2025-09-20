import { fireEvent, render, screen } from '@testing-library/react';
import Body from '../Body';
import MOCK_DATA from '../mocks/resListmock.json';
// import { act } from 'react-dom/test-utils';
import { act } from 'react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test('should search ResList for burger text input', async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    ))
});