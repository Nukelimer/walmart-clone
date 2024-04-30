'use client'

import { useEffect } from "react";

export default function Loader() {
  useEffect(() => {
    async function getLoader() {
      const { hourglass } = await import("ldrs");
      hourglass.register();
    }
    getLoader();
  }, []);
  return (
    <l-hourglass
      color="black"
      bg-opacity="0.1"
      speed="0.75"
      size="40"></l-hourglass>
  );
}
