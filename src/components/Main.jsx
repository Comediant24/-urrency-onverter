import React from 'react';
//import api from '../utils/api';
import Input from './Input';

function Main() {
  // const [currencies, setCurrencies] = React.useState(null);

  // React.useEffect(() => {
  //   api.getCurrency().then((data) => {
  //     setCurrencies(data.rates);
  //   });
  // }, []);

  const getCurrency = {
    base: 'EUR',
    rates: {
      THB: '20',
      RUB: '45',
      USD: '1.2',
    },
  };

  function val1ToVal2(value) {
    //ввод в первый инпут => результат во втором
    return value * getCurrency.rates.THB;
  }

  function val2ToVal1(value) {
    //ввод во второй инпут => результат в первом
    return value / getCurrency.rates.THB;
  }

  function tryConvert(value, convert) {
    const input = parseFloat(value);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(value);
    const rounded = Math.round(output * 100) / 100;
    return rounded.toString();
  }

  const [inputValue, setInputValue] = React.useState('');
  const [selectValue, setSelectValue] = React.useState('');
  console.log('Main -> inputValue', inputValue);

  // function changeInput(e) {
  //   setInputValue(e.target.value);
  // }

  function handleEurChange(value) {
    setInputValue(value);
    setSelectValue(getCurrency.base);
  }

  function handleThbChange(value) {
    setInputValue(value);
    setSelectValue(getCurrency.base);
  }

  const eur =
    selectValue === 'EUR' ? tryConvert(inputValue, val1ToVal2) : inputValue;
  const thb =
    selectValue === 'THB' ? tryConvert(inputValue, val2ToVal1) : inputValue;

  console.log('Main -> eur', eur);
  return (
    <main className="container">
      <form name="search" className="form form_type_search">
        <h1 className="form__title">Какая пара валют?</h1>
        <div className="form__section">
          <div className="form__wrapper form__wrapper_type_left">
            <Input
              // inputValue={inputValue}
              // onValueChange={changeInput}
              // inputType="form__input_left"
              // value={inputValue}
              // allCurrency={getCurrency.rates}
              selectValue={selectValue}
              value={eur}
              onValueChange={handleEurChange}
              allCurrency={getCurrency.rates}
              inputType="form__input_left"
            />
          </div>
          <div className="form__wrapper">
            <Input
              selectValue={getCurrency.rates.THB}
              value={thb}
              onValueChange={handleThbChange}
              allCurrency={getCurrency.rates}
              inputType="form__input_right"
            />
          </div>
        </div>
      </form>
    </main>
  );
}

export default Main;
