export default function CardSkeleton() {
  return (
    <div className="flex flex-wrap gap-y-5">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="pe-4 w-full md:w-1/2 lg:w-1/4">
          <div className="border border-lightBorder pb-8 rounded-4xl overflow-hidden">
            <div className="relative border-b border-lightBorder">
              <div className="h-72 w-full bg-secBgc/60 animate-pulse" />
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/60" />

              <span className="absolute top-4 right-4 z-10">
                <span className="block h-6 w-20 rounded-full bg-white/15 animate-pulse" />
              </span>

              <div className="absolute bottom-5 left-5 z-10 space-y-2">
                <div className="h-4 w-40 rounded bg-white/15 animate-pulse" />
                <div className="h-8 w-32 rounded bg-white/20 animate-pulse" />
              </div>
            </div>

            <div className="px-4">
              <div className="flex justify-between items-center mt-4">
                <div className="h-7 w-40 rounded bg-secBgc/60 animate-pulse" />
                <div className="h-7 w-16 rounded bg-secBgc/60 animate-pulse" />
              </div>

              <div className="flex justify-between items-center text-sm border-b border-lightBorder pb-5 mt-2">
                <div className="h-4 w-32 rounded bg-secBgc/50 animate-pulse" />
                <div className="h-4 w-20 rounded bg-secBgc/50 animate-pulse" />
              </div>

              <div className="flex justify-between flex-col lg:flex-row space-y-5 lg:space-y-0 items-center mt-5">
                <div className="flex space-x-5">
                  {Array.from({ length: 5 }).map((_, iconIndex) => (
                    <span
                      key={iconIndex}
                      className="h-6 w-6 rounded-md bg-secBgc/60 animate-pulse"
                    />
                  ))}
                </div>

                <div className="w-full lg:w-fit">
                  <div className="h-10 w-full lg:w-28 rounded-full bg-secBgc/70 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
