import { useEffect, useState } from "react";
import Converter from "./components/Converter/Converter";
import Header from "./components/Header/Header";
import currencyApi from "./api/currency";
import ipApi from "./api/ip";

function App() {

  const [rates, setRates] = useState()

  const [countryCurrency, setCountryCurrency] = useState("")

  const [baseSum, setBaseSum] = useState((0).toFixed(3))
  const [baseСurrency, setBaseСurrency] = useState("")

  const [finalSum, setFinalSum] = useState((0).toFixed(3))
  const [finalСurrency, setFinalCurrency] = useState("USD")

  useEffect(() => {
    ipApi.getCurrency()
    .then((data) => {
      setCountryCurrency(data.currency)
      setBaseСurrency(data.currency)
    })
  }, [])
 
  useEffect(() => {
    currencyApi.getCurrency()
    .then((data) => {
      setRates(data.rates)
    })
    .catch(err => console.log(err))
  }, [])

  function changeBaseSum(e) {
    setBaseSum(e.target.value)

    const price = e.target.value / rates[baseСurrency]
    const result = (price * rates[finalСurrency])

    setFinalSum(result.toFixed(3))

    if (baseSum < 0) {
      setBaseSum(0)
    }
  }

  function changeBaseCurrency(e) {
    setBaseСurrency(e.target.value)

    const price = baseSum / rates[baseСurrency]
    const result = (price * rates[finalСurrency])

    setFinalSum(result.toFixed(3))
  }

  function changeFinalSum(e) {
    setFinalSum(e.target.value)

    const result = ((rates[baseСurrency] / rates[finalСurrency]) * e.target.value)

    setBaseSum(result.toFixed(3))
  }

  function changeFinalCurrency(e) {
    setFinalCurrency(e.target.value)

    const result = ((rates[baseСurrency] / rates[finalСurrency]) * finalSum)

    setBaseSum(result.toFixed(3))
  }

  return (
    <>
      <Header />
      <Converter
        rates={rates}
        baseSum={baseSum}
        changeBaseSum={changeBaseSum}
        baseСurrency={baseСurrency}
        changeBaseCurrency={changeBaseCurrency}
        finalSum={finalSum}
        changeFinalSum={changeFinalSum}
        finalСurrency={finalСurrency}
        changeFinalCurrency={changeFinalCurrency}
       />
    </>
  );
}

export default App;
