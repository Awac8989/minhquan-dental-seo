import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, CheckCircle, Phone } from "lucide-react";
import heroImage from "@/assets/hero-dental-clinic.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-light via-background to-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="mb-4">
                ⭐ Phòng khám nha khoa uy tín #1
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Kiến tạo{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  nụ cười hoàn mỹ
                </span>{" "}
                cùng Nha khoa Đoàn Minh Quân
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-2xl">
                Với hơn 15 năm kinh nghiệm và công nghệ hiện đại nhất, chúng tôi mang đến 
                những giải pháp nha khoa toàn diện, giúp bạn tự tin với nụ cười rạng rỡ.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="text-muted-foreground">Công nghệ Laser hiện đại</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="text-muted-foreground">Quy trình vô trùng 100%</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="text-muted-foreground">Bảo hành trọn đời</span>
              </div>
            </div>

            {/* Reviews */}
            <div className="flex items-center gap-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">4.9/5</span> từ hơn 2,000+ đánh giá
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Đặt Lịch Khám Miễn Phí
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Phone className="h-5 w-5 mr-2" />
                Gọi Ngay: 0123 456 789
              </Button>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Năm kinh nghiệm</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Khách hàng tin tưởng</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Khách hàng hài lòng</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-hero">
              <img
                src={heroImage}
                alt="Bác sĩ Đoàn Minh Quân tại phòng khám nha khoa hiện đại"
                className="w-full h-auto object-cover"
                loading="eager"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-card border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-success-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold">Cam kết 100%</div>
                    <div className="text-sm text-muted-foreground">An toàn & hiệu quả</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;