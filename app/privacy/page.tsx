"use client"

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CircuitBackground } from "@/components/circuit-background"

export default function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <CircuitBackground />
      <div className="relative z-10">
        <Header />
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
                 <Link
                href="/"
                className="inline-flex items-center gap-2 text-cyan hover:text-cyan/80 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back to Home</span>
              </Link>
              <div>
                <h1 className="text-4xl font-bold text-cyan mb-4">Privacy Policy for AutoDentifyr</h1>
                <p className="text-silver">Last Updated: February 4, 2026</p>
              </div>

              <p className="text-foreground leading-relaxed">
                This Privacy Policy describes how AutoDentifyr ("we," "us," or "our") collects, uses, and shares your information when you use our mobile application (the "App").
              </p>

              <section className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-cyan mb-4">1. Introduction</h2>
                  <p className="text-foreground leading-relaxed">
                    AutoDentifyr is designed with a "Privacy First" approach. Most of the App's features, including the AI-powered damage detection, operate entirely on your device without requiring data to be sent to external servers.
                  </p>
                </div>
              </section>

              <section className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-cyan mb-4">2. Information We Collect</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">2.1 Personal Data</h3>
                      <p className="text-foreground leading-relaxed mb-3">
                        To provide features like user accounts and synchronization, we may collect:
                      </p>
                      <ul className="space-y-2 text-foreground list-disc list-inside">
                        <li><strong>Email Address:</strong> Used for account identification and security.</li>
                        <li><strong>Phone Number:</strong> Used for optional SMS-based authentication.</li>
                        <li><strong>Authentication Data:</strong> Handled securely through Firebase (Google).</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">2.2 Image Data (Core Feature)</h3>
                      <ul className="space-y-2 text-foreground list-disc list-inside">
                        <li><strong>Local Processing:</strong> All AI inference (damage detection, classification, and estimation) is performed <strong>locally on your device</strong>.</li>
                        <li><strong>No Storage on Our Servers:</strong> We do <strong>not</strong> upload or store your images on our servers for AI processing.</li>
                        <li><strong>Temporary Files:</strong> When you generate a report or share an analysis, a temporary image file is created in your device's cache to facilitate the system share sheet. These files are typically cleared by the operating system or can be manually deleted.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">2.3 Usage Data</h3>
                      <p className="text-foreground leading-relaxed mb-3">
                        We may collect diagnostic information to improve the App, such as:
                      </p>
                      <ul className="space-y-2 text-foreground list-disc list-inside">
                        <li>Device model and OS version.</li>
                        <li>App crash logs (handled via Firebase Crashlytics, if enabled).</li>
                        <li>Anonymous usage statistics (pages visited, duration of sessions).</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-cyan mb-4">3. How We Use Information</h2>
                  <ul className="space-y-2 text-foreground list-disc list-inside">
                    <li><strong>Authentication:</strong> To manage your secure access to the App.</li>
                    <li><strong>Service Delivery:</strong> To provide real-time damage estimation and report generation.</li>
                    <li><strong>Improvements:</strong> To optimize the local AI models and user experience based on performance data.</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-cyan mb-4">4. Permissions</h2>
                  <p className="text-foreground leading-relaxed mb-3">
                    The App requires the following permissions to function:
                  </p>
                  <ul className="space-y-2 text-foreground list-disc list-inside">
                    <li><strong>Camera:</strong> To capture live images for real-time damage detection.</li>
                    <li><strong>Photo Gallery:</strong> To analyze existing vehicle photos.</li>
                    <li><strong>Storage/Files:</strong> To save generated damage reports and temporary shareable assets.</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-cyan mb-4">5. Third-Party Services</h2>
                  <p className="text-foreground leading-relaxed mb-3">
                    We use reputable third-party services to handle specific functionalities:
                  </p>
                  <ul className="space-y-2 text-foreground list-disc list-inside">
                    <li><strong>Google Firebase:</strong> Used for authentication and backend services. Their privacy policy can be found here: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-cyan hover:text-cyan/80 underline">Google Privacy Policy</a></li>
                  </ul>
                </div>
              </section>

              <section className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-cyan mb-4">6. Data Sharing</h2>
                  <p className="text-foreground leading-relaxed">
                    We do <strong>not</strong> sell, trade, or otherwise transfer your Personal Data or Image Data to outside parties. Your damage reports are only shared when you explicitly initiate a "Share" action using the device's native sharing functionality.
                  </p>
                </div>
              </section>

              <section className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-cyan mb-4">7. Security</h2>
                  <p className="text-foreground leading-relaxed">
                    We implement a variety of security measures to maintain the safety of your personal information. However, please be aware that no security system is impenetrable.
                  </p>
                </div>
              </section>

              <section className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-cyan mb-4">8. Your Rights</h2>
                  <p className="text-foreground leading-relaxed">
                    Depending on your location, you may have rights regarding your personal data, including the right to access, correct, or delete your account data. You can delete your account at any time within the App settings (if applicable) or by contacting us.
                  </p>
                </div>
              </section>

              <section className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-cyan mb-4">9. Contact Us</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy, You can contact us:
                  </p>
                  <div className="bg-card/50 p-6 rounded-lg border border-border space-y-2">
                    <p className="text-foreground"><strong>Email:</strong> <a href="mailto:tech.vinsa@gmail.com" className="text-cyan hover:underline">tech.vinsa@gmail.com</a></p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  )
}
