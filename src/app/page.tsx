import type { Metadata } from "next";
import { Homepage } from "../features/homepage/homepage";

export const metadata: Metadata = {
  description:
    "Plan Indian wedding ceremonies, coordinate tasks with family, track expenses, and manage guest invitations in one shared workspace.",
};

export default function HomePage() {
  return <Homepage />;
}
