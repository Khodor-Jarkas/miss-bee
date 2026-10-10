/**
 * Ms. Bee Detergents & Cleaning Supplies - Main Interactive Application Logic
 * Featuring Full English / Arabic Bilingual Localization & Multi-Department Catalog
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Stain Removal Guide Interactive Engine
    initStainGuide();

    // 2. Multi-Department Product Filtering
    initProductFilters();

    // 3. Mobile Navigation Toggle
    initMobileNav();

    // 4. Smooth Anchor Scrolling
    initSmoothScroll();

    // 5. Bilingual Language Switcher (English & Arabic)
    initLanguageSwitcher();
});

// Translation Dictionary for English and Arabic
const TRANSLATIONS = {
    en: {
        topBanner: "Everyday cleaning, thoughtfully made.",
        topBannerLink: "Find your new routine →",
        navProducts: "All Products",
        navToilet: "Bathroom Care",
        navDishes: "Dishwashing",
        navHands: "Hand Care",
        navGlass: "Glass Care",
        navFloors: "Floor Care",
        navDisinfectant: "Disinfectants",
        navStain: "Stain Guide",
        navPackaging: "Eco Packaging",
        navSustainability: "Sustainability",
        whereToBuy: "Browse Products",
        heroBadge: "The new online home of Ms. Bee & Co.",
        heroTitleLine1: "A little more care",
        heroTitleLine2: "in every clean.",
        heroDesc: "Ms. Bee is growing beyond social media. Explore the home-care range, find practical cleaning guidance, and follow the journey here.",
        heroBtn1: "Explore the range",
        heroBtn2: "Get stain advice",
        catSubtitle: "A place for everything",
        catTitle: "A little help for every room",
        needTitle: "Browse by Department",
        needDesc: "A few everyday cleaning essentials for the bathroom, kitchen and rest of home.",
        needBtn: "Explore Range →",
        typeTitle: "Professional Hygiene",
        typeDesc: "Formulated for deep disinfection, stain removal, and skin-friendly everyday use.",
        typeBtn: "Discover Formulas →",
        stainSubtitle: "A few useful cleaning notes",
        stainTitle: "A little help with the mess",
        stainDesc: "Choose what you’re cleaning for a few simple pointers. Always follow the directions on the product label.",
        stainLabel1: "1. What are you cleaning?",
        stainLabel2: "2. Which surface or item?",
        productContact: "Ask about availability",
        brandTag: "Growing beyond social",
        brandTitle1: "A NEW HOME",
        brandTitle2: "FOR MS. BEE.",
        brandDesc: "What began on social media is becoming a dedicated place to discover the range, get practical cleaning tips, and stay connected with Ms. Bee & Co.",
        brandBoxTitle: "A brand in the making",
        brandBoxDesc: "Thanks for being part of Ms. Bee’s next chapter.",
        instagramLink: "Follow on Instagram",
        facebookLink: "Visit Facebook",
        rangeSubtitle: "Product Catalog",
        rangeTitle: "Featured Cleaning & Disinfection Supplies",
        filterAll: "All Supplies",
        filterToilet: "Toilet Cleaner",
        filterDish: "Dishwashing",
        filterHand: "Hand Wash",
        filterGlass: "Glass Cleaner",
        filterFloor: "Floor Cleaner",
        filterDisinfect: "Antiseptic",
        lcaSubtitle: "About Ms. Bee",
        lcaTitle: "A cleaner home. A healthier family.",
        lcaDesc1: "Ms. Bee & Co. brings together the home-cleaning essentials shown across the brand’s product range.",
        lcaDesc2: "From toilet cleaner and dishwashing liquid to glass cleaner, hand soap and floor cleaner.",
        lcaBtn: "Follow Ms. Bee on Instagram",
        socialSubtitle: "Stay connected",
        socialTitle: "Follow Ms. Bee’s next chapter",
        socialDesc: "Find new products, updates and behind-the-scenes moments on our social channels."
    },
    ar: {
        topBanner: "عناية مدروسة لتنظيف المنزل كل يوم.",
        topBannerLink: "اكتشف روتينك الجديد ←",
        navProducts: "جميع المنتجات",
        navToilet: "تنظيف الحمام",
        navDishes: "غسيل الأطباق",
        navHands: "غسيل الأيدي",
        navGlass: "تنظيف الزجاج",
        navFloors: "تنظيف الأرضيات",
        navDisinfectant: "المطهرات والمعقمات",
        navStain: "دليل البقع",
        navPackaging: "التغليف المستدام",
        navSustainability: "الاستدامة",
        whereToBuy: "تصفح المنتجات",
        heroBadge: "الموقع الإلكتروني الجديد لـ Ms. Bee & Co.",
        heroTitleLine1: "عناية أكثر",
        heroTitleLine2: "في كل تنظيف.",
        heroDesc: "تتوسع Ms. Bee إلى ما هو أبعد من وسائل التواصل الاجتماعي. اكتشف منتجات العناية بالمنزل ونصائح التنظيف وتابع رحلتنا هنا.",
        heroBtn1: "اكتشف التشكيلة",
        heroBtn2: "نصائح لإزالة البقع",
        catSubtitle: "لكل شيء مكانه",
        catTitle: "عناية بسيطة لكل غرفة",
        needTitle: "تصفح حسب قسم النظافة",
        needDesc: "أساسيات يومية للعناية بالحمام والمطبخ وبقية أرجاء المنزل.",
        needBtn: "استكشف التشكيلة ←",
        typeTitle: "معايير تعقيم احترافية",
        typeDesc: "تركيبات تم تطويرها للتطهير العميق، إزالة الدهون والبقع، مع الحفاظ على نعومة البشرة وسلامة المنزل.",
        typeBtn: "اكتشف التركيبات ←",
        stainSubtitle: "إرشادات بسيطة للتنظيف",
        stainTitle: "مساعدة بسيطة للتنظيف",
        stainDesc: "اختر ما تريد تنظيفه للحصول على بعض الإرشادات. اتبع دائماً التعليمات الموجودة على ملصق المنتج.",
        stainLabel1: "١. ماذا تريد أن تنظف؟",
        stainLabel2: "٢. ما السطح أو الغرض؟",
        productContact: "استفسر عن توفر المنتج",
        brandTag: "نتوسع إلى ما هو أبعد من التواصل الاجتماعي",
        brandTitle1: "منزل جديد",
        brandTitle2: "لـ MS. BEE.",
        brandDesc: "بدأت رحلتنا على وسائل التواصل الاجتماعي، واليوم نصنع مكاناً مخصصاً لاكتشاف المنتجات والحصول على نصائح عملية ومتابعة أخبار Ms. Bee & Co.",
        brandBoxTitle: "علامة تجارية تنمو",
        brandBoxDesc: "شكراً لمشاركتكم في فصل Ms. Bee الجديد.",
        instagramLink: "تابعنا على إنستغرام",
        facebookLink: "زُر فيسبوك",
        rangeSubtitle: "كتالوج المنتجات",
        rangeTitle: "منتجات النظافة والتطهير المميزة",
        filterAll: "جميع المنتجات",
        filterToilet: "منظف المرحاض",
        filterDish: "سائل الأطباق",
        filterHand: "غسول اليدين",
        filterGlass: "منظف الزجاج",
        filterFloor: "منظف الأرضيات",
        filterDisinfect: "المطهر والمعقم",
        lcaSubtitle: "عن مس بي",
        lcaTitle: "منزل أنظف. عائلة أصح.",
        lcaDesc1: "تجمع Ms. Bee & Co. أساسيات تنظيف المنزل التي تظهر في تشكيلة العلامة.",
        lcaDesc2: "منظف المرحاض وسائل غسل الأطباق إلى منظف الزجاج وصابون اليدين ومنظف الأرضيات.",
        lcaBtn: "تابع Ms. Bee على إنستغرام",
        socialSubtitle: "ابقَ على تواصل",
        socialTitle: "تابعوا الفصل الجديد من Ms. Bee",
        socialDesc: "اكتشفوا المنتجات الجديدة والأخبار ولمحات من كواليس العمل عبر قنواتنا الاجتماعية."
    }
};

function initLanguageSwitcher() {
    const langBtn = document.getElementById('lang-toggle-btn');
    const langDropdown = document.getElementById('lang-dropdown');
    const currentLangLabel = document.getElementById('current-lang-label');
    const enCheck = document.getElementById('en-check');
    const arCheck = document.getElementById('ar-check');

    if (!langBtn || !langDropdown) return;

    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('hidden');
    });

    document.addEventListener('click', () => {
        if (!langDropdown.classList.contains('hidden')) {
            langDropdown.classList.add('hidden');
        }
    });

    document.querySelectorAll('[data-lang]').forEach(button => {
        button.addEventListener('click', () => {
            const selectedLang = button.getAttribute('data-lang');
            setLanguage(selectedLang);
            langDropdown.classList.add('hidden');
        });
    });

    function setLanguage(lang) {
        const isRtl = (lang === 'ar');
        document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
        document.documentElement.setAttribute('lang', lang);

        if (currentLangLabel) {
            currentLangLabel.textContent = isRtl ? 'العربية' : 'English';
        }

        if (enCheck && arCheck) {
            if (isRtl) {
                enCheck.classList.add('hidden');
                arCheck.classList.remove('hidden');
            } else {
                enCheck.classList.remove('hidden');
                arCheck.classList.add('hidden');
            }
        }

        const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.textContent = dict[key];
            }
        });

        const stainSelector = document.getElementById('stain-selector');
        if (stainSelector) {
            stainSelector.dispatchEvent(new Event('change'));
        }
    }
}

// Practical, label-first pointers for the products shown in this demo.
const STAIN_DATA = {
    toilet: {
        name: "Toilet bowl care",
        nameAr: "تنظيف المرحاض",
        icon: "01",
        temp: "Follow the product label",
        product: "Toilet Cleaner",
        productAr: "منظف المرحاض",
        steps: [
            "Read the directions and safety information on the bottle.",
            "Apply only as directed, taking care not to splash.",
            "Rinse or flush as directed on the label."
        ],
        stepsAr: [
            "اقرأ تعليمات الاستخدام وإرشادات السلامة على العبوة.",
            "استخدم المنتج وفق التعليمات، مع تجنب تناثره.",
            "اشطف أو اسحب السيفون وفقاً لما هو موضح على الملصق."
        ],
        tip: "Never mix toilet cleaner with bleach or any other cleaning product.",
        tipAr: "لا تخلط منظف المرحاض مع المبيض أو أي منتج تنظيف آخر."
    },
    grease_dish: {
        name: "Everyday washing-up",
        nameAr: "غسل الأطباق اليومي",
        icon: "02",
        temp: "Use as directed",
        product: "Lemon Dishwashing Liquid",
        productAr: "سائل غسل الأطباق بالليمون",
        steps: [
            "Remove leftover food from dishes before washing.",
            "Use the dishwashing liquid as directed on the bottle.",
            "Rinse dishes thoroughly with clean water."
        ],
        stepsAr: [
            "أزل بقايا الطعام عن الأطباق قبل غسلها.",
            "استخدم سائل غسل الأطباق وفق التعليمات على العبوة.",
            "اشطف الأطباق جيداً بالماء النظيف."
        ],
        tip: "Keep dishwashing liquid out of reach of children.",
        tipAr: "احفظ سائل غسل الأطباق بعيداً عن متناول الأطفال."
    },
    glass_clean: {
        name: "Glass and windows",
        nameAr: "الزجاج والنوافذ",
        icon: "03",
        temp: "Use as directed",
        product: "Glass Cleaner",
        productAr: "منظف الزجاج",
        steps: [
            "Check the label to make sure the surface is suitable.",
            "Apply the cleaner as directed and wipe with a clean cloth.",
            "Keep the product away from eyes and avoid breathing spray."
        ],
        stepsAr: [
            "تحقق من ملصق المنتج للتأكد من ملاءمته للسطح.",
            "استخدم المنظف وفق التعليمات وامسح بقطعة قماش نظيفة.",
            "أبعد المنتج عن العينين وتجنب استنشاق الرذاذ."
        ],
        tip: "Test on a small, inconspicuous area first.",
        tipAr: "اختبر المنتج أولاً على مساحة صغيرة وغير ظاهرة."
    },
    floor_grime: {
        name: "Floor cleaning",
        nameAr: "تنظيف الأرضيات",
        icon: "04",
        temp: "Check the dilution on the label",
        product: "Floor Cleaner",
        productAr: "منظف الأرضيات",
        steps: [
            "Sweep or vacuum loose dirt before cleaning.",
            "Check the label for the right amount of product and water.",
            "Try the solution on a small area before cleaning the full floor."
        ],
        stepsAr: [
            "اكنس الأوساخ أو استخدم المكنسة الكهربائية قبل التنظيف.",
            "تحقق من الملصق لمعرفة الكمية المناسبة من المنتج والماء.",
            "جرب المحلول على مساحة صغيرة قبل تنظيف الأرضية بالكامل."
        ],
        tip: "Not every floor cleaner suits every finish. Check the label first.",
        tipAr: "لا يناسب كل منظف جميع أنواع الأرضيات. تحقق من الملصق أولاً."
    },
    germ_disinfect: {
        name: "Surface disinfection",
        nameAr: "تطهير الأسطح",
        icon: "05",
        temp: "Follow the product label",
        product: "Antiseptic Disinfectant",
        productAr: "المطهر والمعقم",
        steps: [
            "Check the label for approved surfaces and directions.",
            "Use only the dilution and method stated on the product.",
            "Follow the contact time and any rinse instructions on the label."
        ],
        stepsAr: [
            "تحقق من الملصق لمعرفة الأسطح المسموح بها وطريقة الاستخدام.",
            "استخدم التخفيف والطريقة المذكورين على المنتج فقط.",
            "اتبع مدة التلامس وتعليمات الشطف الموجودة على الملصق."
        ],
        tip: "Never mix disinfectant with other cleaners.",
        tipAr: "لا تخلط المطهر مع منظفات أخرى."
    },
    hand_hygiene: {
        name: "Hand washing",
        nameAr: "غسل اليدين",
        icon: "06",
        temp: "Use as directed",
        product: "Liquid Hand Soap",
        productAr: "صابون اليدين السائل",
        steps: [
            "Wet hands with clean, running water.",
            "Lather with soap, covering palms, backs of hands and between fingers.",
            "Rinse well and dry with a clean towel."
        ],
        stepsAr: [
            "بلل يديك بالماء الجاري النظيف.",
            "افرك الصابون على راحتي اليدين وظهرهما وبين الأصابع.",
            "اشطف يديك جيداً وجففهما بمنشفة نظيفة."
        ],
        tip: "Wash hands before preparing food and after using the bathroom.",
        tipAr: "اغسل يديك قبل تحضير الطعام وبعد استخدام الحمام."
    }
};

function initStainGuide() {
    const stainSelector = document.getElementById('stain-selector');
    const resultBox = document.getElementById('stain-result-card');

    if (!stainSelector || !resultBox) return;

    function renderSolution() {
        const isAr = document.documentElement.getAttribute('lang') === 'ar';
        const stainKey = stainSelector.value || 'toilet';
        const data = STAIN_DATA[stainKey] || STAIN_DATA.toilet;

        const title = isAr ? `${data.nameAr}` : `${data.name}`;
        const steps = isAr ? data.stepsAr : data.steps;
        const tip = isAr ? data.tipAr : data.tip;
        const product = isAr ? data.productAr : data.product;
        const tempText = isAr ? `اتبع التعليمات: ${data.temp}` : `Directions: ${data.temp}`;
        const protocolText = isAr ? "إرشادات بسيطة" : "A few pointers";
        const tipTitle = isAr ? "تنبيه للسلامة" : "Safety note";
        const recText = isAr ? "المنتج المناسب:" : "Related product:";

        resultBox.innerHTML = `
            <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div class="flex items-center gap-3">
                    <span class="text-4xl p-3 bg-emerald-50 rounded-2xl shrink-0">${data.icon}</span>
                    <div class="text-left rtl:text-right">
                        <span class="text-xs uppercase tracking-widest font-bold text-emerald-700">${protocolText}</span>
                        <h4 class="text-xl sm:text-2xl font-black text-slate-900 font-display">${title}</h4>
                    </div>
                </div>
                <div class="flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full font-bold text-sm shrink-0">
                    <svg class="w-4 h-4 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                    ${tempText}
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                ${steps.map((step, idx) => `
                    <div class="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col justify-between text-left rtl:text-right">
                        <div>
                            <span class="inline-block w-7 h-7 rounded-full bg-emerald-600 text-white font-black text-center text-xs leading-7 mb-2 font-display">0${idx + 1}</span>
                            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">${step}</p>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="bg-emerald-50/80 p-4 rounded-2xl border border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div class="flex items-center gap-3 text-left rtl:text-right">
                    <svg class="w-6 h-6 text-emerald-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                    </svg>
                    <div>
                        <span class="text-xs font-bold text-emerald-800 uppercase">${tipTitle}</span>
                        <p class="text-xs text-slate-700 font-medium">${tip}</p>
                    </div>
                </div>
                <div class="shrink-0 text-left sm:text-right rtl:text-right rtl:sm:text-left">
                    <span class="text-xs text-slate-500 block font-semibold">${recText}</span>
                    <span class="text-sm font-extrabold text-slate-900 font-display">${product}</span>
                </div>
            </div>
        `;
    }

    stainSelector.addEventListener('change', renderSolution);
    renderSolution();
}

function initProductFilters() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    const productCards = document.querySelectorAll('[data-category]');

    if (!filterButtons.length) return;

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => {
                b.classList.remove('bg-emerald-600', 'text-white', 'shadow-md');
                b.classList.add('bg-white', 'text-slate-700', 'border', 'border-slate-200');
            });
            btn.classList.add('bg-emerald-600', 'text-white', 'shadow-md');
            btn.classList.remove('bg-white', 'text-slate-700', 'border', 'border-slate-200');

            const filter = btn.getAttribute('data-filter');

            productCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

function initMobileNav() {
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElem = document.querySelector(targetId);
                if (targetElem) {
                    e.preventDefault();
                    targetElem.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}
