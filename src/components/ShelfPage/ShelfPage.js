import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import AddItem from '../AddItem/AddItem';

function ShelfPage() {
  const dispatch = useDispatch();
  const list = useSelector(store => store.listReducer.data);
  const user = useSelector(store =>store.user);

  function handleDelete(id) {
    dispatch({type: 'DELETE_ITEM', payload: id})
    
  }

  //Gets the list on page load
  useEffect(() => {
    dispatch({type: 'GET_ITEMS'});
  }, []);
  return (
    <div className="container">
      <h2>Shelf</h2>
      <AddItem />
      <p>All of the available items can be seen here.</p>
      {list ? <ul>
        {list.map((item) => 
        <div key={item.id}>
          <li >{item.description}</li>
          {(item && item.user_id === user.id) ? 
          <button value={item.id} onClick={(event) => handleDelete(event.target.value)} >Delete</button> 
          : '' }
        </div>
        )}
      </ul> : ''}
    </div>
  );
}

export default ShelfPage;
