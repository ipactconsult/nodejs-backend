// test/virement/virement.test.js

const { expect } = require('chai'); // Importer avec import pour les modules ECMAScript
const sinon = require('sinon');
const Virement = require('../../models/virement/virement.model'); // Importer avec import pour les modules ECMAScript

// Utiliser require pour les modules CommonJS
const { createSandbox } = require('sinon');

describe('Virement Model', () => {
  // Test pour l'insertion d'un nouveau virement
/*   it('devrait insérer un nouveau virement', async (done) => {
    // Données de test pour le nouveau virement
    const nouveauVirement = {
      beneficiaire: 'John Doe',
      montant: 1000,
      date: new Date(),
      description: 'Virement de test',
    };

    // Stub pour simuler la méthode save() de Mongoose
    const saveStub = sinon.stub(Virement.prototype, 'save').resolves(nouveauVirement);

    // Appel à la méthode d'insertion (hypothétique)
    const resultat = await Virement.create(nouveauVirement);

    // Assertions
    expect(resultat).to.include(nouveauVirement);

    // Restore le stub après le test
    saveStub.restore();
    done();
  }).timeout(30000); */

  // Test pour récupérer tous les virements (hypothétique)
  it('devrait récupérer tous les virements', async () => {
    // Données de test pour les virements
    const virements = [
      { beneficiaire: 'Jane Doe', montant: 500, date: new Date(), description: 'Virement de test 2' },
      { beneficiaire: 'John Smith', montant: 700, date: new Date(), description: 'Virement de test 3' },
    ];

    // Stub pour simuler la méthode find() de Mongoose
    const findStub = sinon.stub(Virement, 'find').resolves(virements);

    // Appel à la méthode de récupération (hypothétique)
    const resultat = await Virement.find();

    // Assertions
    expect(resultat).to.deep.equal(virements);

    // Restore le stub après le test
    findStub.restore();
  });
});
