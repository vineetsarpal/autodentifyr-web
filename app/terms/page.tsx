import type { Metadata } from 'next'
import { TermsContent } from './terms-content'

export const metadata: Metadata = {
  title: 'Terms of Service | Autodentifyr',
  description: 'Terms of Service for Autodentifyr',
}

export default function TermsPage() {
  return <TermsContent />
}
