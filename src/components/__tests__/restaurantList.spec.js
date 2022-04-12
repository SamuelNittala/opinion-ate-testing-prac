import { render } from '@testing-library/react';
import { RestaurantList } from '../RestaurantList';

describe('Restaurant List', () => {
  it('should load restaurants on first render', () => {
    const loadRestaurants = jest.fn().mockName('loadRestaurants');
    const restaurants = [];
    render(
      <RestaurantList
        loadRestaurants={loadRestaurants}
        restaurants={restaurants}
      />,
    );
    expect(loadRestaurants).toHaveBeenCalled();
  });

  it('should render list of restaurants', () => {
    const noop = () => {};
    const restaurants = [
      { id: 1, name: 'Sushi Place' },
      { id: 2, name: 'Pizza Place' },
    ];
    const { queryByText } = render(
      <RestaurantList loadRestaurants={noop} restaurants={restaurants} />,
    );

    expect(queryByText('Sushi Place')).not.toBeNull();
    expect(queryByText('Pizza Place')).not.toBeNull();
  });
});
