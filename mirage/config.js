export default function() {
  this.namespace = 'api';

  this.get('/tomsters', (schema) => {
    return schema.tomsters.all();
  });

  this.get('/tomsters/:id', (schema, request) => {
    return schema.tomsters.find(request.params.id);
  });
}
