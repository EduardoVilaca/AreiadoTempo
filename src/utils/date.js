// Formatação de datas em português europeu.
// As datas são guardadas no frontmatter dos artigos como "AAAA-MM-DD".

export function formatDate(iso) {
  const d = new Date(iso);
  return new Intl.DateTimeFormat('pt-PT', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(d);
}

export function formatDateShort(iso) {
  const d = new Date(iso);
  const s = new Intl.DateTimeFormat('pt-PT', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(d);
  return s.replace('.', '').toUpperCase();
}
