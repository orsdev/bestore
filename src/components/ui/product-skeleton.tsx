interface IProductSkeleton {
  count?: number;
}

export const ProductSkeleton = ({ count = 6 }: IProductSkeleton) => {
  return (
    <>
      {new Array(count).fill(1).map((_, index) => (
        <div
          className="animate-pulse bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105  rounded-lg relative"
          key={index}
        >
          <div className="w-full h-[190px] bg-gray-200 mx-auto transform transition duration-300"></div>
          <div className="flex flex-col items-center my-3 space-y-2 mt-5 px-4 pb-4">
            <div className="w-full bg-gray-300 py-3"></div>
            <p className="w-full bg-gray-200 py-1"></p>
            <p className="w-full bg-gray-200 py-1"></p>
            <p className="w-full bg-gray-200 py-1"></p>
            <p className="w-full bg-gray-200 py-1"></p>
            <p className="w-full bg-gray-200 py-1"></p>
          </div>
        </div>
      ))}
    </>
  );
};
