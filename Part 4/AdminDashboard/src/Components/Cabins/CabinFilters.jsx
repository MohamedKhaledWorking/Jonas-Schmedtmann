
function CabinFilters({ filters, setFilters }) {
  const [open, setOpen] = useState(false);

  const activeCount =
    (filters.availability !== "all" ? 1 : 0) +
    (filters.sort !== "newest" ? 1 : 0) +
    (filters.minPrice ? 1 : 0) +
    (filters.maxPrice ? 1 : 0) +
    (filters.minCapacity ? 1 : 0);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="px-4 py-2 rounded-xl border border-lightBorder bg-mainBgc hover:bg-secBgc transition"
      >
        Filters{activeCount ? ` (${activeCount})` : ""}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-[320px] rounded-xl border border-lightBorder bg-mainBgc shadow-lg p-4 z-50">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-semibold">Filter cabins</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-xs text-gray-400 hover:text-textClr"
            >
              Close
            </button>
          </div>

          {/* Availability */}
          <div className="mb-4">
            <p className="text-xs text-gray-400 mb-2">Availability</p>
            <div className="flex gap-2">
              {[
                { key: "all", label: "All" },
                { key: "available", label: "Available" },
                { key: "unavailable", label: "Unavailable" },
              ].map((opt) => (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() =>
                    setFilters((p) => ({ ...p, availability: opt.key }))
                  }
                  className={[
                    "px-3 py-1.5 rounded-full border text-xs transition",
                    filters.availability === opt.key
                      ? "border-theme text-theme"
                      : "border-lightBorder text-textClr hover:bg-secBgc",
                  ].join(" ")}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div className="mb-4">
            <p className="text-xs text-gray-400 mb-2">Sort</p>
            <select
              value={filters.sort}
              onChange={(e) =>
                setFilters((p) => ({ ...p, sort: e.target.value }))
              }
              className="w-full py-2 px-3 rounded-xl border border-lightBorder bg-mainBgc focus:border-theme outline-none"
            >
              <option value="newest">Newest</option>
              <option value="price-asc">Price: low to high</option>
              <option value="price-desc">Price: high to low</option>
              <option value="capacity-desc">Capacity: high to low</option>
            </select>
          </div>

          {/* Price range */}
          <div className="mb-4 grid grid-cols-2 gap-2">
            <div>
              <p className="text-xs text-gray-400 mb-2">Min price</p>
              <input
                type="number"
                value={filters.minPrice}
                onChange={(e) =>
                  setFilters((p) => ({ ...p, minPrice: e.target.value }))
                }
                className="w-full py-2 px-3 rounded-xl border border-lightBorder bg-mainBgc focus:border-theme outline-none"
                placeholder="0"
              />
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-2">Max price</p>
              <input
                type="number"
                value={filters.maxPrice}
                onChange={(e) =>
                  setFilters((p) => ({ ...p, maxPrice: e.target.value }))
                }
                className="w-full py-2 px-3 rounded-xl border border-lightBorder bg-mainBgc focus:border-theme outline-none"
                placeholder="9999"
              />
            </div>
          </div>

          {/* Capacity */}
          <div className="mb-5">
            <p className="text-xs text-gray-400 mb-2">Min capacity</p>
            <input
              type="number"
              value={filters.minCapacity}
              onChange={(e) =>
                setFilters((p) => ({ ...p, minCapacity: e.target.value }))
              }
              className="w-full py-2 px-3 rounded-xl border border-lightBorder bg-mainBgc focus:border-theme outline-none"
              placeholder="e.g. 2"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() =>
                setFilters({
                  availability: "all",
                  sort: "newest",
                  minPrice: "",
                  maxPrice: "",
                  minCapacity: "",
                })
              }
              className="w-full py-2 rounded-xl border border-lightBorder hover:bg-secBgc transition text-sm"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="w-full py-2 rounded-xl bg-theme text-white transition text-sm"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
