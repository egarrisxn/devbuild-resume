import { PencilSquareIcon } from '@heroicons/react/24/outline';
import CustomTypography from '@/components/UI/Typography';

export default function SummaryForm() {
  return (
    <section className="m-2 p-2 lg:m-4 lg:p-4">
      <header className="mb-3 flex items-center gap-1 border-b-2">
        <PencilSquareIcon
          className="size-8 text-yellow-800"
          aria-label="Summary Icon"
        />
        <CustomTypography
          placeholder="Summary Title"
          variant="h3"
          color="indigo"
          textGradient
        >
          Summary
        </CustomTypography>
      </header>

      <article className="relative ml-3 flex w-full max-w-[24rem]">
        <CustomTypography placeholder="Summary Text" color="blue-gray">
          Summary Section
        </CustomTypography>
      </article>
    </section>
  );
}
