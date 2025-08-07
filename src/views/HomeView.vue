<template>
  <header>
    <NavbarModal />
  </header>
  <main class="pt-5">
    <!-- Hero 區（背景圖 + 標語） -->
    <section
    class="hero-banner d-flex
    justify-content-center align-items-center text-white text-center"
      :style="{ backgroundImage: `url(${heroImage})` }">
      <div class="container">
        <div class="hero-content">
          <div class="hero-title mb-3 mb-md-4">
            <img src="@/assets/images/heroTitle.svg"
            alt="通管找亦傑，卡住我們來解!"
            class="svg-title">
          </div>
          <div class="hero-subtitle">
            <img :src="heroSubtitleImage"
            alt="Stuck? Call EJ — Your Pipe Rescue Pro!"
            class="svg-subtitle">
          </div>
        </div>
      </div>
      <!-- <div class="hero-content">
        <h1 class="hero-title">通管找亦傑，卡住我們來解！</h1>
        <p class="hero-subtitle">Stuck? Call EJ — Your Pipe Rescue Pro!</p>
      </div> -->
    </section>
    <!-- 三大保證 -->
    <section class="guarantee-section bg-white text-center py-5" id="guarantee">
      <div class="container overflow-hidden">
        <div class="row row-gap-4">
          <div class="col-md-4">
            <div class="d-flex justify-content-center align-items-center gap-3">
              <i class="bi bi-tools fs-1 text-gray-300"></i>
              <span class="fs-4 fw-semibold text-gray-300">技術保障</span>
            </div>
          </div>
          <div class="col-md-4">
            <div class="d-flex justify-content-center align-items-center gap-3">
              <i class="bi bi-lightning-charge-fill fs-1 text-gray-300"></i>
              <span class="fs-4 fw-semibold text-gray-300">效率保障</span>
            </div>
          </div>
          <div class="col-md-4">
            <div class="d-flex justify-content-center align-items-center gap-3">
              <i class="bi bi-person-hearts fs-1 text-gray-300"></i>
              <span class="fs-4 fw-semibold text-gray-300">信賴保障</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About -->
    <section id="about" class="bg-gray-100 py-7">
      <div class="container">
        <div class="row row-gap-4">
          <div class="col-lg-7">
            <h3 class="section-title">關於亦傑包通專家</h3>
            <h4 class="text-body text-secondary mb-4">EJclearhreo</h4>
            <p class="about-text mb-3 mb-lg-4">
              亦傑企業行為政府立案的專業水電工程行，亦以品牌名稱「亦傑包通專家」對外服務，
              擁有多年實務經驗，專精於高壓水刀管路疏通清洗、內視鏡管路檢測、水電維修、化糞池清理與各類衛浴工程。
            </p>
            <p class="about-text mb-0 mb-lg-4">
              團隊成員皆受過專業訓練，施工細膩、態度認真，致力提供高品質、可靠的工程服務。
              設備齊全、技術成熟，無論是居家修繕或商家、機關的定期合作，我們皆能迅速應對、有效解決問題。
              堅持合理收費、誠信服務，一通電話即可到場協助，並提供 24 小時緊急處理服務，讓您免除後顧之憂。
              <strong>「亦傑包通專家，值得信賴的在地水電好幫手。」</strong>
            </p>
            <!-- social icon -->
            <ul class=" d-none d-lg-flex about-social">
              <li class="pe-4">
                <a href="https://www.google.com/url?q=https%3A%2F%2Fline.me%2Fti%2Fp%2FcpxNoEmFf8&sa=D&sntz=1&usg=AOvVaw0LpE5xN1Jxz6ct_rFMZSOw"
                class="social-icon"
                target="_blank"
                aria-label="加入 LINE">
                  <i class="bi bi-line"></i>
                </a>
              </li>
              <li class="pe-4">
                <a href="https://www.facebook.com/profile.php?id=61577603455497&mibextid=wwXIfr&rdid=FIc9FnxRgDtrpRHN&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16PgdpfMqg%2F%3Fmibextid%3DwwXIfr"
                class="social-icon"
                target="_blank"
                aria-label="加入 Facebook">
                  <i class="bi bi-facebook"></i>
                </a>
              </li>
              <li class="pe-4">
                <a href="https://www.instagram.com/ejclearhero?utm_source=qr"
                class="social-icon"
                target="_blank"
                aria-label="加入 Instagram">
                  <i class="bi bi-instagram"></i>
                </a>
              </li>
              <li class="pe-4">
                <a href="https://www.threads.com/@ejclearhero?igshid=NTc4MTIwNjQ2YQ%3D%3D"
                class="social-icon"
                target="_blank"
                aria-label="加入 Threads">
                  <i class="bi bi-threads-fill"></i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCLufD6Ltm1G4HI2cjIPwyiQ?si=YJ9NKZ1GKMs5GD9D"
                class="social-icon"
                target="_blank"
                aria-label="加入 Youtube">
                  <i class="bi bi-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-5">
            <div class="d-flex justify-content-center flex-column gap-4 h-100">
              <!-- Working Hours -->
              <div class="d-flex align-items-start gap-3">
                <i class="bi bi-clock fs-3 text-primary"></i>
                <div class="about-text">
                  <p class="text-primary fw-bold mb-1">WORKING HOURS</p>
                  <p class="fw-bold mb-0">24 小時</p>
                </div>
              </div>

              <!-- Call Us -->
              <div class="d-flex align-items-start gap-3">
                <i class="bi bi-telephone fs-3 text-primary"></i>
                <div class="about-text">
                  <p class="text-primary fw-bold mb-1">CALL US / 點電話可直接播通</p>
                  <p class="fw-bold mb-0">
                    <a href="tel:+0955071230"
                      aria-label="0955071230">
                    0955-071230
                  </a>
                  </p>
                </div>
              </div>

              <!-- Address -->
              <div class="d-flex align-items-start gap-3">
                <i class="bi bi-building fs-3 text-primary"></i>
                <div class="about-text">
                  <p class="text-primary fw-bold mb-1">ADDRESS</p>
                  <p class="fw-bold mb-0">高雄市楠梓區土庫八街 297 號</p>
                </div>
              </div>
            </div>
            <!-- social icon mobile-->
            <ul class="d-flex d-lg-none about-social">
              <li class="pe-4">
                <a href="https://www.google.com/url?q=https%3A%2F%2Fline.me%2Fti%2Fp%2FcpxNoEmFf8&sa=D&sntz=1&usg=AOvVaw0LpE5xN1Jxz6ct_rFMZSOw"
                class="social-icon"
                target="_blank"
                aria-label="加入 LINE">
                  <i class="bi bi-line"></i>
                </a>
              </li>
              <li class="pe-4">
                <a href="https://www.facebook.com/profile.php?id=61577603455497&mibextid=wwXIfr&rdid=FIc9FnxRgDtrpRHN&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16PgdpfMqg%2F%3Fmibextid%3DwwXIfr"
                class="social-icon"
                target="_blank"
                aria-label="加入 Facebook">
                  <i class="bi bi-facebook"></i>
                </a>
              </li>
              <li class="pe-4">
                <a href="https://www.instagram.com/ejclearhero?utm_source=qr"
                class="social-icon"
                target="_blank"
                aria-label="加入 Instagram">
                  <i class="bi bi-instagram"></i>
                </a>
              </li>
              <li class="pe-4">
                <a href="https://www.threads.com/@ejclearhero?igshid=NTc4MTIwNjQ2YQ%3D%3D"
                class="social-icon"
                target="_blank"
                aria-label="加入 Threads">
                  <i class="bi bi-threads-fill"></i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCLufD6Ltm1G4HI2cjIPwyiQ?si=YJ9NKZ1GKMs5GD9D"
                class="social-icon"
                target="_blank"
                aria-label="加入 Youtube">
                  <i class="bi bi-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 服務流程 -->
    <section id="serviceFlow" class="service-flow py-9">
      <div class="container">
        <h3 class="section-title text-center mb-9">服務流程</h3>
        <!-- g-4 -->
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4  justify-content-center
        row-gap-8 row-gap-md-6">
          <div class="col">
            <div class="flow-step">
              <img src="@/assets/images/Icon_step1諮詢問題.svg" alt="諮詢問題" class="step-icon">
              <div class="icon-wrapper position-relative shadow">
                <span class="step-number">1</span>
                <p class="step-text text-primary fw-semibold mb-0">電話 / LINE 諮詢問題</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="flow-step">
              <img src="@/assets/images/Icon_step2報價規劃.svg" alt="報價規劃" class="step-icon">
              <div class="icon-wrapper position-relative shadow">
                <span class="step-number">2</span>
                <p class="step-text text-primary fw-semibold mb-0">報價規劃</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="flow-step">
              <img src="@/assets/images/Icon_step3約施作時間.svg" alt="約施作時間" class="step-icon">
              <div class="icon-wrapper position-relative shadow">
                <span class="step-number">3</span>
                <p class="step-text text-primary fw-semibold mb-0">約施作時間</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="flow-step">
              <img src="@/assets/images/Icon_step4進行施工.svg" alt="進行施工" class="step-icon">
              <div class="icon-wrapper position-relative shadow">
                <span class="step-number">4</span>
                <p class="step-text text-primary fw-semibold mb-0">進行施工作業</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 服務項目 -->
    <section id="serviceItem" class="bg-gray-100 py-9">
      <div class="container">
        <h3 class="section-title text-center mb-6">服務項目</h3>
        <ul class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-gap-4">
          <li class="col">
            <div class="card">
              <img src="@/assets/images/serviceItem/serviceItem-高壓水刀管路疏通_01.webp"
              class="card-img-top object-position-tc" alt="高壓水刀管路疏通圖片">
              <div class="card-body">
                <h5 class="card-title">高壓水刀管路疏通</h5>
                <p class="card-text">
                  利用高壓水流沖刷堵塞物，有效清除油垢、泥沙與髒污，恢復管線暢通。
                </p>
                <!-- <a href="#" class="btn btn-primary text-white">Go somewhere</a> -->
              </div>
            </div>
          </li>
          <li class="col">
            <div class="card">
              <img src="@/assets/images/serviceItem/serviceItem-排水孔疏通.webp"
              class="card-img-top" alt="排水孔疏通圖片">
              <div class="card-body">
                <h5 class="card-title">排水孔疏通</h5>
                <p class="card-text">
                  針對廚房、浴室等排水不順，快速排除堵塞，避免積水與異味困擾。
                </p>
                <!-- <a href="#" class="btn btn-primary text-white">Go somewhere</a> -->
              </div>
            </div>
          </li>
          <li class="col">
            <div class="card">
              <img src="@/assets/images/serviceItem/serviceItem-馬桶疏通_01.webp"
              class="card-img-top object-position-tc" alt="馬桶疏通圖片">
              <div class="card-body">
                <h5 class="card-title">馬桶疏通</h5>
                <p class="card-text">
                  解決馬桶阻塞、水流緩慢等問題，還您一個順暢如新的如廁體驗。
                </p>
                <!-- <a href="#" class="btn btn-primary text-white">Go somewhere</a> -->
              </div>
            </div>
          </li>
          <li class="col">
            <div class="card">
              <img src="@/assets/images/serviceItem/serviceItem-內視鏡管檢測_01.webp"
              class="card-img-top" alt="內視鏡管檢測圖片">
              <div class="card-body">
                <h5 class="card-title">內視鏡管檢測</h5>
                <p class="card-text">
                  使用專業內視鏡深入管道檢查，精準找出堵塞點與破損狀況。
                </p>
                <!-- <a href="#" class="btn btn-primary text-white">Go somewhere</a> -->
              </div>
            </div>
          </li>
          <li class="col">
            <div class="card">
              <img src="@/assets/images/serviceItem/serviceItem-衛浴廁所改修.webp"
              class="card-img-top" alt="衛浴廁所改修圖片">
              <div class="card-body">
                <h5 class="card-title">衛浴廁所改修</h5>
                <p class="card-text">
                  提供老舊衛浴空間更新、管線重配與馬桶更換等改修工程。
                </p>
                <!-- <a href="#" class="btn btn-primary text-white">Go somewhere</a> -->
              </div>
            </div>
          </li>
          <li class="col">
            <div class="card">
              <img src="@/assets/images/serviceItem/serviceItem-截油槽清理.webp"
              class="card-img-top" alt="截油槽清理圖片">
              <div class="card-body">
                <h5 class="card-title">截油槽清理</h5>
                <p class="card-text">
                  清除截油槽內部油脂、殘渣，預防異味與堵塞，符合環保規範。
                </p>
                <!-- <a href="#" class="btn btn-primary text-white">Go somewhere</a> -->
              </div>
            </div>
          </li>
          <li class="col">
            <div class="card">
              <img src="@/assets/images/serviceItem/serviceItem-化糞池清理.webp"
              class="card-img-top" alt="化糞池清理圖片">
              <div class="card-body">
                <h5 class="card-title">化糞池清理</h5>
                <p class="card-text">
                  定期抽除污泥，保持化糞池運作順暢，避免外溢與臭味產生。
                </p>
                <!-- <a href="#" class="btn btn-primary text-white">Go somewhere</a> -->
              </div>
            </div>
          </li>
          <li class="col">
            <div class="card">
              <img src="@/assets/images/serviceItem/serviceItem-污水人孔蓋更換.webp"
              class="card-img-top" alt="污水人孔蓋更換圖片">
              <div class="card-body">
                <h5 class="card-title">污水人孔蓋更換</h5>
                <p class="card-text">
                  更換破損或老化的人孔蓋，維護行人安全與污水系統運作。
                </p>
                <!-- <a href="#" class="btn btn-primary text-white">Go somewhere</a> -->
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- 緊急聯絡區 -->
    <section id="emergency"
      class="emergency-banner text-white d-flex align-items-center text-center"
      :style="{ backgroundImage: `url(${emergencyImage})` }"
    >
      <div class="container">
        <div class="emergency-content mx-auto">
          <div class="hotline-title">
            <img
              src="@/assets/images/24小時服務熱線_標題.svg"
              alt="24 小時服務熱線"
              class="svg-title"
            />
          </div>
          <div class="hotline-number my-4">
            <a href="tel:+0955071230"
                aria-label="0955071230">
              <img
              src="@/assets/images/24小時服務熱線_電話.svg"
              alt="0955-071230"
              class="svg-number" />
            </a>
          </div>
          <div class="qr-code">
            <a href="https://www.google.com/url?q=https%3A%2F%2Fline.me%2Fti%2Fp%2FcpxNoEmFf8&sa=D&sntz=1&usg=AOvVaw0LpE5xN1Jxz6ct_rFMZSOw"
                class="social-icon"
                target="_blank"
                aria-label="加入 LINE">
              <img
              src="@/assets/images/24小時服務熱線_QRCode.svg"
              alt="LINE QR Code"
              class="svg-qr" />
            </a>
          </div>
        </div>
      </div>
    </section>
    <CallMeBtn />
  </main>
  <footer class="bg-dark py-6">
    <div class="container text-center">
      <img src="@/assets/images/logo_white.svg" alt="Logo" class="logo-img mx-auto mb-4">
      <ul class="d-flex justify-content-center social-icon mb-4">
        <li class="pe-4">
          <a href="https://www.google.com/url?q=https%3A%2F%2Fline.me%2Fti%2Fp%2FcpxNoEmFf8&sa=D&sntz=1&usg=AOvVaw0LpE5xN1Jxz6ct_rFMZSOw"
          class="social-icon"
          target="_blank"
          aria-label="加入 LINE">
            <i class="bi bi-line"></i>
          </a>
        </li>
        <li class="pe-4">
          <a href="https://www.facebook.com/profile.php?id=61577603455497&mibextid=wwXIfr&rdid=FIc9FnxRgDtrpRHN&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16PgdpfMqg%2F%3Fmibextid%3DwwXIfr"
          class="social-icon"
          target="_blank"
          aria-label="加入 Facebook">
            <i class="bi bi-facebook"></i>
          </a>
        </li>
        <li class="pe-4">
          <a href="https://www.instagram.com/ejclearhero?utm_source=qr"
          class="social-icon"
          target="_blank"
          aria-label="加入 Instagram">
            <i class="bi bi-instagram"></i>
          </a>
        </li>
        <li class="pe-4">
          <a href="https://www.threads.com/@ejclearhero?igshid=NTc4MTIwNjQ2YQ%3D%3D"
          class="social-icon"
          target="_blank"
          aria-label="加入 Threads">
            <i class="bi bi-threads-fill"></i>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCLufD6Ltm1G4HI2cjIPwyiQ?si=YJ9NKZ1GKMs5GD9D"
          class="social-icon"
          target="_blank"
          aria-label="加入 Youtube">
            <i class="bi bi-youtube"></i>
          </a>
        </li>
      </ul>
      <p class="text-sm text-white">© 2025 亦傑包通專家，保留所有權利</p>
    </div>
  </footer>
