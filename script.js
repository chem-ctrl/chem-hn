// ========== INGREDIENT DATABASE WITH BENEFITS & SIDE EFFECTS ==========
const ingredientDatabase = {
    "Neem": {
        description: "Bitter medicinal herb with antibacterial properties",
        benefits: {
            "Vata": "❌ Can increase dryness - use with oils",
            "Pitta": "✅ Excellent - cools inflammation",
            "Kapha": "✅ Very good - reduces congestion"
        },
        healthBenefits: ["Antibacterial", "Anti-inflammatory", "Treats acne", "Scalp health"],
        sideEffects: {
            "Vata": "May cause dryness, constipation if overused",
            "Pitta": "Generally safe, minimal side effects",
            "Kapha": "Generally safe, may increase dryness"
        },
        dosage: "Use externally or 1 capsule daily"
    },
    "Ashwagandha": {
        description: "Adaptogenic herb that reduces stress and anxiety",
        benefits: {
            "Vata": "✅ Excellent - provides grounding",
            "Pitta": "⚠️ Moderate - can be heating",
            "Kapha": "❌ Avoid - too heavy/warming"
        },
        healthBenefits: ["Stress relief", "Better sleep", "Energy boost", "Immune strength"],
        sideEffects: {
            "Vata": "Generally safe, may relax muscles",
            "Pitta": "Can increase body heat, may cause acidity",
            "Kapha": "May increase heaviness, lethargy"
        },
        dosage: "300-600mg daily, 30-60 minutes before bed"
    },
    "Aloe Vera": {
        description: "Cooling succulent plant with hydrating properties",
        benefits: {
            "Vata": "⚠️ Cooling - helpful for dryness",
            "Pitta": "✅ Excellent - very cooling",
            "Kapha": "✅ Good - reduces congestion"
            
        },
        healthBenefits: ["Deep hydration", "Heals burns", "Reduces inflammation", "Skin healing"],
        sideEffects: {
            "Vata": "May cool and dry internally if ingested",
            "Pitta": "Generally safe, very cooling",
            "Kapha": "Safe externally, avoid internal ingestion"
        },
        dosage: "Apply topically as needed, internal: 1-2 tbsp juice"
    },
    "Tulsi (Holy Basil)": {
        description: "Sacred herb with powerful antioxidants",
        benefits: {
            "Vata": "⚠️ Minor warming - okay in small amounts",
            "Pitta": "⚠️ Heating - use moderately",
            "Kapha": "✅ Excellent - increases warmth"
        },
        healthBenefits: ["Immune boost", "Stress relief", "Respiratory health", "Antioxidant"],
        sideEffects: {
            "Vata": "May increase dryness in excess",
            "Pitta": "Can increase body heat and acidity",
            "Kapha": "Generally safe, very beneficial"
        },
        dosage: "2-3 cups tea daily or 1 capsule"
    },
    "Turmeric (Curcumin)": {
        description: "Golden spice with powerful anti-inflammatory compounds",
        benefits: {
            "Vata": "⚠️ Moderate - warming but helpful",
            "Pitta": "⚠️ Heating - use with cooling herbs",
            "Kapha": "✅ Excellent - excellent for digestion"
        },
        healthBenefits: ["Anti-inflammatory", "Joint health", "Skin glow", "Digestion"],
        sideEffects: {
            "Vata": "May increase dryness, pair with oil",
            "Pitta": "Can increase body heat, acidity",
            "Kapha": "Generally safe, very beneficial"
        },
        dosage: "500-2000mg daily, with black pepper & fat for absorption"
    },
    "Brahmi": {
        description: "Cooling herb for mental clarity and memory",
        benefits: {
            "Vata": "✅ Good - grounding and calming",
            "Pitta": "✅ Excellent - very cooling",
            "Kapha": "⚠️ Moderate - may increase cold"
        },
        healthBenefits: ["Memory enhancement", "Brain health", "Anxiety relief", "Nerve support"],
        sideEffects: {
            "Vata": "Generally safe, may be slightly cooling",
            "Pitta": "Generally safe, very cooling",
            "Kapha": "May increase heaviness, use sparingly"
        },
        dosage: "300-600mg daily or 1-2 cups tea"
    },
    "Triphala": {
        description: "Three-fruit combination for gentle digestion",
        benefits: {
            "Vata": "✅ Very Good - gentle cleansing",
            "Pitta": "✅ Excellent - cooling and balancing",
            "Kapha": "✅ Very Good - energizing"
        },
        healthBenefits: ["Digestive health", "Detoxification", "Eye health", "Gentle laxative"],
        sideEffects: {
            "Vata": "May increase gas if congested, always with warm water",
            "Pitta": "Generally safe, very well balanced",
            "Kapha": "Generally safe, slight warming effect"
        },
        dosage: "1 teaspoon powder in warm water before bed"
    },
    "Chyawanprash": {
        description: "Ayurvedic herbal jam with 40+ ingredients",
        benefits: {
            "Vata": "✅ Very Good - nourishing and warm",
            "Pitta": "⚠️ Moderate - slightly warming",
            "Kapha": "❌ Avoid - too heavy and sweet"
        },
        healthBenefits: ["Immunity", "Energy", "Respiratory health", "Anti-aging"],
        sideEffects: {
            "Vata": "Generally very safe, nourishing",
            "Pitta": "May increase body heat if excess",
            "Kapha": "May increase heaviness and congestion"
        },
        dosage: "1 teaspoon daily with warm milk"
    },
    "Plant Protein": {
        description: "Vegan protein from pea, rice, hemp sources",
        benefits: {
            "Vata": "✅ Good - nourishing and building",
            "Pitta": "✅ Good - easily digestible",
            "Kapha": "⚠️ Moderate - may be heavy"
        },
        healthBenefits: ["Muscle building", "Recovery", "Energy", "Nutrition"],
        sideEffects: {
            "Vata": "May cause bloating if not hydrated well",
            "Pitta": "Generally well tolerated",
            "Kapha": "May increase heaviness, take with digestive spices"
        },
        dosage: "25-30g per serving, once daily post-workout"
    },
    "Coconut Oil": {
        description: "Pure organic coconut oil for skin and hair",
        benefits: {
            "Vata": "✅ Excellent - deeply nourishing and warming",
            "Pitta": "⚠️ Moderate - can be slightly warming",
            "Kapha": "❌ Avoid - too heavy and oily"
        },
        healthBenefits: ["Deep hydration", "Hair nourishment", "Skin softening", "Antifungal properties"],
        sideEffects: {
            "Vata": "Generally safe, very beneficial",
            "Pitta": "May increase body heat if excess, use with cooling herbs",
            "Kapha": "May increase heaviness and greasiness"
        },
        dosage: "Apply topically as needed, 1-2 tbsp daily for hair/skin"
    },
    "Sandalwood": {
        description: "Cooling aromatic wood with skin-soothing properties",
        benefits: {
            "Vata": "⚠️ Moderate - cooling but can be drying",
            "Pitta": "✅ Excellent - very cooling and calming",
            "Kapha": "⚠️ Moderate - cooling may reduce warmth"
        },
        healthBenefits: ["Skin cooling", "Acne reduction", "Anti-inflammatory", "Spiritual calming"],
        sideEffects: {
            "Vata": "May increase dryness if applied excessively",
            "Pitta": "Generally safe, very beneficial",
            "Kapha": "Minimal side effects, slightly cooling"
        },
        dosage: "Apply paste topically or use powder 1-2 times daily"
    },
    "Sesame Oil": {
        description: "Warming organic sesame oil with grounding properties",
        benefits: {
            "Vata": "✅ Excellent - deeply grounding and warming",
            "Pitta": "❌ Heating - avoid or use sparingly",
            "Kapha": "⚠️ Moderate - warming but potentially heavy"
        },
        healthBenefits: ["Joint support", "Muscle relaxation", "Detoxification", "Deep warming"],
        sideEffects: {
            "Vata": "Generally safe, very nourishing",
            "Pitta": "Can increase body heat and inflammation",
            "Kapha": "May increase heaviness"
        },
        dosage: "Use for abhyanga (oil massage) or 1-2 tbsp daily"
    },
    "Rose Extract": {
        description: "Cooling floral extract with calming properties",
        benefits: {
            "Vata": "⚠️ Moderate - cooling but uplifting",
            "Pitta": "✅ Excellent - very cooling and soothing",
            "Kapha": "⚠️ Moderate - may increase coolness"
        },
        healthBenefits: ["Skin moisturization", "Emotional balance", "Anti-inflammatory", "Fragrance"],
        sideEffects: {
            "Vata": "May feel slightly cool, pair with warming oils",
            "Pitta": "Generally safe, very beneficial",
            "Kapha": "Minimal side effects"
        },
        dosage: "Apply topically as needed or use in skincare"
    },
    "Ghee": {
        description: "Clarified butter with digestive and nourishing properties",
        benefits: {
            "Vata": "✅ Excellent - warm, nourishing, grounding",
            "Pitta": "⚠️ Moderate - warming, use with cooling herbs",
            "Kapha": "❌ Avoid - too oily and heavy"
        },
        healthBenefits: ["Digestive health", "Nutrient absorption", "Brain nourishment", "Immune support"],
        sideEffects: {
            "Vata": "Generally safe, very beneficial",
            "Pitta": "Can increase body heat if excess",
            "Kapha": "May increase heaviness and congestion"
        },
        dosage: "1-2 teaspoons daily with warm milk or food"
    },
    "Henna": {
        description: "Natural plant dye with cooling and conditioning properties",
        benefits: {
            "Vata": "⚠️ Moderate - cooling but drying",
            "Pitta": "✅ Excellent - cooling and soothing",
            "Kapha": "✅ Good - improves circulation"
        },
        healthBenefits: ["Hair coloring", "Scalp cooling", "Conditioning", "Blood circulation"],
        sideEffects: {
            "Vata": "May increase dryness if overused",
            "Pitta": "Generally safe, very cooling",
            "Kapha": "Generally safe, stimulating"
        },
        dosage: "Apply paste 2-3 hours or overnight, 1-2 times monthly"
    },
    "Brahmi Oil": {
        description: "Oil infused with brahmi herb for mind clarity",
        benefits: {
            "Vata": "✅ Good - grounding and calming",
            "Pitta": "✅ Excellent - very cooling",
            "Kapha": "⚠️ Moderate - may increase cold"
        },
        healthBenefits: ["Mental clarity", "Stress relief", "Hair health", "Scalp cooling"],
        sideEffects: {
            "Vata": "Generally safe, slightly cooling",
            "Pitta": "Generally safe, very beneficial",
            "Kapha": "May increase cold feeling"
        },
        dosage: "Apply to scalp and hair, leave 30 minutes to overnight"
    },
    "Hibiscus": {
        description: "Cooling tropical flower with hair care benefits",
        benefits: {
            "Vata": "⚠️ Moderate - cooling but uplifting",
            "Pitta": "✅ Excellent - very cooling and soothing",
            "Kapha": "✅ Good - improves circulation"
        },
        healthBenefits: ["Hair strengthening", "Scalp cooling", "Anti-inflammatory", "Natural conditioning"],
        sideEffects: {
            "Vata": "May feel slightly cool, pair with warming oils",
            "Pitta": "Generally safe, very beneficial",
            "Kapha": "Generally safe"
        },
        dosage: "Use as paste mask 20-30 minutes or infuse in oil"
    },
    "Arjun Bark": {
        description: "Strengthening herb with heart-supporting benefits",
        benefits: {
            "Vata": "✅ Good - warming and grounding",
            "Pitta": "✅ Excellent - cooling and balancing",
            "Kapha": "✅ Good - stimulating"
        },
        healthBenefits: ["Heart health", "Circulation", "Stress relief", "Vitality"],
        sideEffects: {
            "Vata": "Generally safe",
            "Pitta": "Generally safe, balancing",
            "Kapha": "Generally safe"
        },
        dosage: "1 teaspoon powder with warm water daily"
    },
    "Kohl (Natural)": {
        description: "Traditional eye cosmetic made from natural minerals",
        benefits: {
            "Vata": "✅ Good - anchoring and grounding",
            "Pitta": "✅ Excellent - cooling properties",
            "Kapha": "✅ Good - enhancing and defining"
        },
        healthBenefits: ["Eye health", "Eye cooling", "Traditional beauty", "Antimicrobial"],
        sideEffects: {
            "Vata": "Generally safe",
            "Pitta": "Generally safe, cooling",
            "Kapha": "Generally safe"
        },
        dosage: "Apply around eyes daily or as needed"
    },
    "Beeswax": {
        description: "Natural beeswax for protective lip balm formulations",
        benefits: {
            "Vata": "✅ Excellent - protective and warming",
            "Pitta": "⚠️ Moderate - slightly warming",
            "Kapha": "⚠️ Moderate - protective but may feel heavy"
        },
        healthBenefits: ["Lip protection", "Moisture barrier", "Anti-inflammatory", "Natural emollient"],
        sideEffects: {
            "Vata": "Generally safe, very protective",
            "Pitta": "May feel slightly warming",
            "Kapha": "May feel slightly heavy on lips"
        },
        dosage: "Apply topically to lips as needed throughout day"
    },
    "Mint": {
        description: "Cooling aromatic herb with refreshing properties",
        benefits: {
            "Vata": "⚠️ Moderate - very cooling and drying",
            "Pitta": "✅ Excellent - very cooling and refreshing",
            "Kapha": "✅ Good - stimulating and refreshing"
        },
        healthBenefits: ["Cooling sensation", "Freshness", "Digestion", "Mental clarity"],
        sideEffects: {
            "Vata": "May increase dryness and gas",
            "Pitta": "Generally safe, very beneficial",
            "Kapha": "Generally safe"
        },
        dosage: "Use fresh or as oil extract topically"
    },
    "Mustard Oil": {
        description: "Warming penetrating oil with detoxifying properties",
        benefits: {
            "Vata": "✅ Excellent - deeply warming and grounding",
            "Pitta": "❌ Very heating - avoid",
            "Kapha": "✅ Excellent - stimulating circulation"
        },
        healthBenefits: ["Deep penetration", "Circulation stimulation", "Detoxification", "Joint support"],
        sideEffects: {
            "Vata": "Generally safe, very beneficial",
            "Pitta": "Can significantly increase body heat and acidity",
            "Kapha": "Generally safe, very stimulating"
        },
        dosage: "Use for massage 10-15 minutes or warm compress"
    }
};

