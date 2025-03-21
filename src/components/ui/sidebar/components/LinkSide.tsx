import Link from "next/link";

interface Props {
  title: string;
  href: string;
  icon: React.ReactNode;
}

export const LinkSide = ({ title, href, icon }: Props) => {
  return (
    <Link
      href={href}
      className="flex items-center mt-10 p-2 hover:bg-gray-200 rounded transition-all"
    >
      {icon}
      <span className="ml-3 text-xl ">{title}</span>
    </Link>
  );
};
