import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

function ShelfPage() {
  const dispatch = useDispatch();
  const list = useSelector(store => store.listReducer.data);
  const user = useSelector(store =>store.user);

  function handleDelete(id) {
    console.log(id);
    
  }

  //Gets the list on page load
  useEffect(() => {
    dispatch({type: 'GET_ITEMS'});
  }, []);
  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      {list ? <ul>
        {list.map((item) => 
        <>
          <li key={item.id}>{item.description}</li>
          {(item && item.user_id === user.id) ? 
          <button key={item.id} value={item.id} onClick={(event) => handleDelete(event.target.value)} >Delete</button> 
          : '' }
        </>
        )}
      </ul> : ''}
    </div>
  );
}

export default ShelfPage;
