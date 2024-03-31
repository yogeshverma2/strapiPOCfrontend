// MandiSelector.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MandiSelector = ({ selectedCrop, onSelectMandi }) => {
  const [mandis, setMandis] = useState([]);

  useEffect(() => {
    axios.get(`https://harmonious-horn-aa3f1ee25a.strapiapp.com/api/mandis`,{headers:{Authorization :'Bearer faeff3675b0b3589e13987c2a796dbabc956d05253e200472db4a68f53a63c059174932fa4cb3368a729dc7f3c8c8e01068cefd1f1f505fcf8566a8e15bb0bb0a797ecc93b778c41abd4d4157ad0fec6af1e764fc8bf638eca214c8f8bbbc7bb2c3649df7caeaba40f08da9f03b9005d796bcf1483b59e7767fbac4bc4e78b05'}})
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
