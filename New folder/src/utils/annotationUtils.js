// utils/annotationUtils.js

export const getNormalizedCoords = (
  clientX,
  clientY,
  canvasRef,
  scale
) => {
  if (!canvasRef?.current) {
    return { x: 0, y: 0 };
  }

  const rect = canvasRef.current.getBoundingClientRect();

  return {
    x: (clientX - rect.left) / scale,
    y: (clientY - rect.top) / scale,
  };
};

export const getScaledCoords = (x, y, scale) => {
  return {
    x: x * scale,
    y: y * scale,
  };
};