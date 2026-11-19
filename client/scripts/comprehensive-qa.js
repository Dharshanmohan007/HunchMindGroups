const http = require("http");
const { spawn } = require("child_process");
const path = require("path");

const PORT = 3007;
const BASE_URL = `http://127.0.0.1:${PORT}`;

const EXPECTED_PAGES = [
  {
    path: "/",
    expectedCanonical: "https://www.hunchmindintelligence.com",
    schemaTypes: ["Organization", "WebSite", "ItemList"],
  },
  {
    path: "/about",
    expectedCanonical: "https://www.hunchmindintelligence.com/about",
    schemaTypes: ["AboutPage", "BreadcrumbList", "FAQPage"],
  },
  {
    path: "/products/hmi-nexus",
    expectedCanonical: "https://www.hunchmindintelligence.com/products/hmi-nexus",
    schemaTypes: ["Product", "BreadcrumbList", "FAQPage"],
  },
  {
    path: "/solutions/ai-logistics-intelligence",
    expectedCanonical: "https://www.hunchmindintelligence.com/solutions/ai-logistics-intelligence",
    schemaTypes: ["Service", "BreadcrumbList", "FAQPage"],
  },
  {
    path: "/solutions/cold-chain-logistics",
    expectedCanonical: "https://www.hunchmindintelligence.com/solutions/cold-chain-logistics",
    schemaTypes: ["Service", "BreadcrumbList", "FAQPage"],
  },
  {
    path: "/solutions/supply-chain-visibility-iot",
    expectedCanonical: "https://www.hunchmindintelligence.com/solutions/supply-chain-visibility-iot",
    schemaTypes: ["Service", "BreadcrumbList", "FAQPage"],
  },
  {
    path: "/solutions/predictive-freight-routing",
    expectedCanonical: "https://www.hunchmindintelligence.com/solutions/predictive-freight-routing",
    schemaTypes: ["Service", "BreadcrumbList", "FAQPage"],
  },
  {
    path: "/solutions/agricultural-supply-chain",
    expectedCanonical: "https://www.hunchmindintelligence.com/solutions/agricultural-supply-chain",
    schemaTypes: ["Service", "BreadcrumbList", "FAQPage"],
  },
];

function fetchEndpoint(urlPath) {
  return new Promise((resolve, reject) => {
    http.get(`${BASE_URL}${urlPath}`, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
    }).on("error", reject);
  });
}

