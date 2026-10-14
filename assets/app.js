const inventoryModels = [
  {
    id: "c6",
    title: "C6",
    manufacturer: "Marca a confirmar",
    phone: "C6 — fabricante e versão a confirmar",
    quantity: 6,
    image: "stock-c6-studio.png",
    colors: [
      { name: "Grafite", hex: "#3d3f41" },
      { name: "Cinza claro", hex: "#a9aaad" },
      { name: "Rosa pink", hex: "#f62d68" },
      { name: "Cinza", hex: "#77797c" },
      { name: "Marrom escuro", hex: "#302724" },
      { name: "Verde oliva", hex: "#555c4e" },
    ],
  },
  {
    id: "g6",
    title: "Moto G6",
    manufacturer: "Motorola",
    phone: "Motorola Moto G6",
    quantity: 1,
    image: "stock-moto-g6-plus-studio.png",
    colors: [{ name: "Transparente fumê", hex: "#899097" }],
  },
  {
    id: "g6-play",
    title: "Moto G6 Play",
    manufacturer: "Motorola",
    phone: "Motorola Moto G6 Play",
    quantity: 4,
    image: "stock-moto-g6-play-studio.png",
    colors: [
      { name: "Preto", hex: "#222326", quantity: 3 },
      { name: "Marrom taupe", hex: "#9b8879", quantity: 1 },
    ],
  },
  {
    id: "iphone-xs-max",
    title: "iPhone XS Max",
    manufacturer: "Apple",
    phone: "Apple iPhone XS Max",
    quantity: 1,
    image: "stock-iphone-xs-max-studio.png",
    colors: [{ name: "Transparente", hex: "#dce7eb" }],
  },
  {
    id: "a51",
    title: "Galaxy A51",
    manufacturer: "Samsung",
    phone: "Samsung Galaxy A51",
    quantity: 5,
    image: "stock-samsung-a51-studio.png",
    colors: [
      { name: "Cinza claro", hex: "#a5a6a4" },
      { name: "Azul acinzentado", hex: "#5b6876" },
      { name: "Cinza médio", hex: "#737477" },
      { name: "Rosé", hex: "#a57878" },
      { name: "Grafite", hex: "#414244" },
    ],
  },
  {
    id: "redmi-note-10-pro-4g",
    title: "Redmi Note 10 Pro 4G",
    manufacturer: "Xiaomi",
    phone: "Xiaomi Redmi Note 10 Pro 4G",
    quantity: 3,
    image: "stock-redmi-note-10-pro-4g-studio.png",
    colors: [{ name: "Preto", hex: "#222326" }],
  },
  {
    id: "redmi-k40s",
    title: "Redmi K40S",
    manufacturer: "Xiaomi",
    phone: "Xiaomi Redmi K40S",
    quantity: 1,
    image: "stock-redmi-k40s-studio.png",
    colors: [{ name: "Preto", hex: "#252629" }],
  },
  {
    id: "mi-11-lite",
    title: "Mi 11 Lite",
    manufacturer: "Xiaomi",
    phone: "Xiaomi Mi 11 Lite",
    quantity: 6,
    image: "stock-xiaomi-mi-11-lite-studio.png",
    colors: [
      { name: "Prata", hex: "#b9bab8" },
      { name: "Cinza claro", hex: "#aaa9a5" },
      { name: "Azul acinzentado", hex: "#606b7c" },
      { name: "Grafite", hex: "#48494b" },
      { name: "Marrom", hex: "#665044" },
      { name: "Terracota", hex: "#a95c48" },
    ],
  },
  {
    id: "k61",
    title: "LG K61",
    manufacturer: "LG",
    phone: "LG K61",
    quantity: 2,
    image: "stock-lg-k61-studio.png",
    colors: [
      { name: "Azul escuro", hex: "#142443" },
      { name: "Preto", hex: "#1e1f21" },
    ],
  },
  {
    id: "j2-core",
    title: "Galaxy J2 Core",
    manufacturer: "Samsung",
    phone: "Samsung Galaxy J2 Core",
    quantity: 4,
    image: "stock-samsung-j2-core-studio.png",
    colors: [
      { name: "Marrom rosé", hex: "#9f7066" },
      { name: "Rosa antigo", hex: "#c48d91" },
      { name: "Cinza grafite", hex: "#56575a" },
      { name: "Grafite", hex: "#343538" },
    ],
  },
  {
    id: "note-10-5g",
    title: "Galaxy Note 10 5G",
    manufacturer: "Samsung",
    phone: "Samsung Galaxy Note 10 5G",
    quantity: 4,
    image: "stock-samsung-note-10-5g-studio.png",
    colors: [
      { name: "Rosé claro", hex: "#c3a18a" },
      { name: "Verde oliva", hex: "#747a68" },
      { name: "Cinza taupe", hex: "#88807a" },
      { name: "Vermelho", hex: "#f12036" },
    ],
  },
  {
    id: "g5-plus",
    title: "Moto G5 Plus",
    manufacturer: "Motorola",
    phone: "Motorola Moto G5 Plus",
    quantity: 5,
    image: "stock-moto-g5-plus-studio.png",
    colors: [
      { name: "Laranja", hex: "#ff4f13" },
      { name: "Grafite", hex: "#444447" },
      { name: "Rosa pink", hex: "#f11458" },
      { name: "Verde oliva", hex: "#696e5c" },
      { name: "Cinza claro", hex: "#aaa9a7" },
    ],
  },
  {
    id: "g60",
    title: "Moto G60",
    manufacturer: "Motorola",
    phone: "Motorola Moto G60",
    quantity: 5,
    image: "stock-moto-g60-studio.png",
    colors: [
      { name: "Areia rosé", hex: "#ad9787" },
      { name: "Azul", hex: "#5c687b" },
      { name: "Grafite", hex: "#45474a" },
      { name: "Cinza claro", hex: "#aaa9a7" },
      { name: "Terracota", hex: "#a9533c" },
    ],
  },
  {
    id: "g2",
    title: "Moto G2",
    manufacturer: "Motorola",
    phone: "Motorola Moto G2",
    quantity: 5,
    image: "stock-moto-g2-five-studio.png",
    colors: [{ name: "Grafite", hex: "#414144" }],
  },
  {
    id: "a01",
    title: "Galaxy A01",
    manufacturer: "Samsung",
    phone: "Samsung Galaxy A01",
    quantity: 1,
    image: "stock-samsung-a01-studio.png",
    colors: [{ name: "Preto", hex: "#292b2f" }],
  },
  {
    id: "a01-core",
    title: "Galaxy A01 Core",
    manufacturer: "Samsung",
    phone: "Samsung Galaxy A01 Core",
    quantity: 10,
    image: "stock-samsung-a01-core-studio.png",
    colors: [
      { name: "Prata", hex: "#aaa9a6", quantity: 2 },
      { name: "Grafite", hex: "#55565a", quantity: 2 },
      { name: "Rosé", hex: "#a77c76", quantity: 2 },
      { name: "Vermelho", hex: "#ef293e", quantity: 2 },
      { name: "Preto", hex: "#292a2d", quantity: 2 },
    ],
  },
  {
    id: "j5-2016",
    title: "Galaxy J5 2016",
    manufacturer: "Samsung",
    phone: "Samsung Galaxy J5 (2016)",
    quantity: 1,
    image: "stock-samsung-j5-2016-studio.png",
    colors: [{ name: "Grafite", hex: "#383a3d" }],
  },
  {
    id: "s21-fe",
    title: "Galaxy S21 FE",
    manufacturer: "Samsung",
    phone: "Samsung Galaxy S21 FE",
    quantity: 2,
    image: "stock-samsung-s21-fe-studio.png",
    colors: [{ name: "Azul escuro", hex: "#14213b" }],
  },
  {
    id: "j7",
    title: "Galaxy J7",
    manufacturer: "Samsung",
    phone: "Samsung Galaxy J7",
    quantity: 1,
    image: "stock-samsung-j7-studio.png",
    colors: [{ name: "Grafite", hex: "#494542" }],
  },
  {
    id: "a20s",
    title: "Galaxy A20s",
    manufacturer: "Samsung",
    phone: "Samsung Galaxy A20s",
    quantity: 5,
    image: "stock-samsung-a20s-studio.png",
    colors: [
      { name: "Preto", hex: "#222326" },
      { name: "Rosé", hex: "#b97768" },
      { name: "Rosa antigo", hex: "#b87778" },
      { name: "Marrom escuro", hex: "#382f2c" },
      { name: "Grafite", hex: "#292a2c" },
    ],
  },
  {
    id: "a30s",
    title: "Galaxy A30s",
    manufacturer: "Samsung",
    phone: "Samsung Galaxy A30s",
    quantity: 6,
    image: "stock-samsung-a30s-studio.png",
    colors: [
      { name: "Rosé", hex: "#ae766b" },
      { name: "Preto", hex: "#252629" },
      { name: "Grafite", hex: "#68696a" },
      { name: "Cinza claro", hex: "#b5b4b0" },
      { name: "Cinza azulado", hex: "#444a54" },
      { name: "Preto fosco", hex: "#202123" },
    ],
  },
  {
    id: "a71",
    title: "Galaxy A71",
    manufacturer: "Samsung",
    phone: "Samsung Galaxy A71",
    quantity: 1,
    image: "stock-samsung-a71-studio.png",
    colors: [{ name: "Grafite", hex: "#343538" }],
  },
  {
    id: "g7-play",
    title: "Moto G7 Play",
    manufacturer: "Motorola",
    phone: "Motorola Moto G7 Play",
    quantity: 3,
    image: "stock-moto-g7-play-studio.png",
    colors: [
      { name: "Verde oliva", hex: "#59604f" },
      { name: "Cinza taupe", hex: "#888078" },
      { name: "Marrom escuro", hex: "#4f392e" },
    ],
  },
  {
    id: "e6s",
    title: "Moto E6s",
    manufacturer: "Motorola",
    phone: "Motorola Moto E6s",
    quantity: 5,
    image: "stock-moto-e6s-studio.png",
    colors: [
      { name: "Grafite", hex: "#343438" },
      { name: "Preto / marrom", hex: "#514842" },
      { name: "Cinza claro", hex: "#aaa9a6" },
      { name: "Azul acinzentado", hex: "#566071" },
      { name: "Vinho", hex: "#67443f" },
    ],
  },
  {
    id: "redmi-note-9s",
    title: "Redmi Note 9S",
    manufacturer: "Xiaomi",
    phone: "Xiaomi Redmi Note 9S",
    quantity: 6,
    image: "stock-redmi-note-9s-studio.png",
    colors: [
      { name: "Grafite", hex: "#474442" },
      { name: "Areia", hex: "#b5a18b" },
      { name: "Cinza claro", hex: "#aaa9a2" },
      { name: "Terracota", hex: "#a55b4e" },
      { name: "Verde oliva", hex: "#637365" },
      { name: "Vermelho", hex: "#d54239" },
    ],
  },
];

