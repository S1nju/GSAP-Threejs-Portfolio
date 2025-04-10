
function Contact() {
  return (
    <section className="bg-gray-900 py-20">
    <div className="max-w-6xl mx-auto px-6 sm:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-white">Contact Us</h2>
        <p className="mt-4 text-lg text-gray-400">We’d love to hear from you. Reach out and we’ll get back to you as soon as we can.</p>
      </div>

      <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-xl shadow-xl">
        <form action="#" method="POST">
          <div className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name</label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="mt-2 px-6 py-4 border border-gray-700 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="mt-2 px-6 py-4 border border-gray-700 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                placeholder="youremail@example.com"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm font-medium text-gray-300">Your Message</label>
              <textarea
                id="message"
                name="message"

                required
                className="mt-2 px-6 py-4 border border-gray-700 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  )
}

export default Contact