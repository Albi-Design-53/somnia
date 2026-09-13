"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

export function useFineMotion() {
  const reduce = useReducedMotion();
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return {
    reduce: Boolean(reduce),
    mobile,
    enabled: !reduce && !mobile,
    parallax: !reduce,
  };
}
