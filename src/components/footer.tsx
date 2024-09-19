"use client";

import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";

interface FooterProps {
  github?: string;
  githubDeprecated?: string;
  linkedin?: string;
  twitterX?: string;
}

export default function Footer({ ...props }: FooterProps) {
  return (
    <footer className="w-full px-4 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6">
        <div className="flex space-x-6">
          {props.twitterX && (
            <a
              href={props.twitterX}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300"
            >
              <BsTwitterX size={24} />
            </a>
          )}
          {props.linkedin && (
            <a
              href={props.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors duration-300 hover:text-white"
            >
              <BsLinkedin size={24} />
            </a>
          )}
          {props.github && (
            <a
              href={props.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors duration-300 hover:text-white"
            >
              <BsGithub size={24} />
            </a>
          )}
        </div>
        <div className="text-center md:text-right">
          <p>
            &copy; {new Date().getFullYear()} Rylder Oliveira. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
