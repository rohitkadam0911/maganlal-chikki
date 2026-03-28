// next.config.js
const nextConfig = {
  // your existing config...
};

// Suppress Axios url.parse deprecation warning
const originalEmit = process.emit;
process.emit = function (name, data) {
  if (name === 'warning' && data?.name === 'DeprecationWarning' && data?.message?.includes('url.parse')) {
    return false;
  }
  return originalEmit.apply(process, arguments);
};

export default nextConfig;