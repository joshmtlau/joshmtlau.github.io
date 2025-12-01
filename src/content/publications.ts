const publications = [
  {
    title:
      "Qsyn: A Developer-Friendly Quantum Circuit Synthesis Framework for NISQ Era and Beyond [Poster]",
    url: "https://ieeexplore.ieee.org/abstract/document/10821024",
    authors: [
      "Mu-Te Lau",
      "Chin-Yi Cheng",
      "Cheng-Hua Lu",
      "et al.",
      "Chung-Yang (Ric) Huang",
    ],
    venue: "QCE'24",
    date: new Date(Date.parse("2024-07-31")),
  },
  {
    title:
      "A Lazy Resynthesis Approach for Simultaneous T Gate and Two-Qubit Gate Optimization of Quantum Circuits",
    authors: [
      "Mu-Te Lau",
      "Hsiang-Chun Yang",
      "Hsin-Yu Chen",
      "Chung-Yang (Ric) Huang",
    ],
    url: "https://arxiv.org/abs/2508.04092",
    venue: "QCE'25",
    date: new Date(Date.parse("2025-07-08")),
  },
  {
    title:
      "Multi-Objective Quantum Circuit Optimization by Combining Tableau-Based and ZX-Diagram-Based Techniques",
    authors: ["Mu-Te Lau", "(Advisor: Chung-Yang (Ric) Huang)"],
    url: "https://www.airitilibrary.com/Article/Detail?DocID=U0001-0505240731341058",
    venue: "Master's Thesis",
    date: new Date(Date.parse("2024-08-14")),
  },
].sort(
  (a, b) => (b.date?.getTime() ?? 0) - (a.date?.getTime() ?? 0),
);

export default publications;


