import CustomTypography from '@/components/UI/Typography';
import CustomAvatar from '@/components/UI/Avatar';

type HeadingProps = {
  propData: {
    name: string;
    position: string;
    avatar: string;
  };
};

export function Header({ propData }: HeadingProps) {
  const { name, position, avatar } = propData;

  return (
    <section className="flex justify-between rounded border p-2 shadow-md lg:p-4">
      <div className="flex flex-col justify-center">
        <CustomTypography
          variant="h4"
          color="indigo"
          textGradient
          placeholder="Header Name"
          className="md:text-6xl lg:text-7xl"
        >
          {name}
        </CustomTypography>
        <CustomTypography
          variant="h6"
          color="blue-gray"
          textGradient
          placeholder="Header Position"
          className="ml-1 md:text-3xl lg:text-4xl"
        >
          {position}
        </CustomTypography>
      </div>

      <CustomAvatar
        src={avatar}
        placeholder="Avatar Image"
        variant="circular"
        size="xxl"
        className="shadow-xl lg:h-64 lg:w-64"
      />
    </section>
  );
}
