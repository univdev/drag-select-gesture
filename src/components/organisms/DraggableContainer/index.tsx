import { DraggableContext, DraggableContextProvider } from './context/DraggableContext';
import Styles from './index.module.scss';
import { useDraggable } from './hooks/useDraggable';
import React from 'react';
import { Point } from './context/DraggableContext/types';

export interface DragAreaProps {
  start?: Point;
  end?: Point;
};

const DragArea = (props: DragAreaProps) => {
  if (!props.start || !props.end) return <></>;

  const left = Math.min(props.start.x, props.end.x);
  const top = Math.min(props.start.y, props.end.y);
  const endX = Math.max(props.start.x, props.end.y);
  const endY = Math.max(props.start.y, props.end.y);
  const width = endX - left;
  const height = endY - top;

  return (
    <div
      className={Styles.DragArea}
      style={{
        left,
        top,
        width,
        height,
      }}
    >
    </div>
  );
};

const Component = () => {
  const context = React.useContext(DraggableContext);
  const draggable = useDraggable();

  return (
    <div
      className={Styles.DraggableContainer}
      onMouseDown={draggable.startDrag}
    >
      {
        context.isDragging &&
          <DragArea
            start={context.startPoint}
            end={context.endPoint}
          ></DragArea>
      }
    </div>
  );
};

export const DraggableContainer = () => {
  return (
    <DraggableContextProvider>
      <Component></Component>
    </DraggableContextProvider>
  );
};