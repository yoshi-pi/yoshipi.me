export function handleLanguageRouting() {
  const path = location.pathname;
  const firstSegment = path.split('/')[1];
  let lang: 'en' | 'ja' = 'en';
  if (path === '/') {
    lang = 'en';
  } else if (firstSegment === 'ja') {
    lang = 'ja';
  } else {
    window.location.href = '/';
  }
  const linkTag = document.createElement('link');
  linkTag.setAttribute('rel', 'canonical');
  linkTag.href = `https://yoshipi.me/${firstSegment}`;
  document.head.appendChild(linkTag);
  document.documentElement.lang = lang;
  return lang;
}
