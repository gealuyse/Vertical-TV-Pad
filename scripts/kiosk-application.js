/* ===== ข้อมูลหลัก: แก้แพ็กเกจหนึ่งครั้ง ทุกหน้าใช้ข้อมูลเดียวกัน ===== */
window.KioskData = {
  pages: [
    {
      slug: "home",
      title: "หน้าแรก",
    },
    {
      slug: "entertainment",
      title: "กีฬาและ Entertainment",
    },
    {
      slug: "welcome",
      title: "Welcome Package",
    },
    {
      slug: "netflix",
      title: "Netflix Lover",
    },
    {
      slug: "smart-home",
      title: "Smart Home",
    },
    {
      slug: "sme-business",
      title: "เลือกประเภทธุรกิจ SME",
    },
    {
      slug: "sme-packages",
      title: "แพ็กเกจ SME",
    },
    {
      slug: "sme-addons",
      title: "บริการเสริม SME",
    },
    {
      slug: "detail",
      title: "รายละเอียดรายการ",
    },
  ],
  config: {
    idleTimeoutMilliseconds: 120000,
    videos: {
      brand: "assets/videos/home-brand-video.mp4",
      idle: "assets/videos/idle-screen-video.mp4",
    },
    dragThresholdScreenPixels: 8,
    wheelLineScreenPixels: 16,
    keyboardScrollFraction: 0.5,
    saveIntervalMilliseconds: 1000,
    carouselSaveDelayMilliseconds: 150,
    idlePollMilliseconds: 500,
    diagnosticsEnabled: false,
  },
  assets: {
    brandPoster: "assets/images/home-brand-video-poster.jpg",
    idlePoster: "assets/images/idle-screen-video-poster.jpg",
  },
  businesses: [
    {
      id: "cafe",
      name: "ร้านอาหาร / คาเฟ่",
      image: "assets/images/business-cafe-illustration.webp",
    },
    {
      id: "hotel",
      name: "โรงแรม / รีสอร์ท",
      image: "assets/images/business-hotel-illustration.webp",
    },
    {
      id: "office",
      name: "ออฟฟิศ / สำนักงาน / โรงงาน",
      image: "assets/images/business-office-illustration.webp",
    },
    {
      id: "clinic",
      name: "คลินิก / โรงเรียนกวดวิชา",
      image: "assets/images/business-clinic-illustration.webp",
    },
  ],
  features: [
    {
      id: "asian",
      name: "ความบันเทิงเอเชีย",
      description: "เน็ตบ้านพร้อมคอนเทนต์เอเชีย จาก iQIYI, Viu และ WeTV",
      next: "welcome",
      image: "assets/images/asian-entertainment-promotion.webp",
      price: "599 บาท",
      speed: "500Mbps/500Mbps",
      facts: [
        ["ความเร็วตามแบนเนอร์", "500Mbps/500Mbps"],
        ["ระยะสัญญา", "24 เดือน"],
        ["ความบันเทิง", "iQIYI, Viu, WeTV และคอนเทนต์จาก AIS PLAY"],
      ],
    },
    {
      id: "backup",
      name: "5G Backup",
      description: "Net Smart Backup เน็ตบ้านพร้อมการเชื่อมต่อสำรอง",
      image: "assets/images/backup-internet-promotion.webp",
      price: "699 บาท",
      speed: "700Mbps/700Mbps",
      facts: [
        ["ความเร็วตามโปรโมชั่น", "700Mbps/700Mbps นาน 24 เดือน"],
        ["ระยะสัญญา", "24 เดือน"],
        ["บริการ", "Net Smart Backup ตามภาพโปรโมชั่น"],
      ],
    },
    {
      id: "byod",
      name: "BYOD",
      description: "AIS Fibre3 BYOD ใช้เราเตอร์ของคุณตามเงื่อนไขบริการ",
      image: "assets/images/bring-your-own-router-promotion.webp",
      price: "599 บาท",
      priceStarting: true,
      speed: "1Gbps/500Mbps",
      facts: [
        ["ความเร็วตามแบนเนอร์", "1Gbps/500Mbps"],
        ["อุปกรณ์", "นำเราเตอร์ของคุณมาใช้ร่วมกัน ตามเงื่อนไขโปรโมชั่น"],
      ],
    },
    {
      id: "insurance",
      name: "บริการดูแลบ้าน",
      description: "เน็ตไฟเบอร์พร้อมประกันภัยบ้านและบริการช่วยเหลือภายในบ้าน",
      image: "assets/images/home-insurance-promotion.webp",
      price: "699 บาท",
      priceStarting: true,
      cardLabel: "ความคุ้มครองตามแบนเนอร์",
      cardValue: "สูงสุด 500,000 บาท",
      facts: [
        ["ระยะสัญญา", "24 เดือน"],
        ["ความคุ้มครองตามแบนเนอร์", "สูงสุด 500,000 บาท"],
        ["บริการช่วยเหลือภายในบ้าน", "24 ชั่วโมง ตามเงื่อนไขบริการ"],
      ],
    },
    {
      id: "lan",
      name: "FibreLAN",
      description: "Home FibreLAN Plus พร้อม WiFi 7, PLAY LITE และเน็ตมือถือ",
      image: "assets/images/home-fibre-network-promotion.webp",
      price: "899 บาท",
      priceStarting: true,
      speed: "สูงสุด 1Gbps",
      facts: [
        ["ความเร็วตามแบนเนอร์", "สูงสุด 1Gbps"],
        ["อุปกรณ์ตามแบนเนอร์", "WiFi 7"],
        ["ความบันเทิง", "PLAY LITE"],
        ["อินเทอร์เน็ตมือถือ", "20GB ตามโปรโมชั่น"],
        ["ค่าแรกเข้า", "ฟรี ตามเงื่อนไขโปรโมชั่น"],
      ],
    },
    {
      id: "superfast",
      name: "Super FAST Plus",
      description: "Super FAST Plus พร้อม Public IPv4 ตามโปรโมชั่น",
      next: "welcome",
      image: "assets/images/super-fast-internet-promotion.webp",
      price: "799 บาท",
      priceStarting: true,
      speed: "สูงสุด 1Gbps",
      facts: [
        ["ความเร็วตามแบนเนอร์", "สูงสุด 1Gbps"],
        ["ระยะสัญญา", "24 เดือน"],
        ["สิทธิ์ตามแบนเนอร์", "Public IPv4"],
      ],
    },
  ],
  brandConcept: "AIS 3BB Fibre3",
  flow: {
    features: {
      asian: "welcome",
      backup: "welcome/features/backup",
      byod: "welcome/features/byod",
      insurance: "welcome",
      lan: "welcome",
      superfast: "welcome",
    },
    welcome: {
      "welcome-299": "detail/welcome/welcome-299",
      "welcome-799": "netflix",
      "welcome-899": "detail/welcome/welcome-899",
    },
    welcomeVariants: {
      backup: {
        "welcome-799": "detail/welcome/welcome-799",
      },
      byod: {
        "welcome-799": "detail/welcome/welcome-799",
      },
    },
  },
  packageGroups: {
    welcome: [
      "welcome-299",
      "welcome-799",
      "welcome-899",
      "broadband24-499",
      "supermesh-699",
      "entertainment-gang-599",
      "broadband-pro-998",
    ],
    netflix: ["netflix-699", "netflix-799", "netflix-899", "netflix-999"],
    business: ["sme-690", "sme-899", "sme-1199", "sme-1499", "sme-1799"],
  },
  packages: {
    "welcome-299": {
      id: "welcome-299",
      description: "แพ็กเกจเหมาะสำหรับผู้ใช้งานทั่วไปที่ต้องการความเสถียร และความเร็วที่ดี",
      price: "299 บาท",
      speed: "50Mbps/20Mbps",
      name: "แพ็กเกจอินเทอร์เน็ตทั่วไป",
      image: null,
      nextPackageId: null,
      theme: "broadband",
      tag: "แพ็กเกจอินเทอร์เน็ตทั่วไป",
      headline: "เน็ตบ้าน",
      accent: "50Mbps/20Mbps",
    },
    "welcome-799": {
      id: "welcome-799",
      description:
        "สตรีมความบันเทิงคุณภาพระดับโลก ครบทั้งซีรีส์ หนัง และรายการดังบน Netflix ดูเพลินได้ไม่อั้น",
      price: "799 บาท",
      speed: "1Gbps/500Mbps",
      name: "แพ็กเกจ Netflix 799",
      image: "assets/images/netflix-standard-promotion.webp",
      nextPackageId: "netflix-799",
    },
    "welcome-899": {
      id: "welcome-899",
      description:
        "สตรีมความบันเทิงคุณภาพระดับโลก ครบทั้งซีรีส์ หนัง และรายการดังบน Netflix ดูเพลินได้ไม่อั้น",
      price: "899 บาท",
      speed: "1Gbps/500Mbps",
      name: "แพ็กเกจ Netflix 899",
      image: "assets/images/netflix-premium-promotion.webp",
      nextPackageId: "netflix-899",
    },
    "broadband24-499": {
      id: "broadband24-499",
      description: "เน็ตบ้านพร้อมบริการติดตั้งและดูแล เน้นความสะดวกในการติดต่อ",
      price: "499 บาท",
      speed: "300Mbps/300Mbps",
      name: "BROADBAND24",
      contract: "12 เดือน",
      theme: "broadband",
      tag: "เน็ตบ้านและบริการดูแล",
      headline: "BROADBAND24",
      accent: "24",
      facts: [
        [
          "ความเร็วสูงสุด (ดาวน์โหลด / อัปโหลด)",
          {
            field: "speed",
          },
        ],
        [
          "ระยะสัญญา",
          {
            field: "contract",
          },
        ],
        ["บริการที่ระบุในแพ็กเกจ", "AIS Secure Net"],
        [
          "จุดเด่นบนเว็บไซต์ AIS",
          "ติดตั้งเร็ว ติดต่อง่าย แก้ปัญหาจบภายใน 24 ชม. ตามเงื่อนไขบริการ",
        ],
      ],
    },
    "supermesh-699": {
      id: "supermesh-699",
      description: "กระจายสัญญาณทั่วบ้าน ด้วยเราเตอร์ MESH WiFi 6 จำนวน 2 ตัว",
      price: "699 บาท",
      speed: "1Gbps/500Mbps",
      name: "SuperMESH WiFi",
      contract: "24 เดือน",
      theme: "mesh",
      tag: "สัญญาณครอบคลุมทั่วบ้าน",
      headline: "SuperMESH",
      accent: "WiFi 6",
      facts: [
        [
          "ความเร็วสูงสุด (ดาวน์โหลด / อัปโหลด)",
          {
            field: "speed",
          },
        ],
        [
          "ระยะสัญญา",
          {
            field: "contract",
          },
        ],
        ["อุปกรณ์ตามแพ็กเกจ", "เราเตอร์ MESH WiFi 6 จำนวน 2 ตัว (สิทธิ์ยืมตามเงื่อนไข)"],
        ["บริการที่ระบุในแพ็กเกจ", "AIS Secure Net"],
      ],
    },
    "entertainment-gang-599": {
      id: "entertainment-gang-599",
      description: "เน็ตบ้านพร้อม AIS PLAYBOX และความบันเทิงจาก PLAY LITE",
      price: "599 บาท",
      speed: "500Mbps/500Mbps",
      name: "Net & Entertainment Gang",
      contract: "24 เดือน",
      theme: "entertainment",
      tag: "เน็ตบ้านพร้อมความบันเทิง",
      headline: "Net & Entertainment",
      accent: "PLAY LITE",
      facts: [
        [
          "ความเร็วสูงสุด (ดาวน์โหลด / อัปโหลด)",
          {
            field: "speed",
          },
        ],
        [
          "ระยะสัญญา",
          {
            field: "contract",
          },
        ],
        ["อุปกรณ์ตามแพ็กเกจ", "เราเตอร์ WiFi 6 จำนวน 1 ตัว และ AIS PLAYBOX (สิทธิ์ยืมตามเงื่อนไข)"],
        ["ความบันเทิง", "PLAY LITE — รายละเอียดสิทธิ์ตามเว็บไซต์ AIS"],
        ["บริการที่ระบุในแพ็กเกจ", "AIS Secure Net"],
      ],
    },
    "broadband-pro-998": {
      id: "broadband-pro-998",
      description: "เน็ตบ้านรวมเน็ตมือถือ 40GB และโทรทุกเครือข่าย 150 นาที",
      price: "998 บาท",
      speed: "500Mbps/500Mbps",
      name: "Broadband Pro",
      contract: null,
      theme: "pro",
      tag: "เน็ตบ้านรวมสิทธิ์มือถือ",
      headline: "Broadband Pro",
      accent: "40GB",
      facts: [
        [
          "ความเร็วสูงสุด (ดาวน์โหลด / อัปโหลด)",
          {
            field: "speed",
          },
        ],
        ["อุปกรณ์ตามแพ็กเกจ", "เราเตอร์ AX3000 จำนวน 2 ตัว"],
        ["อินเทอร์เน็ตมือถือ", "40GB ต่อรอบบิล หลังใช้ครบลดความเร็วเหลือ 4Mbps"],
        ["โทรทุกเครือข่าย", "150 นาที ต่อรอบบิล"],
        ["บริการที่ระบุในแพ็กเกจ", "AIS Secure Net"],
        [
          "สิทธิ์ทดลองใช้บริการเพิ่มเติม",
          "FlowAccount 2 เดือน · MyOrder 12 เดือน · SlipOK 3 เดือน · Spotify Premium 4 เดือน ตามเงื่อนไขการรับสิทธิ์",
        ],
      ],
    },
    "netflix-699": {
      id: "netflix-699",
      price: "699",
      quality: "พื้นฐาน HD",
      speed: "500/500 Mbps",
      name: "Netflix Lover",
      devices: 1,
    },
    "netflix-799": {
      id: "netflix-799",
      price: "799",
      quality: "พื้นฐาน HD",
      speed: "1Gbps/500 Mbps",
      name: "Netflix Lover",
      devices: 1,
    },
    "netflix-899": {
      id: "netflix-899",
      price: "899",
      quality: "มาตรฐาน Full HD",
      speed: "1Gbps/500 Mbps",
      name: "Netflix Lover",
      devices: 2,
    },
    "netflix-999": {
      id: "netflix-999",
      price: "999",
      quality: "พรีเมียม 4K Ultra HD",
      speed: "1Gbps/500 Mbps",
      name: "Netflix Lover",
      devices: 4,
    },
    "sme-690": {
      id: "sme-690",
      router: "AX3000 × 2 ตัว",
      price: "690",
      speed: "500/500 Mbps",
      name: "แพ็กเกจธุรกิจ",
    },
    "sme-899": {
      id: "sme-899",
      router: "F50 × 2 ตัว",
      price: "899",
      speed: "1000/1000 Mbps",
      name: "แพ็กเกจธุรกิจ",
    },
    "sme-1199": {
      id: "sme-1199",
      router: "F50 × 3 ตัว",
      price: "1,199",
      speed: "1000/1000 Mbps",
      name: "แพ็กเกจธุรกิจ",
    },
    "sme-1499": {
      id: "sme-1499",
      router: "F50 × 4 ตัว",
      price: "1,499",
      speed: "1000/1000 Mbps",
      name: "แพ็กเกจธุรกิจ",
    },
    "sme-1799": {
      id: "sme-1799",
      router: "F50 × 5 ตัว",
      price: "1,799",
      speed: "1000/1000 Mbps",
      name: "แพ็กเกจธุรกิจ",
    },
  },
};
// Group lists reference the canonical objects. Facts with {field} also resolve from those objects.
for (const [group, packageIds] of Object.entries(window.KioskData.packageGroups)) {
  window.KioskData[group] = packageIds.map((id) => window.KioskData.packages[id]);
}

