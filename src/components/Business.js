const Business = () => {
    return (
        <section role="listitem" className="business--container">
            <span className="business--span">RECOMMENDED</span>
            <div className="business--subcontainer">
                <h2 className="business--heading">Small Business Plan</h2>
                <p className="business--price">$59 per month</p>
                <a href="" className="business--sign-up">Sign Up Now</a>
                <p className="business--what--you--get">YOU GET PULSE BASICS, PLUS:</p>
                <ul className="business--li">
                    <li>Manage cash flow across multiple financial accounts</li>
                    <li>Invite your investors, book keeper, or management team to see reports or manage cash flow</li>
                    <li>Integrate with QuickBooks Online for more accurate cash flow</li>
                    <li>Track your actual cash flow alongside your projected cash flow</li>
                </ul>
            </div>
        </section>
    )
}

export default Business;