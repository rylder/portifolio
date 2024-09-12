import Button from "@/components/button";
import SmallCard from "@/components/cards/small-card";
import Navbar from "@/components/navbar";
import Separator from "@/components/separator";
import { ProjectsData } from "@/models/projects";
import { ServicesData } from "@/models/services";
import Image from "next/image";
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
        <Navbar />
        <section
          id="home"
          className="flex min-h-screen flex-col items-center justify-center gap-10 p-10 md:flex-row md:justify-between"
        >
          <div className="flex w-full flex-col gap-3 md:w-1/2">
            <p>Hello, I&apos;m</p>
            <h1 className="py-2 text-4xl font-bold text-green">
              Rylder Oliveira
            </h1>
            <p>
              a Software Developer with experience in mobile and web
              development. Explore my skills, services, and projects. Let’s
              build something amazing together!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button>Download CV</Button>
              <Button variant="outline">Hire Me</Button>
            </div>
          </div>
          <Image
            src={Photo}
            alt="Profile image"
            className="hidden w-full md:block md:w-1/2"
          />
        </section>
        <section
          id="about"
          className="flex min-h-screen flex-col items-center p-10"
        >
          <h2 className="text-2xl font-bold">About</h2>
          <Separator />
          <div className="flex w-full flex-1 flex-col items-center justify-between gap-10 md:flex-row">
            <Image
              src={Photo2}
              alt="Profile image"
              className="hidden w-full md:block md:w-1/2"
            />
            <div className="just flex w-full flex-1 flex-col justify-center gap-3 py-10 md:w-1/2">
              <h3 className="text-xl">I&apos;m a Software Developer </h3>
              <p>
                experienced in Kotlin, Java, React Native, and Next.js.
                Passionate about technology, I lead teams and deliver
                high-quality solutions. Fluent in English and always ready for
                new challenges.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button>Hire Me</Button>
                <Button variant="outline">Contact</Button>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <SmallCard title="40+" description="Clients" />
            <SmallCard title="40+" description="Projects" />
            <SmallCard title="40+" description="Years Experience" />
            <SmallCard title="40+" description="Technologies" />
          </div>
        </section>
        <section
          id="services"
          className="flex min-h-screen flex-col items-center justify-center p-10"
        >
          <h2 className="text-2xl font-bold">Services</h2>
          <Separator />
          <p className="max-w-xl text-center">
            I develop native and cross-platform mobile apps, as well as web
            interfaces with Next.js. I also offer technical leadership to ensure
            the success of your projects.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 py-10">
            {services.english.map((service, index) => (
              <div
                key={index}
                className="flex size-60 flex-col items-center justify-between rounded bg-gray p-5 shadow-lg shadow-[#1f1f1f]"
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
          className="flex min-h-screen flex-col items-center justify-center p-10"
        >
          <h2 className="text-2xl font-bold">Projects</h2>
          <Separator />
          <p className="max-w-xl text-center">
            From mobile apps to web systems, I&apos;ve worked on projects for
            companies like Herval and Sinosserra. Check it out!
          </p>
          <div className="flex flex-wrap items-center justify-center">
            {projects.english.map((project, index) => (
              // TODO: Add "a" tag to became a link to project page using href on project object
              <div
                key={index}
                className="m-10 size-60 rounded-lg shadow-lg"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="flex h-full w-full items-center justify-center bg-black bg-opacity-80 text-center text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <div>
                    <h3 className="mb-2 text-lg font-bold">{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section
          id="contact"
          className="flex min-h-screen flex-col items-center p-10"
        >
          <h2 className="text-2xl font-bold">Contact</h2>
          <Separator />
          <p className="max-w-xl text-center">
            Want to discuss a project or exchange ideas? Contact me
          </p>
          <div className="grid hidden grid-cols-3 gap-10 py-10">
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
