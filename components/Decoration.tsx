"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Snowflake {
  element: HTMLParagraphElement;
  radius: number;
  speed: number;
  xPos: number;
  yPos: number;
  counter: number;
  sign: number;
}

export default function Decoration() {
  const snowflakeContainerRef = useRef<HTMLDivElement>(null);
  const snowflakesRef = useRef<Snowflake[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const [browserDimensions, setBrowserDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });
  const browserDimensionsRef = useRef(browserDimensions);
  const resetPositionRef = useRef(false);

  const numberOfSnowflakes = 20;

  const getSupportedPropertyName = (properties: string[]): string => {
    if (typeof window === "undefined") return "transform";
    for (let i = 0; i < properties.length; i++) {
      if (
        typeof document.body.style[
          properties[i] as keyof CSSStyleDeclaration
        ] !== "undefined"
      ) {
        return properties[i];
      }
    }
    return "transform";
  };

  const setTranslate3DTransform = (
    element: HTMLElement,
    x: number,
    y: number
  ) => {
    const transformProperty = getSupportedPropertyName([
      "transform",
      "msTransform",
      "webkitTransform",
      "mozTransform",
      "oTransform",
    ]);
    const transform = `translate3d(${x}px, ${y}px, 0)`;
    (element.style as any)[transformProperty] = transform;
  };

  const getPosition = (offset: number, max: number): number => {
    return Math.round(-1 * offset + Math.random() * (max + 2 * offset));
  };

  const moveSnowflakes = () => {
    if (snowflakesRef.current.length === 0) return;

    const width = browserDimensionsRef.current.width || window.innerWidth;
    const height = browserDimensionsRef.current.height || window.innerHeight;

    snowflakesRef.current.forEach((snowflake) => {
      snowflake.counter += snowflake.speed / 5000;
      snowflake.xPos +=
        (snowflake.sign * snowflake.speed * Math.cos(snowflake.counter)) / 40;
      snowflake.yPos +=
        Math.sin(snowflake.counter) / 40 + snowflake.speed / 30;

      setTranslate3DTransform(
        snowflake.element,
        Math.round(snowflake.xPos),
        Math.round(snowflake.yPos)
      );

      if (snowflake.yPos > height) {
        snowflake.yPos = -50;
      }
    });

    if (resetPositionRef.current) {
      snowflakesRef.current.forEach((snowflake) => {
        snowflake.xPos = getPosition(50, width);
        snowflake.yPos = getPosition(50, height);
      });
      resetPositionRef.current = false;
    }

    animationFrameRef.current = requestAnimationFrame(moveSnowflakes);
  };

  const generateSnowflakes = () => {
    if (typeof window === "undefined" || !snowflakeContainerRef.current) return;

    const container = snowflakeContainerRef.current;
    const existingSnowflake = container.querySelector(".snowflake") as
      | HTMLParagraphElement
      | null;

    if (!existingSnowflake) return;

    const width = browserDimensionsRef.current.width || window.innerWidth;
    const height = browserDimensionsRef.current.height || window.innerHeight;

    // Clear existing snowflakes
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    snowflakesRef.current = [];
    container.innerHTML = "";

    // Create snowflakes
    for (let i = 0; i < numberOfSnowflakes; i++) {
      const snowflake = existingSnowflake.cloneNode(true) as HTMLParagraphElement;
      container.appendChild(snowflake);

      const xPos = getPosition(50, width);
      const yPos = getPosition(50, height);
      const speed = 5 + Math.random() * 40;
      const radius = 4 + Math.random() * 10;

      snowflake.style.opacity = `${0.5 + Math.random()}`;
      snowflake.style.fontSize = `${4 + Math.random() * 20}px`;

      const snowflakeObj: Snowflake = {
        element: snowflake,
        radius,
        speed,
        xPos,
        yPos,
        counter: 0,
        sign: Math.random() < 0.5 ? 1 : -1,
      };

      snowflakesRef.current.push(snowflakeObj);
    }

    moveSnowflakes();
  };

  useEffect(() => {
    // Set initial dimensions
    if (typeof window !== "undefined") {
      const dimensions = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      setBrowserDimensions(dimensions);
      browserDimensionsRef.current = dimensions;
    }

    const handleResize = () => {
      const dimensions = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      setBrowserDimensions(dimensions);
      browserDimensionsRef.current = dimensions;
      resetPositionRef.current = true;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    browserDimensionsRef.current = browserDimensions;
    if (browserDimensions.width > 0 && browserDimensions.height > 0) {
      // Delay to ensure DOM is ready
      const timer = setTimeout(() => {
        generateSnowflakes();
      }, 100);

      return () => {
        clearTimeout(timer);
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }
  }, [browserDimensions]);


  return (
    <>
      {/* Snowflakes Container */}
      <div id="snowflakeContainer" ref={snowflakeContainerRef}>
        <p className="snowflake">❄</p>
      </div>
    </>
  );
}
