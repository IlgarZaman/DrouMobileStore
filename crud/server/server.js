const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
app.use(cors());
let product = [
  {
    id: 1,
    category: "iPhone",
    name: "iPhone 13 Pro",
    img1: "https://m.media-amazon.com/images/I/317JiGToz-L.jpg",
    img2: "https://brzgroup.com.tr/wp-content/uploads/2021/11/iphone-13-pro-gold-select.png",
    img3: "https://iphoneproservis.com/wp-content/uploads/2018/05/iphone-13-pro-max-blue-select.png",
    price: 2400,
    description:
      "A dramatically more powerful camera system. A display so responsive, every interaction feels new again. The world’s fastest smartphone chip. Exceptional durability. And a huge leap in battery life. Let’s Pro.",
  },
  {
    id: 2,
    category: "iPhone",
    name: "iPhone 14 Pro",
    img1: "https://w-t.ams3.cdn.digitaloceanspaces.com/images/apple-14-pro-deep-purple-1-min.jpg",
    img2: "https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mq9r3tua-apple-iphone-14-pro-max-128gb-altin-mq9r3tua-637987435644926103.jpg",
    img3: "https://cdn.vox-cdn.com/thumbor/cPeVH-m_b9pScRXzpCBW-nAHSfw=/0x0:2032x1355/1400x1400/filters:focal(1016x678:1017x679)/cdn.vox-cdn.com/uploads/chorus_asset/file/22863258/akrales_210917_4760_0175.jpg",
    price: 3500,
    description:
      "A magical new way to interact with iPhone. Groundbreaking safety features designed to save lives. An innovative 48MP camera for mind-blowing detail. All powered by the ultimate smartphone chip.",
  },
  {
    id: 3,
    category: "iPhone",
    name: "iPhone 12",
    img1: "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-12-red.png?v=13",
    img2: "https://www.bakuelectronics.az/assets/images/products/92158/apple-iphone-12-64gb-black-1.jpg",
    img3: "https://res-5.cloudinary.com/grover/image/upload/v1620738471/sugqkrlgzcrcmms0sx7o.png",
    price: 2300,
    description:
      "As part of our efforts to reach carbon neutrality by 2030, iPhone 12 does not include a power adapter or EarPods. Included in the box is a USB‑C to Lightning Cable that supports fast charging and is compatible with USB‑C power adapters and computer ports. We encourage you to re‑use your current USB‑A to Lightning cables, power adapters and headphones, which are compatible with this iPhone model. But if you need any new Apple power adapters or headphones, they are available for purchase.",
  },
  {
    id: 4,
    category: "Accessories",
    name: "Powerbank Xiaomi 33W Pocket Edition Pro 10000 mAh Blue",
    img1: "https://kontakt.az/wp-content/uploads/2022/12/img_0_910_230_0_1-1_png.webp",
    img2: "https://kontakt.az/wp-content/uploads/2022/12/img_0_910_230_2_1_png.webp",
    img3: "https://kontakt.az/wp-content/uploads/2022/12/715e5b841d7e18456dfe26af0fd5adaa_png.webp",
    price: 90,
    description:
      "Solar usb chaiging portable powerbank wireless magnetic ultra thin Apple Android Type C power bank for 10000mah 20000mah",
  },
  {
    id: 5,
    category: "Accessories",
    name: "Arrival 3 Axis Gimbal Handheld",
    img1: "https://s.alicdn.com/@sc04/kf/Haa859cc6e5e44844b8f77fdd1c26d6eaN.jpg_960x960.jpg",
    img2: "https://s.alicdn.com/@sc04/kf/H9ec96274abcf4b8e942200ab4a8be0c8V.jpg_960x960.jpg",
    img3: "https://s.alicdn.com/@sc04/kf/Hb4384b73b3e146628c3a4737358019c0I.jpg_960x960.jpg",
    price: 29,
    description:
      "Mini TWS Wireless Stereo Boat Earphone Headphones Gaming Headset Auricolare Ear Buds Custom Original Music Bluetooth Earphone",
  },
  {
    id: 6,
    category: "Accessories",
    name: "Dual Charger Holder Cooling Fan Stand For PS5",
    img1: "https://s.alicdn.com/@sc04/kf/H58e6820a0bad41188aa433f69158b12cx.jpg_960x960.jpg",
    img2: "https://s.alicdn.com/@sc04/kf/Haa8e8355fd9843838107ba7f9f406d06P.jpg_960x960.jpg",
    img3: "https://s.alicdn.com/@sc04/kf/H1a265c1cc95d4310ba10c97f5063f577x.jpg_960x960.jpg",
    price: 39,
    description:
      "Mini TWS Wireless Stereo Boat Earphone Headphones Gaming Headset Auricolare Ear Buds Custom Original Music Bluetooth Earphone",
  },
  {
    id: 7,
    category: "Headphones",
    name: "Mini TWS Wireless Stereo Boat Earphone",
    img1: "https://s.alicdn.com/@sc04/kf/Hc8706f7722ff4a2d879d788d044907ceE.jpg_960x960.jpg",
    img2: "https://s.alicdn.com/@sc04/kf/Hb9ede71fd375408e97b4270030014ce6q.jpg_960x960.jpg",
    img3: "https://s.alicdn.com/@sc04/kf/H67ae02f4e15649d2bba36c596f313825C.jpg_960x960.jpg",
    price: 40,
    description:
      "Mini TWS Wireless Stereo Boat Earphone Headphones Gaming Headset Auricolare Ear Buds Custom Original Music Bluetooth Earphone",
  },
  {
    id: 8,
    category: "Headphones",
    name: "Wholesale P47 premium",
    img1: "https://s.alicdn.com/@sc04/kf/H2d27a3e009cc41f1b5f70a804bf237a27.png_960x960.png",
    img2: "https://s.alicdn.com/@sc04/kf/H12a2ce79abb944dd914436c6ba650c3aL.png_960x960.png",
    img3: "https://s.alicdn.com/@sc04/kf/Ha863c7de7769473fa0a64e27f8a0ed3fi.png_960x960.png",
    price: 60,
    description:
      "Wholesale P47 premium stereo sound cheap sport wireless headphones and earphones",
  },
  {
    id: 9,
    category: "Headphones",
    name: "X15 Wireless Earphone",
    img1: "https://s.alicdn.com/@sc04/kf/Haf133ad2e7ef426b8a5f4c328af5af83y.jpg_960x960.jpg",
    img2: "https://s.alicdn.com/@sc04/kf/Ha7ef8e2d477b4f22a70d543ddc21d48eL.jpg_960x960.jpg",
    img3: "https://s.alicdn.com/@sc04/kf/Hfca81141f1d0485382377b5949a36b62G.jpg_960x960.jpg",
    price: 120,
    description:
      "X15 Wireless Bluetooth 5.0 Gaming Earphone Mini True Headphone Magnetic Charging HIFI Sound Sports Headset HD Call Earbuds",
  },
  {
    id: 10,
    category: "Laptop",
    name: "Notebook Ultra Mini Portable",
    img1: "https://www.tradeinn.com/f/13950/139500355/toshiba-a40-k-14x-14-i5-1240p-8gb-256gb-ssd-laptop.jpg",
    img2: "https://s.alicdn.com/@sc04/kf/H90834468a7414e69a3e591412ad0918ba.jpg_960x960.jpg",
    img3: "https://s.alicdn.com/@sc04/kf/Hb3160cfef249437e9cf045254aaf4c86k.jpg_960x960.jpg",
    price: 1700,
    description:
      "2020 Laptops Customized 14 inch Notebook Ultra Mini Portable PC Camera Status Gpu Ips Ddr Ram Computer Gaming i3 i5 i7 Hardware",
  },
  {
    id: 11,
    category: "Laptop",
    name: "Acer Nitro 5 Intel",
    img1: "https://images.acer.com/is/image/acer/Nitro5_AN515-57_Backliton_RGB-Black_01a-1?$Product-Cards-XL$",
    img2: "https://images.acer.com/is/image/acer/Nitro_5_AGW_KSP03?$responsive$",
    img3: "https://images.acer.com/is/image/acer/nitro5-an515-58-wallpaper-rgbkb-light-on-black-bby-01-1?$Product-Cards-XL$",
    price: 2300,
    description:
      "Reign over the game world with the combined power of a 12th Gen Intel® Core™ i7 processor1 with its new performance hybrid architecture and NVIDIA® GeForce RTX™ 30 Series GPUs.",
  },
  {
    id: 12,
    category: "Laptop",
    name: "MacBook Air",
    img1: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1664472289661",
    img2: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-gold-select-201810?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1664472289059",
    img3: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-silver-select-201810?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1664472289056",
    price: 999,
    description:
      "MacBook Air with M1 is an incredibly portable laptop — it’s nimble and quick, with a silent, fanless design and a beautiful Retina display. Thanks to its slim profile and all‑day battery life, this Air moves at the speed of lightness.",
  },
  {
    id: 13,
    category: "Mini Speakers",
    name: "Hot Selling Round Sound ",
    img1: "https://s.alicdn.com/@sc04/kf/H9647cb7831f14b238d53f89bcdbd38dch.jpg_960x960.jpg",
    img2: "https://s.alicdn.com/@sc04/kf/H1b70bef309cf4a48886b7d388697a2aba.jpg_960x960.jpg",
    img3: "https://s.alicdn.com/@sc04/kf/Ha3a4370cb0194365981ae493f9dd7bcfk.jpg_960x960.jpg",
    price: 40,
    description:
      "Hot Selling Round Sound Box With Led Light Bt Party Type C Charging Bluetooth Speaker",
  },
  {
    id: 14,
    category: "Mini Speakers",
    name: "Headphone Speaker 2 in 1",
    img1: "https://s.alicdn.com/@sc04/kf/Hbfa22cc9007a48a7950c9b9105cf2e48e.jpg_960x960.jpg",
    img2: "https://s.alicdn.com/@sc04/kf/He20bb25c17494ad382dd5730837e6bc0I.jpg_960x960.jpg",
    img3: "https://s.alicdn.com/@sc04/kf/He20bb25c17494ad382dd5730837e6bc0I.jpg_960x960.jpg",
    price: 80,
    description:
      "Hands Free B20 Tws Wireless Mini Portable Headset Outdoor Headphone Speaker 2 in 1 Earphone fone de ouvido audifonos-bluetooth",
  },
  {
    id: 15,
    category: "Mini Speakers",
    name: "3D Stereo Music",
    img1: "https://images-na.ssl-images-amazon.com/images/I/41wx5MageKL.jpg",
    img2: "https://s.alicdn.com/@sc04/kf/H1272b3ff8cbe47c2bb107b14769de6ceV.jpg_960x960.jpg",
    img3: "https://ae01.alicdn.com/kf/H9fe63972e9d1426cbedef5acb573ed286/Portable-Bluetooth-Speaker-with-Subwoofer-Wireless-Hands-Free-Loudspeaker-Stereo-Sound-Music-Player-Outdoor-Mini-Speakers.jpg",
    price: 45,
    description:
      "Unique Design Portable Wireless Bluetooth Speaker Sound System 3D Stereo Music Surround TF Card",
  },
  {
    id: 16,
    category: "Tablets",
    name: "Samsung Galaxy Tab A7",
    img1: "https://th.bing.com/th?id=OP.tep5SUrXeuoPkw474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
    img2: "https://th.bing.com/th?id=OP.tep5SUrXeuoPkw474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
    img3: "https://th.bing.com/th/id/OIP.Ckok13lSutuFNY9i_VUePQHaD_?pid=ImgDet&rs=1",
    price: 300,
    description:
      "Your new window to the worldWith a slim design, a vibrant entertainment system, and outstanding performance, the new Galaxy Tab A7 is a stylish new companion for your life. Dive head-first into the things you love, and easily share your favorite moments. Learn, explore, connect, and be inspired. Slim. Stylish. Sophisticated.Galaxy Tab A7 is built to impress-a true head-turner that offers great immersive experiences. With beautiful symmetry and a thickness of just 7mm, it features a sophisticated metal design in three colors, Dark Grey, Silver, and Gold, and asymmetric bezel all the way around. ",
  },
  {
    id: 17,
    category: "Tablets",
    name: "Teclast P30",
    img1: "https://th.bing.com/th?id=OP.fR50NZliKtjLWg474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
    img2: "https://th.bing.com/th?id=OP.8A%2bBw%2ffUsQGxUQ474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
    img3: "https://th.bing.com/th?id=OP.bVDf6nd16WZ82w474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
    price: 489,
    description:
      "Android 11 Tablet, Gesture NavigationLatest Google Android 10 system with artificial intelligence (AI), global touch gesture and dark mode, smooth and fast acceleration, with 6000 mAh battery very well charged, with more than 7 hours of autonomy video, nice pictures.",
  },
  {
    id: 18,
    category: "Tablets",
    name: "Surface Pro 8",
    img1: "https://th.bing.com/th?id=OP.aEOYNUA4sKC9fA474C474&w=490&h=475&o=5&dpr=1.3&pid=21.1",
    img2: "https://cdn.mos.cms.futurecdn.net/4DnpJmgNbidGYfbujtaTbb-1200-80.jpg",
    img3: "https://helios-i.mashable.com/imagery/reviews/07qdT1T5lmAZO9XnzpilenG/hero-image.fill.size_1248x702.v1634324111.jpg",
    price: 986,
    description:
      "Unlock more possibilities than ever with the Pro designed for a Pro like you. The first consumer laptop-to-tablet PC based on the Intel Evo platform and designed to light up the best of Windows 11, Surface Pro 8 combines the power of a laptop with the flexibility of a tablet, and every angle in between, with the iconic Kickstand and detachable Keyboard* with built-in Slim Pen storage and charging.^ Do great things with a larger 13 touchscreen, faster connections with Thunderbolt 4 ports, and extra speed when you need it.",
  },
];

