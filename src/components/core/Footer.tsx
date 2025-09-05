const locations = [
  {
    title: "Bali - Denpasar (Head)",
    address:
      "Jl. Tukad Batanghari No.55, Panjer, Denpasar Selatan, Kota Denpasar, Bali 80225",
  },
  {
    title: "Bali - Gianyar",
    address:
      "Jl. Dharma Giri No.777, Bitera, Kec. Gianyar, Kabupaten Gianyar, Bali 80581",
  },
  {
    title: "Surabaya",
    address:
      "Jl. Tenggilis Tengah III No.1, Kendangsari, Kec. Tenggilis Mejoyo, Surabaya, Jawa Timur 60231",
  },
  {
    title: "Surabaya - Citraland",
    address:
      "Ruko Palma Galeria, RA3 No.11, Sememi, Kec. Benowo, Surabaya, Jawa Timur 60198",
  },
  {
    title: "Jember",
    address: "Jl. Majapahit, Komplek Ruko Esplanade, no R-22 Kaliwates, Jember",
  },
  {
    title: "Banyuwangi",
    address:
      "NX Point Lt. 2, Jl. Kepiting No.7 Sobo, Kec. Banyuwangi, Banyuwangi, Jawa Timur 68418",
  },
  {
    title: "Sidoarjo",
    address: "Jl. Thamrin no 13, Sidokumpul, Kec. Sidoarjo",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-6 px-4 md:px-12 w-full flex justify-center items-center">
      <div className="flex flex-col w-full max-w-6xl">
        <div className="max-w-7xl mx-auto flex flex-row justify-between items-start gap-10 w-full flex-wrap sm:flex-nowrap">
          {/* Logo + Description */}
          <div className="flex flex-col gap-4 justify-start items-start w-full sm:w-fit sm:max-w-sm">
            <img
              src="/logo-white.webp"
              alt="Mediatech Indonesia"
              className="h-8 w-auto"
            />
            <p className="text-sm text-gray-300">
              Jelajahi setiap lini kehidupan penuh warna bersama Mediatech
              Indonesia
            </p>
          </div>
          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Home</li>
              <li>About Us</li>
              <li>Service</li>
              <li>Choose Us</li>
              <li>Testimonials</li>
            </ul>
          </div>
          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Contact Us</li>
              <li>Help Us</li>
              <li>Customer Center</li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>mediatech@company.com</li>
              <li>+62 8123-4567-8900</li>
            </ul>
          </div>
        </div>

        {/* Branch Locations */}
        <div className="mt-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 text-sm text-gray-300">
          {locations.map((loc, index) => (
            <div key={index}>
              <h5 className="font-semibold text-white mb-2">{loc.title}</h5>
              <div className="flex items-start gap-2">
                <img
                  src="/location-icon.webp"
                  alt="location icon"
                  className="w-4"
                />
                <p>{loc.address}</p>
              </div>
              <a
                href=""
                className="flex items-center gap-1 mt-1 text-[#06b6d4] cursor-pointer hover:underline"
              >
                <img
                  src="/to-maps-icon.webp"
                  alt="to maps icon"
                  className="w-4"
                />
                <span className="text-white opacity-80">Lihat di Peta</span>
              </a>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-gray-400">
          © 2025 Mediatech All Right Reserved
        </div>
      </div>
    </footer>
  );
}
