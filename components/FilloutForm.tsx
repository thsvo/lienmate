"use client";

import { useEffect } from "react";

export default function FilloutForm() {
  useEffect(() => {
    // Load the Fillout script
    const script = document.createElement("script");
    script.src = "https://server.fillout.com/embed/v1/";
    script.async = true;
    document.body.appendChild(script);

    // Clean up
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      style={{ width: "100%", height: "500px" }}
      data-fillout-id="miQ1oSvZBNus"
      data-fillout-embed-type="standard"
      data-fillout-inherit-parameters
      data-fillout-dynamic-resize
    ></div>
  );
}