const personData = {
	John: {
		weight: 92,
		height: 1.95,
	},
	Mark: {
		weight: 78,
		height: 1.69,
	},
};

const calculateBMI = (ht, wt) => wt / ht ** 2;

const compareBMI = (person_1, person_2) =>
	calculateBMI(person_1?.height, person_1?.weight) >
	calculateBMI(person_2?.height, person_2?.weight);

console.log(compareBMI(personData.Mark, personData.John));
