"use client";

import Button from "./button";

export default function DownloadButton() {
  return (
    <a href="/documents/cv-rylder-oliveira.pdf" download>
      <Button>Download CV</Button>
    </a>
  );
}
