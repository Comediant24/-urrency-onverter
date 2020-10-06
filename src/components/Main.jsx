import React from 'react';
import api from '../utils/api';
import Input from './Input';

function Main() {
  React.useEffect(() => {
    api.getCurrency().then((data) => {
      setAllCurrency({ ...data.rates, [data.base]: 1 });
    });
  }, []);

  const [base, setBase] = React.useState('EUR');
  const [allCurrency, setAllCurrency] = React.useState({});

  const [inputValueLeft, setInputValueLeft] = React.useState('1');
  const [selectСurrencyLeft, setSelectCurrencyLeft] = React.useState(base);

  const [inputValueRight, setInputValueRight] = React.useState(allCurrency.RUB);
  const [selectСurrencyRight, setSelectCurrencyRight] = React.useState('RUB');

  function roudingValue(value) {
    return Math.floor(value * 100) / 100;
  }

  React.useEffect(() => {
    setInputValueRight(roudingValue(allCurrency[selectСurrencyRight]));
  }, [allCurrency, selectСurrencyRight]);

  React.useEffect(() => {
    api.setNewBase(base).then((data) => {
      setAllCurrency({ ...data.rates, [data.base]: 1 });
    });
  }, [base]);

  function handleInput(e) {
    e.target.name === 'left' ? handleInputLeft(e) : handleInputRight(e);
  }

  function handleInputLeft(e) {
    setInputValueLeft(e.target.value);
    setInputValueRight(
      roudingValue(e.target.value * allCurrency[selectСurrencyRight])
    );
  }

  function handleInputRight(e) {
    setInputValueRight(e.target.value);
    setInputValueLeft(
      roudingValue(e.target.value / allCurrency[selectСurrencyRight])
    );
  }

  function handleSelect(e) {
    setBase(e.target.value);
    e.target.name === 'leftCurrency'
      ? handleSelectLeft(e)
      : handleSelectRight(e);
  }

  function handleSelectLeft(e) {
    setSelectCurrencyLeft(e.target.value);
    setBase(e.target.value);
    setInputValueRight(
      roudingValue(inputValueLeft * allCurrency[selectСurrencyRight])
    );
  }
  function handleSelectRight(e) {
    setSelectCurrencyRight(e.target.value);
    setBase(selectСurrencyLeft);
  }

  return (
    <main className="container">
      <form name="search" className="form form_type_search">
        <h1 className="form__title">Какая пара валют?</h1>
        <div className="form__section">
          <div className="form__wrapper form__wrapper_type_left">
            <Input
              className="form__input_left"
              selectValue={selectСurrencyLeft}
              inputValue={inputValueLeft}
              allCurrency={allCurrency}
              nameInput="left"
              nameSelect="leftCurrency"
              onValueChange={handleInput}
              onSelectChange={handleSelect}
            />
          </div>
          <div className="form__wrapper">
            <Input
              className="form__input_right"
              selectValue={selectСurrencyRight}
              inputValue={inputValueRight}
              allCurrency={allCurrency}
              nameInput="right"
              nameSelect="rightCurrency"
              onValueChange={handleInput}
              onSelectChange={handleSelect}
            />
          </div>
        </div>
      </form>
    </main>
  );
}

export default Main;