async function runQA() {
  console.log("=== HUNCHMIND GROUP FINAL SEO & QUALITY ASSURANCE ===");
  console.log(`Starting local production server on port ${PORT}...`);

  const server = spawn("npx", ["next", "start", "-p", String(PORT)], {
    cwd: path.resolve(__dirname, ".."),
    shell: true,
    stdio: ["ignore", "pipe", "pipe"],
  });

  server.stdout.on("data", (d) => process.stdout.write(`[SERVER] ${d.toString()}`));
  server.stderr.on("data", (d) => process.stderr.write(`[SERVER ERR] ${d.toString()}`));

  // Wait for server to become responsive
  let ready = false;
  for (let i = 0; i < 30; i++) {
    try {
      await fetchEndpoint("/");
      ready = true;
      break;
    } catch (e) {
      await new Promise((r) => setTimeout(r, 1000));
    }
  }

  if (!ready) {
    console.error("Local production server failed to start within 30 seconds.");
    server.kill();
    process.exit(1);
  }

  console.log("\n--- 1. VERIFYING ALL 7 CANONICAL HTML PAGES ---");
  const titles = new Map();
  const descriptions = new Map();
  const allInternalLinks = new Set();
  let totalErrors = 0;

  for (const page of EXPECTED_PAGES) {
    const res = await fetchEndpoint(page.path);
    console.log(`\nTesting Page: ${page.path}`);

    // HTTP 200
    if (res.status === 200) {
      console.log(`  ✓ HTTP Status: 200 OK`);
    } else {
      console.error(`  ✗ HTTP Status: ${res.status}`);
      totalErrors++;
    }

    const html = res.body;

    // Check noindex
    if (html.includes("noindex")) {
      console.error(`  ✗ Accidental noindex detected!`);
      totalErrors++;
    } else {
      console.log(`  ✓ No accidental noindex`);
    }

    // Canonical tag check
    const canonicalMatch = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i) ||
                           html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i);
    if (canonicalMatch) {
      const canonicalHref = canonicalMatch[1];
      if (canonicalHref === page.expectedCanonical) {
        console.log(`  ✓ Canonical URL: ${canonicalHref}`);
      } else {
        console.error(`  ✗ Canonical Mismatch: expected ${page.expectedCanonical}, got ${canonicalHref}`);
        totalErrors++;
      }
    } else {
      console.error(`  ✗ Missing canonical link tag`);
      totalErrors++;
    }

    // Title tag check
    const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
    if (titleMatch && titleMatch[1].trim()) {
      const title = titleMatch[1].trim();
      if (titles.has(title)) {
        console.error(`  ✗ Duplicate title with ${titles.get(title)}: "${title}"`);
        totalErrors++;
      } else {
        titles.set(title, page.path);
        console.log(`  ✓ Unique Title: "${title}"`);
      }
    } else {
      console.error(`  ✗ Missing or empty <title> tag`);
      totalErrors++;
    }

    // Meta description check
    const descMatch = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i) ||
                        html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']description["']/i);
    if (descMatch && descMatch[1].trim()) {
      const desc = descMatch[1].trim();
      if (descriptions.has(desc)) {
        console.error(`  ✗ Duplicate description with ${descriptions.get(desc)}: "${desc}"`);
        totalErrors++;
      } else {
        descriptions.set(desc, page.path);
        console.log(`  ✓ Unique Meta Description: "${desc.substring(0, 60)}..."`);
      }
    } else {
      console.error(`  ✗ Missing or empty meta description`);
      totalErrors++;
    }

    // Heading hierarchy: H1, H2, H3
    const h1Matches = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
    const h2Matches = html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/gi) || [];
    const h3Matches = html.match(/<h3[^>]*>([\s\S]*?)<\/h3>/gi) || [];

    if (h1Matches.length === 1) {
      console.log(`  ✓ Heading H1: Exactly 1 H1 found`);
    } else {
      console.error(`  ✗ Heading H1 Issue: Found ${h1Matches.length} H1 tags`);
      totalErrors++;
    }
    console.log(`  ✓ Heading H2 count: ${h2Matches.length}, H3 count: ${h3Matches.length}`);

    // Structured Data (JSON-LD)
    const jsonLdMatches = html.match(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi) || [];
    const foundSchemas = [];
    for (const tag of jsonLdMatches) {
      const content = tag.replace(/<script[^>]*>/i, "").replace(/<\/script>/i, "").trim();
      try {
        const parsed = JSON.parse(content);
        const type = parsed["@type"] || (parsed["@graph"] && parsed["@graph"].map((g) => g["@type"]).join(", "));
        foundSchemas.push(type);
      } catch (e) {
        console.error(`  ✗ Invalid JSON-LD block: ${e.message}`);
        totalErrors++;
      }
    }
    console.log(`  ✓ Found JSON-LD Schemas: ${foundSchemas.join(", ")}`);
    for (const expectedType of page.schemaTypes) {
      if (!foundSchemas.includes(expectedType)) {
        console.error(`  ✗ Missing expected Schema.org type: ${expectedType}`);
        totalErrors++;
      }
    }

    // Contact Form check
    if (html.includes('id="contact"') || html.includes('form') || html.includes('Submit Message')) {
      console.log(`  ✓ Contact / Enquiry Form present on page`);
    } else {
      console.error(`  ✗ Contact / Enquiry Form missing`);
      totalErrors++;
    }

    // Collect internal links
    const linkMatches = html.matchAll(/href=["'](\/[^"']*)["']/gi);
    for (const m of linkMatches) {
      const href = m[1];
      if (!href.startsWith("/_next") && !href.startsWith("/api")) {
        allInternalLinks.add(href.split("#")[0] || "/");
      }
    }
  }

  console.log("\n--- 2. VERIFYING INTERNAL LINKS ---");
  console.log(`Discovered ${allInternalLinks.size} internal paths: ${Array.from(allInternalLinks).join(", ")}`);
  for (const internalPath of allInternalLinks) {
    if (internalPath === "" || internalPath === "/") continue;
    const linkRes = await fetchEndpoint(internalPath);
    if (linkRes.status === 200) {
      console.log(`  ✓ Internal Link ${internalPath}: 200 OK`);
    } else {
      console.error(`  ✗ Internal Link Broken: ${internalPath} returned ${linkRes.status}`);
      totalErrors++;
    }
  }

  console.log("\n--- 3. VERIFYING DYNAMIC SITEMAP.XML ---");
  const sitemapRes = await fetchEndpoint("/sitemap.xml");
  if (sitemapRes.status === 200 && sitemapRes.headers["content-type"].includes("xml")) {
    console.log(`  ✓ /sitemap.xml Status: 200 OK (${sitemapRes.headers["content-type"]})`);
    const locMatches = sitemapRes.body.match(/<loc>([^<]+)<\/loc>/g) || [];
    console.log(`  ✓ Total URLs in sitemap: ${locMatches.length} (Expected: 8)`);
    if (locMatches.length === 8) {
      console.log(`  ✓ Sitemap contains exactly 8 canonical URLs:`);
      for (const loc of locMatches) {
        const cleanLoc = loc.replace("<loc>", "").replace("</loc>", "");
        console.log(`    - ${cleanLoc}`);
        if (!cleanLoc.startsWith("https://www.hunchmindintelligence.com")) {
          console.error(`    ✗ Non-canonical domain in sitemap: ${cleanLoc}`);
          totalErrors++;
        }
      }
    } else {
      console.error(`  ✗ Sitemap URL count mismatch: found ${locMatches.length}, expected 8`);
      totalErrors++;
    }
  } else {
    console.error(`  ✗ /sitemap.xml Failed: Status ${sitemapRes.status}`);
    totalErrors++;
  }

  console.log("\n--- 4. VERIFYING ROBOTS.TXT ---");
  const robotsRes = await fetchEndpoint("/robots.txt");
  if (robotsRes.status === 200 && robotsRes.headers["content-type"].includes("text/plain")) {
    console.log(`  ✓ /robots.txt Status: 200 OK`);
    if (robotsRes.body.includes("Sitemap: https://www.hunchmindintelligence.com/sitemap.xml")) {
      console.log(`  ✓ References correct sitemap URL`);
    } else {
      console.error(`  ✗ Incorrect sitemap in robots.txt`);
      totalErrors++;
    }
    if (robotsRes.body.includes("Disallow: /api/")) {
      console.log(`  ✓ Disallows private /api/ routes`);
    } else {
      console.error(`  ✗ Missing Disallow: /api/`);
      totalErrors++;
    }
  } else {
    console.error(`  ✗ /robots.txt Failed: Status ${robotsRes.status}`);
    totalErrors++;
  }

  console.log("\n--- 5. VERIFYING MANIFEST.WEBMANIFEST ---");
  const manifestRes = await fetchEndpoint("/manifest.webmanifest");
  if (manifestRes.status === 200) {
    console.log(`  ✓ /manifest.webmanifest Status: 200 OK`);
  } else {
    console.error(`  ✗ /manifest.webmanifest Failed: Status ${manifestRes.status}`);
    totalErrors++;
  }

  server.kill();
  console.log("\n=== QA SUMMARY ===");
  if (totalErrors === 0) {
    console.log("🎉 ALL QUALITY ASSURANCE CHECKS PASSED WITH ZERO ERRORS!");
    process.exit(0);
  } else {
    console.error(`❌ QA FAILED WITH ${totalErrors} ERRORS.`);
    process.exit(1);
  }
}

runQA().catch((err) => {
  console.error("QA script failed:", err);
  process.exit(1);
});
