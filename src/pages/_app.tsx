import { AppSidebar } from "@/components/SideBar";
import { SiteHeader } from "@/components/SiteHeader";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    router.pathname === '/sign-in' ? (
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Component {...pageProps} />
      </ThemeProvider>
    ) : (
      <SidebarProvider
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 72)",
            "--header-height": "calc(var(--spacing) * 12)",
          } as React.CSSProperties
        }
      >
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Component {...pageProps} />
          </ThemeProvider>
        </SidebarInset>
      </SidebarProvider>
    )
  )
}
