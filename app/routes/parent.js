import Route from '@ember/routing/route';

export default class ParentRoute extends Route {
  async model() {
    return await Promise.resolve([
      { id: '43', name: 'Plep' },
      { id: '44', name: 'Plip' },
      { id: '42', name: 'Plap' },
      { id: '45', name: 'Plup' },
    ]);
  }
}
