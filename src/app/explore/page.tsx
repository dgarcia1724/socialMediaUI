export default function Explore() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3">
        <h1 className="text-2xl font-semibold text-gray-900">Explore</h1>
      </header>

      {/* Grid of Posts */}
      <div className="grid grid-cols-3 gap-[2px]">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="aspect-square bg-gray-100"></div>
        ))}
      </div>
    </div>
  );
}
