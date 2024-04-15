import React, { useRef, useEffect } from "react";

const AbsoluteOutsideAlerter = ({ clickedOutside, className, children }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        if (clickedOutside) {
          event.stopPropagation();
          clickedOutside();
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clickedOutside]);

  const childrenWithRef = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        ref: wrapperRef,
      });
    }
    return child;
  });
  return (
    <div ref={wrapperRef} className={className}>
      {childrenWithRef}
    </div>
  );
};

export { AbsoluteOutsideAlerter };
