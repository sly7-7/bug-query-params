import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ParentController extends Controller {
  queryParams = [{ sortAscending: { scope: 'controller' } }];

  @tracked sortAscending = true;

  get sortedModel() {
    if (this.sortAscending) {
      return this.model.sortBy('name');
    }
    return this.model.sortBy('name').reverse();
  }

  @action
  toggleSort() {
    this.sortAscending = !this.sortAscending;
  }

  @action
  selectChild(child) {
    this.transitionToRoute('parent.child', child.id);
  }
}
