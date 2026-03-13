import { Expert } from "@/types";
import { mockExperts } from "@/mocks/experts";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "";

export const expertService = {
  // HOOK: Replace mock with real API call in Phase 3
  async getExperts(field?: string): Promise<Expert[]> {
    // --- MOCK ---
    await new Promise((r) => setTimeout(r, 800));
    if (field) return mockExperts.filter((e) => e.field === field);
    return mockExperts;

    // --- REAL ---
    // const params = field ? `?field=${field}` : "";
    // const res = await fetch(`${API_BASE}/api/experts${params}`);
    // return res.json();
  },
};
