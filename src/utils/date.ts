/**
 * Formats a date to yyyy-MM-dd format
 * @param date - The date to format
 * @returns The formatted date string in yyyy-MM-dd format
 */
export function formatDate(date: Date): string {
  return date.toISOString().split("T")[0];
}

// yyyy-MM
export function formatYearMonth(date: Date): string {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}
