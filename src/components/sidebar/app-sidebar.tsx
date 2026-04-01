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





export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const sidebarData = datos;

  

  const dataUserInfo = dataUser;

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={sidebarData.generales} />
        <NavProjects projects={sidebarData.regionales} />
        <NavProjects projects={sidebarData.municipales} />
        <NavProjects projects={sidebarData.parlamentoAndino} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={dataUserInfo.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
