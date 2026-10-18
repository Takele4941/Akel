import { useEffect, useState, type ReactNode } from 'react'
import { LanguageContext, type Language, type LanguageContextValue } from './languageContext'

const AMHARIC: Record<string, string> = {
  Menu: 'ማውጫ',
  'Good food, warm coffee, and a seat that feels like home.':
    'ጣፋጭ ምግብ ፣ ትኩስ ቡና እንደ ቤትዎ የሚስማማ መቀመጫ።',
  "Browse at your own pace — when you're ready, just call your waiter and tell them what you'd love to have.":
    'ማውጫን በተረጋጋ ሁኔታ ይመልከቱ ፤ ሲዘጋጁ አስተናጋጁን ጠርተው የሚፈልጉትን ይዘዙ።',
  'Pizza Corner': 'ፒዛ',
  Burgers: 'በርገር',
  Sandwiches: 'ሳንድዊች',
  Wraps: 'ራፕ',
  Salads: 'ሰላጣ',
  'Snacks & Sides': 'ቀላል ምግቦች እና ተጨማሪዎች',
  'Cold Coffee': 'ቀዝቃዛ ቡና',
  Juice: 'ጁስ',
  Smoothies: 'ስሙዚ',
  'Mojitos & Lemonades': 'ሞጂቶ እና ሌሞኔድ',
  'Hot Drinks': 'ትኩስ መጠጦች',
  'Cold Drinks': 'ቀዝቃዛ መጠጦች',
  'Add-ons & Extras': 'ተጨማሪዎች',
  'Served with wedge potatoes': 'ከድንች ቺፕስ ጋር ይቀርባል',
  'All wraps contain gluten': 'ሁሉም ራፕ ግሉተን ይይዛሉ',
  'Akel Special Pizza': 'አኬል ልዩ ፒዛ',
  'Tuna Pizza': 'ቱና ፒዛ',
  'Chicken Pizza': 'የዶሮ ፒዛ',
  'Fasting Tuna Pizza': 'የጾም ቱና ፒዛ',
  'Margherita Pizza': 'ማርጋሪታ ፒዛ',
  'Vegetable Pizza': 'የአትክልት ፒዛ',
  'Classic Prime Double Burger': 'ክላሲክ ፕራይም ድርብ በርገር',
  'Cheese Burger': 'ቺዝ በርገር',
  'Beef Burger': 'የበሬ ሥጋ በርገር',
  'Steak Sandwich': 'ስቴክ ሳንድዊች',
  'Chicken Sandwich': 'የዶሮ ሳንድዊች',
  'Club Sandwich': 'ክለብ ሳንድዊች',
  'Tuna Sandwich': 'ቱና ሳንድዊች',
  'Vegetable Sandwich': 'የአትክልት ሳንድዊች',
  'Spicy Bacon Wrap': 'ቅመም ያለው ቤከን ራፕ',
  'Chicken Wrap': 'የዶሮ ራፕ',
  'Tuna Wrap': 'ቱና ራፕ',
  'Avocado Chickpea Wrap': 'አቮካዶ እና ሽምብራ ራፕ',
  'Vegetable Wrap': 'የአትክልት ራፕ',
  'Avocado Wrap': 'አቮካዶ ራፕ',
  'Chicken Caesar Salad': 'የዶሮ ሴዘር ሰላጣ',
  'Tuna Salad': 'የቱና ሰላጣ',
  'Hearty Barley Salad': 'የገብስ ሰላጣ',
  'Mixed Salad': 'ቅልቅል ሰላጣ',
  'French Fries': 'ፍሬንች ፍራይስ',
  'Lentil Sambusa': 'የምስር ሳምቡሳ',
  'Vegetable Spring Roll with Fries': 'የአትክልት ስፕሪንግ ሮል ከቺፕስ ጋር',
  'Dalgona Coffee': 'ዳልጎና ቡና',
  'Iced Chocolate Latte': 'ቀዝቃዛ ቸኮሌት ላቴ',
  'Iced Caramel Latte': 'ቀዝቃዛ ካራሜል ላቴ',
  'Iced Latte': 'ቀዝቃዛ ላቴ',
  Freddo: 'ፍሬዶ',
  'Mango Juice': 'የማንጎ ጁስ',
  'Avocado Juice': 'የአቮካዶ ጁስ',
  'Papaya Juice': 'የፓፓያ ጁስ',
  'Pineapple Juice': 'የአናናስ ጁስ',
  'Orange Juice': 'የብርቱካን ጁስ',
  'Apple Juice': 'የፖም ጁስ',
  'Almond Apple': 'የአልሞንድ እና ፖም ስሙዚ',
  'Avocado Chia Seed': 'አቮካዶ እና ቺያ ዘር',
  'Strawberry Banana': 'ኢንጆሪ እና ሙዝ',
  'Orange Oregano Lemonade': 'ብርቱካን እና ኦሪጋኖ ሌሞኔድ',
  'Strawberry Lemonade': 'የኢንጆሪ ሌሞኔድ',
  'Classic Mojito': 'ክላሲክ ሞጂቶ',
  'Single Espresso': 'ነጠላ ኤስፕሬሶ',
  'Caramel Macchiato': 'ካራሜል ማኪያቶ',
  'Hot Chocolate': 'ትኩስ ቸኮሌት',
  Cappuccino: 'ካፑቺኖ',
  'Café Latte': 'ካፌ ላቴ',
  'Double Macchiato': 'ድርብ ማኪያቶ',
  'Fasting Macchiato': 'የጾም ማኪያቶ',
  'Tea Latte': 'የሻይ ላቴ',
  'Single Macchiato': 'ነጠላ ማኪያቶ',
  'Steamed Milk': 'የፈላ ወተት',
  Americano: 'አሜሪካኖ',
  'Tea Coffee': 'ሻይ ቡና',
  'Ginger Tea': 'የዝንጅብል ሻይ',
  'Green Tea': 'አረንጓዴ ሻይ',
  'Classic Tea': 'ክላሲክ ሻይ',
  'Steam Coffee / Moka Pot': 'ስቲም ቡና / ሞካ ፖት',
  'Ice Tea': 'ቀዝቃዛ ሻይ',
  'Soft Drink': 'ለስላሳ መጠጥ',
  'Water (1 or ½ Liter)': 'ውሃ (1 ወይም ½ ሊትር)',
  'Extra Tuna': 'ተጨማሪ ቱና',
  'Extra Cheese': 'ተጨማሪ አይብ',
  'Extra Beef Mortadella': 'ተጨማሪ የበሬ ሞርታዴላ',
  'Extra Mayonnaise': 'ተጨማሪ ማዮኔዝ',
  'Pizza Box': 'የፒዛ ካርቶኒ',
  'Extra Avocado': 'ተጨማሪ አቮካዶ',
  'Extra Salad': 'ተጨማሪ ሰላጣ',
  'Extra Egg': 'ተጨማሪ እንቁላል',
  'Juice Cup': 'የጁስ ኩባያ',
  'To-Go Box (Large / Medium)': 'የመውሰጃ ካርቶኒ (ትልቅ / መካከለኛ)',
  'To-Go Cup (Large / Medium)': 'የመውሰጃ ኩባያ (ትልቅ / መካከለኛ)',
  'Extra Ketchup': 'ተጨማሪ ካቻፕ',
  'Extra Chili Sauce': 'ተጨማሪ የቺሊ ሶስ',
  'House Specialty': 'የቤቱ ልዩ ምርጫ',
  Popular: 'ተወዳጅ',
  'Fasting Pick': 'የጾም ምርጫ',
  'Fasting Choice': 'የጾም ምርጫ',
  Vegetarian: 'የአትክልት ምግብ',
  Bestseller: 'በጣም ተወዳጅ',
  'Customer Favorite': 'የደንበኞች ተወዳጅ',
  "Chef's Special": 'የሼፉ ልዩ ምርጫ',
  'Signature Wrap': 'የቤቱ ልዩ ራፕ',
  'Superfood Pick': 'ጤናማ ምርጫ',
  'Healthy Pick': 'ጤናማ ምርጫ',
  'Light & Fresh': 'ቀላል እና ትኩስ',
  'Local Favorite': 'የአካባቢው ተወዳጅ',
  'Signature Blend': 'የቤቱ ልዩ ቅልቅል',
  'Superfood Boost': 'ጤናማ ተጨማሪ',
  'Classic Favorite': 'ክላሲክ ተወዳጅ',
  Refreshing: 'መንፈስ የሚያድስ',
  'Ingredients & details': 'የግብዓት ዝርዝር',
  ETB: 'ብር',
  'Payment Options': 'የክፍያ አማራጮች',
  'Commercial Bank of Ethiopia': 'የኢትዮጵያ ንግድ ባንክ',
  'Bank of Abyssinia': 'የአቢሲኒያ ባንክ',
  Telebirr: 'ቴሌብር',
  'Account name': 'የሂሳብ ባለቤት',
  Copy: 'ቅዳ',
  Copied: 'ተቀድቷል',
  'Could not copy number. Please select and copy it manually.':
    'ቁጥሩን መቅዳት አልተቻለም። እባክዎ ቁጥሩን መርጠው በእጅ ይቅዱ።',
  'Thank you for dining with us': 'ከእኛ ጋር ስለተመገቡ እናመሰግናለን',
  'Every plate and every cup at Akel Cafe is made with care. We hope to see you again soon — come hungry, leave happy.':
    'በአኬል ካፌ የሚቀርበው እያንዳንዱ ምግብና መጠጥ በጥንቃቄ ይዘጋጃል። በቅርቡ እንደምንገናኝ ተስፋ እናደርጋለን — እርቦት መጥተው፣ በደስታ ይመለሱ።',
  'All listed prices include 15% VAT · Akel Cafe':
    'የተዘረዘሩት ዋጋዎች 15% ተ.እ.ታን ያካትታሉ · አኬል ካፌ',
  'Instagram profile': 'የኢንስታግራም ገጽ',
  'Akel Cafe on Instagram': 'አኬል ካፌ በኢንስታግራም',
  'Akel Cafe on TikTok': 'አኬል ካፌ በቲክቶክ',
  Instagram: 'ኢንስታግራም',
  TikTok: 'ቲክቶክ',
  'Open image': 'ምስሉን ይክፈቱ',
  'Close image': 'ምስሉን ዝጋ',
  image: 'ምስል',
  'Double-tap or press Enter to view': 'ለማየት ሁለት ጊዜ ይንኩ ወይም Enter ይጫኑ',
  'Scroll left': 'ወደ ግራ ያንሸራትቱ',
  'Scroll right': 'ወደ ቀኝ ያንሸራትቱ',
  'Chicken, minced beef, mozzarella, tomato sauce, boiled egg, and olives.':
    'ዶሮ፣ የተፈጨ የበሬ ሥጋ፣ ሞዛሬላ፣ የቲማቲም ድልህ፣ የተቀቀለ እንቁላል እና የወይራ ፍሬ።',
  'Tuna, mozzarella, tomato sauce, red onion, olives, and sweet corn.':
    'ቱና፣ ሞዛሬላ፣ የቲማቲም ድልህ፣ ቀይ ሽንኩርት፣ የወይራ ፍሬ እና ጣፋጭ በቆሎ።',
  'Grilled chicken, mozzarella, tomato sauce, and olives.':
    'የተጠበሰ ዶሮ፣ ሞዛሬላ፣ የቲማቲም ድልህ እና የወይራ ፍሬ።',
  'Tuna, tomato sauce, red onion, olives, and sweet corn (dairy-free).':
    'ቱና፣ የቲማቲም ድልህ፣ ቀይ ሽንኩርት፣ የወይራ ፍሬ እና ጣፋጭ በቆሎ (የወተት ትዋህጾ የለውም)።',
  'Mozzarella, tomato sauce, and pesto.': 'ሞዛሬላ፣ የቲማቲም ድልህ እና ፔስቶ።',
  'Seasonal vegetables and rich tomato sauce.': 'የወቅቱ አትክልቶች እና የቲማቲም ድልህ።',
  'Double beef patty, sliced cheese, egg, lettuce, onion, tomato, and grain mustard mayonnaise on a sesame bun.':
    'ድርብ የበሬ ሥጋ፣ የተቆረጠ አይብ፣ እንቁላል፣ ሰላጣ፣ ሽንኩርት፣ ቲማቲም እና የሰናፍጭ ማዮኔዝ በሰሊጥ ዳቦ ውስጥ።',
  'Beef patty, sliced cheese, egg, lettuce, onion, tomato, and grain mustard mayonnaise on a sesame bun.':
    'የበሬ ሥጋ፣ የተቆረጠ አይብ፣ እንቁላል፣ ሰላጣ፣ ሽንኩርት፣ ቲማቲም እና የሰናፍጭ ማዮኔዝ በሰሊጥ ዳቦ ውስጥ።',
  'Beef patty, egg, lettuce, onion, tomato, and grain mustard mayonnaise on a sesame bun.':
    'የበሬ ሥጋ፣ እንቁላል፣ ሰላጣ፣ ሽንኩርት፣ ቲማቲም እና የሰናፍጭ ማዮኔዝ በሰሊጥ ዳቦ ውስጥ።',
  'Grilled cubed beef fillet, cheese, onion marmalade, and mayonnaise.':
    'የተጠበሰ የበሬ ሥጋ ቁርጥራጭ፣ አይብ፣ የሽንኩርት ጃም እና ማዮኔዝ።',
  'Grilled chicken, melted cheese, and spread mayonnaise.':
    'የተጠበሰ ዶሮ፣ የቀለጠ አይብ እና ማዮኔዝ።',
  'Chopped seasoned beef with boiled egg, tomato, lettuce, and mayonnaise on toasted bread.':
    'በቅመም የተዘጋጀ የተከተፈ የበሬ ሥጋ፣ የተቀቀለ እንቁላል፣ ቲማቲም፣ ሰላጣ እና ማዮኔዝ በተጠበሰ ዳቦ ላይ።',
  'Marinated tuna chunks with bell pepper, onion, and tomato.':
    'በቅመም የተዘጋጀ ቱና፣ ቃሪያ፣ ሽንኩርት እና ቲማቲም።',
  'Grilled seasonal vegetables on toasted bread.': 'የወቅቱ የተጠበሱ አትክልቶች በተጠበሰ ዳቦ ላይ።',
  'House grilled chicken, beef bacon, rice blend, spinach, onion, cheese, and house spice blend. Served with fries.':
    'የቤቱ የተጠበሰ ዶሮ፣ የበሬ ቤከን፣ የሩዝ ቅልቅል፣ ስፒናች፣ ሽንኩርት፣ አይብ እና የቤቱ ቅመም። ከጥብስ ጋር ይቀርባል።',
  'Grilled chicken, cheese, sweet corn, onions, lettuce, and ranch dressing. Served with fries.':
    'የተጠበሰ ዶሮ፣ አይብ፣ ጣፋጭ በቆሎ፣ ሽንኩርት፣ ሰላጣ እና ራንች ሶስ። ከጥብስ ጋር ይቀርባል።',
  'Canned tuna, tomato, onion, sweet corn, lettuce, fresh herbs, and house dressing. Served with fries.':
    'ቱና፣ ቲማቲም፣ ሽንኩርት፣ ጣፋጭ በቆሎ፣ ሰላጣ፣ ትኩስ ቅጠላቅጠሎች እና የቤቱ ሶስ። ከጥብስ ጋር ይቀርባል።',
  'Avocado, chickpeas, sweet corn, onions, tomato, carrots, lettuce, chili, and house dressing. Served with fries.':
    'አቮካዶ፣ ሽምብራ፣ ጣፋጭ በቆሎ፣ ሽንኩርት፣ ቲማቲም፣ ካሮት፣ ሰላጣ፣ ቺሊ እና የቤቱ ሶስ። ከጥብስ ጋር ይቀርባል።',
  'Grilled seasonal vegetables, fresh lettuce, and basil.':
    'የወቅቱ የተጠበሱ አትክልቶች፣ ትኩስ ሰላጣ እና ባዚል።',
  'Fresh avocado with pesto spread. Served with wedge potatoes.':
    'ትኩስ አቮካዶ ከፔስቶ ጋር። ከድንች ቁርጥራጭ ጋር ይቀርባል።',
  'Crisp romaine lettuce, grilled chicken, house-made croutons, and carrots with creamy Caesar dressing. (Contains gluten)':
    'ክራንች የሮማይን ሰላጣ፣ የተጠበሰ ዶሮ፣ የቤት ክሩቶን እና ካሮት ከክሬሚ ሴዘር ሶስ ጋር። (ግሉተን ይይዛል)',
  'Market canned tuna, cucumber, black olives, tomato, onions, lettuce, and sweet corn with zesty lemon dressing.':
    'ቱና፣ ኪያር፣ ጥቁር የወይራ ፍሬ፣ ቲማቲም፣ ሽንኩርት፣ ሰላጣ እና ጣፋጭ በቆሎ ከሎሚ ሶስ ጋር።',
  'Crushed barley, chickpeas, cucumber, sweet corn, red onion, fresh basil, and house dressing.':
    'የተፈጨ ገብስ፣ ሽምብራ፣ ኪያር፣ ጣፋጭ በቆሎ፣ ቀይ ሽንኩርት፣ ትኩስ ባዚል እና የቤቱ ሶስ።',
  'Avocado, tomato, red onion, lettuce, carrot, and cucumber with house dressing.':
    'አቮካዶ፣ ቲማቲም፣ ቀይ ሽንኩርት፣ ሰላጣ፣ ካሮት እና ኪያር ከቤቱ ሶስ ጋር።',
  'Whipped sweet coffee foam layered over chilled milk.':
    'ጣፋጭ የቡና አረፋ በቀዝቃዛ ወተት ላይ።',
  'Espresso, rich chocolate syrup, cold milk, and ice.':
    'ኤስፕሬሶ፣ የቸኮሌት ሲረፕ፣ ቀዝቃዛ ወተት እና በረዶ።',
  'Espresso blended with buttery caramel syrup and cold milk.':
    'ኤስፕሬሶ ከካራሜል ሲረፕ እና ቀዝቃዛ ወተት ጋር።',
  'Smooth double espresso poured over cold milk and ice.':
    'ለስላሳ ድርብ ኤስፕሬሶ በቀዝቃዛ ወተት ላይ እና በረዶ ።',
  'Shaken iced espresso topped with cold milk foam.':
    'ቀዝቃዛ ኤስፕሬሶ በቀዝቃዛ ወተት አረፋ ላይ።',
  'Fresh mango blended with chilled water and a touch of lemon.':
    'ማንጎ ከቀዝቃዛ ውሃ እና ከትንሽ ሎሚ ጋር የተቀላቀለ።',
  'Creamy avocado blended with milk and a little honey.':
    'ክሬሚ አቮካዶ ከወተት እና ከትንሽ ማር ጋር የተቀላቀለ።',
  'Ripe papaya blended with chilled water and fresh lime.':
    'የደረሰ ፓፓያ ከቀዝቃዛ ውሃ እና ሎሚ ጋር የተቀላቀለ።',
  'Fresh pineapple blended with chilled water and a squeeze of lime.':
    'አናናስ ከቀዝቃዛ ውሃ እና ከሎሚ ጭማቂ ጋር የተቀላቀለ።',
  'Fresh orange juice.': 'ትኩስ የብርቱካን ጁስ።',
  'Fresh apple juice.': 'ትኩስ የፖም ጁስ።',
  'Apple, banana, milk, and whole almond butter.':
    'ፖም፣ ሙዝ፣ ወተት እና የለውዝ ቅቤ።',
  'Creamy avocado, chia seeds, fresh parsley, ginger, banana, and milk.':
    'ክሬሚ አቮካዶ፣ የቺያ ዘር፣ ትኩስ ፓርስሊ፣ ዝንጅብል፣ ሙዝ እና ወተት።',
  'Blended sweet strawberries, ripe banana, and fresh milk.':
    'ጣፋጭ ኢንጆሪ፣ የደረሰ ሙዝ እና ትኩስ ወተት የተቀላቀሉ።',
  'Freshly squeezed orange juice infused with wild oregano.':
    'ትኩስ የተጨመቀ የብርቱካን ጁስ ከኦሪጋኖ ጋር።',
  'Tangy lemon juice layered with sweet strawberry pulp.':
    'ጎምዛዛ የሎሚ ጁስ ከጣፋጭ ኢንጆሪ ጋር።',
  'Muddled fresh mint, lime juice, sparkling soda, and ice.':
    'ትኩስ ሚንት፣ የላይም ጁስ፣ ሶዳ እና በረዶ።',
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = window.localStorage.getItem('akel-menu-language')
    return saved === 'am' ? 'am' : 'en'
  })

  useEffect(() => {
    window.localStorage.setItem('akel-menu-language', language)
    document.documentElement.lang = language === 'am' ? 'am' : 'en'
  }, [language])

  const value: LanguageContextValue = {
    language,
    setLanguage,
    t: (text: string) => (language === 'am' ? AMHARIC[text] ?? text : text),
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
