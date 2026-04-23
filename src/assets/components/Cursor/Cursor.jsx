import { useEffect } from "react";
import "./Cursor.css";

const Cursor = () => {
  useEffect(() => {
    const isCoarsePointer = window.matchMedia(
      "(hover: none), (pointer: coarse)",
    ).matches;

    if (isCoarsePointer) {
      return undefined;
    }

    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursorRing");

    let mx = 0, my = 0, rx = 0, ry = 0;

    const move = (e) => {
      mx = e.clientX;
      my = e.clientY;

      if (cursor) {
        cursor.style.left = mx - 6 + "px";
        cursor.style.top = my - 6 + "px";
      }
    };

    document.addEventListener("mousemove", move);

    const animate = () => {
      rx += (mx - rx - 18) * 0.15;
      ry += (my - ry - 18) * 0.15;

      if (ring) {
        ring.style.left = rx + "px";
        ring.style.top = ry + "px";
      }

      requestAnimationFrame(animate);
    };

    animate();

    // Hover effect
    const elements = document.querySelectorAll("a, button, .project-card");

    elements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        if (!cursor || !ring) return;
        cursor.style.transform = "scale(2)";
        ring.style.transform = "scale(1.5)";
        ring.style.borderColor = "var(--accent2)";
      });

      el.addEventListener("mouseleave", () => {
        if (!cursor || !ring) return;
        cursor.style.transform = "scale(1)";
        ring.style.transform = "scale(1)";
        ring.style.borderColor = "var(--accent)";
      });
    });

    return () => {
      document.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <div className="cursor" id="cursor"></div>
      <div className="cursor-ring" id="cursorRing"></div>
    </>
  );
};

export default Cursor;
