import React from "react";
import { MoveLeft, MoveRight } from "lucide-react";

export default function Pagination({
  columnsLength = 6,
  page,
  totalPages,
  onChange,
}) {
  return (
    <tfoot>
      <tr>
        <td colSpan={columnsLength} className="py-4 px-4 bg-secBgc">
          <div className="flex items-center gap-2">
            <button
              className="mainBtn disabled:opacity-40 cursor-pointer text-sm px-8"
              onClick={() => onChange(page - 1)}
              disabled={page <= 1}
            >
              <MoveLeft size={15} />
            </button>

            <div className="text-white/80 text-sm mx-5">
              Page <span className="text-white">{page}</span> / {totalPages}
            </div>

            <button
              className="mainBtn disabled:opacity-40 cursor-pointer text-sm px-8"
              onClick={() => onChange(page + 1)}
              disabled={page >= totalPages}
            >
              <MoveRight size={15} />
            </button>
          </div>
        </td>
      </tr>
    </tfoot>
  );
}
