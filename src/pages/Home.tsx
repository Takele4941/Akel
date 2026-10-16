import Header from '../components/Header'
import CategoryNav from '../components/CategoryNav'
import MenuSection from '../components/MenuSection'
import Footer from '../components/Footer'
import PaymentOptions from '../components/PaymentOptions'
import { SECTIONS } from '../data/menu'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <CategoryNav />
      <main>
        {SECTIONS.map((section) => (
          <MenuSection key={section.id} section={section} />
        ))}
      </main>
      <PaymentOptions />
      <Footer />
    </div>
  )
}
