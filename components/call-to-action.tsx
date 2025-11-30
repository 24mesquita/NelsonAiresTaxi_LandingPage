"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"
import { motion } from "framer-motion"

export function CallToAction() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">Ready for Your Next Journey?</h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
            Book your ride now and experience the difference of professional taxi service. Available 24/7 for all your
            transportation needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg h-14 px-8 shadow-lg">
              <Phone className="mr-2 h-5 w-5" />
              +351 917 120 640
            </Button>


          </div>
        </motion.div>
      </div>
    </section>
  )
}
