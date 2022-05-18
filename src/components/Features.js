const Features = () => {
    return (
        <section role="listitem" className="features--container">
            <span className="features--span">Complex business with multiple financial accounts, currencies, or auditing needs?</span>
            <div className="features--subcontainer">
                <h2 className="features--heading">Unlock Extra Features</h2>
                <p className="features--price">$89 per month</p>
                <a href="" className="features--premium">Try Premium</a>
                <p className="features--get-all">GET IT ALL, PLUS:</p>
                <ul className="features--li">
                    <li>Manage cash flow across unlimited financial accounts</li>
                    <li>Convert to any currency for localized cash flow reporting and projections</li>
                    <li>Attach invoices or contracts to your cash flow entries for accountability and auditing</li>
                </ul>
            </div>
        </section>
    )
}

export default Features;