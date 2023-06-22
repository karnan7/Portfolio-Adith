import { useState, useEffect } from "react";

function useOnScreen(ref, threshold) {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIsIntersecting(entry?.isIntersecting ?? false);
      },
      {
        rootMargin: "0px",
        threshold,
      }
    );
    console.log("observer", observer);
    console.log("Ref", ref);
    const currentRef = ref.current;
    console.log("currentRef", currentRef);
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, threshold]); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}
export default useOnScreen;