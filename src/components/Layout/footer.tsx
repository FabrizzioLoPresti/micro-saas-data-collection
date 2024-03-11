"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

type Props = {};

const Footer = (props: Props) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <footer className="py-6">
      <p className="text-center">
        Proyecto desarrollado por{" "}
        <HoverCard>
          <HoverCardTrigger>
            <Link
              href="https://github.com/FabrizzioLoPresti"
              target="_blank"
              className="text-violet-700 font-bold"
            >
              @FabrizzioLoPresti
            </Link>
          </HoverCardTrigger>
          <HoverCardContent>
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="https://avatars.githubusercontent.com/u/89172392?v=4" />
                <AvatarFallback>@FL</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@FabrizzioLoPresti</h4>
                <p className="text-sm">
                  Full Stack Web Developer and AI Enthusiast
                </p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </p>
    </footer>
  );
};

export default Footer;
