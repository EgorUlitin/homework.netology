'use strict';

const Listing = ({ items = [] }) => {
  console.log(items);
  fetch('https://neto-api.herokuapp.com/etsy')
    .then(response => {
      return response;
    });
  

  return (
    <div>1</div>
  );
};