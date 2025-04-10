
function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-6">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
      <p className="text-sm">&copy; {new Date().getFullYear()} Dzwork. All rights reserved.</p>
      <div className="flex space-x-4">
        <a href="/" className="hover:text-gray-400 transition">Home</a>
        <a href="#projects" className="hover:text-gray-400 transition">Projects</a>
        <a href="#contact" className="hover:text-gray-400 transition">Contact</a>
      </div>
    </div>
  </footer>
  )
}

export default Footer