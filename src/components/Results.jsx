import {formatter, calculateInvestmentResults} from "../util/investment.js"


export default function Results({data}){
	

	const results = calculateInvestmentResults(data)
	const initialInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment

	return(
		<table id="result">
			<thead>
				<tr>
					<th>Year</th>
					<th>Investment Value</th>
					<th>Interest (Annual)</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			<tbody>
				{results.map(ele =>{

						const totalInterest = ele.valueEndOfYear - ele.annualInvestment*ele.year - initialInvestment
						const totalInvestedAmount = ele.valueEndOfYear - totalInterest

						return(			<tr key={ele.year}>
											<td>{ele.year}</td>
											<td>{formatter.format(ele.valueEndOfYear)}</td>
											<td>{formatter.format(ele.interest)}</td>
											<td>{formatter.format(totalInterest)}</td>
											<td>{formatter.format(totalInvestedAmount)}</td>
									</tr>
								)})}
			</tbody>
    	</table>
	)
}