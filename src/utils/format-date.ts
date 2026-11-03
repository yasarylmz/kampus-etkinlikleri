const AYLAR = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];

export function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const parcalar = dateStr.split("-");
  if (parcalar.length !== 3) return dateStr;

  const yil = parcalar[0];
  const ayIndex = Number(parcalar[1]) - 1;
  const gun = Number(parcalar[2]);

  if (ayIndex < 0 || ayIndex > 11 || Number.isNaN(gun)) {
    return dateStr;
  }

  return `${gun} ${AYLAR[ayIndex]} ${yil}`;
}
