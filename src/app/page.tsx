'use client'
import React from 'react'
import Navbar from './components/Navbar';
import Image from 'next/image';
import BlogPost from './components/CommentSection';
import Link from 'next/link';
import FooterSection from './components/Footer';

const Blogging = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div id='home' className="relative overflow-hidden bg-gradient-to-r from-[#0077b6] to-[#000814] h-screen w-screen">
        {/* Background Animation */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0077b6] to-[#000814] animate-pulse"></div>

        {/* Content */}
        <div className="absolute font-poppins lg:top-[25%] top-[20%] lg:left-[10%] lg:right-[10%] px-5 text-white text-center">
          <h1 className="text-slate-900 font-extrabold text-5xl lg:text-6xl tracking-tight dark:text-white  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
            Build Faster, Modern Websites with Tailwind CSS
          </h1>
          <p className="lg:text-[20px] text-[23px] font-normal lg:px-5 px-2 text-gray-400 py-10">
            <span className="text-[#00b4d8] font-extrabold">Tailwind CSS</span> is a utility-first CSS framework that allows developers to build
            <span className="font-bold"> modern, responsive designs </span>without writing traditional CSS. Unlike frameworks like
            <span className="text-[#00b4d8] font-extrabold"> Bootstrap</span>, which provide pre-designed components, Tailwind focuses on giving you
            <span className="text-[#00b4d8] font-extrabold"> building blocks</span> to create
            <span className="text-[#00b4d8] font-extrabold"> custom designs efficiently</span>.
          </p>
          <Link href="#categories">
            <button className="font-semibold bg-gradient-to-r from-blue-500 to-pink-500 hover:border-none lg:text-[15px] text-[17px] lg:py-3 lg:px-6 px-10 py-4 rounded hover:scale-110 ease-in-out duration-100">
             Get Started
            </button>
          </Link>
        </div>
      </div>

      {/* Introduction Section */}
      <section id='introduction' className="bg-[#1b263b] h-fit-content w-screen pb-20">
        <h1 className="lg:text-5xl text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 font-extrabold text-center lg:pb-16 pb-10 pt-20">Introduction</h1>
        <p className="text-[20px] text-center px-5 md:px-10 lg:py-5 py-0 text-gray-400">
          "Creating a responsive website has become essential in today's world, where users access the web on a variety of devices. From desktops to smartphones, ensuring your layout adapts seamlessly to every screen size can feel overwhelming. But with Tailwind CSS, responsive design becomes intuitive and effortless. Tailwind’s mobile-first approach and utility-first classes make it easy to build websites that look great on any device. In this blog, we’ll explore some practical tips and tricks for mastering responsive design using Tailwind CSS. Whether you’re a beginner or an experienced developer, these insights will help you create stunning, responsive layouts."
        </p>
        {/* Author Section */}
        <div className="flex justify-center items-center lg:mt-5 mt-8">
          <Image
            src="/images/profile.jpg"
            height={130}
            width={130}
            alt="Profile"
            className="rounded-full lg:h-[130px] lg:w-[130px] h-[110px] w-[110px]"
          />
          <div className='ml-5 mb-10'>        
          <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 font-extrabold text-center  ">Adam Wathan</h1>
          <h2 className="text-[18px] text-gray-400 text-center ">Creator of Tailwind CSS</h2>
          </div>
  
        </div>
      </section>
     {/* About Section */}
     <section id="about" className="h-auto w-full bg-slate-700 py-10 text-center pb-20">
  <h1 className="text-6xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 font-extrabold text-center pt-10">
    About
  </h1>
  <div className="flex flex-col-reverse md:flex-row items-center w-full px-4 md:px-20 mt-10 gap-10">
    {/* Left Section: Adam's Info */}
    <div className="text-left space-y-6 w-full md:w-[60%] ">
      <h1 className="font-bold text-3xl text-center md:text-4xl  lg:text-left ">
        <span className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
          Adam Wathan
        </span>
        <br />
        <span className="text-gray-400 text-lg md:text-2xl">
          Creator of Tailwind CSS
        </span>
      </h1>

      <div className="text-gray-400 text-[20px] lg:text-left text-center lg:px-0 px-2">
        <p>
          <span className="font-bold">Adam Wathan</span> has a background in{" "}
          <span className="font-bold">PHP</span> and{" "}
          <span className="font-bold">Laravel</span>, and he created Tailwind
          to solve issues he encountered with other CSS frameworks. He is also
          behind <span className="font-bold">Alpine.js</span>, a minimal
          JavaScript framework. As an advocate for{" "}
          <span className="font-bold">open-source software</span>, Adam’s work
          has significantly influenced web design by streamlining development
          and making it easier to create scalable, modern websites.
        </p>
      </div>
    </div>

    {/* Right Section: Image */}
    <div className="flex items-center justify-center w-full md:w-[40%]">
      <Image
        src="/images/profile.jpg"
        height={270}
        width={270}
        alt="Profile"
        className="rounded-full object-cover  max-w-xs md:max-w-sm"
      />
    </div>
  </div>
</section>



  <section id='categories' className="max-h-fit w-screen bg-slate-600 overflow-hidden lg:pt-20 pt-16">
  <h1 className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 font-extrabold text-center py-5">Important Topics</h1>
  {/* Grid Container */}
  <div className=' flex justify-center items-center'>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 w-full max-w-6xl">
    {/* Box Items */}
    <div className="bg-gray-700 flex flex-col justify-between items-center text-white font-semibold p-6 rounded-md shadow-lg">
      <p className="text-2xl font-extrabold mt-4  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 ">
      Hover and Focus States
      </p>
      <pre className="bg-gray-800 text-gray-200 text-bas p-4 w-full overflow-auto rounded-md border border-gray-600 mt-4">
        {`<a
  href="#"
  class="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
>
  Hover over me!
</a>
`}
      </pre>
      <p className="text-lg text-gray-400 mt-4">
      Highlight the ease of adding interactive states with Tailwind’s {" "}
        <code className="bg-gray-800 p-1 rounded text-gray-300">hover:</code>and{" "}
        <code className="bg-gray-800 p-1 rounded text-gray-300">focus:</code> variants.{" "}
      </p>
    </div>

    <div className="bg-gray-700 flex flex-col justify-between items-center text-white font-semibold p-6 rounded-md shadow-lg">
      <p className="text-2xl font-extrabold mt-4  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 ">
      Grid Layout
      </p>
      <pre className="bg-gray-800 text-gray-200 text-base p-4 w-full overflow-auto rounded-md border border-gray-600 mt-4">
        {`<div class="grid grid-cols-3 gap-4">
  <div class="bg-blue-500 h-20">Grid Item 1</div>
  <div class="bg-green-500 h-20">Grid Item 2</div>
  <div class="bg-red-500 h-20">Grid Item 3</div>
</div>
`}
      </pre>
      <p className="text-lg text-gray-400 mt-4">
      Grid Layout: Tailwind’s {" "}
        <code className="bg-gray-800 p-1 rounded text-gray-300">grid</code> utility creates{" "}
        <code className="bg-gray-800 p-1 rounded text-gray-300">responsive </code> {" "}
        <code className="bg-gray-800 p-1 rounded text-gray-300">multi-column  </code>  layouts. {" "}
      </p>
    </div>

    <div className="bg-gray-700 flex flex-col justify-between items-center text-white font-semibold p-6 rounded-md shadow-lg">
      <p className="text-2xl font-extrabold mt-4  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 ">
        Flexbox Layout
      </p>
      <pre className="bg-gray-800 text-gray-200 text-base p-4 w-full overflow-auto rounded-md border border-gray-600 mt-4">
        {`<div class="flex space-x-4">
  <div class="w-1/3 h-20 bg-blue-500">Item 1</div>
  <div class="w-1/3 h-20 bg-green-500">Item 2</div>
  <div class="w-1/3 h-20 bg-red-500">Item 3</div>
</div>
`}
      </pre>
      <p className="text-lg text-gray-400 mt-4">
      Flexbox Layout: Tailwind’s  {" "}
        <code className="bg-gray-800 p-1 rounded text-gray-300">flex </code> utility aligns items with{" "}
        <code className="bg-gray-800 p-1 rounded text-gray-300">flexible spacing</code> .{" "}
    
      </p>
    </div>


    <div className="bg-gray-700 flex flex-col justify-between items-center text-white font-semibold p-6 rounded-md shadow-lg">
      <p className="text-2xl font-extrabold mt-4  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 ">
        Utility-First CSS Basics
      </p>
      <pre className="bg-gray-800 text-gray-200 text-base p-4 w-full overflow-auto rounded-md border border-gray-600 mt-4">
        {`<div class="flex items-center justify-center h-screen bg-gray-200">
  <h1 class="text-4xl font-bold text-blue-500">Hello, Tailwind CSS!</h1>
</div>`}
      </pre>
      <p className="text-lg text-gray-400 mt-4">
        This example shows how Tailwind simplifies centering elements using the{" "}
        <code className="bg-gray-800 p-1 rounded text-gray-300">flex</code>,{" "}
        <code className="bg-gray-800 p-1 rounded text-gray-300">items-center</code>, and{" "}
        <code className="bg-gray-800 p-1 rounded text-gray-300">justify-center</code> utilities.
      </p>
    </div> 


    <div className="bg-gray-700 flex flex-col justify-between items-center text-white font-semibold p-6 rounded-md shadow-lg">
      <p className="text-2xl font-extrabold mt-4  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 ">
        Gradients and Backgrounds
      </p>
      <pre className="bg-gray-800 text-gray-200 text-base p-4 w-full overflow-auto rounded-md border border-gray-600 mt-4">
        {`<div class="h-64 w-full bg-gradient-to-r from-blue-500 to-green-500">
  <h1 class="text-white text-center font-bold text-xl py-20">Gradient Background</h1>
</div>
`}
      </pre>
      <p className="text-lg text-gray-400 mt-4">
        Illustrate how to create eye-catching {" "}
        <code className="bg-gray-800 p-1 rounded text-gray-300">Gradients</code> using{" "}
        <code className="bg-gray-800 p-1 rounded text-gray-300">Tailwind</code> .{" "}
      </p>
    </div>


    <div className="bg-gray-700 flex flex-col justify-between items-center text-white font-semibold p-6 rounded-md shadow-lg">
      <p className="text-2xl font-extrabold mt-4  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 ">
      Animation with Tailwind
      </p>
      <pre className="bg-gray-800 text-gray-200 text-base p-4 w-full overflow-auto rounded-md border border-gray-600 mt-4">
        {`<div class="w-32 h-32 bg-blue-500 animate-pulse"></div>`}
      </pre>
      <p className="text-lg text-gray-400 mt-4">
        Show how to add simple {" "}
        <code className="bg-gray-800 p-1 rounded text-gray-300">animations</code> using Tailwind's{" "}
        <code className="bg-gray-800 p-1 rounded text-gray-300">animate- </code> classes.{" "}
      </p>
    </div>

    <div className="bg-gray-700 flex flex-col justify-between items-center text-white font-semibold p-6 rounded-md shadow-lg">
<p className="text-2xl font-extrabold mt-4  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 ">
  Responsive Design  
</p>
<pre className="bg-gray-800 text-gray-200 text-base p-4 w-full overflow-auto rounded-md border border-gray-600 mt-4">
  {`<h1 class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
Responsive Typography with Tailwind CSS
</h1>`}
</pre>
<p className="text-lg text-gray-400 mt-4">
Demonstrate how Tailwind makes responsive design intuitive with its breakpoint prefixes {" "}
  <code className="bg-gray-800 p-1 rounded text-gray-300">sm:</code> ,{" "}
  <code className="bg-gray-800 p-1 rounded text-gray-300">md:</code> , and{" "}
  <code className="bg-gray-800 p-1 rounded text-gray-300">lg:</code> etc.)
