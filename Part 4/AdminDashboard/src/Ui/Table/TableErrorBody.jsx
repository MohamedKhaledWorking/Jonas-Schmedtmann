import React from "react";
import { Users } from "lucide-react";

export default function TableEmptyBody({
  colSpan = 10,
  title = "No guests found",
  description = "Guests will appear here once they are added.",
  actionLabel,
  onAction,
}) {
  return (
    <tbody className="bg-mainBgc">
      <tr>
        <td colSpan={colSpan} className="p-12">
          <div className="flex flex-col items-center justify-center text-center gap-4">
            {/* Icon */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secBgc text-gray-400">
              <Users size={22} />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-sm font-semibold">
                {title}
              </h3>
              <p className="mt-1 text-xs text-gray-400">
                {description}
              </p>
            </div>

            {/* Optional Action */}
            {actionLabel && onAction && (
              <button
                onClick={onAction}
                className="mt-2 rounded-md bg-secBgc px-4 py-2 text-xs font-medium transition hover:bg-mainAccent hover:text-white"
              >
                {actionLabel}
              </button>
            )}
          </div>
        </td>
      </tr>
    </tbody>
  );
}
