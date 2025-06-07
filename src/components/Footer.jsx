import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#18230F] text-gray-300 py-12">
  <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
    {/* Company Information */}
    <div>
      <h3 className="text-xl font-bold mb-4 text-white">Emperor Orchids</h3>
      <p className="text-sm mb-4">Your premier destination for exquisite orchids and expert care.</p>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:text-[#ffd700]">About Us</a></li>
        <li><a href="#" className="hover:text-[#ffd700]">Contact Us</a></li>
        <li><a href="#" className="hover:text-[#ffd700]">FAQs</a></li>
        <li><a href="#" className="hover:text-[#ffd700]">Privacy Policy</a></li>
        <li><a href="#" className="hover:text-[#ffd700]">Terms & Conditions</a></li>
      </ul>
    </div>

    {/* Customer Service */}
    <div>
      <h3 className="text-xl font-bold mb-4 text-white">Customer Service</h3>
      <ul className="space-y-2 text-sm">
        <li>Phone: <a href="tel:+1234567890" className="hover:text-[#ffd700]">(123) 456-7890</a></li>
        <li>Email: <a href="mailto:support@emperororchids.com" className="hover:text-[#ffd700]">support@emperorchids.com</a></li>
        <li><a href="#" className="hover:text-[#ffd700]">Live Chat</a> (Coming Soon)</li>
        <li><a href="#" className="hover:text-[#ffd700]">Shipping & Returns</a></li>
      </ul>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:text-[#ffd700]">Shop All Orchids</a></li>
        <li><a href="#" className="hover:text-[#ffd700]">New Arrivals</a></li>
        <li><a href="#" className="hover:text-[#ffd700]">Bestsellers</a></li>
        <li><a href="#" className="hover:text-[#ffd700]">Orchid Care Blog</a></li>
      </ul>
    </div>

    {/* Social Media & Payment */}
    <div>
      <h3 className="text-xl font-bold mb-4 text-white">Connect With Us</h3>
      <div className="flex space-x-4 mb-6">
        {/* Replace with actual SVG icons for better styling */}
        <a href="#" className="text-white hover:text-[#ffd700] text-2xl"><i className="fab fa-instagram"></i></a>
        <a href="#" className="text-white hover:text-[#ffd700] text-2xl"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="text-white hover:text-[#ffd700] text-2xl"><i className="fab fa-pinterest"></i></a>
      </div>
      <h3 className="text-xl font-bold mb-4 text-white">Secure Payments</h3>
      <div className="flex flex-wrap gap-3">
        {/* Replace with actual payment gateway SVG icons */}
        <img src="https://cdn-icons-png.flaticon.com/512/217/217425.png" alt="Visa" className="h-6" />
        <img src="https://www.mastercard.com/content/dam/public/mastercardcom/vn/vi/logos/mastercard-og-image.png" alt="Mastercard" className="h-6" />
        <img src="https://i.vimeocdn.com/video/1927593602-7385234439cae4a5452fec1d755591450b1afed012efb803cfe73a2464914cd1-d?f=webp" alt="PayPal" className="h-6" />
        {/* Add more payment icons as needed */}
      </div>
    </div>
  </div>

  <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
    <p>&copy; {new Date().getFullYear()} Emperor Orchids. All rights reserved.</p>
  </div>
</footer>
  )
}

export default Footer