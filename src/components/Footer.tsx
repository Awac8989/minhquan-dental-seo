import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  MessageCircle,
  ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Giới thiệu", href: "/gioi-thieu" },
    { name: "Cấy ghép Implant", href: "/dich-vu/cay-ghep-implant" },
    { name: "Niềng răng", href: "/dich-vu/nieng-rang" },
    { name: "Răng sứ thẩm mỹ", href: "/dich-vu/rang-su" },
    { name: "Bảng giá", href: "/bang-gia" },
    { name: "Tin tức", href: "/tin-tuc" }
  ];

  const services = [
    "Cấy ghép Implant",
    "Niềng răng Invisalign", 
    "Bọc răng sứ Zirconia",
    "Tẩy trắng răng Laser",
    "Điều trị nha chu",
    "Nha khoa trẻ em"
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Nhận thông tin khuyến mãi & chăm sóc răng miệng
            </h3>
            <p className="text-background/80 mb-6">
              Đăng ký để nhận những ưu đãi đặc biệt và kiến thức chăm sóc răng miệng từ chuyên gia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 px-4 py-3 rounded-lg bg-background text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="hero" className="px-6">
                Đăng ký
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">DQ</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Nha khoa Đoàn Minh Quân</h3>
                <p className="text-sm text-background/80">Nụ cười hoàn hảo</p>
              </div>
            </div>
            
            <p className="text-background/80 mb-6 leading-relaxed">
              Với hơn 15 năm kinh nghiệm, chúng tôi mang đến những giải pháp nha khoa 
              hiện đại và chất lượng cao nhất cho khách hàng.
            </p>

            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                <MessageCircle className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Liên kết nhanh</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-background/80 hover:text-primary transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Dịch vụ nổi bật</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-center">
                  <Badge variant="outline" className="text-xs mr-2 border-background/20 text-background/80">
                    HOT
                  </Badge>
                  <span className="text-background/80">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Thông tin liên hệ</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-background/80 leading-relaxed">
                    123 Đường ABC, Phường XYZ,<br />
                    Quận 1, TP. Hồ Chí Minh
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-background font-semibold">0123 456 789</p>
                  <p className="text-background/60 text-sm">Hotline 24/7</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-background/80">info@nhakhodoanminhquan.com</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-background/80">Thứ 2 - Thứ 7: 8:00 - 20:00</p>
                  <p className="text-background/80">Chủ nhật: 8:00 - 18:00</p>
                </div>
              </div>
            </div>

            <Button variant="appointment" className="w-full mt-6">
              Đặt lịch khám ngay
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm mb-4 md:mb-0">
              © 2024 Nha khoa Đoàn Minh Quân. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/chinh-sach-bao-mat" className="text-background/60 hover:text-primary transition-colors">
                Chính sách bảo mật
              </Link>
              <Link to="/dieu-khoan-su-dung" className="text-background/60 hover:text-primary transition-colors">
                Điều khoản sử dụng
              </Link>
              <Link to="/chinh-sach-hoan-tra" className="text-background/60 hover:text-primary transition-colors">
                Chính sách hoàn trả
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;