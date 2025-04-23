import Image from "next/image"
import Link from "next/link"
import {
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  Hammer,
  HandshakeIcon,
  Layers,
  MessageSquare,
  Wrench,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import FilloutForm from "@/components/FilloutForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F9FBFC]">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-4 sticky top-0 bg-white z-50 shadow-sm rounded-2xl">
        <nav className="flex items-center justify-between">
          <Image
            src="/logos.png"
            alt="LienMate Logo"
            width={150}
            height={30}
            className="w-[100px] md:w-[150px] rounded-full"
          />

          <div className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-gray-700 font-medium">
              Features
            </Link>
            <Link href="#integrations" className="text-gray-700 font-medium">
              Integrations
            </Link>
            <Link href="#benefits" className="text-gray-700 font-medium">
              Benefits
            </Link>
            <Link href="#audience" className="text-gray-700 font-medium">
              Who It's For
            </Link>
            <Link href="#testimonials" className="text-gray-700 font-medium">
              Testimonials
            </Link>
          </div>

          <div className=""></div>

          <button className="hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              🧱 Sick of Chasing Payments? <span className="text-[#0080FF]">LienMate</span> Has Your Back.
            </h1>

            <p className="text-gray-600 text-lg max-w-lg">
              LienMate is your lien rights co-pilot — designed for subcontractors, tradespeople, and construction pros
              who don't have time for legal headaches. We track your lien deadlines, prepare and send notices, and file
              liens automatically — so you can focus on finishing jobs and getting paid.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* <Button className="bg-[#0080FF] hover:bg-[#0066CC] text-lg py-6">👉 Join the Waitlist</Button> */}
              <Button
                variant="outline"
                className="border-[#0080FF] text-[#0080FF] hover:bg-[#CBEAFF] hover:text-[#0080FF] text-lg py-6"
              >
                See How It Works
              </Button>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative">
            <div className="absolute -top-20 -left-20 md:block hidden">
              <svg width="200" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 80C60 0 140 100 180 20" stroke="#CBEAFF" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>

            <div className="relative z-10 max-w-[300px] md:max-w-[400px] mx-auto">

              <FilloutForm />

            </div>

            <div className="absolute -bottom-20 -right-20 md:block hidden">
              <svg width="200" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 20C60 100 140 0 180 80" stroke="#CBEAFF" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Shape Divider */}
      <div className="relative h-24 md:h-32">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 w-full">
          <path
            fill="#CBEAFF"
            fillOpacity="0.5"
            d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,122.7C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Features Section */}
      <section id="features" className="bg-[#CBEAFF] bg-opacity-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">🔧 Built for Subs, Not Suits</h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              You're not a lawyer. You're a builder, plumber, electrician — someone who makes things happen. LienMate
              handles all the lien law complexity for you, with no legal jargon, no extra admin work, and no stress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
            <div className="flex items-center gap-2 justify-center">
              <Clock className="h-5 w-5" />
              <p className="text-lg">Be first to get early access</p>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <HandshakeIcon className="h-5 w-5" />
              <p className="text-lg">Lock in exclusive pricing</p>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <CheckCircle2 className="h-5 w-5" />
              <p className="text-lg">Get paid hassle-free</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Automatic Lien Tracking",
                description: "We monitor lien rights on every job from day one.",
                icon: <Clock className="h-6 w-6 text-[#0080FF]" />,
              },
              {
                title: "Smart Reminders",
                description: "Get notified before deadlines so you never miss your window.",
                icon: <Calendar className="h-6 w-6 text-[#0080FF]" />,
              },
              {
                title: "One-Click Filing",
                description: "File notices or liens with a single click — we'll prep, send, and track them for you.",
                icon: <FileText className="h-6 w-6 text-[#0080FF]" />,
              },
              {
                title: "Pre-filled Waivers",
                description: "Auto-generate lien waivers at closeout — branded, legal, and professional.",
                icon: <CheckCircle2 className="h-6 w-6 text-[#0080FF]" />,
              },
              {
                title: "Zero Legal Talk",
                description: "We translate legal requirements into plain English. No more legalese.",
                icon: <MessageSquare className="h-6 w-6 text-[#0080FF]" />,
              },
              {
                title: "Hands-Free Operation",
                description: "Once you sync your jobs, we handle it all.",
                icon: <HandshakeIcon className="h-6 w-6 text-[#0080FF]" />,
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 bg-[#CBEAFF] rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg font-medium text-gray-700">
              📲 You don't even need to lift a finger. Once you sync your jobs or tools, we handle it all.
            </p>
          </div>
        </div>
      </section>

      {/* Shape Divider */}
      <div className="relative h-24 md:h-32">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute top-0 w-full rotate-180">
          <path
            fill="#CBEAFF"
            fillOpacity="0.5"
            d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,122.7C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Integrations Section */}
      <section id="integrations" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">🔌 Seamless Integrations with Tools You Already Use</h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            We play nice with the software you're already using on the job.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {[
            { name: "QuickBooks", description: "(Self-Employed & Online)", image: "/quickbooks.svg" },
            { name: "Joist", description: "", image: "/Joist.png" },
            { name: "Buildertrend", description: "", image: "/Buildertrend.png" },
            { name: "Google Sheets", description: "", image: "/sheet.png" },
            { name: "Jobber", description: "", image: "/Jobber.png" },
          ].map((integration, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="h-16 w-16 mx-auto mb-4 flex items-center justify-center">

              </div>
              <h3 className="text-lg font-semibold mb-1"> {integration.name}</h3>
              <p className="text-sm text-gray-500">{integration.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-700">🔄 Coming soon: ServiceTitan, Housecall Pro, and more!</p>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Just sync your data — we extract project info, track deadlines, and manage filings in the background.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="bg-[#0080FF] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">💸 No More Guessing</h2>
            <p className="text-lg max-w-2xl mx-auto bold">LienMate automatically checks</p>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            {[
              "When your lien rights begin and expire",
              "What type of notice you need",
              "Where and how to send it",
              "And files it — on time, every time",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 bg-white bg-opacity-10 p-4 rounded-lg">
                <CheckCircle2 className="h-6 w-6 text-white flex-shrink-0" />
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-xl font-medium">All of it, automated.</p>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section id="audience" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4"> Who We Built This For</h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            If you're running projects and dealing with late payments, this tool was made for you.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            "Subcontractors",
            "Flooring Installers",
            "Fencing",
            "Specialty Contractors",
            "Roofers",
            "General Contractors",
          ].map((audience, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="h-12 w-12 bg-[#CBEAFF] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-6 w-6 text-[#0080FF]" />
              </div>
              <h3 className="text-lg font-semibold">{audience}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Design Direction Section */}
      {/* <section className="bg-[#CBEAFF] bg-opacity-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">🎨 Design Direction</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Palette</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-[#0080FF] rounded-md"></div>
                  <div>
                    <p className="font-medium">Primary Blue (#0080FF)</p>
                    <p className="text-sm text-gray-500">Trustworthy, bold, friendly</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-[#CBEAFF] rounded-md"></div>
                  <div>
                    <p className="font-medium">Sky Blue (#CBEAFF)</p>
                    <p className="text-sm text-gray-500">Light, breathable, gives it a "no stress" feel</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-[#F9FBFC] rounded-md border"></div>
                  <div>
                    <p className="font-medium">White & Off-White (#F9FBFC)</p>
                    <p className="text-sm text-gray-500">Modern and uncluttered</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Typography</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium">Modern sans-serif fonts</p>
                  <p className="text-sm text-gray-500">Inter, Poppins, or Work Sans</p>
                </div>
                <div>
                  <p className="font-medium">Headings: bold and clear</p>
                  <p className="text-sm text-gray-500">~36–48px</p>
                </div>
                <div>
                  <p className="font-medium">Body: readable</p>
                  <p className="text-sm text-gray-500">~16–18px</p>
                </div>
                <div>
                  <p className="font-medium">Legal disclaimers/captions</p>
                  <p className="text-sm text-gray-500">~12–14px, subtle gray</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Icons & Imagery</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium">Clean line icons</p>
                  <p className="text-sm text-gray-500">Hammer, calendar, legal doc, handshake, clock</p>
                </div>
                <div>
                  <p className="font-medium">Icon sets</p>
                  <p className="text-sm text-gray-500">Feather Icons, Lucide, or Phosphor</p>
                </div>
                <div>
                  <p className="font-medium">Stock imagery</p>
                  <p className="text-sm text-gray-500">Blue-tinted overlays of construction crews, job sites</p>
                </div>
                <div>
                  <p className="font-medium">Diverse representation</p>
                  <p className="text-sm text-gray-500">Real tradespeople, not staged models</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      {/* <section id="testimonials" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Stories From Our Customers</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote: "🗣️ General Contractor",
              text: "Missed a lien deadline last year and it cost us thousands. Since switching to LienMate, we haven't dropped the ball once. It's like having a watchdog for payments.",
              author: "Small General Contractor",
              position: "Pacific Northwest",
            },
            {
              quote: "🛠️  Electrician",
              text: "I used to Google lien laws every time we started a job. Now I don't have to think about it. LienMate keeps me covered and lets me get back to work.",
              author: "Electrical Subcontractor",
              position: "Central Texas",
            },
            {
              quote: "🔧 Plumbing Company Owner",
              text: "We were paying a law firm to handle liens. LienMate does the same thing faster — and for way less. Filing a notice takes two clicks now.",
              author: "Plumbing Business",
              position: "Southeastern U.S.",
            },
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">{testimonial.quote}</h3>
              <p className="text-gray-600 mb-6">{testimonial.text}</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-[#CBEAFF] rounded-full flex items-center justify-center">
                  <Hammer className="h-5 w-5 text-[#0080FF]" />
                </div>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Final CTA Section */}

      <section className="bg-[#0080FF] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">🚀 Ready to Stop Chasing Clients for Money?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            LienMate will be launching soon. Be the first to get access, lock in early pricing, and finally get paid
            without the headache.
          </p>
          {/* Fillout Form Embed */}
          <div className="max-w-3xl mx-auto bg-white rounded-lg p-6 shadow-lg">
            <FilloutForm />
          </div>

          {/* Original button hidden or can be kept as alternative */}
          {/* <Button className="bg-white text-[#0080FF] hover:bg-gray-100 text-lg py-6 px-8">
            👉 Join the Waitlist Now
          </Button> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-3">
        <div className="container mx-auto px-4">


          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <div className="flex justify-between">
              <p className="text-gray-400">Email:Hello@Lienmate.com</p> <p className="text-gray-400">© 2025 LienMate. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
