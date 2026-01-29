import { AlertTriangle } from "lucide-react";

export function ErrorCard({
  title = "Something went wrong",
  description = "We couldn't load cabins right now. Please try again.",
  actionLabel = "Retry",
  onRetry,
}) {
  return (
    <div className="pe-4 w-full md:w-1/2 lg:w-1/4">
      <div className="border border-red-500/40 rounded-4xl overflow-hidden h-full">
        <div className="h-72 w-full bg-red-500/10 flex items-center justify-center border-b border-red-500/30">
          <div className="flex flex-col items-center gap-3 text-center px-6">
            <div className="h-12 w-12 rounded-2xl bg-red-500/15 flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-red-400" />
            </div>
            <p className="text-textClr font-bold text-lg">{title}</p>
            <p className="text-textSecClr text-sm">{description}</p>
          </div>
        </div>

        <div className="px-4 py-5 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="h-6 w-24 rounded-full bg-red-500/15" />
            <span className="h-6 w-16 rounded bg-secBgc/60" />
          </div>

          <div className="h-4 w-full rounded bg-secBgc/40" />
          <div className="h-4 w-5/6 rounded bg-secBgc/40" />

          {onRetry && (
            <button
              onClick={onRetry}
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
