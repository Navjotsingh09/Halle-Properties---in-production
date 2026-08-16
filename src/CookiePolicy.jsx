import React, { useEffect } from 'react';

function CookiePolicy() {
  useEffect(() => {
    document.title = 'Cookie Policy | Halle Property Professionals';

    let metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Understand how Halle Property Professionals uses cookies, analytics, tracking technologies and third-party services to improve your online experience.';

    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }
  }, []);

  return (
    <div className="legal-page">
      <header className="legal-header">
        <a href="/" className="legal-logo-link" aria-label="Halle Property Professionals home">
          <img src="https://www.figma.com/api/mcp/asset/89f2a15b-8a61-42e7-9928-8a11035db006" alt="Halle Property Professionals" />
        </a>
        <a href="/" className="legal-back-link">Back to home</a>
      </header>

      <main className="legal-main">
        <div className="legal-intro">
          <p className="legal-eyebrow">Halle Property Professionals</p>
          <h1>Cookie Policy</h1>
          <p>Halleuk Ltd - Last updated August 2026</p>
        </div>

        <article className="legal-document">
          <section>
            <h2>1. What Are Cookies?</h2>
            <p>Cookies are small text files placed on your device when you visit a website. They allow websites to remember user preferences, improve functionality, understand visitor behaviour and provide a more personalised browsing experience.</p>
            <p>Halleuk Ltd ("Halle", "we", "our", or "us") uses cookies and similar tracking technologies across our website to ensure our property services operate effectively, improve user experience and understand how visitors interact with our property listings and online services.</p>
            <p>Cookies may collect information about how users browse property pages, search available properties, interact with valuation tools and submit enquiries.</p>
          </section>

          <section>
            <h2>2. How We Use Cookies</h2>
            <p>We use cookies and similar technologies for the following purposes:</p>

            <h3>Essential Cookies</h3>
            <p>These cookies are necessary for the website to function correctly. They support basic website operations, security features and user-requested services. Without these cookies, certain website features may not operate properly.</p>

            <h3>Performance and Analytics Cookies</h3>
            <p>These cookies help us understand how visitors use our website and improve our property services. Our analytics tools may monitor:</p>
            <ul>
              <li>How users browse property listings.</li>
              <li>Which property pages receive the most engagement.</li>
              <li>Saved property searches and search preferences.</li>
              <li>User interactions with property filters, location searches and valuation calculators.</li>
              <li>Website navigation patterns and visitor journeys.</li>
              <li>Form interactions and enquiry activity.</li>
            </ul>
            <p>Analytics engines may also process limited technical information, including:</p>
            <ul>
              <li>IP address information.</li>
              <li>Approximate IP-based geographical location.</li>
              <li>Device and browser information.</li>
              <li>Session activity and interaction data.</li>
            </ul>
            <p>IP geolocation data may be used to provide more relevant localised property information, understand regional browsing trends and improve the delivery of property content.</p>

            <h3>Marketing Cookies</h3>
            <p>Marketing cookies help us understand the effectiveness of advertising campaigns and improve the relevance of property-related communications. These cookies may be used to measure:</p>
            <ul>
              <li>Advertisement performance.</li>
              <li>Website visits generated through marketing campaigns.</li>
              <li>User engagement with promotional content.</li>
            </ul>
          </section>

          <section>
            <h2>3. Website Tracking and Data Collection</h2>
            <p>To improve our property platform experience, Halle may use tracking technologies that record how visitors interact with our website. This may include monitoring:</p>
            <ul>
              <li>Property listings viewed.</li>
              <li>Search filters selected.</li>
              <li>Areas or locations searched.</li>
              <li>Property types viewed.</li>
              <li>Valuation calculator interactions.</li>
              <li>Enquiry forms started or completed.</li>
              <li>Form submission metadata, including submission time, browser information and technical details required for processing enquiries.</li>
            </ul>
            <p>This information helps us understand user preferences, improve property recommendations, enhance website performance and provide more relevant services.</p>
            <p>We do not use tracking technologies to collect unnecessary personal information beyond what is required for legitimate business purposes and legal compliance.</p>
          </section>

          <section>
            <h2>4. Third-Party Cookies and Processing Services</h2>
            <p>Halle uses trusted third-party services that may place cookies or process information collected through our website. These services may include:</p>

            <h3>Google Tag Manager</h3>
            <p>Google Tag Manager helps us manage website tracking technologies and analytics tools. It may support the delivery of measurement and performance tracking services.</p>

            <h3>Google Analytics</h3>
            <p>Google Analytics helps us understand website usage patterns, visitor journeys and engagement with property content.</p>

            <h3>Web3Forms Endpoints</h3>
            <p>Web3Forms may process enquiry form submissions and related technical metadata to securely deliver customer enquiries to Halle.</p>

            <h3>Property Portal Feeds</h3>
            <p>Where property listings are distributed through external property portals, those platforms may use their own cookies and tracking technologies to measure listing performance, user interactions and property searches.</p>
            <p>Third-party providers operate under their own privacy policies and terms. We recommend reviewing their policies to understand how they process information.</p>
          </section>

          <section>
            <h2>5. Cookie Audit Table</h2>
            <p>Here’s a breakdown of the cookies that may be used on this site.</p>

            <table className="legal-table">
              <thead>
                <tr>
                  <th>Cookie Category</th>
                  <th>Purpose and Examples</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Strictly Necessary Cookies</td>
                  <td>Required for secure access, site operation and core functionality.</td>
                </tr>
                <tr>
                  <td>Google Analytics Cookies</td>
                  <td>Used to measure website traffic, user journeys and engagement with property content.</td>
                </tr>
                <tr>
                  <td>Google Tag Manager Cookies</td>
                  <td>Used to manage website tracking and analytics scripts.</td>
                </tr>
                <tr>
                  <td>Functional Cookies</td>
                  <td>Remember user preferences and improve website usability.</td>
                </tr>
                <tr>
                  <td>Marketing Cookies (If Enabled)</td>
                  <td>Used to assess campaign performance and promotional engagement.</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2>6. Your Cookie Choices and Managing Cookies</h2>
            <p>You have control over how cookies are managed on your device. You can:</p>
            <ul>
              <li>Accept or decline cookies through available website cookie settings.</li>
              <li>Change your browser settings to block or delete cookies.</li>
              <li>Remove stored cookies manually from your device.</li>
            </ul>
            <p>To manually remove cookies:</p>

            <h3>Google Chrome</h3>
            <ol>
              <li>Open Chrome Settings.</li>
              <li>Select Privacy and Security.</li>
              <li>Choose Delete browsing data.</li>
              <li>Select Cookies and other site data.</li>
              <li>Confirm deletion.</li>
            </ol>

            <h3>Microsoft Edge</h3>
            <ol>
              <li>Open Settings.</li>
              <li>Select Privacy, Search and Services.</li>
              <li>Choose Clear browsing data.</li>
              <li>Select Cookies and other site data.</li>
            </ol>

            <h3>Safari</h3>
            <ol>
              <li>Open Safari Settings.</li>
              <li>Select Privacy.</li>
              <li>Choose Manage Website Data.</li>
              <li>Remove stored cookies.</li>
            </ol>

            <h3>Firefox</h3>
            <ol>
              <li>Open Settings.</li>
              <li>Select Privacy &amp; Security.</li>
              <li>Choose Cookies and Site Data.</li>
              <li>Remove stored data.</li>
            </ol>

            <p>Disabling cookies may affect certain website features, including personalised property searches, enquiry functionality or website performance.</p>
          </section>

          <section>
            <h2>7. Privacy Notice and Transparency</h2>
            <p>Halle is committed to protecting personal information in accordance with the <strong>UK General Data Protection Regulation (UK GDPR)</strong> and the <strong>Data Protection Act 2018</strong>.</p>
            <p>Where personal information is collected through cookies, enquiry forms, valuation requests or website interactions, we provide clear information about:</p>
            <ul>
              <li>What information is collected.</li>
              <li>Why information is collected.</li>
              <li>How information is stored and processed.</li>
              <li>Third parties involved in processing.</li>
              <li>Your legal rights regarding your information.</li>
            </ul>
            <p>Our full Privacy Policy explains how we collect, use, store and protect personal data.</p>
            <p>Users should review our Privacy Policy for complete information regarding personal data processing and their rights under UK GDPR.</p>
          </section>

          <section>
            <h2>8. Data Protection and Security</h2>
            <p>We take appropriate technical and organisational measures to protect information collected through cookies and website interactions.</p>
            <p>Access to collected information is restricted to authorised personnel and trusted service providers who require access for legitimate business purposes.</p>
            <p>We do not sell personal information collected through our website.</p>
          </section>

          <section>
            <h2>9. Changes to This Cookie Policy</h2>
            <p>Halle may update this Cookie Policy from time to time to reflect changes in technology, legislation, regulatory requirements or our website services.</p>
            <p>Any updated version will be published on this page with a revised update date.</p>
            <p>We recommend checking this page periodically to remain informed about how we use cookies and tracking technologies.</p>
          </section>

          <section>
            <h2>10. Contact Us</h2>
            <p>If you have any questions regarding this Cookie Policy or how we use cookies, please contact:</p>
            <address>
              <strong>Halleuk Ltd</strong><br />
              2-3 Walsall Road<br />
              Willenhall<br />
              West Midlands<br />
              WV13 2EH<br /><br />
              <strong>Email:</strong> <a href="mailto:info@halleuk.com">info@halleuk.com</a>
            </address>
            <p>For questions regarding personal data processing, please refer to our Privacy Policy or contact our team directly.</p>
          </section>
        </article>
      </main>

      <footer className="legal-footer">Halleuk Ltd · Company Number 13459060 · England and Wales</footer>
    </div>
  );
}

export default CookiePolicy;
