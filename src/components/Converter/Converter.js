import "./Converter.scss";
//import { useEffect, useState } from "react";
import ConverterInput from "./ConverterInput";

export default function Converter(props) {

  const { 
    rates, 
    baseSum, 
    changeBaseSum, 
    baseСurrency, 
    changeBaseCurrency,
    finalSum,
    changeFinalSum,
    finalСurrency,
    changeFinalCurrency,
  } = props;

  const currencyNames = rates && Object.keys(rates)

  return (
    <section className="converter">
      <div className="converter__container">
        <form className="converter__form">
          <ConverterInput
            title={"from"}
            rates={rates}
            currencyNames={currencyNames}
            sum={baseSum}
            changeSum={changeBaseSum}
            currency={baseСurrency}
            changeCurrency={changeBaseCurrency}
          />
          <ConverterInput
            title={"to"}
            rates={rates}
            currencyNames={currencyNames}
            sum={finalSum}
            changeSum={changeFinalSum}
            currency={finalСurrency}
            changeCurrency={changeFinalCurrency}
          />
        </form>
      </div>
    </section>
  )
}