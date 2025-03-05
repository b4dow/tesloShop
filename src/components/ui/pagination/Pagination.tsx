"use client";
import { generatePagination } from "@/utils";
import clsx from "clsx";
import Link from "next/link";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

interface Props {
  totalPages: number;
}

export const Pagination = ({ totalPages }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pageString = searchParams.get("page") ?? 1;
  const currentPage = isNaN(+pageString) ? 1 : +pageString;

  const allPages = generatePagination(currentPage, totalPages);

  const createPageUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);

    if (isNaN(+pageString)) {
      redirect(pathname);
    }

    if (pageNumber === "...") {
      return `${pathname}?${params.toString()}`;
    }

    if (+pageNumber <= 0) {
      return `${pathname}`;
    }

    if (+pageNumber > totalPages) {
      return `${pathname}?${params.toString()}`;
    }

    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };
  return (
    <div className="flex justify-center  text-center mt-10 mb-32">
      <nav aria-label="Page navigation example">
        <ul className="flex list-style-none items-center">
          <li className="page-item ">
            <Link
              className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300  text-gray-800  focus:shadow-none"
              href={createPageUrl(currentPage - 1)}
            >
              <IoChevronBackOutline />
            </Link>
          </li>
          {allPages.map((page, index) => (
            <li key={index} className="page-item">
              <Link
                className={clsx(
                  "page-link relative block py-1.5 px-3 rounded border-0  cursor-pointer outline-none transition-all duration-300   text-gray-800 focus:shadow-none",
                  {
                    "bg-blue-600 hover:bg-blue-700 shadowm-sm text-white  ":
                      page === currentPage,
                    "hover:bg-gray-200": page !== currentPage,
                  },
                )}
                href={createPageUrl(page)}
              >
                {page}
              </Link>
            </li>
          ))}
          <li className="page-item">
            <Link
              className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300  text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href={createPageUrl(currentPage + 1)}
            >
              <IoChevronForwardOutline />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
