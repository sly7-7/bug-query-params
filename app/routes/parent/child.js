import Route from '@ember/routing/route';
export default class ParentChildRoute extends Route {
  async model(params, transition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.modelFor('parent').findBy('id', params.child_id));
      }, 1000);
    });
  }
}
