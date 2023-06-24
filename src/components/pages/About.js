// import "./styles/About.css";
import React, { useEffect } from "react";
import "tailwindcss/tailwind.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";


const About = () => {

  const teamMembers = [
    {
      name: "John Doe",
      role: "Founder",
      image: "./assets/vertical.jpg",
    },
    {
      name: "Jane Smith",
      role: "Designer",
      image: "./assets/vertical.jpg",
    },
    
    {
      name: "Jane Smith",
      role: "Designer",
      image: "./assets/vertical.jpg",
    },
    {
      name: "Jane Smith",
      role: "Designer",
      image: "./assets/vertical.jpg",
    },
    {
      name: "Jane Smith",
      role: "Designer",
      image: "./assets/vertical.jpg",
    },
    {
      name: "Jane Smith",
      role: "Designer",
      image: "./assets/vertical.jpg",
    },
   
   

  ];

 


  return (
    <>
    
      <div>
        <div className="card text-bg-dark">
          <img
            src="/assets/horizontal.jpg"
            className="card-img"
            alt="hero"
            style={{ height: "550px" }}
          />
          <div className="card-img-overlay d-flex flex-column justify-content-end">
            <div className="container">
              <h5 className="card-title display-2 fw-bolder mb-0 text font-extrabold " >
                ABOUT BHOOKLAGI
              </h5>
              <p className="card-text lead fs-2">CheckOut Our Work</p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap justify-center">
        <div class="w-full sm:w-1/2 p-4">
          <img
            src="./assets/abt.jpg"
            class="p-7 ml-16 mt-5"
            alt="Image"
            style={{ height: "400px", width: "600px" }}
          />
        </div>
        <div class="w-full sm:w-1/2 p-4 self-center">
          <p class="p-7 text-1xl leading-loose" >
            At BhookLagi, we believe that ordering food online should be easy,
            fast, and fun. That's why we've made it our mission to connect
            hungry people with the best local restaurants in their area. Whether
            you're craving pizza, sushi, or something else entirely, we've got
            you covered. We also offer a variety of payment options, so you can choose the one
            that's most convenient for you. So why wait? Download the BhookLagi
            app today and start enjoying delicious food from the comfort of your
            own home...
          </p>
        </div>
      </div>
      

      <h1 class='text-7xl text-center font-semibold mb-16'>Our Values</h1>
      
      <Splide
      className="splide"
      options={{
        type: "carousel",
        perPage: 1,
        autoplay: true,
        interval: 3000,
        pauseOnHover: false,
        breakpoints: {
          640: {
            perPage: 1,
          },
          768: {
            perPage: 2,
          },
        },
      }}
    >
      <SplideSlide>
        <div className="flex items-center bg-slate-100">
          <div className="w-full sm:w-1/2">
            <img
              src="./assets/slider-3.jpg"
              alt="Image 1"
              className="ml-28 "
              style={{ height: "500px", width: "500px" }}
            />
          </div>
          <div className="w-full sm:w-1/2 pr-28">
            <h1 className="text-center text-5xl my-4 font-medium" style={{fontFamily:"Roboto"}}>Get 1% Better Everyday</h1>
            <p class='text-lg leading-normal'>
              Very often the improvements we make may not show results right away.It's important to stay resilient and always ask ourselves-what's that one thing we can do better today.
            </p>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="flex items-center bg-slate-100">
          <div className="w-full sm:w-1/2">
            <img
              src="./assets/slider-4.jpg"
              alt="Image 2"
              className="ml-28 "
              style={{ height: "500px", width: "500px" }}
            />
          </div>
          <div className="w-full sm:w-1/2 pr-28">
            <h1 className="text-center text-5xl my-4 font-medium" style={{fontFamily:"Roboto"}}>Decide fast, take risks, get it done</h1>
            <p class='text-lg leading-normal'>
              We must not be afraid to make decisions and take action, even when we face uncertainty. We learn from mistakes, keep iterating and always focus on execution.
            </p>
          </div>
        </div>
      </SplideSlide>
      {/* Add more slides here */}
      <SplideSlide>
        <div className="flex items-center bg-slate-100">
          <div className="w-full sm:w-1/2">
            <img
              src="./assets/slider-5.jpg"
              alt="Image 2"
              className="ml-28 "
              style={{ height: "500px", width: "500px" }}
            />
          </div>
          <div className="w-full sm:w-1/2 pr-28">
            <h1 className="text-center text-5xl my-4 font-medium" style={{fontFamily:"Roboto"}}>Stay Humble</h1>
            <p class='text-lg leading-normal'>
              We've all got room to improve, so we need to stay self-critical and maintain a low ego. Listen to all the views in the room, and remember that both individually and as a company, there's always room for growth.
            </p>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="flex items-center bg-slate-100">
          <div className="w-full sm:w-1/2">
            <img
              src="./assets/slider-6.jpg"
              alt="Image 2"
              className="ml-28 "
              style={{ height: "500px", width: "500px" }}
            />
          </div>
          <div className="w-full sm:w-1/2 pr-28">
            <h1 className="text-center text-5xl my-4 font-medium" style={{fontFamily:"Roboto"}}>Own It</h1>
            <p class='text-lg leading-normal'>
             We believe in owning the problems we encounter, even when they stretch past our own areas of expertise. We stay accountable and focus on solutions, and don't make excuses. We own the things we say and do, and are accountable for the outcomes.
            </p>
          </div>
        </div>
      </SplideSlide>
      
    </Splide>
 





      
      
      <h1 class='text-7xl text-center mt-28 font-semibold'>Our Team</h1>
      <h2 class='text-3xl text-center m-3 font-serif'>The Webbers</h2>


      
      <section className="py-16 px-12">
      <div className="container mx-auto flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-32">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden group"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-60 h-60 p-3 object-cover transition duration-300 ease-in-out transform group-hover:-translate-y-6 hover:cursor-pointer"
              />
              <div className="p-12">
                <h3 className="text-lg font-medium">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  


    </>
  );
};

export default About;
