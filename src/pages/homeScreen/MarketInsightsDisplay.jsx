// MarketInsightsDisplay.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import rehypeRaw from "rehype-raw";
import ReactMarkdown from 'react-markdown';

const MarketInsightsDisplay = ({ selectedCrop, selectedMandi }) => {
  const [marketInsights, setMarketInsights] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:1337/api/market-insights?crop_id=${selectedCrop}&mandi_id=${selectedMandi}`,{headers:{Authorization :'Bearer 36adf71672d8b8a85f4b1d4df5ff1b7d56a9388a3d9aaabc28286454112b94e564aee8b0db4ba082df1630caa61949937bf5d6affa9e4557dc924f3e9220981070738c698889598e8cee7d66d0d11300483ec616e8ab12cc10954460848c25690554aad35fc48c28091d101ac5e53493e34e7f6d95941934ae675a14cc9b9b5a'}})
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
