const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes")
    .where({ id })
    .first()
    .then(scheme => {
      if (scheme) {
        return scheme;
      } else {
        return null;
      }
    });
}

//[ { id: 17, scheme_name: 'Find the Holy Grail',
//step_number: 1, instructions: 'quest'}

function findSteps(id) {
  return db("schemes as s")
    .innerJoin("steps as t", "s.id", "t.scheme_id")
    .where({ scheme_id: id })
    .select(
      "s.id as id",
      "s.scheme_name as name",
      "t.step_number as steps",
      "t.instructions as instructions"
    );
}

// add(scheme):
// Expects a scheme object.
// Inserts scheme into the database.
// Resolves to the newly inserted scheme, including id.

function add(scheme) {
  return db("schemes")
    .insert(scheme, "id")
    .then(id => {
      return findById(...id);
    });
}

// update(changes, id):
// Expects a changes object and an id.
// Updates the scheme with the given id.
// Resolves to the newly updated scheme object.

function update(changes, id) {
  return db("schemes")
    .where({ id })
    .update(changes)
    .then(id => {
      return findById(id);
    });
}

// remove(id):
// Removes the scheme object with the provided id.
// Resolves to the removed scheme
// Resolves to null on an invalid id.
// (Hint: Only worry about removing the scheme. The database is configured to automatically remove all associated steps.)

function remove(id) {
  return db("schemes")
    .where({ id })
    .del()
    .then(id => {
      return findById(id);
    });
}
