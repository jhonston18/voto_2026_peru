

"use client"


import { Button } from "@/components/ui/button"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { LucideIcon } from "lucide-react"

import Link from "next/link"

export function NavMain({
  items,
  pathName
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
  }[],
  pathName: string
}) {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">

        <SidebarMenu>
          {items.map((item) => {
            const isActive = item.url === pathName
            return (
              <SidebarMenuItem key={item.title}>
                <Link href={item.url}>
                  <SidebarMenuButton tooltip={item.title} className={`my-[3px] ${isActive ? "bg-blue-600 text-white hover:bg-blue-600 hover:text-white" : ""}`}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
