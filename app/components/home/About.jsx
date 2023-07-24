import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section className="bg-white py-12 sm:py-20">
      <div className="container mx-auto">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-normal text-center mb-4 sm:mb-8">
            About Us
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <Image width={500} height={300}
                src="https://images.unsplash.com/photo-1625076019815-b1a5f7e5ef1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                alt="About Us"
                className="w-full rounded-lg mb-4 px-4"
            />
          </div>

          <div className="md:w-1/2 md:pl-8 text-justify px-4 text-small">
            <p className=" mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                lobortis fermentum risus, id consectetur enim sollicitudin a.
                Proin mattis turpis in tincidunt malesuada.
            </p>
            <p className="mb-4">
                In eget vestibulum arcu. Aliquam at efficitur tellus. Proin
                commodo est vitae ex aliquet, eu scelerisque dui finibus. Mauris
                malesuada pulvinar purus, sit amet tincidunt massa dignissim id.
            </p>
            <p className="mb-4">
                Sed vel massa aliquet, condimentum mi a, vulputate nisl. Donec
                commodo congue risus nec interdum. Nunc convallis feugiat turpis,
                et vestibulum orci ullamcorper eu.
            </p>
        </div>

      </div>
    </div>
  </section>
  )
}

export default About