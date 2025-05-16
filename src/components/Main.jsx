
import Carousel from "./utils/Carousel"
import image2 from "../assets/image2.webp"
const Main =()=>{
    return (
        <section>
            {/* row 1 */}
            <div className="w-[80%] mx-auto">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1  p-4">
                        <img className="w-full h-full object-cover" src={image2} alt="" />
                    </div>
                    <div className="flex-1  p-4">
                         <div className="flex justify-between gap-4">
                            <h2 className="text-xl mb-2">PRODUCTOS PERUANOS</h2>
                            <a href="/categoria/aceite" className="text-blue-600 hover:underline">Ver mas</a>
                        </div>
                        
                        <div className="flex w-6/12 justify-between gap-4">
                            <a href="/categoria/aceite" className="text-black-600 hover:underline">Aceite |</a>
                            <a href="/categoria/aceite" className="text-black-600 hover:underline">Aceite |</a>
                            <a href="/categoria/aceite" className="text-black-600 hover:underline">Aceite |</a>
                        </div>
                        <Carousel />
                    </div>
                </div>
            </div>
            {/* row 2 */}
            <div className="w-[80%] mx-auto">
                <div className="flex flex-col md:flex-row gap-4">
                     <div className="flex-1  p-4">
                         <div className="flex justify-between gap-4">
                            <h2 className="text-xl mb-2">PRODUCTOS PERUANOS</h2>
                            <a href="/categoria/aceite" className="text-blue-600 hover:underline">Ver mas</a>
                        </div>
                        
                        <div className="flex w-6/12 justify-between gap-4">
                            <a href="/categoria/aceite" className="text-black-600 hover:underline">Aceite |</a>
                            <a href="/categoria/aceite" className="text-black-600 hover:underline">Aceite |</a>
                            <a href="/categoria/aceite" className="text-black-600 hover:underline">Aceite |</a>
                        </div>
                        <Carousel />
                    </div>
                    <div className="flex-1  p-4">
                        <img className="w-full h-full object-cover" src={image2} alt="" />
                    </div>
                   
                </div>
            </div>
            {/* row 3 */}
            <div className="w-[80%] mx-auto">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 bg-blue-200 p-4">
                        <img className="w-full h-full object-cover" src={image2} alt="" />
                    </div>
                    <div className="flex-1 bg-green-200 p-4">
                         <div className="flex justify-between gap-4">
                            <h2 className="text-xl mb-2">PRODUCTOS PERUANOS</h2>
                            <a href="/categoria/aceite" className="text-blue-600 hover:underline">Ver mas</a>
                        </div>
                        
                        <div className="flex w-6/12 justify-between gap-4">
                            <a href="/categoria/aceite" className="text-black-600 hover:underline">Aceite |</a>
                            <a href="/categoria/aceite" className="text-black-600 hover:underline">Aceite |</a>
                            <a href="/categoria/aceite" className="text-black-600 hover:underline">Aceite |</a>
                        </div>
                        <Carousel />
                    </div>
                </div>
            </div>
           {/* row 4 */}
            <div className="w-[80%] mx-auto">
                <div className="flex flex-col md:flex-row gap-4">
                    
                    <div className="flex-1 bg-green-200 p-4">
                         <div className="flex justify-between gap-4">
                            <h2>PRODUCTOS PERUANOS</h2>
                            <a href="/categoria/aceite" className="text-blue-600 hover:underline">Ver mas</a>
                        </div>
                        
                        <div className="flex justify-between gap-4">
                            <a href="/categoria/aceite" className="text-blue-600 hover:underline">Aceite</a>
                            <a href="/categoria/aceite" className="text-blue-600 hover:underline">Aceite</a>
                            <a href="/categoria/aceite" className="text-blue-600 hover:underline">Aceite</a>
                        </div>
                        <Carousel />
                    </div>
                    <div className="flex-1 bg-blue-200 p-4">
                        <h2>PROMOCIONES DE PRODUCTOS</h2>
                        <p>Columna 1</p>
                    </div>
                </div>
            </div>
            {/* row 5 */}
            <div className="w-[80%] mx-auto">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 bg-blue-200 p-4">
                        <h2>PROMOCIONES DE PRODUCTOS</h2>
                        <p>Columna 1</p>
                    </div>
                    <div className="flex-1 bg-green-200 p-4">
                         <div className="flex justify-between gap-4">
                            <h2>PRODUCTOS PERUANOS</h2>
                            <a href="/categoria/aceite" className="text-blue-600 hover:underline">Ver mas</a>
                        </div>
                        
                        <div className="flex justify-between gap-4">
                            <a href="/categoria/aceite" className="text-blue-600 hover:underline">Aceite</a>
                            <a href="/categoria/aceite" className="text-blue-600 hover:underline">Aceite</a>
                            <a href="/categoria/aceite" className="text-blue-600 hover:underline">Aceite</a>
                        </div>
                        <Carousel />
                    </div>
                </div>
            </div>
            {/* row 6 */}
            <div className="w-[80%] mx-auto">
                <div className="flex flex-col md:flex-row gap-4">
                    
                    <div className="flex-1 bg-green-200 p-4">
                         <div className="flex justify-between gap-4">
                            <h2>PRODUCTOS PERUANOS</h2>
                            <a href="/categoria/aceite" className="text-blue-600 hover:underline">Ver mas</a>
                        </div>
                        
                        <div className="flex justify-between gap-4">
                            <a href="/categoria/aceite" className="text-blue-600 hover:underline">Aceite</a>
                            <a href="/categoria/aceite" className="text-blue-600 hover:underline">Aceite</a>
                            <a href="/categoria/aceite" className="text-blue-600 hover:underline">Aceite</a>
                        </div>
                        <Carousel />
                    </div>
                    <div className="flex-1 bg-blue-200 p-4">
                        <h2>PROMOCIONES DE PRODUCTOS</h2>
                        <p>Columna 1</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Main

