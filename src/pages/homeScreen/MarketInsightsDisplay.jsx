// MarketInsightsDisplay.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import rehypeRaw from "rehype-raw";
import ReactMarkdown from 'react-markdown';

const MarketInsightsDisplay = ({ selectedCrop, selectedMandi }) => {
  const [marketInsights, setMarketInsights] = useState([]);

  useEffect(() => {
    axios.get(`https://harmonious-horn-aa3f1ee25a.strapiapp.com/api/market-insights?crop_id=${selectedCrop}&mandi_id=${selectedMandi}`,{headers:{Authorization :'Bearer faeff3675b0b3589e13987c2a796dbabc956d05253e200472db4a68f53a63c059174932fa4cb3368a729dc7f3c8c8e01068cefd1f1f505fcf8566a8e15bb0bb0a797ecc93b778c41abd4d4157ad0fec6af1e764fc8bf638eca214c8f8bbbc7bb2c3649df7caeaba40f08da9f03b9005d796bcf1483b59e7767fbac4bc4e78b05'}})
      .then(response => {
        setMarketInsights(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching market insights:', error);
      });
  }, [selectedCrop, selectedMandi]);

  return (
    <div>
      <h2>Market Insights for {selectedCrop} at {selectedMandi}</h2>
      {marketInsights.map(insight => (
        <div key={insight.id}>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{insight.attributes.content_detail}</ReactMarkdown>
           {/* <h3>{insight.attributes.content_detail}</h3> */}
          <img src={insight.attributes.list_view_image_thumbnail} alt="Thumbnail" />
          <img src={insight.attributes.detail_view_img} alt="Detail View" />
        </div>
      ))}
    </div>
  );
};

export default MarketInsightsDisplay;
