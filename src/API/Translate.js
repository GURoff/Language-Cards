// this is only test file

import translate from 'translate-google-api';

const result = await translate(`I'm fine.`, {
  tld: "cn",
  to: "vi",
});