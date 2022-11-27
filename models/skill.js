const skill = [
{id: 12345, skill: 'coding', name: 'Aidan'},
{id: 00350, skill: 'Python', name: 'George'},
{id: 00773, skill: 'UX Design', name: 'Leon'}
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne
};

function deleteOne(id) {
  // Find the index based on the id of the todo object
  const idx = skill.findIndex(powers => powers.id === parseInt(id));
  skill.splice(idx, 1);
};



function getAll() {
  return skill;
};

function getOne(id) {
  // Use the Array.prototype.find iterator method
  return skill.find(skill => skill.id === parseInt(id));
};


	
function create(powers) {
  // Add the id
  powers.id = Math.floor(1000 + Math.random() * 9000);
  // New todos wouldn't be done :)

 // skill.done = false;
  skill.push(powers);

}

