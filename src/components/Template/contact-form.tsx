import {
  IdentificationIcon,
  HomeIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  GlobeAltIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';
import CustomTypography from '@/components/UI/Typography';

export default function ContactForm() {
  return (
    <section className="m-2 p-2 lg:m-4 lg:p-4">
      <header className="mb-3 flex items-center gap-1 border-b-2">
        <IdentificationIcon
          className="size-8 text-yellow-800"
          aria-label="Contact icon"
        />
        <CustomTypography
          placeholder="Contact Title"
          variant="h3"
          color="indigo"
          textGradient
        >
          Contact
        </CustomTypography>
      </header>

      <ul className="ml-2">
        <li className="flex items-center gap-1">
          <a href="#" target="_blank">
            <CustomTypography
              placeholder="Contact Items"
              variant="paragraph"
              className="space-y-1"
            >
              <span className="flex items-center">
                <EnvelopeIcon className="mx-1 size-4" aria-label="Email icon" />
                <span className="text-blue-400 hover:text-blue-600 hover:underline hover:underline-offset-4">
                  Email
                </span>
              </span>

              <span className="flex items-center">
                <MapPinIcon
                  className="mx-1 size-4"
                  aria-label="Location icon"
                />
                <span className="text-blue-400 hover:text-blue-600 hover:underline hover:underline-offset-4">
                  Location
                </span>
              </span>

              <span className="flex items-center">
                <PhoneIcon className="mx-1 size-4" aria-label="Phone icon" />
                <span className="text-blue-400 hover:text-blue-600 hover:underline hover:underline-offset-4">
                  Phone
                </span>
              </span>

              <span className="flex items-center">
                <HomeIcon className="mx-1 size-4" aria-label="Website icon" />
                <span className="text-blue-400 hover:text-blue-600 hover:underline hover:underline-offset-4">
                  Website
                </span>
              </span>

              <span className="flex items-center">
                <BookOpenIcon className="mx-1 size-4" aria-label="Blog icon" />
                <span className="text-blue-400 hover:text-blue-600 hover:underline hover:underline-offset-4">
                  Blog
                </span>
              </span>

              <span className="flex items-center">
                <GlobeAltIcon
                  className="mx-1 size-4"
                  aria-label="LinkedIn icon"
                />
                <span className="text-blue-400 hover:text-blue-600 hover:underline hover:underline-offset-4">
                  LinkedIn
                </span>
              </span>

              <span className="flex items-center">
                <GlobeAltIcon
                  className="mx-1 size-4"
                  aria-label="GitHub icon"
                />
                <span className="text-blue-400 hover:text-blue-600 hover:underline hover:underline-offset-4">
                  GitHub
                </span>
              </span>
            </CustomTypography>
          </a>
        </li>
      </ul>
    </section>
  );
}
