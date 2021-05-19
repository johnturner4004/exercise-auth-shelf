import React from 'react';
import {useSelector} from 'react-redux';

function ShelfPage() {
  const list = useSelector(store => store.listReducer);
  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      <ul>
        {list.map((item) => 
          <li key={item.id}>{item.description}</li>  
        )}
      </ul>
    </div>
  );
}

export default ShelfPage;
