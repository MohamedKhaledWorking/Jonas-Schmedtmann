import React from "react";

export default function TableSkeleton({ colsCount = 6, rows = 5 }) {
  return (
    <>
      {Array.from({ length: rows }).map((_, r) => (
        <tr key={`sk-${r}`} className="border-b border-white/10">
          {Array.from({ length: colsCount }).map((__, c) => (
            <td key={`sk-${r}-${c}`} className="py-5 px-4">
              <div className="h-11 w-full rounded-md bg-white/10 animate-pulse" />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}
