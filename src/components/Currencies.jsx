import React from 'react';

function Currencies({ currencies, value }) {
  const [valueDefault, setValueDefault] = React.useState(value);

  function handleChange(event) {
    setValueDefault(event.target.value);
  }

  return (
    <select
      value={valueDefault}
      name="currency"
      onChange={handleChange}
      className="form__select"
    >
      {currencies
        ? Object.keys(currencies).map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))
        : null}
    </select>
  );
}

export default Currencies;
