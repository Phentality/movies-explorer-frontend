import React from 'react';


function FilterCheckBox() {
  const [isActive, setIsActive] = React.useState(false);

  function handleClick() {
    setIsActive(!isActive);
  }
  const filterCheckBoxClassName = (
    `${isActive ? 'filter-check-box__button' : 'filter-check-box__button-unactive'}`
  );

  return (
    <div className='filter-check-box'>
      <div className='filter-check-box__container'>
        <div className='filter-check-box__button-container'>
          <button className={filterCheckBoxClassName} onClick={handleClick} aria-label="Короткометражки" name="shortfilms" value="" />
          <h1 className="filter-check-box__text">Короткометражки</h1>
        </div>
      </div>
    </div>)
}

export default FilterCheckBox;