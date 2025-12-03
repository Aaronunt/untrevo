import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-6">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground mb-12">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the Untrevo website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Description of Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Untrevo provides business consulting, strategic planning, and related professional services. The specific services provided will be detailed in separate service agreements between Untrevo and its clients.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. User Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When using our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of any account credentials</li>
                <li>Use our services in compliance with all applicable laws</li>
                <li>Not engage in any activity that could harm our services or other users</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on the Untrevo website, including text, graphics, logos, and software, is the property of Untrevo or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed">
                Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of our engagement. This obligation survives the termination of any service agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, Untrevo shall not be liable for any indirect, incidental, special, consequential, or punitive damages, regardless of the cause of action or whether Untrevo has been advised of the possibility of such damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify and hold harmless Untrevo, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our services or violation of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                Either party may terminate the use of services as specified in individual service agreements. Untrevo reserves the right to suspend or terminate access to its website for any violation of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which Untrevo operates, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">11. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-muted-foreground mt-4">
                <strong className="text-foreground">Email:</strong> legal@untrevo.com<br />
                <strong className="text-foreground">Address:</strong> 123 Business Ave, Suite 100
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Terms;
