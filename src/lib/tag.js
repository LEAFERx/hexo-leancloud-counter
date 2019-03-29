export default function counterTag(args) {
  const url = args[0];
  const inc = args[1] === 'inc';
  if (!url) {
    return `<span class='leancloud-counter' data-leancloud-counter-url="/${this.path}" data-leancloud-counter-inc></span>`;
  }
  return `<span class='leancloud-counter' data-leancloud-counter-url="${url}" ${inc ? 'data-leancloud-counter-inc' : ''}></span>`;
}
