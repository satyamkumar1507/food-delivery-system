

export function Contactus() {

    return(
        <div className="w-[900px] flex flex-col mx-auto text-center p-4 shadow-2xl">
           <h1 className="font-bold text-2xl">Contact Us Page</h1>
           <form>
            <div className="flex flex-col mt-10">
             <label className="flex font-bold p-2">UserName</label>   
            <input type="text" className="border p-3" placeholder="Enter your Name" />
            <label className="flex font-bold p-2">Email</label>
            <input type="email" className="border p-3" placeholder="abc@gmail.com" />
            <label className="flex font-bold p-2">Address</label>
            <textarea className="border p-3" placeholder="Enter your Address"/>
            </div>
            <button className="p-2 bg-blue-700 text-white mt-6">Submit</button>
           </form>
        </div>
    )
}


// export default Contactus;