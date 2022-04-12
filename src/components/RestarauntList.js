import React from 'react';

export const RestarauntList = ({ loadRestaurants, restaurants }) => {
  React.useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);
  return (
    <ul>
      {restaurants.map(restaurant => (
        <li key={restaurant.id}> {restaurant.name} </li>
      ))}
    </ul>
  );
};

export default RestarauntList;
