import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";
import DashboardSidebar from "./sidebar";
import Header from "./header";
import { useDocumentTitle } from "@uidotdev/usehooks";

export default function DashboardLayout() {
  useDocumentTitle("SBA | Dashboard");
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset>
        <Header />
        <main className="flex-1 bg-gray-100 p-4">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
