'use client'
import DashboardPosts from "@/components/Dasbhoard/DashboardPosts"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import useSWR, { KeyedMutator } from "swr"
// import connect from "@/utils/db";


// const getData = async () => {
//     try {
//         const fetchedDataResponse = await fetch(process.env.MY_URL + '/api/posts', { cache: 'no-store' })
//         if (!fetchedDataResponse.ok)
//             throw new Error('Data Not getted')
//         return fetchedDataResponse.json()
//     }
//     catch (err) {
//         console.log(err);
//     }
// }

// const getProjects = async () => {
//     // await connect();

//     try {
//         const fetchedProjectsResponse = await fetch(process.env.MY_URL + '/api/projects', { cache: 'no-store' })
//         if (!fetchedProjectsResponse.ok)
//             throw new Error('Project data not fetched')

//         return fetchedProjectsResponse.json()

//     }
//     catch (err) {
//         console.log(err);
//     }
// }



interface GetDataObj {
    _id: String
    url: String
    heading: String
    para: String
    desc: String
    blogBy: String
    blogByImg: String
    createdAt: String
    updatedAt: String
    __v: String
}

interface mutate {
    mutate: any
}
const Page = () => {

    const session = useSession()
    const routing = useRouter()
    // const theData = await getData() as GetDataObj[]
    // const projectData = await getProjects() as GetDataObj[]


    // console.log(data);

    if (session.status == 'unauthenticated')
        routing.push('/dashboard/signin')


    if (session.status == 'loading')
        return <h1 className='flex items-center font-bold tracking-widest justify-center'>Loading...</h1>

    if (session.status == 'authenticated')
        return (
            <div className="flex flex-col gap-20 my-10">
                <DashboardPosts heading1='Your Posts' heading2='Add New Post' btnName='Post' />
                <span className="w-10 h-1 bg-gray-300 mx-auto"></span>
                <DashboardPosts heading1='Your Projects' heading2='Add New Project' btnName='Upload' />
            </div>
        )
}

export default Page