export default [
  {
    id: "nongsannuirung",
    title: "Nông sản núi rừng",
    category: "filter-web",
    image: "assets/img/portfolio/nongsannuirung.svg",
    github: "https://github.com/vti0209/dacsannuirungweb.git",
    demo: "https://github.com/vti0209/dacsannuirungweb.git",
    tech: ["PHP", "MySQL", "React", "Tailwind"],
    year: 2025,
    categoryVi: "Thương mại điện tử",
    categoryEn: "E-Commerce",
    titleVi: "Nông Sản Núi Rừng & Thảo Dược Quý",
    titleEn: "Mountain Specialties & Herbs E-Commerce",
    descriptionVi: "Hệ thống cửa hàng thương mại điện tử chuyên cung cấp sản vật thiên nhiên, đặc sản vùng miền và thảo dược quý Tây Bắc & Tây Nguyên.",
    descriptionEn: "An e-commerce platform specialized in natural products, regional specialties, and precious herbs from Northwest and Central Highlands regions.",
    hasRichDetails: true,
    details: {
      title: "Nông Sản Núi Rừng & Thảo Dược Quý",
      demoText: "Xem dự án trên GitHub",
      showcaseImages: [
        "assets/img/portfolio/nongsannuirung.svg",
        "assets/img/portfolio/nongsannuirung.svg",
        "assets/img/portfolio/nongsannuirung.svg"
      ],
      overview: {
        vi: "<strong>Nông Sản Núi Rừng & Thảo Dược Quý</strong> là hệ thống thương mại điện tử chuyên về sản vật thiên nhiên, đặc sản vùng miền và thảo dược quý. Dự án được xây dựng theo kiến trúc tách biệt giữa Backend API và Frontend SPA, mang lại hiệu năng cao, trải nghiệm hiện đại và bảo mật tốt.",
        en: "<strong>Mountain Specialties & Herbs E-Commerce</strong> is an e-commerce system focused on natural products, regional specialties, and precious herbs. The project is built with a separated Backend API and Frontend SPA architecture, delivering high performance, modern UX, and strong security."
      },
      targetUsers: {
        titleVi: "Đối tượng người dùng",
        titleEn: "Target Users",
        items: [
          { icon: "bi-tree-fill", vi: "Khách hàng quan tâm đến sản phẩm tự nhiên, đặc sản và thảo dược", en: "Customers interested in natural products, specialties, and herbs" },
          { icon: "bi-shop-window", vi: "Cửa hàng và doanh nghiệp bán hàng trực tuyến", en: "Stores and businesses selling online" },
          { icon: "bi-shield-lock-fill", vi: "Quản trị viên cần hệ thống quản lý sản phẩm, đơn hàng và người dùng", en: "Administrators managing products, orders, and users" }
        ]
      },
      keyFeatures: {
        titleVi: "Tính năng chính",
        titleEn: "Key Features",
        items: [
          { icon: "bi-key-fill", vi: "Xác thực bằng Bearer Token và phân quyền Admin", en: "Bearer Token authentication and Admin authorization" },
          { icon: "bi-box-seam", vi: "Quản lý danh mục, sản phẩm, đơn hàng và đánh giá", en: "Manage categories, products, orders, and reviews" },
          { icon: "bi-search-heart-fill", vi: "Tìm kiếm và lọc sản phẩm theo danh mục", en: "Search and filter products by category" },
          { icon: "bi-cart-fill", vi: "Giỏ hàng và quy trình đặt hàng thông minh", en: "Cart and smart checkout flow" },
          { icon: "bi-image-fill", vi: "Tải ảnh sản phẩm lên server cục bộ", en: "Upload product images to local server" },
          { icon: "bi-speedometer2", vi: "Frontend React SPA nhanh, tối ưu và hiện đại", en: "Fast, optimized, and modern React SPA frontend" }
        ]
      },
      userFlow: {
        titleVi: "Luồng người dùng",
        titleEn: "User Flow",
        flowVi: "Mở trang → Tìm sản phẩm → Xem chi tiết → Thêm vào giỏ → Đặt hàng → Theo dõi đơn hàng",
        flowEn: "Open store → Search product → View details → Add to cart → Place order → Track order",
        noteVi: "— Hệ thống được thiết kế để khách hàng có trải nghiệm mua sắm mượt mà, rõ ràng và tin cậy.",
        noteEn: "— The system is designed to provide a smooth, clear, and reliable shopping experience."
      },
      uiUxDesign: {
        titleVi: "Thiết kế giao diện & UI/UX",
        titleEn: "Interface Design & UI/UX",
        leftItems: [
          { icon: "bi-tree", vi: "Chủ đạo tone xanh rừng sâu và màu hổ phách ấm áp", en: "Dominant deep forest green and warm amber tones" },
          { icon: "bi-grid-3x3-gap-fill", vi: "Bố cục rõ ràng cho storefront và admin dashboard", en: "Clear layout for storefront and admin dashboard" },
          { icon: "bi-phone", vi: "Tối ưu trải nghiệm trên cả desktop và mobile", en: "Optimized experience on both desktop and mobile" }
        ],
        rightItems: [
          { icon: "bi-type", vi: "Typography rõ ràng, hiện đại và dễ đọc", en: "Clear, modern, and readable typography" },
          { icon: "bi-palette-fill", vi: "Thiết kế mang cảm giác tự nhiên, cao cấp và sang trọng", en: "Design feels natural, premium, and elegant" },
          { icon: "bi-magic", vi: "Tích hợp trải nghiệm dùng thử và tương tác mượt mà", en: "Smooth interactions and polished user experience" }
        ]
      },
      tools: [
        { icon: "bi-php", label: "PHP MVC" },
        { icon: "bi-database-fill", label: "MySQL / PDO" },
        { icon: "bi-react", label: "React + Vite" },
        { icon: "bi-tailwind", label: "Tailwind CSS" },
        { icon: "bi-shield-lock-fill", label: "JWT Auth" }
      ]
    }
  }
];
