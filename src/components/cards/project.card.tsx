import { Project } from "@/models/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    // TODO: Add "a" tag to became a link to project page using href on project object
    <div
      className="size-72 rounded-lg shadow-lg"
      style={{
        backgroundImage: `url(${project.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex h-full w-full items-center justify-center bg-black bg-opacity-80 p-10 text-center text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
        <div>
          <h3 className="mb-2 text-lg font-bold">{project.name}</h3>
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  );
}
