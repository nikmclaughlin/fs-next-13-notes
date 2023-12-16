import Image from 'next/image'

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold m-4">Home Page</h1>
      <p className="text-lg">
        Now with <span className="text-yellow-300">content</span>
      </p>
    </>
  )
}
