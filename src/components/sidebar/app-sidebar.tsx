"use client"

import * as React from "react"

import { dataSideBar } from "../../../public/data"
import { dataUser } from "../../../public/data"

import { datos } from "../../../public/data"



import { NavMain } from "@/components/nav/nav-main"
import { NavProjects } from "@/components/nav/nav-projects"
import { NavUser } from "@/components/nav/nav-user"
import { TeamSwitcher } from "@/components/nav/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"



export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const sidebarData = datos;

  

  

  const data = dataSideBar;
  const dataUserInfo = dataUser;

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={sidebarData.generales} />
        <NavProjects projects={sidebarData.regionales} />
        <NavProjects projects={sidebarData.municipales} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={dataUserInfo.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