const featuredModelIds = ["a01-core", "mi-11-lite", "a30s", "g7-play", "g6-play", "a51", "redmi-note-9s", "k61", "iphone-xs-max"];
const priceByModel = {
  c6: 8,
  g6: 8,
  "g6-play": 8,
  "iphone-xs-max": 8,
  a51: 10,
  "redmi-note-10-pro-4g": 10,
  "redmi-k40s": 13,
  "mi-11-lite": 10,
  k61: 10,
  "j2-core": 8,
  "note-10-5g": 10,
  "g5-plus": 7,
  g60: 10,
  g2: 7,
  a01: 8,
  "a01-core": 8,
  "j5-2016": 7,
  "s21-fe": 13,
  j7: 7,
  a20s: 8,
  a30s: 8,
  a71: 10,
  "g7-play": 8,
  e6s: 8,
  "redmi-note-9s": 10,
};
const productHighlights = new Set(featuredModelIds.slice(0, 4));
const products = inventoryModels.map((model) => {
  return {
    id: model.id,
    stockModel: model,
    title: `Capinha para ${model.title}`,
    model: model.manufacturer,
    category: model.manufacturer,
    image: model.image,
    price: priceByModel[model.id],
    badge: productHighlights.has(model.id) ? `${model.colors.length} ${model.colors.length === 1 ? "cor" : "cores"}` : "",
    featured: productHighlights.has(model.id),
  };
});

