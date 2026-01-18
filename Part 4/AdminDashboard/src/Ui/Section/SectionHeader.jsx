export default function SectionHeader({ head, desc, children }) {
  return (
    <>
      <div className="flex justify-between flex-col text-center md:flex-row md:text-left">
        <div>
          <h1 className="capitalize font-bold text-5xl text-textClr">{head}</h1>
          <p className="text-textSecClr my-3">{desc}</p>
        </div>
        <div>
          {children}
        </div>
      </div>
    </>
  );
}
