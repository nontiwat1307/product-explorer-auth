import Link from "next/link";
import { auth } from "@/auth";
import { getProducts } from "@/lib/products";
import { AuthButtons } from "./auth-buttons";

export default async function HomePage() {
  const session = await auth();
  const products = getProducts();
  const isLoggedIn = Boolean(session?.user);
  return <main className="container">
    <header className="header"><div><h1>Product Explorer</h1><p>รายการสินค้า</p></div><AuthButtons isLoggedIn={isLoggedIn} userName={session?.user?.name} /></header>
    <section className="grid">
      {products.map((product) => <article className="card" key={product.id} data-testid="product">
        <h2>{product.name}</h2><p>{product.description}</p><p className="price">฿{product.price.toLocaleString("th-TH")}</p>
        {isLoggedIn && <div className="actions"><Link className="button" href={`/products/${product.id}/edit`}>แก้ไข</Link><Link className="button danger" href={`/products/${product.id}/delete`}>ลบ</Link></div>}
      </article>)}
      {products.length === 0 && <p>ไม่มีสินค้า</p>}
    </section>
  </main>;
}
