import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

function ShelfPage() {
  const dispatch = useDispatch();
  const list = useSelector(store => store.listReducer.data);
  useEffect(() => {
    dispatch({type: 'GET_ITEMS'});
  }, [list]);
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
