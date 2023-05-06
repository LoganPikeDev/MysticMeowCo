import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-screen grid place-content-center bg-gradient-to-br  from-purple-100 to-purple-300'>
      <Image src='/logo.jpeg' alt='Logo' height={250} width={250} className=' rounded-full' />
      <h1 className='text-center text-xl font-bold text-black'>Coming Soon!</h1>
      <h2 className='text-center font-bold'>Wax Melts And More!</h2>
    </div>
  )
}
