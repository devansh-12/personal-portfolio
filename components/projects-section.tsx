"use client";

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "CampusConnect - Job Portal",
      description: "A full-stack job portal enabling students to browse and apply to jobs, with secure authentication and recruiter dashboards for managing listings and applications.",
      tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "Express.js", "MySQL", "GitHub"],
      liveLink: "#",
      githubLink: "https://github.com/devansh-12/CampusConnect"
    },
    {
      title: "Safarnama – Travel Planning App",
      description: "A travel planning platform for creating personalized multi-day itineraries with visual previews, SSR support, and integrated auth and media storage.",
      tags: ["Next.js", "Prisma", "Neon Postgres", "Firebase"],
      liveLink: "#",
      githubLink: "https://github.com/devansh-12/SafarNama---Travel-Planner"
    },
    {
      title: "Fictional Universe Consistency Kit (VerseSync)",
      description: "An NLP-powered tool that uses knowledge graphs to detect lore inconsistencies in fictional universes, with entity-relation extraction and timeline versioning.",
      tags: ["Python", "Neo4j", "Gemini API", "NLP"],
      liveLink: "#",
      githubLink: "https://github.com/devansh-12/F.U.C.K-I.T"

    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-xl text-primary font-medium">My Work</h2>
          <h3 className="text-3xl md:text-5xl font-bold mt-2">Featured Projects</h3>
          <Separator className="w-24 h-1 bg-primary rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative p-6 rounded-xl overflow-hidden bg-gradient-to-br from-muted/30 to-background border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:bg-primary/10 transition-colors duration-500"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-primary/5 rounded-full -ml-8 -mb-8 group-hover:bg-primary/10 transition-colors duration-500"></div>
              
              <div className="relative space-y-4">
                <h4 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{project.title}</h4>
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary" 
                      className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary/20 transition-colors duration-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-1 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <ExternalLink size={14} /> Live
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-1 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Github size={14} /> Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
