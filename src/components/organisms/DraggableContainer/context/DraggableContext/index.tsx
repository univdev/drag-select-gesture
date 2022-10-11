import React, { useState } from "react";
import { DraggableContainerContextProviderProps, DraggableContainerContextValue, Point } from "./types";

const defaultValue: DraggableContainerContextValue = {
  isDragging: false,
  startPoint: undefined,
  endPoint: undefined,
  setIsDragging: undefined,
  setStartPoint: undefined,
  setEndPoint: undefined,
};

export const DraggableContext = React.createContext<DraggableContainerContextValue>(defaultValue);

export const DraggableContextProvider = (props: DraggableContainerContextProviderProps) => {
  const [startPoint, setStartPoint] = useState<Point>();
  const [endPoint, setEndPoint] = useState<Point>();
  const [isDragging, setIsDragging] = useState<boolean>(false);

  return (
    <DraggableContext.Provider value={{
      isDragging,
      startPoint,
      endPoint,
      setIsDragging,
      setStartPoint,
      setEndPoint,
    }}>
      { props.children }
    </DraggableContext.Provider>
  );
};