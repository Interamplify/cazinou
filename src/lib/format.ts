export function formatCurrency(amount: number, currency: string = 'RON'): string {
  return new Intl.NumberFormat('ro-RO', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount) + ' ' + currency;
}

export function formatRating(rating: number): string {
  return rating.toFixed(1);
}

export function formatPercentage(value: number): string {
  return `${value}%`;
}

export function formatRTP(rtp: number): string {
  return `${rtp.toFixed(2)}%`;
}
