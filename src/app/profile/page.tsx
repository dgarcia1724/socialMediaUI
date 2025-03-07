export default function Profile() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3">
        <h1 className="text-2xl font-semibold text-gray-900">Profile</h1>
      </header>

      {/* Profile Info */}
      <div className="p-4 border-b border-gray-200">
        <div className="w-20 h-20 bg-gray-200 rounded-full mb-4"></div>
        <div className="font-semibold text-xl mb-1 text-gray-900">username</div>
        <div className="text-gray-700">Bio goes here</div>

        <div className="flex gap-4 mt-4 text-gray-900">
          <div>
            <span className="font-semibold">0</span> posts
          </div>
          <div>
            <span className="font-semibold">0</span> followers
          </div>
          <div>
            <span className="font-semibold">0</span> following
          </div>
        </div>
      </div>

      {/* Grid of Posts */}
      <div className="grid grid-cols-3 gap-[2px]">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="aspect-square bg-gray-100"></div>
        ))}
      </div>
    </div>
  );
}