</template>

<script>
// @ is an alias to /src
import NavbarModal from '@/components/NavbarModal.vue';
import heroImage from '@/assets/images/HeroBanner_01.webp';
import heroSubtitleDesktop from '@/assets/images/heroSubtitleImage_desktop.svg';
import heroSubtitleMobile from '@/assets/images/heroSubtitleImage_mobile.svg';
import emergencyImage from '@/assets/images/emergencyBg_01.webp';
import CallMeBtn from '@/components/CallMeBtn.vue';

export default {
  name: 'HomeView',
  components: {
    NavbarModal,
    CallMeBtn,
  },
  data() {
    return {
      heroImage,
      heroSubtitleImage: heroSubtitleDesktop,
      emergencyImage,
      hasTrackedConversion: false,
    };
  },
  mounted() {
    if (window.innerWidth < 768) {
      this.heroSubtitleImage = heroSubtitleMobile;
    }
    // 確保 Google 代碼已載入後再設置追蹤
    this.ensureGoogleTagLoaded(() => {
      this.setupTracking();
    });
  },
  methods: {
    // 確保 Google Tag 已載入
    ensureGoogleTagLoaded(callback) {
      if (window.gtag && window.dataLayer) {
        callback();
        return;
      }

      // 等待 Google Tag 載入
      let attempts = 0;
      const maxAttempts = 50;
      const checkInterval = setInterval(() => {
        attempts += 1;
        if (window.gtag && window.dataLayer) {
          clearInterval(checkInterval);
          callback();
        } else if (attempts >= maxAttempts) {
          clearInterval(checkInterval);
          console.warn('Google Tag 載入超時');
        }
      }, 100);
    },

    setupTracking() {
      // 發送頁面瀏覽事件（對 Analytics 和 Ads 都重要）
      this.sendPageView();

      // 設置轉換追蹤
      this.setupConversionTracking();
    },

    // 發送頁面瀏覽事件
    sendPageView() {
      if (window.gtag) {
        // 為 Google Analytics 發送頁面瀏覽
        window.gtag('config', 'G-H6FJWT5HT5', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: this.$route.path,
        });

        // 為 Google Ads 發送頁面瀏覽
        window.gtag('config', 'AW-1729894791', {
          page_title: document.title,
          page_location: window.location.href,
        });

        // console.log('頁面瀏覽事件已發送到 GA4 和 Google Ads');
      }
    },

    setupConversionTracking() {
      // 15 秒後如果還沒觸發轉換，就觸發
      const timeoutId = setTimeout(() => {
        if (!this.hasTrackedConversion) {
          this.trackConversion('time_based');
        }
      }, 15000);

      // 滾動到 30% 時觸發
      const handleScroll = () => {
        const scrollPercent = Math.round(
          (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100,
        );
        if (scrollPercent >= 30 && !this.hasTrackedConversion) {
          clearTimeout(timeoutId);
          this.trackConversion('scroll_engagement');
          window.removeEventListener('scroll', handleScroll);
        }
      };

      window.addEventListener('scroll', handleScroll);

      // 儲存 handleScroll 參考以便後續清理
      this.handleScroll = handleScroll;
    },

    trackConversion(source = 'manual') {
      if (window.gtag && !this.hasTrackedConversion) {
        // console.log(`觸發轉換追蹤: ${source}`);

        // 發送 Google Ads 轉換事件
        window.gtag('event', 'conversion', {
          send_to: 'AW-1729894791/teSiCKjk2vsaENee5rhA',
          event_callback: () => {
            // console.log('Google Ads 轉換追蹤已發送');
          },
          event_timeout: 2000,
        });

        // 同時發送 Google Analytics 自定義事件
        window.gtag('event', 'conversion_action', {
          event_category: 'engagement',
          event_label: source,
          value: 1,
        });

        this.hasTrackedConversion = true;
      }
    },

    // 追蹤特定互動事件（可選）
    trackButtonClick(buttonName) {
      if (window.gtag) {
        // Google Analytics 事件
        window.gtag('event', 'click', {
          event_category: 'button',
          event_label: buttonName,
        });

        // console.log(`按鈕點擊事件已追蹤: ${buttonName}`);
      }
    },
  },

  // 在組件銷毀時清理事件監聽器
  beforeUnmount() {
    if (this.handleScroll) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  },
};
</script>
