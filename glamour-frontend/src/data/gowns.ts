export interface Gown {
  id: string;
  nameKey: string;
  catKey: string;
  price: number;
  image: string;
  type: 'wedding' | 'evening';
  category: { en: string; ar: string };
  name: { en: string; ar: string };
  colors: string[];
  sizes: string[];
  desc: { en: string; ar: string };
  details: { en: string[]; ar: string[] };
  images: string[];
  collection: 'c1' | 'c2' | 'c3';
}

// Dress images — first 4 map to the user-provided luxury royal dresses (locally stored)
const DRESS1_BALLGOWN = '/dress1-ballgown.png';
const DRESS2_COUTURE = '/dress2-couture.png';
const DRESS3_ALINE = '/dress3-aline.png';
const DRESS4_IMPERIAL = '/dress4-imperial.png';

export const CARD_DRESS_IMAGES = {
  ballgown: DRESS1_BALLGOWN,
  couture: DRESS2_COUTURE,
  aline: DRESS3_ALINE,
  imperial: DRESS4_IMPERIAL,
};

const WEDDING_IMAGES = [
  10, 12, 13, 14, 22, 23, 24, 28, 29, 56, 57, 58, 59, 61, 62, 63,
  64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
  96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109
].map(n => `/images/${n}.jpg`);

const EVENING_IMAGES = [
  201, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213,
  300, 301, 302, 303, 304, 305, 420, 421, 422, 423, 424, 425, 426
].map(n => `/images/${n}.jpg`);

const weddingCategories = [
  {
    en: 'Crystal Ballgown', ar: 'فستان كرة كريستالي',
    descEn: 'A majestic crystal-beaded ballgown with full cathedral skirt and sheer embroidered sleeves.',
    descAr: 'فستان كرة مبهر مطرز بالكريستال، بتنورة كاتدرائية كاملة وأكمام شفافة مطرزة يدوياً.',
    detailsEn: ['Crystal-beaded bodice', 'Cathedral length train', 'Tulle ballgown skirt', 'Royal crown accessory'],
    detailsAr: ['صدرية مرصعة بالكريستال', 'ذيل كاتدرائي فاخر', 'تنورة تول ملكية', 'تاج ملكي مرفق'],
  },
  {
    en: 'Lace Mermaid', ar: 'فستان حورية بالدانتيل',
    descEn: 'An off-shoulder mermaid gown covered in delicate floral lace with a dramatic chapel train.',
    descAr: 'فستان حورية بكتف مكشوف مغطى بدانتيل زهري رقيق مع ذيل كنيسة درامي.',
    detailsEn: ['Off-shoulder neckline', 'Full floral lace overlay', 'Fitted mermaid silhouette', 'Chapel train'],
    detailsAr: ['ياقة كتف مكشوف', 'دانتيل زهري كامل', 'قصة حورية ضيقة', 'ذيل طويل'],
  },
  {
    en: 'Romantic A-Line', ar: 'فستان رومانسي إيه لاين',
    descEn: 'A dreamy A-line gown with sheer puff sleeves and cascading floral lace — pure romantic elegance.',
    descAr: 'فستان إيه لاين حالم بأكمام شفافة منتفخة ودانتيل زهري متدفق — أناقة رومانسية خالصة.',
    detailsEn: ['Sheer puff sleeves', 'Floral lace appliqué', 'A-Line silhouette', 'Soft tulle skirt'],
    detailsAr: ['أكمام شفافة منتفخة', 'دانتيل زهري مطبق', 'قصة إيه لاين', 'تنورة تول ناعمة'],
  },
  {
    en: 'Imperial Beaded', ar: 'فستان إمبراطوري مطرز',
    descEn: 'A regal full-coverage gown with intricate beaded embroidery on sheer sleeves and a grand ballgown skirt.',
    descAr: 'فستان إمبراطوري ملكي بتطريز مخرم دقيق على أكمام شفافة وتنورة كرة ضخمة.',
    detailsEn: ['Full-length sheer sleeves', 'Intricate bead embroidery', 'Grand ballgown volume', 'Illusion neckline'],
    detailsAr: ['أكمام شفافة بطول كامل', 'تطريز خرزي دقيق', 'حجم كرة ضخم', 'ياقة وهمية شفافة'],
  },
  {
    en: 'Modest Luxury', ar: 'فخامة محتشمة',
    descEn: 'A refined high-neck modest gown with pearl-embroidered lace sleeves and a flowing satin skirt.',
    descAr: 'فستان محتشم راقٍ بياقة عالية وأكمام دانتيل مطرزة باللؤلؤ وتنورة ساتان سائلة.',
    detailsEn: ['High lace neckline', 'Pearl-beaded lace sleeves', 'Flowing satin skirt', 'Full coverage design'],
    detailsAr: ['ياقة دانتيل عالية', 'أكمام دانتيل مطرزة باللؤلؤ', 'تنورة ساتان سائلة', 'تصميم محتشم كامل'],
  },
  {
    en: 'Boho Chic', ar: 'بوهيمي أنيق',
    descEn: 'A free-spirited boho A-line with bishop sleeves, delicate floral embroidery and a flower crown.',
    descAr: 'فستان بوهيمي إيه لاين بأكمام أسقف وتطريز زهري رقيق وتاج من الزهور الطبيعية.',
    detailsEn: ['Bishop sheer sleeves', 'Floral embroidery', 'Lightweight tulle skirt', 'Floral crown'],
    detailsAr: ['أكمام شفافة واسعة', 'تطريز زهري', 'تنورة تول خفيفة', 'تاج من الزهور'],
  },
  {
    en: 'Grand Veil Ballgown', ar: 'فستان كرة بطرحة ملكية',
    descEn: 'A breathtaking ballgown crowned with a cathedral veil, dramatic volume and royal lace detailing.',
    descAr: 'فستان كرة آسر مزيّن بطرحة كاتدرائية وحجم درامي وتفاصيل دانتيل ملكية.',
    detailsEn: ['Cathedral veil included', 'Voluminous ballgown skirt', 'Royal lace detail', 'Dramatic silhouette'],
    detailsAr: ['طرحة كاتدرائية مرفقة', 'تنورة كرة ضخمة', 'دانتيل ملكي', 'قصة درامية'],
  },
];

