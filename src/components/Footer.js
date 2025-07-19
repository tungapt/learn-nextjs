import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">NewsHub</h3>
            <p className="text-gray-300 mb-4">
              Trang tin tức hàng đầu cung cấp những thông tin mới nhất, chính xác và đáng tin cậy về mọi lĩnh vực trong cuộc sống.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Chuyên mục</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/category/technology" className="hover:text-white transition-colors">Công nghệ</a></li>
              <li><a href="/category/economy" className="hover:text-white transition-colors">Kinh tế</a></li>
              <li><a href="/category/health" className="hover:text-white transition-colors">Sức khỏe</a></li>
              <li><a href="/category/travel" className="hover:text-white transition-colors">Du lịch</a></li>
              <li><a href="/category/culture" className="hover:text-white transition-colors">Văn hóa</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Liên hệ</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@newshub.vn</li>
              <li>Điện thoại: (84) 123-456-789</li>
              <li>Địa chỉ: Hà Nội, Việt Nam</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 NewsHub. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
} 