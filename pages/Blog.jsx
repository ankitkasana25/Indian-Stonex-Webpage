import React from 'react'
import OtherHeroSection from '../components/OtherHeroSection'
import BlogSection from '../components/BlogSection'
import { useRef } from 'react'

const Blog = () => {
  const blogRef = useRef(null);
  return (
    <div>
      <OtherHeroSection scrollToBlog={() => blogRef.current?.scrollIntoView({ behavior: 'smooth' })} />

      <div ref={blogRef}>
        <BlogSection title={'Our Latest Blog Post'} />
      </div>

      <BlogSection title={'Our Trending Blog Posts'} />

    </div>
  )
}

export default Blog