const eveningCategories = [
  {
    en: 'Royal Evening Gown', ar: 'فستان سهرة ملكي',
    descEn: 'An exquisite evening gown tailored from premium silk with hand-applied crystals and elegant drapery.',
    descAr: 'فستان سهرة ملكي فاخر مصنوع من الحرير الطبيعي مع كريستالات يدوية وثنيات أنيقة.',
    detailsEn: ['Premium silk drapery', 'Hand-applied crystal accents', 'Elegant floor-length sweep', 'Built-in corset support'],
    detailsAr: ['ثنيات حرير فاخرة', 'لمسات كريستال مطرزة يدوياً', 'ذيل منسدل على الأرض', 'مشد داخلي داعم'],
  },
  {
    en: 'Velvet Couture Gown', ar: 'فستان سهرة مخملي',
    descEn: 'A luxurious velvet evening gown with structured shoulders, a high slit, and delicate gold thread embroidery.',
    descAr: 'فستان سهرة مخملي فاخر بأكتاف محددة، فتحة جانبية عالية وتطريز دقيق بخيوط ذهبية.',
    detailsEn: ['Structured shoulder padding', 'High side leg slit', 'Metallic gold thread details', 'Premium velvet stretch'],
    detailsAr: ['أكتاف مبطنة محددة', 'فتحة جانبية عالية', 'تفاصيل خيوط ذهبية معدنية', 'مخمل مطاطي فاخر'],
  },
  {
    en: 'Satin Mermaid Evening Gown', ar: 'فستان سهرة حورية ساتان',
    descEn: 'A striking satin mermaid gown featuring a sculpted bodice and cascading train for evening elegance.',
    descAr: 'فستان سهرة ساتان بقصة الحورية المتميزة بصدرية منحوتة وذيل متدفق لأناقة مسائية آسرة.',
    detailsEn: ['Sculpted boned bodice', 'Flared mermaid skirt', 'High-shine premium satin', 'Concealed back zipper'],
    detailsAr: ['صدرية منحوتة بأعمدة دعم', 'تنورة حورية واسعة الأطراف', 'ساتان فاخر لامع', 'سحاب خلفي مخفي'],
  },
  {
    en: 'Embellished Tulle Gown', ar: 'فستان سهرة تول مطرز',
    descEn: 'A lightweight sheer tulle evening gown adorned with shimmering sequins and romantic drapery.',
    descAr: 'فستان سهرة تول خفيف مطرز بالترتر اللامع والثنيات الرومانسية المنسدلة.',
    detailsEn: ['All-over sequin embellishments', 'Multi-layered sheer tulle', 'Romantic off-shoulder drape', 'Soft inner lining'],
    detailsAr: ['تطريز كامل بالترتر', 'طبقات متعددة من التول الشفاف', 'ياقة كتف مكشوف رومانسية', 'بطانة داخلية ناعمة'],
  },
  {
    en: 'Classic Chiffon Gown', ar: 'فستان سهرة شيفون كلاسيكي',
    descEn: 'A fluid silk chiffon evening gown with off-shoulder neckline and sophisticated pleating.',
    descAr: 'فستان سهرة شيفون انسيابي بكتف مكشوف وثنيات ناعمة تضفي لمسة من الوقار.',
    detailsEn: ['Fluid silk chiffon overlay', 'Gathered sweetheart neckline', 'Graceful floor-length skirt', 'Invisible side closure'],
    detailsAr: ['طبقة شيفون حرير انسيابية', 'ياقة قلب مجمعة', 'تنورة طويلة رشيقة', 'إغلاق جانبي غير مرئي'],
  },
  {
    en: 'One-Shoulder Drape', ar: 'فستان سهرة بكتف واحد',
    descEn: 'An asymmetric one-shoulder evening gown with premium draping and a dramatic side train.',
    descAr: 'فستان سهرة بكتف واحد منسدل مع ثنيات كوتور فاخرة وذيل جانبي درامي.',
    detailsEn: ['Asymmetric one-shoulder strap', 'Couture draping techniques', 'Dramatic side-swept train', 'Silky satin lining'],
    detailsAr: ['حزام كتف واحد غير متناظر', 'تقنيات ثنيات الكوتور', 'ذيل جانبي درامي', 'بطانة ساتان حريرية'],
  },
  {
    en: 'Glamour Crystal Gown', ar: 'فستان سهرة كريستال براق',
    descEn: 'A showstopping evening gown covered in light-catching glass beads and a modern architectural silhouette.',
    descAr: 'فستان سهرة مذهل مغطى بخرز زجاجي عاكس للضوء مع قصة معمارية عصرية.',
    detailsEn: ['Intricate glass beadwork', 'Architectural structural lines', 'Open back detailing', 'Floor-length luxury sweep'],
    detailsAr: ['تطريز خرز زجاجي معقد', 'خطوط هيكلية معمارية', 'تفاصيل ظهر مكشوف', 'ذيل طويل فاخر'],
  },
];

