const translations = {
    id: {
        pageTitle: 'Portofolio | Yudhistira Andhika',
        pageDescription: 'Portofolio Yudhistira Andhika, software developer yang berfokus pada pengembangan web.',
        mainNavigation: 'Navigasi utama',
        logoHome: 'My Portofolio, ke beranda',
        languageSelection: 'Pilih bahasa',
        openMenu: 'Buka menu',
        closeMenu: 'Tutup menu',
        navHome: 'Beranda',
        navAbout: 'Tentang',
        navProjects: 'Proyek',
        navContact: 'Hubungi saya',
        heroEyebrow: 'JASA WEBSITE UNTUK UMKM & BISNIS',
        heroGreeting: 'Halo, saya',
        heroDescription: 'Saya membantu bisnis lokal, UMKM, dan restoran tampil lebih profesional online dengan website yang cepat, aman, dan mudah digunakan.',
        heroProjects: 'Lihat proyek',
        heroAbout: 'Kenali saya',
        heroNote: 'Website untuk bisnis yang ingin naik kelas.',
        heroArtLabel: 'Ringkasan teknologi pengembangan web',
        heroCardLabel: 'AREA YANG SAYA TEKUNI',
        heroCardLineOne: 'Mengubah ide',
        heroCardLineTwo: 'menjadi',
        heroCardWebsite: 'website.',
        heroCardFooter: 'Responsif · Fungsional · Terus berkembang',
        scrollCue: 'Gulir untuk menjelajah',
        photoAlt: 'Foto profil Yudhistira Andhika',
        aboutEyebrow: 'TENTANG SAYA',
        aboutGreeting: 'Halo, saya',
        aboutIntroStart: 'Saya seorang',
        aboutIntroEnd: 'yang tertarik membangun website dan aplikasi web yang responsif, fungsional, dan mudah digunakan.',
        aboutDescription: 'Saya senang mengembangkan ide menjadi solusi digital, mulai dari menyusun tampilan yang nyaman digunakan hingga menghubungkan fitur dengan data. Saya terus belajar dan mengasah kemampuan melalui proyek-proyek pengembangan web.',
        skillsLabel: 'Teknologi yang saya pelajari',
        projectsEyebrow: 'KARYA PILIHAN',
        projectsTitle: 'Proyek terbaru',
        projectsIntro: 'Beberapa hal yang pernah saya bangun sambil terus mengasah kemampuan.',
        posTitle: 'Aplikasi Kasir (POS)',
        posDescription: 'Sistem manajemen inventaris dan Point of Sale berbasis web untuk membantu proses transaksi.',
        webAppTag: 'Aplikasi Web',
        inventoryTag: 'Inventaris',
        projectDemo: 'Lihat demo',
        javaTitle: 'Konsol OOP Java',
        javaDescription: 'Aplikasi konsol yang menerapkan hierarki kelas dan konsep inheritance dalam pemrograman berorientasi objek.',
        restaurantTitle: 'Website Rumah Makan',
        restaurantDescription: 'Website responsif rumah makan dengan katalog menu, pencarian, filter kategori, dan keranjang pesanan WhatsApp.',
        restaurantDemo: 'Lihat demo',
        contactEyebrow: 'PUNYA IDE MENARIK?',
        contactLineOne: 'Mari bangun bisnis',
        contactLineTwo: 'yang',
        contactMeaning: 'lebih kuat online.',
        contactDescription: 'Saya membantu UMKM dan bisnis lokal membangun website yang cepat, profesional, dan siap menangani pelanggan.',
        contactButton: 'Kirim email',
        contactDecorationOne: 'AYO',
        contactDecorationTwo: 'BERKARYA',
        backToTop: 'Kembali ke atas'
    },
    en: {
        pageTitle: 'Portfolio | Yudhistira Andhika',
        pageDescription: 'Yudhistira Andhika’s portfolio, a software developer focused on web development.',
        mainNavigation: 'Main navigation',
        logoHome: 'My Portfolio, go to home',
        languageSelection: 'Select language',
        openMenu: 'Open menu',
        closeMenu: 'Close menu',
        navHome: 'Home',
        navAbout: 'About',
        navProjects: 'Projects',
        navContact: 'Contact me',
        heroEyebrow: 'WEBSITE SERVICES FOR MSMEs & BUSINESSES',
        heroGreeting: "Hi, I'm",
        heroDescription: 'I help local businesses, MSMEs, and restaurants look more professional online with websites that are fast, secure, and easy to use.',
        heroProjects: 'View projects',
        heroAbout: 'Get to know me',
        heroNote: 'Websites for businesses ready to grow.',
        heroArtLabel: 'Web development technology summary',
        heroCardLabel: 'WHAT I FOCUS ON',
        heroCardLineOne: 'Turning ideas',
        heroCardLineTwo: 'into',
        heroCardWebsite: 'websites.',
        heroCardFooter: 'Responsive · Functional · Always improving',
        scrollCue: 'Scroll to explore',
        photoAlt: 'Portrait of Yudhistira Andhika',
        aboutEyebrow: 'ABOUT ME',
        aboutGreeting: "Hello, I'm",
        aboutIntroStart: "I'm a",
        aboutIntroEnd: 'who enjoys building responsive, functional, and easy-to-use websites and web applications.',
        aboutDescription: 'I enjoy turning ideas into digital solutions, from creating comfortable user interfaces to connecting features with data. I keep learning and refining my skills through web development projects.',
        skillsLabel: 'Technologies I work with',
        projectsEyebrow: 'SELECTED WORK',
        projectsTitle: 'Recent projects',
        projectsIntro: 'A few things I have built while continuing to develop my skills.',
        posTitle: 'Point of Sale (POS)',
        posDescription: 'A web-based inventory management and point-of-sale system designed to support transactions.',
        webAppTag: 'Web App',
        inventoryTag: 'Inventory',
        projectDemo: 'View demo',
        javaTitle: 'Java OOP Console App',
        javaDescription: 'A console application that applies class hierarchies and inheritance in object-oriented programming.',
        restaurantTitle: 'Restaurant Website',
        restaurantDescription: 'A responsive restaurant website featuring a menu catalog, search, category filters, and a WhatsApp order cart.',
        restaurantDemo: 'View demo',
        contactEyebrow: 'HAVE AN INTERESTING IDEA?',
        contactLineOne: "Let's build a business",
        contactLineTwo: 'that',
        contactMeaning: 'stands out online.',
        contactDescription: "I help MSMEs and local businesses build websites that are fast, professional, and ready to serve customers.",
        contactButton: 'Send an email',
        contactDecorationOne: "LET'S",
        contactDecorationTwo: 'CREATE',
        backToTop: 'Back to top'
    }
};

