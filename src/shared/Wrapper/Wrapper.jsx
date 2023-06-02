import React from 'react';
import PropTypes from 'prop-types';
import { WrapperDiv } from './Wrapper.styles';

const Wrapper = ({ children }) => <WrapperDiv>{children}</WrapperDiv>;

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
