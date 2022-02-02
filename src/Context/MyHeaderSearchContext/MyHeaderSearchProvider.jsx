import PropTypes from 'prop-types';
import React, { useState } from 'react';
import MyContext from './MyContent';

function MyHeaderSearchProvider({ children }) {
  const [searchHeaderInputValue, setSearchHeaderInputValue] = useState('');
  const [searchHeaderRadioValue, setSearchHeaderRadioValue] = useState('');
  const [domainName, setDomainName] = useState('');

  return (
    <MyContext.Provider
      value={ {
        searchHeaderInputValue,
        setSearchHeaderInputValue,
        searchHeaderRadioValue,
        setSearchHeaderRadioValue,
        domainName,
        setDomainName,
      } }
    >
      { children }
    </MyContext.Provider>

  );
}

MyHeaderSearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyHeaderSearchProvider;
