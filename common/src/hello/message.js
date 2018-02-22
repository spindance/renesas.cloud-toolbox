
export default ({ time, ...rest }) => new Promise((resolve) =>
  setTimeout(() => {
    resolve(`${rest.copy} (with a delay)`);
  }, time * 1000));
