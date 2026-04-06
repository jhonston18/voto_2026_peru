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

import path from "path"

export function NavProjects({
  projects,
  pathName,
}: {
  projects: {
    title: string
    cargos: {
      title: string
      url: string
      icon: LucideIcon
    }[]
  }[],
  pathName: string
}) {


  return (
    <>
      {
        projects.map((item) => (
          <SidebarGroup key={item.title}
            className="group-data-[collapsible=icon]:hidden">

            <SidebarGroupLabel className="text-md md:text-sm  font-heading text-[#777] tracking-tighter leading-none">{item.title}</SidebarGroupLabel>
            <SidebarMenu >
              {item.cargos.map(cargo => {
                const isActive = pathName === cargo.url
                
                return (
                  <SidebarMenuItem key={cargo.title}>

                    <SidebarMenuButton asChild className={`my-[3px] ${isActive ? "bg-blue-600 text-white hover:bg-blue-600 hover:text-white" : ""}`}>
                      <Link href={cargo.url} className="flex">
                        <cargo.icon />
                        <span>{cargo.title}</span>
                      </Link>
                    </SidebarMenuButton>



                  </SidebarMenuItem>
                )

              })}

            </SidebarMenu >
          </SidebarGroup >

        ))
      }
    </>

  )
}
