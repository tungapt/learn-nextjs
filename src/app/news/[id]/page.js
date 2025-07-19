import { 
  Clock, 
  Eye, 
  Share2, 
  Heart, 
  MessageCircle,
  Calendar,
  User,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  ArrowLeft,
  Bookmark
} from 'lucide-react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export default async function NewsDetailPage({ params }) {
  const { id } = await params

  // Sample news data
  const news = {
    id: 1,
    title: "Công nghệ AI đang thay đổi cách chúng ta làm việc trong tương lai",
    excerpt: "Trí tuệ nhân tạo không chỉ là xu hướng mà đang trở thành công cụ thiết yếu trong mọi ngành nghề. Từ việc tự động hóa quy trình sản xuất đến việc phân tích dữ liệu phức tạp, AI đang mở ra những cơ hội mới cho doanh nghiệp và người lao động.",
    content: `
      <p>Trí tuệ nhân tạo (AI) đang trở thành một trong những công nghệ quan trọng nhất của thế kỷ 21. Với khả năng học hỏi và tự động hóa, AI đang thay đổi cách chúng ta làm việc, sinh sống và tương tác với thế giới xung quanh.</p>
      
      <h2>AI trong lĩnh vực sản xuất</h2>
      <p>Trong ngành sản xuất, AI đang được ứng dụng để tối ưu hóa quy trình sản xuất, giảm thiểu lãng phí và nâng cao chất lượng sản phẩm. Các hệ thống AI có thể phân tích dữ liệu từ cảm biến để dự đoán khi nào máy móc cần bảo trì, giúp giảm thời gian ngừng hoạt động và chi phí bảo trì.</p>
      
      <h2>AI trong lĩnh vực y tế</h2>
      <p>Trong y tế, AI đang được sử dụng để chẩn đoán bệnh, phát triển thuốc mới và cá nhân hóa điều trị. Các thuật toán AI có thể phân tích hình ảnh y tế để phát hiện các dấu hiệu bệnh sớm hơn và chính xác hơn so với phương pháp truyền thống.</p>
      
      <h2>AI trong lĩnh vực tài chính</h2>
      <p>Trong lĩnh vực tài chính, AI đang được sử dụng để phát hiện gian lận, đánh giá rủi ro tín dụng và cung cấp dịch vụ tư vấn tài chính cá nhân. Các chatbot AI có thể trả lời câu hỏi của khách hàng 24/7, giúp cải thiện trải nghiệm khách hàng.</p>
      
      <h2>Thách thức và cơ hội</h2>
      <p>Mặc dù AI mang lại nhiều lợi ích, nhưng cũng đặt ra những thách thức về việc làm, quyền riêng tư và đạo đức. Chúng ta cần có những chính sách và quy định phù hợp để đảm bảo AI được phát triển và sử dụng một cách có trách nhiệm.</p>
      
      <p>Nhìn chung, AI đang mở ra một kỷ nguyên mới với những cơ hội to lớn cho sự phát triển của xã hội. Việc nắm bắt và ứng dụng AI một cách hiệu quả sẽ là chìa khóa để thành công trong tương lai.</p>
    `,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=600&fit=crop",
    category: "Công nghệ",
    date: "2024-01-15",
    views: 15420,
    readTime: "5 phút",
    author: "Nguyễn Văn A",
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    likes: 234,
    comments: 45,
    tags: ["AI", "Công nghệ", "Tương lai", "Tự động hóa"]
  }

  const relatedNews = [
    {
      id: 2,
      title: "Blockchain và tiền điện tử: Xu hướng tài chính của tương lai",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop",
      category: "Công nghệ",
      date: "2024-01-14",
      views: 12350
    },
    {
      id: 3,
      title: "5G và Internet of Things: Kết nối thế giới thông minh",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
      category: "Công nghệ",
      date: "2024-01-13",
      views: 8920
    },
    {
      id: 4,
      title: "Cloud Computing: Giải pháp cho doanh nghiệp thời đại số",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
      category: "Công nghệ",
      date: "2024-01-12",
      views: 7650
    }
  ]

  const comments = [
    {
      id: 1,
      author: "Trần Thị B",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
      content: "Bài viết rất hay và hữu ích! AI thực sự đang thay đổi cách chúng ta làm việc.",
      date: "2024-01-15",
      likes: 12
    },
    {
      id: 2,
      author: "Lê Văn C",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      content: "Tôi đồng ý với quan điểm về thách thức của AI. Chúng ta cần có những quy định phù hợp.",
      date: "2024-01-15",
      likes: 8
    },
    {
      id: 3,
      author: "Phạm Thị D",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
      content: "AI trong y tế thực sự rất tiềm năng. Hy vọng sẽ có nhiều ứng dụng hơn trong tương lai.",
      date: "2024-01-14",
      likes: 15
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

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <a href="/" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Quay lại trang chủ
          </a>
        </div>

        {/* Article Header */}
        <article className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Featured Image */}
          <div className="relative">
            <img 
              src={news.image} 
              alt={news.title}
              className="w-full h-96 object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {news.category}
              </span>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-8">
            {/* Article Meta */}
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {formatDate(news.date)}
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {news.readTime}
              </span>
              <span className="flex items-center">
                <Eye className="w-4 h-4 mr-1" />
                {formatViews(news.views)} lượt xem
              </span>
            </div>

            {/* Article Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {news.title}
            </h1>

            {/* Article Excerpt */}
            <p className="text-lg text-gray-600 mb-6">
              {news.excerpt}
            </p>

            {/* Author Info */}
            <div className="flex items-center space-x-4 mb-8 p-4 bg-gray-50 rounded-lg">
              <img 
                src={news.authorAvatar} 
                alt={news.author}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <div className="font-semibold text-gray-900">{news.author}</div>
                <div className="text-sm text-gray-500">Tác giả</div>
              </div>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: news.content }}
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {news.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between border-t border-gray-200 pt-6">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors">
                  <Heart className="w-5 h-5" />
                  <span>{news.likes}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span>{news.comments}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Bookmark className="w-5 h-5" />
                  <span>Lưu</span>
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Chia sẻ:</span>
                <button className="text-blue-600 hover:text-blue-800 transition-colors">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="text-blue-400 hover:text-blue-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </button>
                <button className="text-blue-700 hover:text-blue-900 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </button>
                <button className="text-gray-600 hover:text-gray-800 transition-colors">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Comments Section */}
        <section className="bg-white rounded-xl shadow-md p-8 mt-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Bình luận ({comments.length})</h3>
          
          {/* Comment Form */}
          <div className="mb-8">
            <textarea
              placeholder="Viết bình luận của bạn..."
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              rows="4"
            ></textarea>
            <div className="flex justify-end mt-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Gửi bình luận
              </button>
            </div>
          </div>

          {/* Comments List */}
          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="flex space-x-4">
                <img 
                  src={comment.avatar} 
                  alt={comment.author}
                  className="w-10 h-10 rounded-full flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-semibold text-gray-900">{comment.author}</span>
                    <span className="text-sm text-gray-500">{formatDate(comment.date)}</span>
                  </div>
                  <p className="text-gray-700 mb-2">{comment.content}</p>
                  <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-red-600 transition-colors">
                    <Heart className="w-4 h-4" />
                    <span>{comment.likes}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related News */}
        <section className="bg-white rounded-xl shadow-md p-8 mt-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Tin liên quan</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedNews.map((related) => (
              <article key={related.id} className="hover:shadow-lg transition-shadow rounded-lg overflow-hidden">
                <img 
                  src={related.image} 
                  alt={related.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {related.category}
                  </span>
                  <h4 className="font-semibold text-gray-900 mt-2 line-clamp-2 hover:text-blue-600 cursor-pointer">
                    <a href={`/news/${related.id}`}>{related.title}</a>
                  </h4>
                  <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
                    <span>{formatDate(related.date)}</span>
                    <span>{formatViews(related.views)} lượt xem</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 