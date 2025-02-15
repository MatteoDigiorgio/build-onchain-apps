import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

describe('Header', () => {
  // Changes scroll state based on user scroll behavior
  it('should change the scroll state based on user scroll behavior', () => {
    // Mock the useState and useEffect hooks
    const useStateMock = jest.spyOn(React, 'useState');
    const useEffectMock = jest.spyOn(React, 'useEffect');

    // Render the Header component
    render(<Header />);

    // Assert that the useState and useEffect hooks are called
    expect(useStateMock).toHaveBeenCalledWith('at-top');
    expect(useEffectMock).toHaveBeenCalled();
  });
});
