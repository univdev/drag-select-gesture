export interface Point {
  x: number;
  y: number;
}

export interface DraggableContainerContextValue {
  isDragging?: boolean;
  startPoint?: Point;
  endPoint?: Point;
  setIsDragging?: (isDragging: boolean) => void;
  setStartPoint?: (point: Point) => void;
  setEndPoint?: (point: Point) => void;
};

export interface DraggableContainerContextProviderProps {
  children?: React.ReactNode;
};
