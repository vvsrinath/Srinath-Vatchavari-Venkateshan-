export type Certification = {
  title: string;
  issuer: string;
  date?: string;
  url?: string;
};

function asRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}

function firstString(record: Record<string, unknown>, keys: string[]): string | undefined {
  for (const key of keys) {
    const value = record[key];
    if (typeof value === "string" && value.trim()) return value.trim();
  }
  return undefined;
}

export function normaliseCertifications(input: unknown): Certification[] {
  const root = asRecord(input);
  const raw = Array.isArray(input)
    ? input
    : (root?.certifications ?? root?.items ?? root?.data ?? []);

  if (!Array.isArray(raw)) return [];

  return raw.flatMap((entry) => {
    const record = asRecord(entry);
    if (!record) return [];

    const title =
      firstString(record, ["title", "name", "displayName", "certificationName"]) ??
      "";
    const issuer =
      firstString(record, ["issuer", "issuingOrganization", "organization", "company"]) ??
      "Issued on LinkedIn";

    if (!title) return [];

    const url =
      firstString(record, ["url", "link", "credentialUrl"]) ??
      firstString(asRecord(record.credential ?? {}) ?? {}, ["url", "link"]);

    return [
      {
        title,
        issuer,
        date: firstString(record, ["date", "issuedDate", "issueDate", "issuedOn"]),
        url,
      },
    ];
  });
}
