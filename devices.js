// AppleCare+ pricing dataset (US). Sources cited in chat. Update as Apple revises pricing.

export const DEVICE_CATALOG = [
  // iPhone (with Theft & Loss)
  { id: 'iphone-16e', name: 'iPhone 16e', category: 'iPhone', monthly: 9.99,  annual: 99.99,  theftLossIncluded: true },
  { id: 'iphone-16', name: 'iPhone 16', category: 'iPhone', monthly: 11.99, annual: 119.99, theftLossIncluded: true },
  { id: 'iphone-15', name: 'iPhone 15', category: 'iPhone', monthly: 11.99, annual: 119.99, theftLossIncluded: true },
  { id: 'iphone-16-plus', name: 'iPhone 16 Plus', category: 'iPhone', monthly: 12.99, annual: 129.99, theftLossIncluded: true },
  { id: 'iphone-15-plus', name: 'iPhone 15 Plus', category: 'iPhone', monthly: 12.99, annual: 129.99, theftLossIncluded: true },
  { id: 'iphone-16-pro', name: 'iPhone 16 Pro', category: 'iPhone', monthly: 13.99, annual: 139.99, theftLossIncluded: true },
  { id: 'iphone-16-pro-max', name: 'iPhone 16 Pro Max', category: 'iPhone', monthly: 13.99, annual: 139.99, theftLossIncluded: true },

  // Mac (AppleCare+; annual here treated as 1-year equivalent for comparison)
  { id: 'mac-mini', name: 'Mac mini', category: 'Mac', monthly: 3.49, annual: 34.99 },
  { id: 'imac', name: 'iMac', category: 'Mac', monthly: 5.99, annual: 59.99 },
  { id: 'mac-studio', name: 'Mac Studio', category: 'Mac', monthly: 5.99, annual: 59.99 },
  { id: 'macbook-air-13', name: 'MacBook Air 13"', category: 'Mac', monthly: 6.99, annual: 69.99 },
  { id: 'macbook-air-15', name: 'MacBook Air 15"', category: 'Mac', monthly: 7.99, annual: 79.99 },
  { id: 'macbook-pro-14', name: 'MacBook Pro 14"', category: 'Mac', monthly: 9.99, annual: 99.99 },
  { id: 'macbook-pro-16', name: 'MacBook Pro 16"', category: 'Mac', monthly: 14.99, annual: 149.99 },
  { id: 'mac-pro', name: 'Mac Pro', category: 'Mac', monthly: 17.99, annual: 179.99 },

  // iPad (with Theft & Loss where applicable)
  { id: 'ipad', name: 'iPad', category: 'iPad', monthly: 4.99, annual: 49.99, theftLossIncluded: true },
  { id: 'ipad-mini', name: 'iPad mini', category: 'iPad', monthly: 4.99, annual: 49.99, theftLossIncluded: true },
  { id: 'ipad-air-11', name: 'iPad Air 11" (M3)', category: 'iPad', monthly: 5.99, annual: 59.99, theftLossIncluded: true },
  { id: 'ipad-air-13', name: 'iPad Air 13" (M3)', category: 'iPad', monthly: 6.99, annual: 69.99, theftLossIncluded: true },
  { id: 'ipad-pro-11-m4', name: 'iPad Pro 11" (M4)', category: 'iPad', monthly: 9.99, annual: 99.99, theftLossIncluded: true },
  { id: 'ipad-pro-13-m4', name: 'iPad Pro 13" (M4)', category: 'iPad', monthly: 10.99, annual: 109.99, theftLossIncluded: true },

  // Watch (with Theft & Loss)
  { id: 'watch-se', name: 'Apple Watch SE', category: 'Watch', monthly: 2.99, annual: 29.99, theftLossIncluded: true },
  { id: 'watch-series-10', name: 'Apple Watch Series 10', category: 'Watch', monthly: 4.99, annual: 49.99, theftLossIncluded: true },
  { id: 'watch-ultra-2', name: 'Apple Watch Ultra 2', category: 'Watch', monthly: 5.99, annual: 59.99, theftLossIncluded: true },
  { id: 'watch-hermes-10', name: 'Apple Watch Hermès', category: 'Watch', monthly: 5.99, annual: 59.99, theftLossIncluded: true },
  { id: 'watch-hermes-ultra', name: 'Apple Watch Hermès Ultra', category: 'Watch', monthly: 5.99, annual: 59.99, theftLossIncluded: true },

  // Displays
  { id: 'studio-display', name: 'Apple Studio Display', category: 'Display', monthly: 4.99, annual: 49.99 },
  { id: 'pro-display-xdr', name: 'Pro Display XDR', category: 'Display', monthly: 17.99, annual: 179.99 },

  // Audio
  { id: 'airpods', name: 'AirPods', category: 'Audio', monthly: 1.49, annual: 14.99 },
  { id: 'airpods-pro-2', name: 'AirPods Pro', category: 'Audio', monthly: 1.49, annual: 14.99 },
  { id: 'beats', name: 'Beats (eligible models)', category: 'Audio', monthly: 1.49, annual: 14.99 },
  { id: 'airpods-max', name: 'AirPods Max', category: 'Audio', monthly: 2.99, annual: 29.99 },

  // TV / Home (annual-only; monthly approximated)
  { id: 'apple-tv-4k', name: 'Apple TV 4K', category: 'Home', monthly: +(9.99/12).toFixed(2), annual: 9.99 },
  { id: 'homepod-mini', name: 'HomePod mini', category: 'Home', monthly: +(9.99/12).toFixed(2), annual: 9.99 },
  { id: 'homepod', name: 'HomePod', category: 'Home', monthly: +(19.99/12).toFixed(2), annual: 19.99 },

  // Vision
  { id: 'apple-vision-pro', name: 'Apple Vision Pro', category: 'Vision', monthly: 24.99, annual: 249.99 },
];

export const POPULAR = [
  'iphone-16-pro',
  'macbook-pro-14',
  'watch-series-10',
  'airpods-pro-2',
  'apple-vision-pro'
];

export function findDeviceByNameOrId(query) {
  if (!query) return null;
  const normalized = String(query).trim().toLowerCase();
  return (
    DEVICE_CATALOG.find(d => d.id === normalized) ||
    DEVICE_CATALOG.find(d => d.name.toLowerCase() === normalized) ||
    DEVICE_CATALOG.find(d => d.name.toLowerCase().includes(normalized)) ||
    null
  );
}

export function currency(amount) {
  if (Number.isNaN(amount) || amount == null) return '$0.00';
  return new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(amount);
}


