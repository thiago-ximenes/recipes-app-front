import PropTypes from 'prop-types';
import React, { useState } from 'react';
import MyContext from './MyContent';

function MyHeaderSearchProvider({ children }) {
  const [searchHeaderInputValue, setSearchHeaderInputValue] = useState('');
  const [searchHeaderRadioValue, setSearchHeaderRadioValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [domainName, setDomainName] = useState('');
  const [data, setData] = useState([]);

  return (
    <MyContext.Provider
      value={ {
        searchHeaderInputValue,
        setSearchHeaderInputValue,
        searchHeaderRadioValue,
        setSearchHeaderRadioValue,
        domainName,
        setDomainName,
        loading,
        setLoading,
        data,
        setData,
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