</p>
</div>

    <div className="bg-gray-700 flex flex-col justify-between items-center text-white font-semibold p-6 rounded-md shadow-lg">
      <p className="text-2xl font-extrabold mt-4  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 ">
      Dark Mode Toggle
      </p>
      <pre className="bg-gray-800 text-gray-200 text-base p-4 w-full overflow-auto rounded-md border border-gray-600 mt-4">
        {`<div class="bg-white dark:bg-gray-800 text-black dark:text-white p-4">
  <h1 class="text-xl">This is a dark mode example</h1>
  <p>Switch your system to dark mode to see the changes.</p>
</div>
`}
      </pre>
      <p className="text-lg text-gray-400 mt-4">
      Discuss how to enable and use {" "}
        <code className="bg-gray-800 p-1 rounded text-gray-300">dark mode</code> in Tailwind CSS{" "}
      </p>
    </div>

    <div className="bg-gray-700 flex flex-col justify-between items-center text-white font-semibold p-6 rounded-md shadow-lg">
      <p className="text-2xl font-extrabold mt-4  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 ">
      Text Gradient
      </p>
      <pre className="bg-gray-800 text-gray-200 text-sm p-4 w-full overflow-auto rounded-md border border-gray-600 mt-4">
        {`<div class="w-32 h-32 bg-blue-500 animate-pulse"></div>`}
      </pre>
      <p className="text-lg text-gray-400 mt-4">
      Text Gradient: Tailwind’s {" "}
        <code className="bg-gray-800 p-1 rounded text-gray-300">bg-gradient-to-r</code> and{" "}
        <code className="bg-gray-800 p-1 rounded text-gray-300">text-transparent </code> utilities allow you to apply gradient colors to text, creating stunning visual effects.{" "}
      </p>
    </div>

 
  </div>
  </div>
  
