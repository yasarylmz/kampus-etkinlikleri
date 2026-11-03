import { Link } from "react-router-dom";
import type { CampusEvent } from "../../types/campus-event";
import { formatDate } from "../../utils/format-date";

interface EventCardProps {
  event: CampusEvent;
}

function EventCard({ event }: EventCardProps) {
  return (
    <article className="etkinlik-karti">
      <h3 className="kart-baslik">{event.title}</h3>
      <div>
        <span className="kategori-etiket">{event.category}</span>
      </div>
      <p className="kart-bilgi">
        <strong>Tarih:</strong> {formatDate(event.date)}, {event.time}
      </p>
      <p className="kart-bilgi">
        <strong>Yer:</strong> {event.location}
      </p>
      <p className="kart-bilgi">
        <strong>Kontenjan:</strong> {event.capacity} kişi
      </p>
      <p className="kart-aciklama">{event.description}</p>
      <div className="kart-alt">
        <Link className="detay-link" to={`/events/${event.id}`}>
          Detayları gör →
        </Link>
      </div>
    </article>
  );
}

export default EventCard;
