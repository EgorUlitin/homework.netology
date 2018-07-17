'use strict';

function Stars({ count }) {
  const arr = new Array(count).fill([]);
  
  if(count < 1 || count > 5 || typeof count !== "number") return null;
  
  return ( 
    <ul className="card-body-stars u-clearfix">
      {arr.map(item => <li><Star /></li>)}
    </ul>
  );
};
