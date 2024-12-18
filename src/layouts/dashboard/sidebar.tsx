import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router";
import Logo from "@/assets/img/logo.png";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Công ty",
    url: "/dashboard/congty",
    icon: Inbox,
  },
  {
    title: "Phòng ban",
    url: "/dashboard/phongban",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export default function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarLogo />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Quản lý</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>Footer</SidebarFooter>
    </Sidebar>
  );
}

function SidebarLogo() {
  return (
    <Link to="/">
      <div className="w-[150px] md:w-[200px]">
        <AspectRatio ratio={17 / 5}>
          <img src={Logo} alt="logo" />
        </AspectRatio>
      </div>
    </Link>
  );
}
