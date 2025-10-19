/**
 * Formats a date to yyyy-MM-dd format
 * @param date - The date to format
 * @returns The formatted date string in yyyy-MM-dd format
 */
export function formatDate(date: Date): string {
  return date.toISOString().split("T")[0];
}
