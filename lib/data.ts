export const categories = {
  en: [
    {
      id: "skincare",
      name: "Skincare",
      image:
        "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNraW5jYXJlfGVufDB8fDB8fHww",
    },
    {
      id: "makeup",
      name: "Makeup",
      image:
        "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "fragrance",
      name: "Fragrance",
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000&auto=format&fit=crop",
    },
  ],
  km: [
    {
      id: "skincare",
      name: "ផលិតភัณฑ์ថែរក្សាស្បែក", // Skincare
      image:
        "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNraW5jYXJlfGVufDB8fDB8fHww",
    },
    {
      id: "makeup",
      name: "គ្រឿងសម្អាង", // Makeup
      image:
        "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "fragrance",
      name: "ទឹកអប់", // Fragrance
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000&auto=format&fit=crop",
    },
  ],
}

export const featuredProducts = {
  en: [
    {
      id: "vitamin-c-brightening-cream",
      name: "Vitamin C Brightening Cream",
      price: 48.99,
      image:
        "https://plus.unsplash.com/premium_photo-1661693591879-fbdd89fad6cd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shortDescription: "Brightening vitamin C cream",
      description:
        "Our Vitamin C Brightening Cream is enriched with 15% Vitamin C and hyaluronic acid to brighten skin tone, reduce fine lines, and boost collagen production. This lightweight formula absorbs quickly, leaving your skin luminous and hydrated.",
      category: "skincare",
    },
    {
      id: "volumizing-mascara",
      name: "Volumizing Mascara",
      price: 24.99,
      image:
        "https://images.unsplash.com/photo-1650664370914-f026578ec2a4?q=80&w=1969&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shortDescription: "Dramatic lashes with no clumping",
      description:
        "Our Volumizing Mascara creates bold, voluminous lashes with a clump-free formula. The hourglass-shaped brush separates and coats each lash from root to tip, while the buildable formula allows for customizable intensity.",
      category: "makeup",
    },
    {
      id: "clay-face-mask",
      name: "Clay Face Mask",
      price: 38.99,
      image:
        "https://images.unsplash.com/photo-1626783416763-67a92e5e7266?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xheSUyMG1hc2t8ZW58MHx8MHx8fDA%3D",
      shortDescription: "Deep cleansing for all skin types",
      description:
        "Our Clay Face Mask provides deep cleansing and detoxification with a blend of natural clays and botanical extracts. It draws out impurities, absorbs excess oil, and refines pores while leaving skin feeling refreshed and revitalized.",
      category: "skincare",
    },
    {
      id: "setting-powder",
      name: "Setting Powder",
      price: 32.99,
      image:
        "https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shortDescription: "Silky finish with oil control",
      description:
        "Our Setting Powder offers a silky, lightweight finish that sets makeup for all-day wear. The finely-milled formula blurs imperfections, controls shine, and provides a natural, airbrushed look without settling into fine lines.",
      category: "makeup",
      shades: [
        { name: "Translucent", color: "#F5F5F5" },
        { name: "Fair", color: "#F0E6D3" },
        { name: "Medium", color: "#E0C8B0" },
        { name: "Deep", color: "#C19A6B" },
      ],
    },
  ],
  km: [
    {
      id: "vitamin-c-brightening-cream",
      name: "ក្រែមបំភ្លឺស្បែកវីតាមីន C", // Vitamin C Brightening Cream
      price: 48.99,
      image:
        "https://plus.unsplash.com/premium_photo-1661693591879-fbdd89fad6cd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shortDescription: "ក្រែមវីតាមីន C ធ្វើឱ្យស្បែកភ្លឺថ្លា", // Brightening vitamin C cream
      description:
        "ក្រែមបំភ្លឺស្បែកវីតាមីន C របស់យើងសម្បូរទៅដោយវីតាមីន C 15% និងអាស៊ីត hyaluronic ដើម្បីធ្វើឱ្យពណ៌ស្បែកភ្លឺថ្លា កាត់បន្ថយស្នាមជ្រួញល្អិតៗ និងជំរុញការផលិតកូឡាជែន។ រូបមន្តស្រាលនេះជ្រាបចូលបានលឿន ធ្វើឱ្យស្បែករបស់អ្នកភ្លឺថ្លា និងមានសំណើម។", // Our Vitamin C Brightening Cream is enriched with 15% Vitamin C and hyaluronic acid to brighten skin tone, reduce fine lines, and boost collagen production. This lightweight formula absorbs quickly, leaving your skin luminous and hydrated.
      category: "skincare",
    },
    {
      id: "volumizing-mascara",
      name: "ម៉ាស្ការ៉ា Volumizing", // Volumizing Mascara
      price: 24.99,
      image:
        "https://images.unsplash.com/photo-1650664370914-f026578ec2a4?q=80&w=1969&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shortDescription: "រោមភ្នែកក្រាស់ មិនជាប់គុំគ្នា", // Dramatic lashes with no clumping
      description:
        "ម៉ាស្ការ៉ា Volumizing របស់យើងបង្កើតរោមភ្នែកក្រាស់ច្បាស់ ជាមួយនឹងរូបមន្តមិនជាប់គុំគ្នា។ ជ្រុញរាងដូចនាឡិកាខ្សាច់ជួយបំបែក និងគ្របរោមភ្នែកគ្រប់សរសៃពីគល់ដល់ចុង ខណៈពេលដែលរូបមន្តដែលអាចបន្ថែមបានអនុញ្ញាតឱ្យកែតម្រូវកម្រិតក្រាស់តាមតម្រូវការ។", // Our Volumizing Mascara creates bold, voluminous lashes with a clump-free formula. The hourglass-shaped brush separates and coats each lash from root to tip, while the buildable formula allows for customizable intensity.
      category: "makeup",
    },
    {
      id: "clay-face-mask",
      name: "ម៉ាសមុខដីឥដ្ឋ", // Clay Face Mask
      price: 38.99,
      image:
        "https://images.unsplash.com/photo-1626783416763-67a92e5e7266?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xheSUyMG1hc2t8ZW58MHx8MHx8fDA%3D",
      shortDescription: "សម្អាតជម្រៅសម្រាប់គ្រប់ប្រភេទស្បែក", // Deep cleansing for all skin types
      description:
        "ម៉ាសមុខដីឥដ្ឋរបស់យើងផ្តល់ការសម្អាតជម្រៅ និងការបញ្ចេញជាតិពុលជាមួយនឹងការលាយបញ្ចូលគ្នានៃដីឥដ្ឋធម្មជាតិ និងសារធាតុសកាត់ពីរុក្ខជាតិ។ វាទាញយកភាពកខ្វក់ ស្រូបយកប្រេងលើស និងធ្វើឱ្យរន្ធញើសល្អប្រសើរ ខណៈពេលដែលធ្វើឱ្យស្បែកមានអារម្មណ៍ស្រស់ស្រាយ និងមានភាពរស់រវើក។", // Our Clay Face Mask provides deep cleansing and detoxification with a blend of natural clays and botanical extracts. It draws out impurities, absorbs excess oil, and refines pores while leaving skin feeling refreshed and revitalized.
      category: "skincare",
    },
    {
      id: "setting-powder",
      name: "ម្សៅបាច់ Setting Powder", // Setting Powder
      price: 32.99,
      image:
        "https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shortDescription: "បញ្ចប់រលោងជាមួយនឹងការគ្រប់គ្រងប្រេង", // Silky finish with oil control
      description:
        "ម្សៅបាច់ Setting Powder របស់យើងផ្តល់នូវការបញ្ចប់រលោង និងស្រាលដែលរក្សាគ្រឿងសម្អាងពេញមួយថ្ងៃ។ រូបមន្តម្សៅល្អិតនេះលាក់បាំងភាពមិនល្អឥតខ្ចោះ គ្រប់គ្រងភាពភ្លឺចាំង និងផ្តល់នូវរូបរាងធម្មជាតិ ដូចការបាញ់ម្សៅដោយម៉ាស៊ីន ដោយមិនចូលទៅក្នុងស្នាមជ្រួញល្អិតៗ។", // Our Setting Powder offers a silky, lightweight finish that sets makeup for all-day wear. The finely-milled formula blurs imperfections, controls shine, and provides a natural, airbrushed look without settling into fine lines.
      category: "makeup",
      shades: [
        { name: "ថ្លា", color: "#F5F5F5" }, // Translucent
        { name: "ស្បែកស", color: "#F0E6D3" }, // Fair
        { name: "ស្បែកមធ្យម", color: "#E0C8B0" }, // Medium
        { name: "ស្បែកក្រៅ", color: "#C19A6B" }, // Deep
      ],
    },
  ],
}

