import React from 'react'
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const FooterSection = () => {
  return (
    <section  className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Footer Content */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Column 1 - Logo and Description */}
          <div className="flex flex-col items-center sm:items-start">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
              Your Blog
            </h2>
            <p className="mt-2 text-gray-400 text-start lg:w-[100%] w-[180px] lg:pl-0 pl-7 sm:text-left">
              Sharing the best tips and tricks for web development using Tailwind CSS. Stay tuned for more.
            </p>
          </div>

          {/* Column 2 - Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-1">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-blue-500">Home</Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-blue-500">About</Link>
              </li>
              <li>
                <Link href="#categories" className="text-gray-400 hover:text-blue-500">Categories</Link>
              </li>
              <li>
                <Link href="#comment" className="text-gray-400 hover:text-blue-500">Comments</Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-blue-500">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Social Media */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className=" mt-4 space-y-2 ">
              <Link href="https://www.facebook.com/profile.php?id=61556128057734" target='_blank'  className="flex items-center text-gray-400 hover:text-blue-500">
                <FaFacebook size={24} className="mr-2" />
                Facebook
              </Link>
              <Link href="twitter.com" target='_blank'  className="flex items-center text-gray-400 hover:text-blue-500">
                <FaTwitter size={24} className="mr-2 " />
                Twitter
              </Link>
              <Link href="https://www.instagram.com/jasmineshamim4/" target='_blank' className="flex items-center text-gray-400 hover:text-blue-500">
                <FaInstagram size={24} className="mr-2" />
                Instagram
              </Link>
              <Link href="https://www.linkedin.com/in/jasmine-sheikh-8116b62ba/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BWzoFOxmkS5C04p6TtKvt5g%3D%3D" target='_blank' className="flex items-center text-gray-400 hover:text-blue-500">
                <FaLinkedin size={24} className="mr-2" />
                LinkedIn
              </Link>
            </div>
          </div>

          {/* Column 4 - Contact */}
          <div className="flex flex-col items-center sm:items-start ">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <p className="mt-4 text-gray-400">Email: 
            <br />
            <Link href="kainatsheikh349@gmail.om" className="text-blue-500">blog@gmail.om</Link></p>
            <p className="text-gray-400">Phone: 
            <br />
             03448219806</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Jasmine Sheikh Blog. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}

export default FooterSection;
