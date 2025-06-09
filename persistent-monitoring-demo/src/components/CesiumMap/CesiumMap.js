import React, { useEffect, useRef, useState } from 'react';
import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import InteractiveBoundingBox from '../InteractiveBoundingBox';
import { Box } from '@chakra-ui/react';
import { BiRectangle } from 'react-icons/bi';

// Set CESIUM_BASE_URL before importing Cesium
window.CESIUM_BASE_URL = '/static/Cesium/';

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjYTZhZmUxNi1kYmZhLTQ5NjEtYjMwYS1mYzAxZDhhZTljOTQiLCJpZCI6MjM3OTE1LCJpYXQiOjE3MjQ5NjU2ODB9.Ba3AjkfBK8IZZBhv1T48Kw7exrBT1wj3Nf_HI7D-Xp4';

const CesiumMap = ({ boundingBoxDrawn, setBoundingBoxDrawn }) => {
  const containerRef = useRef(null);
  const [showBoundingBox, setShowBoundingBox] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      const viewer = new Cesium.Viewer(containerRef.current, {
        terrain: Cesium.Terrain.fromWorldTerrain(),
        baseLayerPicker: true,
        imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
          url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
        }),
      });

      viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(120.0, 23.5, 1000000), // Increased height from 500000 to 1000000
        orientation: {
          heading: Cesium.Math.toRadians(0.0),
          pitch: Cesium.Math.toRadians(-90.0), // Changed to -90 degrees for top-down view
        }
      });

      return () => {
        if (viewer && !viewer.isDestroyed()) {
          viewer.destroy();
        }
      };
    }
  }, []);

  return (
    <Box position="relative" width="100%" height="100%">
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
      <div
        className="cesium-viewer-toolbar"
        style={{
          position: 'absolute',
          top: '5px',
          right: '5px',
          display: 'flex',
          gap: '5px',
          zIndex: '2'  // Ensure toolbar stays above the bounding box
        }}
      >
        <button
          onClick={() => setShowBoundingBox(!showBoundingBox)}
          className="cesium-button cesium-toolbar-button"
          title="Draw Bounding Box"
          style={{
            ':hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              boxShadow: '0 0 8px #fff'
            }
          }}
        >
          <BiRectangle size={24} />
        </button>
      </div>
      {showBoundingBox && (
        <Box
          position="absolute"
          top="45px"  // Add top margin to leave space for the toolbar
          left="0"
          width="100%"
          height="calc(100% - 45px)"  // Subtract the top margin from total height
          zIndex="1"
        >
          <InteractiveBoundingBox boundingBoxDrawn={boundingBoxDrawn}
            setBoundingBoxDrawn={setBoundingBoxDrawn} />
        </Box>
      )}
    </Box>
  );
};

export default CesiumMap;