import React, { useCallback, useEffect } from "react";
import { DraggableContext } from '../context/DraggableContext/index';
import { Point } from "../context/DraggableContext/types";

export const useDraggable = () => {
  const context = React.useContext(DraggableContext);

  const startDrag = useCallback((event: React.MouseEvent) => {
    const point: Point = { x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY };

    if (context.setIsDragging) context.setIsDragging(true);
    if (context.setStartPoint) context.setStartPoint(point);
    if (context.setEndPoint) context.setEndPoint(point);
  }, [
    context,
  ]);

  const dragging = useCallback((event: MouseEvent) => {
    if (!context.isDragging) return;
    const point: Point = { x: event.offsetX, y: event.offsetY };

    if (context.setEndPoint) context.setEndPoint(point);
  }, [context]);

  const stopDrag = useCallback((event: MouseEvent) => {
    if (!context.isDragging) return;

    const point: Point = { x: event.offsetX, y: event.offsetY };

    if (context.setEndPoint) context.setEndPoint(point);
    if (context.setIsDragging) context.setIsDragging(true);
  }, [context]);

  useEffect(() => {
    window.addEventListener('mousemove', dragging);
    window.addEventListener('mouseup', stopDrag);

    return () => {
      window.removeEventListener('mousemove', dragging);
      window.removeEventListener('mouseup', stopDrag);
    };
  }, [
    dragging,
    stopDrag,
  ]);

  return {
    startDrag,
  }
};
