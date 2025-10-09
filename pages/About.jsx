"use client"
import { useEffect, useRef, useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export default function AboutUs() {
  const heroRef = useRef(null)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [showAll, setShowAll] = useState(false) // show more toggle

  // ------------------- GALLERY IMAGES -------------------
 const images = [
  { src: "/gallery1.jpg", alt: "Intricate white marble temple carving detail" },
  { src: "/gallery2.jpg", alt: "Marble mandir with arches" },
  { src: "/gallery3.jpg", alt: "Handcrafted stone sculpture" },
  { src: "/gallery4.jpg", alt: "Custom stonework pillar" },
  { src: "/gallery5.jpg", alt: "Marble inlay floral pattern" },
  { src: "/gallery6.jpg", alt: "Temple entrance stone craft" },
  { src: "/gallery7.jpg", alt: "Traditional marble temple interior" },
  { src: "/gallery8.jpg", alt: "Detailed marble ceiling design" },
  { src: "/gallery9.jpg", alt: "Beautiful marble wall carving" },
  { src: "/gallery10.jpg", alt: "Grand marble temple entrance" },
  { src: "/gallery11.jpg", alt: "Decorative marble jali work" },
  { src: "/gallery12.jpg", alt: "Stone idols carved with precision" },
  { src: "/gallery13.jpg", alt: "Marble steps and flooring pattern" },
  { src: "/gallery14.jpg", alt: "Temple dome made of pure marble" },
  { src: "/gallery15.jpg", alt: "Elegant marble pillars with carving" },
  { src: "/gallery16.jpg", alt: "Modern marble wall installation" },
  { src: "/gallery17.jpg", alt: "Traditional marble pooja room setup" },
  { src: "/gallery18.jpg", alt: "White marble temple craftsmanship" },
  { src: "/gallery19.jpg", alt: "Detailed sculpture of deity in marble" },
  { src: "/gallery20.jpg", alt: "Ornamental marble arch design" },
  { src: "/gallery21.jpg", alt: "Custom-designed marble mandir" },
  { src: "/gallery22.jpg", alt: "Polished marble surface detail" },
  { src: "/gallery23.jpg", alt: "Intricate temple facade in stone" },
  { src: "/gallery24.jpg", alt: "Decorative marble panel work" },
  { src: "/gallery25.jpg", alt: "Carved marble backdrop design" },
  { src: "/gallery26.jpg", alt: "Luxurious marble pooja mandir" },
  { src: "/gallery27.jpg", alt: "Stone and marble pillar pattern" },
  { src: "/gallery28.jpg", alt: "Temple carving under natural light" },
  { src: "/gallery29.jpg", alt: "Traditional stone temple courtyard" },
  { src: "/gallery30.jpg", alt: "Temple statue carved from marble" },
  { src: "/gallery31.jpg", alt: "Decorative marble tiling work" },
  { src: "/gallery32.jpg", alt: "Beautiful handcrafted marble facade" },
  { src: "/gallery33.jpg", alt: "Divine white marble temple sculpture" },
  { src: "/gallery34.jpg", alt: "Custom marble temple craftsmanship" },
]


  // ------------------- FADE-IN ANIMATION -------------------
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.15 }
    )

    const sections = document.querySelectorAll(".fade-in-section")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  // ------------------- LIGHTBOX NAVIGATION -------------------
  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }
  const handleNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  // ------------------- DISPLAY LIMITED IMAGES INITIALLY -------------------
  const displayedImages = showAll ? images : images.slice(0, 6)

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* ---------------- HERO SECTION ---------------- */}
      <section
        ref={heroRef}
        className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-[#fff7f2] to-[#ffe8d9]"
      >
        <div className="absolute inset-0">
          <img
            src="/AboutUs.jpg"
            alt="Indian Stonex craftsmanship showcase"
            className="h-full w-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="max-w-4xl text-center text-white animate-fade-in-up">
            <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium tracking-wide backdrop-blur-sm">
              Since 2000
            </span>

            <h1 className="mt-6 font-semibold tracking-tight text-3xl sm:text-5xl md:text-6xl animate-slide-up">
              Indian{" "}
              <span className="bg-gradient-to-r from-[#ff7e2e] to-[#ffb380] bg-clip-text text-transparent">
                StoneX
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
              Crafting marble temples, sculptures, and bespoke stonework with timeless artistry
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="rounded-xl bg-[#ff7e2e] px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                Get a Quote
              </a>
              <a
                href="#gallery"
                className="rounded-xl border-2 border-white/80 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                View Gallery
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- STATS SECTION ---------------- */}
      <section className="fade-in-section border-b border-gray-100 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { num: "25+", label: "Years Experience" },
              { num: "120+", label: "Projects Delivered" },
              { num: "08", label: "Countries Served" },
              { num: "100%", label: "Custom Crafted" },
            ].map((item, idx) => (
              <div key={idx} className="text-center animate-fade-in-up">
                <p className="font-light text-5xl text-[#ff7e2e]">{item.num}</p>
                <p className="mt-2 text-base text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- ABOUT SECTION ---------------- */}
      <section id="about" className="fade-in-section scroll-mt-20 bg-white py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="block font-light tracking-wide text-xl text-[#ff7e2e]">
            ABOUT US
          </span>
          <h2 className="mt-4 font-light text-3xl sm:text-4xl md:text-5xl animate-slide-up">
            About Us –{" "}
            <span className="bg-gradient-to-r from-[#ff7e2e] to-[#ffb380] bg-clip-text text-transparent">
              Indian Stonex
            </span>
          </h2>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              At <strong>Indian Stonex</strong>, we believe that stone is not just a material – it is a timeless art
              form. With years of expertise in the stone industry, we specialize in crafting premium marble temples,
              stone artifacts, sculptures, and architectural elements that bring elegance, spirituality, and heritage
              into every space.
            </p>
            <p>
              Founded with a vision to blend traditional craftsmanship with modern design, Indian Stonex has become a
              trusted name among homeowners, architects, interior designers, and builders across India and abroad. Every
              creation we deliver is a symbol of purity, durability, and beauty – where stone truly becomes art.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- SERVICES SECTION ---------------- */}
      <section id="services" className="fade-in-section scroll-mt-20 bg-gray-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-light text-3xl sm:text-4xl md:text-5xl">
            What We <span className="text-[#ff7e2e]">Do</span>
          </h2>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {/* Services List */}
            <article className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900">Our Services</h3>
              <ul className="mt-6 space-y-4 text-gray-700">
                {[
                  { title: "Marble Temples & Mandirs", desc: "Intricately carved temples that embody devotion and grace." },
                  { title: "Stone Art & Sculptures", desc: "Handcrafted masterpieces that add luxury and culture." },
                  { title: "Custom Stonework", desc: "Tailored designs from details to large projects." },
                  { title: "Export Quality Craft", desc: "Superior quality products with global standards." },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="text-[#ff7e2e]">✔</span>
                    <div>
                      <strong>{item.title}</strong>
                      <p className="text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>

            {/* Why Choose */}
            <article className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900">Why Choose Indian Stonex?</h3>
              <ul className="mt-6 space-y-4 text-gray-700">
                {[
                  "Finest selection of natural stones & marbles",
                  "Experienced artisans and expert craftsmanship",
                  "Commitment to quality & authenticity",
                  "Personalized service for every client",
                  "A legacy of trust in stone artistry",
                ].map((reason, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <span className="text-[#ff7e2e]">✔</span>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ---------------- GALLERY SECTION ---------------- */}
      <section id="gallery" className="fade-in-section bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-light sm:text-4xl md:text-5xl">
            Our{" "}
            <span className="bg-gradient-to-r from-[#ff7e2e] to-[#ffb380] bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Explore our collection of handcrafted marble temples, sculptures, and custom stonework
          </p>

          {/* Gallery Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayedImages.map((image, idx) => (
              <div
                key={idx}
                className="cursor-pointer group relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl"
                onClick={() => setSelectedIndex(idx)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
            ))}
          </div>

          {/* View More Button */}
          {!showAll && images.length > 6 && (
            <div className="mt-10">
              <button
                onClick={() => setShowAll(true)}
                className="rounded-lg bg-[#ff7e2e] px-8 py-3 text-white font-medium shadow-lg transition hover:scale-105"
              >
                View More
              </button>
            </div>
          )}
        </div>

        {/* Lightbox Modal */}
        {selectedIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 text-white hover:text-gray-300"
            >
              <X size={32} />
            </button>
            <button onClick={handlePrev} className="absolute left-4 text-white hover:text-gray-300">
              <ChevronLeft size={40} />
            </button>
            <button onClick={handleNext} className="absolute right-4 text-white hover:text-gray-300">
              <ChevronRight size={40} />
            </button>
            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-lg"
            />
          </div>
        )}
      </section>

      {/* ---------------- CONTACT CTA SECTION ---------------- */}
      <section id="contact" className="fade-in-section scroll-mt-20 bg-gray-50 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-light sm:text-4xl md:text-5xl">
            Let's Create Something{" "}
            <span className="bg-gradient-to-r from-[#ff7e2e] to-[#ffb380] bg-clip-text text-transparent">
              Timeless
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-700">
            At Indian Stonex, our mission is simple: to transform natural stone into lasting works of art that inspire
            generations.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/AppointmentPage"
              className="rounded-xl bg-[#ff7e2e] px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105"
            >
              Contact Us
            </a>
            <a
              href="/Testimonials"
              className="rounded-xl border-2 border-[#ff7e2e]/30 bg-white px-8 py-4 font-semibold text-[#ff7e2e] transition hover:bg-[#ff7e2e]/10"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
