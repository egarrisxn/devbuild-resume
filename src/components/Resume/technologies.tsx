import CustomTypography from '@/components/UI/Typography';
import CustomList from '@/components/UI/List';
import CustomListItem from '@/components/UI/ListItem';
import { ComputerDesktopIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

type TechnologiesProps = {
  propData: {
    title?: string;
    technologiesList: Array<TechnologiesList>;
  };
};

export function Technologies({ propData }: TechnologiesProps) {
  const { title, technologiesList } = propData;

  return (
    <section className="m-2 p-2 lg:m-4 lg:p-4">
      <header className="flex items-center gap-1 border-b-2">
        <ComputerDesktopIcon
          className="size-8 text-yellow-800"
          aria-label="Technologies Icon"
        />
        <CustomTypography
          placeholder="Technologies Title"
          variant="h3"
          color="indigo"
          textGradient
        >
          {title}
        </CustomTypography>
      </header>

      <CustomList placeholder="Technologies List" className="grid grid-cols-3">
        {technologiesList.map((item: TechnologiesList) => (
          <CustomListItem
            placeholder="Technologies Items"
            ripple={true}
            key={item.id}
          >
            <CustomTypography
              placeholder="Technologies Text"
              variant="small"
              color="blue-gray"
              textGradient
              className="text-blue-400 hover:text-blue-600 hover:underline hover:underline-offset-4"
            >
              <Link href={item.href} target="_blank">
                {item.name}
              </Link>
            </CustomTypography>
          </CustomListItem>
        ))}
      </CustomList>
    </section>
  );
}
