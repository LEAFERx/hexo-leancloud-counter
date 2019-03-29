import { counterHelper } from './helper';

export default function counterTag(args) {
  const options = {};

  args.forEach((arg) => {
    const [, key, value] = arg.match(/^(url|action|element):(.*)/);
    if (key) {
      options[key] = value;
    }
  });

  return counterHelper.call(this, options);
}
