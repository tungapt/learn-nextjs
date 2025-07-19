import { 
  Clock, 
  Eye, 
  TrendingUp,
  Calendar
} from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  const featuredNews = [
    {
      id: 1,
      title: "Công nghệ AI đang thay đổi cách chúng ta làm việc trong tương lai",
      excerpt: "Trí tuệ nhân tạo không chỉ là xu hướng mà đang trở thành công cụ thiết yếu trong mọi ngành nghề...",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
      category: "Công nghệ",
      date: "2024-01-15",
      views: 15420,
      readTime: "5 phút",
      featured: true
    },
    {
      id: 2,
      title: "Xu hướng du lịch 2024: Khám phá những điểm đến mới nổi",
      excerpt: "Năm 2024 mở ra nhiều cơ hội du lịch thú vị với những điểm đến mới được khám phá...",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=400&fit=crop",
      category: "Du lịch",
      date: "2024-01-14",
      views: 12350,
      readTime: "4 phút",
      featured: true
    }
  ]

  const latestNews = [
    {
      id: 3,
      title: "Kinh tế Việt Nam tăng trưởng ổn định trong quý 4/2023",
      excerpt: "Theo báo cáo mới nhất, nền kinh tế Việt Nam tiếp tục duy trì đà tăng trưởng tích cực...",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
      category: "Kinh tế",
      date: "2024-01-13",
      views: 8920,
      readTime: "3 phút"
    },
    {
      id: 4,
      title: "Những bí quyết giữ gìn sức khỏe trong mùa đông",
      excerpt: "Mùa đông là thời điểm cần đặc biệt chú ý đến sức khỏe. Dưới đây là những lời khuyên hữu ích...",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      category: "Sức khỏe",
      date: "2024-01-12",
      views: 7650,
      readTime: "4 phút"
    },
    {
      id: 5,
      title: "Giải pháp bảo vệ môi trường từ công nghệ xanh",
      excerpt: "Các công nghệ xanh đang ngày càng phát triển và đóng vai trò quan trọng trong việc bảo vệ môi trường...",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop",
      category: "Môi trường",
      date: "2024-01-11",
      views: 6540,
      readTime: "6 phút"
    },
    {
      id: 6,
      title: "Văn hóa ẩm thực Việt Nam được thế giới công nhận",
      excerpt: "Ẩm thực Việt Nam tiếp tục khẳng định vị thế trên bản đồ ẩm thực thế giới...",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop",
      category: "Văn hóa",
      date: "2024-01-10",
      views: 5430,
      readTime: "3 phút"
    }
  ]

  const popularNews = [
    {
      id: 7,
      title: "Top 10 ứng dụng hữu ích cho năm 2024",
      views: 23450
    },
    {
      id: 8,
      title: "Cách tiết kiệm tiền hiệu quả cho người trẻ",
      views: 19870
    },
    {
      id: 9,
      title: "Những cuốn sách hay nhất năm 2023",
      views: 17650
    },
    {
      id: 10,
      title: "Xu hướng thời trang mùa xuân 2024",
      views: 15430
    }
  ]

  const categories = [
    { name: "Công nghệ", count: 45, color: "bg-blue-500" },
    { name: "Kinh tế", count: 32, color: "bg-green-500" },
    { name: "Sức khỏe", count: 28, color: "bg-red-500" },
    { name: "Du lịch", count: 25, color: "bg-yellow-500" },
    { name: "Văn hóa", count: 22, color: "bg-purple-500" },
    { name: "Môi trường", count: 18, color: "bg-teal-500" }
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

      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-2">Tin tức mới nhất và đáng tin cậy</h2>
          <p className="text-blue-100">Cập nhật những thông tin nóng hổi và xu hướng mới nhất</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured News */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 text-blue-600 mr-2" />
                Tin nổi bật
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredNews.map((news) => (
                  <article key={news.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img 
                        src={news.image} 
                        alt={news.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {news.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 cursor-pointer">
                        <a href={`/news/${news.id}`}>{news.title}</a>
                      </h3>
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
                  </article>
                ))}
              </div>
            </section>

            {/* Latest News */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Clock className="w-6 h-6 text-blue-600 mr-2" />
                Tin mới nhất
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {latestNews.map((news) => (
                  <article key={news.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img 
                        src={news.image} 
                        alt={news.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {news.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 cursor-pointer">
                        <a href={`/news/${news.id}`}>{news.title}</a>
                      </h3>
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
                  </article>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories */}
            <section className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Chuyên mục</h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <a 
                    key={index}
                    href={`/category/${category.name.toLowerCase().replace(' ', '-')}`}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full ${category.color} mr-3`}></div>
                      <span className="text-gray-700">{category.name}</span>
                    </div>
                    <span className="text-gray-500 text-sm">{category.count}</span>
                  </a>
                ))}
              </div>
            </section>

            {/* Popular News */}
            <section className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Tin đọc nhiều</h3>
              <div className="space-y-4">
                {popularNews.map((news, index) => (
                  <article key={news.id} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-blue-600 cursor-pointer">
                        <a href={`/news/${news.id}`}>{news.title}</a>
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        {formatViews(news.views)} lượt xem
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Newsletter */}
            <section className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-md p-6 text-white">
              <h3 className="text-lg font-bold mb-3">Đăng ký nhận tin</h3>
              <p className="text-blue-100 text-sm mb-4">
                Nhận tin tức mới nhất qua email
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
