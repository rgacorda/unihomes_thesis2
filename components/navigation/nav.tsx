"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { useState } from 'react';
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export const ButtonIcon = ({ onClose }) => {
  return (
    <Button
      size="icon"
      onClick={onClose}
      className="bg-transparent text-black hover:text-white"
    >
      <X className="h-4 w-4" />
    </Button>
  );
};

const Nav = () => {
  const [isClient, setIsClient] = useState(true);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="relative z-10 flex items-center justify-between w-full px-10 py-4">
      <div className="flex justify-start">
        <img src="/Logo1.png" alt="Logo" className="h-8 w-auto scale-[2]" />
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                <li>
                  <a
                    href="#item1"
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    )}
                  >
                    <div className="text-sm font-medium leading-none">Item 1</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Description for Item 1
                    </p>
                  </a>
                </li>
                <li>
                  <a
                    href="#item2"
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    )}
                  >
                    <div className="text-sm font-medium leading-none">Item 2</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Description for Item 2
                    </p>
                  </a>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a
              href="#listings"
              className={cn(
                "inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              )}
            >
              Listings
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a
              href="#favorites"
              className={cn(
                "inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              )}
            >
              Favorites
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex justify-end">
        <AlertDialog open={open} onOpenChange={setOpen}>
          <AlertDialogTrigger asChild>
            <Button className="bg-black text-white px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-800">
              Sign Up
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-white p-6 rounded-md shadow-lg">
            <AlertDialogHeader>
              <div className="flex justify-between items-center">
                <AlertDialogTitle className="text-black text-[30px]">Create an Account</AlertDialogTitle>
                <ButtonIcon onClose={handleClose} />
              </div>
              <AlertDialogDescription>Enter your details below to create your account</AlertDialogDescription>
              <div className="flex justify-center items-center py-4">
                <div className="relative flex rounded-full bg-gray-800 p-1 w-full max-w-lg">
                  <button
                    className={`${isClient ? "bg-white text-black" : "text-white"
                      } flex-1 py-1 px-2 rounded-full focus:outline-none transition-colors duration-300 text-sm`}
                    onClick={() => setIsClient(true)}
                  >
                    Client
                  </button>
                  <button
                    className={`${!isClient ? "bg-white text-black" : "text-white"
                      } flex-1 py-1 px-2 rounded-full focus:outline-none transition-colors duration-300 text-sm`}
                    onClick={() => setIsClient(false)}
                  >
                    Proprietor
                  </button>
                </div>
              </div>
            </AlertDialogHeader>
            <form className="space-y-8">
              {isClient ? (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">First Name</label>
                      <Input type="text" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Last Name</label>
                      <Input type="text" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <Input type="email" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <Input type="password" placeholder="••••••" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Contact Number</label>
                    <Input type="text" placeholder="123-456-7890" />
                  </div>
                </>
              ) : (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Business Name</label>
                      <Input type="text" placeholder="Business Inc." />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Owner Name</label>
                      <Input type="text" placeholder="Jane Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Business Email</label>
                    <Input type="email" placeholder="business@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Business Address</label>
                    <Input type="text" placeholder="123 Main St." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Business Number</label>
                    <Input type="text" placeholder="123-45-6789" />
                  </div>
                </>
              )}

              <AlertDialogFooter>
                <AlertDialogAction type="submit" className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
                  Create Account
                </AlertDialogAction>
              </AlertDialogFooter>
              <p className="mt-4 text-center text-black">
                Already have an account?{" "}
                <a href="/login" className="text-blue-500 hover:underline">
                  Login
                </a>
              </p>
            </form>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default Nav;
