import { UserPreferences } from "@/types";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "";

export const onboardingService = {
  // HOOK: Replace with Supabase / API call in Phase 3
  async savePreferences(prefs: UserPreferences): Promise<void> {
    // --- MOCK ---
    localStorage.setItem("ideaforge_prefs", JSON.stringify(prefs));
    console.log("Preferences saved:", prefs);

    // --- REAL ---
    // await fetch(`${API_BASE}/api/onboarding/preferences`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(prefs),
    // });
  },

  getPreferences(): UserPreferences | null {
    if (typeof window === "undefined") return null;
    const stored = localStorage.getItem("ideaforge_prefs");
    return stored ? JSON.parse(stored) : null;
  },

  hasCompletedOnboarding(): boolean {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("ideaforge_prefs") !== null;
  },
};