// ========== BODY TYPE (DOSHA) INFORMATION ==========
const bodyTypeInfo = {
    "Vata": {
        icon: "🌬️",
        traits: ["Thin frame", "Dry skin", "Cold hands/feet", "Quick metabolism", "Sensitive digestion"],
        recommendation: "Need warm, oil-rich, nourishing foods. Avoid too much raw/cold foods."
    },
    "Pitta": {
        icon: "🔥",
        traits: ["Medium build", "Sensitive skin", "Warm body", "Sharp appetite", "Good metabolism"],
        recommendation: "Need cooling, not too spicy foods. Avoid excessive heat/sun exposure."
    },
    "Kapha": {
        icon: "💧",
        traits: ["Sturdy build", "Oily skin", "Warm/slow metabolism", "Strong digestion", "Steady nature"],
        recommendation: "Need warming, stimulating, light foods. Avoid heavy, oily, sweet foods."
    }
};

// ========== SAMPLE PRODUCT DATA (ENHANCED) ==========
const products = [
    // Hair Care Products
    {
        id: 1,
        name: "Organic Neem Hair Oil",
        brand: "Organic India",
        category: "hair-care",
        price: 450,
        rating: 4.8,
        reviews: 324,
        safetyRating: "5-star",
        certifications: ["USDA Organic", "India Organic"],
        ingredients: ["Neem"],
        actualIngredients: ["Neem Oil", "Coconut Oil", "Sesame Oil"],
        image: "🌿",
        description: "Pure neem oil for scalp health and dandruff control"
    },
    {
        id: 2,
        name: "Patanjali Ashwagandha Hair Oil",
        brand: "Patanjali",
        category: "hair-care",
        price: 320,
        rating: 4.6,
        reviews: 521,
        safetyRating: "5-star",
        certifications: ["India Organic"],
        ingredients: ["Ashwagandha"],
        actualIngredients: ["Ashwagandha Root", "Brahmi", "Neem", "Coconut Oil"],
        image: "🌿",
        description: "Stress-relieving hair oil for strong, thick hair"
    },
    {
        id: 3,
        name: "Himalaya Anti-Dandruff Shampoo",
        brand: "Himalaya",
        category: "hair-care",
        price: 380,
        rating: 4.7,
        reviews: 156,
        safetyRating: "5-star",
        certifications: ["Cruelty-Free"],
        ingredients: ["Neem", "Tulsi (Holy Basil)"],
        actualIngredients: ["Neem", "Tulsi", "Tea Tree Oil", "Coconut Oil"],
        image: "🧴",
        description: "Natural shampoo to eliminate dandruff and scalp issues"
    },

    // Skincare Products
    {
        id: 4,
        name: "Organic Aloe Vera Gel",
        brand: "The Derma Co",
        category: "skincare",
        price: 550,
        rating: 4.9,
        reviews: 892,
        safetyRating: "5-star",
        certifications: ["USDA Organic", "Cruelty-Free"],
        ingredients: ["Aloe Vera"],
        actualIngredients: ["Pure Aloe Vera", "Vitamin E", "Aloe Barbadensis"],
        image: "🌱",
        description: "100% pure aloe vera for cooling and hydration"
    },
    {
        id: 5,
        name: "Organic Tulsi Face Mask",
        brand: "Organic India",
        category: "skincare",
        price: 750,
        rating: 4.5,
        reviews: 234,
        safetyRating: "5-star",
        certifications: ["USDA Organic", "EU Organic"],
        ingredients: ["Tulsi (Holy Basil)", "Aloe Vera"],
        actualIngredients: ["Tulsi Extract", "Aloe Vera", "Honey", "Clay"],
        image: "💚",
        description: "Antibacterial face mask with healing tulsi"
    },
    {
        id: 6,
        name: "Rose Water Moisturizer",
        brand: "Himalaya",
        category: "skincare",
        price: 420,
        rating: 4.4,
        reviews: 445,
        safetyRating: "4-star",
        certifications: ["Cruelty-Free"],
        ingredients: ["Aloe Vera"],
        actualIngredients: ["Rose Water", "Aloe Vera", "Glycerin", "Chamomile"],
        image: "🌹",
        description: "Natural rose water moisturizer for dry skin"
    },

    // Herbal Supplements
    {
        id: 7,
        name: "Ashwagandha Capsules",
        brand: "Baba Ramdev",
        category: "herbal",
        price: 680,
        rating: 4.7,
        reviews: 567,
        safetyRating: "5-star",
        certifications: ["India Organic"],
        ingredients: ["Ashwagandha"],
        actualIngredients: ["Ashwagandha Root Extract", "Withania Somnifera"],
        image: "💊",
        description: "Stress relief and sleep enhancement supplement"
    },
    {
        id: 8,
        name: "Turmeric Curcumin Supplement",
        brand: "Organic India",
        category: "herbal",
        price: 890,
        rating: 4.8,
        reviews: 723,
        safetyRating: "5-star",
        certifications: ["USDA Organic"],
        ingredients: ["Turmeric (Curcumin)"],
        actualIngredients: ["Turmeric (Curcuma Longa)", "Curcumin 95%", "Black Pepper Extract"],
        image: "🟡",
        description: "Powerful anti-inflammatory supplement"
    },
    {
        id: 9,
        name: "Tulsi Tea (20 Bags)",
        brand: "Patanjali",
        category: "herbal",
        price: 290,
        rating: 4.6,
        reviews: 321,
        safetyRating: "5-star",
        certifications: ["India Organic"],
        ingredients: ["Tulsi (Holy Basil)"],
        actualIngredients: ["Tulsi Leaves", "Ginger", "Lemongrass", "Honey"],
        image: "☕",
        description: "Immune-boosting herbal tea"
    },

    // Protein Powder
    {
        id: 10,
        name: "Organic Plant Protein Powder",
        brand: "Organic India",
        category: "protein",
        price: 1200,
        rating: 4.7,
        reviews: 412,
        safetyRating: "5-star",
        certifications: ["USDA Organic", "Vegan"],
        ingredients: ["Plant Protein"],
        actualIngredients: ["Pea Protein", "Rice Protein", "Hemp Protein", "Stevia"],
        image: "🥤",
        description: "Complete plant-based protein for muscle building"
    },
    {
        id: 11,
        name: "Whey Protein (Organic)",
        brand: "The Derma Co",
        category: "protein",
        price: 1850,
        rating: 4.5,
        reviews: 289,
        safetyRating: "5-star",
        certifications: ["EU Organic"],
        ingredients: ["Whey Protein", "Ashwagandha"],
        actualIngredients: ["Grass-fed Whey Protein", "Ashwagandha", "Vanilla", "Stevia"],
        image: "💪",
        description: "Grass-fed whey with adaptogenic herbs"
    },

    // Ayurvedic Products
    {
        id: 12,
        name: "Triphala Powder",
        brand: "Baba Ramdev",
        category: "ayurveda",
        price: 540,
        rating: 4.8,
        reviews: 634,
        safetyRating: "5-star",
        certifications: ["India Organic"],
        ingredients: ["Triphala"],
        actualIngredients: ["Haritaki", "Bibhitaki", "Amalaki (Amla)"],
        image: "🌿",
        description: "Ancient digestive cleanser with three fruits"
    },
    {
        id: 13,
        name: "Chyawanprash Herbal Jam",
        brand: "Patanjali",
        category: "ayurveda",
        price: 480,
        rating: 4.7,
        reviews: 456,
        safetyRating: "5-star",
        certifications: ["India Organic"],
        ingredients: ["Chyawanprash"],
        actualIngredients: ["Amla", "Ashwagandha", "Brahmi", "40+ herbs"],
        image: "🏺",
        description: "Immunity and vitality enhancing herbal jam"
    },
    {
        id: 14,
        name: "Brahmi Tablets",
        brand: "Organic India",
        category: "ayurveda",
        price: 650,
        rating: 4.6,
        reviews: 201,
        safetyRating: "5-star",
        certifications: ["USDA Organic", "India Organic"],
        ingredients: ["Brahmi"],
        actualIngredients: ["Brahmi Leaf Extract", "Bacopa Monnieri"],
        image: "🧠",
        description: "Brain tonic for memory and mental clarity"
    },

    // New Ayurvedic Wellness Products
    {
        id: 15,
        name: "Wooden Comb",
        brand: "Organic India",
        category: "wellness",
        price: 280,
        rating: 4.9,
        reviews: 156,
        safetyRating: "5-star",
        certifications: ["Natural", "Cruelty-Free"],
        ingredients: ["Natural"],
        actualIngredients: ["Eco-friendly Neem Wood", "Natural finish"],
        image: "💆",
        description: "Ayurvedic wooden comb for healthy scalp and hair circulation. Reduces static and breakage. Made from sustainably harvested neem wood with natural anti-bacterial properties."
    },
    {
        id: 16,
        name: "Gua Sha Stone (Rose Quartz)",
        brand: "Himalaya",
        category: "wellness",
        price: 450,
        rating: 4.7,
        reviews: 234,
        safetyRating: "5-star",
        certifications: ["Natural", "Cruelty-Free"],
        ingredients: ["Natural"],
        actualIngredients: ["Rose Quartz Stone", "Smooth polished finish"],
        image: "🪨",
        description: "Traditional gua sha tool for facial massage and healing. Rose quartz promotes relaxation and skincare circulation. Integrates with Ayurvedic facial massage practices for rejuvenation and lymphatic drainage."
    },
    {
        id: 17,
        name: "Ayurvedic Herbal Soap Bar",
        brand: "Patanjali",
        category: "skincare",
        price: 120,
        rating: 4.8,
        reviews: 512,
        safetyRating: "5-star",
        certifications: ["India Organic", "Cruelty-Free"],
        ingredients: ["Neem", "Turmeric (Curcumin)", "Sesame Oil"],
        actualIngredients: ["Neem Leaf", "Turmeric Root", "Coconut Oil", "Sesame Oil", "Herbs blend"],
        image: "🧼",
        description: "Natural Ayurvedic soap with antibacterial neem, anti-inflammatory turmeric, and nourishing sesame oil. Deeply cleanses while maintaining skin balance across all dosha types. No harsh chemicals or sulfates."
    },
    {
        id: 18,
        name: "Ayurvedic Hair Mask (Brahmi & Hibiscus)",
        brand: "Baba Ramdev",
        category: "hair-care",
        price: 380,
        rating: 4.8,
        reviews: 389,
        safetyRating: "5-star",
        certifications: ["India Organic"],
        ingredients: ["Brahmi Oil", "Hibiscus"],
        actualIngredients: ["Brahmi Oil", "Hibiscus Flower Extract", "Coconut Oil", "Henna", "Amla powder"],
        image: "💆‍♀️",
        description: "Deep conditioning hair mask combining cooling brahmi oil for scalp health with hibiscus for strengthening. Conditions hair, reduces mental stress, and promotes thick, lustrous growth. Apply 20-30 minutes before shower."
    },
    {
        id: 19,
        name: "Sesame Hair Oil (Traditional Warm Oil)",
        brand: "Organic India",
        category: "hair-care",
        price: 520,
        rating: 4.9,
        reviews: 678,
        safetyRating: "5-star",
        certifications: ["USDA Organic", "India Organic"],
        ingredients: ["Sesame Oil", "Brahmi Oil"],
        actualIngredients: ["Organic Sesame Oil", "Brahmi Leaf Extract", "Ashwagandha", "Traditional Ayurvedic herbs"],
        image: "🌿",
        description: "Warming traditional sesame oil infused with brahmi for deep scalp nourishment and grounding. Ideal for Vata constitution. Improves circulation, strengthens roots, and provides thermal therapy when warm oil massage is performed."
    },
    {
        id: 20,
        name: "Ayurvedic Herbal Shampoo (Arjun & Neem)",
        brand: "Himalaya",
        category: "hair-care",
        price: 340,
        rating: 4.7,
        reviews: 423,
        safetyRating: "5-star",
        certifications: ["Cruelty-Free", "No Sulfates"],
        ingredients: ["Neem", "Arjun Bark"],
        actualIngredients: ["Neem Leaf", "Arjun Bark Extract", "Brahmi", "Coconut Oil", "Natural herbs"],
        image: "🧴",
        description: "Sulfate-free herbal shampoo combining arjun bark for heart and circulation support with neem for scalp health. Gently cleanses while balancing all doshas. Prevents hair fall and promotes strong, healthy growth."
    },

    // New Cosmetic Products
    {
        id: 21,
        name: "Natural Kajal (Kohl Eye Liner)",
        brand: "The Derma Co",
        category: "cosmetics",
        price: 280,
        rating: 4.6,
        reviews: 267,
        safetyRating: "5-star",
        certifications: ["Natural", "Cruelty-Free"],
        ingredients: ["Kohl (Natural)"],
        actualIngredients: ["Natural Kohl minerals", "Coconut Oil", "Sesame Oil", "Pure charcoal", "No heavy metals"],
        image: "👁️",
        description: "Traditional natural kajal made with pure minerals, coconut oil, and sesame oil. Cooling and soothing to eyes. Trace amounts of active minerals improve eye health. Hypoallergenic and suitable for sensitive eyes. Absorbs well without flaking."
    },
    {
        id: 22,
        name: "Organic Lip Balm (Rose & Beeswax)",
        brand: "Organic India",
        category: "cosmetics",
        price: 160,
        rating: 4.7,
        reviews: 345,
        safetyRating: "5-star",
        certifications: ["USDA Organic", "Cruelty-Free"],
        ingredients: ["Beeswax", "Rose Extract", "Mint"],
        actualIngredients: ["Natural Beeswax", "Rose Extract", "Mint Oil", "Coconut Oil", "Almond Oil", "Vitamin E"],
        image: "💄",
        description: "Nourishing organic lip balm with protective beeswax, cooling rose extract, and refreshing mint. Provides long-lasting hydration and prevents lip dryness. Gentle enough for daily use and contains no artificial colors or flavors."
    }
];

