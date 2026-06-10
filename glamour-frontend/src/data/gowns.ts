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
}

export const GOWNS_DATA: Gown[] = [
  {
    id: 'g1',
    nameKey: 'collections.gowns.g1.name',
    catKey: 'collections.gowns.g1.category',
    price: 2400,
    image: 'https://images.pexels.com/photos/28863320/pexels-photo-28863320.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'wedding' as const,
    category: { en: 'Ballgown', ar: 'منفوش' },
    name: { en: 'Royal Empress Gown', ar: 'فستان الإمبراطورة الملكي' },
    colors: ['white', 'offWhite'],
    sizes: ['S', 'M', 'L'],
    desc: {
      en: 'A masterpiece of bridal couture, featuring layers of voluminous French tulle and a hand-beaded royal bodice.',
      ar: 'تحفة فنية من تصميم الأزياء الراقية للعرائس، تتميز بطبقات من التول الفرنسي المنفوش وصدرية مطرزة يدوياً بكريستالات ملكية.'
    },
    details: {
      en: ['French silk tulle', 'Hand-beaded corset bodice', 'Cathedral length train', 'Built-in corset support'],
      ar: ['تول حرير فرنسي', 'صدرية كورسيه مطرزة يدوياً', 'ذيل طويل ممتد', 'دعم كورسيه مدمج']
    },
    images: [
      'https://images.pexels.com/photos/28863320/pexels-photo-28863320.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/28863325/pexels-photo-28863325.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 'g2',
    nameKey: 'collections.gowns.g2.name',
    catKey: 'collections.gowns.g2.category',
    price: 1200,
    image: 'https://images.pexels.com/photos/27269998/pexels-photo-27269998.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'wedding' as const,
    category: { en: 'Sculpted Couture', ar: 'كوتور منحوت' },
    name: { en: 'Aria Imperial Gown', ar: 'أيقونة آريا الملكية' },
    colors: ['white', 'offWhite'],
    sizes: ['S', 'M', 'L'],
    desc: {
      en: 'A royal sculpted silhouette gown crafted from premium stretch crepe to highlight natural elegance with a majestic train.',
      ar: 'تصميم ملكي منحوت مصمم من الكريب المطاطي والحرير الفاخر، ليمنح العروس إطلالة ملكية ساحرة وذيل ممتد بأناقة مطلقة.'
    },
    details: {
      en: ['Premium stretch crepe', 'Sculpted/Imperial hem', 'Low-back design', 'Sleek buttons down the train'],
      ar: ['كريب مطاطي فاخر', 'حافة ملكية منحوتة', 'تصميم ظهر مكشوف', 'أزرار أنيقة ممتدة على طول الذيل']
    },
    images: [
      'https://images.pexels.com/photos/27269998/pexels-photo-27269998.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/28863325/pexels-photo-28863325.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 'g3',
    nameKey: 'collections.gowns.g3.name',
    catKey: 'collections.gowns.g3.category',
    price: 2100,
    image: 'https://images.pexels.com/photos/6536968/pexels-photo-6536968.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'wedding' as const,
    category: { en: 'Ballgown', ar: 'منفوش' },
    name: { en: 'Celestine Glow Gown', ar: 'فستان توهج سيلستين' },
    colors: ['white', 'offWhite'],
    sizes: ['S', 'M', 'L'],
    desc: {
      en: 'Ethereal and magical, the Celestine gown offers a romantic silhouette with thousands of shimmer points.',
      ar: 'أثيري وساحر، يمنحك فستان سيلستين إطلالة رومانسية مع آلاف النقاط المتلألئة التي تخطف الأنظار.'
    },
    details: {
      en: ['Shimmering glitter tulle', 'Sweetheart neckline', 'Off-shoulder drape sleeves', 'Flared skirt'],
      ar: ['تول لامع متلألئ', 'فتحة صدر على شكل قلب', 'أكمام منسدلة مكشوفة الأكتاف', 'تنورة واسعة متموجة']
    },
    images: [
      'https://images.pexels.com/photos/6536968/pexels-photo-6536968.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2253842/pexels-photo-2253842.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 'g4',
    nameKey: 'collections.gowns.g4.name',
    catKey: 'collections.gowns.g4.category',
    price: 2600,
    image: 'https://images.pexels.com/photos/15983831/pexels-photo-15983831.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'wedding' as const,
    category: { en: 'Imperial', ar: 'إمبراطوري' },
    name: { en: 'Duchess Illusion Gown', ar: 'فستان الوهم الدوقي' },
    colors: ['white', 'offWhite'],
    sizes: ['S', 'M', 'L'],
    desc: {
      en: 'A majestic column gown with a high lace neckline, providing a dramatic yet highly structured look.',
      ar: 'فستان عمودي مهيب بياقة عالية من الدانتيل، يقدم إطلالة درامية ذات هيكل وتصميم مذهل.'
    },
    details: {
      en: ['Embroidered French lace', 'Column silhouette', 'High collar illusion neckline', 'Keyhole back closure'],
      ar: ['دانتيل فرنسي مطرز', 'قصة مستقيمة عمودية', 'ياقة عالية وهمية', 'ظهر بفتحة دائرية كلاسيكية']
    },
    images: [
      'https://images.pexels.com/photos/15983831/pexels-photo-15983831.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3831193/pexels-photo-3831193.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 'g5',
    nameKey: 'collections.gowns.g5.name',
    catKey: 'collections.gowns.g5.category',
    price: 1500,
    image: 'https://images.pexels.com/photos/19279696/pexels-photo-19279696.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'wedding' as const,
    category: { en: 'A-Line', ar: 'إيه لاين' },
    name: { en: 'Ivory Whisper Gown', ar: 'فستان همس العاج' },
    colors: ['white', 'offWhite'],
    sizes: ['S', 'M', 'L'],
    desc: {
      en: 'Classic and flowing, this premium silk chiffon gown cascades beautifully down the aisle.',
      ar: 'كلاسيكي وانسيابي، ينساب فستان الشيفون الحريري الفاخر هذا برقة مطلقة ليرافق خطواتك كهمس ناعم.'
    },
    details: {
      en: ['Pure silk chiffon', 'Flattering A-line shape', 'V-neckline front and back', 'Lightweight drape train'],
      ar: ['شيفون حريري طبيعي', 'قصة إيه لاين كلاسيكية', 'فتحة صدر وظهر على شكل حرف V', 'ذيل خفيف الوزن منسدل']
    },
    images: [
      'https://images.pexels.com/photos/19279696/pexels-photo-19279696.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 'g6',
    nameKey: 'collections.gowns.g6.name',
    catKey: 'collections.gowns.g6.category',
    price: 1950,
    image: 'https://images.pexels.com/photos/29536878/pexels-photo-29536878.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'wedding' as const,
    category: { en: 'Romantic', ar: 'رومانسي' },
    name: { en: 'Ethereal Off-Shoulder Gown', ar: 'فستان الأكتاف المنسدلة الأثيري' },
    colors: ['white', 'offWhite'],
    sizes: ['S', 'M', 'L'],
    desc: {
      en: 'Soft romance defined by a beautiful off-shoulder drape and delicate floral leaf lace detailing.',
      ar: 'رومانسية حالمة تبرزها الأكتاف المنسدلة المتموجة وتفاصيل دانتيل أوراق الشجر والزهور الدقيقة.'
    },
    details: {
      en: ['Floral appliqué lace', 'Soft romantic tulle overlay', 'Semi-sweetheart design', 'Sweep length train'],
      ar: ['دانتيل بأشكال زهور ثلاثية الأبعاد', 'طبقة تول ناعمة ورومانسية', 'فتحة صدر نصف قلبية', 'ذيل متوسط الطول']
    },
    images: [
      'https://images.pexels.com/photos/29536878/pexels-photo-29536878.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 'g7',
    nameKey: 'collections.gowns.g7.name',
    catKey: 'collections.gowns.g7.category',
    price: 1700,
    image: 'https://images.pexels.com/photos/34317567/pexels-photo-34317567.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'wedding' as const,
    category: { en: 'Boho Chic', ar: 'بوهيمي أنيق' },
    name: { en: 'Siren of Tulle Gown', ar: 'فستان تول سيرين' },
    colors: ['white', 'offWhite'],
    sizes: ['S', 'M', 'L'],
    desc: {
      en: 'A carefree, bohemian bridal gown combining tiered tulle textures and a comfortable silhouette.',
      ar: 'فستان زفاف بوهيمي يتميز بطبقات التول المتدرجة وقصة مريحة تمنحك حرية الحركة بكل أناقة.'
    },
    details: {
      en: ['Tiered premium tulle', 'Boho lace trims', 'Comfort-stretch underlay', 'Open back feature'],
      ar: ['تول طبقات فاخر', 'حواف دانتيل بوهيمية', 'بطانة كريب مريحة ومطاطية', 'تصميم ظهر مفتوح مميز']
    },
    images: [
      'https://images.pexels.com/photos/34317567/pexels-photo-34317567.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 'g8',
    nameKey: 'collections.gowns.g8.name',
    catKey: 'collections.gowns.g8.category',
    price: 2250,
    image: 'https://images.pexels.com/photos/28863325/pexels-photo-28863325.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'wedding' as const,
    category: { en: 'Modest Luxury', ar: 'فخامة محتشمة' },
    name: { en: 'Modest Grace Gown', ar: 'فستان النعمة المحتشمة' },
    colors: ['white', 'offWhite'],
    sizes: ['S', 'M', 'L'],
    desc: {
      en: 'An elegant long-sleeved bridal gown, fully lined to offer premium coverage and sophisticated grace.',
      ar: 'فستان زفاف طويل الأكمام وراقي، مبطن بالكامل ليمنحكِ احتشاماً مذهلاً وأناقة فاخرة تفيض بالنعومة.'
    },
    details: {
      en: ['Long lace sleeves', 'High neckline', 'Fully opaque lining', 'Satin waist sash'],
      ar: ['أكمام دانتيل طويلة', 'ياقة عالية محتشمة', 'بطانة كاملة غير شفافة', 'حزام خصري حريري ناعم']
    },
    images: [
      'https://images.pexels.com/photos/28863325/pexels-photo-28863325.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 'g9',
    nameKey: 'collections.gowns.g9.name',
    catKey: 'collections.gowns.g9.category',
    price: 3100,
    image: 'https://images.pexels.com/photos/1457801/pexels-photo-1457801.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'wedding' as const,
    category: { en: 'Ballgown', ar: 'منفوش' },
    name: { en: 'Duchess Grand Ballgown', ar: 'فستان منفوش دوقة الكبرى' },
    colors: ['white', 'offWhite'],
    sizes: ['S', 'M', 'L'],
    desc: {
      en: 'A grand ballgown with structural pleating and rich satin panels, creating a dramatic princess silhouette.',
      ar: 'فستان منفوش فاخر للغاية بثنيات هيكلية وألواح من الساتان الفخم، ليخلق مظهر أميرة درامي ساحر.'
    },
    details: {
      en: ['Heavy Duchess satin', 'Structured petticoat skirt', 'Off-shoulder cuffs', 'Cathedral train'],
      ar: ['ساتان دوقس ثقيل', 'تنورة مدعمة بهيكل', 'أكتاف منسدلة عريضة', 'ذيل ممتد طويل جداً']
    },
    images: ['https://images.pexels.com/photos/1457801/pexels-photo-1457801.jpeg?auto=compress&cs=tinysrgb&w=800']
  },
  {
    id: 'g10',
    nameKey: 'collections.gowns.g10.name',
    catKey: 'collections.gowns.g10.category',
    price: 2300,
    image: 'https://images.pexels.com/photos/13112095/pexels-photo-13112095.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'wedding' as const,
    category: { en: 'Sculpted Couture', ar: 'كوتور منحوت' },
    name: { en: 'Venus Lace Gown', ar: 'فستان دانتيل فينوس' },
    colors: ['white', 'offWhite'],
    sizes: ['S', 'M', 'L'],
    desc: {
      en: 'A sensual lace sculpted gown with sheer lace side panels and a stunning scalloped train.',
      ar: 'فستان دانتيل كوتور منحوت جذاب يتميز بألواح دانتيل جانبية شفافة وذيل صدفي مذهل.'
    },
    details: {
      en: ['Venetian lace motifs', 'Sheer side illusions', 'Scalloped hemline', 'Low scoop back'],
      ar: ['نقوش دانتيل فينيسية', 'أوهام جانبية شفافة', 'حاشية صدفية مزخرفة', 'ظهر منخفض مقوس']
    },
    images: ['https://images.pexels.com/photos/13112095/pexels-photo-13112095.jpeg?auto=compress&cs=tinysrgb&w=800']
  },
  {
    id: 'g11',
    nameKey: 'collections.gowns.g11.name',
    catKey: 'collections.gowns.g11.category',
    price: 1800,
    image: 'https://images.pexels.com/photos/9004584/pexels-photo-9004584.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'wedding' as const,
    category: { en: 'A-Line', ar: 'إيه لاين' },
    name: { en: 'Luminara Tulle A-Line', ar: 'فستان لومينارا إيه لاين' },
    colors: ['white', 'offWhite'],
    sizes: ['S', 'M', 'L'],
    desc: {
      en: 'Lightweight and romantic A-line gown layered with glitter tulle to capture and reflect light.',
      ar: 'فستان إيه لاين خفيف الوزن ورومانسي، مكون من طبقات التول البراق لالتقاط الضوء وعكسه بشكل رائع.'
    },
    details: {
      en: ['Glitter layer tulle', 'Deep V-neckline', 'Beaded slim belt', 'Semi-transparent back'],
      ar: ['تول براق لامع', 'فتحة صدر عميقة على شكل V', 'حزام رفيع مطرز بالخرز', 'ظهر نصف شفاف جذاب']
    },
    images: ['https://images.pexels.com/photos/9004584/pexels-photo-9004584.jpeg?auto=compress&cs=tinysrgb&w=800']
  },
  {
    id: 'g12',
    nameKey: 'collections.gowns.g12.name',
    catKey: 'collections.gowns.g12.category',
    price: 2200,
    image: 'https://images.pexels.com/photos/14358523/pexels-photo-14358523.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'wedding' as const,
    category: { en: 'Romantic', ar: 'رومانسي' },
    name: { en: 'Florence Garden Gown', ar: 'فستان حديقة فلورنسا' },
    colors: ['white', 'offWhite'],
    sizes: ['S', 'M', 'L'],
    desc: {
      en: 'A soft A-line gown decorated with green and ivory floral threadwork, echoing a renaissance garden.',
      ar: 'فستان إيه لاين ناعم مزين بخيوط مطرزة بأشكال ورود عاجية وخضراء، يحاكي حدائق عصر النهضة.'
    },
    details: {
      en: ['Hand-dyed threadwork', 'Flowing silk lining', 'Satin bow details', 'Sweetheart bodice'],
      ar: ['تطريز خيوط مصبوغة يدوياً', 'بطانة حريرية منسدلة', 'فيونكة ساتان أنيقة', 'مشد صدر على شكل قلب']
    },
    images: ['https://images.pexels.com/photos/14358523/pexels-photo-14358523.jpeg?auto=compress&cs=tinysrgb&w=800']
  },
  {
    id: 'g13',
    nameKey: 'collections.gowns.g13.name',
    catKey: 'collections.gowns.g13.category',
    price: 1600,
    image: 'https://images.pexels.com/photos/11039097/pexels-photo-11039097.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'evening' as const,
    category: { en: 'Boho Chic', ar: 'بوهيمي أنيق' },
    name: { en: 'Boho Meadows Silhouette', ar: 'فستان بوهو السهول' },
    colors: ['emerald', 'gold'],
    sizes: ['S', 'M', 'L'],
    desc: {
      en: 'A relaxed, crochet lace evening gown, perfect for whimsical outdoor and garden events.',
      ar: 'فستان سهرة دانتيل كروشيه كاجوال ومريح، مثالي لحفلات السهرة في الهواء الطلق والحدائق الخيالية.'
    },
    details: {
      en: ['Crochet vintage lace', 'Fringe lace hem', 'Comfort straps', 'Breathable linen lining'],
      ar: ['دانتيل كروشيه عتيق', 'حاشية دانتيل شراشيب', 'أحزمة مريحة', 'بطانة كتان ناعمة للتنفس']
    },
    images: ['https://images.pexels.com/photos/11039097/pexels-photo-11039097.jpeg?auto=compress&cs=tinysrgb&w=800']
  },
  {
    id: 'g14',
    nameKey: 'collections.gowns.g14.name',
    catKey: 'collections.gowns.g14.category',
    price: 2500,
    image: 'https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'evening' as const,
    category: { en: 'Modest Luxury', ar: 'فخامة محتشمة' },
    name: { en: 'Adora Modest Crepe', ar: 'فستان أدورا كريب المحتشم' },
    colors: ['navy', 'black'],
    sizes: ['S', 'M', 'L'],
    desc: {
      en: 'A high-neck long-sleeve premium crepe gown with minimal embellishments for structured modest elegance.',
      ar: 'فستان كريب عالي الجودة بأكمام طويلة وياقة مرتفعة مع زخارف بسيطة لتصميم كلاسيكي محتشم.'
    },
    details: {
      en: ['Heavy crepe fabric', 'High crew neck', 'Puff shoulder detail', 'Zippered sleeves'],
      ar: ['كريب ثقيل فاخر', 'ياقة دائرية عالية', 'كتف منفوخ ناعم', 'أكمام مزودة بسحابات مريحة']
    },
    images: ['https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=800']
  },
  {
    id: 'g15',
    nameKey: 'collections.gowns.g15.name',
    catKey: 'collections.gowns.g15.category',
    price: 2750,
    image: 'https://images.pexels.com/photos/2766384/pexels-photo-2766384.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'evening' as const,
    category: { en: 'Imperial', ar: 'إمبراطوري' },
    name: { en: 'Athena Silk Column', ar: 'فستان أثينا الحريري العمودي' },
    colors: ['red', 'burgundy'],
    sizes: ['S', 'M', 'L'],
    desc: {
      en: 'Pure silk crepe column gown featuring structured shoulder pads and an open cowl back drape.',
      ar: 'فستان عمودي من الكريب الحريري الطبيعي يتميز بحشوات كتف قوية وتصميم انسيابي مفتوح الظهر.'
    },
    details: {
      en: ['100% silk crepe de chine', 'Cowl draped back', 'Structured shoulders', 'Side thigh slit option'],
      ar: ['كريب حرير طبيعي 100%', 'ظهر منسدل متموج', 'أكتاف مبطنة قوية', 'فتحة جانبية على الفخذ اختيارية']
    },
    images: ['https://images.pexels.com/photos/2766384/pexels-photo-2766384.jpeg?auto=compress&cs=tinysrgb&w=800']
  },
  {
    id: 'g16',
    nameKey: 'collections.gowns.g16.name',
    catKey: 'collections.gowns.g16.category',
    price: 1900,
    image: 'https://images.pexels.com/photos/2916820/pexels-photo-2916820.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'evening' as const,
    category: { en: 'A-Line', ar: 'إيه لاين' },
    name: { en: 'Giselle Lace Whispers', ar: 'فستان جيزيل دانتيل ويسبرز' },
    colors: ['gold', 'champagne'],
    sizes: ['S', 'M', 'L'],
    desc: {
      en: 'An A-line gown showcasing a beautiful lace bodice and layered silk organza skirt.',
      ar: 'فستان إيه لاين يجمع بين مشد صدر دانتيل عالي الجودة وتنورة ناعمة من طبقات الأورجانزا الحريرية.'
    },
    details: {
      en: ['Silk organza skirt', 'Guipure lace bodice', 'Slim keyhole back', 'Whisper-light train'],
      ar: ['تنورة أورجانزا حريرية', 'صدرية دانتيل جيبير', 'ظهر بفتحة رفيعة', 'ذيل ناعم وخفيف الوزن']
    },
    images: ['https://images.pexels.com/photos/2916820/pexels-photo-2916820.jpeg?auto=compress&cs=tinysrgb&w=800']
  },
  {
    id: 'g17',
    nameKey: 'collections.gowns.g17.name',
    catKey: 'collections.gowns.g17.category',
    price: 2450,
    image: 'https://images.pexels.com/photos/3200007/pexels-photo-3200007.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'evening' as const,
    category: { en: 'Sculpted Couture', ar: 'كوتور منحوت' },
    name: { en: 'Aurelia Silhouette Gown', ar: 'فستان أوريليا المبتكر' },
    colors: ['black', 'emerald'],
    sizes: ['S', 'M', 'L'],
    desc: {
      en: 'A dramatic sculpted gown with structured lace patterns and an expansive tulle flare at the knees.',
      ar: 'فستان كوتور منحوت درامي بنقوش دانتيل هيكلية وتول منفوش وممتد يبدأ من عند الركبتين.'
    },
    details: {
      en: ['Structured lace panels', 'Multi-layer tulle flare', 'Corset bodice back ties', 'Chapel length train'],
      ar: ['ألواح دانتيل هيكلية', 'تول متعدد الطبقات منفوش', 'أربطة كورسيه خلفية', 'ذيل متوسط الطول كلاسيكي']
    },
    images: ['https://images.pexels.com/photos/3200007/pexels-photo-3200007.jpeg?auto=compress&cs=tinysrgb&w=800']
  },
  {
    id: 'g18',
    nameKey: 'collections.gowns.g18.name',
    catKey: 'collections.gowns.g18.category',
    price: 3500,
    image: 'https://images.pexels.com/photos/9825854/pexels-photo-9825854.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'evening' as const,
    category: { en: 'Ballgown', ar: 'منفوش ملكي' },
    name: { en: 'Seraphina Cathedral Gown', ar: 'فستان سيرافينا الكاتدرائية' },
    colors: ['blue', 'royalBlue'],
    sizes: ['S', 'M', 'L'],
    desc: {
      en: 'The ultimate royal experience, complete with hand-embroidered pearls and a magnificent cathedral train.',
      ar: 'تجربة ملكية متكاملة بامتياز، مزين باللؤلؤ المطرز يدوياً وذيل ممتد مهيب بطول الكاتدرائية.'
    },
    details: {
      en: ['Hand-sewn micro pearls', 'Cathedral length train', 'Internal steel boning corset', 'Luxury silk satin skirt'],
      ar: ['لؤلؤ مطرز يدوياً بالكامل', 'ذيل بطول الكاتدرائية', 'مشد داخلي داعم بأسلاك مرنة', 'تنورة من الساتان الحريري الفاخر']
    },
    images: ['https://images.pexels.com/photos/9825854/pexels-photo-9825854.jpeg?auto=compress&cs=tinysrgb&w=800']
  },
  {
    id: 'g19',
    nameKey: 'collections.gowns.g19.name',
    catKey: 'collections.gowns.g19.category',
    price: 2150,
    image: 'https://images.pexels.com/photos/11039096/pexels-photo-11039096.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'evening' as const,
    category: { en: 'Romantic', ar: 'رومانسي حالم' },
    name: { en: 'Vienna Sweetheart Gown', ar: 'فستان فيينا الرومانسي' },
    colors: ['emerald', 'green'],
    sizes: ['S', 'M', 'L'],
    desc: {
      en: 'A soft romantic tulle gown showcasing a sweetheart neckline and beautiful floral lace appliques.',
      ar: 'فستان تول رومانسي ناعم يعرض فتحة صدر كلاسيكية على شكل قلب وتطريزات دانتيل ورود رائعة.'
    },
    details: {
      en: ['Premium sweetheart neck', 'Soft champagne lining', 'Crystal beads floral lace', 'Easy zip back closure'],
      ar: ['ياق قلب فاخرة', 'بطانة ناعمة بلون الشامبانيا', 'دانتيل زهور مطرز بالخرز الكريستالي', 'سحاب خلفي مخفي مريح']
    },
    images: ['https://images.pexels.com/photos/11039096/pexels-photo-11039096.jpeg?auto=compress&cs=tinysrgb&w=800']
  },
  {
    id: 'g20',
    nameKey: 'collections.gowns.g20.name',
    catKey: 'collections.gowns.g20.category',
    price: 1850,
    image: 'https://images.pexels.com/photos/6763521/pexels-photo-6763521.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'evening' as const,
    category: { en: 'Boho Chic', ar: 'بوهيمي أنيق' },
    name: { en: 'Elysian Fields Lace', ar: 'فستان حقول الإليسيان بوهو' },
    colors: ['beige', 'roseGold'],
    sizes: ['S', 'M', 'L'],
    desc: {
      en: 'A boho chic wedding gown featuring flowy chiffon sleeves and heavy cotton lace panels.',
      ar: 'فستان زفاف بوهيمي أنيق يتميز بأكمام شيفون فضفاضة وألواح من الدانتيل القطني الثقيل والفاخر.'
    },
    details: {
      en: ['Flowing chiffon bell sleeves', 'Cotton embroidery lace', 'A-line shape', 'V-back closure'],
      ar: ['أكمام جرس شيفون انسيابية', 'دانتيل قطني مطرز', 'قصة إيه لاين', 'إغلاق خلفي على شكل حرف V']
    },
    images: ['https://images.pexels.com/photos/6763521/pexels-photo-6763521.jpeg?auto=compress&cs=tinysrgb&w=800']
  },
  {
    id: 'g21',
    nameKey: 'collections.gowns.g21.name',
    catKey: 'collections.gowns.g21.category',
    price: 2900,
    image: 'https://images.pexels.com/photos/2855146/pexels-photo-2855146.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'evening' as const,
    category: { en: 'Modest Luxury', ar: 'فخامة محتشمة' },
    name: { en: 'Vesper Modest Satin', ar: 'فستان فيسبر الحريري المحتشم' },
    colors: ['purple', 'plum'],
    sizes: ['S', 'M', 'L'],
    desc: {
      en: 'High-neck premium heavy satin gown with long cuffed sleeves, exuding timeless modest elegance.',
      ar: 'فستان من الساتان الثقيل والفاخر بياقة عالية وأكمام طويلة بأساور، يفيض بالأناقة الكلاسيكية المحتشمة.'
    },
    details: {
      en: ['Heavy Duchess satin', 'High neck drape collar', 'Pearl buttons on cuffs', 'Classic pleated A-line'],
      ar: ['ساتان دوقس ثقيل', 'ياقة عالية منسدلة', 'أزرار لؤلؤية على الأساور', 'كسرات كلاسيكية على قصة إيه لاين']
    },
    images: ['https://images.pexels.com/photos/2855146/pexels-photo-2855146.jpeg?auto=compress&cs=tinysrgb&w=800']
  },
  {
    id: 'g22',
    nameKey: 'collections.gowns.g22.name',
    catKey: 'collections.gowns.g22.category',
    price: 3200,
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'evening' as const,
    category: { en: 'Imperial', ar: 'إمبراطوري' },
    name: { en: 'Cleopatra Beadwork Column', ar: 'فستان كليوباترا العمودي المطرز' },
    colors: ['silver', 'grey'],
    sizes: ['S', 'M', 'L'],
    desc: {
      en: 'A high-end column gown heavily decorated with geometric crystal beadwork along the sleeves and shoulders.',
      ar: 'فستان عمودي راقي مزين بكثافة بالخرز الكريستالي الهندسي الممتد على طول الأكمام والأكتاف.'
    },
    details: {
      en: ['Geometric hand beadwork', 'Premium silk lining', 'Back slit for comfort walk', 'Sleek collar design'],
      ar: ['تطريز خرز يدوي هندسي', 'بطانة حريرية فاخرة', 'فتحة خلفية لراحة المشي', 'تصميم ياقة أنيقة']
    },
    images: ['https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800']
  },
  {
    id: 'g23',
    nameKey: 'collections.gowns.g23.name',
    catKey: 'collections.gowns.g23.category',
    price: 1750,
    image: 'https://images.pexels.com/photos/230129/pexels-photo-230129.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'evening' as const,
    category: { en: 'A-Line', ar: 'إيه لاين' },
    name: { en: 'Minimalist Silk Whisper', ar: 'فستان همس الحرير البسيط' },
    colors: ['olive', 'green'],
    sizes: ['S', 'M', 'L'],
    desc: {
      en: 'A completely clean, unembellished silk crepe A-line gown for the ultimate minimalist.',
      ar: 'فستان إيه لاين بسيط ونظيف تماماً من كريب الحرير الناعم، مصمم خصيصاً للعروس العصرية المحبة للبساطة.'
    },
    details: {
      en: ['100% silk crepe', 'Pocket detail skirt', 'Boat neckline', 'Low scoop back'],
      ar: ['كريب حرير طبيعي 100%', 'تنورة مزودة بجيوب جانبية', 'فتحة رقبة قارب كلاسيكية', 'ظهر منخفض مقوس مذهل']
    },
    images: ['https://images.pexels.com/photos/230129/pexels-photo-230129.jpeg?auto=compress&cs=tinysrgb&w=800']
  },
  {
    id: 'g24',
    nameKey: 'collections.gowns.g24.name',
    catKey: 'collections.gowns.g24.category',
    price: 2650,
    image: 'https://images.pexels.com/photos/3400627/pexels-photo-3400627.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'evening' as const,
    category: { en: 'Sculpted Couture', ar: 'كوتور منحوت' },
    name: { en: 'Siren Premium Silk Gown', ar: 'فستان سيرين الحريري الفاخر' },
    colors: ['roseGold', 'gold'],
    sizes: ['S', 'M', 'L'],
    desc: {
      en: 'A stunning silk satin sculpted gown featuring structured pleats and a structured corset bodice.',
      ar: 'فستان كوتور منحوت من الساتان الحريري المذهل يتميز بكسرات هيكلية ومشد صدر مدعم لكامل الفخامة.'
    },
    details: {
      en: ['Premium silk satin', 'Built-in corset boning', 'Structured pleats on train', 'Low square back'],
      ar: ['ساتان حريري فاخر', 'مشد كورسيه مدعم مدمج', 'كسرات هيكلية على الذيل', 'ظهر مربع منخفض']
    },
    images: ['https://images.pexels.com/photos/3400627/pexels-photo-3400627.jpeg?auto=compress&cs=tinysrgb&w=800']
  }
];
