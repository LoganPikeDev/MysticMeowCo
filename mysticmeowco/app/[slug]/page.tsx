import Render from "./Render"
import { PrismaClient } from "@prisma/client"

export default async function Home(props:any) {

    console.log(props.params.slug)

    const client = new PrismaClient()

    const productInfo = await client.product.findFirst({
        where: {
            slug: props.params.slug
        },
        select: {
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


    return (
        <Render product={productInfo} />
    )
}