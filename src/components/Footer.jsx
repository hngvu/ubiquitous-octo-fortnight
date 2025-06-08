const Footer = () => {
  return (
    <footer className="bg-[#18230F] text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Emperor Orchids</h2>
          <p className="leading-relaxed mb-4">
            Dedicated to delivering premium orchids with elegance and care. Rooted in quality, blossoming with passion.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-medium text-white mb-3">Shop</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#FFD700]">All Orchids</a></li>
            <li><a href="#" className="hover:text-[#FFD700]">New Arrivals</a></li>
            <li><a href="#" className="hover:text-[#FFD700]">Bestsellers</a></li>
            <li><a href="#" className="hover:text-[#FFD700]">Gift Sets</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-medium text-white mb-3">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#FFD700]">Orchid Care</a></li>
            <li><a href="#" className="hover:text-[#FFD700]">FAQs</a></li>
            <li><a href="#" className="hover:text-[#FFD700]">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-[#FFD700]">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-lg font-medium text-white mb-3">Get in Touch</h3>
          <p className="mb-2">Email: <a href="mailto:support@emperorchids.com" className="hover:text-[#FFD700]">support@emperorchids.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="hover:text-[#FFD700]">(123) 456-7890</a></p>
          <div className="flex space-x-4 mt-4 text-xl">
            <a href="#" className="hover:text-[#FFD700]"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-[#FFD700]"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-[#FFD700]"><i className="fab fa-pinterest-p"></i></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Emperor Orchids. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
