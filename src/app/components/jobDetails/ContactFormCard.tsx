export default function ContactFormCard() {
  return (
    <div className="bg-teal-50 rounded-2xl p-4">
      <h3 className="font-bold mb-2">Send Us Message</h3>

      <input className="bg-white border-2xl p-2 w-full mb-2" placeholder="Full Name" />
      <input className="bg-white border-2xl p-2 w-full mb-2" placeholder="Email Address" />
      <input className="bg-white border-2xl p-2 w-full mb-2" placeholder="Phone Number" />
      <textarea className="bg-white border-2xl p-2 w-full mb-2" placeholder="Message" />

      <button className="bg-green-600 text-white w-full py-2 rounded">
        Send Message
      </button>
    </div>
  );
}
