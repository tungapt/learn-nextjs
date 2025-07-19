import { Search, Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600">NewsHub</h1>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Trang chủ</a>
            <a href="/category/technology" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Công nghệ</a>
            <a href="/category/economy" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Kinh tế</a>
            <a href="/category/health" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Sức khỏe</a>
            <a href="/category/travel" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Du lịch</a>
          </nav>

          {/* Search and Menu */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Tìm kiếm tin tức..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
              />
            </div>
            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
} 