export const generatePagination = (currentPage: number, totalPages: number) => {
  // si el numero total de paginas es 7 o menos vamos a mostrar todas las paginas sin los puntos suspensivosa
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // si la pagina actual esta entre las primeras 3 paginas
  // mostras las primeras 3, ..., y las ultimas 2 paginas
  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages];
  }

  // si la pagina actual esta entre las ultimas 3 paginas
  // mostrar las primeras 2, ..., ultimas 3 paginas
  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  // si la pagina actual esta en otro lugar medio
  // mostrar la primera pagina ,..., la pagina actual, ...,
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};
