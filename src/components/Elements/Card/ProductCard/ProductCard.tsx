import { Avatars } from "src/utils/avatars";

const permittedNames = Avatars.map((e) => e.name);
type Name = typeof permittedNames[number]

type CardProps = {
  name?: Name;
  price?: number;
  imageUrl: string;
};

export function ProductCard({ name, price, imageUrl }: CardProps) {
  return (
    <article className="w-32 sm:w-22 md:w-44 lg:w-80 transition-all duration-300 hover:translate-x-3 hover:-translate-y-3  hover:shadow-xl shadow-black">
      <img
        data-testid="product-image"
        className="w-fit transition-shadow duration-300 hover:shadow-secondary "
        alt={name}
        src={imageUrl}
        loading="lazy"
      />
      <div className="text-white bottom-0 sm:flex sm:items-center sm:justify-between font-AlbertSans p-2 border-2 border-primary">
        <p
          data-testid="product-name"
          className="dark:text-white text-black font-extrabold text-xl"
        >
          {name}
        </p>
        {price && (
          <p className="text-primary font-extrabold" test-id="product-price">
            ${price}
          </p>
        )}
      </div>
    </article>
  );
}
