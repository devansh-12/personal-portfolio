"use client";

import React from 'react';
import { Separator } from '@/components/ui/separator';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-2 mb-8">
            <h2 className="text-xl text-primary font-medium">About Me</h2>
            <h3 className="text-3xl md:text-5xl font-bold">My Journey</h3>
            <Separator className="w-24 h-1 bg-primary rounded-full mt-4" />
          </div>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
            I&apos;m an aspiring Software Development Engineer with a passion for full stack web development, competitive programming, 
            and building real-world applications that solve meaningful problems. I enjoy crafting scalable, user-focused solutions 
            using modern technologies across the stack.
          </p>
          <p>
            My approach to development is grounded in clean, maintainable code and continuous learning—whether it&apos;s developing robust 
            systems, exploring new frameworks, or optimizing algorithms in coding contests.
          </p>
          <p>
            When I&apos;m not building or debugging, you&apos;ll find me solving DSA problems, contributing to college tech communities, 
            or participating in hackathons and programming competitions.
          </p>

          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">400+</div>
              <div className="text-muted-foreground">DSA Problems Solved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Projects & Research Builds</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1200+</div>
              <div className="text-muted-foreground">Codeforces Rating</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
