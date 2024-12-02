import { Phone, Mail } from "lucide-react";

function Topbar() {
  return (
    <div className="topbar border-b-[1px] bg-white py-1">
      <div className="container mx-auto px-4 md:px-7">
        <div className="flex flex-col md:flex-row">
          <div className="col-lg-6 mb-3 flex w-full justify-center md:w-5/12 md:justify-start">
            {/* Contact */}
            <ul className="mt-2 flex h-full">
              <li className="mr-4">
                <a className="text-sm text-slate-800" href="#">
                  About
                </a>
              </li>
              <li className="mr-4">
                <a className="text-sm text-slate-800" href="#">
                  Doctors
                </a>
              </li>
              <li className="mr-4">
                <a className="text-sm text-slate-800" href="#">
                  Contact
                </a>
              </li>
              <li>
                <a className="text-sm text-slate-800" href="#">
                  FAQ
                </a>
              </li>
            </ul>
            {/* End Contact */}
          </div>

          <div className="col-lg-6 flex w-full justify-center md:w-7/12 md:justify-end">
            {/* Top Contact */}
            <ul className="top-contact flex">
              <li className="mr-4 flex items-center">
                <Phone size={14} fill="#1A76D1" strokeWidth={0} />
                <span className="ml-2 text-sm text-slate-800">
                  +880 1234 56789
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={16} fill="#1A76D1" color="#fff" />
                <a
                  className="ml-2 text-sm text-slate-800"
                  href="mailto:support@yourmail.com"
                >
                  support@yourmail.com
                </a>
              </li>
            </ul>
            {/* End Top Contact */}
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderInner() {
  return (
    <div className="header-inner">
      <div className="container">
        <div className="inner">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-12">
              {/* Start Logo */}
              <div className="logo">
                <a href="index.html">
                  <img src="img/logo.png" alt="#" />
                </a>
              </div>
              {/* End Logo */}
              {/* Mobile Nav */}
              <div className="mobile-nav" />
              {/* End Mobile Nav */}
            </div>
            <div className="col-lg-7 col-md-9 col-12">
              {/* Main Menu */}
              <div className="main-menu">
                <nav className="navigation">
                  <ul className="nav menu">
                    <li className="active">
                      <a href="#">
                        Home <i className="icofont-rounded-down" />
                      </a>
                      <ul className="dropdown">
                        <li>
                          <a href="index.html">Home Page 1</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Doctos </a>
                    </li>
                    <li>
                      <a href="#">Services </a>
                    </li>
                    <li>
                      <a href="#">
                        Pages <i className="icofont-rounded-down" />
                      </a>
                      <ul className="dropdown">
                        <li>
                          <a href="404.html">404 Error</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        Blogs <i className="icofont-rounded-down" />
                      </a>
                      <ul className="dropdown">
                        <li>
                          <a href="blog-single.html">Blog Details</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
              {/*/ End Main Menu */}
            </div>
            <div className="col-lg-2 col-12">
              <div className="get-quote">
                <a href="appointment.html" className="btn">
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <header className="header">
      <Topbar />
      <HeaderInner />
    </header>
  );
}
