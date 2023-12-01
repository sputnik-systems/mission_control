import {MutableRefObject, useEffect} from "react";

export const useOutsideAlerter = (ref:  MutableRefObject<any>, outsideClickHandler: (e: globalThis.MouseEvent) => void) => {
    useEffect(() => {
        const handleClickOutside = (event: globalThis.MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target)) {
                outsideClickHandler(event)
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}