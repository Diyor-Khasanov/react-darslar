import React, { useState, useEffect } from "react";

const CATEGORIES = ["Family", "Friends", "Work", "Other"];

const getInitialContacts = () => {
  const data = localStorage.getItem("contacts");
  return data ? JSON.parse(data) : [];
};

export default function Todo() {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [input, setInput] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [filter, setFilter] = useState("All");
  const [favouritesOnly, setFavouritesOnly] = useState(false);

  const [editId, setEditId] = useState(null);
  const [editInput, setEditInput] = useState("");
  const [editCategory, setEditCategory] = useState(CATEGORIES[0]);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleAdd = () => {
    if (!input.trim()) return;
    setContacts([
      ...contacts,
      {
        id: Date.now(),
        name: input.trim(),
        category,
        favourite: false,
      },
    ]);
    setInput("");
    setCategory(CATEGORIES[0]);
  };

  const handleDelete = (id) => {
    setContacts(contacts.filter((c) => c.id !== id));
    if (editId === id) setEditId(null);
  };

  const handleEdit = (id, name, cat) => {
    setEditId(id);
    setEditInput(name);
    setEditCategory(cat);
  };

  const handleUpdate = () => {
    setContacts(
      contacts.map((c) =>
        c.id === editId
          ? { ...c, name: editInput.trim(), category: editCategory }
          : c
      )
    );
    setEditId(null);
    setEditInput("");
    setEditCategory(CATEGORIES[0]);
  };

  const handleFavourite = (id) => {
    setContacts(
      contacts.map((c) =>
        c.id === id ? { ...c, favourite: !c.favourite } : c
      )
    );
  };

  // Filtering and sorting
  let filtered = contacts;
  if (filter !== "All") filtered = filtered.filter((c) => c.category === filter);
  if (favouritesOnly) filtered = filtered.filter((c) => c.favourite);
  const sortedContacts = [...filtered].sort((a, b) =>
    b.favourite - a.favourite || a.name.localeCompare(b.name)
  );

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow-lg sm:mt-6 sm:p-4">
      <h1 className="text-4xl text-teal-400">Uy Ishi</h1>
      <h2 className="text-2xl font-bold text-indigo-600 mb-4 text-center">
        Contacts List
      </h2>
      <div className="flex flex-col sm:flex-row gap-2 mb-4 bg-gray-50 p-3 rounded-lg shadow-sm border border-gray-100">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Contact name"
          className="flex-grow border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
        <button
          onClick={handleAdd}
          disabled={!input.trim()}
          className={`bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition disabled:bg-green-200 disabled:cursor-not-allowed`}
        >
          Add
        </button>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 mb-4 items-center">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option value="All">All Categories</option>
          {CATEGORIES.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
        <label className="flex items-center gap-1 text-sm">
          <input
            type="checkbox"
            checked={favouritesOnly}
            onChange={() => setFavouritesOnly((v) => !v)}
            className={`accent-yellow-400 ${favouritesOnly ? "ring-2 ring-yellow-400" : ""}`}
          />
          <span className={favouritesOnly ? "text-yellow-600 font-semibold" : ""}>
            Favourites only
          </span>
        </label>
      </div>
      <ul>
        {sortedContacts.map((c) => (
          <li
            key={c.id}
            className={`flex flex-col sm:flex-row items-center justify-between gap-2 mt-2 p-2 border-b border-gray-200 transition 
              ${c.favourite ? "bg-yellow-50" : ""}
              ${editId === c.id ? "bg-indigo-50 border-indigo-300" : ""}
              hover:bg-gray-50`}
          >
            {editId === c.id ? (
              <>
                <input
                  value={editInput}
                  onChange={(e) => setEditInput(e.target.value)}
                  className="flex-grow border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 mr-2"
                />
                <select
                  value={editCategory}
                  onChange={(e) => setEditCategory(e.target.value)}
                  className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 mr-2"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat}>{cat}</option>
                  ))}
                </select>
                <button
                  onClick={handleUpdate}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition mr-1"
                >
                  Update
                </button>
                <button
                  onClick={() => setEditId(null)}
                  className="bg-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span className="flex-grow font-medium">
                  {c.name}
                  <span className="ml-2 text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                    {c.category}
                  </span>
                </span>
                <button
                  onClick={() => handleFavourite(c.id)}
                  className={`${
                    c.favourite
                      ? "bg-yellow-400 text-white"
                      : "bg-gray-200 text-gray-700"
                  } px-3 py-1 rounded hover:bg-yellow-500 transition mr-1`}
                  title="Toggle Favourite"
                >
                  ★
                </button>
                <button
                  onClick={() => handleEdit(c.id, c.name, c.category)}
                  className="bg-indigo-400 text-white px-3 py-1 rounded hover:bg-indigo-500 transition mr-1"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(c.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
      {sortedContacts.length === 0 && (
        <div className="text-center text-gray-400 mt-6">No contacts found.</div>
      )}
    </div>
  );
}
