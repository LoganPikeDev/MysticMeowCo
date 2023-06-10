import Link from "next/link";



export default function Product(product:any) {
    console.log(product.product)
    return (
        <div>
            <Link href={`/${product.product.slug}`}>
                <div className="product-card">
                    <img src={product.product.image_url} alt="product" width={250} height={250} className="product-image"/>
                </div>
            </Link>
            <p className="product-name">{product.product.name}</p>
            <p className="product-price">$2.50 - $8</p>
        </div>
    )

}