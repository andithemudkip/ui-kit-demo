"use client";

import { useState } from "react";
import Link from "next/link";
import { toast } from "@campnetwork/ui-kit/toast";
import { BarLoader, SpinLoader } from "@campnetwork/ui-kit/loader";
import { Button } from "@campnetwork/ui-kit/button";

export default function FeedbackPage() {
  const [barColor, setBarColor] = useState("#1A1A1A");
  const [spinColor, setSpinColor] = useState("#1A1A1A");

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
          Feedback
        </h1>

        {/* Toast */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            Toast Notifications
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button
              variant="default"
              onClick={() =>
                toast.success("Success! Your changes have been saved.")
              }
            >
              Success Toast
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.error("Error! Something went wrong.")}
            >
              Error Toast
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast.warning("Warning! Please review before continuing.")
              }
            >
              Warning Toast
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.info("Info: New features are available.")}
            >
              Info Toast
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.loading("Loading your data...")}
            >
              Loading Toast
            </Button>
          </div>
        </section>

        {/* Toast with Custom Content */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            Toast with Custom Options
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button
              variant="outline"
              onClick={() =>
                toast.success("Profile updated!", {
                  description:
                    "Your profile information has been saved successfully.",
                  duration: 5000,
                })
              }
            >
              With Description
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast("Action Required", {
                  description: "Please confirm your email address.",
                  action: {
                    label: "Confirm",
                    onClick: () => toast.success("Email confirmed!"),
                  },
                })
              }
            >
              With Action
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                const toastId = toast.loading("Processing...");
                setTimeout(() => {
                  toast.success("Complete!", { id: toastId });
                }, 2000);
              }}
            >
              Promise-style
            </Button>
          </div>
        </section>

        {/* BarLoader */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            Bar Loader
          </h2>
          <div className="space-y-8">
            <div>
              <p className="text-sm text-text-secondary mb-4">Default</p>
              <BarLoader />
            </div>
            <div>
              <p className="text-sm text-text-secondary mb-4">Custom Size</p>
              <BarLoader loaderSize="8rem" loaderHeight="0.5rem" />
            </div>
            <div>
              <p className="text-sm text-text-secondary mb-4">Custom Color</p>
              <div className="flex items-center gap-4">
                <BarLoader loaderColor={barColor} />
                <div className="flex gap-2">
                  <button
                    onClick={() => setBarColor("#FF6D01")}
                    className="w-6 h-6 bg-pumpkin-600 border border-border"
                  />
                  <button
                    onClick={() => setBarColor("#1A1A1A")}
                    className="w-6 h-6 bg-text border border-border"
                  />
                  <button
                    onClick={() => setBarColor("#43b7c4")}
                    className="w-6 h-6 bg-[#43b7c4] border border-border"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SpinLoader */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            Spin Loader
          </h2>
          <div className="space-y-8">
            <div>
              <p className="text-sm text-text-secondary mb-4">Default</p>
              <SpinLoader />
            </div>
            <div>
              <p className="text-sm text-text-secondary mb-4">Custom Size</p>
              <div className="flex items-center gap-8">
                <SpinLoader loaderSize="1rem" loaderStroke="3px" />
                <SpinLoader loaderSize="2rem" loaderStroke="4px" />
                <SpinLoader loaderSize="3rem" loaderStroke="6px" />
              </div>
            </div>
            <div>
              <p className="text-sm text-text-secondary mb-4">Custom Color</p>
              <div className="flex items-center gap-4">
                <SpinLoader loaderColor={spinColor} />
                <div className="flex gap-2">
                  <button
                    onClick={() => setSpinColor("#FF6D01")}
                    className="w-6 h-6 bg-pumpkin-600 border border-border"
                  />
                  <button
                    onClick={() => setSpinColor("#1A1A1A")}
                    className="w-6 h-6 bg-text border border-border"
                  />
                  <button
                    onClick={() => setSpinColor("#43b7c4")}
                    className="w-6 h-6 bg-[#43b7c4] border border-border"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Loaders in Context */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            Loaders in Context
          </h2>
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-2 px-4 py-2 border border-border">
              <SpinLoader
                loaderSize="1rem"
                loaderStroke="3px"
                loaderColor="#FF6D01"
              />
              <span className="text-sm">Loading...</span>
            </div>
            <Button disabled className="relative">
              <span className="opacity-0">Submit</span>
              <div className="absolute inset-0 flex items-center justify-center">
                <SpinLoader
                  loaderSize="1rem"
                  loaderStroke="3px"
                  loaderColor="#fff"
                />
              </div>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
