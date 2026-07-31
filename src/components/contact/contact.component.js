export function ContactComponent(profile, lang) {
  const isVi = lang === 'vi';

  const subtitleText = isVi ? "Liên hệ" : "Contact";
  const descText = isVi 
    ? "Hãy kết nối với Tôi qua các kênh dưới đây. Tôi rất mong được trao đổi và hợp tác với bạn!" 
    : "Let's connect through the channels below. I look forward to interacting and collaborating with you!";

  const labelAddress = isVi ? "Địa chỉ" : "Address";
  const labelCall = isVi ? "Gọi cho Tôi" : "Call Me";
  const labelEmail = "Email";

  const valAddress = isVi ? profile.details.location.vi : profile.details.location.en;

  const placeholderName = isVi ? "Tên của bạn" : "Your Name";
  const placeholderEmail = isVi ? "Email của bạn" : "Your Email";
  const placeholderSubject = isVi ? "Chủ đề" : "Subject";
  const placeholderMessage = isVi ? "Tin nhắn" : "Message";

  const statusLoading = isVi ? "Đang gửi..." : "Sending...";
  const statusSent = isVi ? "Tin nhắn của bạn đã được gửi. Cảm ơn bạn!" : "Your message has been sent. Thank you!";
  const statusSubmit = isVi ? "Gửi tin nhắn" : "Send Message";

  return `
    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <span class="subtitle" data-vi="Liên hệ" data-en="Contact">${subtitleText}</span>
      <p data-vi="${descText}" data-en="${descText}">${descText}</p>
    </div><!-- End Section Title -->

    <div class="container">

      <div class="row gy-4">

        <div class="col-lg-4">
          <div class="info-item">
            <div class="icon-wrapper">
              <i class="bi bi-geo-alt"></i>
            </div>
            <div>
              <h3 data-vi="Địa chỉ" data-en="Address">${labelAddress}</h3>
              <p data-vi="${profile.details.location.vi}" data-en="${profile.details.location.en}">${valAddress}</p>
            </div>
          </div>

          <div class="info-item">
            <div class="icon-wrapper">
              <i class="bi bi-telephone"></i>
            </div>
            <div>
              <h3 data-vi="Gọi cho Tôi" data-en="Call Me">${labelCall}</h3>
              <p>${profile.details.phone}</p>
            </div>
          </div>

          <div class="info-item">
            <div class="icon-wrapper">
              <i class="bi bi-envelope"></i>
            </div>
            <div>
              <h3 data-vi="Email" data-en="Email">${labelEmail}</h3>
              <p>${profile.details.email}</p>
            </div>
          </div>

        </div>

        <div class="col-lg-8">
          <form action="forms/contact.php" method="post" class="php-email-form">
            <div class="row gy-4">

              <div class="col-md-6">
                <input type="text" name="name" class="form-control" placeholder="${placeholderName}" required="">
              </div>

              <div class="col-md-6">
                <input type="email" class="form-control" name="email" placeholder="${placeholderEmail}" required="">
              </div>

              <div class="col-md-12">
                <input type="text" class="form-control" name="subject" placeholder="${placeholderSubject}" required="">
              </div>

              <div class="col-md-12">
                <textarea class="form-control" name="message" rows="6" placeholder="${placeholderMessage}" required=""></textarea>
              </div>

              <div class="col-md-12 text-center">
                <div class="loading">${statusLoading}</div>
                <div class="error-message"></div>
                <div class="sent-message">${statusSent}</div>

                <button type="submit">${statusSubmit}</button>
              </div>

            </div>
          </form>
        </div>

      </div>

    </div>
  `;
}
