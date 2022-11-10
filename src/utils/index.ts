export const parseSickNm = (sickNm: string, searchValue: string) =>
  sickNm.replaceAll(searchValue, `<b>${searchValue}</b>`);
