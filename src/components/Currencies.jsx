import React from 'react';

function Currencies() {
  return (
    <select name="currency" className="form__select">
      <option value="usd">USD</option>
      <option value="eur">EUR</option>
      <option value="rub">RUB</option>
    </select>
  );
}

export default Currencies;
