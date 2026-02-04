'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export function TermsContent() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-cyan hover:text-cyan/80 transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-balance mb-4">
            Terms of Service
          </h1>
          <p className="text-silver text-lg">
            Last Updated: February 4, 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8 text-foreground">
          <div className="bg-card/50 border border-border rounded-lg p-6 backdrop-blur-sm">
            <p className="text-silver leading-relaxed">
              By using the AutoDentifyr mobile application ("the App"), you agree to these terms.
            </p>
          </div>

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-cyan mb-4">1. Experimental Tool</h2>
            <p className="text-silver leading-relaxed">
              The App is an <span className="font-semibold text-foreground">experimental AI tool</span> provided for demonstration purposes. It is currently in a beta/testing stage. While we strive for accuracy, the App may contain bugs, errors, or provide incorrect information.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-cyan mb-4">2. No Professional Advice</h2>
            <p className="text-silver leading-relaxed mb-4">
              Detections and price estimations are <span className="font-semibold text-foreground">placeholders/estimates only</span>.
            </p>
            <ul className="space-y-3 text-silver list-disc list-inside">
              <li>They are NOT professional quotes.</li>
              <li>You should NOT use these results for insurance claims or financial decisions.</li>
              <li>Always get a real inspection from a certified mechanic.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-cyan mb-4">3. Local AI Inference & Privacy</h2>
            <p className="text-silver leading-relaxed">
              The App performs AI inference and damage detection <span className="font-semibold text-foreground">locally on your device</span>. Images captured or selected within the App are processed on-device and are not uploaded to our servers for AI analysis. By using the App, you acknowledge and agree to this local processing method.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-cyan mb-4">4. Your Responsibility</h2>
            <p className="text-silver leading-relaxed">
              You are responsible for the images you scan and the security of your account. Do not use the App for any illegal or fraudulent activities.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-cyan mb-4">5. "As Is" / No Warranty</h2>
            <p className="text-silver leading-relaxed">
              The App is provided "as is" without any warranties. The Developer is not responsible for any damages (financial, physical, or otherwise) resulting from your use of the App.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-cyan mb-4">6. Indemnity</h2>
            <p className="text-silver leading-relaxed">
              If your use of the App causes a legal issue for the Developer, you agree to cover the legal costs and any damages involved.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-cyan mb-4">7. Changes</h2>
            <p className="text-silver leading-relaxed">
              The Developer can change these terms or the App at any time. Continuing to use the App means you agree to the new terms.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-cyan mb-4">8. Contact</h2>
            <p className="text-silver leading-relaxed">
              Email: <a href="mailto:tech.vinsa@gmail.com" className="text-cyan hover:text-cyan/80 transition-colors">tech.vinsa@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
