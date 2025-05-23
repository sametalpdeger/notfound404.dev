import { SetScrollContainer } from '@/src/components/SetScrollContainer'
import Link from 'next/link'
import { Background } from './Background'

const Article = async () => {
    const posts: ({
        id: string
        title: string
        description: string
        date: string
        done: boolean
    } | {
        title: string
        done: boolean
    })[] = (await import('../posts.json')).default

    return (
        <div
            id='scroll-container'
            className='w-full h-full overflow-y-scroll bg-[#9b004c]'>
            <SetScrollContainer />
            <div className='pt-[5rem] pb-5 w-full justify-center items-center flex flex-col'>

                <Background>
                    {posts.length > 0 ? posts.map(post => {
                        if (post.done === true && 'id' in post && 'description' in post && 'date' in post) {
                            return <Link href={`/article/${post.id}`} key={post.id} className='hover:from-[#97004b54] bg-gradient-to-tr from-[#97004b29] to-[#9b045029] hover:to-[#751a4829] hover:bg-gradient-to-r  rounded-md hover:duration-300 p-3 flex flex-col gap-3'>
                                <div className='flex flex-col gap-4'>
                                    <div className='text-[1.2rem] font-bold'>{post.title}</div>
                                    <p className='text-sm'>{post.description}</p>
                                </div>


                                <div className='text-sm flex flex-row gap-2'>
                                    <div>{post.date}</div>
                                </div>
                            </Link>
                        } else if ('title' in post) {
                            return <div key={post.title} className=' flex flex-col  gap-1 p-3'>
                                <div className='text-[1.2rem] font-bold'>
                                    {post.title}
                                </div>
                                <div className='text-pink-700'>Still in progress</div>
                            </div>
                        }
                        return null
                    }) : <div className='text-center '>Looks like there are no posts yet :P</div>}
                </Background>
            </div>
        </div >
    )
}

export default Article