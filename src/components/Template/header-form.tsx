import CustomTypography from '@/components/UI/Typography';
import CustomAvatar from '@/components/UI/Avatar';

export default function HeaderForm() {
  return (
    <section className="flex justify-between rounded border p-2 shadow-md lg:p-4">
      <div className="flex flex-col justify-center">
        <CustomTypography
          variant="h3"
          color="indigo"
          textGradient
          placeholder="Header Name"
          className="lg:text-7xl"
        >
          Full Name
        </CustomTypography>
        <CustomTypography
          variant="h6"
          color="blue-gray"
          textGradient
          placeholder="Header Position"
          className="ml-1 lg:text-4xl"
        >
          Position
        </CustomTypography>
      </div>

      <CustomAvatar
        src="/avatar.png"
        placeholder="Avatar Image"
        variant="circular"
        size="xxl"
        className="shadow-xl lg:h-64 lg:w-64"
      />
    </section>
  );
}
