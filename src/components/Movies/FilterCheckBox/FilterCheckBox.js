import React from 'react';


function FilterCheckBox() {

    /*function handleClick() {
        
      }
      const filterCheckBoxClassName = (
        `${isActive ? 'filter-check-box__button' : 'filter-check-box__button_unactive'}`
      );*/

    return (
        <div className='filter-check-box'>
            <div className='filter-check-box__container'>
                <div className='filter-check-box__button-container'>
                    <button className="filter-check-box__button" aria-label="Короткометражки" name="shortfilms" value="" />
                    <h1 className="filter-check-box__text">Короткометражки</h1>
                </div>
            </div>
        </div>)
}

export default FilterCheckBox;