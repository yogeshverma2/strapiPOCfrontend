// MandiSelector.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MandiSelector = ({ selectedCrop, onSelectMandi }) => {
  const [mandis, setMandis] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:1337/api/mandis`,{headers:{Authorization :'Bearer 36adf71672d8b8a85f4b1d4df5ff1b7d56a9388a3d9aaabc28286454112b94e564aee8b0db4ba082df1630caa61949937bf5d6affa9e4557dc924f3e9220981070738c698889598e8cee7d66d0d11300483ec616e8ab12cc10954460848c25690554aad35fc48c28091d101ac5e53493e34e7f6d95941934ae675a14cc9b9b5a'}})
      .then(response => {
        setMandis(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching mandis:', error);
      });
  }, [selectedCrop]);

  return (
    <select onChange={(e) => onSelectMandi(e.target.value)}>
      <option value="">Select Mandi</option>
      {mandis.map(mandi => (
        <option key={mandi.id} value={mandi.id}>{mandi.attributes.mandi_name}</option>
      ))}
    </select>
  );
};

export default MandiSelector;
