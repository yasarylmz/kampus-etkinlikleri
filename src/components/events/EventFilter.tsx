import type { Category } from "../../types/campus-event";

interface EventFilterProps {
  searchText: string;
  onSearchChange: (value: string) => void;
  category: Category | "";
  onCategoryChange: (value: Category | "") => void;
  categories: Category[];
}

function EventFilter({
  searchText,
  onSearchChange,
  category,
  onCategoryChange,
  categories,
}: EventFilterProps) {
  return (
    <div className="filtre-kutu">
      <div className="filtre-grup form-grup" style={{ marginBottom: 0 }}>
        <label htmlFor="arama">Etkinlik ara</label>
        <input
          id="arama"
          type="text"
          placeholder="Örn. atölye, kariyer, robotik..."
          value={searchText}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div className="filtre-grup form-grup" style={{ marginBottom: 0 }}>
        <label htmlFor="kategori-filtre">Kategori</label>
        <select
          id="kategori-filtre"
          value={category}
          onChange={(e) => onCategoryChange(e.target.value as Category | "")}
        >
          <option value="">Tümü</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default EventFilter;
