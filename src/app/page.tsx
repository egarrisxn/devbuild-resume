import Link from 'next/link';
import Image from 'next/image';
import CustomTypography from '@/components/UI/Typography';
import CustomButton from '@/components/UI/Button';
import landingResume from '../../public/images/landing-resume.png';
import landingTemplate from '../../public/images/landing-template.png';

export default function ResumePage() {
  return (
    <div className="container mx-auto grid items-center justify-center gap-8 px-4 py-16 sm:px-8 lg:px-4 xl:py-24 2xl:py-32">
      <section className="text-center">
        <CustomTypography
          variant="h1"
          color="indigo"
          textGradient
          className="text-5xl tracking-tighter md:text-6xl xl:text-7xl 2xl:text-8xl"
        >
          Devbuild Resume
        </CustomTypography>
        <CustomTypography
          variant="h3"
          color="gray"
          className="mx-auto my-2 w-full max-w-[30rem] px-8 text-lg font-thin tracking-tighter md:text-xl xl:text-2xl 2xl:px-0 2xl:text-3xl"
        >
          Beautifully designed resume template to help you stand out from the
          crowd.
        </CustomTypography>
      </section>
      <section className="grid grid-cols-1 gap-8 font-semibold text-blue-900">
        <div className="mb-6 2xl:mt-4">
          <p className="ml-1">TURN THIS..</p>
          <Link href="resume-template" target="_blank">
            <Image
              src={landingTemplate}
              width={765}
              height={430}
              alt="Landing Template"
              className="mt-1 transform rounded-lg border-2 shadow-lg transition duration-200 hover:scale-105"
              priority
            />
          </Link>
        </div>
        <div className="mb-4 2xl:mt-6 2xl:mb-10">
          <p className="ml-1">INTO THIS..</p>
          <Link href="example-resume" target="_blank">
            <Image
              src={landingResume}
              width={765}
              height={430}
              alt="Landing Resume"
              className="mt-1 transform rounded-lg border-2 shadow-lg transition duration-200 hover:scale-105"
              priority
            />
          </Link>
        </div>
      </section>
      <section className="mx-auto flex flex-col items-center justify-center gap-2 text-center">
        <CustomTypography
          variant="h4"
          color="blue"
          textGradient
          className="text-base tracking-tighter md:text-lg xl:text-xl 2xl:text-2xl"
        >
          What are you waiting for?
        </CustomTypography>
        <Link href="/docs" target="_blank">
          <CustomButton
            variant="gradient"
            color="blue-gray"
            ripple={true}
            className="px-8 py-1.5 md:px-10 md:py-2 xl:px-12 xl:py-2.5 2xl:px-14 2xl:py-3 2xl:text-sm"
          >
            BEGIN
          </CustomButton>
        </Link>
      </section>
    </div>
  );
}
