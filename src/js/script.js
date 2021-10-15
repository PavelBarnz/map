export default class ErrorRepository {
  constructor() {
    this.errorCollect = new Map([
      [400, 'Некорректный запрос'],
      [401, 'Нет доступа'],
      [402, 'Необходима оплата'],
      [404, 'Не найдено'],
    ]);
  }

  translate(code) {
    if (this.errorCollect.has(code)) {
      return this.errorCollect.get(code);
    }
    return 'Unknown error';
  }
}
