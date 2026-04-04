// lib/search.ts
export function performSearch(query: string) {
  const data = [
    { title: "Breakthrough in Cancer Research 2026", description: "New immunotherapy treatments are showing 70% success rates in recent clinical trials." },
    { title: "Next-Gen AI in Medicine", description: "Artificial intelligence is now being used to predict tumor growth with 99% accuracy." },
    { title: "Global Health Milestones", description: "A summary of the biggest healthcare achievements in the first quarter of 2026." }
  ];

  return data.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase())
  );
}