/* ===== สถานะการใช้งาน ===== */
/* Session state belongs to this kiosk tab. */
window.Kiosk = {
  data: window.KioskData,
};
(() => {
  const kioskApplication = window.Kiosk;
  const storageKey = "ais-tv-pad-v1.02h";
  kioskApplication.canvasSize = { width: 2160 };
  kioskApplication.diagnostics = [];
  kioskApplication.reportIssue = (code) => {
    const entry = { code, occurredAt: Date.now(), page: document.body.dataset.currentPage };
    kioskApplication.diagnostics.push(entry);
    if (kioskApplication.diagnostics.length > 20) kioskApplication.diagnostics.shift();
    if (kioskApplication.data.config.diagnosticsEnabled) console.warn("[Kiosk]", entry);
  };
  const createInitialSessionState = () => ({
    version: 8,
    navigationHistory: [],
    business: null,
    businessPackage: null,
    detail: null,
    welcomeFeature: null,
    scroll: {},
    lastActivity: Date.now(),
    idle: false,
  });
  let saved;
  try {
    saved = JSON.parse(sessionStorage.getItem(storageKey));
  } catch {
    kioskApplication.reportIssue("SESSION_READ_FAILED");
  }
  // Preserve a session opened with the previous V1.01 property names.
  if (saved?.version === 7) {
    saved.navigationHistory = saved.navigationHistory || saved.nav || [];
    saved.businessPackage = saved.businessPackage ?? saved.smePackage ?? null;
    delete saved.nav;
    delete saved.smePackage;
    saved.version = 8;
  }
  const isValidSavedState = saved?.version === 8 &&
    Array.isArray(saved.navigationHistory) &&
    saved.navigationHistory.every(route => typeof route === "string") &&
    saved.scroll !== null && typeof saved.scroll === "object" && !Array.isArray(saved.scroll) &&
    Object.values(saved.scroll).every(position => Number.isFinite(position) && position >= 0) &&
    Number.isFinite(saved.lastActivity) && typeof saved.idle === "boolean";
  if (saved && !isValidSavedState) kioskApplication.reportIssue("SESSION_STATE_INVALID");
  kioskApplication.state = isValidSavedState ? saved : createInitialSessionState();
  kioskApplication.saveSessionState = () => {
    try {
      sessionStorage.setItem(storageKey, JSON.stringify(kioskApplication.state));
    } catch {
      kioskApplication.reportIssue("SESSION_SAVE_FAILED");
    }
  };
  kioskApplication.resetSessionState = () => {
    kioskApplication.state = createInitialSessionState();
    kioskApplication.saveSessionState();
  };
  kioskApplication.escapeHtml = (value) =>
    String(value ?? "").replace(
      /[&<>"']/g,
      (character) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[character],
    );
  kioskApplication.getAssetPath = (path) => path;
  kioskApplication.getCurrentPage = () => document.body.dataset.currentPage;
  kioskApplication.getPageScroller = () => {
    return document.getElementById("viewport");
  };
  kioskApplication.getPageDefinition = (slug) =>
    kioskApplication.data.pages.find((pageDefinition) => pageDefinition.slug === slug);
  kioskApplication.announce = (text) => {
    document.getElementById("announcer").textContent = text;
  };
})();

/* ===== เปลี่ยนหน้าและย้อนกลับ ===== */
/* URL owns the destination; each history entry owns its return context. */
(() => {
  const kioskApplication = window.Kiosk;
  const pageFiles = {
    entertainment: "entertainment-promotions.html",
    welcome: "welcome-packages.html",
    netflix: "netflix-packages.html",
    "smart-home": "smart-home.html",
    "sme-business": "business-types.html",
    "sme-packages": "business-packages.html",
    "sme-addons": "business-additional-services.html",
    detail: "package-details.html",
    home: "index.html",
  };
  const parseRoute = (value) => {
    const parts = String(value || kioskApplication.getCurrentPage() || "home")
      .replace(/^#/, "")
      .split("/");
    try {
      if (parts[0] === "detail" && parts.length === 3)
        return {
          page: "detail",
          detail: {
            group: decodeURIComponent(parts[1]),
            id: decodeURIComponent(parts[2]),
          },
        };
      if (parts[0] === "welcome" && parts[1] === "features" && parts.length === 3)
        return {
          page: "welcome",
          feature: decodeURIComponent(parts[2]),
        };
    } catch {}
    return {
      page: parts[0] || "home",
      feature: null,
    };
  };
  kioskApplication.applyRoute = (route) => {
    if (route.page === "welcome") kioskApplication.state.welcomeFeature = route.feature || null;
    if (route.page === "detail") kioskApplication.state.detail = route.detail || null;
  };
  kioskApplication.getRouteHash = (slug) =>
    slug === "detail" && kioskApplication.state.detail
      ? "#detail/" +
        encodeURIComponent(kioskApplication.state.detail.group) +
        "/" +
        encodeURIComponent(kioskApplication.state.detail.id)
      : slug === "welcome" && kioskApplication.state.welcomeFeature
        ? "#welcome/features/" + encodeURIComponent(kioskApplication.state.welcomeFeature)
        : "#" + slug;
  kioskApplication.getScrollStateKey = () =>
    kioskApplication.getRouteHash(kioskApplication.getCurrentPage()).slice(1);
  kioskApplication.readCurrentRoute = () => parseRoute(location.hash);
  kioskApplication.saveScrollPositions = () => {
    const screen = document.querySelector(".kiosk-screen:not([hidden])"),
      element = screen?.querySelector(".package-carousel");
    if (element)
      kioskApplication.state.scroll[
        element.dataset.scrollKey || kioskApplication.getScrollStateKey()
      ] = element.scrollLeft;
    kioskApplication.state.scroll["page:" + kioskApplication.getScrollStateKey()] =
      kioskApplication.getPageScroller()?.scrollTop || 0;
    kioskApplication.saveSessionState();
  };
  const createHistorySnapshot = () => ({
    kiosk: true,
    navigationHistory: [...kioskApplication.state.navigationHistory],
    business: kioskApplication.state.business,
  });
  kioskApplication.navigate = (target, { record = true, replace = false, saveScroll = true } = {}) => {
    const route = parseRoute(target);
    if (!kioskApplication.getPageDefinition(route.page)) return;
    const before = kioskApplication.getRouteHash(kioskApplication.getCurrentPage());
    if (saveScroll) kioskApplication.saveScrollPositions();
    kioskApplication.stopVideos?.();
    if (record && before !== "#" + target)
      kioskApplication.state.navigationHistory.push(before.slice(1));
    kioskApplication.applyRoute(route);
    kioskApplication.saveSessionState();
    const next = kioskApplication.getRouteHash(route.page);
    const file = pageFiles[route.page];
    const destination = file + next;
    if (replace) location.replace(destination);
    else location.assign(destination);
  };
  kioskApplication.goHome = () => kioskApplication.navigate("home");
  kioskApplication.goBack = () => {
    const target = kioskApplication.state.navigationHistory.pop() || "home";
    kioskApplication.navigate(target, {
      record: false,
      replace: true,
    });
  };
  kioskApplication.showPage = (slug) => {
    document.querySelectorAll(".kiosk-screen").forEach((screen) => {
      screen.hidden = screen.dataset.page !== slug;
    });
    document.body.dataset.currentPage = slug;
    document.title = kioskApplication.getPageDefinition(slug).title + " — AIS Vertical TV Pad";
    kioskApplication.refreshPage?.();
    kioskApplication.resizeCanvasToViewport?.();
    const page = kioskApplication.getPageScroller();
    if (page)
      page.scrollTop =
        kioskApplication.state.scroll["page:" + kioskApplication.getScrollStateKey()] || 0;
  };
  window.addEventListener("popstate", (event) => {
    kioskApplication.saveScrollPositions();
    if (kioskApplication.state.idle) kioskApplication.leaveIdle();
    kioskApplication.state.navigationHistory = Array.isArray(event.state?.navigationHistory)
      ? [...event.state.navigationHistory]
      : [];
    if (event.state?.business !== undefined) kioskApplication.state.business = event.state.business;
    const route = kioskApplication.readCurrentRoute();
    if (!kioskApplication.getPageDefinition(route.page)) {
      kioskApplication.navigate("home", {
        record: false,
        replace: true,
      });
      return;
    }
    kioskApplication.applyRoute(route);
    kioskApplication.saveSessionState();
    kioskApplication.stopVideos?.();
    if (route.page !== kioskApplication.getCurrentPage()) {
      kioskApplication.navigate(location.hash.slice(1), {
        record: false,
        replace: true,
      });
      return;
    }
    kioskApplication.showPage(route.page);
  });
  kioskApplication.createHistorySnapshot = createHistorySnapshot;
})();

/* Clickable Carousel Pagination Dots; native swipe remains available. */
(() => {
  const app = window.Kiosk;
  app.initializeWelcomeControls = (element) => {
    if (!element.classList.contains("welcome-package-list") || element.dataset.controlsReady) return;
    element.dataset.controlsReady = "true";
    element.removeAttribute("data-carousel-controls");
    if (!element.id) element.id = "welcome-package-carousel";
    const cards = [...element.querySelectorAll(".package-card")];
    if (!cards.length) return;
    const controls = document.createElement("div");
    controls.className = "welcome-carousel-controls";
    const shell = document.createElement("div");
    shell.className = "welcome-carousel-shell";
    element.before(shell);
    shell.append(element);
    controls.innerHTML = `<div class="welcome-carousel-dots" role="group" aria-label="เลือกแพ็กเกจ"></div>`;
    shell.after(controls);
    const dotsRoot = controls.querySelector(".welcome-carousel-dots");
    let stops = [], dots = [], target = element.scrollLeft, frame = 0, lastTime = 0;
    const maximum = () => Math.max(0, element.scrollWidth - element.clientWidth);
    const clamp = value => Math.max(0, Math.min(maximum(), value));
    const nearest = position => {
      let index = 0, distance = Infinity;
      stops.forEach((stop, i) => {
        const delta = Math.abs(stop - position);
        if (delta < distance) { distance = delta; index = i; }
      });
      return index;
    };
    const update = () => {
      const active = nearest(clamp(element.scrollLeft));
      dots.forEach((dot, index) => {
        if (index === active) dot.setAttribute("aria-current", "true");
        else dot.removeAttribute("aria-current");
      });
    };
    const layout = () => {
      // Keep only the original end gutter; the last card stops at the right edge.
      element.style.removeProperty("padding-right");
      const end = maximum();
      const positions = [0, ...cards.map(card => clamp(card.offsetLeft - cards[0].offsetLeft)), end];
      const unique = positions.sort((a, b) => a - b).filter((position, index, list) =>
        index === 0 || position - list[index - 1] > 1);
      if (unique.length !== stops.length || unique.some((value, i) => Math.abs(value - stops[i]) > 1)) {
        const focused = dots.indexOf(document.activeElement);
        stops = unique;
        dotsRoot.replaceChildren();
        dots = stops.map((position, index) => {
          const dot = document.createElement("button");
          dot.className = "welcome-carousel-dot";
          dot.type = "button";
          dot.setAttribute("aria-label", `ดูตำแหน่งแพ็กเกจ ${index + 1} จาก ${stops.length}`);
          dot.setAttribute("aria-controls", element.id);
          dot.addEventListener("click", () => goTo(index));
          dotsRoot.append(dot);
          return dot;
        });
        if (focused >= 0) dots[Math.min(focused, dots.length - 1)]?.focus({ preventScroll: true });
      }
      target = clamp(target);
      update();
    };
    const cancel = () => {
      cancelAnimationFrame(frame); frame = 0; lastTime = 0;
      target = clamp(element.scrollLeft); update();
    };
    const animate = time => {
      const elapsed = Math.min(50, lastTime ? time - lastTime : 16);
      lastTime = time; target = clamp(target);
      const distance = target - element.scrollLeft;
      if (Math.abs(distance) < 1) {
        element.scrollLeft = target; frame = 0; lastTime = 0; update(); return;
      }
      element.scrollLeft += distance * (1 - Math.exp(-elapsed / 90));
      update();
      frame = requestAnimationFrame(animate);
    };
    function goTo(index) {
      target = stops[Math.max(0, Math.min(stops.length - 1, index))];
      if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
        cancelAnimationFrame(frame); frame = 0; lastTime = 0;
        element.scrollLeft = target; update(); return;
      }
      if (!frame) frame = requestAnimationFrame(animate);
      update();
    }
    for (const type of ["pointerdown", "touchstart", "wheel", "keydown"])
      element.addEventListener(type, cancel, { passive: true, capture: true });
    element.addEventListener("scroll", () => {
      if (!frame) target = clamp(element.scrollLeft);
      update();
    }, { passive: true });
    const observer = new ResizeObserver(layout);
    observer.observe(element);
    cards.forEach(card => observer.observe(card));
    layout();
    // Font metrics may change reachable positions after the first layout.
    document.fonts?.ready.then(layout);

  };
})();

/* ===== เลื่อนการ์ดด้วยนิ้วและเมาส์ ===== */
/* Free horizontal drag/wheel scrolling. Released positions never snap. */
(() => {
  const kioskApplication = window.Kiosk;
  kioskApplication.initializeCarousels = () =>
    document
      .querySelectorAll(".kiosk-screen:not([hidden]) .package-carousel")
      .forEach((element) => {
        kioskApplication.initializeWelcomeControls?.(element);
        element.dataset.scrollKey = kioskApplication.getScrollStateKey();
        if (element.dataset.ready) return;
        element.dataset.ready = "true";
        let drag = null,
          suppressClick = false,
          touchStart = null,
          saveTimer = null;
        const scheduleSave = () => {
          clearTimeout(saveTimer);
          saveTimer = setTimeout(saveCarouselPosition, kioskApplication.data.config.carouselSaveDelayMilliseconds);
        };
        const saveCarouselPosition = () => {
          if (element.closest(".kiosk-screen").hidden) return;
          kioskApplication.state.scroll[element.dataset.scrollKey] = element.scrollLeft;
          kioskApplication.saveSessionState();
        };
        element.addEventListener("touchstart", (event) => {
          suppressClick = false;
          touchStart = event.touches.length === 1 ? event.touches[0].clientX : null;
        }, { passive: true });
        element.addEventListener("touchmove", (event) => {
          if (touchStart !== null && event.touches.length === 1 &&
              Math.abs(event.touches[0].clientX - touchStart) > kioskApplication.data.config.dragThresholdScreenPixels)
            suppressClick = true;
        }, { passive: true });
        element.addEventListener("touchend", () => { touchStart = null; scheduleSave(); }, { passive: true });
        element.addEventListener("touchcancel", () => { touchStart = null; scheduleSave(); }, { passive: true });
        element.addEventListener("pointerdown", (event) => {
          if (!event.isPrimary || event.pointerType !== "mouse" || event.button !== 0) return;
          suppressClick = false;
          drag = {
            pointerId: event.pointerId,
            initialClientX: event.clientX,
            initialScrollLeft: element.scrollLeft,
            moved: false,
          };
        });
        window.addEventListener(
          "pointermove",
          (event) => {
            if (!drag || drag.pointerId !== event.pointerId) return;
            const horizontalDistance = event.clientX - drag.initialClientX;
            if (!drag.moved) {
              if (
                Math.abs(horizontalDistance) <
                kioskApplication.data.config.dragThresholdScreenPixels
              )
                return;
              drag.moved = true;
              element.classList.add("is-dragging");
              element.setPointerCapture(event.pointerId);
            }
            event.preventDefault();
            element.scrollLeft =
              drag.initialScrollLeft - horizontalDistance / kioskApplication.scale;
          },
          {
            passive: false,
          },
        );
        const finishDragging = (event) => {
          if (!drag || drag.pointerId !== event.pointerId) return;
          suppressClick = drag.moved;
          drag = null;
          element.classList.remove("is-dragging");
          if (element.hasPointerCapture(event.pointerId))
            element.releasePointerCapture(event.pointerId);
          saveCarouselPosition();
        };
        window.addEventListener("pointerup", finishDragging);
        window.addEventListener("pointercancel", finishDragging);
        element.addEventListener("lostpointercapture", finishDragging);
        element.addEventListener(
          "click",
          (event) => {
            if (suppressClick) {
              event.preventDefault();
              event.stopImmediatePropagation();
              suppressClick = false;
            }
          },
          true,
        );
        element.addEventListener("dragstart", (event) => event.preventDefault());
        element.addEventListener(
          "wheel",
          (event) => {
            if (event.ctrlKey || drag) return;
            if (!event.shiftKey && Math.abs(event.deltaY) >= Math.abs(event.deltaX)) return;
            event.preventDefault();
            let scrollDistance = event.shiftKey ? event.deltaY || event.deltaX : event.deltaX;
            if (event.deltaMode === 1)
              scrollDistance *= kioskApplication.data.config.wheelLineScreenPixels;
            else if (event.deltaMode === 2)
              scrollDistance *= element.clientWidth * kioskApplication.scale;
            element.scrollLeft += scrollDistance / kioskApplication.scale;
            scheduleSave();
          },
          {
            passive: false,
          },
        );
        element.addEventListener("keydown", (event) => {
          if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
          event.preventDefault();
          element.scrollLeft +=
            (event.key === "ArrowRight" ? 1 : -1) *
            element.clientWidth *
            kioskApplication.data.config.keyboardScrollFraction;
          saveCarouselPosition();
        });
        element.addEventListener("scroll", scheduleSave, {
          passive: true,
        });
      });
})();

/* ===== วิดีโอ Home และ Idle ===== */
/* Local MP4 playback and poster fallback for the brand and idle screen. */
(() => {
  const kioskApplication = window.Kiosk;
  const playVideo = (video) => {
    if (!video || document.hidden) return;
    video.play().catch(error => {
      // A normal page change or pause may interrupt a pending play request.
      if (error.name !== "AbortError") kioskApplication.reportIssue("VIDEO_PLAY_FAILED");
    });
  };
  kioskApplication.resumeVisibleVideos = () => {
    if (document.hidden) return;
    const selector = kioskApplication.state.idle
      ? "#idle-root video" : ".kiosk-screen:not([hidden]) video";
    document.querySelectorAll(selector).forEach(playVideo);
  };
  kioskApplication.stopVideos = () =>
    document.querySelectorAll("video").forEach((video) => video.pause());
  kioskApplication.initializePageVideos = () => {
    if (kioskApplication.state.idle) return;
    document
      .querySelectorAll(".kiosk-screen:not([hidden]) [data-inline-video]")
      .forEach((mediaContainer) => {
        const mediaSource = kioskApplication.data.config.videos[mediaContainer.dataset.inlineVideo];
        if (!mediaSource) return;
        if (mediaContainer.querySelector(".brand-video__fallback-image")) return;
        let video = mediaContainer.querySelector("video");
        if (!video) {
          video = document.createElement("video");
          video.className = "brand-video__media";
          video.src = kioskApplication.getAssetPath(mediaSource);
          video.poster = kioskApplication.getAssetPath(kioskApplication.data.assets.brandPoster);
          video.autoplay = true;
          video.muted = true;
          video.loop = true;
          video.playsInline = true;
          video.preload = "auto";
          video.controls = false;
          video.disablePictureInPicture = true;
          video.setAttribute("disableremoteplayback", "");
          video.setAttribute("tabindex", "-1");
          video.setAttribute("aria-label", "THANK YOU, MY HOME");
          mediaContainer.replaceChildren(video);
          video.addEventListener(
            "error",
            () => {
              const fallback = document.createElement("img");
              fallback.className = "brand-video__fallback-image";
              fallback.src = kioskApplication.getAssetPath(
                kioskApplication.data.assets.brandPoster,
              );
              fallback.alt = "THANK YOU, MY HOME";
              mediaContainer.replaceChildren(fallback);
            },
            {
              once: true,
            },
          );
        }
        playVideo(video);
      });
  };
  kioskApplication.startIdleVideos = (root) => {
    root.querySelectorAll("video").forEach(video => {
      video.addEventListener("error", () => {
        const image = document.createElement("img");
        image.className = video.classList.contains("idle-video-backdrop") ? "idle-poster-backdrop" : "idle-poster";
        image.src = kioskApplication.getAssetPath(kioskApplication.data.assets.idlePoster);
        image.alt = "";
        video.replaceWith(image);
      }, { once: true });
      video.addEventListener("stalled", () => kioskApplication.reportIssue("VIDEO_STALLED"));
      playVideo(video);
    });
  };
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) kioskApplication.stopVideos();
    else {
      kioskApplication.checkIdleTimeout?.();
      kioskApplication.resumeVisibleVideos();
    }
  });
  document.addEventListener("contextmenu", (event) => {
    if (event.target.closest("[data-inline-video],#idle-root")) event.preventDefault();
  });
})();

