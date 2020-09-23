import React from 'react';
import api from '../utils/api';
import Input from './Input';
import { value } from '../utils/currentApi';

function Main() {
  const [currencies, setCurrencies] = React.useState(null);

  React.useEffect(() => {
    api.getCurrency().then((data) => {
      setCurrencies(data.rates);
    });
  }, []);

  return (
    <main className="container">
      <form name="search" className="form form_type_search">
        <h1 className="form__title">Какая пара валют?</h1>
        <div className="form__section">
          <div className="form__wrapper form__wrapper_type_left">
            <Input
              inputType="form__input_left"
              currencies={currencies}
              value={value[0]}
            />
          </div>
          <div className="form__wrapper">
            <Input
              inputType="form__input_right"
              currencies={currencies}
              value={value[1]}
            />
          </div>
        </div>
      </form>
    </main>
  );
}

export default Main;
