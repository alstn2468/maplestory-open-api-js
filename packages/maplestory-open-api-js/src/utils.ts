function leftPad(value: number) {
  if (value >= 10) {
    return value;
  }

  return `0${value}`;
}

export function getPreviousFormattedDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = leftPad(date.getMonth() + 1);
  const day = leftPad(date.getDate() - 1);

  return [year, month, day].join('-');
}

type RequiredProperty<T> = { [P in keyof T]: Required<NonNullable<T[P]>> };

export function excludeUndefinedFields<
  T extends { [key: string]: string | number | undefined },
>(object: T): RequiredProperty<T> {
  return JSON.parse(JSON.stringify(object));
}
