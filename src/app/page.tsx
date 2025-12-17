import Link from "next/link";
import { CornerAccents } from "@campnetwork/ui-kit/corner";

const categories = [
  {
    title: "Buttons",
    description: "Button variants, sizes, and ActionButton",
    href: "/components/buttons",
  },
  {
    title: "Cards",
    description: "Card, InfoCard, ItemCard, FeatureCard",
    href: "/components/cards",
  },
  {
    title: "Inputs",
    description: "Input, Label, Switch, Slider, PriceInput",
    href: "/components/inputs",
  },
  {
    title: "Dialogs",
    description: "Dialog, AlertDialog, Drawer, ResponsiveDialog",
    href: "/components/dialogs",
  },
  {
    title: "Overlays",
    description: "Dropdown, Tooltip",
    href: "/components/overlays",
  },
  {
    title: "Feedback",
    description: "Toast, BarLoader, SpinLoader",
    href: "/components/feedback",
  },
  {
    title: "Data Display",
    description: "PriceDisplay, Code, ScrollArea, Box",
    href: "/components/data-display",
  },
  {
    title: "Forms",
    description: "Form with validation and all sub-components",
    href: "/components/forms",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-3xl font-semibold uppercase font-geist tracking-tight mb-2">
            @campnetwork/ui-kit
          </h1>
          <p className="text-text-secondary">
            A collection of reusable React UI components built with Tailwind CSS
            and Framer Motion
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="relative block p-6 bg-white border border-border hover:border-pumpkin-600 transition-colors group !no-underline"
            >
              <CornerAccents color="#D7D5D3" padding={8} />
              <h2 className="text-lg font-semibold uppercase font-geist mb-2 group-hover:text-pumpkin-600 transition-colors">
                {category.title}
              </h2>
              <p className="text-sm text-text-secondary">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
