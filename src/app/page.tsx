import Banner from "@/components/Banner"
import ProductSelector from "@/components/ProductSelector/ui"
import Promotions from "@/components/Promotions/ui"

export default function Home() {
  return (
    <div>
      <Banner />
      <Promotions />
      <ProductSelector />
    </div>
  )
}