const deviceSpecifications = {
  c6: { note: "A referência enviada mostra apenas “C6”. Fabricante e versão não estão confirmados; confira o modelo do aparelho antes de comprar.", rows: [] },
  g6: { note: "Ficha do Moto G6 padrão, conforme identificação informada para esta capinha.", rows: [["Tela", "5,7″ IPS LCD, Full HD+ (2160 × 1080)"], ["Processador", "Qualcomm Snapdragon 450, octa-core"], ["Câmeras", "Traseiras 12 MP + 5 MP · frontal 8 MP"], ["Bateria", "3.000 mAh"]] },
  "g6-play": { note: "Especificações podem variar conforme a edição regional do aparelho.", rows: [["Tela", "5,7″ IPS LCD, HD+ (1440 × 720)"], ["Processador", "Qualcomm Snapdragon 430, octa-core"], ["Câmeras", "Traseira 13 MP · frontal 8 MP"], ["Bateria", "4.000 mAh"]] },
  "iphone-xs-max": { source: "https://support.apple.com/en-my/111880", sourceLabel: "Apple Support", note: "Capacidades de armazenamento variam por versão.", rows: [["Tela", "6,5″ OLED Super Retina HD (2688 × 1242)"], ["Processador", "Apple A12 Bionic"], ["Câmeras", "Duas traseiras de 12 MP · frontal TrueDepth de 7 MP"], ["Bateria", "Até 25 h de conversação · carregamento sem fio Qi"]] },
  a51: { source: "https://news.samsung.com/br/display-infinito-camera-e-bateria-de-longa-duracao-samsung-apresenta-galaxy-a71-e-a51-no-brasil", sourceLabel: "Samsung Newsroom", note: "Ficha da edição brasileira de referência.", rows: [["Tela", "6,5″ Super AMOLED, Full HD+"], ["Processador", "Exynos 9611, octa-core"], ["Câmeras", "Quatro traseiras: 48 + 12 + 5 + 5 MP · frontal 32 MP"], ["Bateria", "4.000 mAh · carregamento de 15 W"]] },
  "redmi-note-10-pro-4g": { source: "https://www.mi.com/global/product/redmi-note-10-pro/specs/", sourceLabel: "Xiaomi", note: "Ficha do Redmi Note 10 Pro 4G.", rows: [["Tela", "6,67″ AMOLED, Full HD+, 120 Hz"], ["Processador", "Qualcomm Snapdragon 732G"], ["Câmeras", "Quatro traseiras: 108 + 8 + 5 + 2 MP · frontal 16 MP"], ["Bateria", "5.020 mAh · carregamento de 33 W"]] },
  "redmi-k40s": { source: "https://www.mi.com/redmik40s/specs", sourceLabel: "Xiaomi", note: "Modelo lançado para o mercado chinês; bandas e software podem diferir por região.", rows: [["Tela", "6,67″ AMOLED, Full HD+, 120 Hz"], ["Processador", "Qualcomm Snapdragon 870"], ["Câmeras", "Traseiras 48 + 8 + 2 MP · frontal 20 MP"], ["Bateria", "4.500 mAh · carregamento de 67 W"]] },
  "mi-11-lite": { source: "https://www.mi.com/global/product/mi-11-lite/specs/", sourceLabel: "Xiaomi", note: "Mi 11 Lite 4G e 5G têm processadores diferentes; confirme a versão do aparelho.", rows: [["Tela", "6,55″ AMOLED, Full HD+, até 90 Hz"], ["Processador", "Snapdragon 732G (4G) ou 780G (5G)"], ["Câmeras", "Traseiras 64 + 8 + 5 MP · frontal 16 MP"], ["Bateria", "4.250 mAh · carregamento de 33 W"]] },
  k61: { note: "Especificações da versão LG K61 de referência; confira a versão regional do aparelho.", rows: [["Tela", "6,53″ IPS LCD, Full HD+"], ["Processador", "MediaTek Helio P35, octa-core"], ["Câmeras", "Quatro traseiras: 48 + 8 + 2 + 5 MP · frontal 16 MP"], ["Bateria", "4.000 mAh"]] },
  "j2-core": { source: "https://news.samsung.com/br/samsung-apresenta-galaxy-j4-core-e-j2-core-no-brasil", sourceLabel: "Samsung Newsroom", note: "Ficha do Galaxy J2 Core de referência.", rows: [["Tela", "5″ TFT, qHD (960 × 540)"], ["Processador", "Samsung Exynos 7570, quad-core"], ["Câmeras", "Traseira 8 MP · frontal 5 MP"], ["Bateria", "2.600 mAh"]] },
  "note-10-5g": { source: "https://news.samsung.com/br/samsung-apresenta-galaxy-note10-e-note10-no-brasil", sourceLabel: "Samsung Newsroom", note: "O conjunto de chip e bandas 5G pode variar conforme o mercado e a versão comercializada.", rows: [["Tela", "6,3″ Dynamic AMOLED, Full HD+"], ["Processador", "Exynos 9825 ou Snapdragon 855, conforme a versão"], ["Câmeras", "Três traseiras: 12 + 16 + 12 MP · frontal 10 MP"], ["Bateria", "3.500 mAh"]] },
  "g5-plus": { source: "https://news.lenovo.com/pressroom/press-releases/lenovo-sets-stage-for-new-mobility-with-smart-connected-devices-services/", sourceLabel: "Lenovo StoryHub", note: "Ficha do Moto G5 Plus de referência.", rows: [["Tela", "5,2″ IPS LCD, Full HD"], ["Processador", "Qualcomm Snapdragon 625, octa-core"], ["Câmeras", "Traseira 12 MP · frontal 5 MP"], ["Bateria", "3.000 mAh"]] },
  g60: { note: "Especificações da edição Moto G60 de referência; podem existir diferenças regionais.", rows: [["Tela", "6,8″ IPS LCD, Full HD+, 120 Hz"], ["Processador", "Qualcomm Snapdragon 732G"], ["Câmeras", "Traseiras 108 + 8 + 2 MP · frontal 32 MP"], ["Bateria", "6.000 mAh"]] },
  g2: { note: "Referência: Moto G de 2ª geração (2014). Confira a geração exata antes de comprar.", rows: [["Tela", "5″ IPS LCD, HD (1280 × 720)"], ["Processador", "Qualcomm Snapdragon 400, quad-core"], ["Câmeras", "Traseira 8 MP · frontal 2 MP"], ["Bateria", "2.070 mAh"]] },
  a01: { source: "https://news.samsung.com/br/samsung-anuncia-chegada-do-galaxy-a01-ao-brasil", sourceLabel: "Samsung Newsroom", note: "Ficha da edição brasileira de referência.", rows: [["Tela", "5,7″ PLS TFT, HD+"], ["Processador", "Qualcomm Snapdragon 439, octa-core"], ["Câmeras", "Traseiras 13 + 2 MP · frontal 5 MP"], ["Bateria", "3.000 mAh"]] },
  "a01-core": { source: "https://news.samsung.com/br/samsung-apresenta-galaxy-a01-core-ao-brasil", sourceLabel: "Samsung Newsroom", note: "Ficha da edição brasileira de referência.", rows: [["Tela", "5,3″ TFT, HD+ (1480 × 720)"], ["Processador", "Quad-core 1,5 GHz"], ["Câmeras", "Traseira 8 MP · frontal 5 MP"], ["Bateria", "3.000 mAh"]] },
  "j5-2016": { source: "https://news.samsung.com/br/samsung-apresenta-galaxy-j5-e-galaxy-j7-metal-no-brasil", sourceLabel: "Samsung Newsroom", note: "Ficha de referência do Galaxy J5 Metal (2016). Edições regionais podem variar.", rows: [["Tela", "5,2″ Super AMOLED, HD"], ["Processador", "Quad-core 1,2 GHz"], ["Câmeras", "Traseira 13 MP · frontal 5 MP"], ["Bateria", "3.100 mAh"]] },
  "s21-fe": { source: "https://news.samsung.com/br/samsung-apresenta-galaxy-s21-fe-5g-brasil", sourceLabel: "Samsung Newsroom", note: "Ficha da edição brasileira de referência.", rows: [["Tela", "6,4″ Dynamic AMOLED 2X, Full HD+, 120 Hz"], ["Processador", "Octa-core de 5 nm"], ["Câmeras", "Traseiras 12 + 12 + 8 MP · frontal 32 MP"], ["Bateria", "4.500 mAh"]] },
  j7: { note: "O estoque não informa o ano nem a versão do Galaxy J7. Tela, câmeras e bateria mudam entre gerações; confirme a versão para validar a compatibilidade.", rows: [] },
  a20s: { source: "https://news.samsung.com/br/samsung-anuncia-lancamento-dos-novos-galaxy-a10s-e-a20s-no-brasil", sourceLabel: "Samsung Newsroom", note: "Ficha do Galaxy A20s de referência.", rows: [["Tela", "6,5″ PLS TFT, HD+"], ["Processador", "Qualcomm Snapdragon 450, octa-core"], ["Câmeras", "Traseiras 13 + 8 + 5 MP · frontal 8 MP"], ["Bateria", "4.000 mAh"]] },
  a30s: { note: "Especificações do Galaxy A30s padrão; armazenamento e memória podem variar por edição.", rows: [["Tela", "6,4″ Super AMOLED, HD+"], ["Processador", "Samsung Exynos 7904, octa-core"], ["Câmeras", "Traseiras 25 + 8 + 5 MP · frontal 16 MP"], ["Bateria", "4.000 mAh · carregamento de 15 W"]] },
  a71: { source: "https://news.samsung.com/br/display-infinito-camera-e-bateria-de-longa-duracao-samsung-apresenta-galaxy-a71-e-a51-no-brasil", sourceLabel: "Samsung Newsroom", note: "Ficha da edição brasileira de referência.", rows: [["Tela", "6,7″ Super AMOLED Plus, Full HD+"], ["Processador", "Qualcomm Snapdragon 730, octa-core"], ["Câmeras", "Quatro traseiras: 64 + 12 + 5 + 5 MP · frontal 32 MP"], ["Bateria", "4.500 mAh · carregamento de 25 W"]] },
  "g7-play": { source: "https://en-us.support.motorola.com/app/answers/detail/a_id/137729/~/specifications--moto-g7-play", sourceLabel: "Motorola Support", note: "Ficha de referência do Moto G7 Play.", rows: [["Tela", "5,7″ IPS LCD, HD+ (1512 × 720)"], ["Processador", "Qualcomm Snapdragon 632, octa-core"], ["Câmeras", "Traseira 13 MP · frontal 8 MP"], ["Bateria", "3.000 mAh"]] },
  e6s: { source: "https://en-us.support.motorola.com/app/answers/detail/a_id/143932/~/specifications--moto-e6s", sourceLabel: "Motorola Support", note: "Memória e armazenamento variam conforme a edição regional.", rows: [["Tela", "6,1″ IPS LCD, HD+ (1560 × 720)"], ["Processador", "MediaTek Helio P22, octa-core"], ["Câmeras", "Traseiras 13 + 2 MP · frontal 8 MP"], ["Bateria", "3.000 mAh"]] },
  "redmi-note-9s": { source: "https://www.mi.com/es/redmi-note-9s/specs", sourceLabel: "Xiaomi", note: "Ficha de referência do Redmi Note 9S; versões regionais podem variar.", rows: [["Tela", "6,67″ LCD, Full HD+"], ["Processador", "Qualcomm Snapdragon 720G, octa-core"], ["Câmeras", "Quatro traseiras: 48 + 8 + 5 + 2 MP · frontal 16 MP"], ["Bateria", "5.020 mAh · carregamento de 18 W"]] },
};

