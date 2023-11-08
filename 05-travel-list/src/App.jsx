import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingStats from "./components/PackingStats";
import Stats from "./components/Stats";

import { useState } from "react";

function App() {
    const [items, setItems] = useState([]);

    function handleAddItems(item) {
        setItems((prev) => [...prev, item]);
    }

    function handleDeleteItem(id) {
        setItems((items) => items.filter((item) => item.id !== id));
    }

    function handleToggleItem(id) {
        setItems((items) => {
            return items.map((item) =>
                item.id === id ? { ...item, packed: !item.packed } : item
            );
        });
    }

    function handleClearList() {
        const confirmed = window.confirm(
            "Are you sure you want to delete all items?"
        );

        if (confirmed) setItems([]);
    }

    return (
        <div className="app">
            <Logo />
            <Form onAddItems={handleAddItems} />
            <PackingStats
                items={items}
                onDeleteItem={handleDeleteItem}
                onToggleItem={handleToggleItem}
                onClearList={handleClearList}
            />
            <Stats items={items} />
        </div>
    );
}

export default App;
