"use client"

import Link from "next/link"
import {
  Folder,
  Forward,
  MoreHorizontal,
  Trash2,
  type LucideIcon,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

export function NavProjects({
  projects,
}: {
  projects: {
    title: string
    url: string
    icon: LucideIcon
    cargos: {
      title: string
      url: string
    }[]
  }[]
}) {
  const { isMobile } = useSidebar()

  return (
    <>
      {
        projects.map((item) => (
          <SidebarGroup key={item.title}
            className="group-data-[collapsible=icon]:hidden">

            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarMenu>
              {item.cargos.map(cargo => (
              <SidebarMenuItem key={cargo.title}>
                
                  <SidebarMenuButton asChild>
                    <Link href={cargo.url} className="flex">
                      <item.icon />
                      <span>{cargo.title}</span>
                    </Link>
                  </SidebarMenuButton>
              

              </SidebarMenuItem>
              ))}

            </SidebarMenu >
          </SidebarGroup >

        ))
      }
    </>

  )
}
