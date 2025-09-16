import "./Product.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Item from "../Item/Item";

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const Base_Url = "https://api.escuelajs.co/api/v1/products?limit=30";

  useEffect(() => {
    const getAllProduct = async () => {
      try {
        const res = await axios.get(Base_Url);
        console.log("API RESPONSE: ", res.data)
        setProducts(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getAllProduct();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="new-collections">
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className='collections'>
                {products.map((item, i) => (
                    <Item key={i} id={item.id} title={item.title} image={item.images} price={item.price}/>
                ))}
            </div>
        </div>
    </div>
  );
}

export default Product;
