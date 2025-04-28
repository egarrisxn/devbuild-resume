import { Contact } from './Resume/contact';
import { Education } from './Resume/education';
import { Experience } from './Resume/experience';
import { Header } from './Resume/header';
import { Hobbies } from './Resume/hobbies';
import { Projects } from './Resume/projects';
import { Skills } from './Resume/skills';
import { Technologies } from './Resume/technologies';
import { Summary } from './Resume/summary';
import { getExampleResumeAPI } from '@/libs/exampleResumeAPI';

export default async function ExampleResume() {
  const fetchedData: { resumeData: ResumeData } = await getExampleResumeAPI();
  const resumeData = fetchedData.resumeData;

  return (
    <div className="mx-auto max-w-5xl">
      <Header propData={resumeData.heading} />

      <div className="grid grid-rows-1 lg:grid-cols-2">
        <Contact propData={resumeData.contact} />
        <Summary propData={resumeData.summary} />
      </div>

      <div className="grid grid-rows-1 lg:grid-cols-2">
        <Skills propData={resumeData.skills} />
        <Technologies propData={resumeData.technologies} />
      </div>

      <Experience propData={resumeData.experience} />

      <Projects propData={resumeData.projects} />

      <div className="grid grid-rows-1 lg:grid-cols-2">
        <Education propData={resumeData.education} />
        <Hobbies propData={resumeData.hobbies} />
      </div>
    </div>
  );
}