const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const languageButtons = document.querySelectorAll('[data-language]');

const closeMenu = () => {
    if (!mobileMenu || !navLinks) return;

    navLinks.classList.remove('active');
    mobileMenu.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-label', translations[document.documentElement.lang].openMenu);
};

const setLanguage = language => {
    const selectedTranslations = translations[language];
    if (!selectedTranslations) return;

    document.documentElement.lang = language;
    document.title = selectedTranslations.pageTitle;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
        description.setAttribute('content', selectedTranslations.pageDescription);
    }

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        if (selectedTranslations[key]) {
            element.textContent = selectedTranslations[key];
        }
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach(element => {
        const key = element.dataset.i18nAriaLabel;
        if (selectedTranslations[key]) {
            element.setAttribute('aria-label', selectedTranslations[key]);
        }
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
        const key = element.dataset.i18nAlt;
        if (selectedTranslations[key]) {
            element.setAttribute('alt', selectedTranslations[key]);
        }
    });

    languageButtons.forEach(button => {
        const isSelected = button.dataset.language === language;
        button.classList.toggle('is-active', isSelected);
        button.setAttribute('aria-pressed', String(isSelected));
    });

    if (mobileMenu) {
        const isExpanded = mobileMenu.getAttribute('aria-expanded') === 'true';
        mobileMenu.setAttribute('aria-label', selectedTranslations[isExpanded ? 'closeMenu' : 'openMenu']);
    }
};

if (mobileMenu && navLinks) {
    mobileMenu.addEventListener('click', () => {
        const isExpanded = mobileMenu.getAttribute('aria-expanded') === 'true';
        const language = translations[document.documentElement.lang];
        mobileMenu.setAttribute('aria-expanded', String(!isExpanded));
        mobileMenu.setAttribute('aria-label', language[isExpanded ? 'openMenu' : 'closeMenu']);
        navLinks.classList.toggle('active', !isExpanded);
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });
}

languageButtons.forEach(button => {
    button.addEventListener('click', () => setLanguage(button.dataset.language));
});
