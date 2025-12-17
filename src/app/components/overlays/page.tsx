"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Dropdown,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@campnetwork/ui-kit/dropdown";
import { Tooltip } from "@campnetwork/ui-kit/tooltip";
import { Button } from "@campnetwork/ui-kit/button";

export default function OverlaysPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <main className="min-h-screen p-8 md:p-16">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="text-sm text-text-secondary hover:text-pumpkin-600 mb-8 block"
        >
          &larr; Back to Home
        </Link>

        <h1 className="text-2xl font-semibold uppercase font-geist tracking-tight mb-8">
          Overlays
        </h1>

        {/* Simple Dropdown */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            Dropdown (Simple API)
          </h2>
          <div className="flex gap-4">
            <Dropdown
              trigger={<Button variant="outline">Select Option</Button>}
              items={[
                { label: "Profile", onClick: () => setSelected("Profile") },
                { label: "Settings", onClick: () => setSelected("Settings") },
                { label: "Billing", onClick: () => setSelected("Billing") },
                {
                  label: "Sign Out",
                  onClick: () => setSelected("Sign Out"),
                  isDestructive: true,
                },
              ]}
            />
            <Dropdown
              trigger={<Button variant="outline">Left Aligned</Button>}
              align="left"
              items={[
                { label: "Option 1", onClick: () => setSelected("Option 1") },
                { label: "Option 2", onClick: () => setSelected("Option 2") },
                { label: "Option 3", onClick: () => setSelected("Option 3") },
              ]}
            />
          </div>
          {selected && (
            <p className="text-sm text-text-secondary mt-4">
              Selected: <span className="font-semibold">{selected}</span>
            </p>
          )}
        </section>

        {/* Dropdown with Active State */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            Dropdown with Active State
          </h2>
          <Dropdown
            trigger={
              <Button variant="outline">Filter: {selected || "All"}</Button>
            }
            items={[
              {
                label: "All",
                onClick: () => setSelected(null),
                isActive: !selected,
              },
              {
                label: "Active",
                onClick: () => setSelected("Active"),
                isActive: selected === "Active",
              },
              {
                label: "Pending",
                onClick: () => setSelected("Pending"),
                isActive: selected === "Pending",
              },
              {
                label: "Completed",
                onClick: () => setSelected("Completed"),
                isActive: selected === "Completed",
              },
            ]}
          />
        </section>

        {/* Tooltip */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            Tooltip
          </h2>
          <div className="flex flex-wrap gap-4">
            <Tooltip content="This is a tooltip" side="top">
              <Button variant="outline">Hover (Top)</Button>
            </Tooltip>
            <Tooltip content="Right side tooltip" side="right">
              <Button variant="outline">Hover (Right)</Button>
            </Tooltip>
            <Tooltip content="Bottom tooltip" side="bottom">
              <Button variant="outline">Hover (Bottom)</Button>
            </Tooltip>
            <Tooltip content="Left side tooltip" side="left">
              <Button variant="outline">Hover (Left)</Button>
            </Tooltip>
          </div>
        </section>

        {/* Tooltip with Custom Delay */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            Tooltip with Custom Delay
          </h2>
          <div className="flex flex-wrap gap-4">
            <Tooltip content="Instant tooltip" delayDuration={0}>
              <Button variant="outline">No Delay</Button>
            </Tooltip>
            <Tooltip content="Default 700ms delay" delayDuration={700}>
              <Button variant="outline">Default Delay</Button>
            </Tooltip>
            <Tooltip content="This takes longer to appear" delayDuration={1500}>
              <Button variant="outline">Long Delay (1.5s)</Button>
            </Tooltip>
          </div>
        </section>

        {/* Tooltip with Rich Content */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            Tooltip with Rich Content
          </h2>
          <Tooltip
            content={
              <div>
                <p className="font-semibold mb-1">Keyboard Shortcut</p>
                <p className="text-xs opacity-80">Press ⌘ + K to open search</p>
              </div>
            }
            delayDuration={300}
          >
            <Button variant="outline">Rich Tooltip</Button>
          </Tooltip>
        </section>
      </div>
    </main>
  );
}
