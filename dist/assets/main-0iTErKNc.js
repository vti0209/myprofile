/* empty css             */(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function e(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=e(a);fetch(a.href,s)}})();class j{static getSkeletonHTML(){return`
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
    `}}const q={name:"Hồ Văn Tiết",role:"IT Student & Frontend Developer",avatar:"assets/img/VanTiet.jpg",logo:"assets/img/profile/logo.png",cvUrl:"assets/img/profile/Ho Van Tiet_Front-end Developer Intern_CV.pdf",stats:{projects:"1",years:"2+",skills:"11"},details:{studyingAt:"DNC & PNV",careerPath:"Front-End Developer & IT Business Analyst",location:{vi:"Đà Nẵng, Việt Nam",en:"Da Nang, Vietnam"},email:"tiet.ho27@student.passerellesnumeriques.org",phone:"+84 373 532 152",status:{vi:"Sẵn sàng hợp tác",en:"Ready for collaboration"}},about:{title:{vi:"Về Tôi",en:"About Me"},subtitle:{vi:"Hãy cùng tìm hiểu!",en:"Let's find out!"},intro:{vi:"Chào mừng bạn đến với portfolio của tôi! Nơi chia sẻ những dự án, kinh nghiệm học tập và hành trình phát triển trong lĩnh vực công nghệ.",en:"Welcome to my portfolio! A place where I share my projects, learning experiences, and growth journey in technology."},paragraphs:[{vi:"Tôi là sinh viên ngành Kỹ thuật phần mềm, đang học tại Trường Cao đẳng Đà Nẵng (DNC) và Passerelles Numériques Vietnam (PNV).",en:"I am a Software Engineering student at Da Nang College (DNC) and Passerelles Numériques Vietnam (PNV)."},{vi:"Yêu thích xây dựng các trang web đẹp, thân thiện với người dùng và tối ưu hiệu suất. Luôn sẵn sàng học hỏi và thử nghiệm các công nghệ mới để nâng cao kỹ năng lập trình.",en:"I love building beautiful, user-friendly, and high-performance websites. Always ready to learn and experiment with new technologies to enhance my programming skills."}]},services:[{icon:"bi-layout-text-window-reverse",title:{vi:"Phát triển Frontend",en:"Frontend Dev"},description:{vi:"Xây dựng giao diện web hiện đại, tương thích trên mọi thiết bị.",en:"Building modern web interfaces, compatible with all devices."},featured:!1},{icon:"bi-briefcase",title:{vi:"Phân tích nghiệp vụ",en:"Business Analyst"},description:{vi:"Phân tích nghiệp vụ, tối ưu hóa quy trình và giải pháp công nghệ.",en:"Business analysis, optimizing processes and technology solutions."},featured:!0},{icon:"bi-palette",title:{vi:"Thiết kế UI/UX",en:"UI/UX Design"},description:{vi:"Thiết kế trải nghiệm người dùng tinh tế và giao diện bắt mắt với Figma.",en:"Designing sophisticated user experiences and eye-catching interfaces with Figma."},featured:!1},{icon:"bi-phone",title:{vi:"Thiết kế Di động",en:"Mobile Design"},description:{vi:"Thiết kế và phát triển ứng dụng di động thân thiện, dễ sử dụng.",en:"Designing and developing friendly, easy-to-use mobile applications."},featured:!1}]},C=[{id:"nongsannuirung",title:"Nông sản núi rừng",category:"filter-web",image:"assets/img/portfolio/nongsannuirung.svg",github:"https://github.com/vti0209/dacsannuirungweb.git",demo:"https://github.com/vti0209/dacsannuirungweb.git",tech:["PHP","MySQL","React","Tailwind"],year:2025,categoryVi:"Thương mại điện tử",categoryEn:"E-Commerce",titleVi:"Nông Sản Núi Rừng & Thảo Dược Quý",titleEn:"Mountain Specialties & Herbs E-Commerce",descriptionVi:"Hệ thống cửa hàng thương mại điện tử chuyên cung cấp sản vật thiên nhiên, đặc sản vùng miền và thảo dược quý Tây Bắc & Tây Nguyên.",descriptionEn:"An e-commerce platform specialized in natural products, regional specialties, and precious herbs from Northwest and Central Highlands regions.",hasRichDetails:!0,details:{title:"Nông Sản Núi Rừng & Thảo Dược Quý",demoText:"Xem dự án trên GitHub",showcaseImages:["assets/img/portfolio/nongsannuirung.svg","assets/img/portfolio/nongsannuirung.svg","assets/img/portfolio/nongsannuirung.svg"],overview:{vi:"<strong>Nông Sản Núi Rừng & Thảo Dược Quý</strong> là hệ thống thương mại điện tử chuyên về sản vật thiên nhiên, đặc sản vùng miền và thảo dược quý. Dự án được xây dựng theo kiến trúc tách biệt giữa Backend API và Frontend SPA, mang lại hiệu năng cao, trải nghiệm hiện đại và bảo mật tốt.",en:"<strong>Mountain Specialties & Herbs E-Commerce</strong> is an e-commerce system focused on natural products, regional specialties, and precious herbs. The project is built with a separated Backend API and Frontend SPA architecture, delivering high performance, modern UX, and strong security."},targetUsers:{titleVi:"Đối tượng người dùng",titleEn:"Target Users",items:[{icon:"bi-tree-fill",vi:"Khách hàng quan tâm đến sản phẩm tự nhiên, đặc sản và thảo dược",en:"Customers interested in natural products, specialties, and herbs"},{icon:"bi-shop-window",vi:"Cửa hàng và doanh nghiệp bán hàng trực tuyến",en:"Stores and businesses selling online"},{icon:"bi-shield-lock-fill",vi:"Quản trị viên cần hệ thống quản lý sản phẩm, đơn hàng và người dùng",en:"Administrators managing products, orders, and users"}]},keyFeatures:{titleVi:"Tính năng chính",titleEn:"Key Features",items:[{icon:"bi-key-fill",vi:"Xác thực bằng Bearer Token và phân quyền Admin",en:"Bearer Token authentication and Admin authorization"},{icon:"bi-box-seam",vi:"Quản lý danh mục, sản phẩm, đơn hàng và đánh giá",en:"Manage categories, products, orders, and reviews"},{icon:"bi-search-heart-fill",vi:"Tìm kiếm và lọc sản phẩm theo danh mục",en:"Search and filter products by category"},{icon:"bi-cart-fill",vi:"Giỏ hàng và quy trình đặt hàng thông minh",en:"Cart and smart checkout flow"},{icon:"bi-image-fill",vi:"Tải ảnh sản phẩm lên server cục bộ",en:"Upload product images to local server"},{icon:"bi-speedometer2",vi:"Frontend React SPA nhanh, tối ưu và hiện đại",en:"Fast, optimized, and modern React SPA frontend"}]},userFlow:{titleVi:"Luồng người dùng",titleEn:"User Flow",flowVi:"Mở trang → Tìm sản phẩm → Xem chi tiết → Thêm vào giỏ → Đặt hàng → Theo dõi đơn hàng",flowEn:"Open store → Search product → View details → Add to cart → Place order → Track order",noteVi:"— Hệ thống được thiết kế để khách hàng có trải nghiệm mua sắm mượt mà, rõ ràng và tin cậy.",noteEn:"— The system is designed to provide a smooth, clear, and reliable shopping experience."},uiUxDesign:{titleVi:"Thiết kế giao diện & UI/UX",titleEn:"Interface Design & UI/UX",leftItems:[{icon:"bi-tree",vi:"Chủ đạo tone xanh rừng sâu và màu hổ phách ấm áp",en:"Dominant deep forest green and warm amber tones"},{icon:"bi-grid-3x3-gap-fill",vi:"Bố cục rõ ràng cho storefront và admin dashboard",en:"Clear layout for storefront and admin dashboard"},{icon:"bi-phone",vi:"Tối ưu trải nghiệm trên cả desktop và mobile",en:"Optimized experience on both desktop and mobile"}],rightItems:[{icon:"bi-type",vi:"Typography rõ ràng, hiện đại và dễ đọc",en:"Clear, modern, and readable typography"},{icon:"bi-palette-fill",vi:"Thiết kế mang cảm giác tự nhiên, cao cấp và sang trọng",en:"Design feels natural, premium, and elegant"},{icon:"bi-magic",vi:"Tích hợp trải nghiệm dùng thử và tương tác mượt mà",en:"Smooth interactions and polished user experience"}]},tools:[{icon:"bi-php",label:"PHP MVC"},{icon:"bi-database-fill",label:"MySQL / PDO"},{icon:"bi-react",label:"React + Vite"},{icon:"bi-tailwind",label:"Tailwind CSS"},{icon:"bi-shield-lock-fill",label:"JWT Auth"}]}},{id:"vtschool",title:"vTSchool",category:"filter-web",image:"assets/img/portfolio/nongsannuirung.svg",github:"https://github.com/vti0209/vTSchool-AI-Career-Guidance.git",demo:"https://github.com/vti0209/vTSchool-AI-Career-Guidance.git",tech:["Laravel","PHP","MySQL","Tailwind","Vite"],year:2025,categoryVi:"AI & Giáo dục",categoryEn:"AI & Education",titleVi:"vTSchool - Nền tảng AI tư vấn hướng nghiệp",titleEn:"vTSchool - AI Career Guidance Platform",descriptionVi:"Nền tảng web hiện đại giúp học sinh THPT tra cứu ngành học, so sánh trường đại học và nhận tư vấn nghề nghiệp bằng AI.",descriptionEn:"A modern web platform helping high school students explore majors, compare universities, and receive AI-powered career guidance.",hasRichDetails:!0,details:{title:"vTSchool - AI Career Guidance Platform",demoText:"Xem dự án trên GitHub",showcaseImages:["assets/img/portfolio/nongsannuirung.svg","assets/img/portfolio/nongsannuirung.svg","assets/img/portfolio/nongsannuirung.svg"],overview:{vi:"<strong>vTSchool</strong> là nền tảng AI tư vấn hướng nghiệp và chọn trường đại học được xây dựng bằng Laravel 12, Tailwind CSS v4 và Vite. Hệ thống giúp học sinh định hướng nghề nghiệp dựa trên điểm thi THPT, sở thích cá nhân và dữ liệu ngành học, trường học tại Việt Nam.",en:"<strong>vTSchool</strong> is an AI-powered career guidance and university selection platform built with Laravel 12, Tailwind CSS v4, and Vite. It helps students choose career paths based on exam scores, personal interests, and detailed major/university data in Vietnam."},targetUsers:{titleVi:"Đối tượng người dùng",titleEn:"Target Users",items:[{icon:"bi-mortarboard-fill",vi:"Học sinh THPT đang phân vân nghề nghiệp và trường học",en:"High school students unsure about careers and universities"},{icon:"bi-person-badge-fill",vi:"Phụ huynh và cố vấn cần công cụ hỗ trợ định hướng",en:"Parents and counselors seeking guidance tools"},{icon:"bi-shield-lock-fill",vi:"Quản trị viên muốn quản lý dữ liệu ngành, trường và phiên tư vấn AI",en:"Administrators managing majors, universities, and AI consultation sessions"}]},keyFeatures:{titleVi:"Tính năng chính",titleEn:"Key Features",items:[{icon:"bi-chat-dots-fill",vi:"AI Chat Advisor tư vấn nghề nghiệp và chọn trường theo ngữ cảnh",en:"AI Chat Advisor for career and university recommendations"},{icon:"bi-book-half",vi:"Quản lý ngành học với thông tin lương, tỷ lệ việc làm và trường tốt",en:"Manage majors with salary, employability, and top university data"},{icon:"bi-buildings-fill",vi:"Thư mục trường đại học với điểm chuẩn, học phí và thông tin chi tiết",en:"University directory with entrance scores, tuition, and detailed info"},{icon:"bi-graph-up-arrow",vi:"Dashboard quản trị thống kê người dùng, ngành học và phiên tư vấn",en:"Admin dashboard with user, major, and consultation statistics"},{icon:"bi-translate",vi:"Hỗ trợ đa ngôn ngữ Tiếng Việt và Tiếng Anh",en:"Supports Vietnamese and English multilingual experience"},{icon:"bi-stars",vi:"Giao diện hiện đại theo phong cách dark mode và glassmorphism",en:"Modern UI with dark mode and glassmorphism style"}]},userFlow:{titleVi:"Luồng người dùng",titleEn:"User Flow",flowVi:"Đăng nhập → Nhập thông tin → Nhận tư vấn AI → Xem ngành & trường → Lên lộ trình học tập",flowEn:"Login → Enter information → Receive AI guidance → View majors & universities → Build study plan",noteVi:"— Quy trình được thiết kế để học sinh có thể hiểu rõ và đưa ra quyết định nhanh hơn.",noteEn:"— The flow is designed to help students understand options and make decisions more confidently."},uiUxDesign:{titleVi:"Thiết kế giao diện & UI/UX",titleEn:"Interface Design & UI/UX",leftItems:[{icon:"bi-brightness-high",vi:"Giao diện tối và kính trong suốt tạo cảm giác hiện đại",en:"Dark and glassy interface for a futuristic look"},{icon:"bi-grid-3x3-gap-fill",vi:"Bố cục rõ ràng cho chat, trường học và ngành học",en:"Clear layout for chat, universities, and majors"},{icon:"bi-phone",vi:"Tối ưu trải nghiệm trên cả desktop và mobile",en:"Optimized experience on desktop and mobile"}],rightItems:[{icon:"bi-type",vi:"Typography rõ ràng và dễ đọc, phù hợp học sinh",en:"Readable and student-friendly typography"},{icon:"bi-palette-fill",vi:"Màu sắc hiện đại, nhẹ nhàng và công nghệ cao",en:"Modern, calm, and tech-inspired palettes"},{icon:"bi-magic",vi:"Hiệu ứng mượt mà, cảm giác tương tác cao",en:"Smooth animations and polished interactions"}]},tools:[{icon:"bi-laravel",label:"Laravel 12"},{icon:"bi-database-fill",label:"MySQL / SQLite"},{icon:"bi-bootstrap-reboot",label:"Tailwind CSS v4"},{icon:"bi-cpu",label:"Vite 7"},{icon:"bi-chat-dots-fill",label:"AI Advisor"}]}},{id:"tvd",title:"TVD",category:"filter-web",image:"assets/img/portfolio/nongsannuirung.svg",github:"https://github.com/vti0209/tvd-course-management.git",demo:"https://github.com/vti0209/tvd-course-management.git",tech:["Laravel","PHP","MySQL","Bootstrap","Eloquent"],year:2025,categoryVi:"Hệ thống quản lý khóa học",categoryEn:"Course Management System",titleVi:"TVD - Hệ thống quản lý khóa học trực tuyến",titleEn:"TVD - Online Course Management System",descriptionVi:"Hệ thống quản lý khóa học trực tuyến cho phép người dùng đăng ký tài khoản, đăng ký khóa học, theo dõi tiến trình và quản trị viên quản lý dữ liệu khóa học và người dùng.",descriptionEn:"An online course management system that allows users to sign up, enroll in courses, track learning progress, and lets administrators manage courses and users.",hasRichDetails:!0,details:{title:"TVD - Online Course Management System",demoText:"Xem dự án trên GitHub",showcaseImages:["assets/img/portfolio/nongsannuirung.svg","assets/img/portfolio/nongsannuirung.svg","assets/img/portfolio/nongsannuirung.svg"],overview:{vi:"<strong>TVD</strong> là hệ thống quản lý khóa học trực tuyến được xây dựng theo mô hình MVC bằng Laravel. Dự án hỗ trợ các vai trò người dùng và quản trị viên, cho phép đăng ký khóa học, quản lý khóa học, quản lý người dùng và thống kê dữ liệu một cách rõ ràng.",en:"<strong>TVD</strong> is an online course management system built with Laravel following the MVC architecture. It supports user and admin roles, course enrollment, course/user management, and clear data statistics."},targetUsers:{titleVi:"Đối tượng người dùng",titleEn:"Target Users",items:[{icon:"bi-people-fill",vi:"Học viên cần đăng ký và theo dõi khóa học trực tuyến",en:"Learners who want to register and track online courses"},{icon:"bi-person-badge-fill",vi:"Quản trị viên hỗ trợ quản lý khóa học và người dùng",en:"Administrators managing courses and users"},{icon:"bi-mortarboard-fill",vi:"Đơn vị giáo dục hoặc trung tâm đào tạo cần hệ thống học trực tuyến",en:"Educational institutions or training centers needing an online learning system"}]},keyFeatures:{titleVi:"Tính năng chính",titleEn:"Key Features",items:[{icon:"bi-person-plus-fill",vi:"Đăng ký tài khoản, đăng nhập và phân quyền User/Admin",en:"Register accounts, login, and manage User/Admin roles"},{icon:"bi-book-half",vi:"Xem danh sách khóa học, tìm kiếm, lọc và xem chi tiết",en:"Browse courses, search, filter, and view details"},{icon:"bi-journal-check",vi:"Đăng ký khóa học và xem khóa học đã đăng ký",en:"Enroll in courses and view enrolled courses"},{icon:"bi-graph-up-arrow",vi:"Dashboard thống kê số lượng người dùng và khóa học",en:"Dashboard with user and course statistics"},{icon:"bi-tools",vi:"Quản trị khóa học và người dùng bằng CRUD",en:"Manage courses and users through CRUD"},{icon:"bi-file-earmark-richtext",vi:"Hỗ trợ phân trang, lọc danh mục và tìm kiếm dữ liệu",en:"Support pagination, category filters, and search"}]},userFlow:{titleVi:"Luồng người dùng",titleEn:"User Flow",flowVi:"Đăng nhập → Xem khóa học → Đăng ký khóa học → Quản lý hồ sơ → Theo dõi các khóa đã tham gia",flowEn:"Login → Browse courses → Enroll → Manage profile → Track enrolled courses",noteVi:"— Mô hình được thiết kế để vừa thân thiện với người dùng vừa dễ mở rộng cho quản trị viên.",noteEn:"— The system is designed to be user-friendly while remaining easy to expand for administrators."},uiUxDesign:{titleVi:"Thiết kế giao diện & UI/UX",titleEn:"Interface Design & UI/UX",leftItems:[{icon:"bi-layout-text-window",vi:"Trang chủ, profile và my courses được thiết kế rõ ràng",en:"Home, profile, and my courses are laid out clearly"},{icon:"bi-grid-3x3-gap-fill",vi:"Bố cục phù hợp cho danh sách khóa học và form đăng ký",en:"Layout suited to course lists and enrollment forms"},{icon:"bi-phone",vi:"Tối ưu cho trải nghiệm người dùng trên màn hình web",en:"Optimized for web-based user experience"}],rightItems:[{icon:"bi-type",vi:"Typography rõ ràng và dễ đọc cho nội dung khóa học",en:"Clear, readable typography for course content"},{icon:"bi-palette-fill",vi:"Giao diện hiện đại với màu sắc hài hòa và dễ nhìn",en:"Modern interface with harmonious and readable colors"},{icon:"bi-magic",vi:"Tạo trải nghiệm học tập trực tuyến mượt mà và chuyên nghiệp",en:"Creates a smooth and professional online learning experience"}]},tools:[{icon:"bi-laravel",label:"Laravel MVC"},{icon:"bi-database-fill",label:"MySQL"},{icon:"bi-bootstrap",label:"Bootstrap / CSS"},{icon:"bi-code-square",label:"JavaScript"},{icon:"bi-person-gear",label:"Laravel Auth"}]}}],k={technical:[{name:"HTML"},{name:"CSS"},{name:"JavaScript"},{name:"PHP"},{name:"MySQL"},{name:"Bootstrap"},{name:"Figma"},{name:"Jira"}],soft:[{vi:"Làm việc nhóm",en:"Teamwork"},{vi:"Quản lý thời gian",en:"Time management"},{vi:"Nghiên cứu",en:"Research"},{vi:"Giao tiếp",en:"Communication"},{vi:"Thuyết trình",en:"Presentation"}],languages:[{vi:"Tiếng Anh",en:"English"},{vi:"Tiếng Việt",en:"Vietnamese"}],interests:[{vi:"Nhiếp ảnh",en:"Photography",icon:"bi-camera"},{vi:"Nhiên cứu",en:"Online research",icon:"bi-search"}]},N={education:[{period:"Oct 2024 - Oct 2027",degree:"Diploma In Software Engineering",institution:"Passerelles Numériques Vietnam - Da Nang College",descriptionVi:"Đào tạo chuyên sâu về lập trình, thiết kế hệ thống và kỹ năng CNTT chuyên nghiệp.",descriptionEn:"Intensive training in programming, system design, and professional IT skills."}],certificates:[{name:"Critical Thinking Skills for the Professional"},{name:"Foundations of User Experience (UX) Design"}]},F=[{platform:"github",url:"https://github.com/vti0209",icon:"bi-github"},{platform:"linkedin",url:"https://www.linkedin.com/in/ho-van-tiet-544132343/",icon:"bi-linkedin"},{platform:"facebook",url:"https://www.facebook.com/Vti02092006",icon:"bi-facebook"}];class D{constructor(t){this.id=t.id||"",this.title=t.title||"",this.category=t.category||"",this.image=t.image||"",this.github=t.github||"#",this.demo=t.demo||"#",this.tech=Array.isArray(t.tech)?t.tech:[],this.year=t.year||new Date().getFullYear(),this.categoryVi=t.categoryVi||"",this.categoryEn=t.categoryEn||"",this.titleVi=t.titleVi||this.title,this.titleEn=t.titleEn||this.title,this.descriptionVi=t.descriptionVi||"",this.descriptionEn=t.descriptionEn||"",this.hasRichDetails=!!t.hasRichDetails,this.details=t.details||null}getCategory(t){return t==="en"?this.categoryEn||this.categoryVi:this.categoryVi||this.categoryEn}getTitle(t){return t==="en"?this.titleEn:this.titleVi}getDescription(t){return t==="en"?this.descriptionEn:this.descriptionVi}}class S{constructor(t){this.nameVi=t.vi||t.name||"",this.nameEn=t.en||t.name||"",this.icon=t.icon||null}getName(t){return t==="en"?this.nameEn:this.nameVi}}class U{constructor(t){this.platform=t.platform||"",this.url=t.url||"",this.icon=t.icon||`bi-${t.platform}`}}class w{static getProfile(){return q}static getProjects(){return C.map(t=>new D(t))}static getProjectById(t){const e=C.find(i=>i.id===t);return e?new D(e):null}static getSkills(){return{technical:k.technical.map(t=>new S(t)),soft:k.soft.map(t=>new S(t)),languages:k.languages.map(t=>new S(t)),interests:k.interests.map(t=>new S(t))}}static getExperience(){return N}static getSocials(){return F.map(t=>new U(t))}}function B(n,t,e){const i=e==="vi",a=i?"Trang chủ":"Home",s=i?"Về Tôi":"About",c=i?"Hành trình":"Journey",l=i?"Dịch vụ":"Services",g=i?"Dự án":"Projects",o=i?"Liên hệ":"Contact",d=i?"Khám phá":"Discover",h=i?"Tải CV":"Download CV",v=i?"EN":"VI";return`
    <div class="container-fluid container-xl position-relative d-flex align-items-center">

      <a href="index.html" class="logo d-flex align-items-center me-auto">
        <img src="${n.logo}" alt="VTi Logo">
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><a href="#hero" class="active" data-vi="Trang chủ" data-en="Home">${a}</a></li>
          <li><a href="#about" data-vi="Về Tôi" data-en="About">${s}</a></li>
          <li><a href="#resume" data-vi="Hành trình" data-en="Journey">${c}</a></li>
          <li><a href="#services" data-vi="Dịch vụ" data-en="Services">${l}</a></li>
          <li><a href="#portfolio" data-vi="Dự án" data-en="Projects">${g}</a></li>
          <li><a href="#contact" data-vi="Liên hệ" data-en="Contact">${o}</a></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <div class="header-actions d-flex align-items-center">
        <a class="btn-getstarted it-glow" href="#about" data-vi="Khám phá" data-en="Discover">${d}</a>
        <a class="btn-cv ms-2 it-glow" href="${n.cvUrl}" download><i class="bi bi-download"></i> <span data-vi="Tải CV" data-en="Download CV">${h}</span></a>
        <div class="lang-switcher ms-3">
          <button id="lang-toggle" class="btn btn-sm btn-outline-light">
            <span class="lang-text">${v}</span>
          </button>
        </div>
      </div>

    </div>
  `}function R(n,t,e){const i=e==="vi",a=i?"Xin chào, Tôi là "+n.name:"Hi, I'm "+n.name,s=i?"Tôi là ":"I am a ",c=t.map(l=>`
    <a href="${l.url}" target="_blank" class="it-glow"><i class="bi ${l.icon}"></i></a>
  `).join("");return`
    <img src="assets/img/profile/add.jpg" alt="" data-aos="fade-in">

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center">
          <h2 data-vi="Xin chào, Tôi là Hồ Văn Tiết" data-en="Hi, I'm Ho Van Tiet">${a}</h2>
          <p><span data-vi="Tôi là " data-en="I am a ">${s}</span><span class="typed" data-typed-items="${n.role}"></span><span class="typed-cursor" aria-hidden="true"></span></p>
          <div class="social-links">
            ${c}
          </div>
        </div>
      </div>
    </div>
  `}function G(n,t){const e=t==="vi",i=e?n.about.title.vi:n.about.title.en,a=e?n.about.intro.vi:n.about.intro.en,s=e?n.about.subtitle.vi:n.about.subtitle.en,c=e?"Dự án":"Projects",l=e?"Năm":"Years",g=e?"Kỹ năng":"Skills",o=e?"Liên hệ":"Contact",d="CV",h=e?"Học tại":"Studying at",v=e?"Định hướng":"Career Path",r=e?"Địa điểm":"Location",m="Email",p=e?"Điện thoại":"Phone",f=e?"Trạng thái":"Status",$=e?n.details.location.vi:n.details.location.en,b=e?n.details.status.vi:n.details.status.en,T=n.about.paragraphs.map(y=>`
    <p data-vi="${y.vi}" data-en="${y.en}">${e?y.vi:y.en}</p>
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
                <p data-vi="Dự án" data-en="Projects">${c}</p>
              </div>
              <div class="stat-item">
                <h4>${n.stats.years}</h4>
                <p data-vi="Năm" data-en="Years">${l}</p>
              </div>
              <div class="stat-item">
                <h4>${n.stats.skills}</h4>
                <p data-vi="Kỹ năng" data-en="Skills">${g}</p>
              </div>
            </div>

            <div class="profile-actions">
              <a href="#contact" class="btn-primary it-glow" data-vi="Liên hệ" data-en="Contact"><i class="bi bi-envelope"></i> ${o}</a>
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
              <h2 data-vi="Hãy cùng tìm hiểu!" data-en="Let's find out!">${s}</h2>
              ${T}
            </div>

            <div class="details-grid">
              <div class="detail-item">
                <i class="bi bi-mortarboard"></i>
                <div class="detail-content">
                  <span data-vi="Học tại" data-en="Studying at">${h}</span>
                  <strong>${n.details.studyingAt}</strong>
                </div>
              </div>

              <div class="detail-item">
                <i class="bi bi-laptop"></i>
                <div class="detail-content">
                  <span data-vi="Định hướng" data-en="Career Path">${v}</span>
                  <strong>${n.details.careerPath}</strong>
                </div>
              </div>

              <div class="detail-item">
                <i class="bi bi-geo-alt"></i>
                <div class="detail-content">
                  <span data-vi="Địa điểm" data-en="Location">${r}</span>
                  <strong data-vi="${n.details.location.vi}" data-en="${n.details.location.en}">${$}</strong>
                </div>
              </div>

              <div class="detail-item">
                <i class="bi bi-envelope"></i>
                <div class="detail-content">
                  <span data-vi="Email" data-en="Email">${m}</span>
                  <strong>${n.details.email}</strong>
                </div>
              </div>

              <div class="detail-item">
                <i class="bi bi-phone"></i>
                <div class="detail-content">
                  <span data-vi="Điện thoại" data-en="Phone">${p}</span>
                  <strong>${n.details.phone}</strong>
                </div>
              </div>

              <div class="detail-item">
                <i class="bi bi-calendar-check"></i>
                <div class="detail-content">
                  <span data-vi="Trạng thái" data-en="Status">${f}</span>
                  <strong data-vi="${n.details.status.vi}" data-en="${n.details.status.en}">${b}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  `}function X(n,t){const e=t==="vi",i=e?"Dịch vụ":"Services",a=e?"Những lĩnh vực tôi tập trung phát triển và mong muốn mang lại giá trị tốt nhất cho người dùng.":"Areas I focus on developing and aim to provide the best value to users.",s=e?"Sẵn sàng cho những thử thách mới":"Ready for New Challenges",c=e?"Hãy cùng nhau tạo ra những sản phẩm công nghệ tuyệt vời và có giá trị.":"Let's create great and valuable technology products together.",l=e?"Hợp tác ngay":"Partner Now",g=n.services.map(o=>{const d=e?o.title.vi:o.title.en,h=e?o.description.vi:o.description.en,v=e?"Liên hệ":"Contact";return`
      <div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
        <div class="service-item ${o.featured?"featured":""}">
          ${o.featured?`<div class="featured-tag">${e?"Nổi bật":"Featured"}</div>`:""}
          <div class="icon-wrapper">
            <i class="bi ${o.icon}"></i>
          </div>
          <h4 data-vi="${o.title.vi}" data-en="${o.title.en}">${d}</h4>
          <p data-vi="${o.description.vi}" data-en="${o.description.en}">${h}</p>
          <a href="#contact" class="read-more">
            <span data-vi="Liên hệ" data-en="Contact">${v}</span>
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
        ${g}
      </div>

      <div class="row mt-5">
        <div class="col-12" data-aos="fade-up" data-aos-delay="200">
          <div class="cta-box">
            <div class="row align-items-center">
              <div class="col-lg-8">
                <h3 data-vi="Sẵn sàng cho những thử thách mới" data-en="Ready for New Challenges">${s}</h3>
                <p data-vi="Hãy cùng nhau tạo ra những sản phẩm công nghệ tuyệt vời và có giá trị." data-en="Let's create great and valuable technology products together.">${c}</p>
              </div>
              <div class="col-lg-4 text-lg-end text-center">
                <a href="#contact" class="cta-btn" data-vi="Hợp tác ngay" data-en="Partner Now">${l}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  `}function O(n,t){const e=t==="vi",i=e?"Dự án":"Portfolio",a=e?"Dưới đây là một số dự án đã thực hiện trong quá trình học tập và tự học về phát triển website và di động.":"Below are some projects implemented during my studies and self-learning in web and mobile development.",s=e?"Tất cả":"All",c=e?"Thiết kế":"Design",l="Website",g=e?"Nhóm":"Group",o=e?"Bạn muốn cộng tác cùng tôi?":"Want to collaborate with me?",d=e?"Rất vui được cùng bạn tạo ra những sản phẩm sáng tạo và hữu ích.":"Very glad to create creative and useful products with you.",h=e?"Liên hệ hợp tác":"Contact for Collaboration",v=n.map(r=>{const m=r.getTitle(t),p=r.getCategory(t),f=r.getDescription(t),$=r.tech.map(T=>`<span class="tech-badge">${T}</span>`).join("");let b="";return r.demo&&r.demo!=="#"?r.demo.includes("figma.com")?b=`<a href="${r.demo}" target="_blank" title="Figma"><i class="bi bi-pencil-square"></i></a>`:b=`<a href="${r.demo}" target="_blank" title="Demo"><i class="bi bi-display"></i></a>`:r.github&&r.github!=="#"&&(b=`<a href="${r.github}" target="_blank" title="GitHub"><i class="bi bi-github"></i></a>`),`
      <div class="col-lg-4 col-md-6 portfolio-item isotope-item ${r.category}">
        <div class="portfolio-card">
          <div class="portfolio-image-container">
            <img src="${r.image}" alt="${m}" class="img-fluid" loading="lazy">
            <div class="portfolio-overlay">
              <div class="portfolio-actions">
                <a href="${r.image}" class="glightbox portfolio-link" title="Zoom"><i class="bi bi-zoom-in"></i></a>
                <a href="#" class="portfolio-details" 
                   data-bs-toggle="modal" 
                   data-bs-target="#projectModal" 
                   data-details-id="${r.hasRichDetails?`details-${r.id}`:""}"
                   data-title="${m}" 
                   data-description="${f}"
                   data-tech="${r.tech.join(", ")}"
                   data-github="${r.github}"
                   data-demo="${r.demo}"
                   data-image="${r.image}"
                   title="${e?"Chi tiết":"Details"}">
                  <i class="bi bi-info-circle"></i>
                </a>
                ${b}
              </div>
            </div>
          </div>
          <div class="portfolio-content">
            <span class="project-category" data-vi="${r.categoryVi}" data-en="${r.categoryEn}">${p}</span>
            <h4>${m}</h4>
            <p class="project-description" data-vi="${r.descriptionVi}" data-en="${r.descriptionEn}">${f}</p>
            <div class="project-tech-stack">
              ${$}
            </div>
            <div class="project-footer">
              <span class="project-year">${r.year}</span>
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
          <li data-filter="*" class="filter-active" data-vi="Tất cả" data-en="All">${s}</li>
          <li data-filter=".filter-design" data-vi="Thiết kế" data-en="Design">${c}</li>
          <li data-filter=".filter-web" data-vi="Website" data-en="Website">${l}</li>
          <li data-filter=".filter-group" data-vi="Nhóm" data-en="Group">${g}</li>
        </ul>

        <div class="row gy-3 isotope-container" data-aos="fade-up" data-aos-delay="300">
          ${v}
        </div>

        <div class="portfolio-pagination" id="portfolio-pagination">
          <!-- Pagination will be generated by JS -->
        </div>
      </div>

      <div class="portfolio-bottom" data-aos="fade-up" data-aos-delay="400">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <h3 data-vi="Bạn muốn cộng tác cùng tôi?" data-en="Want to collaborate with me?">${o}</h3>
            <p data-vi="Rất vui được cùng bạn tạo ra những sản phẩm sáng tạo và hữu ích." data-en="Very glad to create creative and useful products with you.">${d}</p>
          </div>
          <div class="col-lg-4 text-lg-end">
            <a href="#contact" class="btn btn-accent" data-vi="Liên hệ hợp tác" data-en="Contact for Collaboration">${h}</a>
          </div>
        </div>
      </div>

    </div>
  `}function Q(n,t){const e=t==="vi",i=e?"Học vấn":"Education",a=e?"Học vấn & Bằng cấp":"Education & Diploma",s=e?"Chứng chỉ":"Certificates",c=e?"Chứng chỉ":"Certificates",l=n.education.map(o=>{const d=e?o.descriptionVi:o.descriptionEn;return`
      <div class="timeline-item">
        <div class="timeline-marker">
          <i class="bi bi-mortarboard-fill"></i>
        </div>
        <div class="timeline-content">
          <div class="education-meta">
            <span class="year-range">${o.period}</span>
          </div>
          <h4>${o.degree}</h4>
          <p class="institution">${o.institution}</p>
          <p class="description" data-vi="${o.descriptionVi}" data-en="${o.descriptionEn}">${d}</p>
        </div>
      </div>
    `}).join(""),g=n.certificates.map(o=>`
    <div class="cert-item it-glow">
      <i class="bi bi-patch-check"></i>
      <span>${o.name}</span>
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
          ${l}
        </div>
      </div>

      <div class="section-header mt-5" data-aos="fade-right" data-aos-delay="200">
        <div class="header-content">
          <span class="section-badge" data-vi="Chứng chỉ" data-en="Certificates">${s}</span>
          <h2 data-vi="Chứng chỉ" data-en="Certificates">${c}</h2>
        </div>
      </div>
      <div class="certificates-list" data-aos="fade-up" data-aos-delay="400">
        ${g}
      </div>
    </div>
  `}function W(n,t){const e=t==="vi",i=e?"Kỹ năng công nghệ":"Technical Skills",a=e?"Kỹ năng mềm":"Soft Skills",s=e?"Ngôn ngữ":"Languages",c=e?"Sở thích":"Interests",l=n.technical.map(h=>`
    <div class="skill-tag it-glow">${h.getName(t)}</div>
  `).join(""),g=n.soft.map(h=>`
    <div class="skill-tag it-glow" data-vi="${h.nameVi}" data-en="${h.nameEn}">${h.getName(t)}</div>
  `).join(""),o=n.languages.map(h=>`
    <li><i class="bi bi-check2-circle text-primary"></i> <span data-vi="${h.nameVi}" data-en="${h.nameEn}">${h.getName(t)}</span></li>
  `).join(""),d=n.interests.map(h=>`
    <li><i class="bi ${h.icon} text-primary"></i> <span data-vi="${h.nameVi}" data-en="${h.nameEn}">${h.getName(t)}</span></li>
  `).join("");return`
    <div class="skills-section">
      <div class="section-header" data-aos="fade-left" data-aos-delay="200">
        <div class="header-content">
          <span class="section-badge" data-vi="Kỹ năng" data-en="Skills">${e?"Kỹ năng":"Skills"}</span>
          <h2 data-vi="Kỹ năng công nghệ" data-en="Technical Skills">${i}</h2>
        </div>
      </div>

      <div class="skills-grid mt-4">
        ${l}
      </div>

      <div class="section-header mt-5" data-aos="fade-left" data-aos-delay="200">
        <div class="header-content">
          <h2 data-vi="Kỹ năng mềm" data-en="Soft Skills">${a}</h2>
        </div>
      </div>
      <div class="skills-grid mt-4">
        ${g}
      </div>

      <div class="row mt-5">
        <div class="col-md-6">
          <h4 data-vi="Ngôn ngữ" data-en="Languages">${s}</h4>
          <ul class="list-unstyled">
            ${o}
          </ul>
        </div>
        <div class="col-md-6">
          <h4 data-vi="Sở thích" data-en="Interests">${c}</h4>
          <ul class="list-unstyled">
            ${d}
          </ul>
        </div>
      </div>
    </div>
  `}function K(n,t){const e=t==="vi",i=e?"Liên hệ":"Contact",a=e?"Hãy kết nối với Tôi qua các kênh dưới đây. Tôi rất mong được trao đổi và hợp tác với bạn!":"Let's connect through the channels below. I look forward to interacting and collaborating with you!",s=e?"Địa chỉ":"Address",c=e?"Gọi cho Tôi":"Call Me",l="Email",g=e?n.details.location.vi:n.details.location.en,o=e?"Tên của bạn":"Your Name",d=e?"Email của bạn":"Your Email",h=e?"Chủ đề":"Subject",v=e?"Tin nhắn":"Message",r=e?"Đang gửi...":"Sending...",m=e?"Tin nhắn của bạn đã được gửi. Cảm ơn bạn!":"Your message has been sent. Thank you!",p=e?"Gửi tin nhắn":"Send Message";return`
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
              <h3 data-vi="Địa chỉ" data-en="Address">${s}</h3>
              <p data-vi="${n.details.location.vi}" data-en="${n.details.location.en}">${g}</p>
            </div>
          </div>

          <div class="info-item">
            <div class="icon-wrapper">
              <i class="bi bi-telephone"></i>
            </div>
            <div>
              <h3 data-vi="Gọi cho Tôi" data-en="Call Me">${c}</h3>
              <p>${n.details.phone}</p>
            </div>
          </div>

          <div class="info-item">
            <div class="icon-wrapper">
              <i class="bi bi-envelope"></i>
            </div>
            <div>
              <h3 data-vi="Email" data-en="Email">${l}</h3>
              <p>${n.details.email}</p>
            </div>
          </div>

        </div>

        <div class="col-lg-8">
          <form action="forms/contact.php" method="post" class="php-email-form">
            <div class="row gy-4">

              <div class="col-md-6">
                <input type="text" name="name" class="form-control" placeholder="${o}" required="">
              </div>

              <div class="col-md-6">
                <input type="email" class="form-control" name="email" placeholder="${d}" required="">
              </div>

              <div class="col-md-12">
                <input type="text" class="form-control" name="subject" placeholder="${h}" required="">
              </div>

              <div class="col-md-12">
                <textarea class="form-control" name="message" rows="6" placeholder="${v}" required=""></textarea>
              </div>

              <div class="col-md-12 text-center">
                <div class="loading">${r}</div>
                <div class="error-message"></div>
                <div class="sent-message">${m}</div>

                <button type="submit">${p}</button>
              </div>

            </div>
          </form>
        </div>

      </div>

    </div>
  `}function _(n,t,e){const i=e==="vi",c=i?"Portfolio cá nhân của Hồ Văn Tiết - Sinh viên năm hai Công nghệ Thông tin, định hướng Frontend Developer & Business Analyst.":"Personal portfolio of Ho Van Tiet - Software Engineering student, oriented as a Frontend Developer & Business Analyst.",l=i?"Liên kết":"Links",g=i?"Dịch vụ":"Services",o=i?"Thông tin":"Information",d=i?"Trang chủ":"Home",h=i?"Về Tôi":"About",v=i?"Dịch vụ":"Services",r=i?"Dự án":"Projects",m=i?"Liên hệ":"Contact",p=i?"Thiết kế Web":"Web Design",f=i?"Phát triển Frontend":"Frontend Dev",$=i?"Phân tích nghiệp vụ":"Business Analysis",b=i?"Thiết kế UI/UX":"UI/UX Design",T=i?"Phát triển Mobile":"Mobile Dev",y=i?"Bản quyền":"Copyright",u=i?n.details.location.vi:n.details.location.en,M=t.map(V=>`
    <a href="${V.url}" target="_blank"><i class="bi ${V.icon}"></i></a>
  `).join("");return`
    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-5 col-md-12 footer-about">
          <a href="index.html" class="logo d-flex align-items-center">
            <img src="${n.logo}" alt="VTi Logo">
          </a>
          <p>${c}</p>
          <div class="social-links d-flex mt-4">
            ${M}
          </div>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4 data-vi="Liên kết" data-en="Links">${l}</h4>
          <ul>
            <li><a href="#hero" data-vi="Trang chủ" data-en="Home">${d}</a></li>
            <li><a href="#about" data-vi="Về Tôi" data-en="About">${h}</a></li>
            <li><a href="#services" data-vi="Dịch vụ" data-en="Services">${v}</a></li>
            <li><a href="#portfolio" data-vi="Dự án" data-en="Projects">${r}</a></li>
            <li><a href="#contact" data-vi="Liên hệ" data-en="Contact">${m}</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4 data-vi="Dịch vụ" data-en="Services">${g}</h4>
          <ul>
            <li><a href="#" data-vi="Thiết kế Web" data-en="Web Design">${p}</a></li>
            <li><a href="#" data-vi="Phát triển Frontend" data-en="Frontend Dev">${f}</a></li>
            <li><a href="#" data-vi="Phân tích nghiệp vụ" data-en="Business Analysis">${$}</a></li>
            <li><a href="#" data-vi="Thiết kế UI/UX" data-en="UI/UX Design">${b}</a></li>
            <li><a href="#" data-vi="Phát triển Mobile" data-en="Mobile Dev">${T}</a></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          <h4 data-vi="Thông tin" data-en="Information">${o}</h4>
          <p data-vi="${n.details.location.vi}" data-en="${n.details.location.en}">${u}</p>
          <p class="mt-4"><strong>Phone:</strong> <span>${n.details.phone}</span></p>
          <p><strong>Email:</strong> <span>${n.details.email}</span></p>
        </div>

      </div>
    </div>

    <div class="container copyright text-center mt-4">
      <p>© <span data-vi="Bản quyền" data-en="Copyright">${y}</span> <strong class="px-1 sitename">VanTiet</strong> <span>2026 | Information Technology Student</span></p>
      <div class="credits">
        Designed by <a href="https://bootstrapmade.com/">Ho Van Tiet</a> | <a href="https://bootstrapmade.com/tools/">Dev74</a>
      </div>
    </div>
  `}class Y{static render(t,e){const{profile:i,projects:a,skills:s,experience:c,socials:l}=t,g=document.getElementById("header");g&&(g.innerHTML=B(i,l,e));const o=document.getElementById("hero");o&&(o.innerHTML=R(i,l,e));const d=document.getElementById("about");d&&(d.innerHTML=G(i,e));const h=document.getElementById("services");h&&(h.innerHTML=X(i,e));const v=document.getElementById("portfolio");v&&(v.innerHTML=O(a,e));const r=document.getElementById("resume");if(r){const f=e==="vi",$=f?"Hành trình":"Journey",b=f?"Tóm tắt quá trình học tập và kỹ năng chuyên môn.":"A summary of my educational background and technical skills.";r.innerHTML=`
        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
          <span class="subtitle" data-vi="Hành trình" data-en="Journey">${$}</span>
          <p data-vi="Tóm tắt quá trình học tập và kỹ năng chuyên môn." data-en="A summary of my educational background and technical skills.">${b}</p>
        </div><!-- End Section Title -->

        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row gy-5">
            <!-- Education/Experience Column -->
            <div id="education-col" class="col-lg-6"></div>
            <!-- Skills Column -->
            <div id="skills-col" class="col-lg-6"></div>
          </div>
        </div>
      `;const T=document.getElementById("education-col");T&&(T.innerHTML=Q(c,e));const y=document.getElementById("skills-col");y&&(y.innerHTML=W(s,e))}const m=document.getElementById("contact");m&&(m.innerHTML=K(i,e));const p=document.getElementById("footer");p&&(p.innerHTML=_(i,l,e))}}function z(n,t){const e=t==="vi",i=n.details;if(!i)return"";const a=e?"Tổng quan dự án":"Project Overview",s=e?i.overview.vi:i.overview.en,c=e?i.targetUsers.titleVi:i.targetUsers.titleEn,l=i.targetUsers.items.map(u=>`
    <li><i class="bi ${u.icon}"></i> ${e?u.vi:u.en}</li>
  `).join(""),g=e?i.keyFeatures.titleVi:i.keyFeatures.titleEn,o=i.keyFeatures.items.map(u=>`
    <li><i class="bi ${u.icon}"></i> ${e?u.vi:u.en}</li>
  `).join(""),d=e?i.userFlow.titleVi:i.userFlow.titleEn,h=e?i.userFlow.flowVi:i.userFlow.flowEn,v=e?i.userFlow.noteVi:i.userFlow.noteEn,r=e?i.uiUxDesign.titleVi:i.uiUxDesign.titleEn,m=i.uiUxDesign.leftItems.map(u=>`
    <li><i class="bi ${u.icon}"></i> ${e?u.vi:u.en}</li>
  `).join(""),p=i.uiUxDesign.rightItems.map(u=>`
    <li><i class="bi ${u.icon}"></i> ${e?u.vi:u.en}</li>
  `).join(""),f=e?"Công cụ sử dụng":"Tools Used",$=i.tools.map(u=>`
    <span class="skill-tag"><i class="bi ${u.icon} me-1"></i> ${u.label}</span>
  `).join(""),b=e?"Xem dự án trên Figma":"View Project on Figma",T=e?"Mở trong Figma":"Open in Figma",y=i.showcaseImages.map(u=>`
    <img src="${u}" class="img-fluid" alt="Project detail"/>
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
          ${y}
        </div>
        <hr>
        <div class="row g-4">
          <div class="col-lg-6">
            <div class="info-card h-100">
              <h3 class="section-title"><i class="bi bi-stars me-2" style="color:#e65c1e;"></i> ${a}</h3>
              <p class="text-secondary">${s}</p>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="info-card h-100">
              <h3 class="section-title"><i class="bi bi-people me-2" style="color:#e65c1e;"></i> ${c}</h3>
              <ul class="feature-list">
                ${l}
              </ul>
            </div>
          </div>

          <div class="col-md-6">
            <div class="info-card h-100">
              <h3 class="section-title"><i class="bi bi-gear-wide-connected me-2"></i> ${g}</h3>
              <ul class="feature-list">
                ${o}
              </ul>
            </div>
          </div>

          <div class="col-md-6">
            <div class="info-card h-100">
              <h3 class="section-title"><i class="bi bi-arrow-repeat me-2"></i> ${d}</h3>
              <p class="text-secondary fw-semibold">${h}</p>
              <p class="text-secondary mt-2 mb-0">${v}</p>
            </div>
          </div>

          <div class="col-12">
            <div class="info-card">
              <h3 class="section-title"><i class="bi bi-brush me-2"></i> ${r}</h3>
              <div class="row">
                <div class="col-md-6">
                  <ul class="feature-list">
                    ${m}
                  </ul>
                </div>
                <div class="col-md-6">
                  <ul class="feature-list">
                    ${p}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="info-card">
              <h3 class="section-title"><i class="bi bi-tools me-2"></i> ${f}</h3>
              <div class="d-flex flex-wrap gap-2 mt-2">
                ${$}
              </div>
            </div>
          </div>

          <div class="col-12 text-center mt-4">
            <div class="info-card d-inline-block w-auto mx-auto" style="background: transparent; box-shadow: none; border: none;">
              <h3 class="section-title" style="text-align:center;"><i class="bi bi-rocket-takeoff-fill me-2"></i> ${b}</h3>
              <a href="${n.demo}" class="btn-outline-dark-custom mt-2" target="_blank" rel="noopener">
                <i class="bi bi-figma fs-5"></i> ${T}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function J(n,t){const e=t==="vi",i=e?"Công nghệ sử dụng:":"Technologies used:",a="GitHub Repository",s="Live Demo / Figma",c=n.tech.map(o=>`<span class="tech-badge">${o}</span>`).join(""),l=n.github&&n.github!=="#"?`<a href="${n.github}" target="_blank" class="btn btn-github mb-2 w-100"><i class="bi bi-github me-2"></i> ${a}</a>`:"",g=n.demo&&n.demo!=="#"?`<a href="${n.demo}" target="_blank" class="btn btn-demo mb-2 w-100"><i class="bi bi-display me-2"></i> ${s}</a>`:"";return`
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
              <div id="modalTech" class="project-tech-stack">${c}</div>
            </div>
          </div>
          <div class="project-links pt-3 border-top border-secondary">
            ${l}
            ${g}
          </div>
        </div>
      </div>
    </div>
  `}class A{static renderModalContent(t,e,i){if(!t)return;const a=t.querySelector(".modal-body"),s=t.querySelector(".modal-header"),c=t.querySelector(".modal-content"),l=t.querySelector(".modal-dialog");if(!e){a.innerHTML='<p class="text-danger text-center">Project details not found.</p>';return}e.hasRichDetails?(a.innerHTML=z(e,i),s.classList.add("d-none"),c.classList.add("p-0"),l.classList.remove("modal-lg"),l.classList.add("modal-xl")):(s.classList.remove("d-none"),c.classList.remove("p-0"),l.classList.remove("modal-xl"),l.classList.add("modal-lg"),a.innerHTML=J(e,i))}}function Z(){[".btn-getstarted",".btn-cv",".btn-primary",".btn-secondary",".service-item",".portfolio-card",".social-links a",".skill-tag",".cert-item",".navmenu a"].forEach(t=>{document.querySelectorAll(t).forEach(e=>{e.classList.add("it-glow")})})}function tt(){typeof AOS<"u"&&AOS.init({duration:600,easing:"ease-in-out",once:!0,mirror:!1})}function et(){typeof AOS<"u"&&AOS.refresh()}let E=null;function it(n){if(E&&E.destroy(),document.querySelector(".typed")&&typeof Typed<"u"){const e=n.split(",").map(i=>i.trim());E=new Typed(".typed",{strings:e,loop:!0,typeSpeed:70,backSpeed:40,backDelay:2e3,smartBackspace:!0,cursorChar:"|"})}}function H(){return typeof GLightbox<"u"?GLightbox({selector:".glightbox"}):null}function nt(){function n(){const i=document.querySelector("body"),a=document.querySelector("#header");a&&(!a.classList.contains("scroll-up-sticky")&&!a.classList.contains("sticky-top")&&!a.classList.contains("fixed-top")||(window.scrollY>100?i.classList.add("scrolled"):i.classList.remove("scrolled")))}const t=document.querySelector(".scroll-top");function e(){t&&(window.scrollY>100?t.classList.add("active"):t.classList.remove("active"))}t&&t.addEventListener("click",i=>{i.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",()=>{n(),e()}),n(),e()}function at(){const n=document.querySelector("#preloader");n&&n.remove()}class st{constructor(t){this.lang=t,this.initIsotope=null,this.itemsPerPage=3,this.currentPage=1,this.filteredItems=[],this.currentFilter="*"}init(){this.setupIsotope(),this.setupModalListener()}setupIsotope(){const t=document.querySelector(".isotope-layout");if(!t)return;const e=t.getAttribute("data-layout")??"masonry",i=t.getAttribute("data-sort")??"original-order",a=t.querySelector(".isotope-container"),s=document.getElementById("portfolio-pagination");if(!a)return;const c=()=>{const g=(this.currentPage-1)*this.itemsPerPage,o=g+this.itemsPerPage;this.initIsotope.arrange({filter:d=>{if(!(this.currentFilter==="*"||d.classList.contains(this.currentFilter.replace(".",""))))return!1;const v=this.filteredItems.indexOf(d);return v>=g&&v<o}}),et()},l=()=>{if(!s)return;s.innerHTML="";const g=Math.ceil(this.filteredItems.length/this.itemsPerPage);if(!(g<=1))for(let o=1;o<=g;o++){const d=document.createElement("button");d.className=`page-btn ${o===this.currentPage?"active":""}`,d.innerText=o,d.addEventListener("click",()=>{this.currentPage=o,c(),l()}),s.appendChild(d)}};typeof imagesLoaded<"u"&&typeof Isotope<"u"&&imagesLoaded(a,()=>{this.initIsotope=new Isotope(a,{itemSelector:".isotope-item",layoutMode:e,filter:this.currentFilter,sortBy:i}),this.filteredItems=this.initIsotope.getFilteredItemElements(),l(),c(),H()}),t.querySelectorAll(".isotope-filters li").forEach(g=>{g.addEventListener("click",()=>{const o=t.querySelector(".isotope-filters .filter-active");o&&o.classList.remove("filter-active"),g.classList.add("filter-active"),this.currentFilter=g.getAttribute("data-filter"),this.currentPage=1,this.initIsotope&&(this.initIsotope.arrange({filter:this.currentFilter}),this.filteredItems=this.initIsotope.getFilteredItemElements(),c(),l())})})}setupModalListener(){const t=document.getElementById("projectModal");t&&t.addEventListener("show.bs.modal",e=>{const i=e.relatedTarget.closest(".portfolio-details");if(!i)return;const a=i.getAttribute("data-details-id");if(a&&a.startsWith("details-")){const s=a.replace("details-",""),c=w.getProjectById(s);A.renderModalContent(t,c,this.lang)}else{const s={title:i.getAttribute("data-title"),image:i.getAttribute("data-image"),github:i.getAttribute("data-github"),demo:i.getAttribute("data-demo"),tech:(i.getAttribute("data-tech")||"").split(",").map(c=>c.trim()),descriptionVi:i.getAttribute("data-description"),descriptionEn:i.getAttribute("data-description"),hasRichDetails:!1,getTitle:function(c){return this.title},getDescription:function(c){return this.descriptionVi}};A.renderModalContent(t,s,this.lang)}})}updateLanguage(t){this.lang=t,this.currentPage=1,this.setupIsotope()}}class ot{constructor(t){this.lang=t}init(){this.setupSkillsAnimation()}setupSkillsAnimation(){const t=document.querySelectorAll(".skills-animation");t.length>0&&typeof Waypoint<"u"&&t.forEach(e=>{new Waypoint({element:e,offset:"80%",handler:function(i){e.querySelectorAll(".progress .progress-bar").forEach(s=>{s.style.width=s.getAttribute("aria-valuenow")+"%"})}})})}updateLanguage(t){this.lang=t}}class ct{constructor(t){this.lang=t}init(){this.setupFormSubmit()}setupFormSubmit(){const t=document.querySelector(".php-email-form");t&&t.addEventListener("submit",e=>{e.preventDefault();const i=t,a=i.getAttribute("action"),s=i.getAttribute("data-recaptcha-site-key");if(!a){this.displayError(i,"The form action property is not set!");return}i.querySelector(".loading").classList.add("d-block"),i.querySelector(".error-message").classList.remove("d-block"),i.querySelector(".sent-message").classList.remove("d-block");const c=new FormData(i);s?typeof grecaptcha<"u"?grecaptcha.ready(()=>{try{grecaptcha.execute(s,{action:"php_email_form_submit"}).then(l=>{c.set("recaptcha-response",l),this.submitForm(i,a,c)})}catch(l){this.displayError(i,l)}}):this.displayError(i,"The reCaptcha javascript API url is not loaded!"):this.submitForm(i,a,c)})}submitForm(t,e,i){fetch(e,{method:"POST",body:i,headers:{"X-Requested-With":"XMLHttpRequest"}}).then(a=>{if(a.ok)return a.text();throw new Error(`${a.status} ${a.statusText} ${a.url}`)}).then(a=>{if(t.querySelector(".loading").classList.remove("d-block"),a.trim()==="OK")t.querySelector(".sent-message").classList.add("d-block"),t.reset();else throw new Error(a||"Form submission failed and no error message returned from: "+e)}).catch(a=>{this.displayError(t,a)})}displayError(t,e){t.querySelector(".loading").classList.remove("d-block"),t.querySelector(".error-message").innerHTML=e,t.querySelector(".error-message").classList.add("d-block")}updateLanguage(t){this.lang=t}}class I{static get(t,e=null){try{const i=localStorage.getItem(t);return i!==null?i:e}catch(i){return console.warn("Storage read error",i),e}}static set(t,e){try{localStorage.setItem(t,e)}catch(i){console.warn("Storage write error",i)}}}const x={LANG:"portfolio-lang"},lt={LANG:"vi"};function L(n){if(!n)return;const t=n.startsWith("#")?n.slice(1):n,e=document.getElementById(t);if(!e)return;const i=document.getElementById("header"),a=i?i.offsetHeight+20:80,s=e.getBoundingClientRect().top+window.scrollY-a;window.scrollTo({top:s,behavior:"smooth"}),document.querySelectorAll("section").forEach(c=>{c.classList.toggle("active-section",c.id===t)}),document.querySelectorAll(".nav-item, .navmenu a").forEach(c=>{const l=c.getAttribute("href");c.classList.toggle("active",l===n)})}function P(n=I.get(x.LANG,lt.LANG)){document.body.innerHTML=j.getSkeletonHTML();const t=w.getProfile(),e=w.getProjects(),i=w.getSkills(),a=w.getExperience(),s=w.getSocials();Y.render({profile:t,projects:e,skills:i,experience:a,socials:s},n),at(),Z(),tt(),it(t.role),H(),nt(),new st(n).init(),new ot(n).init(),new ct(n).init();const o=document.getElementById("lang-toggle");o&&o.addEventListener("click",()=>{const d=n==="vi"?"en":"vi";I.set(x.LANG,d),P(d)}),document.querySelectorAll('a[href^="#"]').forEach(d=>{d.addEventListener("click",h=>{const v=d.getAttribute("href");!v||v==="#"||(h.preventDefault(),history.replaceState(null,"",v),L(v))})}),window.addEventListener("hashchange",()=>{L(window.location.hash)}),window.location.hash?setTimeout(()=>L(window.location.hash),120):setTimeout(()=>L("#hero"),120)}P();
