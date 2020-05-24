import { camelizeCase } from '../../helpers/helpers';

describe('Helper tests', () => {
  it('Shoulr camelize case correctly', () => {
    expect(camelizeCase({ foo_bar: 344 })).toStrictEqual({ fooBar: 344 });
    expect(camelizeCase({ 'foo-bar': 344 })).toStrictEqual({ fooBar: 344 });
  });
});
