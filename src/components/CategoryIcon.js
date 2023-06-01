import React from 'react';

const CategoryIcon = ({ title, link }) => {
    const iconMappings = {
      'Rental': 'fas fa-car',
      Flights: 'fas fa-plane',
      Safety: 'fas fa-hard-hat',
      Tech: 'fas fa-laptop',
      Equipment: 'fas fa-hiking',
    };
  
    const iconClassName = iconMappings[title];
  
    return (
        <div>
          {iconClassName && <i className={iconClassName}></i>}
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </div>
      );
    };
  
export default CategoryIcon;
    