import { Link } from "react-router-dom";
import { Avatars } from "src/utils/avatars";
import { getImage } from "../api/getImage";
import { ProductCard } from "src/components";

const homeAvatars = Avatars.slice(1, 5);
export default function AvatarGrid() {
  return (
    <section className="flex  flex-wrap  md:basis-2 justify-center py-4 sm:py-8">
      {homeAvatars.map((product) => (
        <Link to={`/${product.name}/${product.price}`} className="m-12 ">
          <ProductCard
            imageUrl={getImage(product.name)}
            name={product.name}
            price={product.price}
          />
        </Link>
      ))}
    </section>
  );
}
