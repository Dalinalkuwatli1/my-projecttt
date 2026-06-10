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

const WEDDING_IMAGES = [
  'https://images.pexels.com/photos/28863320/pexels-photo-28863320.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3831193/pexels-photo-3831193.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1457801/pexels-photo-1457801.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/29536878/pexels-photo-29536878.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/34317567/pexels-photo-34317567.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/28863325/pexels-photo-28863325.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/13112095/pexels-photo-13112095.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/9004584/pexels-photo-9004584.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/14358523/pexels-photo-14358523.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800'
];

const EVENING_IMAGES = [
  'https://images.pexels.com/photos/11039097/pexels-photo-11039097.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/2766384/pexels-photo-2766384.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/2916820/pexels-photo-2916820.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3200007/pexels-photo-3200007.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/9825854/pexels-photo-9825854.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/11039096/pexels-photo-11039096.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/6763521/pexels-photo-6763521.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/2855146/pexels-photo-2855146.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/230129/pexels-photo-230129.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3400627/pexels-photo-3400627.jpeg?auto=compress&cs=tinysrgb&w=800'
];

const categories = [
  { en: 'Ballgown', ar: 'منفوش' },
  { en: 'Sculpted Couture', ar: 'كوتور منحوت' },
  { en: 'A-Line', ar: 'إيه لاين' },
  { en: 'Imperial', ar: 'إمبراطوري' },
  { en: 'Romantic', ar: 'رومانسي' },
  { en: 'Boho Chic', ar: 'بوهيمي أنيق' },
  { en: 'Modest Luxury', ar: 'فخامة محتشمة' }
];

const generateGowns = (): Gown[] => {
  const list: Gown[] = [];

  // 1. Generate 36 Wedding Gowns
  for (let i = 1; i <= 36; i++) {
    const imgIndex = (i - 1) % WEDDING_IMAGES.length;
    const image = WEDDING_IMAGES[imgIndex];
    const cat = categories[(i - 1) % categories.length];
    
    // Assign collections: 1-12 c1, 13-24 c2, 25-36 c3
    let col: 'c1' | 'c2' | 'c3' = 'c1';
    let colNameEn = 'Spring Reverie';
    let colNameAr = 'أحلام الربيع';
    if (i > 12 && i <= 24) {
      col = 'c2';
      colNameEn = 'Classic Elegance';
      colNameAr = 'الأناقة الكلاسيكية';
    } else if (i > 24) {
      col = 'c3';
      colNameEn = 'Modern Minimalist';
      colNameAr = 'البساطة العصرية';
    }

    list.push({
      id: `gw${i}`,
      nameKey: `collections.gowns.gw${i}.name`,
      catKey: `collections.gowns.gw${i}.category`,
      price: 1800 + (i % 5) * 350,
      image,
      type: 'wedding',
      category: cat,
      name: {
        en: `Royal ${cat.en} Gown - Edition ${i}`,
        ar: `فستان ${cat.ar} الملكي - الإصدار ${i}`
      },
      colors: ['white', 'offWhite'],
      sizes: ['S', 'M', 'L'],
      desc: {
        en: `An exquisite custom gown from the ${colNameEn} collection, crafted with meticulous detail and fine fabrics.`,
        ar: `فستان كوتور فاخر من مجموعة ${colNameAr}، صُنع بتفاصيل مذهلة وأقمشة ملكية راقية.`
      },
      details: {
        en: ['French silk tulle', 'Hand-beaded corset bodice', 'Cathedral length train', 'Built-in support'],
        ar: ['تول حرير فرنسي', 'صدرية كورسيه مطرزة يدوياً', 'ذيل ممتد طويل جداً', 'دعم كورسيه مدمج']
      },
      images: [
        image,
        WEDDING_IMAGES[(imgIndex + 1) % WEDDING_IMAGES.length]
      ],
      collection: col
    });
  }

  // 2. Generate 36 Evening Gowns
  for (let i = 1; i <= 36; i++) {
    const imgIndex = (i - 1) % EVENING_IMAGES.length;
    const image = EVENING_IMAGES[imgIndex];
    const cat = categories[(i - 1) % categories.length];
    
    // Assign collections: 1-12 c1, 13-24 c2, 25-36 c3
    let col: 'c1' | 'c2' | 'c3' = 'c1';
    let colNameEn = 'Spring Reverie';
    let colNameAr = 'أحلام الربيع';
    if (i > 12 && i <= 24) {
      col = 'c2';
      colNameEn = 'Classic Elegance';
      colNameAr = 'الأناقة الكلاسيكية';
    } else if (i > 24) {
      col = 'c3';
      colNameEn = 'Modern Minimalist';
      colNameAr = 'البساطة العصرية';
    }

    list.push({
      id: `ge${i}`,
      nameKey: `collections.gowns.ge${i}.name`,
      catKey: `collections.gowns.ge${i}.category`,
      price: 1500 + (i % 6) * 280,
      image,
      type: 'evening',
      category: cat,
      name: {
        en: `${cat.en} Evening Gown - Style ${i}`,
        ar: `فستان سهرة ${cat.ar} - الموديل ${i}`
      },
      colors: ['emerald', 'gold', 'ruby', 'black'],
      sizes: ['S', 'M', 'L'],
      desc: {
        en: `A magnificent evening masterpiece from our ${colNameEn} range, ideal for elite gala nights.`,
        ar: `فستان سهرة ساحر من مجموعة ${colNameAr}، مصمم خصيصاً للمناسبات الراقية وحفلات النخبة.`
      },
      details: {
        en: ['Premium stretch crepe', 'Sculpted hemline', 'Low-back design', 'Sleek buttons details'],
        ar: ['كريب مطاطي فاخر', 'حافة ملكية منحوتة', 'تصميم ظهر مكشوف', 'أزرار أنيقة ممتدة']
      },
      images: [
        image,
        EVENING_IMAGES[(imgIndex + 1) % EVENING_IMAGES.length]
      ],
      collection: col
    });
  }

  return list;
};

export const GOWNS_DATA: Gown[] = generateGowns();
