import { Idea } from "@/types";
import { mockIdeas } from "@/mocks/ideas";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "";

export const dashboardService = {
  // HOOK: Replace with Supabase / API call in Phase 3
  async getSavedIdeas(): Promise<Idea[]> {
    // --- MOCK ---
    await new Promise((r) => setTimeout(r, 600));
    return mockIdeas;

    // --- REAL ---
    // const res = await fetch(`${API_BASE}/api/dashboard/ideas`);
    // return res.json();
  },

  async saveIdea(idea: Idea): Promise<void> {
    // --- MOCK ---
    console.log("Dashboard: saved idea", idea.id);

    // --- REAL ---
    // await fetch(`${API_BASE}/api/dashboard/ideas`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(idea),
    // });
  },

  async removeIdea(id: string): Promise<void> {
    // --- MOCK ---
    console.log("Dashboard: removed idea", id);

    // --- REAL ---
    // await fetch(`${API_BASE}/api/dashboard/ideas/${id}`, { method: "DELETE" });
  },
};
