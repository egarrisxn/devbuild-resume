import { ReactNode } from "react";
import { Avatar } from "@/components/UI/Material-Tailwind";

interface AvatarProps {
  src: string;
  placeholder?: string;
  variant?: "circular" | "rounded";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  withBorder?: boolean;
  color?:
    | "blue-gray"
    | "gray"
    | "brown"
    | "deep-orange"
    | "orange"
    | "amber"
    | "yellow"
    | "lime"
    | "light-green"
    | "green"
    | "teal"
    | "cyan"
    | "light-blue"
    | "blue"
    | "indigo"
    | "deep-purple"
    | "purple"
    | "pink"
    | "red";
  className?: string;
  children?: ReactNode;
}

const CustomAvatar = ({
  src,
  placeholder,
  variant,
  size,
  withBorder,
  color,
  className,
  children,
}: AvatarProps) => {
  return (
    <Avatar
      src={src}
      placeholder={placeholder}
      variant={variant}
      size={size}
      withBorder={withBorder}
      color={color}
      className={className}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      {children}
    </Avatar>
  );
};

export default CustomAvatar;
