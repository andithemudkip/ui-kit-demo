"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@campnetwork/ui-kit/input";
import { Label } from "@campnetwork/ui-kit/label";
import { Switch, ToggleSwitch } from "@campnetwork/ui-kit/switch";
import { Slider } from "@campnetwork/ui-kit/slider";
import { PriceInput } from "@campnetwork/ui-kit/price-input";

export default function InputsPage() {
  const [switchValue, setSwitchValue] = useState<"monthly" | "yearly">(
    "monthly"
  );
  const [toggleValue, setToggleValue] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);
  const [priceValue, setPriceValue] = useState<number | "">(100);
  const [selectedAsset, setSelectedAsset] = useState("USD");

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
          Inputs
        </h1>

        {/* Text Input */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            Text Input
          </h2>
          <div className="max-w-md space-y-4">
            <div>
              <Label htmlFor="text-input">Username</Label>
              <Input
                id="text-input"
                type="text"
                placeholder="Enter your username"
              />
            </div>
            <div>
              <Label htmlFor="email-input">Email</Label>
              <Input
                id="email-input"
                type="email"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <Label htmlFor="password-input">Password</Label>
              <Input
                id="password-input"
                type="password"
                placeholder="••••••••"
              />
            </div>
          </div>
        </section>

        {/* Disabled Input */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            Disabled Input
          </h2>
          <div className="max-w-md">
            <Label htmlFor="disabled-input">Disabled Field</Label>
            <Input
              id="disabled-input"
              type="text"
              placeholder="Cannot edit"
              disabled
            />
          </div>
        </section>

        {/* File Input */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            File Input
          </h2>
          <div className="max-w-md">
            <Label htmlFor="file-input">Upload File</Label>
            <Input id="file-input" type="file" />
          </div>
        </section>

        {/* Switch */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            Switch (Toggle Between Options)
          </h2>
          <div className="max-w-md">
            <Switch
              id="billing-switch"
              options={[
                { label: "Monthly", value: "monthly" },
                { label: "Yearly", value: "yearly" },
              ]}
              value={switchValue}
              onChange={setSwitchValue}
            />
            <p className="text-sm text-text-secondary mt-2">
              Selected: <span className="font-semibold">{switchValue}</span>
            </p>
          </div>
        </section>

        {/* Switch with Icons */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            Switch with Icons
          </h2>
          <div className="max-w-md">
            <Switch
              id="view-switch"
              iconMode
              options={[
                {
                  label: (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <rect x="1" y="1" width="6" height="6" />
                      <rect x="9" y="1" width="6" height="6" />
                      <rect x="1" y="9" width="6" height="6" />
                      <rect x="9" y="9" width="6" height="6" />
                    </svg>
                  ),
                  value: "grid",
                },
                {
                  label: (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <rect x="1" y="2" width="14" height="3" />
                      <rect x="1" y="7" width="14" height="3" />
                      <rect x="1" y="12" width="14" height="3" />
                    </svg>
                  ),
                  value: "list",
                },
              ]}
              value={switchValue === "monthly" ? "grid" : "list"}
              onChange={(v) =>
                setSwitchValue(v === "grid" ? "monthly" : "yearly")
              }
            />
          </div>
        </section>

        {/* Toggle Switch */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            Toggle Switch (Checkbox Style)
          </h2>
          <div className="max-w-md">
            <ToggleSwitch
              id="notifications-toggle"
              checked={toggleValue}
              onChange={setToggleValue}
              label="Enable notifications"
            />
            <p className="text-sm text-text-secondary mt-2">
              Status:{" "}
              <span className="font-semibold">
                {toggleValue ? "Enabled" : "Disabled"}
              </span>
            </p>
          </div>
        </section>

        {/* Slider */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            Slider
          </h2>
          <div className="max-w-md">
            <Slider
              label="Volume"
              value={sliderValue}
              onChange={setSliderValue}
              min={0}
              max={100}
              step={1}
              suffix="%"
            />
          </div>
        </section>

        {/* Slider with Custom Formatting */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            Slider with Custom Value Format
          </h2>
          <div className="max-w-md">
            <Slider
              label="Price Range"
              value={sliderValue * 10}
              onChange={(v) => setSliderValue(v / 10)}
              min={0}
              max={1000}
              step={10}
              formatValue={(v) => `$${v.toLocaleString()}`}
            />
          </div>
        </section>

        {/* Price Input */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            Price Input
          </h2>
          <div className="max-w-md">
            <PriceInput
              label="Amount"
              value={priceValue}
              onChange={(e) =>
                setPriceValue(
                  e.target.value === "" ? "" : Number(e.target.value)
                )
              }
              selectedAsset={selectedAsset}
              onAssetChange={setSelectedAsset}
              assets={[
                { type: "USD", label: "USD" },
                { type: "EUR", label: "EUR" },
                { type: "CAMP", label: "CAMP" },
              ]}
              placeholder="Enter amount"
            />
            <p className="text-sm text-text-secondary mt-2">
              Value: {priceValue} {selectedAsset}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
