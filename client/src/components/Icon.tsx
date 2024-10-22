import { Icon as I } from "@iconify/react";

type IconType = {
  icon: string;
  height?: string | number;
  width?: string | number;
  className?: string;
};

export const Icon = ({ icon, height, width, className }: IconType) => {
  return <I className={className} icon={icon} height={height} width={width} />;
};
