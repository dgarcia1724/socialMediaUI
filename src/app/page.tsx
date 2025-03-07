import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3">
        <h1 className="text-2xl font-semibold text-gray-900">
          Instagram Clone
        </h1>
      </header>

      {/* Feed */}
      <div className="flex flex-col gap-4 p-4">
        {/* Example Post */}
        <div className="border border-gray-200 rounded-lg">
          <div className="p-4 border-b border-gray-200">
            <div className="font-semibold text-gray-900">username</div>
          </div>
          <div className="bg-gray-100 aspect-square"></div>
          <div className="p-4">
            <div className="font-semibold text-gray-900 mb-2">0 likes</div>
            <div className="text-gray-900">
              <span className="font-semibold">username</span>
              <span className="ml-2">Example post caption</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
