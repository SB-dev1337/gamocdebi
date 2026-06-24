"use client";

import { useEffect, useRef } from "react";
import { renderAsync } from "docx-preview";

interface DocxViewerProps {
  filePath: string;
}

export default function DocxViewer({ filePath }: DocxViewerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const loadDocx = async () => {
      try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error("Failed to fetch the docx file");

        const blob = await response.blob();

        containerRef.current!.innerHTML = "";

        await renderAsync(blob, containerRef.current!);
      } catch (err) {
        console.error("Failed to load docx file:", err);
      }
    };

    loadDocx();
  }, [filePath]);

  return (
    <div
      ref={containerRef}
      className="docx-container"
      style={{
        padding: "30px",
        backgroundColor: "#fff",
        borderRadius: "12px",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
        border: "2px solid #4f46e5", // ლურჯი ჩრდილი
        overflowY: "auto",
        maxHeight: "80vh",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#333",
        lineHeight: 1.6,
      }}
    />
  );
}
