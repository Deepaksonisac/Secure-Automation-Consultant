import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { ProjectsSection } from '@/components/projects-section'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Projects | Secure Automation Consultants',
  description:
    'Flagship SAC deployments across energy & power, cement & manufacturing, hospitality, government & smart cities, healthcare, education, aviation and infrastructure.',
}

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Flagship Projects"
        title="Trusted on India's most critical sites"
        subtitle="From 8 km industrial perimeters to smart-city command centres and heritage palace hotels — filter by sector to see what we have delivered."
      />
      <ProjectsSection />
      <CtaBand />
    </>
  )
}