const generateGowns = (): Gown[] => {
  const list: Gown[] = [];

  const getCol = (i: number): { col: 'c1' | 'c2' | 'c3'; nameEn: string; nameAr: string } => {
    if (i <= 12) return { col: 'c1', nameEn: 'Spring Reverie', nameAr: 'أحلام الربيع' };
    if (i <= 24) return { col: 'c2', nameEn: 'Classic Elegance', nameAr: 'الأناقة الكلاسيكية' };
    return { col: 'c3', nameEn: 'Modern Minimalist', nameAr: 'البساطة العصرية' };
  };

  const weddingCategoryOrder = [
    0, // Crystal Ballgown
    2, // Romantic A-Line
    6, // Grand Veil Ballgown
    1, // Lace Mermaid
    5, // Boho Chic
    6, // Grand Veil Ballgown
    0, // Crystal Ballgown
    4, // Modest Luxury
    3, // Imperial Beaded
    5, // Boho Chic
    6  // Grand Veil Ballgown
  ];

  // 1. Generate 36 Wedding Gowns — all images from WEDDING_IMAGES
  for (let i = 1; i <= 36; i++) {
    const catIdx = i <= 11 ? weddingCategoryOrder[i - 1] : (i - 1) % weddingCategories.length;
    const cat = weddingCategories[catIdx];
    const imgIdx = (i - 1) % WEDDING_IMAGES.length;
    const image = WEDDING_IMAGES[imgIdx];
    const second = WEDDING_IMAGES[(imgIdx + 1) % WEDDING_IMAGES.length];
    const { col } = getCol(i);

    list.push({
      id: `gw${i}`,
      nameKey: `collections.gowns.gw${i}.name`,
      catKey: `collections.gowns.gw${i}.category`,
      price: 250 + ((i - 1) % 6) * 250,
      image,
      type: 'wedding',
      category: { en: cat.en, ar: cat.ar },
      name: { en: `${cat.en} Bridal Gown`, ar: `فستان زفاف ${cat.ar}` },
      colors: ['white', 'ivory', 'champagne'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      desc: { en: cat.descEn, ar: cat.descAr },
      details: { en: cat.detailsEn, ar: cat.detailsAr },
      images: [image, second],
      collection: col,
    });
  }

  // 2. Generate 36 Evening Gowns — all images from EVENING_IMAGES
  for (let i = 1; i <= 36; i++) {
    const cat = eveningCategories[(i - 1) % eveningCategories.length];
    const imgIdx = (i - 1) % EVENING_IMAGES.length;
    const image = EVENING_IMAGES[imgIdx];
    const second = EVENING_IMAGES[(imgIdx + 1) % EVENING_IMAGES.length];
    const { col } = getCol(i);

    list.push({
      id: `ge${i}`,
      nameKey: `collections.gowns.ge${i}.name`,
      catKey: `collections.gowns.ge${i}.category`,
      price: 250 + ((i - 1) % 6) * 250,
      image,
      type: 'evening',
      category: { en: cat.en, ar: cat.ar },
      name: { en: `${cat.en} Evening Gown`, ar: `فستان سهرة ${cat.ar}` },
      colors: ['emerald', 'gold', 'ruby', 'black'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      desc: { en: cat.descEn, ar: cat.descAr },
      details: { en: cat.detailsEn, ar: cat.detailsAr },
      images: [image, second],
      collection: col,
    });
  }

  return list;
};

export const GOWNS_DATA: Gown[] = generateGowns();
