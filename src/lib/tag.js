export default function counterTag(args) {
  const url = args[0];
  const action = args[1];
  if (!url) {
    return `<span class='leancloud-counter' data-leancloud-counter-url="/${this.path}" data-leancloud-counter-inc}></span>`;
  }
  return `<span class='leancloud-counter' data-leancloud-counter-url="${url}" ${action ? `data-leancloud-counter-${action}` : ''}></span>`;
}
