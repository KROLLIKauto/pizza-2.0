import Banner from "@/components/Banner"
import ProductSelector from "@/components/ProductSelector/ui"
import Promotions from "@/components/Promotions/ui"
import DeliveryInfo from "@/components/DeliveryInfo/ui"
import Features from "@/components/Features/ui"
import Instagram from "@/components/Instagram/ui"
import OrderModal from "@/components/OrderModal/OrderModal"

export default function Home() {
  return (
    <div>
      <Banner />
      <Promotions />
      <ProductSelector />
      <DeliveryInfo />
      <Features />
      <Instagram />
      <OrderModal />
    </div>
  )
}