import { useEffect } from "react"
import { useState } from "react"
import "./App.css"
import Card from "./components/Card"
import Input from "./components/Input"
import Output from "./components/Output"

function App() {
	// Idk I feel like this is a lot of clunky messy wessy :o
	// keep going, look at it again after its all done, its working chill-tf out
	const [bill, setBill] = useState("")
	const [tip, setTip] = useState(0)
	const [people, setPeople] = useState(0)
	const [perPersonPrice, setPerPersonPrice] = useState(0)
	const [perPersonTip, setPerPersonTip] = useState(0)
	const [billTotal, setBillTotal] = useState(0)

	// When either is clicked/changed i wanted to thing to re-run

	function handleBill(e) {
		const bill = Number(e.target.value)
		setBill(bill)
		const tipAmount = (bill * tip) / 100
		setBillTotal(bill + tipAmount)
		setPerPersonPrice((bill + tipAmount) / people)
	}

	function handlePeople(e) {
		const people = Number(e.target.value)
		setPeople(people)

		const tipAmount = (bill * tip) / 100
		setBillTotal(bill + tipAmount)
		setPerPersonPrice((bill + tipAmount) / people)
	}

	function handleTips(e) {
		e.preventDefault()
		const tipPercentage = Number(e.target.value)
		const tipAmount = (bill * tipPercentage) / 100

		setTip(Number(tipAmount.toFixed(2)))
		setBillTotal(Number((bill + tipAmount).toFixed(2)))

		if (people !== 0) {
			setPerPersonTip(Number((tipAmount / people).toFixed(2)))
			setPerPersonPrice(Number(((bill + tipAmount) / people).toFixed(2)))
		} else {
			// Set perPersonTip to zero and perPersonPrice to 0 if people is zero
			setPerPersonTip(0)
			setPerPersonPrice(0)
		}
	}

	useEffect(() => {
		// Update other calc when people changes
		if (people !== 0) {
			setPerPersonPrice(Number(((bill + tip) / people).toFixed(2)))
			setPerPersonTip(Number((tip / people).toFixed(2)))
		} else {
			setPerPersonPrice(0)
			setPerPersonTip(0)
		}
	}, [people, bill, tip])

	function resetState() {
		setBill(0)
		setTip(0)
		setPeople(0)
		setPerPersonPrice(0)
		setPerPersonTip(0)
		setBillTotal(0)
	}

	return (
		<>
			<img
				className="logo"
				src="src/assets/images/logo.svg"
				alt="Splitter logo"
			/>
			<Card>
				<Input
					bill={bill}
					handleBill={handleBill}
					handlePeople={handlePeople}
					handleTips={handleTips}
					people={people}
				/>
				<Output
					perPersonTip={perPersonTip}
					perPersonPrice={perPersonPrice}
					resetState={resetState}
				/>
			</Card>
		</>
	)
}

export default App
