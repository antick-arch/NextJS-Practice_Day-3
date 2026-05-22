import ProductCard from "@/components/ProductCard";
const getProducts = async() =>{
    const res = await fetch('http://localhost:3004/products',{cache:'no-cache'});
    return res.json();
}

const ProductPage = async() => {
    const products = await getProducts();
    return (
        <div>
            <h2>Total Products: {products.length}</h2>
            <div className="grid grid-cols-4 gap-4 place-items-center">
                {
                    products.map((product)=><ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default ProductPage;