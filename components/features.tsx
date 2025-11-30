"use client"

import { Shield, Star, CreditCard, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Licensed drivers, insured vehicles, and GPS tracking for your peace of mind.",
  },
  {
    icon: Star,
    title: "Premium Quality",
    description: "Well-maintained vehicles with modern amenities and professional service.",
  },
  {
    icon: CreditCard,
    title: "Easy Payment",
    description: "Accept cash, cards, and digital payments for your convenience.",
  },
  {
    icon: MessageCircle,
    title: "Customer Support",
    description: "Friendly support team ready to assist you with any questions or concerns.",
  },
]

export function Features() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why Choose Nelson Aires</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">Your satisfaction and safety are our top priorities</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex w-16 h-16 rounded-full bg-primary/20 items-center justify-center mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-white/70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
