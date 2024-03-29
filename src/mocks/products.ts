import { IProduct } from "../models/Interfaces";

export const products: IProduct[] = [
  {
    id: "be483463-2378-4d8a-8ce1-2790bb28c3a8",
    name: "Baby Rubber Plant",
    description:
      "Baby Rubber Plant is an attractive and easy-to-care-for plant with variegated leaves in dark and lime green hues.",
    price: 149,
    slug: "babyrubber",
    image: "/leafygreen/Peperomia_obtusifolia.png",
    category: {
      id: "183e93cb-22fe-4f19-8631-107552b2fbb3",
      image: "/hero/mostPopularBanner.png",
      name: "Popular Plants",
      slug: "popular",
    },
  },
  {
    id: "ffafe53c-cf5e-4693-a6ff-dcc94132aafe",
    name: "Monstera",
    description:
      "Monstera Deliciosa is one of the most common plants available. It is often recognized for its large and lobed leaves, which can reach up to half a meter in diameter. Due to its leaf structure, the plant is sometimes referred to as Adam's rib.",
    price: 299,
    slug: "monstera",
    image: "/leafygreen/monstera_delic.png",
    category: {
      id: "183e93cb-22fe-4f19-8631-107552b2fbb3",
      image: "/hero/mostPopularBanner.png",
      name: "Popular Plants",
      slug: "popular",
    },
  },
  {
    id: "6c0d1117-a6d9-474a-bb74-9a7b0bfda142",
    name: "Parlor Palm",
    description:
      "One of the world's best-selling potted palms, popular since the Victorian era and incredibly easy to care for – this palm is a perfect way to bring a tropical ambiance into your home or office.",
    price: 189,
    slug: "parlorpalm",
    image: "/leafygreen/Chamaedorea_elegans.png",
    category: {
      id: "183e93cb-22fe-4f19-8631-107552b2fbb3",
      image: "/hero/mostPopularBanner.png",
      name: "Popular Plants",
      slug: "popular",
    },
  },
  {
    id: "aee4877d-ae53-4169-8fab-4fc94f53b0ef",
    name: "Philodendron squamiferum",
    description:
      "An easy-to-care-for plant that brings a tropical vibe to your home. The dark green leaves and fuzzy, reddish leaf stems are distinctive features of this plant. Philodendron squamiferum is native to the tropical rainforests of French Guiana, Suriname, and northern Brazil. It thrives in bright, indirect light and humidity. The five-lobed dark green leaves and fuzzy reddish leaf stems add a tropical touch to your living space.",
    price: 239,
    slug: "philosquami",
    image: "/leafygreen/Red_Bristle_Philodendron_squamiferum.png",
    category: {
      id: "1a1bd33d-bbda-4ab2-b7a1-7fa38469f0f7",
      image: "/hero/leadyBanner2.png",
      name: "Leafy Plants",
      slug: "leaf",
    },
  },
  {
    id: "bd123494-6b5e-463f-a2e2-6c4f5365935c",
    name: "Calathea Whitestar",
    description:
      "This Calathea White Star boasts stunning green leaves adorned with white stripes that extend across the foliage. The green-patterned leaves add a touch of elegance to any home.",
    price: 289,
    slug: "calatheawhitestar",
    image: "/leafygreen/Calathea_White_Star_Calathea_majestica.png",
    category: {
      id: "1a1bd33d-bbda-4ab2-b7a1-7fa38469f0f7",
      image: "/hero/leadyBanner2.png",
      name: "Leafy Plants",
      slug: "leaf",
    },
  },
  {
    id: "91c01418-f027-40e1-8caa-ba23ce7b01fc",
    name: "Dumb Cane",
    description:
      "Don't let the name fool you! This is a gorgeous and delightful plant with large variegated leaves in green and white. Flourishes in well-lit spaces; avoid direct sunlight. Allow the plant to dry slightly between waterings and occasionally mist the leaves.",
    price: 169,
    slug: "dumbcane",
    image: "/leafygreen/Dieffenbachia_plant.png",
    category: {
      id: "1a1bd33d-bbda-4ab2-b7a1-7fa38469f0f7",
      image: "/hero/leadyBanner2.png",
      name: "Leafy Plants",
      slug: "leaf",
    },
  },
  {
    id: "af3209ef-05d4-4b9a-9e65-d1a4ea35d5c6",
    name: "Golden Pothos",
    description:
      "The Golden Pothos is a climbing plant originating from the Society Islands. It's an effortlessly manageable plant with beautifully variegated, heart-shaped leaves in shades of yellow and green.",
    price: 239,
    slug: "goldenpothos",
    image: "/leafygreen/Epipremnum_aureum_pothos_plant.png",
    category: {
      id: "d014nex2-5sle-9b5e-80kl-v4322c329fsp",
      image: "/hero/expertBanner.png",
      name: "Expert Handler",
      slug: "expert",
    },
  },
  {
    id: "9ee0bf2b-e154-4c32-a532-ae6d19283f64",
    name: "Philodendron melanochrysum",
    description:
      "Philodendron melanochrysum is an exquisite plant with velvety, heart-shaped leaves. The leaves display a dark green to yellow hue with light veins. Certainly, it stands out as one of our favorites!",
    price: 329,
    slug: "philomelan",
    image: "/leafygreen/Philodendron_melanochrysum.png",
    category: {
      id: "d014nex2-5sle-9b5e-80kl-v4322c329fsp",
      image: "/hero/expertBanner.png",
      name: "Expert Handler",
      slug: "expert",
    },
  },
  {
    id: "5e7dd61d-b36d-4e33-8982-8fddc096207a",
    name: "Bird's Nest Fern",
    description:
      "The scientific name of the Bird's Nest Fern is Asplenium nidus 'Crispy Wave'. It features beautifully glossy, light green leaves. Naturally thriving in treetops, its bowl-shaped form bears a striking resemblance to a bird's nest, inspiring its name.",
    price: 149,
    slug: "birdnestfern",
    image: "/leafygreen/Asplenium_nidus.png",
    category: {
      id: "d014nex2-5sle-9b5e-80kl-v4322c329fsp",
      image: "/hero/expertBanner.png",
      name: "Expert Handler",
      slug: "expert",
    },
  },
  {
    id: "d5860f13-ea58-4b97-9714-03c1f155372d",
    name: "Philodendron 'Silver Sword'",
    description:
      "Philodendron 'Silver Sword' is a variation within the Philodendron family, showcasing glossy green leaves with a touch of silver/gray. It adds a stunning touch to any home!",
    price: 229,
    slug: "philosilversword",
    image: "/leafygreen/Philodendron_hastatum_Silver_Sword.png",
    category: {
      id: "2e149e5b-514e-44ce-8c49-efbebf329fec",
      image: "/hero/leafyBanner.png",
      name: "Easy To Handle",
      slug: "easy",
    },
  },
  {
    id: "c5490f23-bd58-4b97-9714-03c1f1558962",
    name: "Spathiphyllum Domino Variegata",
    description:
      "Spathiphyllum Domino is a rarer variation of our classic Peace Lily. With its white variegated leaves, it's more dreamy than the dreamiest!",
    price: 229,
    slug: "spatophyllumdomino",
    image: "/leafygreen/Spathiphyllum_Domino_variegata.png",
    category: {
      id: "2e149e5b-514e-44ce-8c49-efbebf329fec",
      image: "/hero/leafyBanner.png",
      name: "Easy To Handle",
      slug: "easy",
    },
  },
  {
    id: "3dfebbb8-1ee7-4cac-9e89-ea1c7f4a1458",
    name: "Snake Plant",
    description:
      "The Snake Plant has everything we desire in a potted plant – it's easy to care for, adaptable to various light conditions, rarely affected by pests, and serves as an efficient air purifier.",
    price: 229,
    slug: "snakeplant",
    image: "/leafygreen/sansevieria_trifasciata_plant.png",
    category: {
      id: "2e149e5b-514e-44ce-8c49-efbebf329fec",
      image: "/hero/leafyBanner.png",
      name: "Easy To Handle",
      slug: "easy",
    },
  },
];
