import Input from "./Input"

export default function InputArea({initValues, updateInput, inputState}){
	const helperObj = {
		state: inputState,
		updateInput,
		type:'number'
	}

	return (
		<main id="user-input">
			<div className="input-group">
				<Input id="initialInvestment" {...helperObj} initValue={initValues.initialInvestment} 
					label="Inital Investment" />
				<Input id="annualInvestment" {...helperObj} initValue={initValues.annualInvestment}
					label="Annual Investment" />
			</div>
			<div className="input-group">
				<Input id="expectedReturn" {...helperObj} initValue={initValues.expectedReturn}
					label="Expected Return" />
				<Input id="duration" {...helperObj} initValue={initValues.duration}
					label="Duration" />
			</div>
		</main>
	)
}