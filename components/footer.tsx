import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Image src="/logo.png" alt="Nelson Aires" width={200} height={60} className="w-auto h-12 mb-4" />
            <p className="text-white/70 leading-relaxed">
              Your trusted taxi service in Portugal, providing professional transportation since 2009.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-white/70">+351 917 120 640</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-white/70">ceo@nelsonaires.pt</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-white/70">Portugal</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div className="text-white/70">
                <p className="font-semibold text-white">24/7 Service</p>
                <p className="text-sm">Always here when you need us</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-white/70">
              <li>Airport Transfers</li>
              <li>City Tours</li>
              <li>Corporate Travel</li>
              <li>Special Events</li>
              <li>Long Distance</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Nelson Aires. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
