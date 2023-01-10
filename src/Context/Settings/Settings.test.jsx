import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SettingsProvider,{ SettingsContext } from '.'; { SettingsContext } from './index';

describe('Settings context', ()  => {
  test('initial state loads as expected', () => {
    render(
      <SettingsProvider>
        <SettingsContext.Consumer>
          {
            ({showComplete, pageItemas, sort}) => (
              <ul>
                <li data-testid="show-complete">{showComplete.toString()}</li>
                <li data-testid="page-items">{pageItems}</li>
                <li data-testid="sort">{sort}</li>
              </ul>
            )
          }
        </SettingsContext.Consumer>
          </SettingsProvider>
      );

    let showComplete = screen.getByTestId('show-complete');
    let pageItems = screen.getByTestId('page-items');

    expect(showComplete).toBeTruthy();
    expect(pageItems).toBeInTheDocument();
    expect(h1).toHaveTextContent('To Do List: 0 items pending');
  })
})
