import Banner from "@/components/Banner"
import ProductSelector from "@/components/ProductSelector/ui"
import Promotions from "@/components/Promotions/ui"
import OrderModal from "@/components/OrderModal/OrderModal"

export default function Home() {
  return (
    <div>
      <Banner />
      <Promotions />
      <ProductSelector />
      <OrderModal />
    </div>
  )
}
