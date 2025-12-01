import { formatDate } from "../utils/date";

const newsItems = [
    {
      date: new Date(Date.parse("2025-09-16")),
      content: "I began my PhD study at CS, Northwestern University!",
    },
    {
      date: new Date(Date.parse("2025-07-08")),
      content: `Our paper <a href="https://arxiv.org/abs/2508.04092" class="link">A Lazy Resynthesis Approach for Simultaneous T Gate and Two-Qubit Gate Optimization of Quantum Circuits</a> ` +
               `got accepted into <a href="https://qce.quantum.ieee.org/2025/" class="link">QCE'25</a>! `,
    },
    {
      date: new Date(Date.parse("2025-11-29")),
      content: `This site is officially alive on <a href="https://joshmtlau.com" class="link">joshmtlau.com</a>! If you're reading this you probably know about it already but I'd like to take a moment to celebrate it 🎉`
    },
  ]
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .map((item) => ({
      ...item,
      dateFormatted: formatDate(item.date),
    }));

export default newsItems;