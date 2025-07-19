const legalDocs = [
  { name: "Website Disclaimer", file: "website-disclaimer.pdf" },
  { name: "Whistleblowing Policy", file: "whistleblowing-policy.pdf" },
  { name: "Digital Risk Disclosure", file: "digital-risk-disclosure.pdf" },
  { name: "Responsible Individuals", file: "responsible-individuals.pdf" },
  { name: "Complaints Handling", file: "complaints-handling.pdf" },
  { name: "Terms of Service", file: "terms-of-service.pdf" },
  { name: "Regulatory Disclosures", file: "regulatory-disclosures.pdf" },
  { name: "Privacy Policy", file: "privacy-policy.pdf" },
  { name: "Anti-Bribery & Corruption Statement", file: "anti-bribery-corruption.pdf" },
  { name: "Conflict of Interest Policy", file: "conflict-of-interest-policy.pdf" },
  { name: "AML Compliance Statement", file: "aml-compliance.pdf" },
];

export default function Footer() {
  return (
    <footer className="legal-footer">
      <div className="legal-footer-container">
        <h3 className="legal-footer-title">Legal Documents</h3>
        <div className="legal-docs-grid">
          {legalDocs.map((doc, i) => (
            <a
              key={i}
              className="legal-doc-link"
              href={doc.file}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              {doc.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
