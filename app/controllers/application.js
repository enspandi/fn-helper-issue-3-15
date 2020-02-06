import { tracked } from '@glimmer/tracking';

import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class extends Controller {
  @tracked counter = 0;

  @action
  countUp() {
    this.counter += 1;
    console.log('counted up', this.counter);
  }

  @action
  sayHello() {
    console.log('hello');
  }
}