document.querySelector("#inventoryQuantity").textContent = String(inventoryModels.reduce((total, model) => total + model.quantity, 0));

const money = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
const whatsappNumber = "5511954889838";
const whatsappUrl = (message) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
document.querySelectorAll("[data-whatsapp-message]").forEach((link) => {
  link.href = whatsappUrl(link.dataset.whatsappMessage);
});
const revealObserver = "IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ? new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" })
  : null;
function observeReveal(root = document) {
  if (!revealObserver) return;
  const elements = [];
  if (root instanceof Element && root.matches("[data-reveal]")) elements.push(root);
  elements.push(...root.querySelectorAll("[data-reveal]"));
  elements.forEach((element) => {
    if (!element.classList.contains("is-revealed")) revealObserver.observe(element);
  });
}
const productGrid = document.querySelector("#productGrid");
const inventoryGrid = document.querySelector("#inventoryGrid");
const productTitle = document.querySelector("#productTitle");
const resultContext = document.querySelector("#resultContext");
const emptyState = document.querySelector("#emptyState");
const searchToggle = document.querySelector("#searchToggle");
const searchPanel = document.querySelector("#searchPanel");
const searchInput = document.querySelector("#searchInput");
const searchClear = document.querySelector("#searchClear");
const viewAllButton = document.querySelector("#viewAll");
const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");
const cartTrigger = document.querySelector("#cartTrigger");
const cartDrawer = document.querySelector("#cartDrawer");
const drawerBackdrop = document.querySelector("#drawerBackdrop");
const cartContent = document.querySelector("#cartContent");
const cartFooter = document.querySelector("#cartFooter");
const cartCount = document.querySelector("#cartCount");
const cartTitleCount = document.querySelector("#cartTitleCount");
const cartSubtotal = document.querySelector("#cartSubtotal");
const toast = document.querySelector("#toast");
const modelPage = document.querySelector("#modelPage");
const mainContent = document.querySelector("#conteudo");
const homeTitle = document.title;

