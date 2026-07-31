/* empty css             */(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))e(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&e(c)}).observe(document,{childList:!0,subtree:!0});function i(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(n){if(n.ep)return;n.ep=!0;const s=i(n);fetch(n.href,s)}})();class j{static getSkeletonHTML(){return`
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
    `}}const F={name:"Hồ Văn Tiết",role:"IT Student & Frontend Developer",avatar:"assets/img/VanTiet.jpg",logo:"assets/img/profile/logo.png",cvUrl:"assets/img/profile/Ho Van Tiet_Front-end Developer Intern_CV.pdf",stats:{projects:"3",years:"2+",skills:"11"},details:{studyingAt:"DNC & PNV",careerPath:"Front-End Developer & IT Business Analyst",location:{vi:"Đà Nẵng, Việt Nam",en:"Da Nang, Vietnam"},email:"tiet.ho27@student.passerellesnumeriques.org",phone:"+84 373 532 152",status:{vi:"Sẵn sàng hợp tác",en:"Ready for collaboration"}},about:{title:{vi:"Về Tôi",en:"About Me"},subtitle:{vi:"Hãy cùng tìm hiểu!",en:"Let's find out!"},intro:{vi:"Chào mừng bạn đến với portfolio của tôi! Nơi chia sẻ những dự án, kinh nghiệm học tập và hành trình phát triển trong lĩnh vực công nghệ.",en:"Welcome to my portfolio! A place where I share my projects, learning experiences, and growth journey in technology."},paragraphs:[{vi:"Tôi là sinh viên ngành Kỹ thuật phần mềm, đang học tại Trường Cao đẳng Đà Nẵng (DNC) và Passerelles Numériques Vietnam (PNV).",en:"I am a Software Engineering student at Da Nang College (DNC) and Passerelles Numériques Vietnam (PNV)."},{vi:"Yêu thích xây dựng các trang web đẹp, thân thiện với người dùng và tối ưu hiệu suất. Luôn sẵn sàng học hỏi và thử nghiệm các công nghệ mới để nâng cao kỹ năng lập trình.",en:"I love building beautiful, user-friendly, and high-performance websites. Always ready to learn and experiment with new technologies to enhance my programming skills."}]},services:[{icon:"bi-layout-text-window-reverse",title:{vi:"Phát triển Frontend",en:"Frontend Dev"},description:{vi:"Xây dựng giao diện web hiện đại, tương thích trên mọi thiết bị.",en:"Building modern web interfaces, compatible with all devices."},featured:!1},{icon:"bi-briefcase",title:{vi:"Phân tích nghiệp vụ",en:"Business Analyst"},description:{vi:"Phân tích nghiệp vụ, tối ưu hóa quy trình và giải pháp công nghệ.",en:"Business analysis, optimizing processes and technology solutions."},featured:!0},{icon:"bi-palette",title:{vi:"Thiết kế UI/UX",en:"UI/UX Design"},description:{vi:"Thiết kế trải nghiệm người dùng tinh tế và giao diện bắt mắt với Figma.",en:"Designing sophisticated user experiences and eye-catching interfaces with Figma."},featured:!1},{icon:"bi-phone",title:{vi:"Thiết kế Di động",en:"Mobile Design"},description:{vi:"Thiết kế và phát triển ứng dụng di động thân thiện, dễ sử dụng.",en:"Designing and developing friendly, easy-to-use mobile applications."},featured:!1}]},C=[{id:"digifood",title:"DigiFood App",category:"filter-design",image:"assets/img/portfolio/portfolio-3.png",github:"#",demo:"https://www.figma.com/design/fNqHlXTE24477HqQKE99eH/Food-ordering-app--Ho-Van-Tiet-?m=auto&t=EDQkh37XDP1oo2ZO-1",tech:["Figma","UX/UI"],year:2024,categoryVi:"Thiết kế UI/UX",categoryEn:"UI/UX Design",descriptionVi:"Thiết kế giao diện ứng dụng giao đồ ăn tối ưu hóa trải nghiệm.",descriptionEn:"Food delivery app UI design optimized for experience.",hasRichDetails:!0,details:{title:"DigiFood",demoText:"Live Demo (Figma)",showcaseImages:["assets/img/portfolio/portfolio-3.png","assets/img/portfolio/portfolio-3.png","assets/img/portfolio/portfolio-3.png"],overview:{vi:"<strong>DigiFood</strong> là dự án thiết kế ứng dụng đặt đồ ăn trên nền tảng mobile, được xây dựng bằng Figma. Dự án tập trung tối ưu trải nghiệm người dùng từ lúc mở ứng dụng cho đến khi hoàn tất đơn hàng.<br><br>Mục tiêu chính là tạo ra một quy trình đặt món nhanh, rõ ràng và dễ sử dụng, giúp người dùng tiết kiệm thời gian và thao tác. Giao diện mang phong cách hiện đại, trực quan và tối ưu tương tác.",en:"<strong>DigiFood</strong> is a food ordering mobile app design project built with Figma. The project focuses on optimizing user experience from opening the app to completing the order.<br><br>The main goal is to create a quick, clear, and easy-to-use ordering process, saving users time and effort. The interface is modern, intuitive, and interactive."},targetUsers:{titleVi:"Đối tượng người dùng",titleEn:"Target Users",items:[{icon:"bi-mortarboard-fill",vi:"Sinh viên và người trẻ (18–25 tuổi) yêu thích công nghệ",en:"Students and young people (18–25 years old) who love technology"},{icon:"bi-lightning-charge-fill",vi:"Người bận rộn, cần đặt đồ ăn nhanh chóng, tiện lợi",en:"Busy people who need quick, convenient food ordering"},{icon:"bi-emoji-smile",vi:"Người ưu tiên trải nghiệm đơn giản, dễ hiểu và tối giản",en:"People prioritizing simple, easy-to-understand, and minimalist experiences"}]},keyFeatures:{titleVi:"Chức năng chính",titleEn:"Key Features",items:[{icon:"bi-key-fill",vi:"Đăng nhập & đăng ký tài khoản nhanh chóng",en:"Quick login & registration"},{icon:"bi-house-door-fill",vi:"Trang chủ hiển thị nhà hàng & món ăn gợi ý",en:"Home page displaying recommended restaurants & dishes"},{icon:"bi-search-heart-fill",vi:"Tìm kiếm và lọc món ăn theo danh mục",en:"Search and filter dishes by category"},{icon:"bi-card-text",vi:"Xem chi tiết món ăn, đánh giá và tùy chọn",en:"View dish details, reviews, and options"},{icon:"bi-cart-fill",vi:"Giỏ hàng thông minh, dễ chỉnh sửa số lượng",en:"Smart shopping cart, easy to edit quantities"},{icon:"bi-credit-card-2-front-fill",vi:"Thanh toán đa phương thức, theo dõi đơn hàng real-time",en:"Multi-method payment, real-time order tracking"}]},userFlow:{titleVi:"Luồng người dùng",titleEn:"User Flow",flowVi:"Mở ứng dụng → Đăng nhập → Trang chủ → Chọn món → Thêm vào giỏ → Thanh toán → Theo dõi đơn hàng",flowEn:"Open App → Login → Homepage → Select Dish → Add to Cart → Payment → Track Order",noteVi:"— Mọi thao tác đều được tinh chỉnh để đạt hiệu suất tối đa với số bước tối thiểu, tối ưu trải nghiệm di động.",noteEn:"— Every action is fine-tuned for maximum performance with minimum steps, optimizing mobile experience."},uiUxDesign:{titleVi:"Thiết kế giao diện & UI/UX",titleEn:"Interface Design & UI/UX",leftItems:[{icon:"bi-phone",vi:"Giao diện tối giản, hiện đại, xu hướng 2025",en:"Minimalist, modern interface, 2025 trends"},{icon:"bi-grid-3x3-gap-fill",vi:"Bố cục rõ ràng: tiêu đề – nội dung – điều hướng",en:"Clear layout: heading – content – navigation"},{icon:"bi-hand-index-thumb-fill",vi:"Nút bấm lớn, tối ưu vùng chạm trên mobile",en:"Large buttons, optimized mobile touch zones"}],rightItems:[{icon:"bi-type",vi:"Typography rõ ràng với font Inter, spacing hợp lý",en:"Clear typography with Inter font, proper spacing"},{icon:"bi-palette-fill",vi:"Màu sắc nhất quán: cam ấm áp chủ đạo",en:"Consistent color scheme: warm orange primary"},{icon:"bi-magic",vi:"Micro-interactions & smart animation prototype",en:"Micro-interactions & smart animation prototype"}]},tools:[{icon:"bi-figma",label:"Figma"},{icon:"bi-layout-three-columns",label:"Auto Layout & Components"},{icon:"bi-cpu",label:"Smart Animate"},{icon:"bi-diagram-3",label:"User Flow Mapping"},{icon:"bi-pencil-square",label:"Wireframing & High-fidelity"}]}},{id:"vti-restaurant",title:"VTi Restaurant",category:"filter-web",image:"assets/img/portfolio/portfolio-2.png",github:"https://github.com/vti0209",demo:"#",tech:["HTML","CSS","JS","JSON"],year:2024,categoryVi:"Phát triển Web",categoryEn:"Web Development",titleVi:"Nhà Hàng VTi",titleEn:"VTi Restaurant",descriptionVi:"Website đặt món trực tuyến với menu và giỏ hàng thông minh.",descriptionEn:"Online ordering website with smart menu and shopping cart.",hasRichDetails:!1},{id:"vti-shop",title:"VTi Shop",category:"filter-web",image:"assets/img/portfolio/portfolio-4.png",github:"https://github.com/vti0209",demo:"#",tech:["React","Node.js"],year:2024,categoryVi:"Thương mại điện tử",categoryEn:"E-Commerce",descriptionVi:"Website bán hàng thời trang với giao diện tối giản và hiện đại.",descriptionEn:"Fashion e-commerce website with minimalist and modern interface.",hasRichDetails:!1},{id:"fittrack",title:"FitTrack UI",category:"filter-design",image:"assets/img/portfolio/portfolio-5.png",github:"#",demo:"https://www.figma.com",tech:["Figma","UI/UX"],year:2023,categoryVi:"Thiết kế App",categoryEn:"App Design",descriptionVi:"Giao diện ứng dụng theo dõi sức khỏe và luyện tập thể thao.",descriptionEn:"Health and sports tracking application interface.",hasRichDetails:!1},{id:"minimal-blog",title:"Minimal Blog",category:"filter-web",image:"assets/img/portfolio/portfolio-6.png",github:"https://github.com/vti0209",demo:"#",tech:["Next.js","Tailwind"],year:2023,categoryVi:"Website Cá Nhân",categoryEn:"Personal Website",descriptionVi:"Nền tảng blog cá nhân tập trung vào trải nghiệm đọc tối ưu.",descriptionEn:"Personal blog platform focused on optimal reading experience.",hasRichDetails:!1}],k={technical:[{name:"HTML"},{name:"CSS"},{name:"JavaScript"},{name:"PHP"},{name:"MySQL"},{name:"Bootstrap"},{name:"Figma"},{name:"Jira"}],soft:[{vi:"Làm việc nhóm",en:"Teamwork"},{vi:"Quản lý thời gian",en:"Time management"},{vi:"Nghiên cứu",en:"Research"},{vi:"Giao tiếp",en:"Communication"},{vi:"Thuyết trình",en:"Presentation"}],languages:[{vi:"Tiếng Anh",en:"English"},{vi:"Tiếng Việt",en:"Vietnamese"}],interests:[{vi:"Nhiếp ảnh",en:"Photography",icon:"bi-camera"},{vi:"Nhiên cứu",en:"Online research",icon:"bi-search"}]},N={education:[{period:"Oct 2024 - Oct 2027",degree:"Diploma In Software Engineering",institution:"Passerelles Numériques Vietnam - Da Nang College",descriptionVi:"Đào tạo chuyên sâu về lập trình, thiết kế hệ thống và kỹ năng CNTT chuyên nghiệp.",descriptionEn:"Intensive training in programming, system design, and professional IT skills."}],certificates:[{name:"Critical Thinking Skills for the Professional"},{name:"Foundations of User Experience (UX) Design"}]},q=[{platform:"github",url:"https://github.com/vti0209",icon:"bi-github"},{platform:"linkedin",url:"https://www.linkedin.com/in/ho-van-tiet-544132343/",icon:"bi-linkedin"},{platform:"facebook",url:"https://www.facebook.com/Vti02092006",icon:"bi-facebook"}];class V{constructor(t){this.id=t.id||"",this.title=t.title||"",this.category=t.category||"",this.image=t.image||"",this.github=t.github||"#",this.demo=t.demo||"#",this.tech=Array.isArray(t.tech)?t.tech:[],this.year=t.year||new Date().getFullYear(),this.categoryVi=t.categoryVi||"",this.categoryEn=t.categoryEn||"",this.titleVi=t.titleVi||this.title,this.titleEn=t.titleEn||this.title,this.descriptionVi=t.descriptionVi||"",this.descriptionEn=t.descriptionEn||"",this.hasRichDetails=!!t.hasRichDetails,this.details=t.details||null}getCategory(t){return t==="en"?this.categoryEn||this.categoryVi:this.categoryVi||this.categoryEn}getTitle(t){return t==="en"?this.titleEn:this.titleVi}getDescription(t){return t==="en"?this.descriptionEn:this.descriptionVi}}class S{constructor(t){this.nameVi=t.vi||t.name||"",this.nameEn=t.en||t.name||"",this.icon=t.icon||null}getName(t){return t==="en"?this.nameEn:this.nameVi}}class B{constructor(t){this.platform=t.platform||"",this.url=t.url||"",this.icon=t.icon||`bi-${t.platform}`}}class w{static getProfile(){return F}static getProjects(){return C.map(t=>new V(t))}static getProjectById(t){const i=C.find(e=>e.id===t);return i?new V(i):null}static getSkills(){return{technical:k.technical.map(t=>new S(t)),soft:k.soft.map(t=>new S(t)),languages:k.languages.map(t=>new S(t)),interests:k.interests.map(t=>new S(t))}}static getExperience(){return N}static getSocials(){return q.map(t=>new B(t))}}function U(a,t,i){const e=i==="vi",n=e?"Trang chủ":"Home",s=e?"Về Tôi":"About",c=e?"Hành trình":"Journey",l=e?"Dịch vụ":"Services",g=e?"Dự án":"Projects",o=e?"Liên hệ":"Contact",d=e?"Khám phá":"Discover",h=e?"Tải CV":"Download CV",v=e?"EN":"VI";return`
    <div class="container-fluid container-xl position-relative d-flex align-items-center">

      <a href="index.html" class="logo d-flex align-items-center me-auto">
        <img src="${a.logo}" alt="VTi Logo">
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><a href="#hero" class="active" data-vi="Trang chủ" data-en="Home">${n}</a></li>
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
        <a class="btn-cv ms-2 it-glow" href="${a.cvUrl}" download><i class="bi bi-download"></i> <span data-vi="Tải CV" data-en="Download CV">${h}</span></a>
        <div class="lang-switcher ms-3">
          <button id="lang-toggle" class="btn btn-sm btn-outline-light">
            <span class="lang-text">${v}</span>
          </button>
        </div>
      </div>

    </div>
  `}function R(a,t,i){const e=i==="vi",n=e?"Xin chào, Tôi là "+a.name:"Hi, I'm "+a.name,s=e?"Tôi là ":"I am a ",c=t.map(l=>`
    <a href="${l.url}" target="_blank" class="it-glow"><i class="bi ${l.icon}"></i></a>
  `).join("");return`
    <img src="assets/img/profile/add.jpg" alt="" data-aos="fade-in">

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center">
          <h2 data-vi="Xin chào, Tôi là Hồ Văn Tiết" data-en="Hi, I'm Ho Van Tiet">${n}</h2>
          <p><span data-vi="Tôi là " data-en="I am a ">${s}</span><span class="typed" data-typed-items="${a.role}"></span><span class="typed-cursor" aria-hidden="true"></span></p>
          <div class="social-links">
            ${c}
          </div>
        </div>
      </div>
    </div>
  `}function O(a,t){const i=t==="vi",e=i?a.about.title.vi:a.about.title.en,n=i?a.about.intro.vi:a.about.intro.en,s=i?a.about.subtitle.vi:a.about.subtitle.en,c=i?"Dự án":"Projects",l=i?"Năm":"Years",g=i?"Kỹ năng":"Skills",o=i?"Liên hệ":"Contact",d="CV",h=i?"Học tại":"Studying at",v=i?"Định hướng":"Career Path",r=i?"Địa điểm":"Location",u="Email",p=i?"Điện thoại":"Phone",f=i?"Trạng thái":"Status",T=i?a.details.location.vi:a.details.location.en,b=i?a.details.status.vi:a.details.status.en,$=a.about.paragraphs.map(y=>`
    <p data-vi="${y.vi}" data-en="${y.en}">${i?y.vi:y.en}</p>
  `).join("");return`
    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <span class="subtitle" data-vi="Về Tôi" data-en="About Me">${e}</span>
      <p data-vi="${a.about.intro.vi}" data-en="${a.about.intro.en}">${n}</p>
    </div><!-- End Section Title -->

    <div class="container" data-aos="fade-up" data-aos-delay="100">

      <div class="row gy-5">
        <div class="col-lg-4" data-aos="zoom-in" data-aos-delay="150">
          <div class="profile-card">
            <div class="profile-header">
              <div class="profile-avatar">
                <img src="${a.avatar}" class="img-fluid" alt="${a.name}">
                <div class="status-indicator"></div>
              </div>
              <h3>${a.name}</h3>
              <span class="role">${a.role}</span>
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
                <h4>${a.stats.projects}</h4>
                <p data-vi="Dự án" data-en="Projects">${c}</p>
              </div>
              <div class="stat-item">
                <h4>${a.stats.years}</h4>
                <p data-vi="Năm" data-en="Years">${l}</p>
              </div>
              <div class="stat-item">
                <h4>${a.stats.skills}</h4>
                <p data-vi="Kỹ năng" data-en="Skills">${g}</p>
              </div>
            </div>

            <div class="profile-actions">
              <a href="#contact" class="btn-primary it-glow" data-vi="Liên hệ" data-en="Contact"><i class="bi bi-envelope"></i> ${o}</a>
              <a href="${a.cvUrl}" class="btn-secondary it-glow" download><i class="bi bi-download"></i> ${d}</a>
            </div>

            <div class="social-connect">
              <a href="https://www.linkedin.com/in/ho-van-tiet" target="_blank"><i class="bi bi-linkedin"></i></a>
              <a href="https://github.com/vti0209" target="_blank"><i class="bi bi-github"></i></a>
              <a href="mailto:${a.details.email}"><i class="bi bi-envelope"></i></a>
            </div>
          </div>
        </div>

        <div class="col-lg-8" data-aos="fade-left" data-aos-delay="200">
          <div class="content-wrapper">
            <div class="bio-section">
              <div class="section-tag" data-vi="Về Tôi" data-en="About Me">${e}</div>
              <h2 data-vi="Hãy cùng tìm hiểu!" data-en="Let's find out!">${s}</h2>
              ${$}
            </div>

            <div class="details-grid">
              <div class="detail-item">
                <i class="bi bi-mortarboard"></i>
                <div class="detail-content">
                  <span data-vi="Học tại" data-en="Studying at">${h}</span>
                  <strong>${a.details.studyingAt}</strong>
                </div>
              </div>

              <div class="detail-item">
                <i class="bi bi-laptop"></i>
                <div class="detail-content">
                  <span data-vi="Định hướng" data-en="Career Path">${v}</span>
                  <strong>${a.details.careerPath}</strong>
                </div>
              </div>

              <div class="detail-item">
                <i class="bi bi-geo-alt"></i>
                <div class="detail-content">
                  <span data-vi="Địa điểm" data-en="Location">${r}</span>
                  <strong data-vi="${a.details.location.vi}" data-en="${a.details.location.en}">${T}</strong>
                </div>
              </div>

              <div class="detail-item">
                <i class="bi bi-envelope"></i>
                <div class="detail-content">
                  <span data-vi="Email" data-en="Email">${u}</span>
                  <strong>${a.details.email}</strong>
                </div>
              </div>

              <div class="detail-item">
                <i class="bi bi-phone"></i>
                <div class="detail-content">
                  <span data-vi="Điện thoại" data-en="Phone">${p}</span>
                  <strong>${a.details.phone}</strong>
                </div>
              </div>

              <div class="detail-item">
                <i class="bi bi-calendar-check"></i>
                <div class="detail-content">
                  <span data-vi="Trạng thái" data-en="Status">${f}</span>
                  <strong data-vi="${a.details.status.vi}" data-en="${a.details.status.en}">${b}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  `}function G(a,t){const i=t==="vi",e=i?"Dịch vụ":"Services",n=i?"Những lĩnh vực tôi tập trung phát triển và mong muốn mang lại giá trị tốt nhất cho người dùng.":"Areas I focus on developing and aim to provide the best value to users.",s=i?"Sẵn sàng cho những thử thách mới":"Ready for New Challenges",c=i?"Hãy cùng nhau tạo ra những sản phẩm công nghệ tuyệt vời và có giá trị.":"Let's create great and valuable technology products together.",l=i?"Hợp tác ngay":"Partner Now",g=a.services.map(o=>{const d=i?o.title.vi:o.title.en,h=i?o.description.vi:o.description.en,v=i?"Liên hệ":"Contact";return`
      <div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
        <div class="service-item ${o.featured?"featured":""}">
          ${o.featured?`<div class="featured-tag">${i?"Nổi bật":"Featured"}</div>`:""}
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
      <span class="subtitle" data-vi="Dịch vụ" data-en="Services">${e}</span>
      <p data-vi="Những lĩnh vực tôi tập trung phát triển và mong muốn mang lại giá trị tốt nhất cho người dùng." data-en="Areas I focus on developing and aim to provide the best value to users.">${n}</p>
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
  `}function W(a,t){const i=t==="vi",e=i?"Dự án":"Portfolio",n=i?"Dưới đây là một số dự án đã thực hiện trong quá trình học tập và tự học về phát triển website và di động.":"Below are some projects implemented during my studies and self-learning in web and mobile development.",s=i?"Tất cả":"All",c=i?"Thiết kế":"Design",l="Website",g=i?"Nhóm":"Group",o=i?"Bạn muốn cộng tác cùng tôi?":"Want to collaborate with me?",d=i?"Rất vui được cùng bạn tạo ra những sản phẩm sáng tạo và hữu ích.":"Very glad to create creative and useful products with you.",h=i?"Liên hệ hợp tác":"Contact for Collaboration",v=a.map(r=>{const u=r.getTitle(t),p=r.getCategory(t),f=r.getDescription(t),T=r.tech.map($=>`<span class="tech-badge">${$}</span>`).join("");let b="";return r.demo&&r.demo!=="#"?r.demo.includes("figma.com")?b=`<a href="${r.demo}" target="_blank" title="Figma"><i class="bi bi-pencil-square"></i></a>`:b=`<a href="${r.demo}" target="_blank" title="Demo"><i class="bi bi-display"></i></a>`:r.github&&r.github!=="#"&&(b=`<a href="${r.github}" target="_blank" title="GitHub"><i class="bi bi-github"></i></a>`),`
      <div class="col-lg-4 col-md-6 portfolio-item isotope-item ${r.category}">
        <div class="portfolio-card">
          <div class="portfolio-image-container">
            <img src="${r.image}" alt="${u}" class="img-fluid" loading="lazy">
            <div class="portfolio-overlay">
              <div class="portfolio-actions">
                <a href="${r.image}" class="glightbox portfolio-link" title="Zoom"><i class="bi bi-zoom-in"></i></a>
                <a href="#" class="portfolio-details" 
                   data-bs-toggle="modal" 
                   data-bs-target="#projectModal" 
                   data-details-id="${r.hasRichDetails?`details-${r.id}`:""}"
                   data-title="${u}" 
                   data-description="${f}"
                   data-tech="${r.tech.join(", ")}"
                   data-github="${r.github}"
                   data-demo="${r.demo}"
                   data-image="${r.image}"
                   title="${i?"Chi tiết":"Details"}">
                  <i class="bi bi-info-circle"></i>
                </a>
                ${b}
              </div>
            </div>
          </div>
          <div class="portfolio-content">
            <span class="project-category" data-vi="${r.categoryVi}" data-en="${r.categoryEn}">${p}</span>
            <h4>${u}</h4>
            <p class="project-description" data-vi="${r.descriptionVi}" data-en="${r.descriptionEn}">${f}</p>
            <div class="project-tech-stack">
              ${T}
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
      <span class="subtitle" data-vi="Dự án" data-en="Portfolio">${e}</span>
      <p data-vi="${n}" data-en="${n}">${n}</p>
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
  `}function X(a,t){const i=t==="vi",e=i?"Học vấn":"Education",n=i?"Học vấn & Bằng cấp":"Education & Diploma",s=i?"Chứng chỉ":"Certificates",c=i?"Chứng chỉ":"Certificates",l=a.education.map(o=>{const d=i?o.descriptionVi:o.descriptionEn;return`
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
    `}).join(""),g=a.certificates.map(o=>`
    <div class="cert-item it-glow">
      <i class="bi bi-patch-check"></i>
      <span>${o.name}</span>
    </div>
  `).join("");return`
    <div class="experience-section">
      <div class="section-header" data-aos="fade-right" data-aos-delay="200">
        <div class="header-content">
          <span class="section-badge" data-vi="Học vấn" data-en="Education">${e}</span>
          <h2 data-vi="Học vấn & Bằng cấp" data-en="Education & Diploma">${n}</h2>
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
  `}function _(a,t){const i=t==="vi",e=i?"Kỹ năng công nghệ":"Technical Skills",n=i?"Kỹ năng mềm":"Soft Skills",s=i?"Ngôn ngữ":"Languages",c=i?"Sở thích":"Interests",l=a.technical.map(h=>`
    <div class="skill-tag it-glow">${h.getName(t)}</div>
  `).join(""),g=a.soft.map(h=>`
    <div class="skill-tag it-glow" data-vi="${h.nameVi}" data-en="${h.nameEn}">${h.getName(t)}</div>
  `).join(""),o=a.languages.map(h=>`
    <li><i class="bi bi-check2-circle text-primary"></i> <span data-vi="${h.nameVi}" data-en="${h.nameEn}">${h.getName(t)}</span></li>
  `).join(""),d=a.interests.map(h=>`
    <li><i class="bi ${h.icon} text-primary"></i> <span data-vi="${h.nameVi}" data-en="${h.nameEn}">${h.getName(t)}</span></li>
  `).join("");return`
    <div class="skills-section">
      <div class="section-header" data-aos="fade-left" data-aos-delay="200">
        <div class="header-content">
          <span class="section-badge" data-vi="Kỹ năng" data-en="Skills">${i?"Kỹ năng":"Skills"}</span>
          <h2 data-vi="Kỹ năng công nghệ" data-en="Technical Skills">${e}</h2>
        </div>
      </div>

      <div class="skills-grid mt-4">
        ${l}
      </div>

      <div class="section-header mt-5" data-aos="fade-left" data-aos-delay="200">
        <div class="header-content">
          <h2 data-vi="Kỹ năng mềm" data-en="Soft Skills">${n}</h2>
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
  `}function K(a,t){const i=t==="vi",e=i?"Liên hệ":"Contact",n=i?"Hãy kết nối với Tôi qua các kênh dưới đây. Tôi rất mong được trao đổi và hợp tác với bạn!":"Let's connect through the channels below. I look forward to interacting and collaborating with you!",s=i?"Địa chỉ":"Address",c=i?"Gọi cho Tôi":"Call Me",l="Email",g=i?a.details.location.vi:a.details.location.en,o=i?"Tên của bạn":"Your Name",d=i?"Email của bạn":"Your Email",h=i?"Chủ đề":"Subject",v=i?"Tin nhắn":"Message",r=i?"Đang gửi...":"Sending...",u=i?"Tin nhắn của bạn đã được gửi. Cảm ơn bạn!":"Your message has been sent. Thank you!",p=i?"Gửi tin nhắn":"Send Message";return`
    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <span class="subtitle" data-vi="Liên hệ" data-en="Contact">${e}</span>
      <p data-vi="${n}" data-en="${n}">${n}</p>
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
              <p data-vi="${a.details.location.vi}" data-en="${a.details.location.en}">${g}</p>
            </div>
          </div>

          <div class="info-item">
            <div class="icon-wrapper">
              <i class="bi bi-telephone"></i>
            </div>
            <div>
              <h3 data-vi="Gọi cho Tôi" data-en="Call Me">${c}</h3>
              <p>${a.details.phone}</p>
            </div>
          </div>

          <div class="info-item">
            <div class="icon-wrapper">
              <i class="bi bi-envelope"></i>
            </div>
            <div>
              <h3 data-vi="Email" data-en="Email">${l}</h3>
              <p>${a.details.email}</p>
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
                <div class="sent-message">${u}</div>

                <button type="submit">${p}</button>
              </div>

            </div>
          </form>
        </div>

      </div>

    </div>
  `}function Y(a,t,i){const e=i==="vi",c=e?"Portfolio cá nhân của Hồ Văn Tiết - Sinh viên năm hai Công nghệ Thông tin, định hướng Frontend Developer & Business Analyst.":"Personal portfolio of Ho Van Tiet - Software Engineering student, oriented as a Frontend Developer & Business Analyst.",l=e?"Liên kết":"Links",g=e?"Dịch vụ":"Services",o=e?"Thông tin":"Information",d=e?"Trang chủ":"Home",h=e?"Về Tôi":"About",v=e?"Dịch vụ":"Services",r=e?"Dự án":"Projects",u=e?"Liên hệ":"Contact",p=e?"Thiết kế Web":"Web Design",f=e?"Phát triển Frontend":"Frontend Dev",T=e?"Phân tích nghiệp vụ":"Business Analysis",b=e?"Thiết kế UI/UX":"UI/UX Design",$=e?"Phát triển Mobile":"Mobile Dev",y=e?"Bản quyền":"Copyright",m=e?a.details.location.vi:a.details.location.en,M=t.map(D=>`
    <a href="${D.url}" target="_blank"><i class="bi ${D.icon}"></i></a>
  `).join("");return`
    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-5 col-md-12 footer-about">
          <a href="index.html" class="logo d-flex align-items-center">
            <img src="${a.logo}" alt="VTi Logo">
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
            <li><a href="#contact" data-vi="Liên hệ" data-en="Contact">${u}</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4 data-vi="Dịch vụ" data-en="Services">${g}</h4>
          <ul>
            <li><a href="#" data-vi="Thiết kế Web" data-en="Web Design">${p}</a></li>
            <li><a href="#" data-vi="Phát triển Frontend" data-en="Frontend Dev">${f}</a></li>
            <li><a href="#" data-vi="Phân tích nghiệp vụ" data-en="Business Analysis">${T}</a></li>
            <li><a href="#" data-vi="Thiết kế UI/UX" data-en="UI/UX Design">${b}</a></li>
            <li><a href="#" data-vi="Phát triển Mobile" data-en="Mobile Dev">${$}</a></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          <h4 data-vi="Thông tin" data-en="Information">${o}</h4>
          <p data-vi="${a.details.location.vi}" data-en="${a.details.location.en}">${m}</p>
          <p class="mt-4"><strong>Phone:</strong> <span>${a.details.phone}</span></p>
          <p><strong>Email:</strong> <span>${a.details.email}</span></p>
        </div>

      </div>
    </div>

    <div class="container copyright text-center mt-4">
      <p>© <span data-vi="Bản quyền" data-en="Copyright">${y}</span> <strong class="px-1 sitename">VanTiet</strong> <span>2026 | Information Technology Student</span></p>
      <div class="credits">
        Designed by <a href="https://bootstrapmade.com/">Ho Van Tiet</a> | <a href="https://bootstrapmade.com/tools/">Dev74</a>
      </div>
    </div>
  `}class z{static render(t,i){const{profile:e,projects:n,skills:s,experience:c,socials:l}=t,g=document.getElementById("header");g&&(g.innerHTML=U(e,l,i));const o=document.getElementById("hero");o&&(o.innerHTML=R(e,l,i));const d=document.getElementById("about");d&&(d.innerHTML=O(e,i));const h=document.getElementById("services");h&&(h.innerHTML=G(e,i));const v=document.getElementById("portfolio");v&&(v.innerHTML=W(n,i));const r=document.getElementById("resume");if(r){const f=i==="vi",T=f?"Hành trình":"Journey",b=f?"Tóm tắt quá trình học tập và kỹ năng chuyên môn.":"A summary of my educational background and technical skills.";r.innerHTML=`
        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
          <span class="subtitle" data-vi="Hành trình" data-en="Journey">${T}</span>
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
      `;const $=document.getElementById("education-col");$&&($.innerHTML=X(c,i));const y=document.getElementById("skills-col");y&&(y.innerHTML=_(s,i))}const u=document.getElementById("contact");u&&(u.innerHTML=K(e,i));const p=document.getElementById("footer");p&&(p.innerHTML=Y(e,l,i))}}function J(a,t){const i=t==="vi",e=a.details;if(!e)return"";const n=i?"Tổng quan dự án":"Project Overview",s=i?e.overview.vi:e.overview.en,c=i?e.targetUsers.titleVi:e.targetUsers.titleEn,l=e.targetUsers.items.map(m=>`
    <li><i class="bi ${m.icon}"></i> ${i?m.vi:m.en}</li>
  `).join(""),g=i?e.keyFeatures.titleVi:e.keyFeatures.titleEn,o=e.keyFeatures.items.map(m=>`
    <li><i class="bi ${m.icon}"></i> ${i?m.vi:m.en}</li>
  `).join(""),d=i?e.userFlow.titleVi:e.userFlow.titleEn,h=i?e.userFlow.flowVi:e.userFlow.flowEn,v=i?e.userFlow.noteVi:e.userFlow.noteEn,r=i?e.uiUxDesign.titleVi:e.uiUxDesign.titleEn,u=e.uiUxDesign.leftItems.map(m=>`
    <li><i class="bi ${m.icon}"></i> ${i?m.vi:m.en}</li>
  `).join(""),p=e.uiUxDesign.rightItems.map(m=>`
    <li><i class="bi ${m.icon}"></i> ${i?m.vi:m.en}</li>
  `).join(""),f=i?"Công cụ sử dụng":"Tools Used",T=e.tools.map(m=>`
    <span class="skill-tag"><i class="bi ${m.icon} me-1"></i> ${m.label}</span>
  `).join(""),b=i?"Xem dự án trên Figma":"View Project on Figma",$=i?"Mở trong Figma":"Open in Figma",y=e.showcaseImages.map(m=>`
    <img src="${m}" class="img-fluid" alt="Project detail"/>
  `).join("");return`
    <div class="project-cs-hero">
      <div class="container">
        <h1 class="heading-primary">${e.title}</h1>
        <div class="mt-4">
          <a href="${a.demo}" class="btn-gradient" target="_blank" rel="noopener">
            <i class="bi bi-box-arrow-up-right me-2"></i> ${e.demoText}
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
              <h3 class="section-title"><i class="bi bi-stars me-2" style="color:#e65c1e;"></i> ${n}</h3>
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
                    ${u}
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
                ${T}
              </div>
            </div>
          </div>

          <div class="col-12 text-center mt-4">
            <div class="info-card d-inline-block w-auto mx-auto" style="background: transparent; box-shadow: none; border: none;">
              <h3 class="section-title" style="text-align:center;"><i class="bi bi-rocket-takeoff-fill me-2"></i> ${b}</h3>
              <a href="${a.demo}" class="btn-outline-dark-custom mt-2" target="_blank" rel="noopener">
                <i class="bi bi-figma fs-5"></i> ${$}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function Q(a,t){const i=t==="vi",e=i?"Công nghệ sử dụng:":"Technologies used:",n="GitHub Repository",s="Live Demo / Figma",c=a.tech.map(o=>`<span class="tech-badge">${o}</span>`).join(""),l=a.github&&a.github!=="#"?`<a href="${a.github}" target="_blank" class="btn btn-github mb-2 w-100"><i class="bi bi-github me-2"></i> ${n}</a>`:"",g=a.demo&&a.demo!=="#"?`<a href="${a.demo}" target="_blank" class="btn btn-demo mb-2 w-100"><i class="bi bi-display me-2"></i> ${s}</a>`:"";return`
    <div class="row gy-4">
      <div class="col-lg-7">
        <div class="modal-img-container">
          <img src="${a.image}" id="modalImage" class="img-fluid rounded" alt="${a.getTitle(t)}" style="width:100%; height:auto; object-fit:cover;">
        </div>
      </div>
      <div class="col-lg-5">
        <div class="project-info-box">
          <h3 id="modalTitle" class="mb-3" style="color: var(--heading-color); font-weight:700;">${a.getTitle(t)}</h3>
          <p id="modalDescription" class="mb-4" style="color: var(--default-color); opacity: 0.8;">${a.getDescription(t)}</p>
          <div class="info-list mb-4">
            <div class="info-item mb-3">
              <strong class="d-block mb-2 text-white-50">${e}</strong>
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
  `}class x{static renderModalContent(t,i,e){if(!t)return;const n=t.querySelector(".modal-body"),s=t.querySelector(".modal-header"),c=t.querySelector(".modal-content"),l=t.querySelector(".modal-dialog");if(!i){n.innerHTML='<p class="text-danger text-center">Project details not found.</p>';return}i.hasRichDetails?(n.innerHTML=J(i,e),s.classList.add("d-none"),c.classList.add("p-0"),l.classList.remove("modal-lg"),l.classList.add("modal-xl")):(s.classList.remove("d-none"),c.classList.remove("p-0"),l.classList.remove("modal-xl"),l.classList.add("modal-lg"),n.innerHTML=Q(i,e))}}function Z(){[".btn-getstarted",".btn-cv",".btn-primary",".btn-secondary",".service-item",".portfolio-card",".social-links a",".skill-tag",".cert-item",".navmenu a"].forEach(t=>{document.querySelectorAll(t).forEach(i=>{i.classList.add("it-glow")})})}function tt(){typeof AOS<"u"&&AOS.init({duration:600,easing:"ease-in-out",once:!0,mirror:!1})}function it(){typeof AOS<"u"&&AOS.refresh()}let E=null;function et(a){if(E&&E.destroy(),document.querySelector(".typed")&&typeof Typed<"u"){const i=a.split(",").map(e=>e.trim());E=new Typed(".typed",{strings:i,loop:!0,typeSpeed:70,backSpeed:40,backDelay:2e3,smartBackspace:!0,cursorChar:"|"})}}function P(){return typeof GLightbox<"u"?GLightbox({selector:".glightbox"}):null}function at(){function a(){const e=document.querySelector("body"),n=document.querySelector("#header");n&&(!n.classList.contains("scroll-up-sticky")&&!n.classList.contains("sticky-top")&&!n.classList.contains("fixed-top")||(window.scrollY>100?e.classList.add("scrolled"):e.classList.remove("scrolled")))}const t=document.querySelector(".scroll-top");function i(){t&&(window.scrollY>100?t.classList.add("active"):t.classList.remove("active"))}t&&t.addEventListener("click",e=>{e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",()=>{a(),i()}),a(),i()}function nt(){const a=document.querySelector("#preloader");a&&a.remove()}class st{constructor(t){this.lang=t,this.initIsotope=null,this.itemsPerPage=3,this.currentPage=1,this.filteredItems=[],this.currentFilter="*"}init(){this.setupIsotope(),this.setupModalListener()}setupIsotope(){const t=document.querySelector(".isotope-layout");if(!t)return;const i=t.getAttribute("data-layout")??"masonry",e=t.getAttribute("data-sort")??"original-order",n=t.querySelector(".isotope-container"),s=document.getElementById("portfolio-pagination");if(!n)return;const c=()=>{const g=(this.currentPage-1)*this.itemsPerPage,o=g+this.itemsPerPage;this.initIsotope.arrange({filter:d=>{if(!(this.currentFilter==="*"||d.classList.contains(this.currentFilter.replace(".",""))))return!1;const v=this.filteredItems.indexOf(d);return v>=g&&v<o}}),it()},l=()=>{if(!s)return;s.innerHTML="";const g=Math.ceil(this.filteredItems.length/this.itemsPerPage);if(!(g<=1))for(let o=1;o<=g;o++){const d=document.createElement("button");d.className=`page-btn ${o===this.currentPage?"active":""}`,d.innerText=o,d.addEventListener("click",()=>{this.currentPage=o,c(),l()}),s.appendChild(d)}};typeof imagesLoaded<"u"&&typeof Isotope<"u"&&imagesLoaded(n,()=>{this.initIsotope=new Isotope(n,{itemSelector:".isotope-item",layoutMode:i,filter:this.currentFilter,sortBy:e}),this.filteredItems=this.initIsotope.getFilteredItemElements(),l(),c(),P()}),t.querySelectorAll(".isotope-filters li").forEach(g=>{g.addEventListener("click",()=>{const o=t.querySelector(".isotope-filters .filter-active");o&&o.classList.remove("filter-active"),g.classList.add("filter-active"),this.currentFilter=g.getAttribute("data-filter"),this.currentPage=1,this.initIsotope&&(this.initIsotope.arrange({filter:this.currentFilter}),this.filteredItems=this.initIsotope.getFilteredItemElements(),c(),l())})})}setupModalListener(){const t=document.getElementById("projectModal");t&&t.addEventListener("show.bs.modal",i=>{const e=i.relatedTarget.closest(".portfolio-details");if(!e)return;const n=e.getAttribute("data-details-id");if(n&&n.startsWith("details-")){const s=n.replace("details-",""),c=w.getProjectById(s);x.renderModalContent(t,c,this.lang)}else{const s={title:e.getAttribute("data-title"),image:e.getAttribute("data-image"),github:e.getAttribute("data-github"),demo:e.getAttribute("data-demo"),tech:(e.getAttribute("data-tech")||"").split(",").map(c=>c.trim()),descriptionVi:e.getAttribute("data-description"),descriptionEn:e.getAttribute("data-description"),hasRichDetails:!1,getTitle:function(c){return this.title},getDescription:function(c){return this.descriptionVi}};x.renderModalContent(t,s,this.lang)}})}updateLanguage(t){this.lang=t,this.currentPage=1,this.setupIsotope()}}class ot{constructor(t){this.lang=t}init(){this.setupSkillsAnimation()}setupSkillsAnimation(){const t=document.querySelectorAll(".skills-animation");t.length>0&&typeof Waypoint<"u"&&t.forEach(i=>{new Waypoint({element:i,offset:"80%",handler:function(e){i.querySelectorAll(".progress .progress-bar").forEach(s=>{s.style.width=s.getAttribute("aria-valuenow")+"%"})}})})}updateLanguage(t){this.lang=t}}class ct{constructor(t){this.lang=t}init(){this.setupFormSubmit()}setupFormSubmit(){const t=document.querySelector(".php-email-form");t&&t.addEventListener("submit",i=>{i.preventDefault();const e=t,n=e.getAttribute("action"),s=e.getAttribute("data-recaptcha-site-key");if(!n){this.displayError(e,"The form action property is not set!");return}e.querySelector(".loading").classList.add("d-block"),e.querySelector(".error-message").classList.remove("d-block"),e.querySelector(".sent-message").classList.remove("d-block");const c=new FormData(e);s?typeof grecaptcha<"u"?grecaptcha.ready(()=>{try{grecaptcha.execute(s,{action:"php_email_form_submit"}).then(l=>{c.set("recaptcha-response",l),this.submitForm(e,n,c)})}catch(l){this.displayError(e,l)}}):this.displayError(e,"The reCaptcha javascript API url is not loaded!"):this.submitForm(e,n,c)})}submitForm(t,i,e){fetch(i,{method:"POST",body:e,headers:{"X-Requested-With":"XMLHttpRequest"}}).then(n=>{if(n.ok)return n.text();throw new Error(`${n.status} ${n.statusText} ${n.url}`)}).then(n=>{if(t.querySelector(".loading").classList.remove("d-block"),n.trim()==="OK")t.querySelector(".sent-message").classList.add("d-block"),t.reset();else throw new Error(n||"Form submission failed and no error message returned from: "+i)}).catch(n=>{this.displayError(t,n)})}displayError(t,i){t.querySelector(".loading").classList.remove("d-block"),t.querySelector(".error-message").innerHTML=i,t.querySelector(".error-message").classList.add("d-block")}updateLanguage(t){this.lang=t}}class H{static get(t,i=null){try{const e=localStorage.getItem(t);return e!==null?e:i}catch(e){return console.warn("Storage read error",e),i}}static set(t,i){try{localStorage.setItem(t,i)}catch(e){console.warn("Storage write error",e)}}}const I={LANG:"portfolio-lang"},lt={LANG:"vi"};function L(a){if(!a)return;const t=a.startsWith("#")?a.slice(1):a,i=document.getElementById(t);if(!i)return;const e=document.getElementById("header"),n=e?e.offsetHeight+20:80,s=i.getBoundingClientRect().top+window.scrollY-n;window.scrollTo({top:s,behavior:"smooth"}),document.querySelectorAll("section").forEach(c=>{c.classList.toggle("active-section",c.id===t)}),document.querySelectorAll(".nav-item, .navmenu a").forEach(c=>{const l=c.getAttribute("href");c.classList.toggle("active",l===a)})}function A(a=H.get(I.LANG,lt.LANG)){document.body.innerHTML=j.getSkeletonHTML();const t=w.getProfile(),i=w.getProjects(),e=w.getSkills(),n=w.getExperience(),s=w.getSocials();z.render({profile:t,projects:i,skills:e,experience:n,socials:s},a),nt(),Z(),tt(),et(t.role),P(),at(),new st(a).init(),new ot(a).init(),new ct(a).init();const o=document.getElementById("lang-toggle");o&&o.addEventListener("click",()=>{const d=a==="vi"?"en":"vi";H.set(I.LANG,d),A(d)}),document.querySelectorAll('a[href^="#"]').forEach(d=>{d.addEventListener("click",h=>{const v=d.getAttribute("href");!v||v==="#"||(h.preventDefault(),history.replaceState(null,"",v),L(v))})}),window.addEventListener("hashchange",()=>{L(window.location.hash)}),window.location.hash?setTimeout(()=>L(window.location.hash),120):setTimeout(()=>L("#hero"),120)}A();
