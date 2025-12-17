"use client";

import Link from "next/link";
import {
  PriceDisplay,
  UsdValueDisplay,
} from "@campnetwork/ui-kit/price-display";
import { ScrollArea, ScrollBar } from "@campnetwork/ui-kit/scroll-area";
import { Box } from "@campnetwork/ui-kit/box";
import { CornerAccents } from "@campnetwork/ui-kit/corner";

export default function DataDisplayPage() {
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
          Data Display
        </h1>

        {/* PriceDisplay */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            Price Display
          </h2>
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-8">
              <div>
                <p className="text-xs text-text-secondary mb-1">Small</p>
                <PriceDisplay price={1234.56} size="sm" />
              </div>
              <div>
                <p className="text-xs text-text-secondary mb-1">Medium</p>
                <PriceDisplay price={1234.56} size="md" />
              </div>
              <div>
                <p className="text-xs text-text-secondary mb-1">Large</p>
                <PriceDisplay price={1234.56} size="lg" />
              </div>
              <div>
                <p className="text-xs text-text-secondary mb-1">Extra Large</p>
                <PriceDisplay price={1234.56} size="xl" />
              </div>
            </div>
          </div>
        </section>

        {/* PriceDisplay with Large Numbers */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            Price Display (Formatted Numbers)
          </h2>
          <div className="flex flex-wrap gap-8">
            <div>
              <p className="text-xs text-text-secondary mb-1">Thousands</p>
              <PriceDisplay price={12500} size="lg" />
            </div>
            <div>
              <p className="text-xs text-text-secondary mb-1">Millions</p>
              <PriceDisplay price={2500000} size="lg" />
            </div>
            <div>
              <p className="text-xs text-text-secondary mb-1">Billions</p>
              <PriceDisplay price={1500000000} size="lg" />
            </div>
          </div>
        </section>

        {/* PriceDisplay without Icon */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            Price Display (No Icon)
          </h2>
          <div className="flex flex-wrap gap-8">
            <PriceDisplay price={500} size="lg" showIcon={false} />
            <PriceDisplay
              price={1000}
              size="lg"
              showIcon={false}
              assetType="ETH"
            />
          </div>
        </section>

        {/* USD Value Display */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            USD Value Display
          </h2>
          <div className="flex flex-wrap gap-8">
            <div>
              <p className="text-xs text-text-secondary mb-1">Direct Amount</p>
              <UsdValueDisplay amount={1234.56} size="lg" />
            </div>
            <div>
              <p className="text-xs text-text-secondary mb-1">
                With Exchange Rate (2x)
              </p>
              <UsdValueDisplay amount={500} exchangeRate={2} size="lg" />
            </div>
          </div>
        </section>

        {/* Box */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            Box
          </h2>
          <div className="space-y-4">
            <Box className="p-4">
              <p>Default box with corner accents</p>
            </Box>
            <Box showCorners={false} className="p-4">
              <p>Box without corner accents</p>
            </Box>
            <Box cornerColor="#FF6D01" className="p-4">
              <p>Box with custom corner color</p>
            </Box>
          </div>
        </section>

        {/* Corner Accents */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            Corner Accents (Standalone)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative bg-white border border-border p-8 flex items-center justify-center">
              <CornerAccents
                positions={["top-left"]}
                color="#FF6D01"
                padding={8}
              />
              <span className="text-sm">Top Left</span>
            </div>
            <div className="relative bg-white border border-border p-8 flex items-center justify-center">
              <CornerAccents
                positions={["top-right"]}
                color="#FF6D01"
                padding={8}
              />
              <span className="text-sm">Top Right</span>
            </div>
            <div className="relative bg-white border border-border p-8 flex items-center justify-center">
              <CornerAccents
                positions={["bottom-left"]}
                color="#FF6D01"
                padding={8}
              />
              <span className="text-sm">Bottom Left</span>
            </div>
            <div className="relative bg-white border border-border p-8 flex items-center justify-center">
              <CornerAccents
                positions={["bottom-right"]}
                color="#FF6D01"
                padding={8}
              />
              <span className="text-sm">Bottom Right</span>
            </div>
          </div>
        </section>

        {/* Scroll Area */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            Scroll Area (Vertical)
          </h2>
          <ScrollArea className="h-72 w-full border border-border bg-white p-4">
            <div className="space-y-4">
              {Array.from({ length: 20 }, (_, i) => (
                <div key={i} className="p-4 border border-border">
                  <p className="font-semibold">Item {i + 1}</p>
                  <p className="text-sm text-text-secondary">
                    This is a scrollable item in a custom scroll area.
                  </p>
                </div>
              ))}
            </div>
          </ScrollArea>
        </section>

        {/* Scroll Area Horizontal */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            Scroll Area (Horizontal)
          </h2>
          <ScrollArea className="w-full whitespace-nowrap border border-border bg-white">
            <div className="flex p-4 gap-4">
              {Array.from({ length: 15 }, (_, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-48 h-32 border border-border flex items-center justify-center"
                >
                  <span className="font-semibold">Card {i + 1}</span>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </section>
      </div>
    </main>
  );
}
