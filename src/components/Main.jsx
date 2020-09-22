import React from 'react';
import Input from './Input';

function Main() {
  return (
    <main className="container">
      <form name="search" className="form form_type_search">
        <h1 className="form__title">Какая пара валют?</h1>
        <div className="form__section">
          <div className="form__wrapper form__wrapper_type_left">
            <Input inputType="form__input_left" />
          </div>
          <div className="form__wrapper">
            <Input inputType="form__input_right" />
          </div>
        </div>
      </form>
    </main>
  );
}

export default Main;
