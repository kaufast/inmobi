import { useTranslations } from '../../i18n';

export default function LocaleLayout({ children, params }) {
  const t = useTranslations(params.locale); // Load translations based on locale

  return (
    <html lang={params.locale}>
      <body>
        {children}
      </body>
    </html>
  );
}