let category = [
  {
    id: 1,
    categoryName: "iPhone",
    categoryImg:
      "https://cdn.shopify.com/s/files/1/1152/4590/files/p7_300x300.jpg?v=1671083405",
  },
  {
    id: 4,
    categoryName: "Mini Speakers",
    categoryImg:
      "https://cdn.shopify.com/s/files/1/1152/4590/files/11_300x300.jpg?v=1671083774",
  },
  {
    id: 6,
    categoryName: "Tablets",
    categoryImg:
      "https://cdn.shopify.com/s/files/1/1152/4590/files/9_300x300.jpg?v=1671083337",
  },
  {
    id: 3,
    categoryName: "Headphones",
    categoryImg:
      "https://cdn.shopify.com/s/files/1/1152/4590/files/12_300x300.jpg?v=1671083908",
  },
  {
    id: 5,
    categoryName: "Laptop",
    categoryImg:
      "https://cdn.shopify.com/s/files/1/1152/4590/files/10_300x300.jpg?v=1671083655",
  },
  {
    id: 2,
    categoryName: "Accessories",
    categoryImg:
      "https://cdn.shopify.com/s/files/1/1152/4590/files/p4_300x300.jpg?v=1671083575",
  },
];
let Accessories = [
  {
    id: 4,
    category: "Accessories",
    name: "Powerbank Xiaomi 33W Pocket Edition Pro 10000 mAh Blue",
    img1: "https://kontakt.az/wp-content/uploads/2022/12/img_0_910_230_0_1-1_png.webp",
    img2: "https://kontakt.az/wp-content/uploads/2022/12/img_0_910_230_2_1_png.webp",
    img3: "https://kontakt.az/wp-content/uploads/2022/12/715e5b841d7e18456dfe26af0fd5adaa_png.webp",
    price: 90,
    description:
      "Solar usb chaiging portable powerbank wireless magnetic ultra thin Apple Android Type C power bank for 10000mah 20000mah",
  },
  {
    id: 5,
    category: "Accessories",
    name: "Arrival 3 Axis Gimbal Handheld",
    img1: "https://s.alicdn.com/@sc04/kf/Haa859cc6e5e44844b8f77fdd1c26d6eaN.jpg_960x960.jpg",
    img2: "https://s.alicdn.com/@sc04/kf/H9ec96274abcf4b8e942200ab4a8be0c8V.jpg_960x960.jpg",
    img3: "https://s.alicdn.com/@sc04/kf/Hb4384b73b3e146628c3a4737358019c0I.jpg_960x960.jpg",
    price: 29,
    description:
      "Mini TWS Wireless Stereo Boat Earphone Headphones Gaming Headset Auricolare Ear Buds Custom Original Music Bluetooth Earphone",
  },
  {
    id: 6,
    category: "Accessories",
    name: "Dual Charger Holder Cooling Fan Stand For PS5",
    img1: "https://s.alicdn.com/@sc04/kf/H58e6820a0bad41188aa433f69158b12cx.jpg_960x960.jpg",
    img2: "https://s.alicdn.com/@sc04/kf/Haa8e8355fd9843838107ba7f9f406d06P.jpg_960x960.jpg",
    img3: "https://s.alicdn.com/@sc04/kf/H1a265c1cc95d4310ba10c97f5063f577x.jpg_960x960.jpg",
    price: 39,
    description:
      "Mini TWS Wireless Stereo Boat Earphone Headphones Gaming Headset Auricolare Ear Buds Custom Original Music Bluetooth Earphone",
  },
];
let laptop = [
  {
    id: 10,
    category: "Laptop",
    name: "Notebook Ultra Mini Portable",
    img1: "https://www.tradeinn.com/f/13950/139500355/toshiba-a40-k-14x-14-i5-1240p-8gb-256gb-ssd-laptop.jpg",
    img2: "https://s.alicdn.com/@sc04/kf/H90834468a7414e69a3e591412ad0918ba.jpg_960x960.jpg",
    img3: "https://s.alicdn.com/@sc04/kf/Hb3160cfef249437e9cf045254aaf4c86k.jpg_960x960.jpg",
    price: 1700,
    description:
      "2020 Laptops Customized 14 inch Notebook Ultra Mini Portable PC Camera Status Gpu Ips Ddr Ram Computer Gaming i3 i5 i7 Hardware",
  },
  {
    id: 11,
    category: "Laptop",
    name: "Acer Nitro 5 Intel",
    img1: "https://images.acer.com/is/image/acer/Nitro5_AN515-57_Backliton_RGB-Black_01a-1?$Product-Cards-XL$",
    img2: "https://images.acer.com/is/image/acer/Nitro_5_AGW_KSP03?$responsive$",
    img3: "https://images.acer.com/is/image/acer/nitro5-an515-58-wallpaper-rgbkb-light-on-black-bby-01-1?$Product-Cards-XL$",
    price: 2300,
    description:
      "Reign over the game world with the combined power of a 12th Gen Intel® Core™ i7 processor1 with its new performance hybrid architecture and NVIDIA® GeForce RTX™ 30 Series GPUs.",
  },
  {
    id: 12,
    category: "Laptop",
    name: "MacBook Air",
    img1: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1664472289661",
    img2: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-gold-select-201810?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1664472289059",
    img3: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-silver-select-201810?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1664472289056",
    price: 999,
    description:
      "MacBook Air with M1 is an incredibly portable laptop — it’s nimble and quick, with a silent, fanless design and a beautiful Retina display. Thanks to its slim profile and all‑day battery life, this Air moves at the speed of lightness.",
  },
];
let iphone = [
  {
    id: 1,
    category: "iPhone",
    name: "iPhone 13 Pro",
    img1: "https://m.media-amazon.com/images/I/317JiGToz-L.jpg",
    img2: "https://brzgroup.com.tr/wp-content/uploads/2021/11/iphone-13-pro-gold-select.png",
    img3: "https://iphoneproservis.com/wp-content/uploads/2018/05/iphone-13-pro-max-blue-select.png",
    price: 2400,
    description:
      "A dramatically more powerful camera system. A display so responsive, every interaction feels new again. The world’s fastest smartphone chip. Exceptional durability. And a huge leap in battery life. Let’s Pro.",
  },
  {
    id: 2,
    category: "iPhone",
    name: "iPhone 14 Pro",
    img1: "https://w-t.ams3.cdn.digitaloceanspaces.com/images/apple-14-pro-deep-purple-1-min.jpg",
    img2: "https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mq9r3tua-apple-iphone-14-pro-max-128gb-altin-mq9r3tua-637987435644926103.jpg",
    img3: "https://cdn.vox-cdn.com/thumbor/cPeVH-m_b9pScRXzpCBW-nAHSfw=/0x0:2032x1355/1400x1400/filters:focal(1016x678:1017x679)/cdn.vox-cdn.com/uploads/chorus_asset/file/22863258/akrales_210917_4760_0175.jpg",
    price: 3500,
    description:
      "A magical new way to interact with iPhone. Groundbreaking safety features designed to save lives. An innovative 48MP camera for mind-blowing detail. All powered by the ultimate smartphone chip.",
  },
  {
    id: 3,
    category: "iPhone",
    name: "iPhone 12",
    img1: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-finish-unselect-gallery-1-202207_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1662129048006",
    img2: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-finish-unselect-gallery-2-202207?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1662129021500",
    img3: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-finish-unselect-gallery-3-202207_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1662128988137",
    price: 2300,
    description:
      "As part of our efforts to reach carbon neutrality by 2030, iPhone 12 does not include a power adapter or EarPods. Included in the box is a USB‑C to Lightning Cable that supports fast charging and is compatible with USB‑C power adapters and computer ports. We encourage you to re‑use your current USB‑A to Lightning cables, power adapters and headphones, which are compatible with this iPhone model. But if you need any new Apple power adapters or headphones, they are available for purchase.",
  },
];
app.get("/product", (req, res) => {
  res.send(product);
});
app.get("/category", (req, res) => {
  res.send(category);
});
app.get("/accessories", (req, res) => {
  res.send(Accessories);
});
app.get("/laptop", (req, res) => {
  res.send(laptop);
});
app.get("/iphone", (req, res) => {
  res.send(iphone);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
app.get("/product/:id", (req, res) => {
  const id = req.params.id;
  const seletProduct = product.filter((product) => product.id == id);
  if (seletProduct) {
    res.send(seletProduct);
    res.status(200);
  } else {
    console.log("not found");
    res.status(404).json({ message: "not found" });
  }
});
