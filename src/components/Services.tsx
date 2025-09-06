import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Shield, Award } from "lucide-react";
import implantImage from "@/assets/implant-service.jpg";
import bracesImage from "@/assets/braces-service.jpg";
import cosmeticImage from "@/assets/cosmetic-service.jpg";

const Services = () => {
  const services = [
    {
      title: "Cấy ghép Implant",
      description: "Giải pháp phục hồi răng mất hoàn hảo với công nghệ 3D hiện đại",
      image: implantImage,
      features: ["Công nghệ 3D", "Bảo hành trọn đời", "Không đau"],
      badge: "Phổ biến",
      price: "Từ 15.000.000đ",
      href: "/dich-vu/cay-ghep-implant"
    },
    {
      title: "Niềng răng thẩm mỹ",
      description: "Chỉnh nha hiện đại với mắc cài trong suốt và không mắc cài",
      image: bracesImage,
      features: ["Invisalign", "Mắc cài sứ", "Thời gian ngắn"],
      badge: "Công nghệ mới",
      price: "Từ 25.000.000đ",
      href: "/dich-vu/nieng-rang"
    },
    {
      title: "Răng sứ thẩm mỹ",
      description: "Bọc răng sứ cao cấp cho nụ cười hoàn hảo và tự nhiên",
      image: cosmeticImage,
      features: ["Sứ Zirconia", "Màu sắc tự nhiên", "Độ bền cao"],
      badge: "Cao cấp",
      price: "Từ 3.500.000đ",
      href: "/dich-vu/rang-su"
    }
  ];

  const additionalServices = [
    {
      icon: Zap,
      title: "Tẩy trắng răng Laser",
      description: "Làm trắng răng an toàn với công nghệ Laser tiên tiến"
    },
    {
      icon: Shield,
      title: "Điều trị nha chu",
      description: "Chăm sóc và điều trị các bệnh lý về nướu"
    },
    {
      icon: Award,
      title: "Nha khoa tổng quát",
      description: "Khám tổng quát, hàn trám, nhổ răng khôn"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Dịch vụ chuyên nghiệp
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Dịch vụ nha khoa{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              hàng đầu
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chúng tôi cung cấp đầy đủ các dịch vụ nha khoa với công nghệ hiện đại nhất, 
            đảm bảo chất lượng cao và an toàn tuyệt đối.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 border-0 bg-gradient-card">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={service.image}
                  alt={`Dịch vụ ${service.title} tại nha khoa Đoàn Minh Quân`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge 
                  variant={service.badge === "Phổ biến" ? "default" : "secondary"}
                  className="absolute top-4 left-4"
                >
                  {service.badge}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-primary">
                    {service.price}
                  </span>
                  <Button variant="ghost" size="sm" className="group/btn">
                    Xem chi tiết
                    <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-primary-light rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Dịch vụ khác
            </h3>
            <p className="text-muted-foreground">
              Chúng tôi cung cấp đầy đủ các dịch vụ nha khoa chuyên nghiệp
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon className="h-8 w-8" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{service.title}</h4>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Xem tất cả dịch vụ
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;