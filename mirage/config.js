export default function() {
  this.namespace = 'api';

  this.get('/tomsters', (schema) => {
    return schema.tomsters.all();
  });
}
