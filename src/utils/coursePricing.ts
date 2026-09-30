import type { CoursePricing } from "@/components/courses/data/coursesData";

export const getCoursePricing = (pricing: CoursePricing) => {
  const activeDiscount = pricing.sale
    ? pricing.saleDiscount
    : pricing.discount;

  const sellingPrice = Math.round(
    pricing.fixedPrice * (1 - activeDiscount / 100)
  );

  const savings = pricing.fixedPrice - sellingPrice;

  return {
    activeDiscount,
    sellingPrice,
    savings,
  };
};

export const formatCurrency = (
  amount: number,
  currency: string
) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
};