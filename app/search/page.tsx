// app/search/page.tsx
import { performSearch } from '@/lib/search';

export default async function SearchResults({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;
  const results = query ? performSearch(query) : []; // Assuming it returns an array now

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* 1. Subtle Header for Context */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <p className="text-sm text-gray-500">
            Showing results for <span className="font-semibold text-gray-900">"{query}"</span>
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* 2. Results Count */}
        <div className="mb-6">
          <h1 className="text-xl font-medium text-gray-800">
            Search Results <span className="text-gray-400 text-sm ml-2">({results.length} items found)</span>
          </h1>
        </div>

        {/* 3. Results List */}
        <div className="space-y-4">
          {results.length > 0 ? (
            results.map((item, index) => (
              <div 
                key={index} 
                className="group bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200"
              >
                <h3 className="text-lg font-semibold text-blue-600 group-hover:underline cursor-pointer">
                  {item.title}
                </h3>
                <p className="text-sm text-green-700 mb-2">https://yourlink.com/item/{index}</p>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.description || "This is a brief description of the search result to give users an idea of the content..."}
                </p>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-white rounded-xl border border-dashed">
              <p className="text-gray-500 text-lg">No results found for "{query}"</p>
              <p className="text-sm text-gray-400">Try checking your spelling or use different keywords.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}