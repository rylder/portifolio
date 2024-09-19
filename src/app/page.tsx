import { Button } from "@/components/buttons";
import { Card } from "@/components/cards";
import Carousel from "@/components/carousel";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Section } from "@/components/sections";
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
              <Button.DownloadButton />
              <Button.HireMeButton />
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
                <Button.HireMeButton />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Card.AboutCard title="40+" description="Clients" />
            <Card.AboutCard title="40+" description="Projects" />
            <Card.AboutCard title="40+" description="Years Experience" />
            <Card.AboutCard title="40+" description="Technologies" />
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
          <div className="flex w-full flex-1 flex-col items-center justify-center">
            <Carousel>
              {services.english.map((service, index) => (
                <Card.ServiceCard key={index} service={service} />
              ))}
            </Carousel>
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
          <div className="flex w-full flex-1 flex-col items-center justify-center">
            <Carousel>
              {projects.english.map((project, index) => (
                <Card.ProjectCard key={index} project={project} />
              ))}
            </Carousel>
          </div>
        </section>
        <Section.ContactSection id="contact" />
        <Footer
          github="https://github.com/rylder"
          linkedin="https://www.linkedin.com/in/rylder-oliveira/"
          twitterX="https://www.x.com/callmerylder"
        />
      </div>
    </main>
  );
}