export const newArrivals = {
  en: [
    {
      id: "rose-quartz-facial-roller",
      name: "Rose Quartz Facial Roller",
      price: 28.99,
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1000&auto=format&fit=crop",
      shortDescription: "De-puff and boost circulation",
      description:
        "Our Rose Quartz Facial Roller helps reduce puffiness, improve circulation, and enhance product absorption. The dual-ended design features a larger stone for cheeks and forehead, and a smaller stone for under-eye and precise areas.",
      category: "skincare",
      isNew: true,
    },
    {
      id: "dewy-highlighter",
      name: "Dewy Highlighter",
      price: 32.99,
      image: "https://images.unsplash.com/photo-1599733589046-9f7a7e7a1e10?q=80&w=1000&auto=format&fit=crop",
      shortDescription: "Subtle glow for a natural radiance",
      description:
        "Our Dewy Highlighter creates a natural, lit-from-within glow with its creamy, buildable formula. The lightweight texture blends effortlessly into skin, adding dimension and radiance without glitter or sparkle.",
      category: "makeup",
      isNew: true,
      shades: [
        { name: "Moonlight", color: "#F0E6D3" },
        { name: "Golden Hour", color: "#E6BE8A" },
        { name: "Rose Gold", color: "#E6BE8A" },
      ],
    },
    {
      id: "overnight-repair-mask",
      name: "Overnight Repair Mask",
      price: 45.99,
      image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=1000&auto=format&fit=crop",
      shortDescription: "Wake up to renewed skin",
      description:
        "Our Overnight Repair Mask works while you sleep to deeply nourish and rejuvenate your skin. Formulated with peptides, antioxidants, and botanical extracts, it helps repair daily damage, boost collagen, and enhance skin's natural renewal process.",
      category: "skincare",
      isNew: true,
    },
    {
      id: "botanical-eau-de-parfum",
      name: "Botanical Eau de Parfum",
      price: 78.99,
      image: "https://images.unsplash.com/photo-1592945403407-9caf930b0c4d?q=80&w=1000&auto=format&fit=crop",
      shortDescription: "Delicate floral fragrance",
      description:
        "Our Botanical Eau de Parfum captures the essence of a blooming garden with notes of rose, jasmine, and lily of the valley. The heart reveals hints of bergamot and pink pepper, while base notes of sandalwood and musk create a lasting impression.",
      category: "fragrance",
      isNew: true,
    },
  ],
  km: [
    {
      id: "rose-quartz-facial-roller",
      name: "ដុំថ្មរ៉ូសគ្វាតស៍ម៉ាស្សាមុខ", // Rose Quartz Facial Roller
      price: 28.99,
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1000&auto=format&fit=crop",
      shortDescription: "បំបាត់ការហើម និងជំរុញចលនាឈាមរត់", // De-puff and boost circulation
      description:
        "ដុំថ្មរ៉ូសគ្វាតស៍ម៉ាស្សាមុខរបស់យើងជួយកាត់បន្ថយការហើម ធ្វើឱ្យចលនាឈាមរត់ប្រសើរឡើង និងបង្កើនការស្រូបយកផលិតផល។ ការរចនាដែលមានចុងពីរមានដុំថ្មធំជាងសម្រាប់ថ្ពាល់ និងថ្ងាស និងដុំថ្មតូចជាងសម្រាប់ក្រោមភ្នែក និងកន្លែងជាក់លាក់។", // Our Rose Quartz Facial Roller helps reduce puffiness, improve circulation, and enhance product absorption. The dual-ended design features a larger stone for cheeks and forehead, and a smaller stone for under-eye and precise areas.
      category: "skincare",
      isNew: true,
    },
    {
      id: "dewy-highlighter",
      name: "ហាយឡាយ Dewy", // Dewy Highlighter
      price: 32.99,
      image: "https://images.unsplash.com/photo-1599733589046-9f7a7e7a1e10?q=80&w=1000&auto=format&fit=crop",
      shortDescription: "ពន្លឺស្រាលៗ សម្រាប់ភាពភ្លឺថ្លាធម្មជាតិ", // Subtle glow for a natural radiance
      description:
        "ហាយឡាយ Dewy របស់យើងបង្កើតពន្លឺភ្លឺថ្លាធម្មជាតិដូចបញ្ចេញពីខាងក្នុង ជាមួយនឹងរូបមន្តសាច់ក្រែមដែលអាចបន្ថែមបាន។ សាច់ហាយឡាយស្រាលនេះលាយចូលស្បែកបានយ៉ាងងាយស្រួល បន្ថែមមិតិ និងភាពភ្លឺថ្លា ដោយគ្មានគ្រាប់ភ្លឺចាំង ឬផ្កាភ្លើង។", // Our Dewy Highlighter creates a natural, lit-from-within glow with its creamy, buildable formula. The lightweight texture blends effortlessly into skin, adding dimension and radiance without glitter or sparkle.
      category: "makeup",
      isNew: true,
      shades: [
        { name: "ពន្លឺព្រះចន្ទ", color: "#F0E6D3" }, // Moonlight
        { name: "ម៉ោងមាស", color: "#E6BE8A" }, // Golden Hour
        { name: "មាសផ្កាឈូក", color: "#E6BE8A" }, // Rose Gold
      ],
    },
    {
      id: "overnight-repair-mask",
      name: "ម៉ាសជួសជុលស្បែកពេលយប់", // Overnight Repair Mask
      price: 45.99,
      image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=1000&auto=format&fit=crop",
      shortDescription: "ភ្ញាក់មកជាមួយស្បែកដែលបានទទួលការបង្កើតឡើងវិញ", // Wake up to renewed skin
      description:
        "ម៉ាសជួសជុលស្បែកពេលយប់របស់យើងធ្វើការខណៈពេលដែលអ្នកគេង ដើម្បីចិញ្ចឹម និងធ្វើឱ្យស្បែករបស់អ្នកមានភាពស្រស់ថ្លាឡើងវិញយ៉ាងជ្រៅ។ បង្កើតឡើងជាមួយ peptides, antioxidants, និងសារធាតុសកាត់ពីរុក្ខជាតិ វាជួយជួសជុលការខូចខាតប្រចាំថ្ងៃ ជំរុញកូឡាជែន និងបង្កើនដំណើរការបង្កើតឡើងវិញតាមធម្មជាតិរបស់ស្បែក។", // Our Overnight Repair Mask works while you sleep to deeply nourish and rejuvenate your skin. Formulated with peptides, antioxidants, and botanical extracts, it helps repair daily damage, boost collagen, and enhance skin's natural renewal process.
      category: "skincare",
      isNew: true,
    },
    {
      id: "botanical-eau-de-parfum",
      name: "ទឹកអប់ Botanical Eau de Parfum", // Botanical Eau de Parfum
      price: 78.99,
      image: "https://images.unsplash.com/photo-1592945403407-9caf930b0c4d?q=80&w=1000&auto=format&fit=crop",
      shortDescription: "ក្លិនផ្កាទន់ភ្លន់", // Delicate floral fragrance
      description:
        "ទឹកអប់ Botanical Eau de Parfum របស់យើងចាប់យកខ្លឹមសារនៃសួនផ្កាដែលកំពុងរីក ជាមួយនឹងក្លិនផ្កាកុលាប ផ្កាម្លិះ និងផ្កាលីលីនៃជ្រលងភ្នំ។ ក្លិនកណ្តាលបង្ហាញពីក្លិនក្រូច Bergamot និងម្រេចហឹរពណ៌ផ្កាឈូក ខណៈពេលដែលក្លិនគោលនៃឈើចន្ទន៍ និងមូស្កបង្កើតការចងចាំដ៏យូរអង្វែង។", // Our Botanical Eau de Parfum captures the essence of a blooming garden with notes of rose, jasmine, and lily of the valley. The heart reveals hints of bergamot and pink pepper, while base notes of sandalwood and musk create a lasting impression.
      category: "fragrance",
      isNew: true,
    },
  ],
}

