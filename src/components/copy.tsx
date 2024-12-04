"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Code,
  Book,
  PieChart,
  DollarSign,
  Fingerprint,
  Bell,
  Menu,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router";

const features = [
  {
    icon: Code,
    title: "Open source",
    description: "This Pokemon's cry is very loud and distracting",
  },
  {
    icon: DollarSign,
    title: "Free for everyone",
    description: "The fluid of Smeargle's tail secretions changes",
  },
  {
    icon: Book,
    title: "Documentation",
    description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    icon: Fingerprint,
    title: "Security",
    description: "The shell's rounded shape and the grooves on its",
  },
  {
    icon: PieChart,
    title: "Analytics",
    description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Combusken battles with the intensely hot flames it spews",
  },
];

export default function MantineHeader() {
  const [open, setOpen] = React.useState(false);
  const [showFeatures, setShowFeatures] = React.useState(false);

  return (
    <div className="h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to={"/"} className="flex items-center space-x-2">
              <div className="rounded-full bg-blue-500 p-1">
                <span className="text-xl font-bold text-white">Σ</span>
              </div>
              <span className="text-xl font-bold">Mantine</span>
            </Link>

            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[200px] p-4">
                      <div className="mb-4 flex items-center justify-between border-b pb-2">
                        <h4 className="text-lg font-medium">Features</h4>
                        <Link
                          to="/features"
                          className="text-sm text-blue-500 hover:underline"
                        >
                          View all
                        </Link>
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        {features.map((feature, index) => (
                          <Link
                            key={index}
                            to={`/feature/${feature.title
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="group block"
                          >
                            <div className="flex items-start gap-4">
                              <div className="rounded-md bg-muted p-2 group-hover:bg-muted/80">
                                <feature.icon className="h-6 w-6 text-blue-500" />
                              </div>
                              <div>
                                <h5 className="mb-1 font-medium group-hover:text-blue-500">
                                  {feature.title}
                                </h5>
                                <p className="text-sm text-muted-foreground">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-6 border-t pt-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="mb-1 font-medium">Get started</h4>
                            <p className="text-sm text-muted-foreground">
                              Their food sources have decreased, and their
                              numbers
                            </p>
                          </div>
                          <Button variant="secondary">Get started</Button>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/learn">
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Learn
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/academy">
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Academy
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden items-center space-x-4 md:flex">
            <Button variant="ghost">Log in</Button>
            <Button>Sign up</Button>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full p-0">
              <SheetHeader className="border-b p-4">
                <SheetTitle className="text-left">Navigation</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col py-4">
                <Link
                  to="/"
                  className="px-4 py-2 text-lg font-medium hover:bg-accent"
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
                <button
                  className="flex items-center justify-between px-4 py-2 text-left text-lg font-medium hover:bg-accent"
                  onClick={() => setShowFeatures(!showFeatures)}
                >
                  Features
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform",
                      showFeatures && "rotate-180",
                    )}
                  />
                </button>
                {showFeatures && (
                  <div className="space-y-4 px-4 py-2">
                    {features.map((feature, index) => (
                      <Link
                        key={index}
                        to={`/feature/${feature.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="flex items-start gap-4 py-2"
                        onClick={() => setOpen(false)}
                      >
                        <div className="rounded-md bg-muted p-2">
                          <feature.icon className="h-6 w-6 text-blue-500" />
                        </div>
                        <div>
                          <h5 className="mb-1 font-medium">{feature.title}</h5>
                          <p className="text-sm text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
                <Link
                  to="/learn"
                  className="px-4 py-2 text-lg font-medium hover:bg-accent"
                  onClick={() => setOpen(false)}
                >
                  Learn
                </Link>
                <Link
                  to="/academy"
                  className="px-4 py-2 text-lg font-medium hover:bg-accent"
                  onClick={() => setOpen(false)}
                >
                  Academy
                </Link>
              </div>
              <div className="absolute bottom-0 left-0 right-0 border-t bg-background p-4">
                <div className="grid gap-2">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => setOpen(false)}
                  >
                    Log in
                  </Button>
                  <Button className="w-full" onClick={() => setOpen(false)}>
                    Sign up
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  );
}
