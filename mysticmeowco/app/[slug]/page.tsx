import { transformDocument } from "@prisma/client/runtime"
import Render from "./Render"
import { PrismaClient } from "@prisma/client"

export default async function Home(props:any) {

    console.log(props.params.slug)

    const client = new PrismaClient()

    const productInfo = await client.product.findFirst({
        where: {
            slug: props.params.slug
        },
        include: {
            Sample: true,
            Regular: true,
            Exclusive: true,
            Large: true,
            Wheel: true,
            Small_Cereal_Bag: true,
            Large_Cereal_Bag: true,
            bag_dicks: true,
            Clamshell: true,
        }
    })


    return (
        <Render product={productInfo} />
    )
}