"use client"
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { NavbarLinks } from "@/data";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/utils/cn";

const MobileNavbar = () => {
    const pathname= usePathname()
  return (
    <section className="md:hidden">
      <div className="">
        <nav className="flex justify-between items-center p-3 bg-white shadow-2xl">
        <div className="">
            <Image
            src="/logo.png"
            width={50}
            height={50}
            alt="logo-ykrs"
            
            />
        </div>

        <div className="">

        <Sheet>
          <SheetTrigger>
                <Image
                src="/menu.svg"
                width={30}
                height={30}
                alt="menu"
                />
          </SheetTrigger>
          <SheetContent className="">
          {NavbarLinks.map((items,i)=>{
            const isActive = pathname === items.itemRoute || pathname.startsWith(`${items.itemRoute}/`);
                return(
                        <div key={i} className="flex text-lg flex-row mt-10">
                             <SheetClose  asChild key={items.itemRoute }>

                          <Link  href={items.itemRoute} className={cn('font-medium hover:text-primary-crimson ',{'text-primary-crimson':isActive})}>{items.navItem}</Link>            
                             </SheetClose>
                        </div>
                    
                )

            })}
          </SheetContent>
        </Sheet>
        </div>
        </nav>
      </div>
    </section>
  );
};

export default MobileNavbar;
