import parser from './parser';
import reader from './reader';

export default class GameSavingLoader {
  static async load() {
    const data = await reader();
    return parser(data);
  }
}
