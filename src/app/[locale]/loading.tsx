export default function Loading() {
  return (
    <div
      className="animate-pulse flex flex-col md:flex-row gap-6 p-s8 md:p-s10"
      style={{ minHeight: 'calc(100vh - 92px)' }}>
      {/* Left Section - Title and Button */}
      <div className="w-full md:w-1/2 space-y-4 flex flex-col">
        <div className="bg-gray-200 h-64 w-full"></div>
        <div className="bg-gray-200 h-10 w-full"></div> {/* Title */}
        <div className="bg-gray-200 h-10 w-3/4"></div> {/* Text */}
        <div className="bg-gray-200 h-10 w-32"></div> {/* Button */}
      </div>

      {/* Right Section - Image */}
      <div className="w-full md:w-1/2 flex">
        <div className="bg-gray-200 h-64 md:h-full w-full"></div> {/* Image Placeholder */}
      </div>
    </div>
  );
}
