import Realm from 'realm';

const OngkirSchema = {
    name: 'Ongkir',
    properties: {
      provinsi: 'string',
      kabupaten: 'string',
      kecamatan: 'string',
      kelurahan: 'string',
      kode_pos: 'string',
      harga: 'int',
    },
};

export default realm = new Realm({ schema: [OngkirSchema] });