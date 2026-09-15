import { SaleData } from '@entities/SaleData';

const computerSale: SaleData[] = [
    {
      productId: '1',
      description: 'A steelseries keyboard for robust and unbreakable typing experience',
      name: 'SteelSeries X500 Keyboard',
      category: 'computer-accessory',
      subCategory: 'keyboard',
      price: 180,
      quantity: 1
    },
    {
      productId: '8',
      description: 'A steelseries mouse',
      name: 'SteelSeries p430 Mouse',
      category: 'computer-accessory',
      subCategory: 'mouse',
      price: 90,
      quantity: 1
    },
    {
      productId: '10',
      description: 'Why would people need this',
      name: 'Corsair LED light strips',
      category: 'led-light',
      subCategory: 'light-strip',
      price: 90,
      quantity: 1
    },
    {
      productId: '2',
      description: 'A B850 brand to provide a stable and reliable motherboard for your PC build',
      name: 'Motherboard',
      category: 'computer-hardware',
      subCategory: 'motherboard',
      price: 200,
      quantity: 1
    },
    {
      productId: '3',
      description: 'A high-performance graphics card for immersive gaming experiences',
      name: 'Graphics Card',
      category: 'computer-hardware',
      subCategory: 'graphics-card',
      price: 700,
      quantity: 1
    },
    {
      productId: '4',
      description: '3TB SSD with 5000 read/write speed',
      name: 'SSD',
      category: 'computer-hardware',
      subCategory: 'storage',
      price: 450,
      quantity: 1
    },
    {
      productId: '5',
      description: 'A reliable and efficient CPU',
      name: 'CPU',
      category: 'computer-hardware',
      subCategory: 'processor',
      price: 225,
      quantity: 1
    },
    {
      productId: '6',
      description: '650 watt gold standard supply',
      name: 'Power Supply',
      category: 'computer-hardware',
      subCategory: 'power-supply',
      price: 120,
      quantity: 1
    },
    {
      productId: '11',
      description: '16GB DDR5 RAM 2 sticks of 8 GB each',
      name: 'Corsair RAM',
      category: 'computer-hardware',
      subCategory: 'memory',
      price: 210,
      quantity: 1
    },
    {
      productId: '7',
      description: '32 inch monitor with 2k 1ms QLED',
      name: 'Asus Monitor',
      category: 'computer-hardware',
      subCategory: 'monitor',
      price: 390,
      quantity: 1
    },
    {
      productId: '12',
      description: 'Veus brand monitor stand',
      name: 'Monitor Stand',
      category: 'computer-accessory',
      subCategory: 'monitor',
      price: 80,
      quantity: 3
    },
  ]

const furnitureSale: SaleData[] = [
    {
      productId: '1',
      description: 'A comfortable 3-seat fabric sofa for the living room',
      name: 'Fabric Sofa',
      category: 'living-room',
      subCategory: 'sofa',
      price: 1100,
      quantity: 1
    },
    {
      productId: '2',
      description: 'Solid wood dining table that seats 6',
      name: 'Dining Table',
      category: 'dining-room',
      subCategory: 'table',
      price: 600,
      quantity: 1
    },
    {
      productId: '3',
      description: 'Upholstered dining chair, bought in multiple rounds to fill out the set',
      name: 'Dining Chair',
      category: 'dining-room',
      subCategory: 'chair',
      price: 140,
      quantity: 4
    },
    {
      productId: '4',
      description: 'Queen size bed frame with headboard',
      name: 'Bed Frame',
      category: 'bedroom',
      subCategory: 'bed-frame',
      price: 450,
      quantity: 1
    },
    {
      productId: '5',
      description: 'Memory foam queen mattress',
      name: 'Mattress',
      category: 'bedroom',
      subCategory: 'mattress',
      price: 650,
      quantity: 1
    },
    {
      productId: '6',
      description: '5-shelf bookcase, bought two to line the wall',
      name: 'Bookshelf',
      category: 'living-room',
      subCategory: 'shelving',
      price: 200,
      quantity: 2
    },
    {
      productId: '7',
      description: 'Round wood coffee table for the living room',
      name: 'Coffee Table',
      category: 'living-room',
      subCategory: 'table',
      price: 150,
      quantity: 1
    },
    {
      productId: '8',
      description: 'Adjustable floor lamp for reading corner',
      name: 'Floor Lamp',
      category: 'living-room',
      subCategory: 'lighting',
      price: 80,
      quantity: 1
    },
  ]

const warhammerSale: SaleData[] = [
    {
      productId: '1',
      description: 'Combat Patrol box, 10 miniatures per box',
      name: 'Necron Combat Patrol',
      category: 'hobby',
      subCategory: 'miniatures',
      price: 130,
      quantity: 1
    },
    {
      productId: '2',
      description: 'Tactical squad box, 10 miniatures per box',
      name: 'Space Marine Tactical Squad',
      category: 'hobby',
      subCategory: 'miniatures',
      price: 55,
      quantity: 2
    },
    {
      productId: '3',
      description: 'Boyz mob box, 10 miniatures per box',
      name: 'Ork Boyz Mob',
      category: 'hobby',
      subCategory: 'miniatures',
      price: 50,
      quantity: 2
    },
    {
      productId: '4',
      description: 'Start Collecting box set, 10 miniatures per box',
      name: 'Start Collecting! Chaos Space Marines',
      category: 'hobby',
      subCategory: 'miniatures',
      price: 130,
      quantity: 1
    },
    {
      productId: '5',
      description: 'Large boxed set, 34 miniatures per box',
      name: 'Indomitus Boxed Set',
      category: 'hobby',
      subCategory: 'miniatures',
      price: 180,
      quantity: 1
    },
    {
      productId: '6',
      description: 'Core box set, 12 miniatures per box',
      name: 'Kill Team Core Box',
      category: 'hobby',
      subCategory: 'miniatures',
      price: 140,
      quantity: 1
    },
    {
      productId: '7',
      description: 'Single character blister, 1 miniature each, bought twice',
      name: 'Character Blister - Chaos Lord',
      category: 'hobby',
      subCategory: 'miniatures',
      price: 35,
      quantity: 2
    },
    {
      productId: '8',
      description: 'Set of contrast paints for quick miniature painting',
      name: 'Citadel Contrast Paint Set',
      category: 'hobby',
      subCategory: 'painting-supplies',
      price: 65,
      quantity: 1
    },
    {
      productId: '9',
      description: 'Ergonomic handle for holding miniatures while painting',
      name: 'Citadel Painting Handle',
      category: 'hobby',
      subCategory: 'painting-supplies',
      price: 18,
      quantity: 1
    },
    {
      productId: '10',
      description: 'Foam-lined case for transporting the miniature collection',
      name: 'Army Carrying Case',
      category: 'hobby',
      subCategory: 'storage',
      price: 45,
      quantity: 1
    },
  ]

