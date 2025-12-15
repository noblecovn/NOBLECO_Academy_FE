export default function HomeLoading() {
  return (
    <div className="min-h-screen">
      {/* Video skeleton */}
      <div className="relative w-full bg-gray-200 animate-pulse" style={{ aspectRatio: "640 / 360" }}></div>

      {/* Hero Section skeleton */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-2 xl:px-30 text-center">
          <div className="h-10 bg-gray-200 rounded w-96 mx-auto mb-4 animate-pulse"></div>
          <div className="space-y-4 mb-12">
            <div className="h-6 bg-gray-200 rounded w-full max-w-4xl mx-auto animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-full max-w-4xl mx-auto animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4 max-w-4xl mx-auto animate-pulse"></div>
          </div>
          <div className="h-12 bg-gray-200 rounded w-64 mx-auto animate-pulse"></div>
        </div>
      </section>

      {/* Collections Section skeleton */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-2 xl:px-30">
          <div className="h-10 bg-gray-200 rounded w-64 mx-auto mb-12 animate-pulse"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-200 rounded-lg aspect-square animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Diamond Intro Section skeleton */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-2 xl:px-30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="h-96 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="space-y-4">
              <div className="h-10 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section skeleton */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-2 xl:px-30 text-center">
          <div className="h-10 bg-gray-200 rounded w-96 mx-auto mb-8 animate-pulse"></div>
          <div className="space-y-4 mb-12">
            <div className="h-6 bg-gray-200 rounded w-full max-w-4xl mx-auto animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-full max-w-4xl mx-auto animate-pulse"></div>
          </div>
          <div className="h-12 bg-gray-200 rounded w-64 mx-auto animate-pulse"></div>
        </div>
      </section>

      {/* Romantic Hero Section skeleton */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-2 xl:px-30">
          <div className="h-96 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
      </div>

      {/* Diamond Explore Section skeleton */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-2 xl:px-30">
          <div className="h-10 bg-gray-200 rounded w-64 mx-auto mb-12 animate-pulse"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-200 rounded-lg aspect-square animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Premium Diamond Section skeleton */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-2 xl:px-30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="h-10 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
              </div>
            </div>
            <div className="h-96 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Hot Posts Section skeleton */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-2 xl:px-30">
          <div className="h-10 bg-gray-200 rounded w-64 mx-auto mb-12 animate-pulse"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 rounded-lg overflow-hidden animate-pulse">
                <div className="aspect-video bg-gray-200"></div>
                <div className="p-6 space-y-2">
                  <div className="h-6 bg-gray-200 rounded mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

