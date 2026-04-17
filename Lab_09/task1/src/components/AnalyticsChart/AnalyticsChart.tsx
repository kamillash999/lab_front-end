import { useMemo } from "react";

interface AnalyticsChartProps {
  items: string[];
}

// Имитация тяжелой функции 
function calculateAnalytics(items: string[]): number {
  console.log("Calculating analytics (heavy task)...");
  let result = 0;
  for (let i = 0; i < 10000000; i++) {
    result += Math.sqrt(i);
  }
  return result + items.length;
}

export function AnalyticsChart({ items }: AnalyticsChartProps) {
  // useMemo кэширует результат вычислений 
  const analytics = useMemo(() => calculateAnalytics(items), [items]);

  console.log("AnalyticsChart render");

  return (
    <div className="chart">
      <h3>Analytics Section</h3>
      <p>Calculated Heavy Value: {analytics}</p>
      <p>Items count: {items.length}</p>
    </div>
  );
}