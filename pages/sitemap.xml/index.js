const DOMAIN = 'http://localhost:3000';

function generateSiteMap(pages) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${DOMAIN}</loc>
     </url>
     <url>
       <loc>${DOMAIN}/about</loc>
     </url>
     ${pages.map((page) => {
        return `
          <url>
            <loc>${DOMAIN}${page.route}</loc>
          </url>
        `;
     }).join('')}
   </urlset>
 `;
}

const SiteMap = () => {
  return null;
};

export async function getServerSideProps({ res }) {
  const pages = [
    { route: '/' },
    { route: '/about' },
    { route: '/contact' },
    { route: '/services' },
    { route: '/testimonials' },
    { route: '/work' },
    { route: '/projects' },
    { route: '/projects/weather' },
  ]

  const sitemap = generateSiteMap(pages);

  res.setHeader('Content-Type', 'text/xml');

  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
