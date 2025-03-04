import { titleFont } from "@/config/fonts";

interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}
export const Title = ({ title, subtitle, className }: Props) => {
  return (
    <div className={`${className} mt-3`}>
      <h1
        className={`${titleFont.className} antialiased text-2xl font-semibold mt-10 mb-5`}
      >
        {title}
      </h1>

      {subtitle && <h3 className="text-lg mb-5">{subtitle}</h3>}
    </div>
  );
};
