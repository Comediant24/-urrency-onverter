import React from 'react';

function Input({ inputType, currencies, value }) {
  const [inputValue, setInputValue] = React.useState(1);
  const [selectValue, setSelectValue] = React.useState(value);

  function handleChange(event) {
    setSelectValue(event.target.value);
  }
  function changeInput(evt) {
    setInputValue(evt.target.value);
  }

  return (
    <>
      <input
        type="number"
        name="entityId1"
        placeholder="Введите значение"
        className={`form__input ${inputType} form__input_type_entity-id`}
        value={inputValue}
        onChange={changeInput}
      />
      <div className="form__select-container">
        <select
          value={selectValue}
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
      </div>
    </>
  );
}

export default Input;
