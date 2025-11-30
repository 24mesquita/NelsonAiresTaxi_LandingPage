"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Users, Briefcase } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: MapPin,
    title: "Airport Transfers",
    description: "Reliable airport pickup and drop-off services with flight tracking and meet & greet options.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock service for all your transportation needs, day or night.",
  },
  {
    icon: Users,
    title: "City Tours",
    description: "Explore Portugal with our knowledgeable drivers who know the best routes and attractions.",
  },
  {
    icon: Briefcase,
    title: "Corporate Travel",
    description: "Professional transportation for business meetings, conferences, and corporate events.",
  },
]

export function Services() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive transportation solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-card">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
