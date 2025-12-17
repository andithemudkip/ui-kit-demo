"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@campnetwork/ui-kit/dialog";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "@campnetwork/ui-kit/alert-dialog";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@campnetwork/ui-kit/drawer";
import ResponsiveDialog from "@campnetwork/ui-kit/responsive-dialog";
import { Button } from "@campnetwork/ui-kit/button";
import { Input } from "@campnetwork/ui-kit/input";
import { Label } from "@campnetwork/ui-kit/label";

export default function DialogsPage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [responsiveOpen, setResponsiveOpen] = useState(false);
  const [nestedDialogOpen, setNestedDialogOpen] = useState(false);
  const [activeSizeDialog, setActiveSizeDialog] = useState<string | null>(null);

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
          Dialogs
        </h1>

        {/* Basic Dialog */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            Dialog
          </h2>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button>Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div>
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" placeholder="@username" />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="inverted">Cancel</Button>
                </DialogClose>
                <Button onClick={() => setDialogOpen(false)}>
                  Save Changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </section>

        {/* Dialog with Different Max Widths */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            Dialog Sizes
          </h2>
          <div className="flex flex-wrap gap-4">
            {(["sm", "md", "lg", "xl", "2xl"] as const).map((size) => (
              <Dialog
                key={size}
                open={activeSizeDialog === size}
                onOpenChange={(open) => setActiveSizeDialog(open ? size : null)}
              >
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    {size.toUpperCase()}
                  </Button>
                </DialogTrigger>
                <DialogContent maxWidth={size}>
                  <DialogHeader>
                    <DialogTitle>{size.toUpperCase()} Dialog</DialogTitle>
                    <DialogDescription>
                      This dialog has maxWidth set to &quot;{size}&quot;.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            ))}
          </div>
          <p className="text-sm text-text-secondary mt-2">
            Click any button to see different dialog widths
          </p>
        </section>

        {/* Dialog with Back Button */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            Dialog with Back Button
          </h2>
          <Dialog open={nestedDialogOpen} onOpenChange={setNestedDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">Open with Back Button</Button>
            </DialogTrigger>
            <DialogContent
              showBackButton
              onBackButtonClick={() => alert("Back clicked!")}
            >
              <DialogHeader>
                <DialogTitle>Step 2 of 3</DialogTitle>
                <DialogDescription>
                  This dialog shows a back button for multi-step flows.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <p>Navigate back to the previous step or close the dialog.</p>
              </div>
            </DialogContent>
          </Dialog>
        </section>

        {/* Alert Dialog */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            Alert Dialog
          </h2>
          <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
            <AlertDialogTrigger asChild>
              <Button variant="outline">Delete Account</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => alert("Account deleted!")}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </section>

        {/* Drawer */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            Drawer
          </h2>
          <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
            <DrawerTrigger asChild>
              <Button variant="outline">Open Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Drawer Title</DrawerTitle>
                <DrawerDescription>
                  This is a bottom sheet drawer that slides up from the bottom
                  of the screen.
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4 space-y-4">
                <div>
                  <Label htmlFor="drawer-input">Email</Label>
                  <Input
                    id="drawer-input"
                    type="email"
                    placeholder="you@example.com"
                  />
                </div>
                <p className="text-text-secondary text-sm">
                  Drawers are great for mobile-friendly forms and actions.
                </p>
              </div>
              <DrawerFooter>
                <Button onClick={() => setDrawerOpen(false)}>Submit</Button>
                <DrawerClose asChild>
                  <Button variant="inverted">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </section>

        {/* Responsive Dialog */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            Responsive Dialog
          </h2>
          <ResponsiveDialog
            open={responsiveOpen}
            setOpen={setResponsiveOpen}
            trigger={<Button variant="outline">Open Responsive</Button>}
            title="Responsive Dialog"
            description="This component automatically switches between Dialog (desktop) and Drawer (mobile) based on screen size."
          >
            <div className="p-4">
              <p className="text-text-secondary">
                Resize your browser window to see it switch between dialog and
                drawer modes.
              </p>
              <div className="mt-4">
                <Label htmlFor="responsive-input">Your Name</Label>
                <Input id="responsive-input" placeholder="Enter your name" />
              </div>
            </div>
          </ResponsiveDialog>
          <p className="text-sm text-text-secondary mt-2">
            Try resizing your browser to see it adapt
          </p>
        </section>
      </div>
    </main>
  );
}
