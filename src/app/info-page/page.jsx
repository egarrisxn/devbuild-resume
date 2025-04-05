"use client";
import CustomTypography from "@/components/UI/Typography";
import CustomButton from "@/components/UI/Button";
import Link from "next/link";
import { FolderOpen, File, Code, ArrowLeft, Github } from "lucide-react";

export default function InfoPage() {
  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden max-w-3xl w-full p-8">
        <header className="mb-8 text-center">
          <CustomTypography
            variant="h1"
            color="indigo"
            textGradient
            className="text-4xl lg:text-5xl font-extrabold tracking-tight"
          >
            Instructions
          </CustomTypography>
          <div className="flex justify-center gap-4 mt-4">
            <Link
              href="/resume-template"
              target="_blank"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline hover:dark:text-blue-300"
            >
              <File className="size-5 mr-2" />
              Template
            </Link>
            <span className="text-gray-400 dark:text-gray-600">|</span>
            <Link
              href="/example-resume"
              target="_blank"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline hover:dark:text-blue-300"
            >
              <Code className="size-5 mr-2" />
              Example
            </Link>
          </div>
        </header>

        <section className="mb-8">
          <CustomTypography
            variant="p"
            color="gray"
            className="text-base dark:text-gray-300 leading-relaxed"
          >
            Follow these steps to set up your resume data:
          </CustomTypography>
          <ol className="list-decimal pl-6 mt-4 space-y-3">
            <li>
              Visit{" "}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline hover:dark:text-blue-300"
              >
                GitHub <Github className="size-5 ml-1" />
              </a>{" "}
              and create a new repository to store your data.
            </li>
            <li>
              Create a <span className="font-semibold">folder</span> named{" "}
              <code className="text-sm bg-gray-200 dark:bg-gray-700 rounded-md px-1 py-0.5">
                images
              </code>{" "}
              for your avatar and a <span className="font-semibold">file</span>{" "}
              named{" "}
              <code className="text-sm bg-gray-200 dark:bg-gray-700 rounded-md px-1 py-0.5">
                resume.json
              </code>
              .
            </li>
            <li>
              Navigate to the{" "}
              <code className="text-sm bg-gray-200 dark:bg-gray-700 rounded-md px-1 py-0.5">
                /public/data
              </code>{" "}
              folder in your application.
            </li>
            <li>
              Copy the{" "}
              <code className="text-sm bg-gray-200 dark:bg-gray-700 rounded-md px-1 py-0.5">
                template.json
              </code>{" "}
              file as a reference for creating your{" "}
              <code className="text-sm bg-gray-200 dark:bg-gray-700 rounded-md px-1 py-0.5">
                resume.json
              </code>{" "}
              file.
            </li>
            <li>
              Deploy a static site for your repository using GitHub Pages.
            </li>
            <li>
              This allows easier data updates, avoiding constant application
              deployments.
            </li>
            <li>
              Obtain your new GitHub Pages URL and return to update the endpoint
              in{" "}
              <code className="text-sm bg-gray-200 dark:bg-gray-700 rounded-md px-1 py-0.5">
                src/libs/resumeAPI
              </code>
              .
            </li>
            <li>
              Once done, your updated resume will be accessible{" "}
              <Link
                href="/final-resume"
                className="text-blue-600 dark:text-blue-400 hover:underline hover:dark:text-blue-300"
              >
                here
              </Link>
              .
            </li>
          </ol>
          <CustomTypography
            variant="p"
            color="gray"
            className="text-sm text-gray-500 dark:text-gray-400 mt-4"
          >
            <span className="font-semibold">Note:</span> While you can use the{" "}
            <code className="text-sm bg-gray-200 dark:bg-gray-700 rounded-md px-1 py-0.5">
              example.json
            </code>{" "}
            file for real-time updates during development, once your application
            is in production, you will need a separate JSON file properly
            configured for the application to function correctly.
          </CustomTypography>
          <CustomTypography
            variant="p"
            color="gray"
            className="mt-4 text-base dark:text-gray-300"
          >
            For any questions, feel free to contact me directly at{" "}
            <span className="font-semibold">egarrisxn@gmail.com</span>.
          </CustomTypography>
          <CustomTypography
            variant="p"
            color="gray"
            className="mt-4 text-base dark:text-gray-300"
          >
            Helpful links:
          </CustomTypography>
          <div className="mt-2 space-y-2 sm:space-x-2">
            <Link
              href="https://github.com/egarrisxn/devbuild-resume"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline hover:dark:text-blue-300"
            >
              <Github className="size-5 mr-2" />
              devbuild-resume repository
            </Link>
            <Link
              href="https://github.com/egarrisxn/resume-json"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline hover:dark:text-blue-300"
            >
              <Github className="size-5 mr-2" />
              resume.json repository
            </Link>
          </div>
        </section>

        <footer className="pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
            <CustomTypography
              variant="h3"
              color="indigo"
              textGradient
              className="text-2xl lg:text-3xl font-semibold tracking-tight"
            >
              I hope you find this helpful!
            </CustomTypography>
            <Link href="/" target="_blank">
              <CustomButton
                variant="gradient"
                color="blue-gray"
                ripple={true}
                className="px-8 py-2 lg:px-10 lg:py-2.5 inline-flex items-center"
              >
                <ArrowLeft className="size-5 mr-2" />
                Back
              </CustomButton>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}

