import { useEffect, useState } from "react";

function useLocalStorage(itemKey: string) {
    const [items, setItems] = useState([])

    useEffect(() => {
        console.log(localStorage.getItem(itemKey))
        const items = JSON.parse(localStorage.getItem(itemKey));

        if (items) {
            setItems(items);
        }
    }, []);

    const saveItem = (item: Object, overwrite: boolean) =>{
        if(overwrite) {
            setItems(item)
            console.log(item)
        } else if(items.length < 10) {
            setItems([...items, item])
        } else {
            // Remove first item from array
            setItems(items.slice(1))
        }
    }
    
    useEffect(()=>{
        if(items.length > 0 || Object.keys(items).length > 0) {
            localStorage.setItem(itemKey, JSON.stringify(items));
        }
    }, [items])

    const clearItems = () => {
        setItems([])
        localStorage.removeItem(itemKey)
    }

    return [items, saveItem, clearItems]
}

export default useLocalStorage;