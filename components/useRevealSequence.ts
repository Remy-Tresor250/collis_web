"use client";

import { useCallback, useState } from "react";

export function useRevealSequence() {
  const [revealedIndex, setRevealedIndex] = useState(0);

  const canPlay = useCallback(
    (index: number) => index <= revealedIndex,
    [revealedIndex],
  );

  const markComplete = useCallback((index: number) => {
    setRevealedIndex((current) => (current > index ? current : index + 1));
  }, []);

  return {
    canPlay,
    markComplete,
  };
}