// ========== DOM ELEMENTS ==========
const productsGrid = document.getElementById("productsGrid");
const searchInput = document.getElementById("searchInput");
const priceFilter = document.getElementById("priceFilter");
const priceValue = document.getElementById("priceValue");
const productCount = document.getElementById("productCount");
const categoryButtons = document.querySelectorAll(".category-btn");
const filterCheckboxes = document.querySelectorAll(".filter-checkbox");
const resetFiltersBtn = document.querySelector(".reset-filters-btn");
const searchBtn = document.querySelector(".search-btn");

// ========== FILTER STATE ==========
let filteredProducts = [...products];
let activeCategory = "all";

// ========== EVENT LISTENERS ==========
searchInput.addEventListener("input", filterProducts);
searchBtn.addEventListener("click", filterProducts);
priceFilter.addEventListener("input", (e) => {
    priceValue.textContent = e.target.value;
    filterProducts();
});

categoryButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        categoryButtons.forEach(b => b.classList.remove("active"));
        e.target.classList.add("active");
        activeCategory = e.target.dataset.category;
        filterProducts();
    });
});

filterCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("change", filterProducts);
});

resetFiltersBtn.addEventListener("click", resetFilters);

// ========== FILTER FUNCTION ==========
function filterProducts() {
    let result = [...products];

    // Filter by search term
    const searchTerm = searchInput.value.toLowerCase();
    result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm)
    );

    // Filter by category
    if (activeCategory !== "all") {
        result = result.filter(product => product.category === activeCategory);
    }

    // Filter by price
    const maxPrice = parseInt(priceFilter.value);
    result = result.filter(product => product.price <= maxPrice);

    // Filter by checkboxes (Brand, Certification, Safety Rating, Ingredients)
    const getCheckedValues = (filterName) => {
        return Array.from(document.querySelectorAll(`.filter-checkbox[data-filter="${filterName}"]:checked`))
            .map(cb => cb.value);
    };

    const selectedBrands = getCheckedValues("brand");
    const selectedCerts = getCheckedValues("certification");
    const selectedSafety = getCheckedValues("safety");
    const selectedIngredients = getCheckedValues("ingredient");

    if (selectedBrands.length > 0) {
        result = result.filter(product => selectedBrands.includes(product.brand));
    }

    if (selectedCerts.length > 0) {
        result = result.filter(product =>
            selectedCerts.some(cert => product.certifications.includes(cert))
        );
    }

    if (selectedSafety.length > 0) {
        result = result.filter(product => selectedSafety.includes(product.safetyRating));
    }

    if (selectedIngredients.length > 0) {
        result = result.filter(product =>
            selectedIngredients.some(ing => product.ingredients.includes(ing))
        );
    }

    filteredProducts = result;
    displayProducts(filteredProducts);
}

