import React from 'react'

const CertificationCard = ({certification}) => {
  return (
    <div className='rounded-xl backdrop-blur-md border max-w-[400px] pt-5 px-5'>
      <Image
        src={certification.image}
        width="500"
        height="500"
        alt={certification.name}
        className="rounded-2xl"
      />
      <div className="py-5">
        <h1 className='font-semibold'>{certification.name}</h1>
        <h2 className='text-gray-400 text-sm'>{certification.provider}</h2>
      </div>
      <div className="flex justify-between">
        <div className="bg-gray-200 px-3 py-2 rounded-tr-xl">
          Link
        </div>
        <div className="bg-gray-200 px-3 py-2 rounded-tl-xl">
          Know More
        </div>
      </div>
    </div>
  )
}

export default CertificationCard
