import LogoImage from "@/assets/img/logo.png";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

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
        <div className="flex h-full">
          {/* logo */}
          <div className="my-4 max-w-[85px]">
            <a href="index-book-shop.html">
              <img src={LogoImage} alt="img" />
            </a>
          </div>
          {/* logo */}

          <div className="flex items-center justify-between">
            {/* menu */}
            <header className="site-header" id="header">
              <nav className="navbar navbar-expand-md static-nav">
                <div className="position-relative megamenu-custom container">
                  <a
                    className="navbar-brand center-brand"
                    href="index-book-shop.html"
                  >
                    <img
                      src="book-shop\img\logo.png"
                      alt="logo"
                      className="logo-scrolled"
                    />
                  </a>
                  <div className="navbar-collapse collapse">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <a className="nav-link" href="index-book-shop.html">
                          HOME
                        </a>
                      </li>
                      <li className="nav-item dropdown static">
                        <a
                          className="nav-link dropdown-toggle"
                          href="javascript:void(0)"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {" "}
                          E-BOOKS{" "}
                        </a>
                      </li>
                      <li className="nav-item dropdown position-relative">
                        <a
                          className="nav-link dropdown-toggle"
                          href="javascript:void(0)"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          PAGES
                        </a>
                        <div className="dropdown-menu">
                          <ul>
                            <li>
                              <i className="lni-angle-double-right right-arrow" />
                              <a
                                className="dropdown-item"
                                href="book-shop\product-listing.html"
                              >
                                Listing One
                              </a>
                            </li>
                            <li>
                              <i className="lni-angle-double-right right-arrow" />
                              <a
                                className="dropdown-item"
                                href="book-shop\product-detail.html"
                              >
                                Detail Page
                              </a>
                            </li>
                            <li>
                              <i className="lni-angle-double-right right-arrow" />
                              <a
                                className="dropdown-item"
                                href="book-shop/shop-cart.html.html"
                              >
                                ShopCart Page
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="book-shop\contact.html">
                          CONTACT
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              {/* side menu */}
              <div className="side-menu gradient-bg opacity-0">
                <div className="inner-wrapper">
                  <span
                    className="btn-close btn-close-no-padding"
                    id="btn_sideNavClose"
                  >
                    <i />
                    <i />
                  </span>
                  <nav className="side-nav w-100">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="book-shop\product-listing.html"
                        >
                          {" "}
                          HOME
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link collapsePagesSideMenu collapsed"
                          data-toggle="collapse"
                          href="#sideNavPages3"
                          aria-expanded="false"
                        >
                          E-BOOKS <i className="fas fa-chevron-down" />
                        </a>
                        <div
                          id="sideNavPages3"
                          className="sideNavPages collapse"
                          style={{}}
                        >
                          <h5 className="sub-title">1. Others</h5>
                          <ul className="navbar-nav mt-2">
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="book-shop\product-listing.html"
                              >
                                Crime
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="book-shop\product-listing.html"
                              >
                                {" "}
                                Dictionary
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="book-shop\product-listing.html"
                              >
                                {" "}
                                Health
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="book-shop\product-listing.html"
                              >
                                History
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="book-shop\product-listing.html"
                              >
                                Horror
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="book-shop\product-listing.html"
                              >
                                Poetry
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link collapsePagesSideMenu collapsed"
                          data-toggle="collapse"
                          href="#sideNavPages2"
                          aria-expanded="false"
                        >
                          PAGES <i className="fas fa-chevron-down" />
                        </a>
                        <div
                          id="sideNavPages2"
                          className="sideNavPages collapse"
                          style={{}}
                        >
                          <ul className="navbar-nav">
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="book-shop\product-listing.html"
                              >
                                Listing One
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="book-shop\product-detail.html"
                              >
                                Detail Page
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="book-shop\shop-cart.html"
                              >
                                ShopCart Page
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="book-shop\contact.html">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <div className="side-footer w-100">
                    <ul className="social-icons-simple white top40">
                      <li>
                        <a
                          className="facebook-bg-hvr"
                          href="javascript:void(0)"
                        >
                          <i className="fab fa-facebook-f" />{" "}
                        </a>{" "}
                      </li>
                      <li>
                        <a className="twitter-bg-hvr" href="javascript:void(0)">
                          <i className="fab fa-twitter" />{" "}
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          className="instagram-bg-hvr"
                          href="javascript:void(0)"
                        >
                          <i className="fab fa-instagram" />{" "}
                        </a>{" "}
                      </li>
                    </ul>
                    <p className="whitecolor">
                      © <span id="year" /> Product Shop. Made With Love by
                      ThemesIndustry
                    </p>
                  </div>
                </div>
              </div>
              <div
                id="close_side_menu"
                className="tooltip"
                style={{ display: "none" }}
              />
              {/* End side menu */}
            </header>
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
