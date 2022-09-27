import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import "./Converter.scss";

export default function ConverterInput(props) {

  const { 
    title, 
    currencyNames, 
    sum, 
    changeSum, 
    currency, 
    changeCurrency 
  } = props;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef();

  function closeDropdown(e) {
    setIsDropdownOpen(e && e.target === dropdownRef.current)
  }

  useEffect(() => {
    document.addEventListener('click', closeDropdown);
    return () => document.removeEventListener('click', closeDropdown);
  }, []);

  return (
    <>
      <p className="converter__text">{title}</p>
      <div className="converter__dropdown-container">
        <div className="converter__input-dropdown" ref={dropdownRef}>{currency}</div>
        <div className={`converter__dropdown ${isDropdownOpen && "converter__dropdown_active"}`}>
          {
            currencyNames && currencyNames.map((item, index) => {
              return (
                <option
                  key={index} 
                  className="converter__dropdown-item"
                  value={item}
                  onClick={changeCurrency}
                  >
                    {item}
                  </option>
              )
            })
            }
        </div>
      </div>
      <input
        className="converter__input"
        autoComplete="off"
        type="number"
        id="basic-currency"
        placeholder=""
        value={sum}
        onChange={changeSum}
      /> 
    </>
  )
}