import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Mẹo Chăm Sóc Răng Miệng Hiệu Quả Tại Nhà",
      excerpt: "Khám phá những cách đơn giản nhưng hiệu quả để chăm sóc răng miệng hàng ngày, giúp bạn duy trì nụ cười khỏe mạnh và tự tin.",
      content: `
## 1. Đánh răng đúng cách và đều đặn

Đánh răng ít nhất 2 lần/ngày với kem đánh răng có fluoride. Sử dụng bàn chải lông mềm và đánh răng trong 2-3 phút với chuyển động tròn nhẹ nhàng. Thay bàn chải 3-4 tháng một lần.

## 2. Sử dụng chỉ nha khoa hàng ngày

Chỉ nha khoa giúp làm sạch những vùng mà bàn chải không thể tiếp cận được. Sử dụng chỉ nha khoa mỗi tối trước khi đánh răng để loại bỏ mảng bám và vi khuẩn.

## 3. Súc miệng với nước súc miệng kháng khuẩn

Nước súc miệng giúp tiêu diệt vi khuẩn, làm tươi mát hơi thở và bảo vệ răng khỏi sâu răng. Chọn loại không chứa cồn để tránh khô miệng.

## 4. Chế độ ăn uống lành mạnh

Hạn chế đồ ngọt, nước có ga và thực phẩm có tính axit. Tăng cường rau xanh, trái cây, sữa và các thực phẩm giàu canxi để củng cố men răng.

## 5. Khám răng định kỳ 6 tháng/lần

Việc khám răng định kỳ giúp phát hiện sớm các vấn đề nha khoa, làm sạch cao răng và tư vấn chăm sóc răng miệng phù hợp.
      `,
      author: "BS. Đoàn Minh Quân",
      date: "2024-03-15",
      readTime: "5 phút đọc",
      category: "Chăm sóc răng miệng",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Công Nghệ Tẩy Trắng Răng Mới Nhất: Khám Phá Sự Khác Biệt",
      excerpt: "Tìm hiểu về những công nghệ tẩy trắng răng hiện đại nhất và sự khác biệt so với các phương pháp truyền thống.",
      content: `
## Công nghệ Laser Whitening

Phương pháp tẩy trắng bằng laser sử dụng ánh sáng laser để kích hoạt gel tẩy trắng, giúp răng trắng sáng lên 3-8 tone chỉ trong 1 lần điều trị. Quy trình an toàn, nhanh chóng và hiệu quả lâu dài.

## Hệ thống LED Whitening

Công nghệ LED sử dụng ánh sáng xanh để kích hoạt gel tẩy trắng, nhẹ nhàng hơn laser nhưng vẫn đảm bảo hiệu quả cao. Phù hợp với những người có răng nhạy cảm.

## So sánh với phương pháp truyền thống

- **Tẩy trắng tại nhà**: Hiệu quả chậm, cần 2-4 tuần
- **Tẩy trắng tại phòng khám**: Hiệu quả ngay lập tức, an toàn hơn
- **Công nghệ mới**: Kết hợp cả tốc độ và an toàn

## Lợi ích của tẩy trắng chuyên nghiệp

- Hiệu quả nhanh chóng và rõ rệt
- An toàn cho men răng
- Được bác sĩ theo dõi và tư vấn
- Kết quả bền vững lâu dài
      `,
      author: "BS. Đoàn Minh Quân",
      date: "2024-03-10",
      readTime: "7 phút đọc",
      category: "Công nghệ nha khoa",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Làm Thế Nào Để Chọn Bàn Chải Đánh Răng Phù Hợp Nhất?",
      excerpt: "Hướng dẫn chi tiết cách chọn bàn chải đánh răng và kem đánh răng phù hợp với từng người để đạt hiệu quả chăm sóc răng miệng tối ưu.",
      content: `
## Các loại bàn chải đánh răng

### Bàn chải thường
- **Lông mềm**: Phù hợp với người có răng nhạy cảm, nướu yếu
- **Lông trung bình**: Phù hợp với đa số người
- **Lông cứng**: Chỉ dùng theo chỉ định của bác sĩ

### Bàn chải điện
- Hiệu quả làm sạch cao hơn 20-30%
- Phù hợp với người lười đánh răng
- Có timer tự động
- Đầu bàn chải nhỏ, tiếp cận tốt các vùng khó

## Cách chọn kem đánh răng

- **Có fluoride**: Bảo vệ men răng, chống sâu răng
- **Cho răng nhạy cảm**: Giảm ê buốt
- **Tẩy trắng**: Loại bỏ vết ố, làm trắng răng tự nhiên
- **Chống cao răng**: Ngăn ngừa hình thành cao răng

## Lời khuyên từ chuyên gia

Thay bàn chải 3-4 tháng một lần hoặc khi lông bàn chải bị cong. Chọn bàn chải có đầu nhỏ để dễ dàng làm sạch các răng hàm.
      `,
      author: "BS. Đoàn Minh Quân",
      date: "2024-03-05",
      readTime: "6 phút đọc",
      category: "Hướng dẫn",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Thực Phẩm Nào Tốt Và Không Tốt Cho Răng Của Bạn?",
      excerpt: "Danh sách chi tiết các thực phẩm nên ăn và nên tránh để bảo vệ sức khỏe răng miệng một cách tự nhiên.",
      content: `
## Thực phẩm tốt cho răng

### Thực phẩm giàu canxi
- **Sữa và sản phẩm từ sữa**: Phô mai, sữa chua
- **Rau xanh**: Cải xoăn, bông cải xanh
- **Hạt và đậu**: Hạnh nhân, đậu phụ

### Thực phẩm giàu vitamin C
- **Trái cây**: Cam, kiwi, dâu tây
- **Rau củ**: Ớt chuông, cà chua

### Thực phẩm tự nhiên làm sạch răng
- **Táo**: Kích thích tiết nước bọt
- **Cần tây**: Tác dụng như bàn chải tự nhiên
- **Trà xanh**: Chống vi khuẩn

## Thực phẩm nên hạn chế

### Đồ ngọt và tinh bột
- Kẹo, chocolate, bánh ngọt
- Nước ngọt có ga
- Snack giòn rụm

### Thực phẩm có tính axit cao
- Nước trái cây có đường
- Rượu vang
- Thực phẩm lên men

## Lời khuyên dinh dưỡng

Uống nhiều nước lọc, ăn sau 30 phút kể từ khi uống nước có tính axit, và luôn súc miệng sau khi ăn đồ ngọt.
      `,
      author: "BS. Đoàn Minh Quân",
      date: "2024-02-28",
      readTime: "5 phút đọc",
      category: "Dinh dưỡng",
      image: "/api/placeholder/400/250"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Blog Nha khoa
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Kiến thức{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Chăm sóc răng miệng
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cập nhật những thông tin mới nhất về chăm sóc răng miệng và công nghệ nha khoa hiện đại
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.slice(0, 3).map((post) => (
            <Card key={post.id} className="group hover:shadow-card transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm hover:bg-card overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="text-muted-foreground">
                  {post.category === "Chăm sóc răng miệng" && "🦷"}
                  {post.category === "Công nghệ nha khoa" && "⚡"}
                  {post.category === "Hướng dẫn" && "📋"}
                  {post.category === "Dinh dưỡng" && "🍎"}
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(post.date).toLocaleDateString('vi-VN')}</span>
                  </div>
                </div>
                
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                    <Clock className="h-3 w-3 ml-2" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="h-8 px-3">
                    Đọc tiếp
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Article */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 aspect-video md:aspect-auto bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <div className="text-4xl">🦷</div>
            </div>
            
            <div className="md:w-2/3 p-8">
              <Badge variant="outline" className="mb-3">
                Bài viết nổi bật
              </Badge>
              
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Nguyên Nhân Và Cách Phòng Tránh Sâu Răng Hiệu Quả
              </h3>
              
              <p className="text-muted-foreground mb-4">
                Sâu răng là một trong những vấn đề nha khoa phổ biến nhất. Tìm hiểu về nguyên nhân 
                hình thành sâu răng từ vi khuẩn và mảng bám, cùng với các biện pháp phòng ngừa 
                đơn giản nhưng hiệu quả như vệ sinh răng miệng đúng cách và sử dụng fluoride.
              </p>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>BS. Đoàn Minh Quân</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>20/02/2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>8 phút đọc</span>
                </div>
              </div>
              
              <Button className="w-full md:w-auto">
                Đọc bài viết đầy đủ
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Xem tất cả bài viết
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;