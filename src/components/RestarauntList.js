import React from 'react';

export const RestarauntList = ({ loadRestaurants }) => {
  React.useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);
  return <div>RestarauntList</div>;
};

export default RestarauntList;
