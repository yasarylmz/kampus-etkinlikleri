import type { CampusEvent, Category } from "../types/campus-event";

export function findEventById(
  events: CampusEvent[],
  id: string
): CampusEvent | undefined {
  return events.find((e) => e.id === id);
}

export function searchEvents(
  events: CampusEvent[],
  searchText: string
): CampusEvent[] {
  const aranan = searchText.trim().toLowerCase();
  if (!aranan) return events;

  return events.filter(
    (e) =>
      e.title.toLowerCase().includes(aranan) ||
      e.description.toLowerCase().includes(aranan) ||
      e.location.toLowerCase().includes(aranan)
  );
}

export function filterByCategory(
  events: CampusEvent[],
  category: Category | ""
): CampusEvent[] {
  if (!category) return events;
  return events.filter((e) => e.category === category);
}
