const About = () => {
    return (
      <section className="bg-yellow-50 py-20">
        <div className="max-w-[1920px] mx-auto xl:px-28 md:px-10 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-between">
            <div className="">
            <h2 className="text-5xl font-bold text-error mb-6">OUR STORY</h2>
              <p className="text-lg font-semibold mb-4 text-justify">
                At our photography school, we are passionate about capturing moments and expressing creativity through the lens. We believe in the power of photography to tell stories, evoke emotions, and preserve memories.
              </p>
              <p className="text-lg font-semibold text-justify mb-4">
                Our dedicated team of experienced instructors is committed to providing top-quality education and guidance to aspiring photographers of all skill levels. 
                Whether you are a beginner looking to learn the basics or an advanced photographer seeking to refine your techniques, our classes cater to your specific needs.
              </p>
              <p className="text-lg font-semibold text-justify">
                Through our comprehensive curriculum, hands-on workshops, and engaging practical assignments, we aim to nurture your artistic vision, enhance your technical skills, and expand your understanding of the photographic medium.

              </p>
            </div>
            <div className="">
              <img src="https://img.freepik.com/free-photo/woman-man-looking-camera-photos_23-2148532473.jpg" alt="About Image" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  