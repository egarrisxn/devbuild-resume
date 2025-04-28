import CustomTypography from '@/components/UI/Typography';
import CustomAvatar from '@/components/UI/Avatar';

export default function HeaderForm() {
  return (
    <section className="flex justify-between p-2 lg:p-4">
      <div className="flex flex-col justify-center pb-4 lg:pb-8">
        <CustomTypography
          variant="h1"
          color="indigo"
          textGradient
          placeholder="Header Name"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Full Name
        </CustomTypography>
        <CustomTypography
          variant="h2"
          color="blue-gray"
          textGradient
          placeholder="Header Position"
          className="ml-1 text-xl sm:text-2xl md:text-3xl lg:text-4xl"
        >
          Position
        </CustomTypography>
      </div>

      <CustomAvatar
        src="/avatar.png"
        placeholder="Avatar Image"
        variant="circular"
        size="xxl"
        className="shadow-xl sm:size-32 md:size-36 lg:size-60"
      />
    </section>
  );
}
