export interface MenuBadge {
  emoji: string
  label: string
}

export interface MenuItem {
  name: string
  price: string
  desc?: string
  image?: string
  badge?: MenuBadge
}

export interface MenuSection {
  id: string
  title: string
  note?: string
  layout: 'cards' | 'list'
  items: MenuItem[]
}

export const SECTIONS: MenuSection[] = [
  {
    id: 'pizza',
    title: 'Pizza Corner',
    layout: 'cards',
    items: [
      {
        name: 'Akel Special Pizza',
        price: '900',
        image: '/images/akel_special_pizza.png',
        badge: { emoji: '⭐', label: 'House Specialty' },
        desc: 'Chicken, minced beef, mozzarella, tomato sauce, boiled egg, and olives.',
      },
      {
        name: 'Tuna Pizza',
        price: '850',
        image: '/images/tuna_pizza.png',
        desc: 'Tuna, mozzarella, tomato sauce, red onion, olives, and sweet corn.',
      },
      {
        name: 'Chicken Pizza',
        price: '800',
        image: '/images/chicken_pizza.png',
        badge: { emoji: '🔥', label: 'Popular' },
        desc: 'Grilled chicken, mozzarella, tomato sauce, and olives.',
      },
      {
        name: 'Fasting Tuna Pizza',
        price: '700',
        image: '/images/fasting_tuna_pizza.png',
        badge: { emoji: '🌿', label: 'Fasting Pick' },
        desc: 'Tuna, tomato sauce, red onion, olives, and sweet corn (dairy-free).',
      },
      {
        name: 'Margherita Pizza',
        price: '650',
        image: '/images/margharita_pizza.png',
        desc: 'Mozzarella, tomato sauce, and pesto.',
      },
      {
        name: 'Vegetable Pizza',
        price: '500',
        image: '/images/vegetable_pizza.png',
        badge: { emoji: '🌿', label: 'Vegetarian' },
        desc: 'Seasonal vegetables and rich tomato sauce.',
      },
    ],
  },
  {
    id: 'burgers',
    title: 'Burgers',
    layout: 'cards',
    items: [
      {
        name: 'Classic Prime Double Burger',
        price: '899',
        image: '/images/classic_prime_double_burger.png',
        badge: { emoji: '🔥', label: 'Bestseller' },
        desc: 'Double beef patty, sliced cheese, egg, lettuce, onion, tomato, and grain mustard mayonnaise on a sesame bun.',
      },
      {
        name: 'Cheese Burger',
        price: '680',
        image: '/images/cheese_burger.png',
        badge: { emoji: '⭐', label: 'Customer Favorite' },
        desc: 'Beef patty, sliced cheese, egg, lettuce, onion, tomato, and grain mustard mayonnaise on a sesame bun.',
      },
      {
        name: 'Beef Burger',
        price: '580',
        image: '/images/beef_burger.png',
        desc: 'Beef patty, egg, lettuce, onion, tomato, and grain mustard mayonnaise on a sesame bun.',
      },
    ],
  },
  {
    id: 'sandwiches',
    title: 'Sandwiches',
    note: 'Served with wedge potatoes',
    layout: 'cards',
    items: [
      {
        name: 'Steak Sandwich',
        price: '950',
        image: '/images/steak_sandwich.png',
        badge: { emoji: '⭐', label: "Chef's Special" },
        desc: 'Grilled cubed beef fillet, cheese, onion marmalade, and mayonnaise.',
      },
      {
        name: 'Chicken Sandwich',
        price: '800',
        image: '/images/chicken_sandwich.png',
        badge: { emoji: '🔥', label: 'Popular' },
        desc: 'Grilled chicken, melted cheese, and spread mayonnaise.',
      },
      {
        name: 'Club Sandwich',
        price: '760',
        image: '/images/club_sandwich.png',
        desc: 'Chopped seasoned beef with boiled egg, tomato, lettuce, and mayonnaise on toasted bread.',
      },
      {
        name: 'Tuna Sandwich',
        price: '580',
        image: '/images/tuna_sandwich.png',
        desc: 'Marinated tuna chunks with bell pepper, onion, and tomato.',
      },
      {
        name: 'Vegetable Sandwich',
        price: '499',
        image: '/images/vegetable_sandwich.png',
        badge: { emoji: '🌿', label: 'Vegetarian' },
        desc: 'Grilled seasonal vegetables on toasted bread.',
      },
    ],
  },
  {
    id: 'wraps',
    title: 'Wraps',
    note: 'All wraps contain gluten',
    layout: 'cards',
    items: [
      {
        name: 'Spicy Bacon Wrap',
        price: '990',
        image: '/images/spicy_bacon_wrap.png',
        badge: { emoji: '⭐', label: 'Signature Wrap' },
        desc: 'House grilled chicken, beef bacon, rice blend, spinach, onion, cheese, and house spice blend. Served with fries.',
      },
      {
        name: 'Chicken Wrap',
        price: '800',
        image: '/images/chicken_wrap.png',
        badge: { emoji: '🔥', label: 'Bestseller' },
        desc: 'Grilled chicken, cheese, sweet corn, onions, lettuce, and ranch dressing. Served with fries.',
      },
      {
        name: 'Tuna Wrap',
        price: '750',
        image: '/images/tuna_wrap.png',
        desc: 'Canned tuna, tomato, onion, sweet corn, lettuce, fresh herbs, and house dressing. Served with fries.',
      },
      {
        name: 'Avocado Chickpea Wrap',
        price: '499',
        image: '/images/avocado_chickpea_wrap.png',
        badge: { emoji: '🌿', label: 'Superfood Pick' },
        desc: 'Avocado, chickpeas, sweet corn, onions, tomato, carrots, lettuce, chili, and house dressing. Served with fries.',
      },
      {
        name: 'Vegetable Wrap',
        price: '499',
        image: '/images/vegetable_wrap.png',
        badge: { emoji: '🌿', label: 'Vegetarian' },
        desc: 'Grilled seasonal vegetables, fresh lettuce, and basil.',
      },
      {
        name: 'Avocado Wrap',
        price: '450',
        image: '/images/avocado_wrap.png',
        desc: 'Fresh avocado with pesto spread. Served with wedge potatoes.',
      },
    ],
  },
  {
    id: 'salads',
    title: 'Salads',
    layout: 'cards',
    items: [
      {
        name: 'Chicken Caesar Salad',
        price: '950',
        image: '/images/chicken_caesar_salad.png',
        badge: { emoji: '🔥', label: 'Popular' },
        desc: 'Crisp romaine lettuce, grilled chicken, house-made croutons, and carrots with creamy Caesar dressing. (Contains gluten)',
      },
      {
        name: 'Tuna Salad',
        price: '650',
        image: '/images/tuna_salad.png',
        desc: 'Market canned tuna, cucumber, black olives, tomato, onions, lettuce, and sweet corn with zesty lemon dressing.',
      },
      {
        name: 'Hearty Barley Salad',
        price: '650',
        image: '/images/hearty_barley_salad.png',
        badge: { emoji: '🌿', label: 'Healthy Pick' },
        desc: 'Crushed barley, chickpeas, cucumber, sweet corn, red onion, fresh basil, and house dressing.',
      },
      {
        name: 'Mixed Salad',
        price: '350',
        image: '/images/mixed_salad.png',
        badge: { emoji: '🌿', label: 'Light & Fresh' },
        desc: 'Avocado, tomato, red onion, lettuce, carrot, and cucumber with house dressing.',
      },
    ],
  },
  {
    id: 'snacks',
    title: 'Snacks & Sides',
    layout: 'cards',
    items: [
      {
        name: 'French Fries',
        price: '299',
        image: '/images/french_fries.png',
      },
      {
        name: 'Lentil Sambusa',
        price: '270',
        image: '/images/lentil_sambusa.png',
        badge: { emoji: '🌿', label: 'Local Favorite' },
      },
      {
        name: 'Vegetable Spring Roll with Fries',
        price: '270',
        image: '/images/vegetable_spring_roll_with_fries.png',
        badge: { emoji: '🌿', label: 'Vegetarian' },
      },
    ],
  },
  {
    id: 'juice',
    title: 'Juice',
    layout: 'cards',
    items: [
      {
        name: 'Apple Juice',
        price: '580',
        image: '/images/apple_juice.png',
        desc: 'Fresh apple juice.',
      },
      {
        name: 'Orange Juice',
        price: '520',
        image: '/images/orange_juice.png',
        desc: 'Fresh orange juice.',
      },
      {
        name: 'Pineapple Juice',
        price: '480',
        image: '/images/pineapple_juice.png',
        desc: 'Fresh pineapple blended with chilled water and a squeeze of lime.',
      },
      {
        name: 'Mango Juice',
        price: '450',
        image: '/images/mango_juice.png',
        desc: 'Fresh mango blended with chilled water and a touch of lemon.',
      },
      {
        name: 'Avocado Juice',
        price: '420',
        image: '/images/avocado_juice.png',
        desc: 'Creamy avocado blended with milk and a little honey.',
      },
      {
        name: 'Papaya Juice',
        price: '380',
        image: '/images/papaya_juice.png',
        desc: 'Ripe papaya blended with chilled water and fresh lime.',
      },
    ],
  },
  {
    id: 'smoothies',
    title: 'Smoothies',
    layout: 'cards',
    items: [
      {
        name: 'Almond Apple',
        price: '370',
        image: '/images/almond_apple.png',
        badge: { emoji: '⭐', label: 'Signature Blend' },
        desc: 'Apple, banana, milk, and whole almond butter.',
      },
      {
        name: 'Avocado Chia Seed',
        price: '350',
        image: '/images/avocado_chia_seed.png',
        badge: { emoji: '🌿', label: 'Superfood Boost' },
        desc: 'Creamy avocado, chia seeds, fresh parsley, ginger, banana, and milk.',
      },
      {
        name: 'Strawberry Banana',
        price: '300',
        image: '/images/strawberry_banana.png',
        badge: { emoji: '🔥', label: 'Classic Favorite' },
        desc: 'Blended sweet strawberries, ripe banana, and fresh milk.',
      },
    ],
  },
  {
    id: 'mojitos',
    title: 'Mojitos & Lemonades',
    layout: 'cards',
    items: [
      {
        name: 'Orange Oregano Lemonade',
        price: '250',
        image: '/images/orange_oregano_lemonade.png',
        badge: { emoji: '🍹', label: 'House Specialty' },
        desc: 'Freshly squeezed orange juice infused with wild oregano.',
      },
      {
        name: 'Strawberry Lemonade',
        price: '200',
        image: '/images/strawberry_lemonade.png',
        desc: 'Tangy lemon juice layered with sweet strawberry pulp.',
      },
      {
        name: 'Classic Mojito',
        price: '200',
        image: '/images/classic_mojito.png',
        badge: { emoji: '🍹', label: 'Refreshing' },
        desc: 'Muddled fresh mint, lime juice, sparkling soda, and ice.',
      },
    ],
  },
  {
    id: 'hot-drinks',
    title: 'Hot Drinks',
    layout: 'cards',
    items: [
      { name: 'Single Espresso', price: '290', image: '/images/single_espresso.png' },
      { name: 'Caramel Macchiato', price: '190', image: '/images/caramel_macchiato.png', badge: { emoji: '⭐', label: 'Customer Favorite' } },
      { name: 'Hot Chocolate', price: '180', image: '/images/hot_chocolate.png' },
      { name: 'Cappuccino', price: '170', image: '/images/cappuccino.png' },
      { name: 'Café Latte', price: '170', image: '/images/cafe_latte.png' },
      { name: 'Double Macchiato', price: '170', image: '/images/double_macchiato.png' },
      { name: 'Fasting Macchiato', price: '170', image: '/images/fasting_macchiato.png', badge: { emoji: '🌿', label: 'Fasting Choice' } },
      { name: 'Tea Latte', price: '150', image: '/images/tea_latte.png' },
      { name: 'Single Macchiato', price: '110', image: '/images/macchiato.png' },
      { name: 'Steamed Milk', price: '110', image: '/images/steamed_milk.png' },
      { name: 'Americano', price: '95', image: '/images/americano.png' },
      { name: 'Tea Coffee', price: '90', image: '/images/tea_coffee.png' },
      { name: 'Ginger Tea', price: '70', image: '/images/ginger_tea.png' },
      { name: 'Green Tea', price: '70', image: '/images/green_tea.png', badge: { emoji: '🌿', label: 'Healthy Pick' } },
      { name: 'Classic Tea', price: '65', image: '/images/classic_tea.png' },
      { name: 'Steam Coffee / Moka Pot', price: '60', image: '/images/steamed_coffee.png' },
    ],
  },
  {
    id: 'cold-coffee',
    title: 'Cold Coffee',
    layout: 'cards',
    items: [
      {
        name: 'Dalgona Coffee',
        price: '270',
        image: '/images/dalgona_coffee.png',
        badge: { emoji: '🔥', label: 'Bestseller' },
        desc: 'Whipped sweet coffee foam layered over chilled milk.',
      },
      {
        name: 'Iced Chocolate Latte',
        price: '240',
        image: '/images/iced_chocolate_latte.png',
        desc: 'Espresso, rich chocolate syrup, cold milk, and ice.',
      },
      {
        name: 'Iced Caramel Latte',
        price: '220',
        image: '/images/iced_caramel_latte.png',
        badge: { emoji: '⭐', label: 'Customer Favorite' },
        desc: 'Espresso blended with buttery caramel syrup and cold milk.',
      },
      {
        name: 'Iced Latte',
        price: '180',
        image: '/images/iced_latte.png',
        desc: 'Smooth double espresso poured over cold milk and ice.',
      },
      {
        name: 'Freddo',
        price: '150',
        image: '/images/freddo.png',
        desc: 'Shaken iced espresso topped with cold milk foam.',
      },
    ],
  },
  {
    id: 'cold-drinks',
    title: 'Cold Drinks',
    layout: 'cards',
    items: [
      { name: 'Ice Tea', price: '120', image: '/images/ice_tea.png', badge: { emoji: '🍹', label: 'Refreshing' } },
      { name: 'Soft Drink', price: '75', image: '/images/soft_drink.png' },
      { name: 'Water (1 or ½ Liter)', price: '60/40', image: '/images/water.png' },
    ],
  },
  {
    id: 'extras',
    title: 'Add-ons & Extras',
    layout: 'cards',
    items: [
      { name: 'Extra Tuna', price: '299', image: '/images/extra_tuna.png' },
      { name: 'Extra Cheese', price: '200', image: '/images/extra_cheese.png' },
      { name: 'Extra Beef Mortadella', price: '150', image: '/images/extra_beef_mortadella.png' },
      { name: 'Extra Mayonnaise', price: '150', image: '/images/extra_mayonnaise.png' },
      { name: 'Pizza Box', price: '140', image: '/images/pizza_box.png' },
      { name: 'Extra Avocado', price: '130', image: '/images/extra_avocado.png' },
      { name: 'Extra Salad', price: '80', image: '/images/extra_salad.png' },
      { name: 'Extra Egg', price: '50', image: '/images/extra_egg.png' },
      { name: 'Juice Cup', price: '50', image: '/images/juice_cup.png' },
      { name: 'To-Go Box (Large / Medium)', price: '50 / 45', image: '/images/to_go_box.png' },
      { name: 'To-Go Cup (Large / Medium)', price: '45 / 35', image: '/images/to_go_cup.png' },
      { name: 'Extra Ketchup', price: '40', image: '/images/extra_ketchup.png' },
      { name: 'Extra Chili Sauce', price: '30', image: '/images/extra_chili_sauce.png' },
    ],
  },
]

export const CONTACTS = {
  phones: ['+251 949 416 865', '+251 988 366 411'],
  email: 'takeleyirgu4941@gmail.com',
  // TODO: paste the cafe's Instagram profile URL here
  instagram: '',
  // TODO: paste the cafe's TikTok profile URL here
  tiktok: '',
}
