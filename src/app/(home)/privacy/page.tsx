import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="mb-4">
          Welcome to our Privacy Policy. Your privacy is critically important to us. This Privacy Policy document
          contains types of information that is collected and recorded by our website and how we use it.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
        <p className="mb-4">
          We collect information you provide directly to us, such as when you create or modify your account, request
          services, contact customer support, or otherwise communicate with us.
        </p>
        <p className="mb-4">This information may include:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Address</li>
          <li>Payment information</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
        <p className="mb-4">We use the information we collect to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Provide, maintain, and improve our services</li>
          <li>Process transactions and send related information</li>
          <li>Send technical notices, updates, security alerts, and support messages</li>
          <li>Respond to your comments, questions, and requests</li>
          <li>Communicate with you about products, services, offers, and events</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
        <p className="mb-4">
          We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized
          access, disclosure, alteration and destruction.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Changes to This Privacy Policy</h2>
        <p className="mb-4">
          We may update this privacy policy from time to time. We will notify you of any changes by posting the new
          privacy policy on this page.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
        <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at:</p>
        <address className="not-italic">
          <p>Email: privacy@example.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Privacy Street, Securetown, ST 12345</p>
        </address>
      </section>

      <footer className="mt-12 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        <p className="text-sm text-gray-600 mt-2">
          <Link href="/" className="text-blue-600 hover:underline">
            Return to Home
          </Link>
        </p>
      </footer>
    </div>
  )
}