const carAccessorySale: SaleData[] = [
    {
      productId: '1',
      description: 'All-weather rubber floor mats, front and rear',
      name: 'Floor Mats',
      category: 'car-accessory',
      subCategory: 'interior',
      price: 85,
      quantity: 1
    },
    {
      productId: '2',
      description: 'Dash-mounted camera with loop recording',
      name: 'Dash Cam',
      category: 'car-accessory',
      subCategory: 'electronics',
      price: 120,
      quantity: 1
    },
    {
      productId: '3',
      description: 'Magnetic vent mount for phone',
      name: 'Car Phone Mount',
      category: 'car-accessory',
      subCategory: 'electronics',
      price: 25,
      quantity: 1
    },
    {
      productId: '4',
      description: 'Full set of waterproof seat covers',
      name: 'Seat Covers',
      category: 'car-accessory',
      subCategory: 'interior',
      price: 140,
      quantity: 1
    },
    {
      productId: '5',
      description: 'Aluminum roof rack crossbars',
      name: 'Roof Rack',
      category: 'car-accessory',
      subCategory: 'exterior',
      price: 260,
      quantity: 1
    },
    {
      productId: '6',
      description: 'LED interior light upgrade kit',
      name: 'LED Interior Light Kit',
      category: 'car-accessory',
      subCategory: 'electronics',
      price: 45,
      quantity: 1
    },
    {
      productId: '7',
      description: 'Handheld vacuum for interior cleanup',
      name: 'Car Vacuum',
      category: 'car-accessory',
      subCategory: 'maintenance',
      price: 60,
      quantity: 1
    },
    {
      productId: '8',
      description: 'Digital tire pressure gauge',
      name: 'Tire Pressure Gauge',
      category: 'car-accessory',
      subCategory: 'maintenance',
      price: 15,
      quantity: 1
    },
    {
      productId: '9',
      description: 'Portable battery jump starter with USB ports',
      name: 'Portable Jump Starter',
      category: 'car-accessory',
      subCategory: 'maintenance',
      price: 90,
      quantity: 1
    },
    {
      productId: '10',
      description: 'Leather steering wheel cover',
      name: 'Steering Wheel Cover',
      category: 'car-accessory',
      subCategory: 'interior',
      price: 30,
      quantity: 1
    },
    {
      productId: '11',
      description: 'Collapsible trunk storage organizer',
      name: 'Trunk Organizer',
      category: 'car-accessory',
      subCategory: 'interior',
      price: 35,
      quantity: 1
    },
    {
      productId: '12',
      description: 'Wireless charging vent mount',
      name: 'Wireless Charger Mount',
      category: 'car-accessory',
      subCategory: 'electronics',
      price: 40,
      quantity: 1
    },
  ]

const giftSale: SaleData[] = [
    {
      productId: '1',
      description: 'Noise-cancelling wireless headphones, gift for spouse',
      name: 'Wireless Headphones',
      category: 'gift',
      subCategory: 'electronics',
      price: 150,
      quantity: 1
    },
    {
      productId: '2',
      description: 'Large LEGO building set, gift for son',
      name: 'LEGO Building Set',
      category: 'gift',
      subCategory: 'toy',
      price: 80,
      quantity: 1
    },
    {
      productId: '3',
      description: 'Dollhouse playset, gift for daughter',
      name: 'Dollhouse Playset',
      category: 'gift',
      subCategory: 'toy',
      price: 100,
      quantity: 1
    },
    {
      productId: '4',
      description: 'Hardcover cookbook, gift for mother',
      name: 'Cookbook',
      category: 'gift',
      subCategory: 'book',
      price: 25,
      quantity: 1
    },
    {
      productId: '5',
      description: 'Genuine leather wallet, gift for father',
      name: 'Leather Wallet',
      category: 'gift',
      subCategory: 'accessory',
      price: 45,
      quantity: 1
    },
    {
      productId: '6',
      description: 'Scented candle gift set, gift for sister',
      name: 'Scented Candle Set',
      category: 'gift',
      subCategory: 'home',
      price: 30,
      quantity: 1
    },
    {
      productId: '7',
      description: 'Family board game night bundle',
      name: 'Board Game Bundle',
      category: 'gift',
      subCategory: 'game',
      price: 60,
      quantity: 1
    },
    {
      productId: '8',
      description: 'Wrapping paper, ribbon, and gift tags',
      name: 'Gift Wrapping Supplies',
      category: 'gift',
      subCategory: 'supplies',
      price: 20,
      quantity: 1
    },
  ]


export const saleDataImports = {
    computerSale,
    furnitureSale,
    warhammerSale,
    carAccessorySale,
    giftSale
 } as const;