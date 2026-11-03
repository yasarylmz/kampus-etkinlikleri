import type { CampusEvent } from "../types/campus-event";

export const initialEvents: CampusEvent[] = [
  {
    id: "event-1",
    title: "Kariyer Günleri 2026",
    category: "Seminer",
    date: "2026-10-12",
    time: "14:00",
    location: "A Blok Konferans Salonu",
    capacity: 100,
    description:
      "Mezunlarla kariyer söyleşileri, özgeçmiş incelemeleri ve sektörden şirket stantları ile tanışma fırsatı.",
  },
  {
    id: "event-2",
    title: "Robotik Atölyesi",
    category: "Atölye",
    date: "2026-10-20",
    time: "10:00",
    location: "Bilgisayar Laboratuvarı 2",
    capacity: 20,
    description:
      "Arduino ile çizgi izleyen robot yapımı ve sensör programlama üzerine başlangıç seviyesi uygulamalı atölye.",
  },
  {
    id: "event-3",
    title: "Siber Güvenlik Söyleşisi",
    category: "Söyleşi",
    date: "2026-10-27",
    time: "15:30",
    location: "B Blok Seminer Salonu",
    capacity: 80,
    description:
      "Modern web uygulamalarında güvenlik açıkları, sızma testi süreçleri ve siber güvenlik kariyer adımları.",
  },
  {
    id: "event-4",
    title: "Web Tasarım Atölyesi",
    category: "Atölye",
    date: "2026-11-03",
    time: "15:00",
    location: "Bilgisayar Laboratuvarı 1",
    capacity: 30,
    description:
      "HTML, modern CSS ve duyarlı tasarım ilkeleriyle sıfırdan kişisel portfolyo sayfası geliştirme çalışması.",
  },
  {
    id: "event-5",
    title: "Hackathon Yarışması",
    category: "Yarışma",
    date: "2026-11-10",
    time: "09:00",
    location: "Teknokent Kuluçka Merkezi",
    capacity: 60,
    description:
      "24 saat sürecek takım çalışmasıyla kampüs hayatını kolaylaştıracak yenilikçi yazılım projeleri geliştirme yarışması.",
  },
  {
    id: "event-6",
    title: "Yapay Zekâ Semineri",
    category: "Seminer",
    date: "2026-11-17",
    time: "13:30",
    location: "Mühendislik Fakültesi Amfi 1",
    capacity: 120,
    description:
      "Büyük dil modelleri, üretken yapay zekâ araçları ve mühendislik projelerinde pratik kullanım senaryoları.",
  },
];
