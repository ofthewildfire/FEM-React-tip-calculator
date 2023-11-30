import React from "react"

function Output(props) {
	return (
		<div className="output">
			<div className="tip-amount">
				<div>
					<span>Tip amount</span> <br />
					<span className="per-person-tags">/per person</span>
				</div>
				<p className="tip amounts-figures">$ {props.perPersonTip}</p>
			</div>
			<div className="total-person">
				<div>
					<span>Total</span> <br />{" "}
					<span className="per-person-tags">/per person</span>
				</div>
				<p className="total amounts-figures">$ {props.perPersonPrice} </p>
			</div>
			<button className="reset-btn" onClick={props.resetState}>
				Reset
			</button>
		</div>
	)
}

export default Output
