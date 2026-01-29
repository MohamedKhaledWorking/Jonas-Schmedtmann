import { AlertTriangle, Inbox } from "lucide-react";

export function EmptyCard({
  title = "No cabins found",
  description = "Try changing filters or search terms.",
  actionLabel = "Clear filters",
  onAction,
}) {
  return (
    <div className="pe-4 w-full md:w-1/2 lg:w-1/4">
      <div className="border border-lightBorder rounded-4xl overflow-hidden h-full">
        <div className="h-72 w-full bg-secBgc/40 flex items-center justify-center border-b border-lightBorder">
          <div className="flex flex-col items-center gap-3 text-center px-6">
            <div className="h-12 w-12 rounded-2xl bg-secBgc/60 flex items-center justify-center">
              <Inbox className="w-6 h-6 text-textSecClr" />
            </div>
            <p className="text-textClr font-bold text-lg">{title}</p>
            <p className="text-textSecClr text-sm">{description}</p>
          </div>
        </div>

        <div className="px-4 py-5 flex flex-col gap-4">
          <div className="h-5 w-2/3 rounded bg-secBgc/60" />
          <div className="h-4 w-full rounded bg-secBgc/40" />
          <div className="h-4 w-5/6 rounded bg-secBgc/40" />

          {onAction && (
            <button
              onClick={onAction}
              className="mainBtn px-8 py-2 w-full"
              type="button"
            >
              {actionLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

