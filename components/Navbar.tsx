"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { NavItem } from "./NavItem";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Left: Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <Image src="/logo.svg" width={20} height={20} alt="Linear logo" />
          <span className="text-lg font-semibold text-white">Linear</span>
        </div>

        {/* Center: Navigation Menu */}
        <NavigationMenu className="hidden md:flex">
          <div>
            <NavigationMenuList className="gap-1">
              {/* Product */}

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white/70 hover:text-white hover:bg-white/10">
                  Product
                </NavigationMenuTrigger>

                <NavigationMenuContent className="bg-black/90 border border-white/10 backdrop-blur-xl">
                  <div
                    className="w-190 bg-white/10 rounded-md overflow-hidden pb-4"
                    // style={{ padding: "20px 28px 24px" }}
                  >
                    {/* MAIN GRID */}
                    <div className="grid grid-cols-[220px_1px_1fr_1fr] gap-5">
                      {/* Column 1 — CORE */}
                      <div className="ml-3">
                        <h4 className="text-sm tracking-wide text-white/50 ml-1 my-4">
                          Core Features
                        </h4>

                        <div className="space-y-2">
                          <NavItem
                            title="Plan"
                            desc="Set the product direction with projects and initiatives"
                          />
                          <NavItem
                            title="Build"
                            desc="Make progress with issue tracking and cycle planning"
                          />
                        </div>
                      </div>

                      {/* Vertical Divider */}
                      <div className="bg-white/10 w-px self-stretch" />

                      {/* Column 2 */}
                      <div>
                        <h4 className="text-sm tracking-wide text-white/50 ml-1 my-4">
                          More
                        </h4>

                        <div className="space-y-2">
                          <NavItem
                            title="Customer requests"
                            desc="Manage user feedback"
                          />
                          <NavItem
                            title="Integrations"
                            desc="Collaborate across tools"
                          />
                          <NavItem title="Insights" desc="Realtime analytics" />
                        </div>
                      </div>

                      {/* Column 3 */}
                      <div>
                        <h4 className="text-xs tracking-wide text-white/50 mb-4 opacity-0 ml-1 my-4">
                          More
                        </h4>

                        <div className="space-y-2">
                          <NavItem
                            title="Mobile app"
                            desc="Linear in your pocket"
                          />
                          <NavItem
                            title="Linear Asks"
                            desc="Workplace requests"
                          />
                          <NavItem
                            title="Artificial intelligence"
                            desc="AI-powered workflows"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* FOOTER ROW */}
                  <div className="m-3 px-3 flex items-center justify-between ">
                    <span className="text-sm text-white/70 cursor-pointer transition hover:text-white rounded-md p-2 hover:bg-white/10 ">
                      <span className="text-white font-medium">
                        New: Time in status
                      </span>
                      {"  "}
                      <span className="text-white/60 hover:text-white">
                        Surface bottlenecks and improve flow
                      </span>
                    </span>

                    <span className="text-sm text-blue-500 font-medium cursor-pointer transition rounded-md p-2 hover:bg-white/10 ">
                      Changelog
                    </span>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Resources */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white/70 hover:text-white hover:bg-white/10">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-black/90 border border-white/10 backdrop-blur-xl">
                  <div className="w-160 bg-white/10 rounded-md overflow-hidden px-4 py-3">
                    <div className="grid grid-cols-[190px_1px_1fr_1fr] gap-4 items-start">
                      {/* Column 1 */}
                      <div>
                        <h4 className="text-sm tracking-wide text-white/50 mb-2">
                          Company
                        </h4>

                        <div className="space-y-2">
                          <NavItem title="About" desc="Meet the team" />
                          <NavItem title="Careers" desc="We're hiring" />
                        </div>
                      </div>

                      {/* Vertical Divider */}
                      <div className="w-px bg-white/10 self-stretch" />

                      {/* Column 2 */}
                      <div>
                        <h4 className="text-sm tracking-wide text-white/50 mb-2">
                          Explore
                        </h4>

                        <div className="space-y-2">
                          <NavItem
                            title="Developers"
                            desc="Build on the Linear API"
                          />
                          <NavItem
                            title="Security"
                            desc="Safe, secure and private"
                          />
                          <NavItem title="Docs" desc="How to use Linear" />
                        </div>
                      </div>

                      {/* Column 3 */}
                      <div className="pt-5.5">
                        <div className="space-y-2">
                          <NavItem
                            title="Switch to Linear"
                            desc="Migration guide"
                          />
                          <NavItem title="Download" desc="Get the app" />
                          <NavItem
                            title="Quality"
                            desc="Conversation on quality"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Simple links */}
              {["Pricing", "Customers", "Now", "Contact"].map((item) => (
                <NavigationMenuItem key={item}>
                  <NavigationMenuLink
                    asChild
                    className="px-3 py-2 rounded-md text-sm text-white/70 hover:text-white hover:bg-white/10 transition"
                  >
                    <Link href="#">{item}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </div>
        </NavigationMenu>

        {/* Right: CTA */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            className="text-white/70 hover:text-white hover:bg-white/10"
          >
            Log in
          </Button>
          <Button size="sm" className="bg-white text-black hover:bg-white/90">
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
}
