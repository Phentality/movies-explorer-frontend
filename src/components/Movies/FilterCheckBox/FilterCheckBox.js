import React from 'react';


function FilterCheckBox(props) {
  /*const [isActive, setIsActive] = React.useState(false);

  /*React.useEffect(() => {
    if (localStorage.getItem('searchFilter')) {
      const status = (localStorage.getItem('searchFilter'));
      setIsActive(!status);
      console.log((localStorage.getItem('searchFilter')));
    }
    
  }, [])*/
  
  function handleClick() {
    props.onClick();
  }


  const filterCheckBoxClassName = (
    `${props.isActive ? 'filter-check-box__button' : 'filter-check-box__button-unactive'}`
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