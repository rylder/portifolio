export type Project = {
  name: string;
  description: string;
  image: string;
  href: string;
};

export type ProjectsData = {
  portuguese: Project[];
  english: Project[];
};
