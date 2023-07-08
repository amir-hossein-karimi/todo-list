import React, { useEffect } from "react";

const useOutsideClick = (
  ref: React.RefObject<HTMLInputElement>,
  fn: (arg: boolean) => void
) => {
  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      console.log("event called");
      fn(!!(ref.current && !ref.current.contains(event.target)));
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

export default useOutsideClick;
