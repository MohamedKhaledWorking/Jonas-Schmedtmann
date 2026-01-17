export default function Statistics({
  statistics,
  className = "w-full md:w-1/2 lg:w-1/4 mt-5 pe-4",
}) {
  return (
    <div className="flex flex-wrap">
      {statistics.map((stat) => {
        return (
          <div className={className}>
            <div className="border border-lightBorder bg-secBgc rounded-3xl p-7">
              <div className="flex justify-between">
                <p className="text-textSecClr"> {stat.title}</p>
                <p>{stat.icon}</p>
              </div>
              <p className="mt-3 text-4xl font-bold">{stat.value}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
