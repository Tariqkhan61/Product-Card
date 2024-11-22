import Link from "next/link";
import Image from "next/image";

function ProductCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Product-1 */}
      <div className="border-8 border-blue-400 p-4">
        <Image
          src="/grapes2.jpeg"
          alt="Grapes"
          width={300}
          height={400} 
          className="object-cover w-full h-80" 
        />
        <p className="text-center py-2 font-extrabold">Grapes</p>
        <p className="text-center py-2 font-extrabold text-blue-600">$100</p>
        <div className="flex justify-center">
          <button className="bg-purple-600 text-white py-1 px-8 rounded-md my-3">Buy Now</button>
        </div>
      </div>

      {/* Product-2 */}
      <div className="border-8 border-green-400 p-4">
        <Image
          src="/apple6.png"
          alt="Apples"
          width={300}
          height={400} 
          className="object-cover w-full h-100" 
        />
        <p className="text-center py-6 font-extrabold">Apples</p>
        <p className="text-center py-2 font-extrabold text-blue-600">$175</p>
        <div className="flex justify-center">
          <button className="bg-purple-600 text-white py-1 px-8 rounded-md my-3">Buy Now</button>
        </div>
      </div>

      {/* Product-3 */}
      <div className="border-8 border-red-400 p-4">
        <Image
          src="/banana.jpeg"
          alt="Banana"
          width={300}
          height={400} 
          className="object-cover w-full h-80" 
        />
        <p className="text-center py-2 font-extrabold">Banana</p>
        <p className="text-center py-2 font-extrabold text-blue-600">$100</p>
        <div className="flex justify-center">
          <button className="bg-purple-600 text-white py-1 px-8 rounded-md my-3">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
