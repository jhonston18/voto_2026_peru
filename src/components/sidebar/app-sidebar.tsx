"use client"

import * as React from "react"
import { dataUser } from "../../../public/data"
import { datos } from "../../../public/data"
import { NavProjects } from "@/components/nav/nav-projects"
import { NavUser } from "@/components/nav/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavMain } from "../nav/nav-main"
import { usePathname } from "next/navigation"


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const pathName = usePathname();

  const sidebarData = datos;

  const dataUserInfo = dataUser;

  return (
    
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarData.navMain} pathName={pathName}/>
        <NavProjects projects={sidebarData.generales} pathName={pathName}/>
        <NavProjects projects={sidebarData.regionales} pathName={pathName} />
        <NavProjects projects={sidebarData.municipales} pathName={pathName} />
        <NavProjects projects={sidebarData.parlamentoAndino} pathName={pathName}/>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={dataUserInfo.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
