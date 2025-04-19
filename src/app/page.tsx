import ProductList from "@/components/ProductList";
import products from "@/data/products";

export default function Home() {
	return (
		<main className="min-h-screen bg-gray-900 p-6 text-white">
			<h1 className="text-4xl font-bold mb-8 text-center">
				🛍️ Loja Virtual
			</h1>
			<ProductList products={products} />
		</main>
	);
}
