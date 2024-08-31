import Button from "@/components/button";
import Separator from "@/components/separator";
import { ProjectsData } from "@/models/projects";
import { ServicesData } from "@/models/services";
import Image from "next/image";
import Logo from "../../public/logo-rylder-oliveira.svg";
import Photo2 from "../../public/photo-2-rylder-oliveira.svg";
import Photo from "../../public/photo-rylder-oliveira.svg";
import mockProjects from "../mock/projects.json";
import mockServices from "../mock/services.json";

export default async function Home() {
  const services: ServicesData = mockServices;
  const projects: ProjectsData = mockProjects;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <nav className="flex w-full items-center justify-between py-8">
          <Image src={Logo} alt="Logo" height={24} className="cursor-pointer" />
          <ul className="flex items-center justify-evenly gap-8">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>
              <Button>Contact</Button>
            </li>
          </ul>
        </nav>
        <section
          id="home"
          className="flex min-h-screen items-center justify-between gap-10 py-10"
        >
          <div>
            <p>Hello, I&apos;m</p>
            <h1 className="py-2 text-4xl font-bold text-green">
              Rylder Oliveira
            </h1>
            <p>
              a Software Developer with experience in mobile and web
              development. Explore my skills, services, and projects. Let’s
              build something amazing together!
            </p>
            <div className="my-6 flex gap-4">
              <Button>Download CV</Button>
              <Button variant="outline">Hire Me</Button>
            </div>
          </div>
          <Image src={Photo} alt="Profile image" width={500} />
        </section>
        <section
          id="about"
          className="flex min-h-screen flex-col items-center justify-center"
        >
          <h2 className="text-2xl font-bold">About</h2>
          <Separator />
          <div className="flex w-full items-center justify-between gap-10 py-10">
            <Image src={Photo2} alt="Profile image" width={500} />
            <div className="flex flex-col gap-3">
              <h3 className="text-xl">I&apos;m a Software Developer </h3>
              <p className="max-w-sm">
                experienced in Kotlin, Java, React Native, and Next.js.
                Passionate about technology, I lead teams and deliver
                high-quality solutions. Fluent in English and always ready for
                new challenges.
              </p>
              <div className="flex gap-4">
                <Button>Hire Me</Button>
                <Button variant="outline">Contact</Button>
              </div>
            </div>
          </div>
          <div className="flex gap-6 p-10">
            <div className="flex flex-col items-center justify-center rounded border-[1px] border-white bg-gray px-12 py-6">
              <h4 className="text-xl">40+</h4>
              <p>Clients</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded border-[1px] border-white bg-gray px-12 py-6">
              <h4 className="text-xl">40+</h4>
              <p>Clients</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded border-[1px] border-white bg-gray px-12 py-6">
              <h4 className="text-xl">40+</h4>
              <p>Clients</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded border-[1px] border-white bg-gray px-12 py-6">
              <h4 className="text-xl">40+</h4>
              <p>Clients</p>
            </div>
          </div>
          <div></div>
        </section>
        <section
          id="services"
          className="flex min-h-screen flex-col items-center justify-center"
        >
          <h2 className="text-2xl font-bold">Services</h2>
          <Separator />
          <p className="max-w-xl text-center">
            I develop native and cross-platform mobile apps, as well as web
            interfaces with Next.js. I also offer technical leadership to ensure
            the success of your projects.
          </p>
          <div className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-2 md:grid-cols-3">
            {services.english.map((service, index) => (
              <div
                key={index}
                className="flex min-h-[240px] flex-col items-center justify-between rounded bg-gray p-5 shadow-lg shadow-[#1f1f1f]"
              >
                <div className="flex flex-1 flex-col items-center justify-center">
                  <Image
                    src={service.icon}
                    alt="Icone"
                    width={48}
                    height={48}
                  />
                  <h3 className="mt-4 text-center text-xl">{service.name}</h3>
                </div>
                <p className="mt-4 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section
          id="projects"
          className="flex min-h-screen flex-col items-center justify-center"
        >
          <h2 className="text-2xl font-bold">Projects</h2>
          <Separator />
          <p className="max-w-xl text-center">
            From mobile apps to web systems, I&apos;ve worked on projects for
            companies like Herval and Sinosserra. Check it out!
          </p>
          <div className="flex flex-wrap items-center justify-center">
            {projects.english.map((project, index) => (
              <a
                key={index}
                href={project.href}
                className="m-10 size-60 rounded-lg shadow-lg"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="flex h-full w-full items-center justify-center bg-black bg-opacity-50 text-center text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <div>
                    <h3 className="mb-2 text-lg font-bold">{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
        <section
          id="contact"
          className="flex min-h-screen flex-col items-center justify-center"
        >
          <h2 className="text-2xl font-bold">Contact</h2>
          <Separator />
          <p className="max-w-xl text-center">
            Want to discuss a project or exchange ideas? Contact me
          </p>
          <div className="grid grid-cols-3 gap-10 py-10">
            <div className="flex h-60 w-60 flex-col items-center justify-center rounded border-[1px] border-white bg-gray">
              Imagem projeto
            </div>
            <div className="flex h-60 w-60 flex-col items-center justify-center rounded border-[1px] border-white bg-gray">
              Imagem projeto
            </div>
            <div className="flex h-60 w-60 flex-col items-center justify-center rounded border-[1px] border-white bg-gray">
              Imagem projeto
            </div>
            <div className="flex h-60 w-60 flex-col items-center justify-center rounded border-[1px] border-white bg-gray">
              Imagem projeto
            </div>
            <div className="flex h-60 w-60 flex-col items-center justify-center rounded border-[1px] border-white bg-gray">
              Imagem projeto
            </div>
            <div className="flex h-60 w-60 flex-col items-center justify-center rounded border-[1px] border-white bg-gray">
              Imagem projeto
            </div>
          </div>
        </section>
        <footer className="py-10"></footer>
      </div>
    </main>
  );
}
