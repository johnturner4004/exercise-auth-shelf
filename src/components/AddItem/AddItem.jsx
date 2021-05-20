import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function AddItem() {
    
    const dispatch = useDispatch();
    // const [userId, setUserId] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');

    // const items = useSelector(store => store.addItemReducer);
    const user = useSelector(store => store.user);

    const addingItem = {
        url: url,
        description: description,
        user_id: user.id
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({type: 'FETCH_ADDING_ITEM', payload: addingItem});
    }


    return (
       <form onSubmit={handleSubmit}>

            <h3>Image Url</h3>
                <input 
                type="text"
                placeholder="Image url goes here"
                value={url}
                onChange={(event) => setUrl(event.target.value)}
                />
            <h3>Item Description</h3>
                <textarea 
                type="text" placeholder="Add description here!"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                >
                </textarea>
                <br />
            <button type="submit">Add</button>
       </form>
    )
}

export default AddItem;