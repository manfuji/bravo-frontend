const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

export default async (req, res) => {
  const links = [
    { url: "/", changefreq: "daily", priority: 0.8 },
    { url: "/contact", changefreq: "daily", priority: 0.4 },
    { url: "/about", changefreq: "daily", priority: 0.4 },
    { url: "/location", changefreq: "daily", priority: 0.4 },
    { url: "/event", changefreq: "daily", priority: 0.4 },
    { url: "/gallery", changefreq: "daily", priority: 0.4 },
    { url: "/job", changefreq: "daily", priority: 0.4 },
    { url: "/product/1", changefreq: "daily", priority: 0.4 },
  ];

  const stream = new SitemapStream({
    hostname: `https://${req.headers.host}`,
  });
  res.writeHead(200, {
    "Content-Type": "application/xml",
  });
  const xmlsrting = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());
  res.end(xmlsrting);
};
