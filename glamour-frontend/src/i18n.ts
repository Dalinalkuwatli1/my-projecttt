import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navbar
      nav: {
        collections: "Collections",
        atelier: "Atelier",
        journal: "Journal",
        ourStory: "Our Story",
        contact: "Contact",
        bookAppointment: "Book Appointment"
      },
      // Footer
      footer: {
        brandDesc: "Defining modern elegance through masterfully crafted bridal wear since 2020.",
        explore: "Explore",
        exploreLinks: {
          collections: "Collections",
          trunkShows: "Trunk Shows",
          realBrides: "Real Brides",
          ourStory: "Our Story"
        },
        service: "Service",
        serviceLinks: {
          bookAppointment: "Book Appointment",
          sizeGuide: "Size Guide",
          faq: "FAQ",
          contactUs: "Contact Us"
        },
        newsletter: "Newsletter",
        newsletterDesc: "Be the first to know about new collections and exclusive events.",
        emailPlaceholder: "Your email address",
        rights: "© {{year}} Glamour Group. All rights reserved.",
        privacy: "Privacy",
        terms: "Terms"
      },
      // Home
      home: {
        hero: {
          preTitle: "✦ Crafted for Timeless Brides ✦",
          title1: "Elegance Woven",
          title2: "Into Every Detail",
          btnExplore: "Explore Collection",
          btnBook: "Book Fitting"
        },
        features: {
          f1: "Handcrafted Designs",
          f2: "Premium Fabrics",
          f3: "Custom Fitting",
          f4: "500+ Happy Brides"
        },
        gallery: {
          label: "Latest Arrivals",
          title: "Curated Masterpieces",
          subtitle: "Each gown is a work of art, meticulously crafted to celebrate your most unforgettable moment.",
          btnViewAll: "View All Collections",
          quickView: "Quick View"
        },
        testimonials: {
          label: "Client Stories",
          title: "Real Brides, Real Moments",
          verified: "Verified Bride"
        },
        contact: {
          label: "Private Consultation",
          title: "Book Your Experience",
          subtitle: "Schedule a private fitting session with our expert stylists.",
          name: "Full Name",
          email: "Email Address",
          phone: "Phone Number",
          message: "How can we assist you?",
          btnSubmit: "Request Appointment",
          visitUs: "Visit Our Atelier"
        }
      },
      // Collections
      collections: {
        label: "Our Gowns",
        title: "The Collections",
        subtitle: "Discover our exclusive range of bridal wear, where each collection tells a unique story of love, artistry, and elegance.",
        colLabel: "Collection",
        btnView: "View Collection",
        items: {
          c1: { name: "Spring Reverie 2027", desc: "A celebration of floral motifs, lightweight tulle, and romantic silhouettes." },
          c2: { name: "Classic Elegance", desc: "Timeless designs featuring heavy satin, intricate lace, and architectural structure." },
          c3: { name: "Modern Minimalist", desc: "Clean lines, stark whites, and unembellished perfection for the contemporary bride." }
        },
        gownsTitle: "The Atelier Gallery",
        gownsSubtitle: "Browse our signature creations, handcrafted for the modern bride.",
        quickView: "Quick View",
        quickViewModal: {
          title: "Elegant Wedding Dress",
          chooseColor: "Choose Color:",
          chooseSize: "Choose Size:",
          rateProduct: "Rate this product:",
          addToCart: "Add to Cart",
          colors: {
            white: "White",
            offWhite: "Off White"
          },
          sizes: {
            s: "S",
            m: "M",
            l: "L"
          }
        },
        gowns: {
          g1: { name: "Royal Empress Gown", category: "Ballgown" },
          g2: { name: "Aria Silhouette Gown", category: "Mermaid" },
          g3: { name: "Celestine Glow Gown", category: "Ballgown" },
          g4: { name: "Duchess Illusion Gown", category: "Imperial" },
          g5: { name: "Ivory Whisper Gown", category: "A-Line" },
          g6: { name: "Ethereal Off-Shoulder Gown", category: "Romantic" },
          g7: { name: "Siren of Tulle Gown", category: "Boho Chic" },
          g8: { name: "Modest Grace Gown", category: "Modest Luxury" }
        }
      },
      // Atelier
      atelier: {
        hero: {
          label: "The House of Glamour",
          title: "Where Dreams Take Shape",
          desc: "Every GLAMOUR gown is born in our Istanbul atelier. Here, masterful artisans spend hundreds of hours draping, stitching, and embellishing, ensuring that the dress you wear on your most important day is nothing short of perfection."
        },
        craft: {
          title: "The Art of the Craft",
          p1: "We believe that true luxury lies in the unseen details. From the initial sketch to the final fitting, every step is executed with an uncompromising commitment to quality.",
          p2: "Our master tailors use only the finest European silks, French laces, and hand-placed Swarovski crystals. A single gown can require over 400 hours of delicate handwork.",
          quote: "\"A dress should not just fit the body; it should elevate the spirit.\"",
          designer: "— Head Designer"
        }
      },
      // Journal
      journal: {
        label: "Editorial",
        title: "The Journal",
        subtitle: "Stories of love, style guides, and an exclusive look behind the doors of our atelier.",
        featured: {
          badge: "Editorial Focus",
          title: "The Evolution of the Modern Bridal Veil",
          desc: "Explore how this traditional accessory has been reinvented for the contemporary bride.",
          date: "November 02, 2026"
        },
        articles: {
          a1: { cat: "Style Guide", title: "Choosing the Perfect Silhouette for Your Body Type", date: "October 12, 2026" },
          a2: { cat: "Real Brides", title: "A Tuscan Dream: Sophia & Marco's Vintage Wedding", date: "September 28, 2026" },
          a3: { cat: "Behind the Seams", title: "The Making of the 'Spring Reverie' Collection", date: "September 15, 2026" },
          a4: { cat: "Trends", title: "Why Minimalist Bridal Wear is Here to Stay", date: "August 30, 2026" }
        }
      },
      // Book Appointment
      book: {
        info: {
          title: "The Fitting Experience",
          desc: "Your appointment is a private, 90-minute session with a dedicated stylist. Enjoy complimentary champagne while you explore our collections in an intimate setting.",
          location: "Flagship Atelier",
          address1: "Nişantaşı, Abdi İpekçi Cd.",
          address2: "34367 Şişli/İstanbul, Turkey",
          hours: "Mon - Sat: 10:00 AM - 7:00 PM"
        },
        form: {
          label: "Reserve Your Time",
          title: "Book an Appointment",
          firstName: "First Name",
          lastName: "Last Name",
          email: "Email Address",
          phone: "Phone Number",
          date: "Preferred Date",
          time: "Preferred Time",
          timeOptions: {
            placeholder: "Select Time",
            morning: "Morning (10AM - 1PM)",
            afternoon: "Afternoon (1PM - 4PM)",
            evening: "Evening (4PM - 7PM)"
          },
          notes: "Wedding Date & Additional Notes",
          btnSubmit: "Request Appointment",
          disclaimer: "By submitting, you agree to our booking terms. A stylist will contact you to confirm."
        }
      }
    }
  },
  ar: {
    translation: {
      // Navbar
      nav: {
        collections: "المجموعات الحصرية",
        atelier: "المشغل الرئيسي",
        journal: "أوراق إبداعية",
        ourStory: "إرث الدار",
        contact: "تواصل راقٍ",
        bookAppointment: "احجزي جلستكِ الحصرية"
      },
      // Footer
      footer: {
        brandDesc: "نسج فصول الجمال الاستثنائي والأناقة الخالدة من خلال فساتين زفاف صُنعت يدوياً بشغف مطلق منذ عام 2020.",
        explore: "آفاق الاكتشاف",
        exploreLinks: {
          collections: "المجموعات الحصرية",
          trunkShows: "عروض المنصة الخاصة",
          realBrides: "عرائس جلامور",
          ourStory: "قصة الدار"
        },
        service: "رعاية النخبة",
        serviceLinks: {
          bookAppointment: "حجز جلسة قياس خاصة",
          sizeGuide: "دليل القياسات الفني",
          faq: "الأسئلة الشائعة",
          contactUs: "قنوات الاتصال الفاخرة"
        },
        newsletter: "رسائل إلهام الدار",
        newsletterDesc: "كوني أول من يطّلع على مجموعاتنا الجديدة، وفعالياتنا المغلقة لكبار الشخصيات.",
        emailPlaceholder: "عنوان بريدكِ الإلكتروني الفاخر",
        rights: "© {{year}} لمجموعة جلامور الفاخرة. جميع الحقوق محفوظة.",
        privacy: "ميثاق الخصوصية",
        terms: "أحكام وشروط الخدمة"
      },
      // Home
      home: {
        hero: {
          preTitle: "✦ صُنعت لعروسٍ يخلدها التاريخ ✦",
          title1: "فخامةٌ منسوجة",
          title2: "في كل تفصيلة",
          btnExplore: "استكشفي المجموعات الحصرية",
          btnBook: "احجزي جلسة قياسكِ الخاصة"
        },
        features: {
          f1: "خياطة يدوية رفيعة",
          f2: "أقمشة حريرية ملكية",
          f3: "تعديل مقاسات شخصي",
          f4: "+500 عروس متوجة بالحب"
        },
        gallery: {
          label: "روائع المشغل الأحدث",
          title: "مقتنيات منتقاة بعناية",
          subtitle: "كل فستان هو قطعة فنية متفردة، كُتبت تفاصيلها بدقة متناهية لتخليد أسعد أيام العمر بالبهاء المطلق.",
          btnViewAll: "عرض كافة المجموعات الفاخرة",
          quickView: "الاستعراض الفوري الفاخر"
        },
        testimonials: {
          label: "شهادات النخبة",
          title: "عرائس جلامور، ولحظات لا تغيب",
          verified: "عروس جلامور الموثقة"
        },
        contact: {
          label: "جلسة استشارية خاصة ومغلقة",
          title: "احجزي موعد تجربتك الخاصة",
          subtitle: "حددي موعد جلسة قياس خاصة ومغلقة مع مصممي ومنسقي الدار الفنيين.",
          name: "الاسم الكامل لسيادتكم",
          email: "عنوان بريدكم الإلكتروني",
          phone: "رقم الاتصال المباشر",
          message: "كيف يمكن لمستشارينا مساعدة سيادتكم؟",
          btnSubmit: "إرسال طلب الحجز الفاخر",
          visitUs: "شرفي وزوري مشغلنا الرئيسي"
        }
      },
      // Collections
      collections: {
        label: "إبداعاتنا من الفساتين",
        title: "المجموعات الراقية",
        subtitle: "اكتشفي روائع التصاميم وصيحات الموضة الأكثر فخامة لعروس تفيض بالجمال والملائكية.",
        colLabel: "الفصل البصري",
        btnView: "استكشاف تفاصيل المجموعة",
        items: {
          c1: { name: "أحلام الربيع 2027", desc: "احتفاء شاعري بزخارف الزهور المجسمة، وطيات التول الشفاف الخفيف، والظلاف الرومانسية الحالمة." },
          c2: { name: "أناقة كلاسيكية ملكية", desc: "تصاميم ملكية خالدة تعتمد على الساتان الدوقس الفاخر، والدانتيل العتيق المعقد، والقصّات الهندسية المهيبة." },
          c3: { name: "بساطة عصرية راقية", desc: "انحناءات هندسية نقية، بياض ثلجي ناصع، وجمال خالٍ من التكلف صُنع خصيصاً للعروس المعاصرة الجريئة." }
        },
        gownsTitle: "معرض روائع المشغل",
        gownsSubtitle: "تصفحي قطعنا الفنية الخالدة، المصنوعة يدوياً بكامل الحب والخبرة.",
        quickView: "الاستعراض السريع الفاخر",
        quickViewModal: {
          title: "أيقونة زفاف راقية",
          chooseColor: "درجة اللون المفضلة:",
          chooseSize: "المقاس الملائم لسيادتكم:",
          rateProduct: "تقييم القطعة الفنية:",
          addToCart: "إضافة إلى حقيبة المشتريات الفاخرة",
          colors: {
            white: "أبيض ناصع",
            offWhite: "أوف وايت عاجي"
          },
          sizes: {
            s: "S (صغير)",
            m: "M (متوسط)",
            l: "L (كبير)"
          }
        },
        gowns: {
          g1: { name: "فستان الإمبراطورة الملكي", category: "منفوش فاخر" },
          g2: { name: "فستان ظلال آريا", category: "حورية البحر الأنيق" },
          g3: { name: "فستان توهج سيلستين", category: "منفوش ملكي" },
          g4: { name: "فستان الوهم الدوقي", category: "إمبراطوري راقٍ" },
          g5: { name: "فستان همس العاج", category: "إيه لاين كلاسيكي" },
          g6: { name: "فستان الأكتاف المنسدلة الأثيري", category: "رومانسي حالم" },
          g7: { name: "فستان تول سيرين", category: "بوهيمي أنيق" },
          g8: { name: "فستان النعمة المحتشمة", category: "فخامة محتشمة" }
        }
      },
      // Atelier
      atelier: {
        hero: {
          label: "دار جلامور للأزياء الراقية",
          title: "حيث تولد الأحلام وتتجسد",
          desc: "كل فستان زفاف من جلامور يولد بشغف في مشغلنا العريق في قلب إسطنبول. هنا، يكرس أمهر الحرفيين مئات الساعات في الثني اليدوي، والتطريز باللؤلؤ والكريستال لضمان كمال إطلالتك."
        },
        craft: {
          title: "قدسية الحرفة وفن التفاصيل",
          p1: "نحن نؤمن إيماناً راسخاً بأن الفخامة لا تُرى بالعين فقط، بل تُستشعر في التفاصيل المخفية. من الخطوط الأولى للرسم الفني إلى آخر درزات جلسة القياس النهائية.",
          p2: "يصنع كبار الخياطين لدينا روائعهم باستخدام الحرير الأوروبي الفاخر، الدانتيل الفرنسي العتيق، وكريستال شواروفسكي المثبت يدوياً حبة بحبة. يتطلب الفستان الواحد أكثر من 400 ساعة عمل يدوي متواصلة.",
          quote: "\"الفستان لا يجب أن يلائم الجسد فحسب؛ بل يجب أن يتوج الروح بالبهاء والرفعة.\"",
          designer: "— مديرة التصميم الفني للدار"
        }
      },
      // Journal
      journal: {
        label: "أوراق تحريرية",
        title: "المجلة الفاخرة",
        subtitle: "قصص حب، أدلة تنسيق حصرية، ونظرة ملحمية خلف الأبواب المغلقة لمشغلنا العريق.",
        featured: {
          badge: "مقال الغلاف الرئيسي",
          title: "تطور طرحة الزفاف العصرية",
          desc: "اكتشفي كيف تم إعادة ابتكار الطرحة التقليدية للعروس المعاصرة لتصبح أيقونة هندسية متكاملة.",
          date: "02 نوفمبر 2026"
        },
        articles: {
          a1: { cat: "دليل التنسيق الفاخر", title: "اختيار القصة المثالية لنحت وإبراز شكل قوامكِ", date: "12 أكتوبر 2026" },
          a2: { cat: "عرائس جلامور", title: "حلم توسكاني دافئ: زفاف صوفيا وماركو الأسطوري تحت أشجار الزيتون", date: "28 سبتمبر 2026" },
          a3: { cat: "خلف كواليس الدار", title: "مراحل نسج وتفصيل مجموعة 'أحلام الربيع 2027'", date: "15 سبتمبر 2026" },
          a4: { cat: "صيحات خالدة", title: "لماذا ستظل أزياء الزفاف البسيطة المينيماليست هي عنوان الفخامة الأبدية", date: "30 أغسطس 2026" }
        }
      },
      // Book Appointment
      book: {
        info: {
          title: "تجربة القياس الملكية",
          desc: "جلسة القياس الخاصة بكِ هي واحة خاصة ومغلقة لمدة 90 دقيقة بصحبة منسقة الدار الشخصية. استمتعي بالمشروبات والضيافة الفاخرة بينما نتجول سوياً في عالمنا الخاص.",
          location: "المشغل والغاليري الرئيسي للدار",
          address1: "نيشانتاشي، شارع عبدي إيبكجي الفخم",
          address2: "34367 شيشلي / إسطنبول، تركيا",
          hours: "من الإثنين إلى السبت: 10:00 صباحاً - 7:00 مساءً"
        },
        form: {
          label: "حجز جناح القياس الخاص بكِ",
          title: "احجزي موعد تجربتك الملكية",
          firstName: "الاسم الأول لسيادتكم",
          lastName: "اسم العائلة",
          email: "البريد الإلكتروني المفضل",
          phone: "رقم الهاتف للتواصل الراقي",
          date: "التاريخ المفضل للزيارة",
          time: "الوقت المناسب لسيادتكم",
          timeOptions: {
            placeholder: "اختر الفترة الملائمة",
            morning: "Morning (10AM - 1PM)",
            afternoon: "Afternoon (1PM - 4PM)",
            evening: "Evening (4PM - 7PM)"
          },
          notes: "تاريخ حفل الزفاف السعيد وأي طلبات خاصة بجناح القياس",
          btnSubmit: "إرسال طلب الحجز الفاخر للدار",
          disclaimer: "بإرسال هذا الطلب، توافق سيادتكم على شروط حجز الأجنحة الخاصة لدينا. سيتواصل مستشاركم الشخصي هاتفياً لتأكيد الزيارة الفخمة."
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('i18nextLng') || 'ar', // Set default to Arabic as requested for the brand feeling
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
