import ProductCard from "@/components/ProductCard"


const page = () => {
  return (
   <>
    <section className="w-[100%] h-[100%] mt-[65px]">
      <main className="flex justify-between pl-4 pr-4">
       <div className="product_list w-[70%]">
          <ProductCard/>
       </div>
       <div className="total w-[25%]">
        <div className="w-[100%] border-[1px] rounded-lg border-bgg_base pl-2 pr-2">
            <div>
                <p>product_list</p>
                <p>product_list</p>
                <p>product_list</p>
                <p>product_list</p>
                <p>product_list</p>

            </div>
            <br/>
            <hr className="border-2"/>
            <div className="flex justify-between mt-2 mb-3">
            <p>Total</p>
            <p>15,000rs</p>

            </div>
        </div>
       </div>

      </main>

    </section>
   </>
  )
}

export default page