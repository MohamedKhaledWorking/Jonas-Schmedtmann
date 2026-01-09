// src/utils/tableUtils.js

export function safeLower(v) {
  return (v ?? "").toString().toLowerCase();
}

export function getByPath(obj, path) {
  if (!path) return undefined;
  // supports "a.b.c"
  return path
    .split(".")
    .reduce((acc, key) => (acc ? acc[key] : undefined), obj);
}

export function normalizeSortValue(value, type = "string") {
  if (value === null || value === undefined) return null;

  if (type === "number") {
    const n = Number(value);
    return Number.isFinite(n) ? n : null;
  }

  if (type === "boolean") {
    return Boolean(value);
  }

  // default string
  return value.toString();
}

export function compare(a, b, type = "string", direction = "ascending") {
  const va = normalizeSortValue(a, type);
  const vb = normalizeSortValue(b, type);

  // nulls always go to bottom
  if (va === null && vb === null) return 0;
  if (va === null) return 1;
  if (vb === null) return -1;

  let cmp = 0;

  if (type === "number") {
    cmp = va - vb;
  } else if (type === "boolean") {
    // false < true
    cmp = va === vb ? 0 : va ? 1 : -1;
  } else {
    // string (locale-aware)
    cmp = va.localeCompare(vb, undefined, {
      sensitivity: "base",
      numeric: true,
    });
  }

  return direction === "descending" ? -cmp : cmp;
}

/**
 * Sort rows by a column config:
 * column = { sortKey: "full_name" OR sortFn(row) => value, sortType: "string|number|boolean" }
 */
export function sortRows(rows, sortDescriptor, columns) {
  const list = Array.isArray(rows) ? [...rows] : [];

  const { column, direction } = sortDescriptor || {};
  if (!column) return list;

  const col = columns.find((c) => c.uid === column);
  if (!col || !col.sortable) return list;

  const type = col.sortType || "string";

  const getValue = (row) => {
    if (typeof col.sortFn === "function") return col.sortFn(row);
    if (col.sortKey) return getByPath(row, col.sortKey);
    return row?.[col.uid];
  };

  return list.sort((r1, r2) =>
    compare(getValue(r1), getValue(r2), type, direction)
  );
}

export function filterRows(rows, query, keys = []) {
  const q = safeLower(query).trim();
  if (!q) return Array.isArray(rows) ? rows : [];

  const list = Array.isArray(rows) ? rows : [];
  const searchKeys = keys.length ? keys : [];

  return list.filter((row) =>
    searchKeys.some((k) => safeLower(getByPath(row, k)).includes(q))
  );
}

export function paginateRows(rows, page = 1, rowsPerPage = 10) {
  const list = Array.isArray(rows) ? rows : [];
  const safeRpp = Math.max(1, Number(rowsPerPage) || 10);
  const totalPages = Math.max(1, Math.ceil(list.length / safeRpp));
  const safePage = Math.min(Math.max(1, Number(page) || 1), totalPages);

  const start = (safePage - 1) * safeRpp;
  const end = start + safeRpp;

  return {
    page: safePage,
    totalPages,
    items: list.slice(start, end),
  };
}
