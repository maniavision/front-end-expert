import { Fragment, useState } from "react";

export default function ComponentListApp() {

    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    return (
        <>
            {
                items.map((item, i) => {
                    return (
                            <Fragment key={i}>
                            <li>item</li>
                            <li>Test</li>
                            </Fragment>
                        );
                })
            }
            <input 
                type="text" 
                value={newItem}
                onChange={(event) => setNewItem(event.target.value)}
            />
            <button
                onClick={() => {
                    setItems([...items, newItem]);
                    setNewItem('');
                }}>
                    Add List Item
            </button>
        </>
    );
} 