// import CustomTypography from "@/components/UI/Typography";
// import CustomButton from "@/components/UI/Button";
// import Link from "next/link";

// export default function InfoPage() {
//   return (
//     <div className="container mx-auto items-center justify-center grid px-4 2xl:py-20 py-16 gap-8">
//       <section>
//         <CustomTypography
//         variant="h1"
//         color="indigo"
//         textGradient
//         className="text-5xl 2xl:text-6xl"
//         >
//           Instructions
//         </CustomTypography>
//         <Link href="/resume-template" target="_blank" className="underline 2xl:text-xl ml-1 underline-offset-2 text-blue-600 hover:text-blue-300">
//           Template
//         </Link>
//         {" | "}
//         <Link href="/example-resume" target="_blank"  className="2xl:text-xl underline underline-offset-2 text-blue-600 hover:text-blue-300">
//           Example
//         </Link>
//       </section>
//       <section>
//        <CustomTypography
//         variant="p"
//         color="indigo"
//         textGradient
//         className="text-sm sm:text-base xl:text-lg 2xl:text-xl"
//         >
//           1. Visit <a href="https://github.com" className="underline underline-offset-2 text-blue-600 hover:text-blue-300">GitHub</a> and create a new repository to store your data.
//           <br/>
//           2. Create a <span className="font-bold">folder</span> named images for your avatar & a <span className="font-bold">file</span> named &quot;resume.json&quot;.
//           <br/>
//           3. Navigate to the <span className="border-2 shadow rounded-lg border-purple-200 px-1">/public/data</span> folder in your application.
//           <br/>
//           4. Copy the &quot;template.json&quot; file as a reference for creating your &quot;resume.json&quot; file.
//           <br/>
//           5. Deploy a static site for your repository using GitHub Pages.
//           <br/>
//           6. This allows easier data updates, avoiding constant application deployments
//           <br/>
//           7. Obtain your new GitHub Pages URL and return to update the endpoint in <span className="border-2 shadow rounded-lg border-purple-200 px-1">src/libs/resumeAPI</span>.
//           <br/>
//           8. Once done, your updated resume will be accessible <Link href="/final-resume" className="underline text-blue-600 hover:text-blue-300">here</Link>.
//           <br/>
//           <br/>
//           <span className="text-sm">Note: While you can use the &quot;example.json&quot; file for real-time updates during development, once your application is in production,
//           <br className="hidden lg:block"/>{' '}
//            you will need a separate JSON file properly configured for the application to function correctly.
//           </span>
//           <br/>
//           <br/>
//            For any questions, feel free to contact me directly at <span className="font-bold">egarrisxn@gmail.com</span>.
//           <br/>
//           <br/>
//           Helpful links:
//           <br/>
//           <a href="https://github.com/egarrisxn/devbuild-resume" className="underline underline-offset-2 text-blue-600 hover:text-blue-300">
//             devbuild-resume repository
//           </a>
//           <br/>
//           <a href="https://github.com/egarrisxn/resume-json" className="underline underline-offset-2 text-blue-600 hover:text-blue-300">
//             resume.json repository
//           </a>
//           <br/>
//         </CustomTypography>
//       </section>
//       <section className="flex flex-col justify-center sm:flex-row sm:justify-between gap-4 sm:gap-0 sm:items-center">
//         <CustomTypography
//         variant="h3"
//         color="indigo"
//         textGradient
//         className="text-2xl md:text-3xl 2xl:text-4xl"
//         >
//           I hope you enjoy!
//         </CustomTypography>
//         <Link href="/" target="_blank">
//           <CustomButton variant="gradient" color="blue-gray" ripple={true} className="px-8 py-1.5 sm:px-10 sm:py-2 2xl:px-12 2xl:py-2.5">
//             BACK
//           </CustomButton>
//         </Link>
//       </section>
//     </div>
//   );
// }
