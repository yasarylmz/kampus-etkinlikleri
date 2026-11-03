import { Link } from "react-router-dom";
import type { CampusEvent } from "../../types/campus-event";
import { formatDate } from "../../utils/format-date";

interface EventDetailProps {
  event: CampusEvent;
}

function EventDetail({ event }: EventDetailProps) {
  return (
    <article className="detay">
      <span className="kategori-etiket">{event.category}</span>

      <dl className="detay-liste">
        <dt>Tarih ve Saat</dt>
        <dd>
          {formatDate(event.date)}, {event.time}
        </dd>
        <dt>Yer</dt>
        <dd>{event.location}</dd>
        <dt>Kontenjan</dt>
        <dd>{event.capacity} kişi</dd>
      </dl>

      <h3>Etkinlik Hakkında</h3>
      <p className="detay-aciklama">{event.description}</p>

      <div className="detay-aksiyonlar">
        <Link className="buton buton-ikincil" to="/events">
          ← Listeye dön
        </Link>
        <Link className="buton" to={`/admin/${event.id}/edit`}>
          Güncelle
        </Link>
      </div>
    </article>
  );
}

export default EventDetail;
