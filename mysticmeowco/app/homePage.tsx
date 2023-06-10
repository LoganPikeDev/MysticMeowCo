import FooterBanner from "./FooterBanner"
import HeroBanner from "./heroBanner"
import Navbar from "./navbar"
import Product from "./products"

export default function HomePage( products:any ) {

    const product_info = products.products
    console.log(product_info)

    return (
        <>
            <Navbar/>
            <HeroBanner/>

            <div className="flex flex-col justify-center">
                <h2 className="text-center font-bold font-mono mt-2 text-5xl text-fuchsia-600">Our Wax Melts!</h2>
                <p className="text-center">Your one stop shop for amazing scents</p>
            </div>

            <div className="products-container">
                {product_info.map((product:any) => <Product key={product.id} product={product} />)}
            </div>

            <FooterBanner />
        </>
    )
}