import { PrismaClient } from "@prisma/client"
import HomePage from "./homePage"


export default async function Home() {

  const client = new PrismaClient()

    const products = await client.product.findMany({
      include: {
        Large: true,
        Regular: true,
      }
    })
 

  console.log(products)
  return (
      <HomePage products={products} />
    
  )
}
