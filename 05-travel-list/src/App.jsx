import PropTypes from "prop-types";
import { useState } from "react";

// const initialItems = [
//     { id: 1, description: "Passports", quantity: 2, packed: false },
//     { id: 2, description: "Socks", quantity: 12, packed: true },
// ];

function App() {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        setItems((prev) => [...prev, item]);
    };

    return (
        <div className="app">
            <Logo />
            <Form addItem={addItem} />
            <PackingStats items={items} />
            <Stats />
        </div>
    );
}

function Logo() {
    return <h1>🏝️ Far Away 🧳</h1>;
}

function Form({ addItem }) {
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

        // console.log(newItem);
        addItem(newItem);

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
    addItem: PropTypes.func,
};

function PackingStats({ items }) {
    return (
        <div className="list">
            <ul>
                {items.map((item) => (
                    <Item key={item.id} item={item} />
                ))}
            </ul>
        </div>
    );
}

PackingStats.propTypes = {
    items: PropTypes.array,
};

function Item({ item }) {
    return (
        <li>
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.quantity} {item.description}
            </span>
            <button>❌</button>
        </li>
    );
}

Item.propTypes = {
    item: PropTypes.object,
};

function Stats() {
    return (
        <footer className="stats">
            <em>
                🧳 You have X items on your list, and you already packed X (X%)
            </em>
        </footer>
    );
}

export default App;
