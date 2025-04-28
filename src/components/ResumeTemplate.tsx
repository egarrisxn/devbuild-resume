import HeaderForm from './Template/header-form';
import ContactForm from './Template/contact-form';
import SummaryForm from './Template/summary-form';
import SkillForm from './Template/skill-form';
import TechnologiesForm from './Template/technologies-form';
import ExperienceForm from './Template/experience-form';
import ProjectsForm from './Template/projects-form';
import EducationForm from './Template/education-form';
import HobbiesForm from './Template/hobbies-form';

export default function ResumeTemplate() {
  return (
    <div className="mx-auto max-w-5xl">
      <HeaderForm />

      <div className="grid grid-rows-1 lg:grid-cols-2">
        <ContactForm />
        <SummaryForm />
      </div>

      <div className="grid grid-rows-1 lg:grid-cols-2">
        <SkillForm />
        <TechnologiesForm />
      </div>

      <ExperienceForm />

      <ProjectsForm />

      <div className="grid grid-rows-1 lg:grid-cols-2">
        <EducationForm />
        <HobbiesForm />
      </div>
    </div>
  );
}
