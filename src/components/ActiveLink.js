import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';


export default function ActiveLink({children, ...rest}) {
    let isActive = true;
    
  return (
    <RouterLink {...rest}>
        {
            cloneElement(children, {
                color: isActive ? 'green.500' : 'gray.500'
            })
        }
    </RouterLink>
  )
};

ActiveLink.propTypes = {
    children: PropTypes.element.isRequired,
  };
  