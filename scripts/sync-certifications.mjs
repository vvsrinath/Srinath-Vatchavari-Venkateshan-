import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

try {
  process.loadEnvFile?.(".env.local");
} catch {
  // No local env file — environment variables may still be set by the host.
}

const endpoint = process.env.LINKEDIN_CERTIFICATIONS_ENDPOINT;

if (!endpoint) {
  console.error(
    "Set LINKEDIN_CERTIFICATIONS_ENDPOINT in .env.local before running this script.",
  );
  process.exit(1);
}

const apiKey = process.env.LINKEDIN_CERTIFICATIONS_API_KEY;

const response = await fetch(endpoint, {
  headers: apiKey ? { Authorization: `Bearer ${apiKey}` } : undefined,
});

if (!response.ok) {
  throw new Error(`Certificate provider returned ${response.status}`);
}

const payload = await response.json();
const raw = Array.isArray(payload)
  ? payload
  : payload.certifications ?? payload.items ?? payload.data ?? [];

const items = raw.flatMap((entry) => {
  if (!entry || typeof entry !== "object") return [];
  const title = entry.title ?? entry.name ?? entry.displayName;
  if (!title) return [];
  return [
    {
      title,
      issuer: entry.issuer ?? entry.issuingOrganization ?? "Issued on LinkedIn",
      date: entry.date ?? entry.issuedDate ?? entry.issueDate,
      url: entry.url ?? entry.link,
    },
  ];
});

const here = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(here, "..", "data", "certifications.json");
await writeFile(target, `${JSON.stringify(items, null, 2)}\n`);
console.log(`Wrote ${items.length} certification(s) to ${target}`);
