"use client";

import type { Project } from "@/lib/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { ExpandDialog } from "./Dialog";
import { useState } from "react";
import { MdConstruction } from "react-icons/md";
import { ToolTip } from "./Tooltip";
interface ProjectCardProps {
  project: Project;
}
export function ProjectCard({ project }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Card className="flex flex-col h-full overflow-hidden">
      <CardHeader className="p-0">
        <div
          className="relative group overflow-hidden"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="relative overflow-hidden aspect-[1493/917] ">
            <Image
              fill
              alt="project image"
              src={project.image}
              className="object-cover rounded-t "
              style={{ objectFit: "cover" }}
            />{" "}
          </div>

          <ExpandDialog
            className={`absolute duration-300 shadow-md ease-in-out transition-all bottom-3 right-2 bg-background rounded-sm !p-1 h-auto z-10 hover:!text-muted-foreground ${
              hovered ? "md:-translate-y-1" : "md:translate-y-20"
            }`}
            tabIndex={hovered ? 0 : -1}
            aria-hidden={!hovered}
            src={project.image}
          />
        </div>
        <Separator className="!mt-0 mb-4" />
        <div className="px-6 !mt-5 flex-between">
          <CardTitle>{project.title}</CardTitle>
          {project.status && (
            <ToolTip
              tooltip={
                project.status === "under development"
                  ? "Under Development"
                  : "Recently Completed"
              }
            >
              {project.status === "under development" ? (
                <MdConstruction size={22} />
              ) : (
                <span className="text-3xl">🎉</span>
              )}
            </ToolTip>
          )}
          {/* <CardDescription>{project.description}</CardDescription> */}
        </div>
      </CardHeader>

      <CardContent className="flex-grow mt-6">
        {project.technologies && project.technologies.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-muted-foreground mb-2">
              Technologies Used:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex justify-start gap-2">
        {project.liveDemoUrl ? (
          <Button asChild variant="outline" size="sm">
            <Link
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="dark:bg-card hover:!bg-accent"
            >
              <ExternalLink className="mr-2 h-4 w-4" /> Demo
            </Link>
          </Button>
        ) : (
          project.status === "under development" && (
            <Button variant="outline" size="sm">
              <ExternalLink className="mr-2 h-4 w-4" /> Coming Soon...
            </Button>
          )
        )}
        {project.sourceCodeUrl && (
          <Button asChild variant="outline" size="sm">
            <Link
              href={project.sourceCodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="dark:bg-card hover:!bg-accent"
            >
              <Github className="mr-2 h-4 w-4" /> Source Code
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
