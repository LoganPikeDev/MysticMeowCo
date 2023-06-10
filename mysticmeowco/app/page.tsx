import { PrismaClient } from "@prisma/client"
import HomePage from "./homePage"


export default async function Home() {

  const client = new PrismaClient()

    const products = await client.product.findMany({
      select:{
        id: true,
        name: true,
        description: true,
        image_url: true,
        sample_quantity: true,
        regular_quantity: true,
        exclusive_quantity: true,
        wheel_quantity: true,
        small_cereal_quantity: true,
        large_cereal_quantity: true,
        bag_dicks_quantity: true,
        slug: true,
      }
    })
 

  console.log(products)
  return (
      <HomePage products={products} />
    
  )
}
