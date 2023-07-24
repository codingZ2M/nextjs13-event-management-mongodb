import React from 'react'
import Image from 'next/image'

const Service = () => {
  return (
    <section className="bg-white py-0  pb-12">
      <div className="container mx-auto">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-normal text-center mb-0">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <Image width={500} height={300}
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
              alt="Service 1"
              className="mx-auto mb-4"
            />
            <h3 className="text-small sm:text-xl font-bold mb-2">Event Planning</h3>
            <p className="text-gray-700 text-small text-justify">
              We offer comprehensive event planning services to ensure a
              seamless and successful event from start to finish.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <Image width={500} height={300}
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1498&q=80"
              alt="Service 2"
              className="mx-auto mb-4"
            />
            <h3 className="text-small sm:text-xl font-bold mb-2">Venue Management</h3>
            <p className="text-gray-700 text-small text-justify">
              Our team specializes in finding and managing the perfect venues
              for your events, ensuring a memorable experience for all attendees.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <Image width={500} height={300}
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Service 3"
              className="mx-auto mb-4"
            />
            <h3 className="text-small sm:text-xl font-bold mb-2">On-Site Support</h3>
            <p className="text-gray-700 text-small text-justify">
              We provide dedicated on-site support to handle logistics,
              technical setup, and other event requirements, ensuring a
              smooth execution.
            </p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Service