// ========== DISPLAY PRODUCTS ==========
function displayProducts(productsToDisplay) {
    productsGrid.innerHTML = "";
    productCount.textContent = productsToDisplay.length;

    if (productsToDisplay.length === 0) {
        productsGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1;">
                <h3>No Products Found</h3>
                <p>Try adjusting your filters or search terms</p>
            </div>
        `;
        return;
    }

    productsToDisplay.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// ========== CREATE PRODUCT CARD ==========
function createProductCard(product) {
    const card = document.createElement("div");
    card.className = "product-card";
    
    const starsHtml = "⭐".repeat(Math.floor(product.rating));
    
    card.innerHTML = `
        <div class="product-image">${product.image}</div>
        <div class="product-info">
            <div class="product-category">${categoryNameMap[product.category]}</div>
            <div class="product-name">${product.name}</div>
            <div class="product-brand">By ${product.brand}</div>
            <div class="product-rating">
                ${starsHtml} ${product.rating} (${product.reviews} reviews)
            </div>
            <div class="product-price">₹${product.price.toLocaleString()}</div>
            <div class="product-details">
                <strong>Certifications:</strong>
                <div class="product-certifications">
                    ${product.certifications.map(cert => `<span class="cert-badge">${cert}</span>`).join("")}
                </div>
            </div>
            <div class="product-actions">
                <button class="btn-compare" onclick="showIngredientDetails(${product.id})">Ingredients</button>
                <button class="btn-favorite" onclick="toggleFavorite(this)">❤️</button>
            </div>
        </div>
    `;
    
    return card;
}

// ========== SHOW INGREDIENT DETAILS MODAL ==========
function showIngredientDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    let ingredientHTML = `<h2>${product.name}</h2><hr>`;
    ingredientHTML += `<p><strong>Description:</strong> ${product.description}</p><hr>`;
    
    ingredientHTML += `<h3>📊 Key Ingredients & Their Effects:</h3>`;
    
    product.ingredients.forEach(ing => {
        if (ingredientDatabase[ing]) {
            const ingData = ingredientDatabase[ing];
            ingredientHTML += `
                <div class="ingredient-card">
                    <h4>🌱 ${ing}</h4>
                    <p><em>${ingData.description}</em></p>
                    
                    <strong>Health Benefits:</strong>
                    <ul>
                        ${ingData.healthBenefits.map(b => `<li>✅ ${b}</li>`).join("")}
                    </ul>
                    
                    <strong>Effects by Body Type (Ayurvedic Doshas):</strong>
                    <div class="dosha-effects">
                        ${Object.entries(ingData.benefits).map(([dosha, effect]) => 
                            `<div class="dosha-item">
                                <strong>${bodyTypeInfo[dosha].icon} ${dosha}:</strong> ${effect}
                            </div>`
                        ).join("")}
                    </div>
                    
                    <strong>Side Effects by Body Type:</strong>
                    <div class="side-effects">
                        ${Object.entries(ingData.sideEffects).map(([dosha, effect]) => 
                            `<p><strong>${dosha}:</strong> ${effect}</p>`
                        ).join("")}
                    </div>
                    
                    <p><strong>Recommended Dosage:</strong> ${ingData.dosage}</p>
                    <hr>
                </div>
            `;
        }
    });

    ingredientHTML += `
        <h3>📚 Understanding Your Body Type (Dosha)</h3>
        <div class="body-types">
            ${Object.entries(bodyTypeInfo).map(([dosha, info]) => 
                `<div class="body-type-card">
                    <h4>${info.icon} ${dosha}</h4>
                    <strong>Traits:</strong>
                    <ul>
                        ${info.traits.map(t => `<li>• ${t}</li>`).join("")}
                    </ul>
                    <p><em>${info.recommendation}</em></p>
                </div>`
            ).join("")}
        </div>
    `;

    // Create modal
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.id = "ingredientModal";
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal" onclick="closeIngredientModal()">&times;</span>
            <div class="modal-body">
                ${ingredientHTML}
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    modal.style.display = "block";

    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            modal.remove();
        }
    }
}

// ========== CLOSE INGREDIENT MODAL ==========
function closeIngredientModal() {
    const modal = document.getElementById("ingredientModal");
    if (modal) {
        modal.style.display = "none";
        modal.remove();
    }
}

// ========== CATEGORY NAME MAP ==========
const categoryNameMap = {
    "all": "All",
    "hair-care": "Hair Care",
    "skincare": "Skincare",
    "herbal": "Herbal",
    "protein": "Protein",
    "ayurveda": "Ayurveda",
    "wellness": "Wellness Tools",
    "cosmetics": "Cosmetics"
};

// ========== RESET FILTERS ==========
function resetFilters() {
    // Reset all inputs
    searchInput.value = "";
    priceFilter.value = 5000;
    priceValue.textContent = "5000";
    
    // Reset checkboxes
    filterCheckboxes.forEach(checkbox => checkbox.checked = false);
    
    // Reset category
    categoryButtons.forEach(btn => btn.classList.remove("active"));
    categoryButtons[0].classList.add("active");
    activeCategory = "all";
    
    filterProducts();
}

// ========== TOGGLE FAVORITE ==========
function toggleFavorite(button) {
    button.classList.toggle("active");
    if (button.classList.contains("active")) {
        button.textContent = "❤️";
    } else {
        button.textContent = "🤍";
    }
}

// ========== INITIALIZE PAGE ==========
window.addEventListener("load", () => {
    filterProducts();
});
