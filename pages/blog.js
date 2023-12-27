import Head from "next/head";
import {PostCard, Categories, PostWidget} from '../components';
import {getPosts} from '../services'

// thank you to https://www.youtube.com/watch?v=HYv55DhgTuA
// and also https://www.youtube.com/watch?v=bmpI252DmiI 


export default function Home({posts}) {


  return (
    <div className="container mx-auto px-10 mb-8 bg-grey">
      <Head>
        <title>Stephanie's Blog</title>
        <link rel="icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgB8rWFWS8TcaThGawmA6PTiXVF6m4jwz-lw&usqp=CAU" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => <PostCard post = { post.node} key = {post.title} /> )}
        </div>
        <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
        </div>

      </div>
      

    </div>
    
  )
}

export async function getStaticProps(){
  const posts = (await getPosts()) || [];

  return {
    props: {posts}
  }
}