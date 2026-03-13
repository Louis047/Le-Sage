import { Idea } from "@/types";

export const mockIdeas: Idea[] = [
  {
    id: "1",
    title: "AI Powered Drug Interaction Checker for Polypharmacy Patients",
    description: "A platform leveraging NLP and knowledge graphs to analyze multi-drug interactions in real time, reducing adverse drug events in elderly patients managing 5+ medications simultaneously.",
    field: "healthtech",
    noveltyScore: 87,
    feasibilityScore: 74,
    confidenceScore: 81,
    citations: [
      { title: "Deep learning approaches for drug-drug interaction prediction", authors: ["Chen, X.", "Liu, Y."], source: "Nature Machine Intelligence", url: "https://arxiv.org/abs/2301.00000", year: 2024 },
      { title: "Polypharmacy management with AI: A systematic review", authors: ["Smith, R.", "Patel, S."], source: "Journal of Medical Internet Research", url: "https://pubmed.ncbi.nlm.nih.gov/", year: 2024 },
    ],
    createdAt: "2026-03-10",
  },
  {
    id: "2",
    title: "Federated Learning Platform for Cross Institutional Medical Research",
    description: "Enables hospitals to collaboratively train ML models on sensitive patient data without sharing raw data, using federated learning protocols that maintain HIPAA compliance.",
    field: "healthtech",
    noveltyScore: 92,
    feasibilityScore: 68,
    confidenceScore: 78,
    citations: [
      { title: "Federated learning in medicine: facilitating multi-institutional collaborations", authors: ["Rieke, N.", "Hancox, J."], source: "Nature Medicine", url: "https://arxiv.org/abs/2401.00000", year: 2024 },
    ],
    createdAt: "2026-03-11",
  },
  {
    id: "3",
    title: "Carbon Credit Verification Using Satellite Imagery and ML",
    description: "Automated verification system for carbon offset projects using multi-spectral satellite imagery, reducing fraud in voluntary carbon markets by providing transparent, auditable proof of sequestration.",
    field: "climatetech",
    noveltyScore: 85,
    feasibilityScore: 79,
    confidenceScore: 83,
    citations: [
      { title: "Remote sensing for carbon stock estimation: A review", authors: ["Wang, L.", "Fang, J."], source: "Remote Sensing of Environment", url: "https://arxiv.org/abs/2402.00000", year: 2025 },
      { title: "Machine learning approaches to carbon market integrity", authors: ["Torres, M."], source: "Environmental Science & Technology", url: "https://pubmed.ncbi.nlm.nih.gov/", year: 2025 },
    ],
    createdAt: "2026-03-09",
  },
  {
    id: "4",
    title: "Adaptive Microlearning Engine for Workforce Upskilling",
    description: "Uses spaced repetition algorithms combined with real time skill gap analysis to deliver personalized 5 minute learning modules to enterprise employees, improving knowledge retention by 3x.",
    field: "edtech",
    noveltyScore: 72,
    feasibilityScore: 88,
    confidenceScore: 85,
    citations: [
      { title: "Spaced repetition and microlearning: A meta-analysis", authors: ["Garcia, P.", "Kim, J."], source: "Educational Technology Research", url: "https://arxiv.org/abs/2403.00000", year: 2025 },
    ],
    createdAt: "2026-03-12",
  },
  {
    id: "5",
    title: "Decentralized Identity Verification for Cross Border Payments",
    description: "A self-sovereign identity protocol enabling instant KYC verification across borders using verifiable credentials, reducing onboarding time for international remittance services from days to minutes.",
    field: "fintech",
    noveltyScore: 88,
    feasibilityScore: 71,
    confidenceScore: 76,
    citations: [
      { title: "Self-sovereign identity for financial inclusion", authors: ["Dunphy, P.", "Petitcolas, F."], source: "IEEE Access", url: "https://arxiv.org/abs/2404.00000", year: 2025 },
      { title: "Verifiable credentials in cross-border finance", authors: ["Li, W."], source: "ACM Computing Surveys", url: "https://dl.acm.org/", year: 2024 },
    ],
    createdAt: "2026-03-08",
  },
];
