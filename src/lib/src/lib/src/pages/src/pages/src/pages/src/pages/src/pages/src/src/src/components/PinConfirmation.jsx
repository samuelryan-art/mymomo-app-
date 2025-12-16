import React, { useState } from "react";

const PinConfirmation = ({ onConfirm }) => {
  const [pin, setPin] = useState("");

  const handleConfirm = () => {
    if (pin.length === 4) {
      onConfirm(pin);
      alert("Payment confirmed!");
      setPin("");
    } else {
      alert("Enter a 4-digit PIN");
    }
  };

  return (
    <div style={{ padding: "10px", border: "1px solid #ccc", marginTop: "20px" }}>
      <h3>Enter PIN to Confirm</h3>
      <input
        type="password"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
        maxLength={4}
        style={{ width: "50px", textAlign: "center" }}
      />
      <button onClick={handleConfirm} style={{ marginLeft: "10px" }}>Confirm</button>
    </div>
  );
};

export default PinConfirmation;
