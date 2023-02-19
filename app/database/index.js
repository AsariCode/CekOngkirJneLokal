import Realm from 'realm';

const OngkirSchema = {
    name: 'Ongkir',
    properties: {
      // origin: 'string',
      // dest: 'string',
      provinsi: 'string',
      kabupaten: 'string',
      kecamatan: 'string',
      kelurahan: 'string',
      kode_pos: 'string',
      // zona: 'string',
      harga: 'int',
    },
};

export default realm = new Realm({ schema: [OngkirSchema] });