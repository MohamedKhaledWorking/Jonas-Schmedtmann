import React from "react";
import { EllipsisVertical, Search } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

import { getGuests } from "../../services/guests.js";
import TableSkeleton from "../../UI/Table/TableSkeleton.jsx";
import { filterRows, paginateRows, sortRows } from "../../utils/tableUtils.js";
import Pagination from "../../UI/Table/Pagination.jsx";

const levelStyles = {
  gold: "bg-yellow-500/15 text-yellow-300 border border-yellow-500/30",
  silver: "bg-slate-400/15 text-slate-200 border border-slate-400/30",
  bronze: "bg-orange-800/15 text-orange-300 border border-orange-800/30",
  user: "bg-dark/10 text-white/80 border border-white/15",
};

export const columns = [
  {
    name: "Guest",
    uid: "guest",
    sortable: true,
    sortKey: "full_name",
    sortType: "string",
  },
  {
    name: "CONTACT",
    uid: "contact",
    sortable: true,
    sortKey: "email",
    sortType: "string",
  },
  {
    name: "Level",
    uid: "level",
    sortable: true,
    sortKey: "vip_level",
    sortType: "string",
  },
  {
    name: "STAY",
    uid: "total_stay",
    sortable: true,
    sortKey: "total_stays",
    sortType: "number",
  },
  {
    name: "SPENT",
    uid: "total_spent",
    sortable: true,
    sortKey: "total_spent",
    sortType: "number",
  },
  { name: "ACTIONS", uid: "actions", sortable: false },
];

function ThSort({ col, sortDescriptor, onSort }) {
  const isActive = sortDescriptor.column === col.uid;
  const dir = isActive ? sortDescriptor.direction : undefined;

  return (
    <th
      className={`py-4 px-4 text-left text-sm font-medium text-slate-300 border-b border-white/10 bg-secBgc
      ${col.sortable ? "cursor-pointer select-none hover:bg-white/5" : ""}`}
      onClick={() => col.sortable && onSort(col.uid)}
      title={col.sortable ? "Sort" : undefined}
    >
      <div className="flex items-center gap-2">
        <span>{col.name}</span>
        {col.sortable && (
          <span className="text-xs opacity-80">
            {isActive ? (dir === "ascending" ? "▲" : "▼") : "↕"}
          </span>
        )}
      </div>
    </th>
  );
}

export default function GuestTable() {
  const [filterValue, setFilterValue] = React.useState("");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: "total_spent",
    direction: "descending",
  });
  const [page, setPage] = React.useState(1);

  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["guests"],
    queryFn: getGuests,
  });

  const filtered = React.useMemo(
    () =>
      filterRows(users, filterValue, [
        "full_name",
        "email",
        "phone",
        "country",
        "vip_level",
      ]),
    [users, filterValue]
  );

  const sorted = React.useMemo(
    () => sortRows(filtered, sortDescriptor, columns),
    [filtered, sortDescriptor]
  );

  const {
    items: pageItems,
    totalPages,
    page: safePage,
  } = React.useMemo(
    () => paginateRows(sorted, page, rowsPerPage),
    [sorted, page, rowsPerPage]
  );

  React.useEffect(() => {
    if (safePage !== page) setPage(safePage);
  }, [safePage, page]);

  const onSort = (uid) => {
    setSortDescriptor((prev) => {
      if (prev.column !== uid) return { column: uid, direction: "ascending" };
      return {
        column: uid,
        direction: prev.direction === "ascending" ? "descending" : "ascending",
      };
    });
  };

  const renderCell = (user, columnKey) => {
    switch (columnKey) {
      case "guest":
        return (
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-white/10 overflow-hidden flex items-center justify-center text-white/70 text-sm">
              {user?.avatar_url ? (
                // you said images later - keep it simple
                <img
                  className="h-full w-full object-cover"
                  src={user.avatar_url}
                  alt=""
                />
              ) : (
                user?.full_name?.[0]?.toUpperCase() ?? "?"
              )}
            </div>
            <div className="flex flex-col">
              <div className="text-white font-medium">{user.full_name}</div>
              <div className="text-white/60 text-sm">{user.country ?? "-"}</div>
            </div>
          </div>
        );

      case "contact":
        return (
          <div className="flex flex-col">
            <div className="text-white/90 text-sm">{user.phone ?? "-"}</div>
            <a
              className="text-sky-300 text-sm hover:underline"
              href={`mailto:${user.email ?? ""}`}
            >
              {user.email ?? "-"}
            </a>
          </div>
        );

      case "level": {
        const level = (user.vip_level ?? "user").toLowerCase();
        const cls = levelStyles[level] ?? levelStyles.user;
        return (
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs border ${cls}`}
          >
            {level}
          </span>
        );
      }

      case "total_stay":
        return <span className="text-white/90">{user.total_stays ?? 0}</span>;

      case "total_spent":
        return <span className="text-white/90">{user.total_spent ?? 0} $</span>;

      case "actions":
        return (
          <button
            className="p-2 rounded-lg hover:bg-white/10 text-white/80"
            onClick={() => console.log("actions for", user.id)}
            title="Actions"
          >
            <EllipsisVertical size={18} />
          </button>
        );

      default:
        return (
          <span className="text-white/80">{user?.[columnKey] ?? "-"}</span>
        );
    }
  };

  return (
    <div className="w-full">
      {/* Top */}
      <div className="flex flex-col gap-4 mb-4">
        <div className="relative w-full">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
            size={18}
          />
          <input
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            placeholder="Search by name, email, phone..."
            className="w-full bg-transparent border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white outline-none focus:border-white/25"
          />
        </div>

        <div className="flex justify-between items-center">
          <span className="text-white/60 text-sm">
            Total {users?.length} guests
          </span>

          <label className="flex items-center gap-2 text-white/60 text-sm">
            Rows per page:
            <select
              className="bg-transparent border border-white/10 rounded-lg px-2 py-1 text-white outline-none"
              value={rowsPerPage}
              onChange={(e) => setRowsPerPage(Number(e.target.value))}
            >
              <option className="text-black" value="5">
                5
              </option>
              <option className="text-black" value="10">
                10
              </option>
              <option className="text-black" value="15">
                15
              </option>
            </select>
          </label>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl border border-white/10">
        <table className="min-w-full">
          <thead>
            <tr>
              {columns.map((col) => (
                <ThSort
                  key={col.uid}
                  col={col}
                  sortDescriptor={sortDescriptor}
                  onSort={onSort}
                />
              ))}
            </tr>
          </thead>

          <tbody className="bg-[#0f1720]">
            {isLoading ? (
              // ✅ spinner/skeleton ONLY in tbody
              <TableSkeleton colsCount={columns.length} rows={rowsPerPage} />
            ) : pageItems.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="py-10 text-center text-white/60"
                >
                  No users found
                </td>
              </tr>
            ) : (
              pageItems.map((u) => (
                <tr
                  key={u.id}
                  className="border-b border-white/10 hover:bg-white/5"
                >
                  {columns.map((col) => (
                    <td key={col.uid} className="py-5 px-4 align-middle">
                      {renderCell(u, col.uid)}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>

          <Pagination
            page={page}
            totalPages={totalPages}
            onChange={setPage}
            columnsLength={columns.length}
          />
        </table>
      </div>
    </div>
  );
}
