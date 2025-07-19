import { 
  Clock, 
  Eye, 
  Calendar,
  Filter,
  SortAsc,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export default async function CategoryPage({ params }) {
  const { slug } = await params

  // Map slug to category info
  const categoryMap = {
    'cong-nghe': { name: 'Công nghệ', color: 'bg-blue-500', count: 45 },
    'kinh-te': { name: 'Kinh tế', color: 'bg-green-500', count: 32 },
    'suc-khoe': { name: 'Sức khỏe', color: 'bg-red-500', count: 28 },
    'du-lich': { name: 'Du lịch', color: 'bg-yellow-500', count: 25 },
    'van-hoa': { name: 'Văn hóa', color: 'bg-purple-500', count: 22 },
    'moi-truong': { name: 'Môi trường', color: 'bg-teal-500', count: 18 }
  }

  const category = categoryMap[slug] || { name: 'Chuyên mục', color: 'bg-gray-500', count: 0 }

  // Sample news data for the category
  const categoryNews = [
    {
      id: 1,
      title: "Công nghệ AI đang thay đổi cách chúng ta làm việc trong tương lai",
      excerpt: "Trí tuệ nhân tạo không chỉ là xu hướng mà đang trở thành công cụ thiết yếu trong mọi ngành nghề. Từ việc tự động hóa quy trình sản xuất đến việc phân tích dữ liệu phức tạp, AI đang mở ra những cơ hội mới cho doanh nghiệp và người lao động...",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
      date: "2024-01-15",
      views: 15420,
      readTime: "5 phút",
      author: "Nguyễn Văn A"
    },
    {
      id: 2,
      title: "Blockchain và tiền điện tử: Xu hướng tài chính của tương lai",
      excerpt: "Công nghệ blockchain đang cách mạng hóa ngành tài chính với những ứng dụng mới như DeFi, NFT và tiền điện tử. Việt Nam cũng đang có những bước tiến quan trọng trong việc phát triển hệ sinh thái blockchain...",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
      date: "2024-01-14",
      views: 12350,
      readTime: "6 phút",
      author: "Trần Thị B"
    },
    {
      id: 3,
      title: "5G và Internet of Things: Kết nối thế giới thông minh",
      excerpt: "Mạng 5G đang mở ra kỷ nguyên mới của Internet of Things (IoT), cho phép hàng tỷ thiết bị kết nối với tốc độ cao và độ trễ thấp. Điều này sẽ thay đổi cách chúng ta sống và làm việc...",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop",
      date: "2024-01-13",
      views: 8920,
      readTime: "4 phút",
      author: "Lê Văn C"
    },
    {
      id: 4,
      title: "Cloud Computing: Giải pháp cho doanh nghiệp thời đại số",
      excerpt: "Điện toán đám mây đang trở thành nền tảng quan trọng cho sự chuyển đổi số của doanh nghiệp. Từ việc lưu trữ dữ liệu đến việc triển khai ứng dụng, cloud computing mang lại nhiều lợi ích...",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
      date: "2024-01-12",
      views: 7650,
      readTime: "7 phút",
      author: "Phạm Thị D"
    },
    {
      id: 5,
      title: "Cybersecurity: Bảo mật thông tin trong thời đại số",
      excerpt: "Với sự phát triển của công nghệ, các mối đe dọa bảo mật cũng ngày càng tinh vi. Doanh nghiệp và cá nhân cần có những biện pháp bảo vệ thông tin hiệu quả...",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop",
      date: "2024-01-11",
      views: 6540,
      readTime: "5 phút",
      author: "Hoàng Văn E"
    },
    {
      id: 6,
      title: "Machine Learning: Học máy và ứng dụng thực tế",
      excerpt: "Machine Learning đang được ứng dụng rộng rãi trong nhiều lĩnh vực từ y tế, tài chính đến giáo dục. Công nghệ này giúp máy tính học hỏi và cải thiện hiệu suất theo thời gian...",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
      date: "2024-01-10",
      views: 5430,
      readTime: "6 phút",
      author: "Vũ Thị F"
    }
  ]

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  }

  const formatViews = (views) => {
    if (views >= 1000000) {
      return (views / 1000000).toFixed(1) + 'M'
    } else if (views >= 1000) {
      return (views / 1000).toFixed(1) + 'K'
    }
    return views.toString()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Category Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className={`w-4 h-4 rounded-full ${category.color}`}></div>
            <h1 className="text-3xl font-bold text-gray-900">{category.name}</h1>
          </div>
          <p className="text-gray-600">
            {category.count} bài viết trong chuyên mục {category.name.toLowerCase()}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Filters */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors">
                    <Filter className="w-4 h-4" />
                    <span>Lọc</span>
                  </button>
                  <button className="flex items-center space-x-2 bg-gray-100 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                    <SortAsc className="w-4 h-4" />
                    <span>Sắp xếp</span>
                  </button>
                </div>
                <div className="text-sm text-gray-500">
                  Hiển thị {categoryNews.length} bài viết
                </div>
              </div>
            </div>

            {/* News List */}
            <div className="space-y-6">
              {categoryNews.map((news) => (
                <article key={news.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={news.image} 
                        alt={news.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${category.color}`}>
                          {category.name}
                        </span>
                        <span className="text-sm text-gray-500">•</span>
                        <span className="text-sm text-gray-500">{news.author}</span>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer">
                        <a href={`/news/${news.id}`}>{news.title}</a>
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {news.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {formatDate(news.date)}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {news.readTime}
                          </span>
                        </div>
                        <span className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {formatViews(news.views)}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center space-x-2 mt-12">
              <button className="flex items-center space-x-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <ChevronLeft className="w-4 h-4" />
                <span>Trước</span>
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">2</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">3</button>
              <span className="px-4 py-2 text-gray-500">...</span>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">10</button>
              <button className="flex items-center space-x-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <span>Sau</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Category Stats */}
            <section className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Thống kê</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Tổng bài viết:</span>
                  <span className="font-semibold">{category.count}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bài viết hôm nay:</span>
                  <span className="font-semibold">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tuần này:</span>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tháng này:</span>
                  <span className="font-semibold">45</span>
                </div>
              </div>
            </section>

            {/* Related Categories */}
            <section className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Chuyên mục liên quan</h3>
              <div className="space-y-3">
                {Object.entries(categoryMap).filter(([key]) => key !== slug).slice(0, 4).map(([key, cat]) => (
                  <a 
                    key={key}
                    href={`/category/${key}`}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full ${cat.color} mr-3`}></div>
                      <span className="text-gray-700">{cat.name}</span>
                    </div>
                    <span className="text-gray-500 text-sm">{cat.count}</span>
                  </a>
                ))}
              </div>
            </section>

            {/* Newsletter */}
            <section className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-md p-6 text-white">
              <h3 className="text-lg font-bold mb-3">Đăng ký nhận tin</h3>
              <p className="text-blue-100 text-sm mb-4">
                Nhận tin tức mới nhất về {category.name.toLowerCase()}
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="w-full px-3 py-2 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                />
                <button className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Đăng ký
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 