import Image from "next/image"

export default function HeroBanner() {
    return (
       <div className="w-full h-96 rounded-2xl bg-purple-500">
            <div className="flex justify-center items-center flex-col">
                <h1 className="text-3xl pt-5 text-white font-bold">Mystic Meow & Co.</h1>
                <Image src="/removed.png" width={250} height={250} alt={'logo'} />
                <h2 className="text-3xl pt-3 text-white font-bold">Grand Opening!</h2>
            </div>

       </div>
    )
}