/* ===== พักจอและเริ่มใช้งาน ===== */
/* Idle screen: brand media plus the original Touch To Start bar. */
(() => {
  const kioskApplication = window.Kiosk;
  let keyboardNavigation = false;
  const activePointers = new Set();
  let lastSavedAt = 0;
  kioskApplication.recordUserActivity = () => {
    if (kioskApplication.state.idle) return;
    const now = Date.now();
    kioskApplication.state.lastActivity = now;
    // Movement and scrolling can fire every frame; avoid synchronous storage on every event.
    if (now - lastSavedAt >= kioskApplication.data.config.saveIntervalMilliseconds) {
      kioskApplication.saveSessionState();
      lastSavedAt = now;
    }
  };
  kioskApplication.leaveIdle = () => {
    kioskApplication.stopVideos();
    const root = document.getElementById("idle-root");
    root.hidden = true;
    root.replaceChildren();
    document.documentElement.classList.remove("is-idle");
    kioskApplication.state.idle = false;
    kioskApplication.saveSessionState();
    document.querySelectorAll(".kiosk-screen").forEach((screen) => (screen.inert = false));
  };
  kioskApplication.enterIdle = () => {
    kioskApplication.saveScrollPositions();
    kioskApplication.stopVideos();
    kioskApplication.resetSessionState();
    kioskApplication.state.idle = true;
    kioskApplication.saveSessionState();
    document.querySelectorAll(".kiosk-screen").forEach((screen) => (screen.inert = true));
    const root = document.getElementById("idle-root");
    const mediaSource = kioskApplication.data.config.videos.idle;
    const poster = kioskApplication.escapeHtml(
      kioskApplication.getAssetPath(kioskApplication.data.assets.idlePoster),
    );
    const media = (mediaSource
      ? `<video class="idle-video" aria-hidden="true" tabindex="-1" src="${kioskApplication.escapeHtml(kioskApplication.getAssetPath(mediaSource))}" poster="${poster}" autoplay loop muted playsinline preload="metadata" disablepictureinpicture disableremoteplayback></video>`
      : `<img class="idle-poster" src="${poster}" alt="">`);
    const background = mediaSource
      ? media.replace('class="idle-video"', 'class="idle-video-backdrop"')
      : `<img class="idle-poster-backdrop" src="${poster}" alt="" aria-hidden="true">`;
    root.innerHTML = `<section class="idle-screen" role="dialog" aria-modal="true" aria-label="หน้ารอ"><div class="idle-media">${background}${media}</div><div class="idle-start-bar" aria-hidden="true"><p class="idle-start-bar__thai">สัมผัสหน้าจอเพื่อทำรายการ</p><p class="idle-start-bar__english">Touch To Start</p></div><button type="button" class="idle-screen__start-button" data-action="startSession" aria-label="สัมผัสหน้าจอเพื่อทำรายการ — Touch To Start"></button></section>`;
    root.hidden = false;
    document.documentElement.classList.add("is-idle");
    keyboardNavigation = false;
    root.querySelector(".idle-screen__start-button").focus({
      preventScroll: true,
    });
    kioskApplication.startIdleVideos(root);
  };
  kioskApplication.startSession = () => {
    if (!kioskApplication.state.idle || kioskApplication.startingSession) return;
    kioskApplication.startingSession = true;
    const root = document.getElementById("idle-root");
    const button = root.querySelector(".idle-screen__start-button");
    if (button) button.disabled = true;
    root.setAttribute("aria-busy", "true");
    kioskApplication.resetSessionState();
    kioskApplication.state.idle = false;
    kioskApplication.saveSessionState();
    if (kioskApplication.getCurrentPage() === "home") {
      kioskApplication.applyRoute({ page: "home", feature: null });
      kioskApplication.showPage("home");
      kioskApplication.getPageScroller().scrollTop = 0;
      kioskApplication.leaveIdle();
      kioskApplication.resumeVisibleVideos?.();
      root.removeAttribute("aria-busy");
      kioskApplication.startingSession = false;
      return;
    }
    // Keep the Idle overlay covering the old page until the new document loads.
    try {
      kioskApplication.navigate("home", { record: false, replace: true, saveScroll: false });
    } catch (error) {
      kioskApplication.state.idle = true;
      kioskApplication.startingSession = false;
      if (button) button.disabled = false;
      root.removeAttribute("aria-busy");
      kioskApplication.saveSessionState();
      kioskApplication.resumeVisibleVideos?.();
      throw error;
    }
  };
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") return;
    keyboardNavigation = true;
    if (kioskApplication.state.idle)
      document.querySelector(".idle-screen")?.classList.add("keyboard-focus");
  });
  document.addEventListener(
    "pointerdown",
    () => {
      keyboardNavigation = false;
      document.querySelector(".idle-screen")?.classList.remove("keyboard-focus");
    },
    {
      passive: true,
    },
  );
  document.addEventListener(
    "pointerdown",
    (event) => {
      activePointers.add(event.pointerId);
      kioskApplication.recordUserActivity();
    },
    {
      passive: true,
    },
  );
  document.addEventListener(
    "pointermove",
    (event) => {
      if (activePointers.has(event.pointerId)) kioskApplication.recordUserActivity();
    },
    {
      passive: true,
    },
  );
  ["pointerup", "pointercancel"].forEach((type) =>
    document.addEventListener(
      type,
      (event) => {
        activePointers.delete(event.pointerId);
        kioskApplication.recordUserActivity();
      },
      {
        passive: true,
      },
    ),
  );
  ["keydown", "wheel", "click"].forEach((type) =>
    document.addEventListener(type, kioskApplication.recordUserActivity, {
      passive: true,
    }),
  );
  // Scroll does not bubble; capture includes page and carousel scrolls.
  document.addEventListener("scroll", kioskApplication.recordUserActivity, {
    capture: true,
    passive: true,
  });
  window.addEventListener("blur", () => activePointers.clear());
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) activePointers.clear();
  });
  window.addEventListener("pagehide", () => {
    if (!kioskApplication.startingSession) kioskApplication.saveScrollPositions();
    kioskApplication.stopVideos();
  });
  kioskApplication.checkIdleTimeout = () => {
    if (document.hidden || kioskApplication.state.idle) return;
    if (activePointers.size) {
      kioskApplication.recordUserActivity();
      return;
    }
    if (
      Date.now() - kioskApplication.state.lastActivity >=
      kioskApplication.data.config.idleTimeoutMilliseconds
    )
      kioskApplication.enterIdle();
  };
  setInterval(kioskApplication.checkIdleTimeout, kioskApplication.data.config.idlePollMilliseconds);
})();

