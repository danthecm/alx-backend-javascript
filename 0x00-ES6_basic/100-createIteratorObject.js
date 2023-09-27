export default function createIteratorObject(report) {
  const data = [];
  Object.values(report.allEmployees).forEach((employee) => {
    data.push(...employee);
  });
  return {
    [Symbol.iterator]: () => {
      let index = 0;
      return {
        next: () => {
          if (index < data.length) {
            const value = data[index];
            index += 1;
            return { value, done: false };
          }
          return { done: true };
        },
      };
    },
  };
}
