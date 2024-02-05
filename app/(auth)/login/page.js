import Link from "next/link"


const page = () => {
  return (
    <>
        <section className="w-[100%] h-[100%] flex justify-center items-center mt-[70px] mb-[110px]">
            <div className="w-[400px] rounded-lg border-2 pl-3 pr-3 pt-3 pb-3 mt-20">
                <div className="logo">

              <p className='text-[20px] w-[100%] text-base_color font-800 pt-2 pb-2 text-center font-lato bg-gray-100 '>Brij-Ecommerce 🛒</p>

                </div>
                <br/>
                <input type="email" placeholder="enter your email" className="w-[100%] pt-2 pb-2 pl-2 border-[1px] border-black rounded-md mt-2 mb-2"/>
                <input type="password" placeholder="enter your password" className="w-[100%] pt-2 pb-2 pl-2 border-[1px] border-black rounded-md mt-2 mb-2"/>
                <br/>
                <br/>
                <p>You have no account so <Link href="/register" className="text-blue-500 underline">Create Your Account</Link></p>
                <br/>

                <button className="w-[100%] h-[30px] bg-bgg_base text-white rounded-lg">Login</button>
            </div>
        </section>
    </>
  )
}

export default page