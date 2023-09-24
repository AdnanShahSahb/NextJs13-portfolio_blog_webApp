import Image from 'next/image'
import React from 'react'

interface PageProps {
  params: {
    theId: string
  }
}


interface ArrTypes {
  _id: string,
  url: string,
  heading: string,
  para: string,
  desc: string,
  blogBy: string,
  blogByImg: string,
}

const getData = async (theIdParam: string): Promise<ArrTypes> => {
  const res = await fetch(process.env.MY_URL + '/api/posts/' + theIdParam, { cache: 'no-store' })
  return res.json()
}

export const generateMetadata = async ({ params }: PageProps) => {
  const post = await getData(params.theId)
  return {
    title: `${post?.heading} blog | Adnan Shah`,
    description: `${post?.para}`
  }
}


const page = async ({ params }: PageProps) => {
  const data = await getData(params.theId as string) as ArrTypes
  console.log(params.theId);
  // const searchParams = useSearchParams()
  // const url = searchParams.get('url');
  // const heading = searchParams.get('heading');
  // const para = searchParams.get('para');
  // const desc = searchParams.get('desc');
  // const blogBy = searchParams.get('blogBy');
  // const blogByImg = searchParams.get('blogByImg');

  const url = data.url
  const blogBy = data.blogBy
  const heading = data.heading
  const desc = data.desc
  const blogByUrl = data.blogByImg
  // console.log(data.url, data.blogBy, data.heading, data.desc);
  console.log(data);


  return (
    <div className='flex flex-col gap-10 my-16'>
      <div className='flex max-sm:flex-col-reverse gap-4'>
        <div className='flex-1 flex flex-col max-sm:gap-4 justify-between'>
          <h1 className='text-3xl font-bold'>{data.heading}</h1>
          <p className='text-sm'>{data.para}</p>
          <div className=' flex items-center gap-3'>
            <Image src={blogByUrl || '/' + '/images/illustration.png' as string} className='h-10 w-10 rounded-full' alt={`blogSpecificImg${heading || 'asdf'}`} height={20} width={20} />
            <label>{blogBy || 'asdf'}</label>
          </div>
        </div>
        <div className='sm:flex-1 h-64  relative'>
          <Image src={url || '/' + '/images/illustration.png' as string} alt={`blogSpecificImg${heading || 'asdf'}`} fill={true} />
        </div>
      </div>
      <div className='text-justify'>{desc || 'asdf'}</div>
    </div>
  )
}

export default page