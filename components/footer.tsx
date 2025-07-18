"use client";

import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-8 mb-6">
            <a 
              href="mailto:devanshm1210@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} className="hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://github.com/devansh-12" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} className="hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://www.linkedin.com/in/devansh-mhatre-5919b0290/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://x.com/itss_devansh" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} className="hover:scale-110 transition-transform" />
            </a>
          </div>
          <Separator className="mb-6 max-w-md mx-auto" />
          <div className="text-center space-y-2">
            <p className="font-medium">
              <span className="text-primary">Devansh</span>M
            </p>
            <p className="text-sm text-muted-foreground">
              {new Date().getFullYear()} 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
