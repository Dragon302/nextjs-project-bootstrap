import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">
          Button UI/UX Demo
        </h1>
        <p className="text-lg text-gray-600 max-w-md mx-auto">
          Explore different button states (Default, Hover, Disabled) in both light and dark themes.
        </p>
        <div className="space-y-4">
          <Link href="/button-demo">
            <Button size="lg" className="px-8 py-3 text-base">
              View Button Demo
            </Button>
          </Link>
          <div className="text-sm text-gray-500">
            Navigate to /button-demo to see all button states
          </div>
        </div>
      </div>
    </div>
  );
}
