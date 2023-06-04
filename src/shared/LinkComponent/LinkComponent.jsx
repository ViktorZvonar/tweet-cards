import React from 'react';
import PropTypes from 'prop-types';
import { Link, Back } from './LinkComponent.styles';

const LinkComponent = ({ to, children, linkType }) => {
  const LinkType = linkType === 'link' ? Link : Back;
  return <LinkType to={to}>{children}</LinkType>;
};

LinkComponent.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  linkType: PropTypes.oneOf(['link', 'back']),
};

export default LinkComponent;
