'use client'


import React from "react";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import ThemeProvider from '@/components/theme-provider'


import { Separator } from "@/components/ui/separator"
import { AppSidebar } from "@/components/sidebar/app-sidebar";

import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";




export default function LayoutDashboard({
  children,
}: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="p-3">
          {children}
        </SidebarInset>

      </SidebarProvider>

    </ThemeProvider>

  )

}