/* ===== รายละเอียดแพ็กเกจ ===== */
/* Package information uses the shared detail panel layout. */
(() => {
  const kioskApplication = window.Kiosk,
    escapeHtml = kioskApplication.escapeHtml,
    allowedDetailGroups = new Set(["welcome", "features"]);
  kioskApplication.openDetail = (group, id) => {
    if (
      allowedDetailGroups.has(group) &&
      kioskApplication.data[group].some((item) => item.id === id)
    )
      kioskApplication.navigate(
        "detail/" + encodeURIComponent(group) + "/" + encodeURIComponent(id),
      );
  };
  const renderInformationPanel = ([label, value]) =>
    `<dl class="package-detail-panel__detail"><dt class="detail-caption">${escapeHtml(label)}</dt><dd class="detail-value">${escapeHtml(value)}</dd></dl>`;
  const renderPromotionArtwork = (item) =>
    `<div class="package-promotion-artwork package-promotion-artwork--${escapeHtml(item.theme)}"><p class="package-promotion-artwork__brand">AIS 3BB Fibre3</p><p class="package-promotion-artwork__tag">${escapeHtml(item.tag)}</p><p class="package-promotion-artwork__headline">${escapeHtml(item.headline)}</p><p class="package-promotion-artwork__accent">${escapeHtml(item.accent)}</p></div>`;
  kioskApplication.renderCurrentDetail = () => {
    if (kioskApplication.getCurrentPage() !== "detail") return;
    const root = document.querySelector("[data-detail-content]");
    if (!root) return;
    const selectedPackageDetails = kioskApplication.state.detail,
      item =
        selectedPackageDetails && allowedDetailGroups.has(selectedPackageDetails.group)
          ? kioskApplication.data[selectedPackageDetails.group].find(
              (item) => item.id === selectedPackageDetails.id,
            )
          : null;
    const returnLink = `<a class="interactive netflix-other-promotions-link detail-return" data-action="navigate" data-page="welcome" href="#welcome"><span class="netflix-other-promotions-link__label">ดูรายละเอียดโปรโมชั่นอื่น</span></a>`;
    if (!item) {
      root.innerHTML =
        '<div class="page-heading"><h1 class="page-heading__title heading-title">ไม่พบรายการ</h1></div>' +
        returnLink;
      return;
    }
    root.dataset.promotionId = item.id;
    const facts = (
      item.facts || (item.speed ? [["ความเร็วสูงสุด (ดาวน์โหลด / อัปโหลด)", item.speed]] : [])
    )
      .map(([label, value]) => [
        label,
        value && typeof value === "object" && value.field ? item[value.field] : value,
      ])
      .filter(([label, value]) => label && value);
    const netflix = kioskApplication.data.netflix.find((tier) => tier.id === item.nextPackageId);
    if (netflix)
      facts.push(["ความละเอียด", netflix.quality], ["รับชมพร้อมกัน", netflix.devices + " เครื่อง"]);
    const benefits = facts
      .filter(([label]) => /บริการที่ระบุ|ความบันเทิง|สิทธิ์/.test(label))
      .map(([, value]) => value);
    const information = facts.filter(([label]) => !/บริการที่ระบุ|ความบันเทิง|สิทธิ์/.test(label));
    // A price and three or more facts form four real panels. Never fabricate tiers.
    const panels = [];
    if (item.price)
      panels.push(
        `${item.priceStarting ? '<p class="detail-caption">ราคาเริ่มต้น</p>' : ""}<div class="package-detail-panel__pricing"><p class="package-detail-panel__price">${escapeHtml(String(item.price).replace(/\s*บาท\s*/, ""))}</p><div class="package-detail-panel__billing"><span class="package-detail-panel__currency">บาท</span><span class="package-detail-panel__period">ต่อเดือน</span></div></div>`,
      );
    const panelCount = Math.min(4 - panels.length, information.length),
      panelGroups = Array.from(
        {
          length: panelCount,
        },
        () => [],
      );
    information.forEach((entry, index) =>
      panelGroups[Math.min(index, panelCount - 1)]?.push(entry),
    );
    panelGroups.forEach((entries) => panels.push(entries.map(renderInformationPanel).join("")));
    const promotionArtwork = item.theme
      ? renderPromotionArtwork(item)
      : item.image
        ? `<img src="${escapeHtml(kioskApplication.getAssetPath(item.image))}" alt="${escapeHtml(item.name)}">`
        : "";
    root.innerHTML = `<div class="page-heading"><h1 class="page-heading__title heading-title">${escapeHtml(item.name)}</h1><p class="page-heading__description">${escapeHtml(item.description)}</p></div><div class="package-details-grid">${panels.map((panel) => `<article class="package-detail-panel">${panel}</article>`).join("")}</div>${benefits.length ? `<p class="detail-benefits">${escapeHtml(benefits.join(" · "))}</p>` : ""}${promotionArtwork ? `<div class="package-promotion-image">${promotionArtwork}</div>` : ""}${returnLink}`;
    document.title = item.name + " — AIS Vertical TV Pad";
  };
})();

