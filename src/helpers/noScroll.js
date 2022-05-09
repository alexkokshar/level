export function noScroll() {
  const root = document.documentElement;
  if (root.getAttribute('class') === 'no-scroll') {
    root.classList.remove('no-scroll');
  } else {
    root.classList.add('no-scroll');
  }
}
