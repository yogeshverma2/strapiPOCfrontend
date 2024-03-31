import React, { useState } from 'react';
import CropSelector from './CropSelector';
import MandiSelector from './MandiSelector';
import MarketInsightsDisplay from './MarketInsightsDisplay';


function Homescreen() {// App.js

      const [selectedCrop, setSelectedCrop] = useState(null);
      const [selectedMandi, setSelectedMandi] = useState(null);
    
      const handleCropSelect = (cropId) => {
        setSelectedCrop(cropId);
        setSelectedMandi(null); // Reset selected mandi when crop changes
      };
    
      const handleMandiSelect = (mandiId) => {
        setSelectedMandi(mandiId);
      };
    
      return (
        <div>
          <h1>Market Insights</h1>
          <CropSelector onSelectCrop={handleCropSelect} />
          {selectedCrop && (
            <MandiSelector
              selectedCrop={selectedCrop}
              onSelectMandi={handleMandiSelect}
            />
          )}
          {selectedMandi && (
            <MarketInsightsDisplay
              selectedCrop={selectedCrop}
              selectedMandi={selectedMandi}
            />
          )}
        </div>
      );
 };
    
    
    


export default Homescreen