let activeCategory = "all";
let showingAll = false;
let cart = loadCart();
let returnFocus = null;
let toastTimer;

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem("novacase-cart") || "[]");
    if (!Array.isArray(saved)) return [];
    return saved.filter((item) => products.some((product) => product.id === item.id) && Number.isInteger(item.quantity) && item.quantity > 0);
  } catch {
    return [];
  }
}

function saveCart() {
  try { localStorage.setItem("novacase-cart", JSON.stringify(cart)); } catch { /* storage can be disabled */ }
}

function normalized(value) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

function getVisibleProducts() {
  const query = normalized(searchInput.value);
  let source = showingAll || activeCategory !== "all" || query ? products : products.filter((product) => product.featured);
  return source.filter((product) => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesQuery = !query || normalized(`${product.title} ${product.model} ${product.category}`).includes(query);
    return matchesCategory && matchesQuery;
  });
}

function renderProducts() {
  const visible = getVisibleProducts();
  const query = searchInput.value.trim();
  productGrid.innerHTML = visible.map((product) => `
    <article class="product-card">
      <div class="product-visual">
        ${product.badge ? `<span class="product-badge ${product.badgeTone || ""}">${product.badge}</span>` : ""}
        <img src="assets/${product.image}" alt="${product.title}, compatível com ${product.stockModel.phone}" loading="lazy" />
        <button class="quick-add" type="button" data-add="${product.id}" aria-label="Adicionar ${product.title} ao carrinho" title="Adicionar ao carrinho">
          <svg><use href="#icon-plus"></use></svg>
        </button>
      </div>
      <div class="product-info">
        <span class="product-name">${product.title}</span>
        <span class="product-model">${product.model}</span>
        <div class="product-price-row">
          <span class="product-price-label">Por unidade</span>
          <strong class="product-price">${money.format(product.price)}</strong>
        </div>
        <div class="rating" aria-label="${product.stockModel.quantity} unidades em ${product.stockModel.colors.length} cores">
          <span>${product.stockModel.quantity} ${product.stockModel.quantity === 1 ? "unidade" : "unidades"}</span><span aria-hidden="true">·</span><span>${product.stockModel.colors.length} ${product.stockModel.colors.length === 1 ? "cor" : "cores"}</span>
        </div>
        <a class="product-buy-link" href="${whatsappUrl(`Oi! Estou interessado no item: ${product.title}, para ${product.stockModel.phone}. Preço unitário: ${money.format(product.price)}. Pode confirmar a disponibilidade e as cores?`)}" target="_blank" rel="noopener noreferrer"><svg><use href="#icon-whatsapp"></use></svg> Comprar pelo WhatsApp</a>
        <a class="product-detail-link" href="#modelo/${product.id}">Ver ficha do modelo <svg><use href="#icon-arrow"></use></svg></a>
      </div>
    </article>`).join("");

  const categoryNames = { all: "Capinhas em destaque", Motorola: "Capinhas Motorola", Samsung: "Capinhas Samsung", Xiaomi: "Capinhas Xiaomi", Apple: "Capinhas Apple", LG: "Capinhas LG" };
  productTitle.textContent = query ? "Resultados da busca" : categoryNames[activeCategory];
  resultContext.textContent = query || activeCategory !== "all" ? `${visible.length} ${visible.length === 1 ? "modelo encontrado" : "modelos encontrados"}` : "";
  emptyState.hidden = visible.length > 0;
  productGrid.hidden = visible.length === 0;
  viewAllButton.hidden = activeCategory !== "all" || Boolean(query);
  viewAllButton.querySelector(".link-label").textContent = showingAll ? "Ver menos" : "Ver todos";
  viewAllButton.setAttribute("aria-expanded", String(showingAll));
  viewAllButton.querySelector("svg use").setAttribute("href", showingAll ? "#icon-minus" : "#icon-arrow");
}

