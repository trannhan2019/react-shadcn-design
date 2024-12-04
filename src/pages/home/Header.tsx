import LogoImage from "@/assets/img/logo.png";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
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
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ChevronDown, Menu } from "lucide-react";
import { Link } from "react-router";

const dataMenu = [
  {
    title: "HOME",
    url: "#",
  },
  {
    title: "BOOKS",
    url: "#",
  },
  {
    title: "E-BOOKS",
    url: "#",
  },
  {
    title: "PAGES",
    url: "#",
    items: [
      {
        title: "PAGE 1",
        url: "#",
      },
      {
        title: "PAGE 1",
        url: "#",
      },
      {
        title: "PAGE 1",
        url: "#",
      },
    ],
  },
];

export default function Header() {
  return (
    <div className="absolute left-0 right-0 top-0 z-10 h-[85px]">
      <div className="container mx-auto h-full px-4">
        <div className="flex h-full w-full">
          {/* logo */}
          <div className="my-4 max-w-[85px]">
            <a href="index-book-shop.html">
              <img src={LogoImage} alt="img" />
            </a>
          </div>
          {/* logo */}

          <div className="flex w-full items-center justify-end">
            {/* menu */}

            <NavigationMenu className="mr-20 hidden md:flex">
              <NavigationMenuList>
                {dataMenu.map((item) =>
                  !item.items ? (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuLink
                        asChild
                        className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-bold transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                      >
                        {/* {item.title} */}
                        <Link to="/">{item.title}</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuTrigger>
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="!left-1/2 flex w-[150px] flex-col">
                        {item.items.map((itm, idx) => (
                          <Link
                            key={idx}
                            className="w-[150px] rounded-md bg-muted p-2 group-hover:bg-muted/80"
                            to={"/"}
                          >
                            {itm.title}
                          </Link>
                        ))}
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ),
                )}
              </NavigationMenuList>
            </NavigationMenu>

            {/* menu */}
            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger>
                <Menu />
              </SheetTrigger>
              <SheetContent>
                <VisuallyHidden.Root>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>Choose a menu</SheetDescription>
                </VisuallyHidden.Root>
                <div className="flex flex-col p-4">
                  {dataMenu.map((item) =>
                    item.items ? (
                      <Collapsible key={item.title}>
                        <CollapsibleTrigger className="flex w-full items-center">
                          <span className="mr-auto py-2 text-sm font-semibold">
                            {item.title}
                          </span>
                          <ChevronDown size={16} />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="flex flex-col">
                          {item.items.map((item) => (
                            <Link
                              key={item.title}
                              className="py-2 pl-2 text-sm"
                              to={item.url}
                            >
                              {item.title}
                            </Link>
                          ))}
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      <Link
                        key={item.title}
                        className="py-2 text-sm font-semibold"
                        to={item.url}
                      >
                        {item.title}
                      </Link>
                    ),
                  )}
                </div>
              </SheetContent>
            </Sheet>
            {/* Mobile menu */}
          </div>
        </div>
      </div>
    </div>
  );
}
