const locale = navigator.language;
console.log(locale);

const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'short'
};

// const myDate = new Date().toLocaleDateString(locale, options);
const myDate = new Intl.DateTimeFormat(locale, options).format();
console.log(myDate);
