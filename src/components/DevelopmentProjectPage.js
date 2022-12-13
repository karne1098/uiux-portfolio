export function DevelopmentProjectPage() {
    return (
        <div className="PersonasProject">
            <div className="ProjectTitle">
                <h1> how can we create a bartering site that keeps both users' expectations and coding timelines in mind? </h1>
            </div>

            {/* Overview */}
            <div className="ProjectSectionContainer">
                <div className={["FirstLevelRow", "OverviewBorder"].join(' ')}>
                    <div className="FirstLevelName">
                        Overview
                    </div>
                    <div className="FirstLevelBox">
                        <ol>
                            <li> I briefly <b>research</b> the economy, climate crisis, and covid-19 effects and analyze findings in relation to the practice of bartering.</li>
                            <li> I do a <b>competitor analysis </b> on Craigslist to highlight how the UX of this website directly and indirectly supports bartering.</li>
                            <li> I review the coding requirements for the assignment alongside users' needs, in order to <b>prioritize</b> the most critical functionalities to code in the timespan of 2.5 weeks. </li>
                            <li> I <b>code </b> the website using React.</li>
                        </ol>
                    </div>
                </div>

            </div>

            {/* Research */}
            <div className="ProjectSectionContainer">
                <div className="FirstLevelRow">

                    <div className="FirstLevelName">
                        Context Research
                    </div>

                    <div className="FirstLevelBox">
                        I briefly <b>research</b> the economy, climate crisis, and covid-19 effects and analyze findings in relation to the practice of bartering
                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark>findings </mark>
                    </div>
                    <div className="SecondLevelBox">
                        <ol>
                            <li> <span className="SecondLevelBoxOrderedList"> We are Entering an Economic Recession</span> </li>
                            <ul>
                                <li>
                                    the economy is weak and we are headed into a recession (a period of decreased economic activity where people spend a lot less money).
                                    <a href="https://www.conference-board.org/research/us-forecast" target="_blank" rel="noreferrer">[source] </a>
                                </li>
                                <li>
                                    sea freight rates are high, leading to less global trade.
                                    <a href="https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/global-economics-intelligence-executive-summary-october-2022" target="_blank" rel="noreferrer">[source] </a>
                                </li>
                                <li>
                                    Russan invasion of Ukraine and resulting sanctions on Russian energy resources leads to inflation of gas prices. This makes the cost of travel by any vehicle that requires oil more expensive (including cars).
                                    <a href="https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/global-economics-intelligence-executive-summary-october-2022" target="_blank" rel="noreferrer">[source] </a>
                                </li>
                            </ul>

                            <li>
                                <span className="SecondLevelBoxOrderedList"> Globally, We Need to Transition to Greener Economy</span>
                                <a href="https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/global-economics-intelligence-executive-summary-october-2022" target="_blank" rel="noreferrer">[source] </a>
                            </li>
                            <ul>
                                <li>
                                    "the burden of economic and climate crises will fall disproportionately on poorer populations and societies"
                                </li>
                                <li>
                                    global, governmental, (and otherwise large-sclae) climate crisis efforts "must go far beyond short-term measures, toward diversifying supply and accelerating the transition to a green-energy economy."
                                </li>
                            </ul>

                            <li>
                                <span className="SecondLevelBoxOrderedList">Echo Chambers and Local Networks Increase with Covid-19</span>
                                <a href="https://jech.bmj.com/content/76/2/128 " target="_blank" rel="noreferrer">[source] </a>
                            </li>
                            <ul>
                                <li>
                                    "local area-based networks emerged due to geographic restrictions (eg, stay-at-home orders), resulting in increases in neighbourly support and local volunteering."
                                </li>
                                <li>
                                    More homogeneous (less diverse) social interactions, and thus less diversity of opinion in ones day to day interactions
                                </li>
                                <li>
                                    "while online platforms have potential to provide intergroup contact, the tendency of much social media to form homogeneous ‘echo chambers’ can serve to further reduce intergroup contact."
                                </li>
                                <li>
                                    "Individuals with marginalized identities have the least access to social support" which is defined as "the psychological and material resources provided through social interaction."
                                </li>
                            </ul>

                            <li>
                                <span className="SecondLevelBoxOrderedList">Ongoing Housing "Affordability" Crisis Drives Inflation in US</span>
                                <a href="https://www.cnn.com/2022/09/17/politics/housing-market-questions-what-matters/index.html" target="_blank" rel="noreferrer">[source] </a>
                            </li>
                            <ul>
                                <li>
                                    "Mortgage rates are the highest they have been since 2008 and home prices remain near record highs...because there is a national shortage of homes...,
                                    pricing many prospective homebuyers out of the market. Those people then remain in the already tight rental market, pushing rents up even further."
                                </li>
                                <li>
                                    cost of housing drives inflation (since housing is a critical marker of the buying power of ones money)
                                </li>
                            </ul>

                        </ol>

                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark>why bartering? </mark>
                    </div>
                    <div className="SecondLevelBox">
                        <ol>

                            <li>
                                <span className="SecondLevelBoxOrderedList"> Bartering is Effective during Economic Recession</span>
                                <a href="https://www.investopedia.com/terms/b/barter.asp#toc-understanding-bartering" target="_blank" rel="noreferrer">[source] </a>
                            </li>
                            <ul>
                                <li>
                                    "Barter is an act of trading goods or services between two or more parties without the use of money —or a monetary medium, such as a credit card.
                                    Two individuals negotiate to determine the relative value of their goods and services and offer them to one another in an even exchange.
                                    It is the oldest form of commerce, dating back to a time before hard currency even existed."
                                </li>
                                <li>
                                    "In an economic crunch, bartering can be a great way to get the goods and services you need without having to pull money out of your pocket."
                                    This is why "online barter exchanges became especially popular with small businesses after the 2008 financial crisis, which culminated in the Great Recession."
                                </li>
                            </ul>

                            <li>
                                <span className="SecondLevelBoxOrderedList">Local Bartering Is Green</span>
                            </li>
                            <ul>
                                <li>
                                    Bartering may reduce excess waste, since a person can exchange goods or services they don't need (and might otherwise throw away or leave idle), with goods or services that they do need.
                                    Under late stage capitalism and hyper-consumerism, there is a lot of material waste produced because there is an excess of consumer products and not enough means to 're-use', 'value', and 'sustain' a good or service.
                                </li>
                                <li>
                                    Since bartering is local, it reduces the amount of energy required to travel via car (or ship the item via mail).
                                    By maximally meeting the needs of community members through trading resources locally, bartering also reduces the amount of objects shipped through global trade (which requires energy).

                                </li>
                            </ul>

                            <li>
                                <span className="SecondLevelBoxOrderedList">Bartering Increases and Diversifies Interactions</span>
                            </li>
                            <ul>
                                <li>
                                    Bartering creates "a deeper personal relationship between trading partners than a typical monetized transaction."
                                    <a href="https://www.investopedia.com/terms/b/barter.asp#toc-understanding-bartering" target="_blank" rel="noreferrer">[source] </a>
                                </li>
                                <li>
                                    there is potential for more localised, coherent communities due to scaled-down travel, homeworking and local focus that has continued as a norm after the height of the Covid-19 Pandemic
                                    <a href="https://jech.bmj.com/content/76/2/128" target="_blank" rel="noreferrer">[source] </a>

                                </li>
                            </ul>

                        </ol>
                    </div>
                </div>

            </div>

            {/* Competitor Analysis */}
            <div className="ProjectSectionContainer">
                <div className="FirstLevelRow">

                    <div className="FirstLevelName">
                        Competitor Analysis
                    </div>

                    <div className="FirstLevelBox">
                        I do a <b>competitor analysis </b> on Craigslist to highlight how the UX of this website directly and indirectly supports bartering.
                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark>craigslist </mark>
                    </div>
                    <div className="SecondLevelBox">
                        <img src={process.env.PUBLIC_URL + "/" + "images/craigslist landing page.jpg"} />
                        <ul>
                            <li className="SecondLevelBoxOrderedList">Craigslist's UI is Defined by Trust</li>
                        </ul>
                    </div>
                </div>

                {/* <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark>bunz </mark>
                    </div>
                    <div className="SecondLevelBox">
                        text goes here in a cute little box Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark>depop </mark>
                    </div>
                    <div className="SecondLevelBox">
                        text goes here in a cute little box Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div> */}

            </div>


            {/* Technical Requirements */}
            <div className="ProjectSectionContainer">

                <div className="FirstLevelRow">
                    <div className="FirstLevelName">
                        Technical Requirements
                    </div>
                    <div className="FirstLevelBox">
                        text goes here in a cute little box Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark>assignment </mark>
                    </div>
                    <div className="SecondLevelBox">
                        text goes here in a cute little box Lorem ipsum dolor sit amet, consat non proident,
                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark>implementation plan </mark>
                    </div>
                    <div className="SecondLevelBox">
                        text goes here in a cute little box Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
            </div>

            {/* WireFraming */}
            <div className="ProjectSectionContainer">

                <div className="FirstLevelRow">
                    <div className="FirstLevelName">
                        WireFraming
                    </div>
                    <div className="FirstLevelBox">
                        text goes here in a cute little box Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark>sketches </mark>
                    </div>
                    <div className="SecondLevelBox">
                        text goes here in a cute little box Lorem ipsum dolor sit amet, consat non proident,
                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark>mid-fi wireframes </mark>
                    </div>
                    <div className="SecondLevelBox">
                        text goes here in a cute little box Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
            </div>

            {/* Result */}
            <div className="ProjectSectionContainer">

                <div className="FirstLevelRow">
                    <div className="FirstLevelName">
                        Coded Site
                    </div>
                    <div className="FirstLevelBox">
                        I <b>code </b> the website using React.
                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark>site </mark>
                    </div>
                    <div className="SecondLevelBox">
                        <button> <a href="https://radicalwaterbear101.github.io/development-final/" target="_blank" rel="noreferrer"> <img src={process.env.PUBLIC_URL + "/" + "images/development coded.jpg"} /> </a> </button>
                    </div>
                </div>


            </div>

            {/* Reflection */}
            <div className="ProjectSectionContainer">

                <div className="FirstLevelRow">
                    <div className="FirstLevelName">
                        Reflection
                    </div>
                    <div className="FirstLevelBox">
                        text goes here in a cute little box Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark>what i learned </mark>
                    </div>
                    <div className="SecondLevelBox">
                        text goes here in a cute little box Lorem ipsum dolor sit amet, consat non proident,
                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark> next steps </mark>
                    </div>
                    <div className="SecondLevelBox">
                        Some questions I have, that were unanswered because they were beyond the scope of the brief research I did.
                        <ul>
                            <li> <i>
                                How would the website deal with the fact that barter transactions are considered <b>taxable</b> by the IRS (Internal Revenue Service)?
                            </i></li>
                            <li> <i>
                                Is there an increased <b>awareness of social inequality</b> due to people spending more time online during the Covid-19 pandemic?
                            </i></li>
                            <li> <i>
                                Are people more conscious of how their actions might perpetuate exploitative and violent systems due to the insights that were especially highlighted by the Black Lives Matter movement?
                            </i></li>
                            <li> <i>
                                How might <b>resource distribution</b> and praxis be tied into the site?
                            </i></li>
                            <li> <i>
                                How do social support networks (mutual aid, etc.) create a safety net for those that are facing or at risk of experiencing <b> houselessness</b>?
                            </i></li>
                        </ul>
                    </div>
                </div>

            </div>




        </div>
    )
}