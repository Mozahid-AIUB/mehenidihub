/* ================================================
   data.js — MehendiHub
   Real photos from Pexels, WedMeGood & TheWeddingCompany
================================================ */

var designs = [

    /* ══ SIMPLE — 11 designs ══ */
    { id: "simple-01", name: "Whisper of Petals", category: "simple", featured: true, image: "https://images.pexels.com/photos/6843087/pexels-photo-6843087.jpeg?w=600" },
    { id: "simple-02", name: "Morning Vine", category: "simple", featured: false, image: "https://images.pexels.com/photos/5246793/pexels-photo-5246793.jpeg?w=600" },
    { id: "simple-03", name: "Soft Bloom", category: "simple", featured: true, image: "https://images.pexels.com/photos/6843085/pexels-photo-6843085.jpeg?w=600" },
    { id: "simple-04", name: "Gentle Curve", category: "simple", featured: false, image: "https://images.pexels.com/photos/2659251/pexels-photo-2659251.jpeg?w=600" },
    { id: "simple-05", name: "Dew Drop Trace", category: "simple", featured: false, image: "https://images.pexels.com/photos/8257384/pexels-photo-8257384.jpeg?w=600" },
    { id: "simple-06", name: "Lace and Leaf", category: "simple", featured: false, image: "https://images.pexels.com/photos/12872536/pexels-photo-12872536.jpeg?w=600" },
    { id: "simple-07", name: "Twilight Blossom", category: "simple", featured: false, image: "https://images.pexels.com/photos/7408714/pexels-photo-7408714.jpeg?w=600" },
    { id: "simple-08", name: "Ember Spiral", category: "simple", featured: false, image: "https://images.pexels.com/photos/5602770/pexels-photo-5602770.jpeg?w=600" },
    { id: "simple-09", name: "Ivory Touch", category: "simple", featured: false, image: "https://images.pexels.com/photos/5484966/pexels-photo-5484966.jpeg?w=600" },
    { id: "simple-10", name: "Moonlit Dot", category: "simple", featured: false, image: "https://images.pexels.com/photos/4711086/pexels-photo-4711086.jpeg?w=600" },
    { id: "simple-11", name: "Silk Thread", category: "simple", featured: false, image: "https://images.pexels.com/photos/4161384/pexels-photo-4161384.jpeg?w=600" },

    /* ══ ARABIC — 13 designs ══ */
    { id: "arabic-01", name: "Desert Rose", category: "arabic", featured: true, image: "https://images.pexels.com/photos/2643556/pexels-photo-2643556.jpeg?w=600" },
    { id: "arabic-02", name: "Golden Arch", category: "arabic", featured: false, image: "https://images.pexels.com/photos/5043971/pexels-photo-5043971.jpeg?w=600" },
    { id: "arabic-03", name: "Crescent Flow", category: "arabic", featured: true, image: "https://images.pexels.com/photos/5602781/pexels-photo-5602781.jpeg?w=600" },
    { id: "arabic-04", name: "Mirage Garden", category: "arabic", featured: false, image: "https://images.pexels.com/photos/2659251/pexels-photo-2659251.jpeg?w=600" },
    { id: "arabic-05", name: "Amber Dusk", category: "arabic", featured: false, image: "https://images.pexels.com/photos/5309018/pexels-photo-5309018.jpeg?w=600" },
    { id: "arabic-06", name: "Silk Oasis", category: "arabic", featured: false, image: "https://images.pexels.com/photos/5309020/pexels-photo-5309020.jpeg?w=600" },
    { id: "arabic-07", name: "Mystic Vine", category: "arabic", featured: false, image: "https://images.pexels.com/photos/2759267/pexels-photo-2759267.jpeg?w=600" },
    { id: "arabic-08", name: "Sand Whisper", category: "arabic", featured: false, image: "https://images.pexels.com/photos/7507609/pexels-photo-7507609.jpeg?w=600" },
    { id: "arabic-09", name: "Night Bloom", category: "arabic", featured: false, image: "https://images.pexels.com/photos/7408714/pexels-photo-7408714.jpeg?w=600" },
    { id: "arabic-10", name: "Velvet Swirl", category: "arabic", featured: false, image: "https://images.pexels.com/photos/7408711/pexels-photo-7408711.jpeg?w=600" },
    { id: "arabic-11", name: "Saffron Lace", category: "arabic", featured: false, image: "https://images.pexels.com/photos/17416763/pexels-photo-17416763.jpeg?w=600" },
    { id: "arabic-12", name: "Dune Florals", category: "arabic", featured: false, image: "https://images.pexels.com/photos/2750395/pexels-photo-2750395.jpeg?w=600" },
    { id: "arabic-13", name: "Oud Garden", category: "arabic", featured: false, image: "https://images.pexels.com/photos/2784986/pexels-photo-2784986.jpeg?w=600" },

    /* ══ BRIDAL — 13 designs ══ */
    { id: "bridal-01", name: "Eternal Bond", category: "bridal", featured: true, image: "https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2025/03/8432da3896f6fe06d6e86528ac04e0dc.jpg" },
    { id: "bridal-02", name: "Royal Henna", category: "bridal", featured: false, image: "https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2025/03/221212b874c215fbc7e5d5ad1fe78673.jpg" },
    { id: "bridal-03", name: "Dulhan Dream", category: "bridal", featured: true, image: "https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2025/03/de51c1c28c37d300b8fe7be4ac0d13e3.jpg" },
    { id: "bridal-04", name: "Crimson Vow", category: "bridal", featured: false, image: "https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2025/03/6c704d75e062cf169d4753f09ba4e577.jpg" },
    { id: "bridal-05", name: "Sacred Lotus", category: "bridal", featured: false, image: "https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2025/03/ef195d0c0246c5ba77fd2c05bc8dfd45.jpg" },
    { id: "bridal-06", name: "Velvet Ritual", category: "bridal", featured: false, image: "https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2025/03/e6f2d90bd11830f97e322952c687ac25.jpg" },
    { id: "bridal-07", name: "Moonrise Bride", category: "bridal", featured: false, image: "https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2024/01/fc1b282a69b2f65e3780e657c3325163.jpg" },
    { id: "bridal-08", name: "Pearl and Petal", category: "bridal", featured: false, image: "https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2024/01/88bc0a1a98131eafb661cd8f45e76024.jpg" },
    { id: "bridal-09", name: "Saffron Promise", category: "bridal", featured: false, image: "https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2024/01/89b128cd0af9fdbe66eddb997811ab2d.jpg" },
    { id: "bridal-10", name: "Ivory Ritual", category: "bridal", featured: false, image: "https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2024/01/42041011c06b75dcdc0c2c29ee7ce834.jpg" },
    { id: "bridal-11", name: "Golden Sindoor", category: "bridal", featured: false, image: "https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2024/01/cc93a3fcbe23a7ff1b144026ecd0055c.jpg" },
    { id: "bridal-12", name: "Twilight Nuptial", category: "bridal", featured: false, image: "https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2024/01/253_TRIP9378.jpg" },
    { id: "bridal-13", name: "Regal Bloom", category: "bridal", featured: false, image: "https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2024/01/666ee59557eaa268ff80d904e56b1e9d.jpg" },

    /* ══ KIDS — 5 designs ══ */
    { id: "kids-01", name: "Little Stars", category: "kids", featured: true, image: "https://imageswedding.theweddingcompany.com/bh_prod_bucket/weddings/blogs/kids-mehndi-design/uploads/2f3a07c8-b273-4e3e-80fd-7ac986ab4550.jpg" },
    { id: "kids-02", name: "Tiny Garden", category: "kids", featured: false, image: "https://imageswedding.theweddingcompany.com/bh_prod_bucket/weddings/blogs/kids-mehndi-design/uploads/f4accd37-43a7-4252-8d1e-e9f3e1f0509f.jpg" },
    { id: "kids-03", name: "Sweet Petal", category: "kids", featured: false, image: "https://imageswedding.theweddingcompany.com/bh_prod_bucket/weddings/blogs/kids-mehndi-design/uploads/74fff298-7da8-4089-b284-a10f76030cad.jpg" },
    { id: "kids-04", name: "Butterfly Kiss", category: "kids", featured: false, image: "https://imageswedding.theweddingcompany.com/bh_prod_bucket/weddings/blogs/kids-mehndi-design/uploads/dadcc78a-8bf9-4f55-90ed-5b74dacd54ec.jpg" },
    { id: "kids-05", name: "Fairy Bloom", category: "kids", featured: false, image: "https://imageswedding.theweddingcompany.com/bh_prod_bucket/weddings/blogs/kids-mehndi-design/uploads/ad54b181-936f-4cb0-a2a9-d0e3b704e9e6.jpg" }

];