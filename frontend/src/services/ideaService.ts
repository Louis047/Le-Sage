import { Idea } from "@/types";
import { mockIdeas } from "@/mocks/ideas";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "";

export const ideaService = {
  // HOOK: Replace mock with real API call in Phase 3
  async generateIdeas(field: string, noveltyLevel: number): Promise<Idea[]> {
    // --- MOCK (Phase 2) ---
    await new Promise((r) => setTimeout(r, 1800));
    const filtered = mockIdeas.filter((i) => i.field === field);
    return filtered.length > 0 ? filtered : mockIdeas.slice(0, 3);

    // --- REAL (Phase 3) ---
    // const res = await fetch(`${API_BASE}/api/ideas/generate`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ field, noveltyLevel }),
    // });
    // return res.json();
  },

  async getSavedIdeas(): Promise<Idea[]> {
    // --- MOCK ---
    await new Promise((r) => setTimeout(r, 500));
    return mockIdeas;

    // --- REAL ---
    // const res = await fetch(`${API_BASE}/api/dashboard/ideas`);
    // return res.json();
  },

  async saveIdea(idea: Idea): Promise<void> {
    // --- MOCK ---
    console.log("Saved idea:", idea.id);

    // --- REAL ---
    // await fetch(`${API_BASE}/api/dashboard/ideas`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(idea),
    // });
  },

  async deleteIdea(id: string): Promise<void> {
    // --- MOCK ---
    console.log("Deleted idea:", id);

    // --- REAL ---
    // await fetch(`${API_BASE}/api/dashboard/ideas/${id}`, { method: "DELETE" });
  },
};
