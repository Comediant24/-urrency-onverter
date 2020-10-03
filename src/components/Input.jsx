import React from 'react';

function Input({ selectValue, value, onValueChange, allCurrency, inputType }) {
  //const [inputValue, setInputValue] = React.useState('');
  // const [selectValue, setSelectValue] = React.useState(value);

  // function handleChange(e) {
  //   setSelectValue(e.target.value);
  // }
  // function changeInput(e) {
  //   setInputValue(e.target.value);
  // }

  // React.useEffect(() => {
  //   setInputValue(value);
  // }, []);

  function handleChangeValue(e) {
    onValueChange(e.target.value);
  }

  return (
    <>
      <input
        type="number"
        name="entityId1"
        placeholder="Введите значение"
        className={`form__input ${inputType} form__input_type_entity-id`}
        value={value}
        onChange={onValueChange}
      />
      <div className="form__select-container">
        <select
          value={selectValue}
          name="currency"
          onChange={handleChangeValue}
          className="form__select"
        >
          {allCurrency
            ? Object.keys(allCurrency).map((item, index) => (
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
