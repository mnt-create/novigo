type FormatPriceOptions = {
  currency?: string;
  locale?: string;
  minimumFractionDigits?: number;
};

export function formatPrice(
  amount: number,
  { currency = "USD", locale = "en-US", minimumFractionDigits = 0 }: FormatPriceOptions = {},
) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits,
    maximumFractionDigits: minimumFractionDigits > 0 ? 2 : 0,
  }).format(amount);
}
