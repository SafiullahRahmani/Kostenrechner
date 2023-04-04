import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);
  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Neue Transaction einfügen</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Text eingeben..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Betrag <br />
            (Minus - Ausgaben, Plus - Einnahmen)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Betrag eingeben..."
          />
        </div>
        <button className="btn">Einfügen</button>
      </form>
    </>
  );
};

export default AddTransaction;
