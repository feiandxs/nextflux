import {getRequestConfig} from 'next-intl/server';
import { getUserLocale } from '@/service/locale';

export default getRequestConfig(async () => {
  // Get locale from cookies using our service
  const locale = await getUserLocale();

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});