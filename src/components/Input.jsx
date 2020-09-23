import React from 'react';
import Currencies from './Currencies';

function Input({ inputType, currencies, value }) {
  return (
    <>
      <input
        type="number"
        name="entityId1"
        placeholder="Введите значение"
        className={`form__input ${inputType} form__input_type_entity-id`}
      />
      <div className="form__select-container">
        <Currencies currencies={currencies} value={value} />
      </div>
    </>
  );
}

export default Input;
