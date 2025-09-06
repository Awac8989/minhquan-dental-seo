import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Chị Nguyễn Thị Lan",
      age: "32 tuổi",
      location: "Quận 3, TP.HCM",
      service: "Cấy ghép Implant",
      rating: 5,
      content: "Tôi đã cấy ghép 2 răng Implant tại đây và rất hài lòng. Bác sĩ Quân rất tận tâm, kỹ thuật cao và không đau như tôi lo lắng. Sau 6 tháng, răng Implant rất chắc chắn và đẹp như răng thật.",
      avatar: "/placeholder.svg"
    },
    {
      name: "Anh Trần Minh Đức",
      age: "28 tuổi", 
      location: "Quận 1, TP.HCM",
      service: "Niềng răng Invisalign",
      rating: 5,
      content: "Niềng răng trong suốt Invisalign tại phòng khám rất hiệu quả. Chỉ sau 14 tháng, răng tôi đã thẳng đều hoàn toàn. Nhân viên thân thiện, quy trình chuyên nghiệp. Rất đáng tiền!",
      avatar: "/placeholder.svg"
    },
    {
      name: "Cô Phạm Thu Hằng",
      age: "45 tuổi",
      location: "Quận 7, TP.HCM", 
      service: "Bọc răng sứ",
      rating: 5,
      content: "Tôi đã bọc 6 răng sứ Zirconia và kết quả vượt mong đợi. Màu sắc rất tự nhiên, không ai biết tôi đã bọc răng sứ. Bác sĩ tư vấn rất chi tiết và chu đáo.",
      avatar: "/placeholder.svg"
    },
    {
      name: "Anh Lê Văn Tâm",
      age: "38 tuổi",
      location: "Bình Thạnh, TP.HCM",
      service: "Tẩy trắng răng Laser", 
      rating: 5,
      content: "Răng tôi đã trắng hơn 5-6 tone sau 1 lần tẩy trắng Laser. Quy trình nhanh chóng, không đau và hiệu quả lâu dài. Phòng khám sạch sẽ, hiện đại. Tôi sẽ giới thiệu bạn bè đến đây.",
      avatar: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Khách hàng nói gì về chúng tôi
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Hơn 10.000 khách hàng{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              tin tưởng & hài lòng
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Những chia sẻ chân thực từ khách hàng đã trải nghiệm dịch vụ tại 
            Nha khoa Đoàn Minh Quân sẽ giúp bạn hiểu rõ hơn về chất lượng của chúng tôi.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 border-0 bg-gradient-card relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-20">
                <Quote className="h-12 w-12 text-primary" />
              </div>
              
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">
                    ({testimonial.rating}/5)
                  </span>
                </div>

                {/* Content */}
                <blockquote className="text-foreground leading-relaxed mb-6 relative z-10">
                  "{testimonial.content}"
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.name.split(' ').slice(-2).map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.age} • {testimonial.location}
                    </div>
                    <Badge variant="outline" className="text-xs mt-1">
                      {testimonial.service}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Summary */}
        <div className="bg-primary-light rounded-2xl p-8 text-center">
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl font-bold text-primary mb-1">4.9/5</div>
              <div className="text-sm text-muted-foreground">Đánh giá trung bình</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">2,143</div>
              <div className="text-sm text-muted-foreground">Đánh giá Google</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Khách hàng hài lòng</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">95%</div>
              <div className="text-sm text-muted-foreground">Giới thiệu bạn bè</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;