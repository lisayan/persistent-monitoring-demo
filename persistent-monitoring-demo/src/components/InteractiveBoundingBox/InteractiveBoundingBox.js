import React, { useState, useRef, useEffect } from 'react';
import { Box } from '@chakra-ui/react';

const InteractiveBoundingBox = ({ boundingBoxDrawn, setBoundingBoxDrawn }) => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [box, setBox] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setStartPos({ x, y });
    setIsDrawing(true);
    setBox({ x, y, width: 0, height: 0 });
    setBoundingBoxDrawn(false);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;

    const rect = containerRef.current.getBoundingClientRect();
    const currentX = e.clientX - rect.left;
    const currentY = e.clientY - rect.top;

    setBox({
      x: Math.min(currentX, startPos.x),
      y: Math.min(currentY, startPos.y),
      width: Math.abs(currentX - startPos.x),
      height: Math.abs(currentY - startPos.y)
    });
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
    if (box.width > 0 && box.height > 0) {
      setBoundingBoxDrawn(true);
    } else {
      setBoundingBoxDrawn(false);
    }
  };

  return (
    <Box
      ref={containerRef}
      position="relative"
      width="100%"
      height="100%"
      cursor="crosshair"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {(isDrawing || box.width > 0) && (
        <Box
          position="absolute"
          left={`${box.x}px`}
          top={`${box.y}px`}
          width={`${box.width}px`}
          height={`${box.height}px`}
          bg="rgba(0, 255, 255, 0.3)"
          border="2px solid cyan"
        />
      )}
    </Box>
  );
};

export default InteractiveBoundingBox;
