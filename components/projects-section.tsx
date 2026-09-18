'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { Reveal } from '@/components/reveal'

type Industry =
  | 'Energy & Power'
  | 'Cement & Manufacturing'
  | 'Hospitality'
  | 'Government & Smart Cities'
  | 'Healthcare'
  | 'Education'
  | 'Aviation'
  | 'Infrastructure'

interface Project {
  client: string
  location: string
  industry: Industry
  image: string
  tags: string[]
}

const PROJECTS: Project[] = [
  {
    client: 'Cairn India Ltd.',
    location: 'Barmer & Gujarat',
    industry: 'Energy & Power',
    image: '/images/project-oilgas.png',
    tags: ['IP Surveillance', 'Access Control', 'Full-Height Turnstiles', 'PAGA', 'Data Networking', 'PIDS', 'RFID Guard Tour'],
  },
  {
    client: 'Nuclear Power Corporation of India Ltd.',
    location: 'Kota, Rajasthan',
    industry: 'Energy & Power',
    image: '/images/project-nuclear.png',
    tags: ['IP Surveillance', 'Fire Detection', 'Data Networking', '10+ projects since 2014'],
  },
  {
    client: 'Suratgarh Thermal Power Station',
    location: 'Suratgarh, Rajasthan',
    industry: 'Energy & Power',
    image: '/images/project-thermal.png',
    tags: ['8 km Perimeter Secured', 'IP Cameras', 'PIDS'],
  },
  {
    client: 'Rashtriya Chemical Fertilizers Ltd.',
    location: 'Thal, Mumbai',
    industry: 'Cement & Manufacturing',
    image: '/images/project-cement.png',
    tags: ['Explosion-Proof Cameras', 'IT Networking'],
  },
  {
    client: 'Shree Cement, Birla Corporation & Satna Cement Works',
    location: 'Multiple Sites',
    industry: 'Cement & Manufacturing',
    image: '/images/project-cement.png',
    tags: ['Industrial Surveillance', 'Automation', 'Access Control'],
  },
  {
    client: 'Taj Man Mahal Palace (Rambagh) & Hyatt Place',
    location: 'Jaipur, Rajasthan',
    industry: 'Hospitality',
    image: '/images/project-hotel.png',
    tags: ['Full BMS', 'Audio-Video', 'Access Control', 'Surveillance'],
  },
  {
    client: 'Prayagraj, Raipur, NDMC & RRVPNL Command Centres',
    location: 'Pan-India',
    industry: 'Government & Smart Cities',
    image: '/images/project-smartcity.png',
    tags: ['Integrated BMS', 'Fire', 'Public Address', 'Access Control', 'Command & Control'],
  },
  {
    client: 'RSRDC Toll Plazas',
    location: 'Across Rajasthan',
    industry: 'Infrastructure',
    image: '/images/project-toll.png',
    tags: ['300+ Boom Barriers', 'CCTV Cameras', 'Vehicle Access'],
  },
  {
    client: 'SMS Hospital Super-Specialty Block',
    location: 'Jaipur, Rajasthan',
    industry: 'Healthcare',
    image: '/images/project-hospital.png',
    tags: ['BMS', 'Fire Detection', 'Nurse-Call', 'Audio-Video', 'Access Control'],
  },
  {
    client: 'The Sanskaar Valley School & Allen Institute',
    location: 'Bhopal & Multiple Locations',
    industry: 'Education',
    image: '/images/project-education.png',
    tags: ['500+ IP Cameras', '3,000+ Cameras (Allen)', 'Access Control'],
  },
  {
    client: 'Tirupati Airport & Kishangarh Airport',
    location: 'Andhra Pradesh & Rajasthan',
    industry: 'Aviation',
    image: '/images/project-airport.png',
    tags: ['Aspirating Smoke Detection', 'Fire Detection', 'BMS'],
  },
]

const FILTERS: (Industry | 'All')[] = [
  'All',
  'Energy & Power',
  'Cement & Manufacturing',
  'Hospitality',
  'Government & Smart Cities',
  'Healthcare',
  'Education',
  'Aviation',
  'Infrastructure',
]

export function ProjectsSection() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All')

  const visible = useMemo(
    () => (filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.industry === filter)),
    [filter],
  )

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap justify-center gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                  filter === f
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.article
                key={p.client}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/40"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={`${p.client} project site`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                    {p.industry}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-base font-semibold leading-snug">{p.client}</h3>
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 text-primary" />
                    {p.location}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
