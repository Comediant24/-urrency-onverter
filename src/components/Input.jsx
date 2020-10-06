import React from 'react';

function Input({
  className,
  selectValue,
  inputValue,
  allCurrency,
  nameInput,
  nameSelect,
  onValueChange,
  onSelectChange,
}) {
  function handleChangeValue(e) {
    onValueChange(e);
  }

  function handleChangeSelect(e) {
    onSelectChange(e);
  }
  return (
    <>
      <div className="form__input-container">
        <input
          type="number"
          placeholder="Введите значение"
          className={`form__input ${className} form__input_type_entity-id`}
          value={inputValue ? inputValue : ''}
          name={nameInput}
          onChange={handleChangeValue}
        />
      </div>
      <div className="form__select-container">
        <select
          value={selectValue}
          name={nameSelect}
          onChange={handleChangeSelect}
          className="form__select"
        >
          {allCurrency
            ? Object.keys(allCurrency)
                .sort()
                .map((item, index) => (
                  <option
                    className="form__select-option"
                    key={index}
                    value={item}
                  >
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
