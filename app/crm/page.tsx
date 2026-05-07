import { redirect } from 'next/navigation';

/**
 * Redirect permanente: /crm → /software-gestion-servicios
 * Mantiene el link juice SEO durante la transición de URL.
 */
export default function CrmRedirectPage() {
  redirect('/software-gestion-servicios');
}