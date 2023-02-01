export function capitalizeFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function formatDate(date: string) {
  let newDate = new Date(date);

  let formattedDate = newDate.toLocaleDateString("es-AR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return capitalizeFirstLetter(formattedDate);
}
