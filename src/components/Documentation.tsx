import Link from 'next/link';
import { ArrowLeft, Github, File, Code } from 'lucide-react';
import CustomTypography from '@/components/UI/Typography';
import CustomButton from '@/components/UI/Button';

export default function Documentation() {
  return (
    <div className="mx-auto my-16 grid w-full max-w-4xl grid-cols-1 overflow-hidden p-8 xl:max-w-[96rem]">
      <div className="w-full max-w-4xl p-4 md:p-8 lg:p-6 xl:max-w-[84rem]">
        <header className="mb-8">
          <CustomTypography
            variant="h1"
            color="indigo"
            textGradient
            className="text-4xl font-extrabold tracking-tight lg:text-5xl"
          >
            DevBuild Resume Documentation
          </CustomTypography>
          <CustomTypography
            variant="h2"
            className="mt-2 text-lg text-gray-800 dark:text-gray-200 lg:text-xl"
          >
            Learn how to use DevBuild Resume to create your perfect developer
            resume.
          </CustomTypography>
          <div className="mt-4 flex gap-4">
            <Link
              href="/template"
              target="_blank"
              className="inline-flex items-center text-blue-600 hover:text-blue-500 hover:underline dark:text-blue-500 hover:dark:text-blue-400"
            >
              <File className="mr-2 size-5" />
              Template (template.json)
            </Link>
            <span className="text-gray-400 dark:text-gray-700">|</span>
            <Link
              href="/example"
              target="_blank"
              className="inline-flex items-center text-blue-600 hover:text-blue-500 hover:underline dark:text-blue-500 hover:dark:text-blue-400"
            >
              <Code className="mr-2 size-5" />
              Example (example.json)
            </Link>
          </div>
        </header>

        <section className="mb-8">
          <CustomTypography
            variant="h2"
            className="mb-2 text-2xl font-semibold text-gray-900 dark:text-gray-100 lg:text-3xl"
          >
            Getting Started
          </CustomTypography>
          <CustomTypography
            variant="h3"
            className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-200 lg:text-xl"
          >
            Prerequisites
          </CustomTypography>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-sm text-gray-700 dark:text-gray-300 lg:text-base">
            <li>A GitHub account (for hosting your resume data).</li>
            <li>Basic understanding of JSON data structure.</li>
            <li>A web browser.</li>
          </ul>

          <CustomTypography
            variant="h3"
            className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-200 lg:text-xl"
          >
            Understanding `template.json` and `example.json`
          </CustomTypography>
          <CustomTypography
            variant="paragraph"
            className="mb-2 leading-relaxed text-gray-800 dark:text-gray-200"
          >
            To help you get started, this application provides two important
            JSON files:
          </CustomTypography>
          <div className="mb-4 text-gray-700 dark:text-gray-300">
            <ul className="mb-2 list-disc space-y-3 pl-6">
              <li>
                <Link
                  href="/template"
                  target="_blank"
                  className="inline-flex items-center text-blue-600 hover:text-blue-500 hover:underline dark:text-blue-500 hover:dark:text-blue-400"
                >
                  <File className="mr-1 size-4" />
                  <strong>`template.json`</strong>
                </Link>
                : This file, located in the{' '}
                <code className="rounded-md bg-gray-200 px-1 py-0.5 text-sm dark:bg-gray-700">
                  /public/data/
                </code>{' '}
                directory, outlines the **required structure** for your
                `resume.json` file. It shows you the expected fields (like
                `personalInfo`, `experience`, `education`, `skills`, etc.) and
                their basic organization. Use this as a blueprint for creating
                your own resume data.
              </li>
              <li>
                <Link
                  href="/resume"
                  target="_blank"
                  className="inline-flex items-center text-blue-600 hover:text-blue-500 hover:underline dark:text-blue-500 hover:dark:text-blue-400"
                >
                  <Code className="mr-1 size-4" />
                  <strong>`example.json`</strong>
                </Link>
                : Also found in{' '}
                <code className="rounded-md bg-gray-200 px-1 py-0.5 text-sm dark:bg-gray-700">
                  /public/data/
                </code>
                , this file provides **sample data** that conforms to the
                `template.json` structure. It includes example entries for each
                section, giving you a clearer idea of how to format your own
                information. Feel free to refer to this while building your
                `resume.json`.
              </li>
            </ul>
            Remember to create your own `resume.json` file in your separate
            GitHub repository based on the structure defined in `template.json`
            and populated with your own information, potentially referencing the
            examples in `example.json`.
          </div>

          <CustomTypography
            variant="h3"
            className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-200 lg:text-xl"
          >
            Setting Up Your Resume Data
          </CustomTypography>
          <ol className="mb-4 list-decimal space-y-3 pl-6 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Create a GitHub Repository:</strong> Go to{' '}
              <a
                href="https://github.com/new"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-500 hover:underline dark:text-blue-500 hover:dark:text-blue-400"
              >
                GitHub <Github className="ml-1 size-4" />
              </a>{' '}
              and create a new public repository to store your resume data.
            </li>
            <li>
              <strong>Create Data Structure:</strong> Inside your new
              repository, create:
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>
                  A folder named{' '}
                  <code className="rounded-md bg-gray-200 px-1 py-0.5 text-sm dark:bg-gray-700">
                    images
                  </code>{' '}
                  for your avatar and other images.
                </li>
                <li>
                  A file named{' '}
                  <code className="rounded-md bg-gray-200 px-1 py-0.5 text-sm dark:bg-gray-700">
                    resume.json
                  </code>{' '}
                  which will contain your resume content.
                </li>
              </ul>
            </li>
            <li>
              <strong>Reference the Template:</strong> In this
              application&quot;s directory, navigate to{' '}
              <code className="rounded-md bg-gray-200 px-1 py-0.5 text-sm dark:bg-gray-700">
                /public/data/
              </code>{' '}
              and open{' '}
              <code className="rounded-md bg-gray-200 px-1 py-0.5 text-sm dark:bg-gray-700">
                template.json
              </code>
              . This file provides the expected structure for your{' '}
              <code className="rounded-md bg-gray-200 px-1 py-0.5 text-sm dark:bg-gray-700">
                resume.json
              </code>{' '}
              file.
            </li>
            <li>
              <strong>Populate Your `resume.json`:</strong> Create your own{' '}
              <code className="rounded-md bg-gray-200 px-1 py-0.5 text-sm dark:bg-gray-700">
                resume.json
              </code>{' '}
              file in your GitHub repository based on the{' '}
              <code className="rounded-md bg-gray-200 px-1 py-0.5 text-sm dark:bg-gray-700">
                template.json
              </code>{' '}
              structure. Fill in your personal details, experience, education,
              skills, etc.
            </li>
            <li>
              <strong>Add Your Avatar (Optional):</strong> Place your avatar
              image inside the{' '}
              <code className="rounded-md bg-gray-200 px-1 py-0.5 text-sm dark:bg-gray-700">
                images
              </code>{' '}
              folder in your GitHub repository. Ensure the path in your{' '}
              <code className="rounded-md bg-gray-200 px-1 py-0.5 text-sm dark:bg-gray-700">
                resume.json
              </code>{' '}
              correctly points to this image (e.g., `&quot;avatar&quot;:
              &quot;https://your-github-username.github.io/your-repo-name/images/avatar.png&quot;`).
            </li>
          </ol>

          <CustomTypography
            variant="h3"
            className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-200 lg:text-xl"
          >
            Deploying Your Data with GitHub Pages
          </CustomTypography>
          <ol className="mb-4 list-decimal space-y-3 pl-6 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Enable GitHub Pages:</strong> In your GitHub repository,
              navigate to &quot;Settings&quot; &gt; &quot;Pages&quot;.
            </li>
            <li>
              <strong>Source Selection:</strong> Under &quot;Build and
              deployment&quot;, select &quot;Deploy from a branch&quot;. Choose
              your main branch (usually `main` or `master`) and save.
            </li>
            <li>
              <strong>Your GitHub Pages URL:</strong> Once deployed, you&apos;ll
              find your site URL under the &quot;GitHub Pages&quot; section. It
              will typically be in the format:{' '}
              <code className="rounded-md bg-gray-200 px-1 py-0.5 text-sm dark:bg-gray-700">
                https://&lt;your-github-username&gt;.github.io/&lt;your-repo-name&gt;/
              </code>
              .
            </li>
          </ol>

          <CustomTypography
            variant="h3"
            className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-200 lg:text-xl"
          >
            Updating the Data Endpoint
          </CustomTypography>
          <ol className="mb-4 list-decimal space-y-3 pl-6 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Locate `resumeAPI.ts`:</strong> In this application&apos;s
              source code, find the file located at{' '}
              <code className="rounded-md bg-gray-200 px-1 py-0.5 text-sm dark:bg-gray-700">
                src/libs/resumeAPI.ts
              </code>{' '}
              (or a similar file where API calls are handled).
            </li>
            <li>
              <strong>Update the `fetchResumeData` Function:</strong> Modify the
              URL in the `fetch` request to point to the URL of your deployed
              GitHub Pages site, specifically the{' '}
              <code className="rounded-md bg-gray-200 px-1 py-0.5 text-sm dark:bg-gray-700">
                resume.json
              </code>{' '}
              file. For example:
              <pre className="text-pretty">
                <code className="language-javascript">
                  {`const fetchResumeData = async () => { const response = await fetch('https:// <your-github-username> .github.io / <your-repo-name> / resume.json'); // ... rest of the code };`}
                </code>
              </pre>
            </li>
            <li>
              <strong>Save Changes:</strong> Save the updated file. The
              application should now fetch your resume data from your GitHub
              Pages URL.
            </li>
          </ol>

          <CustomTypography
            variant="h3"
            className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-200 lg:text-xl"
          >
            Local Development Note
          </CustomTypography>
          <div className="mb-4 leading-relaxed text-gray-800 dark:text-gray-200">
            During local development, the application might be configured to use
            the{' '}
            <code className="rounded-md bg-gray-200 px-1 py-0.5 text-sm dark:bg-gray-700">
              example.json
            </code>{' '}
            file in the{' '}
            <code className="rounded-md bg-gray-200 px-1 py-0.5 text-sm dark:bg-gray-700">
              /public/data/
            </code>{' '}
            directory for convenience. However, for the production build and to
            ensure your custom data is used, you must configure the API endpoint
            to your GitHub Pages URL.
          </div>

          <CustomTypography
            variant="h2"
            className="mb-2 text-2xl font-semibold text-gray-900 dark:text-gray-100 lg:text-3xl"
          >
            ATS Compatibility Considerations
          </CustomTypography>
          <div className="mb-4 leading-relaxed text-gray-800 dark:text-gray-200">
            While **DevBuild Resume** offers a visually appealing layout, some
            advanced styling and formatting might not be parsed correctly by all
            Applicant Tracking Systems (ATS). If ATS compatibility is a primary
            concern, consider the following:
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Using standard, common fonts.</li>
              <li>
                Minimizing the use of complex layouts (e.g., multi-column).
              </li>
              <li>Simplifying section headings and formatting.</li>
              <li>
                Generating a plain text or basic PDF version of your resume
                specifically for ATS submissions.
              </li>
            </ul>
          </div>
        </section>

        <footer className="border-t border-gray-200 pt-8 text-center dark:border-gray-700">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
            <CustomTypography
              variant="h3"
              color="indigo"
              textGradient
              className="text-2xl font-semibold tracking-tight lg:text-3xl"
            >
              Happy Resume Building!
            </CustomTypography>
            <Link href="/" target="_blank">
              <CustomButton
                variant="gradient"
                color="blue-gray"
                ripple={true}
                className="inline-flex items-center px-8 py-2 lg:px-10 lg:py-2.5"
              >
                <ArrowLeft className="mr-2 size-5" />
                Back to Home
              </CustomButton>
            </Link>
          </div>
          <p className="mt-12 text-sm text-gray-700 dark:text-gray-300">
            For more information or support, please refer to the{' '}
            <a
              href="https://github.com/egarrisxn/devbuild-resume"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-500 hover:underline dark:text-blue-500 hover:dark:text-blue-400"
            >
              GitHub repository
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
}