// Helper function to get all products based on language
export const getAllProducts = (language: string) => {
  const lang = language as "en" | "km"
  return [
    ...featuredProducts[lang],
    ...newArrivals[lang],
    ...(lang === "en"
      ? [
          {
            id: "gentle-cleansing-foam",
            name: "Gentle Cleansing Foam",
            price: 26.99,
            image: "https://images.unsplash.com/photo-1601612628452-9e99ced43524?q=80&w=1000&auto=format&fit=crop",
            shortDescription: "Removes impurities without stripping",
            description:
              "Our Gentle Cleansing Foam effectively removes makeup, dirt, and excess oil without disrupting the skin's natural moisture balance. The soft, airy lather leaves skin feeling clean, refreshed, and comfortable—never tight or dry.",
            category: "skincare",
          },
          {
            id: "precision-liquid-eyeliner",
            name: "Precision Liquid Eyeliner",
            price: 22.99,
            image: "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?q=80&w=1000&auto=format&fit=crop",
            shortDescription: "Waterproof, smudge-proof formula",
            description:
              "Our Precision Liquid Eyeliner features an ultra-fine brush tip for precise application and ultimate control. The quick-drying, waterproof formula creates intense definition that won't smudge, fade, or flake throughout the day.",
            category: "makeup",
          },
          {
            id: "silk-pillowcase",
            name: "Silk Pillowcase",
            price: 59.99,
            image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=1000&auto=format&fit=crop",
            shortDescription: "Prevent hair breakage and skin creasing",
            description:
              "Our 100% Mulberry Silk Pillowcase helps reduce friction on hair and skin while you sleep. The smooth surface minimizes hair breakage, frizz, and tangling, while helping to prevent sleep creases and maintaining skin's moisture levels.",
            category: "haircare",
          },
          {
            id: "beauty-products-set",
            name: "Beauty Products Set",
            price: 89.99,
            image:
              "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            shortDescription: "Complete skincare and makeup collection",
            description:
              "Our Beauty Products Set is the perfect introduction to our most popular products. This comprehensive collection includes our bestselling skincare essentials and makeup favorites, all in travel-friendly sizes perfect for discovering your new beauty routine.",
            category: "makeup",
          },
        ]
      : [
          {
            id: "gentle-cleansing-foam",
            name: "ហ្វូមលាងមុខ Gentle Cleansing Foam", // Gentle Cleansing Foam
            price: 26.99,
            image: "https://images.unsplash.com/photo-1601612628452-9e99ced43524?q=80&w=1000&auto=format&fit=crop",
            shortDescription: "កម្ចាត់សិ្វសកប្រក ដោយមិនធ្វើឱ្យស្បែកស្ងួត", // Removes impurities without stripping
            description:
              "ហ្វូមលាងមុខ Gentle Cleansing Foam របស់យើងកម្ចាត់គ្រឿងសម្អាង ភាពកខ្វក់ និងខ្លាញ់លើសបានយ៉ាងមានប្រសិទ្ធភាព ដោយមិនរំខានដល់តុល្យភាពសំណើមតាមធម្មជាតិរបស់ស្បែក។ ពពុះទន់ស្រាលធ្វើឱ្យស្បែកមានអារម្មណ៍ស្អាត ស្រស់ស្រាយ និងស្រួល — មិនមានអារម្មណ៍តឹង ឬស្ងួតឡើយ។", // Our Gentle Cleansing Foam effectively removes makeup, dirt, and excess oil without disrupting the skin's natural moisture balance. The soft, airy lather leaves skin feeling clean, refreshed, and comfortable—never tight or dry.
            category: "skincare",
          },
          {
            id: "precision-liquid-eyeliner",
            name: "អាយឡាយន័រទឹក Precision Liquid Eyeliner", // Precision Liquid Eyeliner
            price: 22.99,
            image: "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?q=80&w=1000&auto=format&fit=crop",
            shortDescription: "រូបមន្តកាន់ទឹក មិនប្រឡាក់", // Waterproof, smudge-proof formula
            description:
              "អាយឡាយន័រទឹក Precision Liquid Eyeliner របស់យើងមានចុងជ្រុងតូចល្អិតសម្រាប់ការគូសបានត្រឹមត្រូវ និងការគ្រប់គ្រងខ្ពស់បំផុត។ រូបមន្តស្ងួតលឿន កាន់ទឹក បង្កើតបន្ទាត់ច្បាស់ ដែលមិនប្រឡាក់ ប្រែពណ៌ ឬរបកពេញមួយថ្ងៃ។", // Our Precision Liquid Eyeliner features an ultra-fine brush tip for precise application and ultimate control. The quick-drying, waterproof formula creates intense definition that won't smudge, fade, or flake throughout the day.
            category: "makeup",
          },
          {
            id: "silk-pillowcase",
            name: "ស្រោមខ្នើយសូត្រ", // Silk Pillowcase
            price: 59.99,
            image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=1000&auto=format&fit=crop",
            shortDescription: "ការពារសក់បែក និងស្នាមជ្រួញលើស្បែក", // Prevent hair breakage and skin creasing
            description:
              "ស្រោមខ្នើយសូត្រ Mulberry 100% របស់យើងជួយកាត់បន្ថយការកកិតលើសក់និងស្បែកពេលគេង។ ផ្ទៃរលោងជួយកាត់បន្ថយការបែកសក់ សក់ចេញជ្រុង និងការរមួល ខណៈពេលដែលជួយការពារស្នាមជ្រួញពេលគេង និងរក្សាកម្រិតសំណើមរបស់ស្បែក។", // Our 100% Mulberry Silk Pillowcase helps reduce friction on hair and skin while you sleep. The smooth surface minimizes hair breakage, frizz, and tangling, while helping to prevent sleep creases and maintaining skin's moisture levels.
            category: "haircare",
          },
          {
            id: "beauty-products-set",
            name: "សំណុំផលិតផលសម្រស់", // Beauty Products Set
            price: 89.99,
            image:
              "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            shortDescription: "សំណុំផលិតផលថែរក្សាស្បែក និងគ្រឿងសម្អាងពេញលេញ", // Complete skincare and makeup collection
            description:
              "សំណុំផលិតផលសម្រស់របស់យើងគឺជាការណែនាំដ៏ល្អឥតខ្ចោះអំពីផលិតផលដែលពេញនិយមបំផុតរបស់យើង។ សំណុំដ៏ទូលំទូលាយនេះរួមមានផលិតផលថែរក្សាស្បែកដែលលក់ដាច់បំផុត និងគ្រឿងសម្អាងដែលពេញនិយម ទាំងអស់មានទំហំសមរម្យសម្រាប់ការធ្វើដំណើរ ល្អឥតខ្ចោះសម្រាប់ការស្វែងរកទម្លាប់សម្រស់ថ្មីរបស់អ្នក។", // Our Beauty Products Set is the perfect introduction to our most popular products. This comprehensive collection includes our bestselling skincare essentials and makeup favorites, all in travel-friendly sizes perfect for discovering your new beauty routine.
            category: "makeup",
          },
        ]),
  ]
}

