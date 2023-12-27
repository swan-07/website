import React, {useContext, useState, useEffect} from 'react'

import Link from 'next/link';

import { getCategories } from '../services'
  
import { useRouter } from 'next/router';


const Header = () => {
  const router = useRouter();

const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
    }, []);


  return (
    <>
    <div className="container mx-auto px-10 mb-8">
        <div className="border-b w-full inline-block border-grey-400 py-8">
            <div className="md:float-left block">
                <Link href = "/">
                <span className="cursor-pointer font-bold text-4xl text-white no-underline">
                  Stephanie's Blog
                </span>
                </Link>
            </div>
            <div className ="hidden md:float-left md:contents">
                <Link href="/blog">
                    <span className="md:float-right mt-2 align-middle text-white ml-6 font-semibold cursor-pointer">
                    Blog Posts
                    </span>
                </Link>

                <Link href="/artgallery">
                    <span className="md:float-right mt-2 align-middle text-white ml-6 font-semibold cursor-pointer">
                    Art Gallery
                    </span>
                </Link>
                <Link href="/projects">
                    <span className="md:float-right mt-2 align-middle text-white ml-6 font-semibold cursor-pointer">
                    Projects
                    </span>
                </Link>
                <Link href="/welcome">
                    <span className="md:float-right mt-2 align-middle text-white ml-6 font-semibold cursor-pointer">
                    Home
                    </span>
                    </Link>
                    </div>
                    
        </div>
    </div>

    {(router.pathname === '/blog' || router.pathname.includes('/category'))&& 
  <       header className="container mx-auto px-10 mb-8">
            {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="mt-2 align-middle text-black ml-6 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </header>
      }
    </>
  )


}

export default Header