</section>



<section id='comment' className='max-h-fit w-screen bg-gradient-to-r from-blue-500 to-pink-500 lg:pt-20 pt-16'><BlogPost /></section>
{/* Contact Section */}


<section id='contact' className="h-screen w-screen bg-gradient-to-r from-blue-500 to-pink-500 flex items-center justify-center">
  <div className="bg-white/20 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md mt-16">
    <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-6">Contact Us</h1>
    <form action="" className="space-y-6">
      {/* Username Input */}
      <div className="relative">
        <input
          type="text"
          placeholder="Username"
          required
          className="w-full p-4 pl-4 bg-white/90 text-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
        />
        <i className="absolute left-4 top-1/2 transform -translate-y-1/2 bx bx-user-rectangle text-gray-500 text-xl"></i>
      </div>

      {/* Email Input */}
      <div className="relative">
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full p-4 pl-4 bg-white/90 text-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
        />
        <i className="absolute left-4 top-1/2 transform -translate-y-1/2 bx bx-envelope text-gray-500 text-xl"></i>
      </div>

      {/* Message Textarea */}
      <div className="relative">
        <textarea
          placeholder="Your Message"
          required
          className="w-full p-4 bg-white/90 text-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-pink-500 text-white p-3 rounded-lg shadow-md  hover:scale-110 ease-in-out duration-100 font-bold"
      >
        Send Message
      </button>
    </form>
  </div>
</section>

 <FooterSection />

    </>
  );
}

export default Blogging;



