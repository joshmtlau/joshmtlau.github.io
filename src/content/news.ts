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
      dateFormatted: `${item.date.getFullYear()}-${String(item.date.getMonth() + 1).padStart(2, "0")}-${String(item.date.getDate() + 1).padStart(2, "0")}`,
    }));

export default newsItems;