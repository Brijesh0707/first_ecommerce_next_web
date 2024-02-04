import Image from "next/image"

export default function ProductCard() {
  return (
   <>
    <div className="w-[300px] max-w-[300px] rounded-lg border-[1px] border-gray-200 hover:border-[1px] hover:border-bgg_base"  style={{ transition: 'ease-out 0.3s' }} >
     <div className="image object-contain pl-1 pr-1 pt-1 pb-1">
      <Image src="/product1.jpg"  width={300} height={300} />
     </div>
    <div className="pl-1 pr-1 mb-2">
    <div className="">
        <p className="font-[800] text-[#2f2f2f] mt-4">Product_Name</p>
        <p className="font-[700] text-[#2f2f2f] mt-4">Product_description hase....</p>
     </div>
     <div className="flex justify-between mt-3 items-center">
        <p>⭐⭐⭐⭐</p>
        <button className="bg-bgg_base pl-2 pr-2 pt-1 pb-1 text-white font-500 rounded-lg hover:bg-white hover:text-black"  style={{ transition: 'ease-out 0.3s' }} >View Detail</button>
     </div>
    </div>

    </div>
   </>
  )
}
