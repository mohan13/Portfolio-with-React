import React from "react";
import PropTypes from 'prop-types'
import { NavLink } from "react-router-dom";

const NavItem = ({ path, title }) => {
  return (
    <div>
      <NavLink to={path}>{title}</NavLink>
    </div>
  );
};
NavItem.propTypes={
  path:PropTypes.string,
  title:PropTypes.string.isRequired
}

export default NavItem;