export default function() {
  this.urlPrefix = 'http://localhost:8888';

  this.get('/push/api/v1/processos', function(db, request) {
    //let id = request.params.numeroDoProcesso;
    let processos = [{
        id: '20120110085117',
        instancia: 'PRIMEIRAINSTANCIA',
        circunscricao: 'BRASILIA',
        numero: '20120110085117',
        numeroCnj: '20120110085117',
        vara: 'SEXTA VARA CRIMINAL DE BRASILIA',
        feito: 'FLAGRANTE (PRESO)',
        segredoDeJustica: false,
        linkDoProcesso: 'http://cache.tjdft.jus.br/cgi-bin/tjcgi1?NXTPGM=tjhtml105&SELECAO=1&ORIGEM=INTER&CIRCUN=1&CDNUPROC=20120110085117'
    }];

    if (request.queryParams.numeroDoProcesso) {
      return processos;
    }
    return [];
  });

  this.get('/push/api/v1/usuarios/:id', function(db, request) {
    let id = request.params.id;
    return {
      id: id,
      cpf: id,
      advogado: false,
      nome: 'João da Silva Sauro',
      sexo: 'M',
      telefone: '6122334455',
      celular: '6133225544',
      email: 'joao.sauro@email.dele',
      noticias: true,
      infoJurisprudencia: true
    }
  });

  this.put('/push/api/v1/usuarios/:id', function(db, request) {
    return {};
  });

  this.get('/push/api/v1/acessos', function(db, request) {
    return [{
      id: "1",
      text: "Parent 1",
      expanded: false,
      nodes: [{
        id: "2",
        text: "Child 1"
      }, {
        id: "3",
        text: "Child 2"
      }]
    }, {
      id: "4",
      text: "Parent 2",
      nodes: [{
        id: "5",
        text: "Item 1"
      }, {
        id: "6",
        text: "Item 2"
      }]
    }, {
      id: "7",
      text: "Parent 3"
    }, {
      id: "8",
      text: "Parent 4"
    }, {
      id: "9",
      text: "Parent 5",
      expanded: false,
      nodes: [{
        id: "10",
        text: "Item 1",
        expanded: false,
        nodes: [{
          id: "11",
          text: "Item 1"
        }, {
          id: "12",
          text: "Item 2",
          expanded: false,
          nodes: [{
            id: "13",
            text: "Item 1"
          }, {
            id: "14",
            text: "Item 2"
          }]
        }]
      }, {
        id: "15",
        text: "Item 2"
      }]
    }];
  });

  this.get('/push/api/v1/itens-comunicados', function(db, request) {
    let lista = [{
      'item': 'ITEM00001',
      'dataEnvio': '2077-12-13T04:48:12.415Z',
      'sistema': 'SISTJ',
      'email': 'TWilliams@mattis.ly',
      'id': 1,
      'status': 'NAO_ENVIADO'
    }, {
      'item': 'ITEM00002',
      'dataEnvio': '1960-02-09T05:51:00.484Z',
      'sistema': 'SIPAD',
      'email': 'SChelette@at.org',
      'id': 2,
      'status': 'ENVIADO'
    }, {
      'item': 'ITEM00003',
      'dataEnvio': '2046-08-30T23:25:07.179Z',
      'sistema': 'SIPAD',
      'email': 'SEichberger@suspendisse.net',
      'id': 3,
      'status': 'ENVIADO'
    }, {
      'item': 'ITEM00004',
      'dataEnvio': '2064-07-31T01:14:04.497Z',
      'sistema': 'SISPL',
      'email': 'ACummins@placerat.org',
      'id': 4,
      'status': 'ENVIADO'
    }, {
      'item': 'ITEM00005',
      'dataEnvio': '1950-04-18T03:11:25.167Z',
      'sistema': 'SISTJ',
      'email': 'ETang@malesuada.com',
      'id': 5,
      'status': 'NAO_ENVIADO'
    }, {
      'item': 'ITEM00006',
      'dataEnvio': '1935-08-10T13:58:19.943Z',
      'sistema': 'SISTJ',
      'email': 'AGullion@sed.com',
      'id': 6,
      'status': 'ENVIADO'
    }, {
      'item': 'ITEM00007',
      'dataEnvio': '2066-12-21T06:53:51.435Z',
      'sistema': 'SIPAD',
      'email': 'JBlayne@etiam.net',
      'id': 7,
      'status': 'NAO_ENVIADO'
    }, {
      'item': 'ITEM00008',
      'dataEnvio': '2072-08-05T22:26:56.831Z',
      'sistema': 'SISTJ',
      'email': 'ANoe@eget.com',
      'id': 8,
      'status': 'NAO_ENVIADO'
    }, {
      'item': 'ITEM00009',
      'dataEnvio': '2066-04-05T03:02:05.214Z',
      'sistema': 'SIPAD',
      'email': 'MStutzman@ipsum.net',
      'id': 9,
      'status': 'ENVIADO'
    }, {
      'item': 'ITEM00010',
      'dataEnvio': '2013-10-10T06:33:27.315Z',
      'sistema': 'SISTJ',
      'email': 'MWelte@pharetra.gov',
      'id': 10,
      'status': 'ENVIADO'
    }];
    if (request.queryParams.sistema) {
      let filtered = lista.filter(function(item) {
        return item.sistema.toLowerCase().indexOf(request.queryParams.sistema.toLowerCase()) > -1;
      });
      return filtered;
    } else {
      return lista;
    }
  });

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection}
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;

      return {
        contact: db.contacts.find(contactId),
        addresses: db.addresses.where({contact_id: contactId})
      };
    });

  */
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