// Helper function to get all products based on language
export const allProducts = (language: string) => {
  const lang = language as "en" | "km"
  return [
    ...featuredProducts[lang],
    ...newArrivals[lang],
    ...(lang === "en"
      ? [
          {
            id: "gentle-cleansing-foam",
            name: "Gentle Cleansing Foam",
            price: 26.99,
            image: "https://images.unsplash.com/photo-1601612628452-9e99ced43524?q=80&w=1000&auto=format&fit=crop",
            shortDescription: "Removes impurities without stripping",
            description:
              "Our Gentle Cleansing Foam effectively removes makeup, dirt, and excess oil without disrupting the skin's natural moisture balance. The soft, airy lather leaves skin feeling clean, refreshed, and comfortable—never tight or dry.",
            category: "skincare",
          },
          {
            id: "precision-liquid-eyeliner",
            name: "Precision Liquid Eyeliner",
            price: 22.99,
            image: "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?q=80&w=1000&auto=format&fit=crop",
            shortDescription: "Waterproof, smudge-proof formula",
            description:
              "Our Precision Liquid Eyeliner features an ultra-fine brush tip for precise application and ultimate control. The quick-drying, waterproof formula creates intense definition that won't smudge, fade, or flake throughout the day.",
            category: "makeup",
          },
          {
            id: "silk-pillowcase",
            name: "Silk Pillowcase",
            price: 59.99,
            image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=1000&auto=format&fit=crop",
            shortDescription: "Prevent hair breakage and skin creasing",
            description:
              "Our 100% Mulberry Silk Pillowcase helps reduce friction on hair and skin while you sleep. The smooth surface minimizes hair breakage, frizz, and tangling, while helping to prevent sleep creases and maintaining skin's moisture levels.",
            category: "haircare",
          },
          {
            id: "beauty-products-set",
            name: "Beauty Products Set",
            price: 89.99,
            image:
              "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            shortDescription: "Complete skincare and makeup collection",
            description:
              "Our Beauty Products Set is the perfect introduction to our most popular products. This comprehensive collection includes our bestselling skincare essentials and makeup favorites, all in travel-friendly sizes perfect for discovering your new beauty routine.",
            category: "makeup",
          },
        ]
      : [
          {
            id: "gentle-cleansing-foam",
            name: "ហ្វូមលាងមុខ Gentle Cleansing Foam", // Gentle Cleansing Foam
            price: 26.99,
            image: "https://images.unsplash.com/photo-1601612628452-9e99ced43524?q=80&w=1000&auto=format&fit=crop",
            shortDescription: "កម្ចាត់សិ្វសកប្រក ដោយមិនធ្វើឱ្យស្បែកស្ងួត", // Removes impurities without stripping
            description:
              "ហ្វូមលាងមុខ Gentle Cleansing Foam របស់យើងកម្ចាត់គ្រឿងសម្អាង ភាពកខ្វក់ និងខ្លាញ់លើសបានយ៉ាងមានប្រសិទ្ធភាព ដោយមិនរំខានដល់តុល្យភាពសំណើមតាមធម្មជាតិរបស់ស្បែក។ ពពុះទន់ស្រាលធ្វើឱ្យស្បែកមានអារម្មណ៍ស្អាត ស្រស់ស្រាយ និងស្រួល — មិនមានអារម្មណ៍តឹង ឬស្ងួតឡើយ។", // Our Gentle Cleansing Foam effectively removes makeup, dirt, and excess oil without disrupting the skin's natural moisture balance. The soft, airy lather leaves skin feeling clean, refreshed, and comfortable—never tight or dry.
            category: "skincare",
          },
          {
            id: "precision-liquid-eyeliner",
            name: "អាយឡាយន័រទឹក Precision Liquid Eyeliner", // Precision Liquid Eyeliner
            price: 22.99,
            image: "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?q=80&w=1000&auto=format&fit=crop",
            shortDescription: "រូបមន្តកាន់ទឹក មិនប្រឡាក់", // Waterproof, smudge-proof formula
            description:
              "អាយឡាយន័រទឹក Precision Liquid Eyeliner របស់យើងមានចុងជ្រុងតូចល្អិតសម្រាប់ការគូសបានត្រឹមត្រូវ និងការគ្រប់គ្រងខ្ពស់បំផុត។ រូបមន្តស្ងួតលឿន កាន់ទឹក បង្កើតបន្ទាត់ច្បាស់ ដែលមិនប្រឡាក់ ប្រែពណ៌ ឬរបកពេញមួយថ្ងៃ។", // Our Precision Liquid Eyeliner features an ultra-fine brush tip for precise application and ultimate control. The quick-drying, waterproof formula creates intense definition that won't smudge, fade, or flake throughout the day.
            category: "makeup",
          },
          {
            id: "silk-pillowcase",
            name: "ស្រោមខ្នើយសូត្រ", // Silk Pillowcase
            price: 59.99,
            image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=1000&auto=format&fit=crop",
            shortDescription: "ការពារសក់បែក និងស្នាមជ្រួញលើស្បែក", // Prevent hair breakage and skin creasing
            description:
              "ស្រោមខ្នើយសូត្រ Mulberry 100% របស់យើងជួយកាត់បន្ថយការកកិតលើសក់និងស្បែកពេលគេង។ ផ្ទៃរលោងជួយកាត់បន្ថយការបែកសក់ សក់ចេញជ្រុង និងការរមួល ខណៈពេលដែលជួយការពារស្នាមជ្រួញពេលគេង និងរក្សាកម្រិតសំណើមរបស់ស្បែក។", // Our 100% Mulberry Silk Pillowcase helps reduce friction on hair and skin while you sleep. The smooth surface minimizes hair breakage, frizz, and tangling, while helping to prevent sleep creases and maintaining skin's moisture levels.
            category: "haircare",
          },
          {
            id: "beauty-products-set",
            name: "សំណុំផលិតផលសម្រស់", // Beauty Products Set
            price: 89.99,
            image:
              "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            shortDescription: "សំណុំផលិតផលថែរក្សាស្បែក និងគ្រឿងសម្អាងពេញលេញ", // Complete skincare and makeup collection
            description:
              "សំណុំផលិតផលសម្រស់របស់យើងគឺជាការណែនាំដ៏ល្អឥតខ្ចោះអំពីផលិតផលដែលពេញនិយមបំផុតរបស់យើង។ សំណុំដ៏ទូលំទូលាយនេះរួមមានផលិតផលថែរក្សាស្បែកដែលលក់ដាច់បំផុត និងគ្រឿងសម្អាងដែលពេញនិយម ទាំងអស់មានទំហំសមរម្យសម្រាប់ការធ្វើដំណើរ ល្អឥតខ្ចោះសម្រាប់ការស្វែងរកទម្លាប់សម្រស់ថ្មីរបស់អ្នក។", // Our Beauty Products Set is the perfect introduction to our most popular products. This comprehensive collection includes our bestselling skincare essentials and makeup favorites, all in travel-friendly sizes perfect for discovering your new beauty routine.
            category: "makeup",
          },
        ]),
  ]
}