function renderInventoryPrices() {
  document.querySelectorAll(".model-card[data-model-id]").forEach((card) => {
    const product = products.find((entry) => entry.id === card.dataset.modelId);
    const photo = card.querySelector(".model-photo");
    if (!product || !photo || photo.querySelector(".stock-price-pill")) return;

    const priceLabel = money.format(product.price);
    const price = document.createElement("span");
    price.className = "stock-price-pill";
    price.textContent = priceLabel;
    price.setAttribute("aria-hidden", "true");
    photo.append(price);
    card.setAttribute("aria-label", `${card.getAttribute("aria-label") || product.stockModel.title}. Preço por unidade: ${priceLabel}.`);
  });
}

function renderInventory() {
  inventoryGrid.innerHTML = inventoryModels.map((model) => {
    const colors = model.colors.slice(0, 4).map((color) => `<i style="--swatch:${color.hex}" aria-hidden="true"></i>`).join("");
    const colorSummary = model.colors.length > 3
      ? `${model.colors.length} cores`
      : model.colors.map((color) => `${color.quantity ? `${color.quantity} ` : ""}${color.name}`).join(" · ");
    const quantityLabel = `${model.quantity} ${model.quantity === 1 ? "unidade" : "unidades"}`;
    return `<button class="model-card" type="button" data-model-id="${model.id}" aria-label="Ver detalhes de ${model.phone}, ${quantityLabel}">
      <span class="model-photo">
        <span class="stock-pill">${quantityLabel}</span>
        <img src="assets/${model.image}" alt="Capinhas para ${model.phone}, conforme fotos do estoque" loading="lazy" />
      </span>
      <span class="model-info">
        <span class="model-maker">${model.manufacturer}</span>
        <strong>${model.title}</strong>
        <span class="model-teaser">${colors}<span>${colorSummary}</span></span>
      </span>
      <svg class="model-arrow" aria-hidden="true"><use href="#icon-arrow"></use></svg>
    </button>`;
  }).join("");
}

renderInventory();
renderInventoryPrices();

