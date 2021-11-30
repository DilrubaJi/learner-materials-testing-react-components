import { useState } from 'react';
import WhatIs from './WhatIs';
import NumberOfBeings from './NumberOfBeings';
import PlanetName from './PlanetName';
import SpeciesName from './SpeciesName';
import W12MHeader from './W12MHeader';
import ReasonForSparing from './ReasonForSparing';
import Submit from './Submit';

const W12MForm = () => {
	const [speciesName, setSpeciesName] = useState('humans');
	const [planetName, setPlanetName] = useState('earth');
	const [numberOfBeings, setNumberOfBeings] = useState('8 billion');
	const [whatIs, setWhatIs] = useState('4');
	const [reasonForSparing, setReasonForSparing] = useState('humanity');
	const [submit, setSubmit] = useState('Submit123');

	return (
		<section className='w12MForm'>
			<W12MHeader onSubmit={setSubmit} />
			<SpeciesName speciesName={speciesName} onChangeSpeciesName={(e) => setSpeciesName(e.target.value)} />
			<PlanetName planetName={planetName} onChangePlanetName={(e) => setPlanetName(e.target.value)} />
			<NumberOfBeings numberOfBeings={numberOfBeings} onChangeNumberOfBeings={(e) => setNumberOfBeings(e.target.value)} />
			<WhatIs whatIs={whatIs} onChangeWhatIs={(e) => setWhatIs(e.target.value)} />
			<ReasonForSparing reasonForSparing={reasonForSparing} onChangeReasonForSparing={(e) => setReasonForSparing(e.target.value)} />
			<Submit submit={submit} onclickSubmit={(e) => setSubmit(alert('Well done'))} />

		</section>
	);
};

export default W12MForm;
