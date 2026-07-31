/* empty css             */(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function e(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=e(a);fetch(a.href,o)}})();class j{static getSkeletonHTML(){return`
      <header id="header" class="header d-flex align-items-center fixed-top"></header>
      
      <main class="main">
        <section id="hero" class="hero section dark-background"></section>
        <section id="about" class="about section"></section>
        <section id="resume" class="resume section"></section>
        <section id="services" class="services section"></section>
        <section id="portfolio" class="portfolio section"></section>
        <section id="contact" class="contact section"></section>
      </main>

      <footer id="footer" class="footer"></footer>

      <!-- Mobile Bottom Navigation -->
      <nav class="mobile-bottom-nav d-md-none">
        <a href="#hero" class="nav-item active">
          <i class="bi bi-house-door"></i>
          <span data-vi="Trang Chủ" data-en="Home">Trang Chủ</span>
        </a>
        <a href="#about" class="nav-item">
          <i class="bi bi-person"></i>
          <span data-vi="Về Tôi" data-en="About">Về Tôi</span>
        </a>
        <a href="#resume" class="nav-item">
          <i class="bi bi-journal-text"></i>
          <span data-vi="Hành Trình" data-en="Journey">Hành Trình</span>
        </a>
        <a href="#portfolio" class="nav-item">
          <i class="bi bi-grid"></i>
          <span data-vi="Dự Án" data-en="Projects">Dự Án</span>
        </a>
        <a href="#contact" class="nav-item">
          <i class="bi bi-envelope"></i>
          <span data-vi="Liên Hệ" data-en="Contact">Liên Hệ</span>
        </a>
      </nav>

      <!-- Scroll Top -->
      <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

      <!-- Preloader -->
      <div id="preloader"></div>

      <!-- Project Details Modal -->
      <div class="modal fade" id="projectModal" tabindex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content project-modal-content">
            <div class="modal-header border-0">
              <h5 class="modal-title" id="projectModalLabel" data-vi="Chi tiết dự án" data-en="Project Details">Chi tiết dự án</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-4">
              <div class="col-12 text-center py-5">
                <div class="spinner-border text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <p class="mt-3 text-secondary" data-vi="Đang tải thông tin dự án..." data-en="Loading project details...">Đang tải thông tin dự án...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}}const q={name:"Hồ Văn Tiết",role:"IT Student & Frontend Developer",avatar:"assets/img/VanTiet.jpg",logo:"assets/img/profile/logo.png",cvUrl:"assets/img/profile/Ho Van Tiet_Front-end Developer Intern_CV.pdf",stats:{projects:"1",years:"2+",skills:"11"},details:{studyingAt:"DNC & PNV",careerPath:"Front-End Developer & IT Business Analyst",location:{vi:"Đà Nẵng, Việt Nam",en:"Da Nang, Vietnam"},email:"tiet.ho27@student.passerellesnumeriques.org",phone:"+84 373 532 152",status:{vi:"Sẵn sàng hợp tác",en:"Ready for collaboration"}},about:{title:{vi:"Về Tôi",en:"About Me"},subtitle:{vi:"Hãy cùng tìm hiểu!",en:"Let's find out!"},intro:{vi:"Chào mừng bạn đến với portfolio của tôi! Nơi chia sẻ những dự án, kinh nghiệm học tập và hành trình phát triển trong lĩnh vực công nghệ.",en:"Welcome to my portfolio! A place where I share my projects, learning experiences, and growth journey in technology."},paragraphs:[{vi:"Tôi là sinh viên ngành Kỹ thuật phần mềm, đang học tại Trường Cao đẳng Đà Nẵng (DNC) và Passerelles Numériques Vietnam (PNV).",en:"I am a Software Engineering student at Da Nang College (DNC) and Passerelles Numériques Vietnam (PNV)."},{vi:"Yêu thích xây dựng các trang web đẹp, thân thiện với người dùng và tối ưu hiệu suất. Luôn sẵn sàng học hỏi và thử nghiệm các công nghệ mới để nâng cao kỹ năng lập trình.",en:"I love building beautiful, user-friendly, and high-performance websites. Always ready to learn and experiment with new technologies to enhance my programming skills."}]},services:[{icon:"bi-layout-text-window-reverse",title:{vi:"Phát triển Frontend",en:"Frontend Dev"},description:{vi:"Xây dựng giao diện web hiện đại, tương thích trên mọi thiết bị.",en:"Building modern web interfaces, compatible with all devices."},featured:!1},{icon:"bi-briefcase",title:{vi:"Phân tích nghiệp vụ",en:"Business Analyst"},description:{vi:"Phân tích nghiệp vụ, tối ưu hóa quy trình và giải pháp công nghệ.",en:"Business analysis, optimizing processes and technology solutions."},featured:!0},{icon:"bi-palette",title:{vi:"Thiết kế UI/UX",en:"UI/UX Design"},description:{vi:"Thiết kế trải nghiệm người dùng tinh tế và giao diện bắt mắt với Figma.",en:"Designing sophisticated user experiences and eye-catching interfaces with Figma."},featured:!1},{icon:"bi-phone",title:{vi:"Thiết kế Di động",en:"Mobile Design"},description:{vi:"Thiết kế và phát triển ứng dụng di động thân thiện, dễ sử dụng.",en:"Designing and developing friendly, easy-to-use mobile applications."},featured:!1}]},V=[{id:"nongsannuirung",title:"Nông sản núi rừng",category:"filter-web",image:"assets/img/portfolio/nongsannuirung.svg",github:"https://github.com/vti0209/dacsannuirungweb.git",demo:"https://github.com/vti0209/dacsannuirungweb.git",tech:["PHP","MySQL","React","Tailwind"],year:2025,categoryVi:"Website",categoryEn:"Website",titleVi:"Nông Sản Núi Rừng & Thảo Dược Quý",titleEn:"Mountain Specialties & Herbs E-Commerce",descriptionVi:"Hệ thống cửa hàng thương mại điện tử chuyên cung cấp sản vật thiên nhiên, đặc sản vùng miền và thảo dược quý Tây Bắc & Tây Nguyên.",descriptionEn:"An e-commerce platform specialized in natural products, regional specialties, and precious herbs from Northwest and Central Highlands regions.",hasRichDetails:!0,details:{title:"Nông Sản Núi Rừng & Thảo Dược Quý",demoText:"Xem dự án trên GitHub",showcaseImages:["assets/img/portfolio/nongsannuirung.svg","assets/img/portfolio/nongsannuirung.svg","assets/img/portfolio/nongsannuirung.svg"],overview:{vi:"<strong>Nông Sản Núi Rừng & Thảo Dược Quý</strong> là hệ thống thương mại điện tử chuyên về sản vật thiên nhiên, đặc sản vùng miền và thảo dược quý. Dự án được xây dựng theo kiến trúc tách biệt giữa Backend API và Frontend SPA, mang lại hiệu năng cao, trải nghiệm hiện đại và bảo mật tốt.",en:"<strong>Mountain Specialties & Herbs E-Commerce</strong> is an e-commerce system focused on natural products, regional specialties, and precious herbs. The project is built with a separated Backend API and Frontend SPA architecture, delivering high performance, modern UX, and strong security."},targetUsers:{titleVi:"Đối tượng người dùng",titleEn:"Target Users",items:[{icon:"bi-tree-fill",vi:"Khách hàng quan tâm đến sản phẩm tự nhiên, đặc sản và thảo dược",en:"Customers interested in natural products, specialties, and herbs"},{icon:"bi-shop-window",vi:"Cửa hàng và doanh nghiệp bán hàng trực tuyến",en:"Stores and businesses selling online"},{icon:"bi-shield-lock-fill",vi:"Quản trị viên cần hệ thống quản lý sản phẩm, đơn hàng và người dùng",en:"Administrators managing products, orders, and users"}]},keyFeatures:{titleVi:"Tính năng chính",titleEn:"Key Features",items:[{icon:"bi-key-fill",vi:"Xác thực bằng Bearer Token và phân quyền Admin",en:"Bearer Token authentication and Admin authorization"},{icon:"bi-box-seam",vi:"Quản lý danh mục, sản phẩm, đơn hàng và đánh giá",en:"Manage categories, products, orders, and reviews"},{icon:"bi-search-heart-fill",vi:"Tìm kiếm và lọc sản phẩm theo danh mục",en:"Search and filter products by category"},{icon:"bi-cart-fill",vi:"Giỏ hàng và quy trình đặt hàng thông minh",en:"Cart and smart checkout flow"},{icon:"bi-image-fill",vi:"Tải ảnh sản phẩm lên server cục bộ",en:"Upload product images to local server"},{icon:"bi-speedometer2",vi:"Frontend React SPA nhanh, tối ưu và hiện đại",en:"Fast, optimized, and modern React SPA frontend"}]},userFlow:{titleVi:"Luồng người dùng",titleEn:"User Flow",flowVi:"Mở trang → Tìm sản phẩm → Xem chi tiết → Thêm vào giỏ → Đặt hàng → Theo dõi đơn hàng",flowEn:"Open store → Search product → View details → Add to cart → Place order → Track order",noteVi:"— Hệ thống được thiết kế để khách hàng có trải nghiệm mua sắm mượt mà, rõ ràng và tin cậy.",noteEn:"— The system is designed to provide a smooth, clear, and reliable shopping experience."},uiUxDesign:{titleVi:"Thiết kế giao diện & UI/UX",titleEn:"Interface Design & UI/UX",leftItems:[{icon:"bi-tree",vi:"Chủ đạo tone xanh rừng sâu và màu hổ phách ấm áp",en:"Dominant deep forest green and warm amber tones"},{icon:"bi-grid-3x3-gap-fill",vi:"Bố cục rõ ràng cho storefront và admin dashboard",en:"Clear layout for storefront and admin dashboard"},{icon:"bi-phone",vi:"Tối ưu trải nghiệm trên cả desktop và mobile",en:"Optimized experience on both desktop and mobile"}],rightItems:[{icon:"bi-type",vi:"Typography rõ ràng, hiện đại và dễ đọc",en:"Clear, modern, and readable typography"},{icon:"bi-palette-fill",vi:"Thiết kế mang cảm giác tự nhiên, cao cấp và sang trọng",en:"Design feels natural, premium, and elegant"},{icon:"bi-magic",vi:"Tích hợp trải nghiệm dùng thử và tương tác mượt mà",en:"Smooth interactions and polished user experience"}]},tools:[{icon:"bi-php",label:"PHP MVC"},{icon:"bi-database-fill",label:"MySQL / PDO"},{icon:"bi-react",label:"React + Vite"},{icon:"bi-tailwind",label:"Tailwind CSS"},{icon:"bi-shield-lock-fill",label:"JWT Auth"}]}},{id:"vtschool",title:"vTSchool",category:"filter-web",image:"assets/img/portfolio/vtschool.svg",github:"https://github.com/vti0209/vTSchool-AI-Career-Guidance.git",demo:"https://github.com/vti0209/vTSchool-AI-Career-Guidance.git",tech:["Laravel","PHP","MySQL","Tailwind","Vite"],year:2025,categoryVi:"Website",categoryEn:"Website",titleVi:"vTSchool - Nền tảng AI tư vấn hướng nghiệp",titleEn:"vTSchool - AI Career Guidance Platform",descriptionVi:"Nền tảng web hiện đại giúp học sinh THPT tra cứu ngành học, so sánh trường đại học và nhận tư vấn nghề nghiệp bằng AI.",descriptionEn:"A modern web platform helping high school students explore majors, compare universities, and receive AI-powered career guidance.",hasRichDetails:!0,details:{title:"vTSchool - AI Career Guidance Platform",demoText:"Xem dự án trên GitHub",showcaseImages:["assets/img/portfolio/vtschool.svg","assets/img/portfolio/vtschool.svg","assets/img/portfolio/vtschool.svg"],overview:{vi:"<strong>vTSchool</strong> là nền tảng web hỗ trợ học sinh THPT định hướng nghề nghiệp bằng AI. Dự án giúp người dùng tra cứu ngành học, so sánh trường đại học và nhận gợi ý phù hợp dựa trên điểm thi, sở thích và mục tiêu nghề nghiệp.",en:"<strong>vTSchool</strong> is a web platform that helps high school students explore careers with AI support. It enables users to browse majors, compare universities, and receive personalized guidance based on exam scores, interests, and career goals."},targetUsers:{titleVi:"Đối tượng người dùng",titleEn:"Target Users",items:[{icon:"bi-mortarboard-fill",vi:"Học sinh THPT cần định hướng ngành học và trường phù hợp",en:"High school students who need career and university direction"},{icon:"bi-person-badge-fill",vi:"Phụ huynh và cố vấn muốn có công cụ tư vấn rõ ràng",en:"Parents and counselors looking for a clear guidance tool"},{icon:"bi-shield-lock-fill",vi:"Quản trị viên muốn quản lý dữ liệu ngành, trường và phiên tư vấn",en:"Administrators managing majors, universities, and consultation sessions"}]},keyFeatures:{titleVi:"Tính năng chính",titleEn:"Key Features",items:[{icon:"bi-chat-dots-fill",vi:"AI advisor trả lời theo ngữ cảnh và gợi ý nghề nghiệp phù hợp",en:"AI advisor provides contextual career recommendations"},{icon:"bi-book-half",vi:"Danh mục ngành học có thông tin lương, tỷ lệ việc làm và trường phù hợp",en:"Major directory with salary, employability, and school data"},{icon:"bi-buildings-fill",vi:"Thư mục trường đại học với điểm chuẩn, học phí và thông tin chi tiết",en:"University directory with admission scores, tuition, and detailed information"},{icon:"bi-graph-up-arrow",vi:"Dashboard quản trị thống kê người dùng, ngành học và phiên tư vấn",en:"Admin dashboard with statistics on users, majors, and consultations"},{icon:"bi-translate",vi:"Hỗ trợ đa ngôn ngữ tiếng Việt và tiếng Anh",en:"Supports Vietnamese and English multilingual experience"},{icon:"bi-stars",vi:"Giao diện hiện đại theo phong cách dark mode và glassmorphism",en:"Modern UI with dark mode and glassmorphism styling"}]},userFlow:{titleVi:"Luồng người dùng",titleEn:"User Flow",flowVi:"Đăng nhập → Nhập thông tin → Nhận tư vấn AI → Xem ngành & trường → Lên lộ trình học tập",flowEn:"Login → Enter information → Receive AI guidance → View majors & universities → Build a study plan",noteVi:"— Quy trình được thiết kế để học sinh hiểu rõ lựa chọn và đưa ra quyết định nhanh hơn.",noteEn:"— The flow is designed to make choices clearer and decisions faster for students."},uiUxDesign:{titleVi:"Thiết kế giao diện & UI/UX",titleEn:"Interface Design & UI/UX",leftItems:[{icon:"bi-brightness-high",vi:"Giao diện tối và trong suốt, tạo cảm giác hiện đại và chuyên nghiệp",en:"Dark and glassy interface for a modern, professional feel"},{icon:"bi-grid-3x3-gap-fill",vi:"Bố cục rõ ràng cho chat, danh mục ngành học và trường học",en:"Clear layout for chat, majors, and universities"},{icon:"bi-phone",vi:"Tối ưu trải nghiệm trên cả desktop và mobile",en:"Optimized experience across desktop and mobile"}],rightItems:[{icon:"bi-type",vi:"Typography rõ ràng, dễ đọc và phù hợp với học sinh",en:"Readable typography designed for students"},{icon:"bi-palette-fill",vi:"Màu sắc hiện đại, tươi sáng và công nghệ cao",en:"Modern, bright, and technology-inspired colors"},{icon:"bi-magic",vi:"Hiệu ứng mượt mà, tăng cảm giác tương tác và thuận tiện",en:"Smooth interactions that feel polished and intuitive"}]},tools:[{icon:"bi-laravel",label:"Laravel 12"},{icon:"bi-database-fill",label:"MySQL / SQLite"},{icon:"bi-bootstrap-reboot",label:"Tailwind CSS v4"},{icon:"bi-cpu",label:"Vite 7"},{icon:"bi-chat-dots-fill",label:"AI Advisor"}]}},{id:"tvd",title:"TVD",category:"filter-web",image:"assets/img/portfolio/tvd.svg",github:"https://github.com/vti0209/tvd-course-management.git",demo:"https://github.com/vti0209/tvd-course-management.git",tech:["Laravel","PHP","MySQL","Bootstrap","Eloquent"],year:2025,categoryVi:"Website",categoryEn:"Website",titleVi:"TVD - Hệ thống quản lý khóa học trực tuyến",titleEn:"TVD - Online Course Management System",descriptionVi:"Hệ thống quản lý khóa học trực tuyến cho phép người dùng đăng ký tài khoản, đăng ký khóa học, theo dõi tiến trình và quản trị viên quản lý dữ liệu khóa học và người dùng.",descriptionEn:"An online course management system that allows users to sign up, enroll in courses, track learning progress, and lets administrators manage courses and users.",hasRichDetails:!0,details:{title:"TVD - Online Course Management System",demoText:"Xem dự án trên GitHub",showcaseImages:["assets/img/portfolio/tvd.svg","assets/img/portfolio/tvd.svg","assets/img/portfolio/tvd.svg"],overview:{vi:"<strong>TVD</strong> là hệ thống quản lý khóa học trực tuyến được xây dựng theo mô hình MVC bằng Laravel. Dự án hỗ trợ các vai trò người dùng và quản trị viên, cho phép đăng ký khóa học, quản lý khóa học, quản lý người dùng và thống kê dữ liệu một cách rõ ràng.",en:"<strong>TVD</strong> is an online course management system built with Laravel following the MVC architecture. It supports user and admin roles, course enrollment, course/user management, and clear data statistics."},targetUsers:{titleVi:"Đối tượng người dùng",titleEn:"Target Users",items:[{icon:"bi-people-fill",vi:"Học viên cần đăng ký và theo dõi khóa học trực tuyến",en:"Learners who want to register and track online courses"},{icon:"bi-person-badge-fill",vi:"Quản trị viên hỗ trợ quản lý khóa học và người dùng",en:"Administrators managing courses and users"},{icon:"bi-mortarboard-fill",vi:"Đơn vị giáo dục hoặc trung tâm đào tạo cần hệ thống học trực tuyến",en:"Educational institutions or training centers needing an online learning system"}]},keyFeatures:{titleVi:"Tính năng chính",titleEn:"Key Features",items:[{icon:"bi-person-plus-fill",vi:"Đăng ký tài khoản, đăng nhập và phân quyền User/Admin",en:"Register accounts, login, and manage User/Admin roles"},{icon:"bi-book-half",vi:"Xem danh sách khóa học, tìm kiếm, lọc và xem chi tiết",en:"Browse courses, search, filter, and view details"},{icon:"bi-journal-check",vi:"Đăng ký khóa học và xem khóa học đã đăng ký",en:"Enroll in courses and view enrolled courses"},{icon:"bi-graph-up-arrow",vi:"Dashboard thống kê số lượng người dùng và khóa học",en:"Dashboard with user and course statistics"},{icon:"bi-tools",vi:"Quản trị khóa học và người dùng bằng CRUD",en:"Manage courses and users through CRUD"},{icon:"bi-file-earmark-richtext",vi:"Hỗ trợ phân trang, lọc danh mục và tìm kiếm dữ liệu",en:"Support pagination, category filters, and search"}]},userFlow:{titleVi:"Luồng người dùng",titleEn:"User Flow",flowVi:"Đăng nhập → Xem khóa học → Đăng ký khóa học → Quản lý hồ sơ → Theo dõi các khóa đã tham gia",flowEn:"Login → Browse courses → Enroll → Manage profile → Track enrolled courses",noteVi:"— Mô hình được thiết kế để vừa thân thiện với người dùng vừa dễ mở rộng cho quản trị viên.",noteEn:"— The system is designed to be user-friendly while remaining easy to expand for administrators."},uiUxDesign:{titleVi:"Thiết kế giao diện & UI/UX",titleEn:"Interface Design & UI/UX",leftItems:[{icon:"bi-layout-text-window",vi:"Trang chủ, profile và my courses được thiết kế rõ ràng",en:"Home, profile, and my courses are laid out clearly"},{icon:"bi-grid-3x3-gap-fill",vi:"Bố cục phù hợp cho danh sách khóa học và form đăng ký",en:"Layout suited to course lists and enrollment forms"},{icon:"bi-phone",vi:"Tối ưu cho trải nghiệm người dùng trên màn hình web",en:"Optimized for web-based user experience"}],rightItems:[{icon:"bi-type",vi:"Typography rõ ràng và dễ đọc cho nội dung khóa học",en:"Clear, readable typography for course content"},{icon:"bi-palette-fill",vi:"Giao diện hiện đại với màu sắc hài hòa và dễ nhìn",en:"Modern interface with harmonious and readable colors"},{icon:"bi-magic",vi:"Tạo trải nghiệm học tập trực tuyến mượt mà và chuyên nghiệp",en:"Creates a smooth and professional online learning experience"}]},tools:[{icon:"bi-laravel",label:"Laravel MVC"},{icon:"bi-database-fill",label:"MySQL"},{icon:"bi-bootstrap",label:"Bootstrap / CSS"},{icon:"bi-code-square",label:"JavaScript"},{icon:"bi-person-gear",label:"Laravel Auth"}]}},{id:"event-app",title:"Event App",category:"filter-app",image:"assets/img/portfolio/event-app.svg",github:"https://github.com/vti0209/event-app.git",demo:"https://github.com/vti0209/event-app.git",tech:["Android","Java","SQLite","Material Design"],year:2025,categoryVi:"App",categoryEn:"App",titleVi:"Event App - Ứng dụng quản lý sự kiện trên Android",titleEn:"Event App - Android Event Management App",descriptionVi:"Ứng dụng di động giúp người dùng tạo, quản lý và theo dõi các sự kiện, lịch trình và hoạt động một cách thuận tiện.",descriptionEn:"A mobile app that helps users create, manage, and track events, schedules, and activities conveniently.",hasRichDetails:!0,details:{title:"Event App - Android Event Management App",demoText:"Xem dự án trên GitHub",showcaseImages:["assets/img/portfolio/event-app.svg","assets/img/portfolio/event-app.svg","assets/img/portfolio/event-app.svg"],overview:{vi:"<strong>Event App</strong> là ứng dụng Android giúp quản lý sự kiện, lịch trình và hoạt động với dữ liệu cục bộ lưu trữ bằng SQLite. Dự án tập trung vào trải nghiệm người dùng đơn giản, nhanh và dễ sử dụng.",en:"<strong>Event App</strong> is an Android application for managing events, schedules, and activities using local SQLite storage. The project focuses on a simple, fast, and intuitive user experience."},targetUsers:{titleVi:"Đối tượng người dùng",titleEn:"Target Users",items:[{icon:"bi-calendar2-event-fill",vi:"Người dùng cần theo dõi lịch trình và sự kiện cá nhân",en:"Users who need to track personal schedules and events"},{icon:"bi-people-fill",vi:"Nhóm tổ chức sự kiện và hoạt động",en:"Event organizers and activity groups"},{icon:"bi-phone",vi:"Người dùng muốn một ứng dụng nhẹ và tiện lợi trên điện thoại",en:"Users who want a lightweight and convenient mobile app"}]},keyFeatures:{titleVi:"Tính năng chính",titleEn:"Key Features",items:[{icon:"bi-plus-circle-fill",vi:"Thêm, chỉnh sửa và xóa sự kiện",en:"Create, edit, and delete events"},{icon:"bi-calendar3",vi:"Xem lịch trình theo ngày và danh sách sự kiện",en:"View schedules by day and event list"},{icon:"bi-database-fill",vi:"Lưu trữ dữ liệu cục bộ bằng SQLite",en:"Store data locally with SQLite"},{icon:"bi-bell-fill",vi:"Thông báo nhắc sự kiện sắp tới",en:"Notify upcoming events"},{icon:"bi-shield-lock-fill",vi:"Bảo vệ dữ liệu và giao diện dễ sử dụng",en:"Protect data with a simple and friendly interface"}]},userFlow:{titleVi:"Luồng người dùng",titleEn:"User Flow",flowVi:"Mở ứng dụng → Tạo sự kiện → Cập nhật lịch trình → Theo dõi và nhắc nhở",flowEn:"Open app → Create event → Update schedule → Track and receive reminders",noteVi:"— Ứng dụng được thiết kế để giúp người dùng quản lý sự kiện một cách trực quan, nhanh chóng và ít lỗi.",noteEn:"— The app is designed to help users manage events visually, quickly, and with fewer errors."},uiUxDesign:{titleVi:"Thiết kế giao diện & UI/UX",titleEn:"Interface Design & UI/UX",leftItems:[{icon:"bi-phone",vi:"Giao diện phù hợp cho màn hình Android",en:"Interface suitable for Android screens"},{icon:"bi-grid-3x3-gap-fill",vi:"Bố cục rõ ràng cho danh sách sự kiện và chi tiết",en:"Clear layout for event lists and details"},{icon:"bi-lightning-fill",vi:"Tối ưu thao tác nhanh và mượt",en:"Optimized for fast and smooth interactions"}],rightItems:[{icon:"bi-palette-fill",vi:"Màu sắc ấm áp và hiện đại",en:"Warm and modern color palette"},{icon:"bi-type",vi:"Typography đơn giản, dễ đọc",en:"Simple and readable typography"},{icon:"bi-magic",vi:"Trải nghiệm người dùng tương tác rõ ràng và trực quan",en:"Clear and intuitive interactive experience"}]},tools:[{icon:"bi-android2",label:"Android Studio"},{icon:"bi-database-fill",label:"SQLite"},{icon:"bi-code-square",label:"Java"},{icon:"bi-brush-fill",label:"Material Design"}]}}],k={technical:[{name:"HTML"},{name:"CSS"},{name:"JavaScript"},{name:"PHP"},{name:"MySQL"},{name:"Bootstrap"},{name:"Figma"},{name:"Jira"}],soft:[{vi:"Làm việc nhóm",en:"Teamwork"},{vi:"Quản lý thời gian",en:"Time management"},{vi:"Nghiên cứu",en:"Research"},{vi:"Giao tiếp",en:"Communication"},{vi:"Thuyết trình",en:"Presentation"}],languages:[{vi:"Tiếng Anh",en:"English"},{vi:"Tiếng Việt",en:"Vietnamese"}],interests:[{vi:"Nhiếp ảnh",en:"Photography",icon:"bi-camera"},{vi:"Nhiên cứu",en:"Online research",icon:"bi-search"}]},U={education:[{period:"Oct 2024 - Oct 2027",degree:"Diploma In Software Engineering",institution:"Passerelles Numériques Vietnam - Da Nang College",descriptionVi:"Đào tạo chuyên sâu về lập trình, thiết kế hệ thống và kỹ năng CNTT chuyên nghiệp.",descriptionEn:"Intensive training in programming, system design, and professional IT skills."}],certificates:[{name:"Critical Thinking Skills for the Professional"},{name:"Foundations of User Experience (UX) Design"}]},F=[{platform:"github",url:"https://github.com/vti0209",icon:"bi-github"},{platform:"linkedin",url:"https://www.linkedin.com/in/ho-van-tiet-544132343/",icon:"bi-linkedin"},{platform:"facebook",url:"https://www.facebook.com/Vti02092006",icon:"bi-facebook"}];class D{constructor(t){this.id=t.id||"",this.title=t.title||"",this.category=t.category||"",this.image=t.image||"",this.github=t.github||"#",this.demo=t.demo||"#",this.tech=Array.isArray(t.tech)?t.tech:[],this.year=t.year||new Date().getFullYear(),this.categoryVi=t.categoryVi||"",this.categoryEn=t.categoryEn||"",this.titleVi=t.titleVi||this.title,this.titleEn=t.titleEn||this.title,this.descriptionVi=t.descriptionVi||"",this.descriptionEn=t.descriptionEn||"",this.hasRichDetails=!!t.hasRichDetails,this.details=t.details||null}getCategory(t){return t==="en"?this.categoryEn||this.categoryVi:this.categoryVi||this.categoryEn}getTitle(t){return t==="en"?this.titleEn:this.titleVi}getDescription(t){return t==="en"?this.descriptionEn:this.descriptionVi}}class S{constructor(t){this.nameVi=t.vi||t.name||"",this.nameEn=t.en||t.name||"",this.icon=t.icon||null}getName(t){return t==="en"?this.nameEn:this.nameVi}}class N{constructor(t){this.platform=t.platform||"",this.url=t.url||"",this.icon=t.icon||`bi-${t.platform}`}}class ${static getProfile(){return q}static getProjects(){return V.map(t=>new D(t))}static getProjectById(t){const e=V.find(i=>i.id===t);return e?new D(e):null}static getSkills(){return{technical:k.technical.map(t=>new S(t)),soft:k.soft.map(t=>new S(t)),languages:k.languages.map(t=>new S(t)),interests:k.interests.map(t=>new S(t))}}static getExperience(){return U}static getSocials(){return F.map(t=>new N(t))}}function B(n,t,e){const i=e==="vi",a=i?"Trang chủ":"Home",o=i?"Về Tôi":"About",l=i?"Hành trình":"Journey",r=i?"Dịch vụ":"Services",h=i?"Dự án":"Projects",c=i?"Liên hệ":"Contact",d=i?"Khám phá":"Discover",s=i?"Tải CV":"Download CV",g=i?"EN":"VI";return`
    <div class="container-fluid container-xl position-relative d-flex align-items-center">

      <a href="index.html" class="logo d-flex align-items-center me-auto">
        <img src="${n.logo}" alt="VTi Logo">
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><a href="#hero" class="active" data-vi="Trang chủ" data-en="Home">${a}</a></li>
          <li><a href="#about" data-vi="Về Tôi" data-en="About">${o}</a></li>
          <li><a href="#resume" data-vi="Hành trình" data-en="Journey">${l}</a></li>
          <li><a href="#services" data-vi="Dịch vụ" data-en="Services">${r}</a></li>
          <li><a href="#portfolio" data-vi="Dự án" data-en="Projects">${h}</a></li>
          <li><a href="#contact" data-vi="Liên hệ" data-en="Contact">${c}</a></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <div class="header-actions d-flex align-items-center">
        <a class="btn-getstarted it-glow" href="#about" data-vi="Khám phá" data-en="Discover">${d}</a>
        <a class="btn-cv ms-2 it-glow" href="${n.cvUrl}" download><i class="bi bi-download"></i> <span data-vi="Tải CV" data-en="Download CV">${s}</span></a>
        <div class="lang-switcher ms-3">
          <button id="lang-toggle" class="btn btn-sm btn-outline-light">
            <span class="lang-text">${g}</span>
          </button>
        </div>
      </div>

    </div>
  `}function R(n,t,e){const i=e==="vi",a=i?"Xin chào, Tôi là "+n.name:"Hi, I'm "+n.name,o=i?"Tôi là ":"I am a ",l=t.map(r=>`
    <a href="${r.url}" target="_blank" class="it-glow"><i class="bi ${r.icon}"></i></a>
  `).join("");return`
    <img src="assets/img/profile/add.jpg" alt="" data-aos="fade-in">

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center">
          <h2 data-vi="Xin chào, Tôi là Hồ Văn Tiết" data-en="Hi, I'm Ho Van Tiet">${a}</h2>
          <p><span data-vi="Tôi là " data-en="I am a ">${o}</span><span class="typed" data-typed-items="${n.role}"></span><span class="typed-cursor" aria-hidden="true"></span></p>
          <div class="social-links">
            ${l}
          </div>
        </div>
      </div>
    </div>
  `}function X(n,t){const e=t==="vi",i=e?n.about.title.vi:n.about.title.en,a=e?n.about.intro.vi:n.about.intro.en,o=e?n.about.subtitle.vi:n.about.subtitle.en,l=e?"Dự án":"Projects",r=e?"Năm":"Years",h=e?"Kỹ năng":"Skills",c=e?"Liên hệ":"Contact",d="CV",s=e?"Học tại":"Studying at",g=e?"Định hướng":"Career Path",p=e?"Địa điểm":"Location",u="Email",b=e?"Điện thoại":"Phone",m=e?"Trạng thái":"Status",y=e?n.details.location.vi:n.details.location.en,w=e?n.details.status.vi:n.details.status.en,T=n.about.paragraphs.map(f=>`
    <p data-vi="${f.vi}" data-en="${f.en}">${e?f.vi:f.en}</p>
  `).join("");return`
    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <span class="subtitle" data-vi="Về Tôi" data-en="About Me">${i}</span>
      <p data-vi="${n.about.intro.vi}" data-en="${n.about.intro.en}">${a}</p>
    </div><!-- End Section Title -->

    <div class="container" data-aos="fade-up" data-aos-delay="100">

      <div class="row gy-5">
        <div class="col-lg-4" data-aos="zoom-in" data-aos-delay="150">
          <div class="profile-card">
            <div class="profile-header">
              <div class="profile-avatar">
                <img src="${n.avatar}" class="img-fluid" alt="${n.name}">
                <div class="status-indicator"></div>
              </div>
              <h3>${n.name}</h3>
              <span class="role">${n.role}</span>
              <div class="rating">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-half"></i>
                <span>4.8</span>
              </div>
            </div>

            <div class="profile-stats">
              <div class="stat-item">
                <h4>${n.stats.projects}</h4>
                <p data-vi="Dự án" data-en="Projects">${l}</p>
              </div>
              <div class="stat-item">
                <h4>${n.stats.years}</h4>
                <p data-vi="Năm" data-en="Years">${r}</p>
              </div>
              <div class="stat-item">
                <h4>${n.stats.skills}</h4>
                <p data-vi="Kỹ năng" data-en="Skills">${h}</p>
              </div>
            </div>

            <div class="profile-actions">
              <a href="#contact" class="btn-primary it-glow" data-vi="Liên hệ" data-en="Contact"><i class="bi bi-envelope"></i> ${c}</a>
              <a href="${n.cvUrl}" class="btn-secondary it-glow" download><i class="bi bi-download"></i> ${d}</a>
            </div>

            <div class="social-connect">
              <a href="https://www.linkedin.com/in/ho-van-tiet" target="_blank"><i class="bi bi-linkedin"></i></a>
              <a href="https://github.com/vti0209" target="_blank"><i class="bi bi-github"></i></a>
              <a href="mailto:${n.details.email}"><i class="bi bi-envelope"></i></a>
            </div>
          </div>
        </div>

        <div class="col-lg-8" data-aos="fade-left" data-aos-delay="200">
          <div class="content-wrapper">
            <div class="bio-section">
              <div class="section-tag" data-vi="Về Tôi" data-en="About Me">${i}</div>
              <h2 data-vi="Hãy cùng tìm hiểu!" data-en="Let's find out!">${o}</h2>
              ${T}
            </div>

            <div class="details-grid">
              <div class="detail-item">
                <i class="bi bi-mortarboard"></i>
                <div class="detail-content">
                  <span data-vi="Học tại" data-en="Studying at">${s}</span>
                  <strong>${n.details.studyingAt}</strong>
                </div>
              </div>

              <div class="detail-item">
                <i class="bi bi-laptop"></i>
                <div class="detail-content">
                  <span data-vi="Định hướng" data-en="Career Path">${g}</span>
                  <strong>${n.details.careerPath}</strong>
                </div>
              </div>

              <div class="detail-item">
                <i class="bi bi-geo-alt"></i>
                <div class="detail-content">
                  <span data-vi="Địa điểm" data-en="Location">${p}</span>
                  <strong data-vi="${n.details.location.vi}" data-en="${n.details.location.en}">${y}</strong>
                </div>
              </div>

              <div class="detail-item">
                <i class="bi bi-envelope"></i>
                <div class="detail-content">
                  <span data-vi="Email" data-en="Email">${u}</span>
                  <strong>${n.details.email}</strong>
                </div>
              </div>

              <div class="detail-item">
                <i class="bi bi-phone"></i>
                <div class="detail-content">
                  <span data-vi="Điện thoại" data-en="Phone">${b}</span>
                  <strong>${n.details.phone}</strong>
                </div>
              </div>

              <div class="detail-item">
                <i class="bi bi-calendar-check"></i>
                <div class="detail-content">
                  <span data-vi="Trạng thái" data-en="Status">${m}</span>
                  <strong data-vi="${n.details.status.vi}" data-en="${n.details.status.en}">${w}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  `}function G(n,t){const e=t==="vi",i=e?"Dịch vụ":"Services",a=e?"Những lĩnh vực tôi tập trung phát triển và mong muốn mang lại giá trị tốt nhất cho người dùng.":"Areas I focus on developing and aim to provide the best value to users.",o=e?"Sẵn sàng cho những thử thách mới":"Ready for New Challenges",l=e?"Hãy cùng nhau tạo ra những sản phẩm công nghệ tuyệt vời và có giá trị.":"Let's create great and valuable technology products together.",r=e?"Hợp tác ngay":"Partner Now",h=n.services.map(c=>{const d=e?c.title.vi:c.title.en,s=e?c.description.vi:c.description.en,g=e?"Liên hệ":"Contact";return`
      <div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
        <div class="service-item ${c.featured?"featured":""}">
          ${c.featured?`<div class="featured-tag">${e?"Nổi bật":"Featured"}</div>`:""}
          <div class="icon-wrapper">
            <i class="bi ${c.icon}"></i>
          </div>
          <h4 data-vi="${c.title.vi}" data-en="${c.title.en}">${d}</h4>
          <p data-vi="${c.description.vi}" data-en="${c.description.en}">${s}</p>
          <a href="#contact" class="read-more">
            <span data-vi="Liên hệ" data-en="Contact">${g}</span>
            <i class="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    `}).join("");return`
    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <span class="subtitle" data-vi="Dịch vụ" data-en="Services">${i}</span>
      <p data-vi="Những lĩnh vực tôi tập trung phát triển và mong muốn mang lại giá trị tốt nhất cho người dùng." data-en="Areas I focus on developing and aim to provide the best value to users.">${a}</p>
    </div><!-- End Section Title -->

    <div class="container" data-aos="fade-up" data-aos-delay="100">

      <div class="row gy-4">
        ${h}
      </div>

      <div class="row mt-5">
        <div class="col-12" data-aos="fade-up" data-aos-delay="200">
          <div class="cta-box">
            <div class="row align-items-center">
              <div class="col-lg-8">
                <h3 data-vi="Sẵn sàng cho những thử thách mới" data-en="Ready for New Challenges">${o}</h3>
                <p data-vi="Hãy cùng nhau tạo ra những sản phẩm công nghệ tuyệt vời và có giá trị." data-en="Let's create great and valuable technology products together.">${l}</p>
              </div>
              <div class="col-lg-4 text-lg-end text-center">
                <a href="#contact" class="cta-btn" data-vi="Hợp tác ngay" data-en="Partner Now">${r}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  `}function O(n,t){const e=t==="vi",i=e?"Dự án":"Portfolio",a=e?"Dưới đây là một số dự án đã thực hiện trong quá trình học tập và tự học về phát triển website và di động.":"Below are some projects implemented during my studies and self-learning in web and mobile development.",o="Website",l="App",r=e?"Bạn muốn cộng tác cùng tôi?":"Want to collaborate with me?",h=e?"Rất vui được cùng bạn tạo ra những sản phẩm sáng tạo và hữu ích.":"Very glad to create creative and useful products with you.",c=e?"Liên hệ hợp tác":"Contact for Collaboration",d=n.map(s=>{const g=s.getTitle(t),p=s.getCategory(t),u=s.getDescription(t),b=s.tech.map(y=>`<span class="tech-badge">${y}</span>`).join("");let m="";return s.demo&&s.demo!=="#"?s.demo.includes("figma.com")?m=`<a href="${s.demo}" target="_blank" title="Figma"><i class="bi bi-pencil-square"></i></a>`:m=`<a href="${s.demo}" target="_blank" title="Demo"><i class="bi bi-display"></i></a>`:s.github&&s.github!=="#"&&(m=`<a href="${s.github}" target="_blank" title="GitHub"><i class="bi bi-github"></i></a>`),`
      <div class="col-lg-4 col-md-6 portfolio-item isotope-item ${s.category}">
        <div class="portfolio-card">
          <div class="portfolio-image-container">
            <img src="${s.image}" alt="${g}" class="img-fluid" loading="lazy">
            <div class="portfolio-overlay">
              <div class="portfolio-actions">
                <a href="${s.image}" class="glightbox portfolio-link" title="Zoom"><i class="bi bi-zoom-in"></i></a>
                <a href="#" class="portfolio-details" 
                   data-bs-toggle="modal" 
                   data-bs-target="#projectModal" 
                   data-details-id="${s.hasRichDetails?`details-${s.id}`:""}"
                   data-title="${g}" 
                   data-description="${u}"
                   data-tech="${s.tech.join(", ")}"
                   data-github="${s.github}"
                   data-demo="${s.demo}"
                   data-image="${s.image}"
                   title="${e?"Chi tiết":"Details"}">
                  <i class="bi bi-info-circle"></i>
                </a>
                ${m}
              </div>
            </div>
          </div>
          <div class="portfolio-content">
            <span class="project-category" data-vi="${s.categoryVi}" data-en="${s.categoryEn}">${p}</span>
            <h4>${g}</h4>
            <p class="project-description" data-vi="${s.descriptionVi}" data-en="${s.descriptionEn}">${u}</p>
            <div class="project-tech-stack">
              ${b}
            </div>
            <div class="project-footer">
              <span class="project-year">${s.year}</span>
            </div>
          </div>
        </div>
      </div>
    `}).join("");return`
    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <span class="subtitle" data-vi="Dự án" data-en="Portfolio">${i}</span>
      <p data-vi="${a}" data-en="${a}">${a}</p>
    </div><!-- End Section Title -->

    <div class="container" data-aos="fade-up" data-aos-delay="100">

      <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
        <ul class="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="200">
          <li data-filter=".filter-web" class="filter-active" data-vi="Website" data-en="Website">${o}</li>
          <li data-filter=".filter-app" data-vi="App" data-en="App">${l}</li>
        </ul>

        <div class="row gy-3 isotope-container" data-aos="fade-up" data-aos-delay="300">
          ${d}
        </div>

        <div class="portfolio-pagination" id="portfolio-pagination">
          <!-- Pagination will be generated by JS -->
        </div>
      </div>

      <div class="portfolio-bottom" data-aos="fade-up" data-aos-delay="400">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <h3 data-vi="Bạn muốn cộng tác cùng tôi?" data-en="Want to collaborate with me?">${r}</h3>
            <p data-vi="Rất vui được cùng bạn tạo ra những sản phẩm sáng tạo và hữu ích." data-en="Very glad to create creative and useful products with you.">${h}</p>
          </div>
          <div class="col-lg-4 text-lg-end">
            <a href="#contact" class="btn btn-accent" data-vi="Liên hệ hợp tác" data-en="Contact for Collaboration">${c}</a>
          </div>
        </div>
      </div>

    </div>
  `}function W(n,t){const e=t==="vi",i=e?"Học vấn":"Education",a=e?"Học vấn & Bằng cấp":"Education & Diploma",o=e?"Chứng chỉ":"Certificates",l=e?"Chứng chỉ":"Certificates",r=n.education.map(c=>{const d=e?c.descriptionVi:c.descriptionEn;return`
      <div class="timeline-item">
        <div class="timeline-marker">
          <i class="bi bi-mortarboard-fill"></i>
        </div>
        <div class="timeline-content">
          <div class="education-meta">
            <span class="year-range">${c.period}</span>
          </div>
          <h4>${c.degree}</h4>
          <p class="institution">${c.institution}</p>
          <p class="description" data-vi="${c.descriptionVi}" data-en="${c.descriptionEn}">${d}</p>
        </div>
      </div>
    `}).join(""),h=n.certificates.map(c=>`
    <div class="cert-item it-glow">
      <i class="bi bi-patch-check"></i>
      <span>${c.name}</span>
    </div>
  `).join("");return`
    <div class="experience-section">
      <div class="section-header" data-aos="fade-right" data-aos-delay="200">
        <div class="header-content">
          <span class="section-badge" data-vi="Học vấn" data-en="Education">${i}</span>
          <h2 data-vi="Học vấn & Bằng cấp" data-en="Education & Diploma">${a}</h2>
        </div>
      </div>

      <div class="education-timeline" data-aos="fade-up" data-aos-delay="300">
        <div class="timeline-track">
          ${r}
        </div>
      </div>

      <div class="section-header mt-5" data-aos="fade-right" data-aos-delay="200">
        <div class="header-content">
          <span class="section-badge" data-vi="Chứng chỉ" data-en="Certificates">${o}</span>
          <h2 data-vi="Chứng chỉ" data-en="Certificates">${l}</h2>
        </div>
      </div>
      <div class="certificates-list" data-aos="fade-up" data-aos-delay="400">
        ${h}
      </div>
    </div>
  `}function Q(n,t){const e=t==="vi",i=e?"Kỹ năng công nghệ":"Technical Skills",a=e?"Kỹ năng mềm":"Soft Skills",o=e?"Ngôn ngữ":"Languages",l=e?"Sở thích":"Interests",r=n.technical.map(s=>`
    <div class="skill-tag it-glow">${s.getName(t)}</div>
  `).join(""),h=n.soft.map(s=>`
    <div class="skill-tag it-glow" data-vi="${s.nameVi}" data-en="${s.nameEn}">${s.getName(t)}</div>
  `).join(""),c=n.languages.map(s=>`
    <li><i class="bi bi-check2-circle text-primary"></i> <span data-vi="${s.nameVi}" data-en="${s.nameEn}">${s.getName(t)}</span></li>
  `).join(""),d=n.interests.map(s=>`
    <li><i class="bi ${s.icon} text-primary"></i> <span data-vi="${s.nameVi}" data-en="${s.nameEn}">${s.getName(t)}</span></li>
  `).join("");return`
    <div class="skills-section">
      <div class="section-header" data-aos="fade-left" data-aos-delay="200">
        <div class="header-content">
          <span class="section-badge" data-vi="Kỹ năng" data-en="Skills">${e?"Kỹ năng":"Skills"}</span>
          <h2 data-vi="Kỹ năng công nghệ" data-en="Technical Skills">${i}</h2>
        </div>
      </div>

      <div class="skills-grid mt-4">
        ${r}
      </div>

      <div class="section-header mt-5" data-aos="fade-left" data-aos-delay="200">
        <div class="header-content">
          <h2 data-vi="Kỹ năng mềm" data-en="Soft Skills">${a}</h2>
        </div>
      </div>
      <div class="skills-grid mt-4">
        ${h}
      </div>

      <div class="row mt-5">
        <div class="col-md-6">
          <h4 data-vi="Ngôn ngữ" data-en="Languages">${o}</h4>
          <ul class="list-unstyled">
            ${c}
          </ul>
        </div>
        <div class="col-md-6">
          <h4 data-vi="Sở thích" data-en="Interests">${l}</h4>
          <ul class="list-unstyled">
            ${d}
          </ul>
        </div>
      </div>
    </div>
  `}function K(n,t){const e=t==="vi",i=e?"Liên hệ":"Contact",a=e?"Hãy kết nối với Tôi qua các kênh dưới đây. Tôi rất mong được trao đổi và hợp tác với bạn!":"Let's connect through the channels below. I look forward to interacting and collaborating with you!",o=e?"Địa chỉ":"Address",l=e?"Gọi cho Tôi":"Call Me",r="Email",h=e?n.details.location.vi:n.details.location.en,c=e?"Tên của bạn":"Your Name",d=e?"Email của bạn":"Your Email",s=e?"Chủ đề":"Subject",g=e?"Tin nhắn":"Message",p=e?"Đang gửi...":"Sending...",u=e?"Tin nhắn của bạn đã được gửi. Cảm ơn bạn!":"Your message has been sent. Thank you!",b=e?"Gửi tin nhắn":"Send Message";return`
    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <span class="subtitle" data-vi="Liên hệ" data-en="Contact">${i}</span>
      <p data-vi="${a}" data-en="${a}">${a}</p>
    </div><!-- End Section Title -->

    <div class="container">

      <div class="row gy-4">

        <div class="col-lg-4">
          <div class="info-item">
            <div class="icon-wrapper">
              <i class="bi bi-geo-alt"></i>
            </div>
            <div>
              <h3 data-vi="Địa chỉ" data-en="Address">${o}</h3>
              <p data-vi="${n.details.location.vi}" data-en="${n.details.location.en}">${h}</p>
            </div>
          </div>

          <div class="info-item">
            <div class="icon-wrapper">
              <i class="bi bi-telephone"></i>
            </div>
            <div>
              <h3 data-vi="Gọi cho Tôi" data-en="Call Me">${l}</h3>
              <p>${n.details.phone}</p>
            </div>
          </div>

          <div class="info-item">
            <div class="icon-wrapper">
              <i class="bi bi-envelope"></i>
            </div>
            <div>
              <h3 data-vi="Email" data-en="Email">${r}</h3>
              <p>${n.details.email}</p>
            </div>
          </div>

        </div>

        <div class="col-lg-8">
          <form action="forms/contact.php" method="post" class="php-email-form">
            <div class="row gy-4">

              <div class="col-md-6">
                <input type="text" name="name" class="form-control" placeholder="${c}" required="">
              </div>

              <div class="col-md-6">
                <input type="email" class="form-control" name="email" placeholder="${d}" required="">
              </div>

              <div class="col-md-12">
                <input type="text" class="form-control" name="subject" placeholder="${s}" required="">
              </div>

              <div class="col-md-12">
                <textarea class="form-control" name="message" rows="6" placeholder="${g}" required=""></textarea>
              </div>

              <div class="col-md-12 text-center">
                <div class="loading">${p}</div>
                <div class="error-message"></div>
                <div class="sent-message">${u}</div>

                <button type="submit">${b}</button>
              </div>

            </div>
          </form>
        </div>

      </div>

    </div>
  `}function _(n,t,e){const i=e==="vi",l=i?"Portfolio cá nhân của Hồ Văn Tiết - Sinh viên năm hai Công nghệ Thông tin, định hướng Frontend Developer & Business Analyst.":"Personal portfolio of Ho Van Tiet - Software Engineering student, oriented as a Frontend Developer & Business Analyst.",r=i?"Liên kết":"Links",h=i?"Dịch vụ":"Services",c=i?"Thông tin":"Information",d=i?"Trang chủ":"Home",s=i?"Về Tôi":"About",g=i?"Dịch vụ":"Services",p=i?"Dự án":"Projects",u=i?"Liên hệ":"Contact",b=i?"Thiết kế Web":"Web Design",m=i?"Phát triển Frontend":"Frontend Dev",y=i?"Phân tích nghiệp vụ":"Business Analysis",w=i?"Thiết kế UI/UX":"UI/UX Design",T=i?"Phát triển Mobile":"Mobile Dev",f=i?"Bản quyền":"Copyright",v=i?n.details.location.vi:n.details.location.en,M=t.map(A=>`
    <a href="${A.url}" target="_blank"><i class="bi ${A.icon}"></i></a>
  `).join("");return`
    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-5 col-md-12 footer-about">
          <a href="index.html" class="logo d-flex align-items-center">
            <img src="${n.logo}" alt="VTi Logo">
          </a>
          <p>${l}</p>
          <div class="social-links d-flex mt-4">
            ${M}
          </div>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4 data-vi="Liên kết" data-en="Links">${r}</h4>
          <ul>
            <li><a href="#hero" data-vi="Trang chủ" data-en="Home">${d}</a></li>
            <li><a href="#about" data-vi="Về Tôi" data-en="About">${s}</a></li>
            <li><a href="#services" data-vi="Dịch vụ" data-en="Services">${g}</a></li>
            <li><a href="#portfolio" data-vi="Dự án" data-en="Projects">${p}</a></li>
            <li><a href="#contact" data-vi="Liên hệ" data-en="Contact">${u}</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4 data-vi="Dịch vụ" data-en="Services">${h}</h4>
          <ul>
            <li><a href="#" data-vi="Thiết kế Web" data-en="Web Design">${b}</a></li>
            <li><a href="#" data-vi="Phát triển Frontend" data-en="Frontend Dev">${m}</a></li>
            <li><a href="#" data-vi="Phân tích nghiệp vụ" data-en="Business Analysis">${y}</a></li>
            <li><a href="#" data-vi="Thiết kế UI/UX" data-en="UI/UX Design">${w}</a></li>
            <li><a href="#" data-vi="Phát triển Mobile" data-en="Mobile Dev">${T}</a></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          <h4 data-vi="Thông tin" data-en="Information">${c}</h4>
          <p data-vi="${n.details.location.vi}" data-en="${n.details.location.en}">${v}</p>
          <p class="mt-4"><strong>Phone:</strong> <span>${n.details.phone}</span></p>
          <p><strong>Email:</strong> <span>${n.details.email}</span></p>
        </div>

      </div>
    </div>

    <div class="container copyright text-center mt-4">
      <p>© <span data-vi="Bản quyền" data-en="Copyright">${f}</span> <strong class="px-1 sitename">VanTiet</strong> <span>2026 | Information Technology Student</span></p>
      <div class="credits">
        Designed by <a href="https://bootstrapmade.com/">Ho Van Tiet</a> | <a href="https://bootstrapmade.com/tools/">Dev74</a>
      </div>
    </div>
  `}class z{static render(t,e){const{profile:i,projects:a,skills:o,experience:l,socials:r}=t,h=document.getElementById("header");h&&(h.innerHTML=B(i,r,e));const c=document.getElementById("hero");c&&(c.innerHTML=R(i,r,e));const d=document.getElementById("about");d&&(d.innerHTML=X(i,e));const s=document.getElementById("services");s&&(s.innerHTML=G(i,e));const g=document.getElementById("portfolio");g&&(g.innerHTML=O(a,e));const p=document.getElementById("resume");if(p){const m=e==="vi",y=m?"Hành trình":"Journey",w=m?"Tóm tắt quá trình học tập và kỹ năng chuyên môn.":"A summary of my educational background and technical skills.";p.innerHTML=`
        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
          <span class="subtitle" data-vi="Hành trình" data-en="Journey">${y}</span>
          <p data-vi="Tóm tắt quá trình học tập và kỹ năng chuyên môn." data-en="A summary of my educational background and technical skills.">${w}</p>
        </div><!-- End Section Title -->

        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row gy-5">
            <!-- Education/Experience Column -->
            <div id="education-col" class="col-lg-6"></div>
            <!-- Skills Column -->
            <div id="skills-col" class="col-lg-6"></div>
          </div>
        </div>
      `;const T=document.getElementById("education-col");T&&(T.innerHTML=W(l,e));const f=document.getElementById("skills-col");f&&(f.innerHTML=Q(o,e))}const u=document.getElementById("contact");u&&(u.innerHTML=K(i,e));const b=document.getElementById("footer");b&&(b.innerHTML=_(i,r,e))}}function J(n,t){const e=t==="vi",i=n.details;if(!i)return"";const a=e?"Tổng quan dự án":"Project Overview",o=e?i.overview.vi:i.overview.en,l=e?i.targetUsers.titleVi:i.targetUsers.titleEn,r=i.targetUsers.items.map(v=>`
    <li><i class="bi ${v.icon}"></i> ${e?v.vi:v.en}</li>
  `).join(""),h=e?i.keyFeatures.titleVi:i.keyFeatures.titleEn,c=i.keyFeatures.items.map(v=>`
    <li><i class="bi ${v.icon}"></i> ${e?v.vi:v.en}</li>
  `).join(""),d=e?i.userFlow.titleVi:i.userFlow.titleEn,s=e?i.userFlow.flowVi:i.userFlow.flowEn,g=e?i.userFlow.noteVi:i.userFlow.noteEn,p=e?i.uiUxDesign.titleVi:i.uiUxDesign.titleEn,u=i.uiUxDesign.leftItems.map(v=>`
    <li><i class="bi ${v.icon}"></i> ${e?v.vi:v.en}</li>
  `).join(""),b=i.uiUxDesign.rightItems.map(v=>`
    <li><i class="bi ${v.icon}"></i> ${e?v.vi:v.en}</li>
  `).join(""),m=e?"Công cụ sử dụng":"Tools Used",y=i.tools.map(v=>`
    <span class="skill-tag"><i class="bi ${v.icon} me-1"></i> ${v.label}</span>
  `).join(""),w=e?"Xem dự án trên Figma":"View Project on Figma",T=e?"Mở trong Figma":"Open in Figma",f=i.showcaseImages.map(v=>`
    <img src="${v}" class="img-fluid" alt="Project detail"/>
  `).join("");return`
    <div class="project-cs-hero">
      <div class="container">
        <h1 class="heading-primary">${i.title}</h1>
        <div class="mt-4">
          <a href="${n.demo}" class="btn-gradient" target="_blank" rel="noopener">
            <i class="bi bi-box-arrow-up-right me-2"></i> ${i.demoText}
          </a>
        </div>
      </div>
    </div>

    <section class="project-details">
      <div class="main-container">
        <hr>
        <div class="project-showcase">
          ${f}
        </div>
        <hr>
        <div class="row g-4">
          <div class="col-lg-6">
            <div class="info-card h-100">
              <h3 class="section-title"><i class="bi bi-stars me-2" style="color:#e65c1e;"></i> ${a}</h3>
              <p class="text-secondary">${o}</p>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="info-card h-100">
              <h3 class="section-title"><i class="bi bi-people me-2" style="color:#e65c1e;"></i> ${l}</h3>
              <ul class="feature-list">
                ${r}
              </ul>
            </div>
          </div>

          <div class="col-md-6">
            <div class="info-card h-100">
              <h3 class="section-title"><i class="bi bi-gear-wide-connected me-2"></i> ${h}</h3>
              <ul class="feature-list">
                ${c}
              </ul>
            </div>
          </div>

          <div class="col-md-6">
            <div class="info-card h-100">
              <h3 class="section-title"><i class="bi bi-arrow-repeat me-2"></i> ${d}</h3>
              <p class="text-secondary fw-semibold">${s}</p>
              <p class="text-secondary mt-2 mb-0">${g}</p>
            </div>
          </div>

          <div class="col-12">
            <div class="info-card">
              <h3 class="section-title"><i class="bi bi-brush me-2"></i> ${p}</h3>
              <div class="row">
                <div class="col-md-6">
                  <ul class="feature-list">
                    ${u}
                  </ul>
                </div>
                <div class="col-md-6">
                  <ul class="feature-list">
                    ${b}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="info-card">
              <h3 class="section-title"><i class="bi bi-tools me-2"></i> ${m}</h3>
              <div class="d-flex flex-wrap gap-2 mt-2">
                ${y}
              </div>
            </div>
          </div>

          <div class="col-12 text-center mt-4">
            <div class="info-card d-inline-block w-auto mx-auto" style="background: transparent; box-shadow: none; border: none;">
              <h3 class="section-title" style="text-align:center;"><i class="bi bi-rocket-takeoff-fill me-2"></i> ${w}</h3>
              <a href="${n.demo}" class="btn-outline-dark-custom mt-2" target="_blank" rel="noopener">
                <i class="bi bi-figma fs-5"></i> ${T}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function Y(n,t){const e=t==="vi",i=e?"Công nghệ sử dụng:":"Technologies used:",a="GitHub Repository",o="Live Demo / Figma",l=n.tech.map(c=>`<span class="tech-badge">${c}</span>`).join(""),r=n.github&&n.github!=="#"?`<a href="${n.github}" target="_blank" class="btn btn-github mb-2 w-100"><i class="bi bi-github me-2"></i> ${a}</a>`:"",h=n.demo&&n.demo!=="#"?`<a href="${n.demo}" target="_blank" class="btn btn-demo mb-2 w-100"><i class="bi bi-display me-2"></i> ${o}</a>`:"";return`
    <div class="row gy-4">
      <div class="col-lg-7">
        <div class="modal-img-container">
          <img src="${n.image}" id="modalImage" class="img-fluid rounded" alt="${n.getTitle(t)}" style="width:100%; height:auto; object-fit:cover;">
        </div>
      </div>
      <div class="col-lg-5">
        <div class="project-info-box">
          <h3 id="modalTitle" class="mb-3" style="color: var(--heading-color); font-weight:700;">${n.getTitle(t)}</h3>
          <p id="modalDescription" class="mb-4" style="color: var(--default-color); opacity: 0.8;">${n.getDescription(t)}</p>
          <div class="info-list mb-4">
            <div class="info-item mb-3">
              <strong class="d-block mb-2 text-white-50">${i}</strong>
              <div id="modalTech" class="project-tech-stack">${l}</div>
            </div>
          </div>
          <div class="project-links pt-3 border-top border-secondary">
            ${r}
            ${h}
          </div>
        </div>
      </div>
    </div>
  `}class C{static renderModalContent(t,e,i){if(!t)return;const a=t.querySelector(".modal-body"),o=t.querySelector(".modal-header"),l=t.querySelector(".modal-content"),r=t.querySelector(".modal-dialog");if(!e){a.innerHTML='<p class="text-danger text-center">Project details not found.</p>';return}e.hasRichDetails?(a.innerHTML=J(e,i),o.classList.add("d-none"),l.classList.add("p-0"),r.classList.remove("modal-lg"),r.classList.add("modal-xl")):(o.classList.remove("d-none"),l.classList.remove("p-0"),r.classList.remove("modal-xl"),r.classList.add("modal-lg"),a.innerHTML=Y(e,i))}}function Z(){[".btn-getstarted",".btn-cv",".btn-primary",".btn-secondary",".service-item",".portfolio-card",".social-links a",".skill-tag",".cert-item",".navmenu a"].forEach(t=>{document.querySelectorAll(t).forEach(e=>{e.classList.add("it-glow")})})}function tt(){typeof AOS<"u"&&AOS.init({duration:600,easing:"ease-in-out",once:!0,mirror:!1})}function et(){typeof AOS<"u"&&AOS.refresh()}let L=null;function it(n){if(L&&L.destroy(),document.querySelector(".typed")&&typeof Typed<"u"){const e=n.split(",").map(i=>i.trim());L=new Typed(".typed",{strings:e,loop:!0,typeSpeed:70,backSpeed:40,backDelay:2e3,smartBackspace:!0,cursorChar:"|"})}}function H(){return typeof GLightbox<"u"?GLightbox({selector:".glightbox"}):null}function nt(){function n(){const i=document.querySelector("body"),a=document.querySelector("#header");a&&(!a.classList.contains("scroll-up-sticky")&&!a.classList.contains("sticky-top")&&!a.classList.contains("fixed-top")||(window.scrollY>100?i.classList.add("scrolled"):i.classList.remove("scrolled")))}const t=document.querySelector(".scroll-top");function e(){t&&(window.scrollY>100?t.classList.add("active"):t.classList.remove("active"))}t&&t.addEventListener("click",i=>{i.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",()=>{n(),e()}),n(),e()}function at(){const n=document.querySelector("#preloader");n&&n.remove()}class st{constructor(t){this.lang=t,this.initIsotope=null,this.itemsPerPage=3,this.currentPage=1,this.filteredItems=[],this.currentFilter=".filter-web"}init(){this.setupIsotope(),this.setupModalListener()}setupIsotope(){const t=document.querySelector(".isotope-layout");if(!t)return;const e=t.getAttribute("data-layout")??"masonry",i=t.getAttribute("data-sort")??"original-order",a=t.querySelector(".isotope-container"),o=document.getElementById("portfolio-pagination");if(!a)return;const l=()=>{const h=(this.currentPage-1)*this.itemsPerPage,c=h+this.itemsPerPage;this.initIsotope.arrange({filter:d=>{if(!(this.currentFilter==="*"||d.classList.contains(this.currentFilter.replace(".",""))))return!1;const g=this.filteredItems.indexOf(d);return g>=h&&g<c}}),et()},r=()=>{if(!o)return;o.innerHTML="";const h=Math.ceil(this.filteredItems.length/this.itemsPerPage);if(!(h<=1))for(let c=1;c<=h;c++){const d=document.createElement("button");d.className=`page-btn ${c===this.currentPage?"active":""}`,d.innerText=c,d.addEventListener("click",()=>{this.currentPage=c,l(),r()}),o.appendChild(d)}};typeof imagesLoaded<"u"&&typeof Isotope<"u"&&imagesLoaded(a,()=>{this.initIsotope=new Isotope(a,{itemSelector:".isotope-item",layoutMode:e,filter:this.currentFilter,sortBy:i}),this.filteredItems=this.initIsotope.getFilteredItemElements(),r(),l(),H()}),t.querySelectorAll(".isotope-filters li").forEach(h=>{h.addEventListener("click",()=>{const c=t.querySelector(".isotope-filters .filter-active");c&&c.classList.remove("filter-active"),h.classList.add("filter-active"),this.currentFilter=h.getAttribute("data-filter"),this.currentPage=1,this.initIsotope&&(this.initIsotope.arrange({filter:this.currentFilter}),this.filteredItems=this.initIsotope.getFilteredItemElements(),l(),r())})})}setupModalListener(){const t=document.getElementById("projectModal");t&&t.addEventListener("show.bs.modal",e=>{const i=e.relatedTarget.closest(".portfolio-details");if(!i)return;const a=i.getAttribute("data-details-id");if(a&&a.startsWith("details-")){const o=a.replace("details-",""),l=$.getProjectById(o);C.renderModalContent(t,l,this.lang)}else{const o={title:i.getAttribute("data-title"),image:i.getAttribute("data-image"),github:i.getAttribute("data-github"),demo:i.getAttribute("data-demo"),tech:(i.getAttribute("data-tech")||"").split(",").map(l=>l.trim()),descriptionVi:i.getAttribute("data-description"),descriptionEn:i.getAttribute("data-description"),hasRichDetails:!1,getTitle:function(l){return this.title},getDescription:function(l){return this.descriptionVi}};C.renderModalContent(t,o,this.lang)}})}updateLanguage(t){this.lang=t,this.currentPage=1,this.setupIsotope()}}class ot{constructor(t){this.lang=t}init(){this.setupSkillsAnimation()}setupSkillsAnimation(){const t=document.querySelectorAll(".skills-animation");t.length>0&&typeof Waypoint<"u"&&t.forEach(e=>{new Waypoint({element:e,offset:"80%",handler:function(i){e.querySelectorAll(".progress .progress-bar").forEach(o=>{o.style.width=o.getAttribute("aria-valuenow")+"%"})}})})}updateLanguage(t){this.lang=t}}class ct{constructor(t){this.lang=t}init(){this.setupFormSubmit()}setupFormSubmit(){const t=document.querySelector(".php-email-form");t&&t.addEventListener("submit",e=>{e.preventDefault();const i=t,a=i.getAttribute("action"),o=i.getAttribute("data-recaptcha-site-key");if(!a){this.displayError(i,"The form action property is not set!");return}i.querySelector(".loading").classList.add("d-block"),i.querySelector(".error-message").classList.remove("d-block"),i.querySelector(".sent-message").classList.remove("d-block");const l=new FormData(i);o?typeof grecaptcha<"u"?grecaptcha.ready(()=>{try{grecaptcha.execute(o,{action:"php_email_form_submit"}).then(r=>{l.set("recaptcha-response",r),this.submitForm(i,a,l)})}catch(r){this.displayError(i,r)}}):this.displayError(i,"The reCaptcha javascript API url is not loaded!"):this.submitForm(i,a,l)})}submitForm(t,e,i){fetch(e,{method:"POST",body:i,headers:{"X-Requested-With":"XMLHttpRequest"}}).then(a=>{if(a.ok)return a.text();throw new Error(`${a.status} ${a.statusText} ${a.url}`)}).then(a=>{if(t.querySelector(".loading").classList.remove("d-block"),a.trim()==="OK")t.querySelector(".sent-message").classList.add("d-block"),t.reset();else throw new Error(a||"Form submission failed and no error message returned from: "+e)}).catch(a=>{this.displayError(t,a)})}displayError(t,e){t.querySelector(".loading").classList.remove("d-block"),t.querySelector(".error-message").innerHTML=e,t.querySelector(".error-message").classList.add("d-block")}updateLanguage(t){this.lang=t}}class x{static get(t,e=null){try{const i=localStorage.getItem(t);return i!==null?i:e}catch(i){return console.warn("Storage read error",i),e}}static set(t,e){try{localStorage.setItem(t,e)}catch(i){console.warn("Storage write error",i)}}}const I={LANG:"portfolio-lang"},lt={LANG:"vi"};function E(n){if(!n)return;const t=n.startsWith("#")?n.slice(1):n,e=document.getElementById(t);if(!e)return;const i=document.getElementById("header"),a=i?i.offsetHeight+20:80,o=e.getBoundingClientRect().top+window.scrollY-a;window.scrollTo({top:o,behavior:"smooth"}),document.querySelectorAll("section").forEach(l=>{l.classList.toggle("active-section",l.id===t)}),document.querySelectorAll(".nav-item, .navmenu a").forEach(l=>{const r=l.getAttribute("href");l.classList.toggle("active",r===n)})}function P(n=x.get(I.LANG,lt.LANG)){document.body.innerHTML=j.getSkeletonHTML();const t=$.getProfile(),e=$.getProjects(),i=$.getSkills(),a=$.getExperience(),o=$.getSocials();z.render({profile:t,projects:e,skills:i,experience:a,socials:o},n),at(),Z(),tt(),it(t.role),H(),nt(),new st(n).init(),new ot(n).init(),new ct(n).init();const c=document.getElementById("lang-toggle");c&&c.addEventListener("click",()=>{const d=n==="vi"?"en":"vi";x.set(I.LANG,d),P(d)}),document.querySelectorAll('a[href^="#"]').forEach(d=>{d.addEventListener("click",s=>{const g=d.getAttribute("href");!g||g==="#"||(s.preventDefault(),history.replaceState(null,"",g),E(g))})}),window.addEventListener("hashchange",()=>{E(window.location.hash)}),window.location.hash?setTimeout(()=>E(window.location.hash),120):setTimeout(()=>E("#hero"),120)}P();
