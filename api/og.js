export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.send(`<!DOCTYPE html>
<html>
<head>
  <meta property="og:title" content="Jhon Fredy Hidalgo | Full Stack Developer" />
  <meta property="og:description" content="Portfolio of Jhon Fredy Hidalgo, full stack developer specialized in scalable products, high performance and user experience." />
  <meta property="og:image" content="https://dev-portafolio-kappa.vercel.app/og-image.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:url" content="https://dev-portafolio-kappa.vercel.app/" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="https://dev-portafolio-kappa.vercel.app/og-image.jpg" />
  <meta http-equiv="refresh" content="0;url=https://dev-portafolio-kappa.vercel.app/" />
</head>
<body>Redirecting...</body>
</html>`);
}