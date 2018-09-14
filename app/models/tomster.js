import Model from 'ember-data/model';
import { attr } from '@ember-decorators/data';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default class Tomster extends Model {
  @attr('string') name;
  @attr('string') type;
  @attr('string') birthday;
  @attr('string') image;
}
