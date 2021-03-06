import * as i18n from 'i18n';
import * as path from 'path';

i18n.configure({
  locales: ['es-ES', 'en-US'],
  defaultLocale: 'en-US',
  directory: path.resolve(__dirname, '..', '..', 'locales'),
});

export default i18n.init;
