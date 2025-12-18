"use client";

import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  InfoCard,
  ItemCard,
  FeatureCard,
  Divider,
} from "@campnetwork/ui-kit/card";
import { Button } from "@campnetwork/ui-kit/button";

export default function CardsPage() {
  return (
    <main className="min-h-screen p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/"
          className="text-sm text-text-secondary hover:text-pumpkin-600 mb-8 block"
        >
          &larr; Back to Home
        </Link>

        <h1 className="text-2xl font-semibold uppercase font-geist tracking-tight mb-8">
          Cards
        </h1>

        {/* Basic Card */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            Basic Card
          </h2>
          <Card className="max-w-md p-6">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>
                This is a card description with some additional context.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card content goes here. This can be any React node.</p>
            </CardContent>
            <CardFooter>
              <Button size="sm">Action</Button>
            </CardFooter>
          </Card>
        </section>

        {/* Card without corners */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            Card Without Corners
          </h2>
          <Card className="max-w-md" showCorners={false}>
            <CardHeader>
              <CardTitle>No Corner Accents</CardTitle>
              <CardDescription>
                This card has showCorners set to false.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>A cleaner look without the decorative corners.</p>
            </CardContent>
          </Card>
        </section>

        {/* Card with custom corner color */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            Custom Corner Color
          </h2>
          <Card className="max-w-md p-6" cornerColor="#FF6D01">
            <CardHeader>
              <CardTitle>Orange Corners</CardTitle>
              <CardDescription>
                This card uses the pumpkin-600 color for corners.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Customizable corner colors for different emphasis levels.</p>
            </CardContent>
          </Card>
        </section>

        {/* Divider */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            Divider
          </h2>
          <div className="max-w-md p-4 bg-white border border-border">
            <p className="mb-4">Content above divider</p>
            <Divider />
            <p className="mt-2">Content below divider</p>
          </div>
        </section>

        {/* InfoCard */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            InfoCard
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InfoCard
              title="Total Balance"
              icon={<span>$</span>}
              explainer="Your current account balance across all assets"
            >
              <p className="text-2xl font-semibold">$12,450.00</p>
            </InfoCard>
            <InfoCard title="Active Campaigns" icon={<span>📊</span>}>
              <p className="text-2xl font-semibold">24</p>
            </InfoCard>
            <InfoCard
              title="Engagement Rate"
              icon={<span>📈</span>}
              explainer="Average engagement across all campaigns"
            >
              <p className="text-2xl font-semibold">4.8%</p>
            </InfoCard>
          </div>
        </section>

        {/* ItemCard */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            ItemCard
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ItemCard
              title="NFT Collection #1"
              subtitle="Creator Name"
              label="New"
              actionButton={<Button size="sm">View</Button>}
            />
            <ItemCard
              title="Digital Artwork"
              subtitle="Artist Studio"
              label="Featured"
              onClick={() => alert("Clicked!")}
            />
            <ItemCard title="Limited Edition" subtitle="Exclusive Drop">
              <p className="text-sm text-text-secondary">Floor: 0.5 ETH</p>
            </ItemCard>
          </div>
        </section>

        {/* FeatureCard */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            FeatureCard
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FeatureCard
              title="Campaign Analytics"
              subtitle="Real-time insights"
              label="Pro"
              labelColor="bg-pumpkin-600"
            >
              <p className="text-sm text-text-secondary">
                Track performance metrics in real-time
              </p>
            </FeatureCard>
            <FeatureCard
              title="Audience Builder"
              subtitle="Target effectively"
              label="New"
              labelColor="bg-blue-500"
            >
              <p className="text-sm text-text-secondary">
                Build custom audience segments
              </p>
            </FeatureCard>
            <FeatureCard title="Auto Scheduling" subtitle="Set and forget">
              <p className="text-sm text-text-secondary">
                Schedule posts across platforms
              </p>
            </FeatureCard>
          </div>
        </section>
      </div>
    </main>
  );
}
