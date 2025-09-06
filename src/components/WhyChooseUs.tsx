import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Users, 
  Clock, 
  Shield, 
  Heart, 
  Microscope,
  Medal,
  Headphones
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "Bác sĩ chuyên môn cao",
      description: "Đội ngũ bác sĩ có trình độ chuyên môn cao, được đào tạo bài bản trong và ngoài nước",
      highlight: "15+ năm kinh nghiệm"
    },
    {
      icon: Microscope,
      title: "Công nghệ hiện đại",
      description: "Trang bị máy móc, thiết bị hiện đại nhất từ các thương hiệu hàng đầu thế giới",
      highlight: "Công nghệ 3D & Laser"
    },
    {
      icon: Shield,
      title: "An toàn tuyệt đối",
      description: "Quy trình vô trùng nghiêm ngặt, đảm bảo an toàn 100% cho mọi khách hàng",
      highlight: "Tiêu chuẩn quốc tế"
    },
    {
      icon: Clock,
      title: "Tiết kiệm thời gian",
      description: "Quy trình điều trị tối ưu, giảm thiểu số lần tái khám và thời gian điều trị",
      highlight: "Nhanh chóng & hiệu quả"
    },
    {
      icon: Heart,
      title: "Chăm sóc tận tình",
      description: "Đội ngũ y bác sĩ và nhân viên luôn tận tâm, chu đáo trong mọi khâu điều trị",
      highlight: "Chăm sóc 24/7"
    },
    {
      icon: Medal,
      title: "Bảo hành trọn đời",
      description: "Cam kết bảo hành dài hạn cho tất cả các dịch vụ điều trị tại phòng khám",
      highlight: "Yên tâm tuyệt đối"
    },
    {
      icon: Users,
      title: "Hơn 10.000 khách hàng",
      description: "Được hơn 10.000 khách hàng tin tưởng và lựa chọn trong suốt 15 năm hoạt động",
      highlight: "Uy tín được khẳng định"
    },
    {
      icon: Headphones,
      title: "Hỗ trợ 24/7",
      description: "Đội ngũ tư vấn chuyên nghiệp sẵn sàng hỗ trợ khách hàng mọi lúc, mọi nơi",
      highlight: "Luôn bên cạnh bạn"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary via-background to-primary-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Ưu điểm vượt trội
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tại sao chọn{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Nha khoa Đoàn Minh Quân?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chúng tôi không chỉ là nơi điều trị răng miệng, mà còn là người bạn đồng hành 
            tin cậy trong hành trình chăm sóc sức khỏe răng miệng của bạn.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm hover:bg-card"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {reason.description}
                </p>
                
                <Badge variant="secondary" className="text-xs">
                  {reason.highlight}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-card rounded-2xl p-8 border border-border">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Năm kinh nghiệm</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">10K+</div>
              <div className="text-sm text-muted-foreground">Khách hàng hài lòng</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-success mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Tỷ lệ thành công</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5★</div>
              <div className="text-sm text-muted-foreground">Đánh giá trung bình</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;