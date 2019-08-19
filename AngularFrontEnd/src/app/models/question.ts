import { Option } from './option';

export class Question {
  id: number;
  name: string;
  image: string;
  questionTypeId: number;
  options: Option[];
  answered: boolean;

  constructor(data: any) {
    data = data || {};
    this.id = data.id;
    this.name = data.name;
    this.image = data.image;
    this.questionTypeId = data.questionTypeId;
    this.options = [];
    data.options.forEach(o => {
      this.options.push(new Option(o));
    });
  }
}
