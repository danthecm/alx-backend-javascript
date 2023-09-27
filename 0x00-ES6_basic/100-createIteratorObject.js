export default function createIteratorObject(report) {
  const data = [];
  Object.values(report.allEmployees).forEach((employee) => {
    data.push(...employee);
  });
  return {
    [Symbol.iterator]: () => {
      const index = 0;
      return {
        next: () => {
          if (index < data.length) {
            return { value: data[index + 1], done: false };
          }
          return { done: true };
        },
      };
    },
  };
}
