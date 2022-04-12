import { render } from '@testing-library/react';
import { RestarauntList } from '../RestarauntList';

describe('Restaurant List', () => {
  it('should load restaurants on first render', () => {
    const loadRestaurants = jest.fn().mockName('loadRestaurants');

    render(<RestarauntList loadRestaurants={loadRestaurants} />);

    expect(loadRestaurants).toHaveBeenCalled();
  });
});
