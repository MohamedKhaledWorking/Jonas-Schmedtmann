import React from "react";

export default function GuestTableSkeleton({ rows = 5 }) {
  return (
    <tbody className="divide-y divide-lightBorder bg-mainBgc">
      {Array.from({ length: rows }).map((_, i) => (
        <tr key={i} className="animate-pulse">
          <td className="p-5">
            <div className="h-4 w-8 rounded bg-secBgc" />
          </td>
          <td className="px-5 py-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-secBgc" />
              <div className="space-y-2">
                <div className="h-4 w-32 rounded bg-secBgc" />
                <div className="h-3 w-40 rounded bg-secBgc opacity-70" />
              </div>
            </div>
          </td>
          <td className="p-5">
            <div className="h-4 w-20 rounded bg-secBgc" />
          </td>
          <td className="p-5">
            <div className="h-4 w-24 rounded bg-secBgc" />
          </td>
          <td className="p-5">
            <div className="h-4 w-20 rounded bg-secBgc" />
          </td>
          <td className="p-5">
            <div className="h-4 w-10 rounded bg-secBgc" />
          </td>
          <td className="p-5">
            <div className="h-4 w-28 rounded bg-secBgc" />
          </td>
          <td className="p-5">
            <div className="h-4 w-16 rounded bg-secBgc" />
          </td>
          <td className="p-5">
            <div className="h-4 w-16 rounded bg-secBgc" />
          </td>
          <td className="p-5">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-secBgc" />
              <div className="h-9 w-9 rounded-full bg-secBgc" />
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
