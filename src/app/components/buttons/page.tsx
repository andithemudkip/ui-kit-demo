"use client";

import { useState } from "react";
import Link from "next/link";
import { Button, ActionButton } from "@campnetwork/ui-kit/button";
import { BarLoader } from "@campnetwork/ui-kit/loader";

export default function ButtonsPage() {
  const [loading, setLoading] = useState(false);

  const handleAction = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

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
          Buttons
        </h1>

        {/* Variants */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            Variants
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Default</Button>
            <Button variant="inverted">Inverted</Button>
            <Button variant="action">Action</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </section>

        {/* Sizes */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            Sizes
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="xs">Extra Small</Button>
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path
                  d="M8 4v8M4 8h8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </Button>
          </div>
        </section>

        {/* With Arrows */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            With Arrows
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button arrow="left">Previous</Button>
            <Button arrow="right">Next</Button>
          </div>
        </section>

        {/* With Icon */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            With Icon
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button
              icon={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M8 1l2.5 5 5.5.8-4 3.9.9 5.3L8 13.5 3.1 16l.9-5.3-4-3.9 5.5-.8L8 1z" />
                </svg>
              }
            >
              Star
            </Button>
            <Button
              variant="inverted"
              icon={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM5 12V4l7 4-7 4z" />
                </svg>
              }
            >
              Play
            </Button>
          </div>
        </section>

        {/* Disabled */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            Disabled
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button disabled>Default Disabled</Button>
            <Button variant="inverted" disabled>
              Inverted Disabled
            </Button>
            <Button variant="outline" disabled>
              Outline Disabled
            </Button>
          </div>
        </section>

        {/* ActionButton */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            ActionButton
          </h2>
          <div className="flex flex-wrap gap-4">
            <ActionButton
              onClick={handleAction}
              isLoading={loading}
              loadingElement={
                <BarLoader
                  loaderSize="2rem"
                  loaderHeight="0.25rem"
                  loaderColor="#FF6D01"
                />
              }
              icon={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M14 2L2 14M2 2l12 12" />
                </svg>
              }
            >
              {loading ? "Loading..." : "Click Me"}
            </ActionButton>
          </div>
          <p className="text-sm text-text-secondary mt-2">
            Click the button to see the loading state
          </p>
        </section>
      </div>
    </main>
  );
}
