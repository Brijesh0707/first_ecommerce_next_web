import ProductCard from "@/components/ProductCard"


const page = () => {
  return (
    <>
        <section className="w-[100%] h-[100%] mt-[65px] mb-[50px]">
            <main className="flex justify-between">
              <div className="filter w-[400px] border-r-2">
                 <div className="checked mt-2 ml-5">
                 <p className="text-[24px] text-[#2f2f2f] font-600 pb-4">Select category</p>
                  <div className="flex gap-3">
                  <input type="checkbox" id="category"/>
                  <label name="category">apple-laptops</label>
                  </div>
                  <div className="flex gap-3">
                  <input type="checkbox" id="category"/>
                  <label name="category">apple-laptops</label>
                  </div> <div className="flex gap-3">
                  <input type="checkbox" id="category"/>
                  <label name="category">apple-laptops</label>
                  </div>
                  <div className="flex gap-3">
                  <input type="checkbox" id="category"/>
                  <label name="category">apple-laptops</label>
                  </div>
                  <div className="flex gap-3">
                  <input type="checkbox" id="category"/>
                  <label name="category">apple-laptops</label>
                  </div>



                 </div>
                 <br/>
                 <div className="radios ml-3">
  <p className="text-[24px] text-[#2f2f2f] font-600">Select price range</p>
  <br/>
  <div className="flex gap-3">
    <input type="radio" id="price1" name="price" />
    <label htmlFor="price1">200-500</label>
  </div>
  <div className="flex gap-3">
    <input type="radio" id="price2" name="price" />
    <label htmlFor="price2">500-1000</label>
  </div>
  <div className="flex gap-3">
    <input type="radio" id="price3" name="price" />
    <label htmlFor="price3">1000-1500</label>
  </div>
  <div className="flex gap-3">
    <input type="radio" id="price4" name="price" />
    <label htmlFor="price4">1500-2000</label>
  </div>
</div>

              </div>
              <div className="product_list flex flex-wrap ml-2">
                {[1,2,3,4,5,6].map((item,index)=>(
                    <>
                    <div className="ml-1 mr-1 mt-1 mb-1" key={index}>
                <ProductCard/>
                </div>
                    </>
                ))

                }
                

              </div>

            </main>
        </section>
    </>
  )
}

export default page