/* ===== เปลี่ยน Hero ===== */
/* Prototype 63:44: shared cards; only the promotion Hero changes. */
(() => {
  const kioskApplication = window.Kiosk;
  kioskApplication.openFeature = (id) => {
    const destination = kioskApplication.data.flow.features[id];
    if (destination) kioskApplication.navigate(destination);
  };
  kioskApplication.renderWelcomeFeature = () => {
    if (kioskApplication.getCurrentPage() !== "welcome") return;
    const hero = document.querySelector("#page-welcome .welcome-hero");
    const feature =
      kioskApplication.data.features.find(
        (item) => item.id === kioskApplication.state.welcomeFeature,
      ) || kioskApplication.data.features[0];
    hero.dataset.promotion = feature.id;
    const heroImage = hero.querySelector("img"),
      mediaSource = kioskApplication.getAssetPath(feature.image);
    if (heroImage.getAttribute("src") !== mediaSource) heroImage.src = mediaSource;
    heroImage.alt = feature.name;
  };
})();

/* ===== ผูกปุ่มและเริ่มระบบ ===== */
(() => {
  const kioskApplication = window.Kiosk;
  const escapeHtml = kioskApplication.escapeHtml;
  kioskApplication.scale = 1;
  function getBoundValue(path) {
    return path
      .split(".")
      .reduce((value, propertyName) => value?.[propertyName], kioskApplication.data);
  }

  // Prepare the selected business before revealing its image and heading.
  kioskApplication.updateBusinessHero = (business) => {
    document.querySelectorAll("[data-business-image]").forEach((element) => {
      const id = business?.id || "";
      if (element.dataset.requestedBusiness === id) return;
      element.dataset.requestedBusiness = id;
      const imageRequestToken = (element.businessImageToken || 0) + 1;
      element.businessImageToken = imageRequestToken;
      element.classList.add("is-image-loading");
      element.removeAttribute("src");
      const page = element.closest(".kiosk-screen"),
        title = page?.querySelector("[data-business-title]"),
        mediaContainer = element.parentElement;
      mediaContainer.classList.remove("is-image-unavailable");
      if (title) title.textContent = "แพ็กเกจ SME สำหรับธุรกิจ";
      if (!business) return;
      const image = new Image();
      image.src = kioskApplication.getAssetPath(business.image);
      const reveal = async () => {
        try {
          await image.decode();
        } catch {}
        if (element.businessImageToken !== imageRequestToken) return;
        if (!image.naturalWidth) {
          mediaContainer.classList.add("is-image-unavailable");
          if (title) title.textContent = "แพ็กเกจ SME · " + business.name;
          return;
        }
        element.src = image.src;
        element.alt = business.name;
        if (title) title.textContent = "แพ็กเกจ SME · " + business.name;
        element.classList.remove("is-image-loading");
      };
      if (image.complete) reveal();
      else {
        image.onload = reveal;
        image.onerror = () => {
          if (element.businessImageToken !== imageRequestToken) return;
          mediaContainer.classList.add("is-image-unavailable");
          if (title) title.textContent = "แพ็กเกจ SME · " + business.name;
        };
      }
    });
  };
  kioskApplication.refreshPage = (focus = true) => {
    document.querySelectorAll("[data-bind]").forEach((element) => {
      const value = getBoundValue(element.dataset.bind);
      if (value !== undefined)
        element.textContent =
          element.dataset.format === "devices" ? "รับชมได้พร้อมกัน " + value + " เครื่อง" : value;
      else kioskApplication.reportIssue("CONTENT_BINDING_NOT_FOUND");
    });
    document.querySelectorAll("[data-package-label]").forEach((element) => {
      const item = kioskApplication.data.packages[element.dataset.packageLabel];
      if (!item) return;
      const prefix = element.hasAttribute("data-action") ? "ดูรายละเอียด " : "";
      element.setAttribute("aria-label", prefix + item.name + " " + item.price);
    });
    const business = kioskApplication.data.businesses.find(
      (businessItem) => businessItem.id === kioskApplication.state.business,
    );
    kioskApplication.updateBusinessHero(business);
    kioskApplication.renderWelcomeFeature?.();
    kioskApplication.renderCurrentDetail?.();
    kioskApplication.initializePageVideos?.();
    kioskApplication.initializeCarousels();
    const carousel = document.querySelector(
      ".kiosk-screen:not([hidden]) .package-carousel:not([hidden])",
    );
    if (carousel)
      carousel.scrollLeft =
        kioskApplication.state.scroll[kioskApplication.getScrollStateKey()] || 0;
    const screen = document.querySelector(".kiosk-screen:not([hidden])");
    if (focus && screen && !kioskApplication.state.idle)
      screen.focus({
        preventScroll: true,
      });
    kioskApplication.announce(
      kioskApplication.getPageDefinition(kioskApplication.getCurrentPage()).title,
    );
  };
  const findActionItem = (group, element) =>
    kioskApplication.data[group].find(
      (item) =>
        item.id ===
        (element.dataset.packageId ||
          element.dataset.businessId ||
          element.dataset.featureId ||
          element.dataset.productId ||
          element.dataset.addonId),
    );
  const actions = {
    navigate: (element) => kioskApplication.navigate(element.dataset.page),
    "go-home": () => kioskApplication.goHome(),
    "go-back": () => kioskApplication.goBack(),
    startSession: () => kioskApplication.startSession(),
    detail: (element) =>
      kioskApplication.openDetail(element.dataset.detailGroup, element.dataset.detailId),
    feature: (element) => {
      const item = findActionItem("features", element);
      if (item) kioskApplication.openFeature(item.id);
      else kioskApplication.reportIssue("FEATURE_NOT_FOUND");
    },
    welcome: (element) => {
      const item = findActionItem("welcome", element);
      if (!item) {
        kioskApplication.reportIssue("PACKAGE_NOT_FOUND");
        return;
      }
      kioskApplication.navigate(
        kioskApplication.data.flow.welcomeVariants[kioskApplication.state.welcomeFeature]?.[
          item.id
        ] ||
          kioskApplication.data.flow.welcome[item.id] ||
          "detail/welcome/" + item.id,
      );
    },
    business: (element) => {
      const item = findActionItem("businesses", element);
      if (!item) {
        kioskApplication.reportIssue("BUSINESS_NOT_FOUND");
        return;
      }
      kioskApplication.state.business = item.id;
      kioskApplication.saveSessionState();
      kioskApplication.navigate("sme-packages");
    },
  };
  document.addEventListener("click", (event) => {
    if (event.target.closest("video")) return;
    const element = event.target.closest("[data-action]");
    if (element) {
      event.preventDefault();
      actions[element.dataset.action]?.(element);
    } else if (event.target.closest("#idle-root")) kioskApplication.startSession();
  });
  document.addEventListener("keydown", (event) => {
    if (
      (event.key === "Enter" || event.key === " ") &&
      event.target.matches('[role="button"]:not(button)')
    ) {
      event.preventDefault();
      actions[event.target.dataset.action]?.(event.target);
    }
    if (kioskApplication.state.idle && event.key === "Tab") {
      event.preventDefault();
      document.querySelector(".idle-screen__start-button")?.focus();
    }
  });
  // Restore one 2160 × 3840 coordinate system without cutting off longer pages.
  kioskApplication.resizeCanvasToViewport = () => {
    const viewport = document.getElementById("viewport");
    const canvas = document.getElementById("canvas");
    const wrapper = document.getElementById("wrapper");
    const scale = Math.min(1, viewport.clientWidth / 2160, viewport.clientHeight / 3840);
    kioskApplication.scale = scale || 1;
    canvas.style.transform = `scale(${kioskApplication.scale})`;
    wrapper.style.width = 2160 * kioskApplication.scale + "px";
    wrapper.style.height = Math.max(3840, canvas.offsetHeight) * kioskApplication.scale + "px";
    document.getElementById("idle-root").style.setProperty("--idle-scale", kioskApplication.scale);
  };
  // Font loading and generated details can change the unscaled content height.
  const canvasObserver = new ResizeObserver(kioskApplication.resizeCanvasToViewport);
  canvasObserver.observe(document.getElementById("canvas"));
  window.addEventListener("pageshow", (event) => {
    if (!event.persisted) return;
    if (kioskApplication.startingSession) {
      kioskApplication.startingSession = false;
      kioskApplication.leaveIdle();
      document.getElementById("idle-root").removeAttribute("aria-busy");
    }
    if (Array.isArray(history.state?.navigationHistory))
      kioskApplication.state.navigationHistory = [...history.state.navigationHistory];
    if (history.state?.business !== undefined)
      kioskApplication.state.business = history.state.business;
    kioskApplication.applyRoute(kioskApplication.readCurrentRoute());
    kioskApplication.saveSessionState();
    kioskApplication.refreshPage(false);
    kioskApplication.resizeCanvasToViewport();
    kioskApplication.checkIdleTimeout();
    kioskApplication.resumeVisibleVideos?.();
  });
  window.addEventListener("resize", kioskApplication.resizeCanvasToViewport);
  document.fonts.ready.then(kioskApplication.resizeCanvasToViewport);
  kioskApplication.resizeCanvasToViewport();
  const route = kioskApplication.readCurrentRoute();
  const slug = kioskApplication.getPageDefinition(route.page)
    ? route.page
    : kioskApplication.getCurrentPage();
  if (slug !== kioskApplication.getCurrentPage()) {
    kioskApplication.navigate(location.hash.slice(1) || slug, {
      record: false,
      replace: true,
    });
    return;
  }
  kioskApplication.applyRoute(route);
  if (history.state?.kiosk && history.state.business !== undefined)
    kioskApplication.state.business = history.state.business;
  if (Array.isArray(history.state?.navigationHistory))
    kioskApplication.state.navigationHistory = [...history.state.navigationHistory];
  history.replaceState(
    kioskApplication.createHistorySnapshot(),
    "",
    kioskApplication.getRouteHash(slug),
  );
  kioskApplication.showPage(slug);
  if (kioskApplication.state.idle) kioskApplication.enterIdle();
  else kioskApplication.checkIdleTimeout();
})();

/* a05: Kiosk content must not open the long-press copy menu. */
for (const root of [document.getElementById("canvas"), document.getElementById("idle-root")]) {
  root.addEventListener("contextmenu", event => event.preventDefault());
  root.addEventListener("selectstart", event => event.preventDefault());
}

(() => {
  const app = window.Kiosk;
  const viewport = document.getElementById('viewport');
  let saveTimer;
  viewport.addEventListener('scroll', () => {
    if (app.state.idle) return;
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      if (app.state.idle) return;
      app.state.scroll['page:' + app.getScrollStateKey()] = viewport.scrollTop;
      app.saveSessionState();
    }, app.data.config.carouselSaveDelayMilliseconds);
  }, { passive: true });
})();
