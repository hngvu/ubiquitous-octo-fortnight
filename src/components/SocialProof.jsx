import SocialPost from '../assets/social-post-1.png'

const SocialProof = () => {
  return (
    <section className="testimonials py-16 bg-[#E0E7D2]"> {/* A light green background to complement */}
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-12 text-[#18230F]">What Our Customers Are Saying</h2>
    {/* Testimonial Carousel - Implement with a library */}
    <div className="max-w-3xl mx-auto">
      {/* Testimonial 1 */}
      <div className="testimonial-card bg-white p-8 rounded-lg shadow-lg mb-8">
        <p className="text-lg italic text-gray-700 mb-4">&quot;Absolutely stunning orchids and incredible customer service! My orchid arrived perfectly packaged and looks gorgeous.&quot;</p>
        <div className="flex items-center justify-center">
          <img src="https://cdn.expertphotography.com/wp-content/uploads/2019/04/female-face-girl-posing-outdoors-in-natural-light.jpg" alt="Customer Avatar" className="w-12 h-12 rounded-full mr-4" />
          <p className="font-semibold text-[#18230F]">- Jane Doe</p>
        </div>
      </div>

      {/* Testimonial 2 (Repeat for more testimonials) */}
      <div className="testimonial-card bg-white p-8 rounded-lg shadow-lg mb-8">
        <p className="text-lg italic text-gray-700 mb-4">&quot;The care tips on their blog helped me keep my orchid alive for months. Their products are top-notch!&quot;</p>
        <div className="flex items-center justify-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRROY6iasJSWW0mWpFuA1AGnKpdb68PfXfWMg&s" alt="Customer Avatar" className="w-12 h-12 rounded-full mr-4" />
          <p className="font-semibold text-[#18230F]">- Mark Smith</p>
        </div>
      </div>
      {/* Add more testimonials */}
    </div>
    
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6 text-[#18230F]">Join Our Orchid Community on Instagram!</h3>
      {/* Placeholder for Instagram feed integration */}
      <div className="instagram-grid grid grid-cols-2 md:grid-cols-4 gap-4">
        <img src={SocialPost} alt="Instagram Post 1" className="w-full h-auto rounded-lg" />
        <img src={SocialPost} alt="Instagram Post 2" className="w-full h-auto rounded-lg" />
        <img src={SocialPost} alt="Instagram Post 3" className="w-full h-auto rounded-lg" />
        <img src={SocialPost} alt="Instagram Post 4" className="w-full h-auto rounded-lg" />
      </div>
      <a href="#" className="mt-8 inline-block bg-[#18230F] text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-colors">Follow Us on Instagram</a>
    </div>
  </div>
</section>
  )
}

export default SocialProof