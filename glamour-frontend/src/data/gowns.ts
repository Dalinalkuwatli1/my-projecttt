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
const DRESS2_COUTURE  = '/dress2-couture.png';
const DRESS3_ALINE    = '/dress3-aline.png';
const DRESS4_IMPERIAL = '/dress4-imperial.png';

export const CARD_DRESS_IMAGES = {
  ballgown: DRESS1_BALLGOWN,
  couture:  DRESS2_COUTURE,
  aline:    DRESS3_ALINE,
  imperial: DRESS4_IMPERIAL,
};

// Only verified dress photos from the local images folder
const imageNumbers = [
  5, 6, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 22, 23, 24,
  26, 28, 29, 30, 31, 33, 34, 42, 43, 44, 45, 46, 48, 49, 50,
  51, 52, 53, 54, 55, 56, 57, 58, 59, 61, 62, 63, 64, 65, 66,
  67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81,
  82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96,
  97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109
];

const LOCAL_DRESS_IMAGES = imageNumbers.map(n => `/images/${n}.jpg`);

const categories = [
  {
    en: 'Crystal Ballgown',   ar: 'فستان كرة كريستالي',
    descEn: 'A majestic crystal-beaded ballgown with full cathedral skirt and sheer embroidered sleeves.',
    descAr: 'فستان كرة مبهر مطرز بالكريستال، بتنورة كاتدرائية كاملة وأكمام شفافة مطرزة يدوياً.',
    detailsEn: ['Crystal-beaded bodice', 'Cathedral length train', 'Tulle ballgown skirt', 'Royal crown accessory'],
    detailsAr: ['صدرية مرصعة بالكريستال', 'ذيل كاتدرائي فاخر', 'تنورة تول ملكية', 'تاج ملكي مرفق'],
  },
  {
    en: 'Lace Mermaid',        ar: 'فستان حورية بالدانتيل',
    descEn: 'An off-shoulder mermaid gown covered in delicate floral lace with a dramatic chapel train.',
    descAr: 'فستان حورية بكتف مكشوف مغطى بدانتيل زهري رقيق مع ذيل كنيسة درامي.',
    detailsEn: ['Off-shoulder neckline', 'Full floral lace overlay', 'Fitted mermaid silhouette', 'Chapel train'],
    detailsAr: ['ياقة كتف مكشوف', 'دانتيل زهري كامل', 'قصة حورية ضيقة', 'ذيل طويل'],
  },
  {
    en: 'Romantic A-Line',     ar: 'فستان رومانسي إيه لاين',
    descEn: 'A dreamy A-line gown with sheer puff sleeves and cascading floral lace — pure romantic elegance.',
    descAr: 'فستان إيه لاين حالم بأكمام شفافة منتفخة ودانتيل زهري متدفق — أناقة رومانسية خالصة.',
    detailsEn: ['Sheer puff sleeves', 'Floral lace appliqué', 'A-Line silhouette', 'Soft tulle skirt'],
    detailsAr: ['أكمام شفافة منتفخة', 'دانتيل زهري مطبق', 'قصة إيه لاين', 'تنورة تول ناعمة'],
  },
  {
    en: 'Imperial Beaded',     ar: 'فستان إمبراطوري مطرز',
    descEn: 'A regal full-coverage gown with intricate beaded embroidery on sheer sleeves and a grand ballgown skirt.',
    descAr: 'فستان إمبراطوري ملكي بتطريز مخرم دقيق على أكمام شفافة وتنورة كرة ضخمة.',
    detailsEn: ['Full-length sheer sleeves', 'Intricate bead embroidery', 'Grand ballgown volume', 'Illusion neckline'],
    detailsAr: ['أكمام شفافة بطول كامل', 'تطريز خرزي دقيق', 'حجم كرة ضخم', 'ياقة وهمية شفافة'],
  },
  {
    en: 'Modest Luxury',       ar: 'فخامة محتشمة',
    descEn: 'A refined high-neck modest gown with pearl-embroidered lace sleeves and a flowing satin skirt.',
    descAr: 'فستان محتشم راقٍ بياقة عالية وأكمام دانتيل مطرزة باللؤلؤ وتنورة ساتان سائلة.',
    detailsEn: ['High lace neckline', 'Pearl-beaded lace sleeves', 'Flowing satin skirt', 'Full coverage design'],
    detailsAr: ['ياقة دانتيل عالية', 'أكمام دانتيل مطرزة باللؤلؤ', 'تنورة ساتان سائلة', 'تصميم محتشم كامل'],
  },
  {
    en: 'Boho Chic',           ar: 'بوهيمي أنيق',
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

const generateGowns = (): Gown[] => {
  const list: Gown[] = [];

  const getCol = (i: number): { col: 'c1'|'c2'|'c3'; nameEn: string; nameAr: string } => {
    if (i <= 12) return { col: 'c1', nameEn: 'Spring Reverie',     nameAr: 'أحلام الربيع' };
    if (i <= 24) return { col: 'c2', nameEn: 'Classic Elegance',    nameAr: 'الأناقة الكلاسيكية' };
    return              { col: 'c3', nameEn: 'Modern Minimalist',   nameAr: 'البساطة العصرية' };
  };

  // 1. Generate 36 Wedding Gowns — all images from LOCAL_DRESS_IMAGES
  for (let i = 1; i <= 36; i++) {
    const cat    = categories[(i - 1) % categories.length];
    const imgIdx = (i - 1) % LOCAL_DRESS_IMAGES.length;
    const image  = LOCAL_DRESS_IMAGES[imgIdx];
    const second = LOCAL_DRESS_IMAGES[(imgIdx + 1) % LOCAL_DRESS_IMAGES.length];
    const { col } = getCol(i);

    list.push({
      id: `gw${i}`,
      nameKey: `collections.gowns.gw${i}.name`,
      catKey:  `collections.gowns.gw${i}.category`,
      price:   250 + ((i - 1) % 6) * 250,
      image,
      type: 'wedding',
      category: { en: cat.en, ar: cat.ar },
      name:    { en: `${cat.en} Bridal Gown`, ar: `فستان زفاف ${cat.ar}` },
      colors:  ['white', 'ivory', 'champagne'],
      sizes:   ['XS', 'S', 'M', 'L', 'XL'],
      desc:    { en: cat.descEn, ar: cat.descAr },
      details: { en: cat.detailsEn, ar: cat.detailsAr },
      images:  [image, second],
      collection: col,
    });
  }

  // 2. Generate 36 Evening Gowns — offset into LOCAL_DRESS_IMAGES for variety
  for (let i = 1; i <= 36; i++) {
    const cat    = categories[(i - 1) % categories.length];
    const imgIdx = (i - 1 + 36) % LOCAL_DRESS_IMAGES.length;
    const image  = LOCAL_DRESS_IMAGES[imgIdx];
    const second = LOCAL_DRESS_IMAGES[(imgIdx + 1) % LOCAL_DRESS_IMAGES.length];
    const { col } = getCol(i);

    list.push({
      id: `ge${i}`,
      nameKey: `collections.gowns.ge${i}.name`,
      catKey:  `collections.gowns.ge${i}.category`,
      price:   250 + ((i - 1) % 6) * 250,
      image,
      type: 'evening',
      category: { en: cat.en, ar: cat.ar },
      name:    { en: `${cat.en} Evening Gown`, ar: `فستان سهرة ${cat.ar}` },
      colors:  ['ivory', 'blush', 'gold', 'nude'],
      sizes:   ['XS', 'S', 'M', 'L', 'XL'],
      desc:    { en: cat.descEn, ar: cat.descAr },
      details: { en: cat.detailsEn, ar: cat.detailsAr },
      images:  [image, second],
      collection: col,
    });
  }

  return list;
};

export const GOWNS_DATA: Gown[] = generateGowns();
