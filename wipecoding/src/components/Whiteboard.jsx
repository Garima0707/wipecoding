import { useEffect, useRef } from "react";
import { fabric } from "fabric";

const Whiteboard = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current);
    canvas.isDrawingMode = true;
  }, []);

  return <canvas ref={canvasRef} width="800" height="500" className="border"/>;
};

export default Whiteboard;
