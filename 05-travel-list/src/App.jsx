import PropTypes from "prop-types";
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

    return (
        <div className="app">
            <Logo />
            <Form onAddItems={handleAddItems} />
            <PackingStats
                items={items}
                onDeleteItem={handleDeleteItem}
                onToggleItem={handleToggleItem}
            />
            <Stats items={items} />
        </div>
    );
}

function Logo() {
    return <h1>🏝️ Far Away 🧳</h1>;
}

function Form({ onAddItems }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(event) {
        event.preventDefault();

        if (!description) return;

        const newItem = {
            description,
            quantity,
            packed: false,
            id: Date.now(),
        };

        onAddItems(newItem);

        setDescription("");
        setQuantity(1);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your 😍 trip?</h3>
            <select
                value={quantity}
                onChange={({ target }) => setQuantity(+target.value)}
            >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                        {num}
                    </option>
                ))}
            </select>
            <input
                type="text"
                placeholder="Item..."
                value={description}
                onChange={({ target }) => setDescription(target.value)}
            />
            <button>Add</button>
        </form>
    );
}

Form.propTypes = {
    onAddItems: PropTypes.func,
};

function PackingStats({ items, onDeleteItem, onToggleItem }) {
    return (
        <div className="list">
            <ul>
                {items.map((item) => (
                    <Item
                        key={item.id}
                        item={item}
                        onDeleteItem={onDeleteItem}
                        onToggleItem={onToggleItem}
                    />
                ))}
            </ul>
        </div>
    );
}

PackingStats.propTypes = {
    items: PropTypes.array,
    onDeleteItem: PropTypes.func,
    onToggleItem: PropTypes.func,
};

function Item({ item, onDeleteItem, onToggleItem }) {
    return (
        <li>
            <input
                type="checkbox"
                value={item.packed}
                onChange={() => onToggleItem(item.id)}
            />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.quantity} {item.description}
            </span>
            <button onClick={() => onDeleteItem(item.id)}>❌</button>
        </li>
    );
}

Item.propTypes = {
    item: PropTypes.object,
    onDeleteItem: PropTypes.func,
    onToggleItem: PropTypes.func,
};

function Stats({ items }) {
    if (!items.length) {
        return (
            <p className="stats">
                <em>Start adding some items to your packing list 🚀</em>
            </p>
        );
    }

    // Derived State
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked / numItems) * 100);

    return (
        <footer className="stats">
            <em>
                {percentage === 100
                    ? "You got everything! Ready to go ✈️"
                    : `🧳 You have ${numItems} items on your list, and you already
                packed ${numPacked} (${percentage ? percentage : "0"}%)`}
            </em>
        </footer>
    );
}

Stats.propTypes = {
    items: PropTypes.array,
};

export default App;
