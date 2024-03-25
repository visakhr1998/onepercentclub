export const defaultPlanId = "free"

export const pricingPlans = [
  {
    id: "free",
    name: "Free",
    description: "A free plan to get you started!",
    price: "$0",
    priceIntervalName: "per month",
    stripe_price_id: null,
    features: ["Limited swiping", "Match with people", "Chat with people"],
  },
  {
    id: "pro",
    name: "Pro",
    description:
      "A plan to further meet people. Browse with no restrictions.",
    price: "$5",
    priceIntervalName: "per month",
    stripe_price_id: "price_1NkdZCHMjzZ8mGZnRSjUm4yA",
    stripe_product_id: "prod_OXj1CcemGMWOlU",
    features: [
      "Everything in Free",
      "Unlimited matches",
      "Unlimited likes",
    ],
  },
  {
    id: "Plus",
    name: "Plus",
    description:
      "A plan without any restrictions.",
    price: "$15",
    priceIntervalName: "per month",
    stripe_price_id: "price_1Nkda2HMjzZ8mGZn4sKvbDAV",
    stripe_product_id: "prod_OXj20YNpHYOXi7",
    features: [
      "Everything in Pro",
      "Travel Mode",
      "Filters",
    ],
  },
]