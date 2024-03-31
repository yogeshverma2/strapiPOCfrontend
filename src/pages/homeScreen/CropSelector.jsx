// CropSelector.js
import  { useState, useEffect } from 'react';
import axios from 'axios';

const CropSelector = ({ onSelectCrop }) => {
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    axios.get('https://harmonious-horn-aa3f1ee25a.strapiapp.com/api/crops',{headers:{Authorization :'Bearer faeff3675b0b3589e13987c2a796dbabc956d05253e200472db4a68f53a63c059174932fa4cb3368a729dc7f3c8c8e01068cefd1f1f505fcf8566a8e15bb0bb0a797ecc93b778c41abd4d4157ad0fec6af1e764fc8bf638eca214c8f8bbbc7bb2c3649df7caeaba40f08da9f03b9005d796bcf1483b59e7767fbac4bc4e78b05'}})
      .then(response => {
        setCrops(response.data.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error fetching crops:', error);
      });
  }, []);

  return (
    <select onChange={(e) => onSelectCrop(e.target.value)}>
      <option value="">Select Crop</option>
      {crops.map(crop => (
        <option key={crop.id} value={crop.id}>{crop.attributes.crop_name}</option>
      ))}
    </select>
  );
};

export default CropSelector;
