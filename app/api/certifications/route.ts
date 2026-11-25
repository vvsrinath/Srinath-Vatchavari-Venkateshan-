import { NextResponse } from "next/server";
import { normaliseCertifications, type Certification } from "@/lib/certifications";
import staticCertifications from "@/data/certifications.json";

export const revalidate = 3600;

const cacheHeaders = {
  "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
};

export async function GET() {
  const endpoint = process.env.LINKEDIN_CERTIFICATIONS_ENDPOINT;
  const apiKey = process.env.LINKEDIN_CERTIFICATIONS_API_KEY;

  if (!endpoint) {
    return NextResponse.json(
      {
        items: normaliseCertifications(staticCertifications),
        source: "local",
        syncedAt: null,
      },
      { headers: cacheHeaders },
    );
  }

  try {
    const response = await fetch(endpoint, {
      headers: apiKey ? { Authorization: `Bearer ${apiKey}` } : undefined,
      next: { revalidate },
    });

    if (!response.ok) throw new Error(`Provider returned ${response.status}`);

    const items: Certification[] = normaliseCertifications(await response.json());

    return NextResponse.json(
      { items, source: "live", syncedAt: new Date().toISOString() },
      { headers: cacheHeaders },
    );
  } catch {
    return NextResponse.json(
      {
        items: normaliseCertifications(staticCertifications),
        source: "local",
        syncedAt: null,
      },
      { headers: cacheHeaders },
    );
  }
}
