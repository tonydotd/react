
const UserInput = ({ input, onChange }) => {

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            name="initialInvestment"
            value={input.initialInvestment}
            onChange={onChange}
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            name="annualInvestment"
            value={input.annualInvestment}
            onChange={onChange}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            name="expectedReturn"
            value={input.expectedReturn}
            onChange={onChange}
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            name="duration"
            value={input.duration}
            onChange={onChange}
            required
          />
        </p>
      </div>
    </section>
  )
}

export default UserInput