function selectCategory(category) {
  activeCategory = category;
  document.querySelectorAll(".category-card").forEach((button) => {
    const selected = button.dataset.category === category;
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  renderProducts();
}

function renderCart() {
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce((total, item) => total + products.find((product) => product.id === item.id).price * item.quantity, 0);
  cartCount.textContent = String(totalQuantity);
  cartTrigger.setAttribute("aria-label", `Abrir carrinho, ${totalQuantity} ${totalQuantity === 1 ? "item" : "itens"}`);
  cartTitleCount.textContent = `(${totalQuantity})`;
  cartSubtotal.textContent = money.format(subtotal);
  cartFooter.hidden = cart.length === 0;

  if (!cart.length) {
    cartContent.innerHTML = `
      <div class="cart-empty">
        <svg><use href="#icon-cart"></use></svg>
        <strong>Seu carrinho está vazio</strong>
        <p>Explore a coleção e encontre uma capinha para acompanhar você.</p>
      </div>`;
    return;
  }

  cartContent.innerHTML = cart.map((item) => {
    const product = products.find((entry) => entry.id === item.id);
    return `<div class="cart-item" data-cart-item="${product.id}">
      <div class="cart-item-image"><img src="assets/${product.image}" alt="" /></div>
      <div>
        <span class="cart-item-name">${product.title}</span>
        <span class="cart-item-model">${product.model} · ${money.format(product.price)} por unidade</span>
        <div class="quantity-control" aria-label="Quantidade de ${product.title}">
          <button type="button" data-quantity="-1" data-id="${product.id}" aria-label="Diminuir quantidade"><svg><use href="#icon-minus"></use></svg></button>
          <span aria-live="polite">${item.quantity}</span>
          <button type="button" data-quantity="1" data-id="${product.id}" aria-label="Aumentar quantidade"><svg><use href="#icon-plus"></use></svg></button>
        </div>
      </div>
      <button class="remove-item" type="button" data-remove="${product.id}" aria-label="Remover ${product.title} do carrinho"><svg><use href="#icon-trash"></use></svg></button>
    </div>`;
  }).join("");
}

function addToCart(id) {
  const existing = cart.find((item) => item.id === id);
  if (existing) existing.quantity += 1;
  else cart.push({ id, quantity: 1 });
  saveCart();
  renderCart();
  const product = products.find((entry) => entry.id === id);
  showToast(`${product.title} adicionada ao carrinho.`);
}

function changeQuantity(id, amount) {
  const item = cart.find((entry) => entry.id === id);
  if (!item) return;
  item.quantity += amount;
  if (item.quantity <= 0) cart = cart.filter((entry) => entry.id !== id);
  saveCart();
  renderCart();
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function renderModelPage(id) {
  const model = inventoryModels.find((entry) => entry.id === id);
  if (!model) return false;

  const specs = deviceSpecifications[id] || { note: "As especificações deste aparelho ainda não foram confirmadas.", rows: [] };
  const product = products.find((entry) => entry.id === id);
  const quantityLabel = `${model.quantity} ${model.quantity === 1 ? "unidade" : "unidades"}`;
  const stockSentence = `${quantityLabel} ${model.quantity === 1 ? "disponível" : "disponíveis"} no estoque`;
  const colorList = model.colors.map((color) => `<li><i style="--swatch:${color.hex}" aria-hidden="true"></i><span>${color.name}${color.quantity ? ` · ${color.quantity} un.` : ""}</span></li>`).join("");
  const specsList = specs.rows.map(([label, value]) => `<div class="device-spec"><dt>${label}</dt><dd>${value}</dd></div>`).join("");
  const whatsAppMessage = `Oi! Estou interessado no item: ${product.title}, para ${model.phone}. Preço unitário: ${money.format(product.price)}. Há ${stockSentence}. Pode confirmar a disponibilidade e as cores?`;

  modelPage.innerHTML = `
    <div class="model-page-inner page-width" data-reveal>
      <a class="detail-back" href="#modelos"><svg><use href="#icon-arrow"></use></svg> Voltar aos modelos</a>
      <div class="model-detail-layout">
        <div class="detail-gallery">
          <span class="detail-stock-pill">${quantityLabel} no estoque</span>
          <img src="assets/${model.image}" alt="Capinha(s) compatível(is) com ${model.phone}, conforme fotos do estoque" />
          <span class="detail-image-caption">Foto das capinhas disponíveis · cores podem variar na tela</span>
        </div>
        <section class="detail-summary" aria-labelledby="detailTitle">
          <p class="eyebrow">${model.manufacturer} · ficha do modelo</p>
          <h1 id="detailTitle">${model.title}</h1>
          <p class="detail-compatible">Capinha para <strong>${model.phone}</strong></p>
          <div class="detail-stock-line"><span class="stock-dot"></span>${stockSentence}</div>
          <div class="detail-colors">
            <h2>Cores que aparecem no estoque</h2>
            <ul class="model-colors">${colorList}</ul>
          </div>
          <div class="detail-actions">
            <a class="button button-whatsapp" href="${whatsappUrl(`Oi! Estou interessado no item: ${product.title}, para ${model.phone}. Há ${stockSentence}. Pode me informar as cores disponíveis?`)}" target="_blank" rel="noopener noreferrer"><svg><use href="#icon-whatsapp"></use></svg> WhatsApp</a>
            <a class="button button-primary" href="${whatsappUrl(whatsAppMessage)}" target="_blank" rel="noopener noreferrer">Comprar pelo WhatsApp <svg><use href="#icon-arrow"></use></svg></a>
          </div>
          <p class="detail-price"><span>Preço por unidade</span><strong>${money.format(product.price)}</strong></p>
        </section>
      </div>
      <section class="device-specifications" aria-labelledby="deviceSpecsTitle">
        <div class="spec-heading"><div><p class="eyebrow">Sobre o aparelho</p><h2 id="deviceSpecsTitle">Principais especificações</h2></div><span class="spec-brand">${model.manufacturer}</span></div>
        ${specsList ? `<dl class="device-spec-grid">${specsList}</dl>` : `<p class="spec-empty">${specs.note}</p>`}
        ${specs.rows.length ? `<p class="spec-note">${specs.note}</p>` : ""}
        ${specs.source ? `<a class="spec-source" href="${specs.source}" target="_blank" rel="noopener noreferrer">Ficha técnica de referência · ${specs.sourceLabel} <svg><use href="#icon-arrow"></use></svg></a>` : ""}
        <p class="compatibility-note">Confira o modelo exato indicado em Configurações do celular antes de comprar. Aparelhos com nomes parecidos podem ter medidas e recortes de câmera diferentes.</p>
      </section>
    </div>`;

  modelPage.hidden = false;
  mainContent.classList.add("is-model-page");
  observeReveal(modelPage.querySelector(".model-page-inner"));
  document.title = `${model.title} | NovaCase`;
  return true;
}

function syncModelRoute() {
  const match = window.location.hash.match(/^#modelo\/([a-z0-9-]+)$/i);
  if (!match) {
    modelPage.hidden = true;
    mainContent.classList.remove("is-model-page");
    document.title = homeTitle;
    return;
  }

  const didRender = renderModelPage(match[1]);
  if (!didRender) {
    modelPage.innerHTML = `<div class="model-page-inner page-width" data-reveal><a class="detail-back" href="#modelos">Voltar aos modelos</a><h1>Modelo não encontrado</h1></div>`;
    modelPage.hidden = false;
    mainContent.classList.add("is-model-page");
    observeReveal(modelPage.querySelector(".model-page-inner"));
    document.title = `Modelo não encontrado | NovaCase`;
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openCart() {
  returnFocus = document.activeElement;
  drawerBackdrop.hidden = false;
  cartDrawer.inert = false;
  cartDrawer.setAttribute("aria-hidden", "false");
  cartDrawer.classList.add("is-open");
  cartTrigger.setAttribute("aria-expanded", "true");
  document.body.classList.add("drawer-open");
  requestAnimationFrame(() => drawerBackdrop.classList.add("is-visible"));
  document.querySelector("#cartClose").focus();
}

function closeCart() {
  cartDrawer.classList.remove("is-open");
  drawerBackdrop.classList.remove("is-visible");
  cartDrawer.setAttribute("aria-hidden", "true");
  cartDrawer.inert = true;
  cartTrigger.setAttribute("aria-expanded", "false");
  document.body.classList.remove("drawer-open");
  window.setTimeout(() => { drawerBackdrop.hidden = true; }, 240);
  if (returnFocus instanceof HTMLElement) returnFocus.focus();
}

function closeSearch() {
  searchPanel.hidden = true;
  searchToggle.setAttribute("aria-expanded", "false");
  searchToggle.setAttribute("aria-label", "Abrir busca");
}

searchToggle.addEventListener("click", () => {
  const opening = searchPanel.hidden;
  searchPanel.hidden = !opening;
  searchToggle.setAttribute("aria-expanded", String(opening));
  searchToggle.setAttribute("aria-label", opening ? "Fechar busca" : "Abrir busca");
  if (opening) searchInput.focus();
  else { searchInput.value = ""; searchClear.hidden = true; renderProducts(); }
});

searchInput.addEventListener("input", () => {
  searchClear.hidden = searchInput.value.length === 0;
  renderProducts();
});
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Escape") { searchInput.value = ""; searchClear.hidden = true; renderProducts(); closeSearch(); searchToggle.focus(); }
});
searchClear.addEventListener("click", () => { searchInput.value = ""; searchClear.hidden = true; renderProducts(); searchInput.focus(); });

document.querySelectorAll("[data-category]").forEach((button) => {
  button.addEventListener("click", () => {
    selectCategory(button.dataset.category);
    if (button.hasAttribute("data-scroll-products")) document.querySelector("#destaques").scrollIntoView({ behavior: "smooth", block: "start" });
    else if (button.classList.contains("category-card")) document.querySelector("#destaques").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

viewAllButton.addEventListener("click", () => { showingAll = !showingAll; renderProducts(); });
document.querySelector("#clearFilters").addEventListener("click", () => {
  searchInput.value = "";
  searchClear.hidden = true;
  showingAll = false;
  selectCategory("all");
});

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add]");
  if (button) addToCart(button.dataset.add);
});
cartContent.addEventListener("click", (event) => {
  const quantityButton = event.target.closest("[data-quantity]");
  const removeButton = event.target.closest("[data-remove]");
  if (quantityButton) changeQuantity(quantityButton.dataset.id, Number(quantityButton.dataset.quantity));
  if (removeButton) changeQuantity(removeButton.dataset.remove, -999);
});

cartTrigger.addEventListener("click", openCart);
document.querySelector("#cartClose").addEventListener("click", closeCart);
drawerBackdrop.addEventListener("click", closeCart);
document.querySelector("#checkoutButton").addEventListener("click", () => {
  const orderLines = cart.map((item) => {
    const product = products.find((entry) => entry.id === item.id);
    return `${item.quantity}x ${product.title} para ${product.stockModel.phone} (${money.format(product.price)} cada)`;
  });
  const total = cart.reduce((sum, item) => sum + products.find((product) => product.id === item.id).price * item.quantity, 0);
  const message = `Oi! Estou interessado nestes itens:\n${orderLines.join("\n")}\nTotal dos produtos: ${money.format(total)}. Pode confirmar disponibilidade, cores, entrega e pagamento?`;
  window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (cartDrawer.classList.contains("is-open")) closeCart();
    if (!searchPanel.hidden) { closeSearch(); searchToggle.focus(); }
    if (mainNav.classList.contains("is-open")) { mainNav.classList.remove("is-open"); menuToggle.setAttribute("aria-expanded", "false"); }
  }
  if (event.key === "Tab" && cartDrawer.classList.contains("is-open")) {
    const focusable = [...cartDrawer.querySelectorAll("button:not([disabled]), a[href], input:not([disabled])")];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});

menuToggle.addEventListener("click", () => {
  const opening = !mainNav.classList.contains("is-open");
  mainNav.classList.toggle("is-open", opening);
  menuToggle.setAttribute("aria-expanded", String(opening));
  menuToggle.setAttribute("aria-label", opening ? "Fechar menu" : "Abrir menu");
});
mainNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) { mainNav.classList.remove("is-open"); menuToggle.setAttribute("aria-expanded", "false"); }
});

document.querySelectorAll("[data-model-id]").forEach((button) => {
  button.addEventListener("click", () => { window.location.hash = `modelo/${button.dataset.modelId}`; });
});
window.addEventListener("hashchange", syncModelRoute);
window.addEventListener("popstate", syncModelRoute);

document.querySelectorAll("[data-toast]").forEach((button) => button.addEventListener("click", () => showToast(button.dataset.toast)));
document.querySelector("#currentYear").textContent = String(new Date().getFullYear());

renderProducts();
renderCart();
syncModelRoute();
observeReveal();
