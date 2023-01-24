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
                                <span className="SecondLevelBoxOrderedList">Housing Affordability Crisis Drives Inflation in US</span>
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
                            <li>
                                <span className="SecondLevelBoxOrderedList"> We Need a Greener Global Economy</span>
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
                                <span className="SecondLevelBoxOrderedList">Covid-19 Created Echo Chambers & Local Networks</span>
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
                        <mark>general notes</mark>
                    </div>
                    <div className="SecondLevelBox">
                        <img src={process.env.PUBLIC_URL + "/" + "images/craigslist landing page.jpg"}
                            alt="The existing landing page for Craigslist is geographical. The hero section is a world map." />
                        <ol>
                            <li>
                                <span className="SecondLevelBoxOrderedList">Geographical Landing Page Supports User Goals</span>
                                <a href="https://d3.harvard.edu/platform-digit/submission/craigslist-the-remarkable-but-potentially-obsolete-success-story-of-the-ultimate-platform/" target="_blank" rel="noreferrer">[source] </a>
                            </li>
                            <ul>
                                <li>
                                    "Craigslist is successful because it is available globally, in ~70 countries and ~700 cities, but users enter their approximate location and can only see and post ads that are available in their near proximity, visualized on a map.
                                    This facilitates and expediates coordination as users can from start eliminate contact with anyone outside of their willing 'transportation zone'."
                                </li>
                            </ul>


                            <li>
                                <span className="SecondLevelBoxOrderedList">Vulnerability Builds Trust between Users</span>
                            </li>
                            <ul>
                                <li>
                                    social penetration theory says that "people can break down formal social barriers by being perceived as vulnerable."
                                    <a href="https://www.uxmatters.com/mt/archives/2017/06/craigslists-unconventional-user-experience.php " target="_blank" rel="noreferrer">[source] </a>
                                </li>
                                <li>
                                    Since there is no way to contact another user in-app, a post must include a point of contact (phone number, email).
                                    A person might be more inclined to trust a user that has shared this semi-private method of communication to the internet (which is somewhat vulnerable).
                                    <a href="https://www.uxmatters.com/mt/archives/2017/06/craigslists-unconventional-user-experience.php " target="_blank" rel="noreferrer">[source] </a>
                                </li>
                                <li>
                                    Facebook Marketplace may be an even better example of this, where people are posting from their Facebook accounts which have social and oftentimes personal information.
                                </li>
                            </ul>

                            <li>
                                <span className="SecondLevelBoxOrderedList">Unstyled, Unchanging, 2000s Era UI Builds Trust in the Platform</span>
                            </li>
                            <ul>
                                <li>
                                    The busy UI increases cognitive load, which tends to lead users to think longer and more critically.
                                    As a result, users feel in control of their decisions, something that is important in a context where there is so much variability in users and goods/services available.
                                    Since the user feels in control, they trust that the app is not trying to exploit or manipulate them.
                                    <a href="https://www.uxmatters.com/mt/archives/2017/06/craigslists-unconventional-user-experience.php " target="_blank" rel="noreferrer">[source] </a>
                                </li>
                                <li>
                                    Because there are no sponsored ads Craigslist like there are in similar resale apps,
                                    users trust that Craigslist is not trying to 'sell' anything to them.
                                    <a href="https://www.uxmatters.com/mt/archives/2017/06/craigslists-unconventional-user-experience.php " target="_blank" rel="noreferrer">[source] </a>

                                </li>
                                <li>
                                    Despite the potential for scammers to degrade the trust between users and the platform,
                                    and the fact that the UI has barely changed,
                                    Craigslist has seen immense success since its launch in 2000.
                                    <a href="https://www.userzoom.com/ux-blog/craigslist-success-without-design/" target="_blank" rel="noreferrer">[source] </a>
                                </li>

                            </ul>

                            <li>
                                <span className="SecondLevelBoxOrderedList">Craigslist is Quite Accessible & Universally Designed</span>
                                <a href="https://www.userzoom.com/ux-blog/craigslist-success-without-design/" target="_blank" rel="noreferrer">[source] </a>
                            </li>
                            <ul>
                                <li>
                                    Craigslist is all text, so it is good for those who using assistive reading technology
                                </li>
                                <li>
                                    Most icons are labeled, which is helpful to those that might not know what newer icons mean.
                                    Because the site reminiscent of older online interfaces, older users might face less of a learning curve when learning how to use Craigslist.
                                </li>
                                <li>
                                    There's very little color, and the color that is present is high contrast. This is good for people with any degree of color blindness or sensitivity to light.
                                </li>
                            </ul>




                        </ol>
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
                        Prioritizing Tasks
                    </div>
                    <div className="FirstLevelBox">
                        I review the coding requirements for the assignment alongside users' needs, in order to <b>prioritize</b> the most critical functionalities to code in the timespan of 2.5 weeks.
                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark>the assignment </mark>
                    </div>
                    <div className="SecondLevelBox">
                        <ul>
                            <li>
                                <span className="SecondLevelBoxOrderedList"> Summary</span>
                            </li>
                            <ul>
                                <li>
                                    I was tasked to develop an <b>interactive interface</b>, use <b>Components</b>,
                                    and tie the components to an <b>internal data state</b>.
                                    This project required that I code in <b>React</b> to create a <b>list-based</b> interface where <b>users can select items</b> out of a list and see how their items <b>aggregate</b>.
                                </li>
                            </ul>
                            <li>
                                <span className="SecondLevelBoxOrderedList">Structural Requirements</span>
                            </li>
                            <ul>
                                <li>
                                    At least <b>2 filtering categories</b>
                                </li>
                                <li>
                                    At least <b>1 sorting feature</b>
                                </li>
                                <li>
                                    An <b>aggregator section</b> displaying:
                                    <ul>
                                        <li>
                                            Items the user has added to the aggregator
                                        </li>
                                        <li>
                                            Aggregation of a property (ex. time, cost) but NOT the total number of items
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    At least <b>12 item cards</b>, each displaying:
                                    <ul>
                                        <li>
                                            Item image
                                        </li>
                                        <li>
                                            Categories used by the filtering feature
                                        </li>
                                        <li>
                                            Field(s) used by the sorting feature
                                        </li>
                                        <li>
                                            Property being aggregated
                                        </li>
                                        <li>
                                            A button that adds to/removes from the aggregator
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    An element that users can interact with to revert the page back to the original state without refreshing
                                </li>
                            </ul>
                            <li>
                                <span className="SecondLevelBoxOrderedList">Functional Requirements</span>
                            </li>
                            <ul>
                                <li>
                                    Site should handle any <b>combination of filters</b> and  <b>sorting</b> features
                                </li>
                                <li>
                                    Users should be able to <b>add to</b> and <b>remove items</b> from the aggregator section. The aggregated property should <b>update</b> accordingly.
                                </li>
                                <li>
                                    The design should be <b>intuitive</b> and <b>easy to use</b>.
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark>making decisions </mark>
                    </div>
                    <div className="SecondLevelBox">
                        <ul>
                            <li>
                                <span className="SecondLevelBoxOrderedList">Fulfilling Structural Requirements</span>
                            </li>
                            <ul>
                                <li>
                                    <b>2 filtering categories</b>: I decided to do itemType offered and itemType accepted by the nature of bartering.
                                    A user, Bob, will want to filter for posts that accept items that Bob has to offer.
                                    Bob might also want to filter for posts that offer items that Bob is looking for. For a perfect barter, Bob will find a post that accepts an item Bob has to offer, and that offers an item that Bob wants.
                                </li>
                                <li>
                                    <b>1 sorting feature</b>: I decided to do this by date posted, since this is an indirect way of showing whether the user posting on Barder is active or not (without impeding on their privacy and showing activity status).
                                    Users of Craigslist are used to their posts having the date posted revealed, so this won't come as a surprise either.
                                </li>
                                <li>
                                    An <b>aggregator section</b>: I decided on a Trading List that is visible to the viewer. This is different from Craigslist where the favorited items is not visible. This design is due to the requirements of the coding project.
                                    <ul>
                                        <li>
                                            Items the user has added to the aggregator: I show the post without the image.
                                        </li>
                                        <li>
                                            Aggregation of a property: I decided on 'equivalent cost' of the Trading List because I realized I would need more time to think critically and meaningfully about a value that aggregates in the context of bartering.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    At least <b>12 item cards</b>: The data for these items were collected from objects lying around my living space. Some belong to my roommates, some are mine, and some are shared
                                    <ul>
                                        <li>
                                            Item image: this is similar to Craigslist
                                        </li>
                                        <li>
                                            Categories used by the filtering feature: I included the itemType of an object in green and parenthesized, anywhere an object showed up (under the 'accepted items' of a post or the offered item itself)
                                        </li>
                                        <li>
                                            Field(s) used by the sorting feature: I included this on each post
                                        </li>
                                        <li>
                                            Property being aggregated: I also included this on each post
                                        </li>
                                        <li>
                                            A button that adds to/removes from the aggregator: The button changes from 'add to Trading List' to 'remove From Trading List' and back, accordingly.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    An element to revert the page: I did not implement this feature fully, as it was lower in task priority
                                </li>
                            </ul>
                            <li>
                                <span className="SecondLevelBoxOrderedList">Functional Requirements</span>
                            </li>
                            <ul>
                                <li>
                                    Site should handle any <b>combination of filters</b> and  <b>sorting</b> features: There is a bug where adding an additional filter category after sorting causes the items to no longer be sorted.
                                    This might be an issue, but users can reclick the sort button. Like Craigslist, requiring the user to do some extra work with a larger cognitive might actually build trust in the platform.
                                </li>
                                <li>
                                    Users should be able to <b>add to</b> and <b>remove items</b> from the aggregator section: The aggregated property should <b>update</b> accordingly: I implement this fully.
                                </li>
                                <li>
                                    The design should be <b>intuitive</b> and <b>easy to use</b>: I decided on a layout where the filters and sorting were on the left, the items were in the center, and the trading list were on the right.
                                    This design is intuitive because it follows in the tradition of Craigslist, as well as corporate shopping sites such as Amazon.
                                </li>
                            </ul>

                        </ul>
                    </div>
                </div>
            </div>

            {/* WireFraming */}
            {/* <div className="ProjectSectionContainer">

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
            </div> */}

            {/* Coded Site */}
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
                        Feel free to check it out and play around with the filtering, sorting, and trading list!
                        <br />
                        <img src={process.env.PUBLIC_URL + "/" + "images/development coded.jpg"}
                            alt="Front-facing laptop mockup of the Barder website application I coded." />
                        <br />

                        <a href="https://radicalwaterbear101.github.io/development-final/" target="_blank" rel="noreferrer">
                            My implementation of the Barder site
                        </a>

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
                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark>what i learned </mark>
                    </div>
                    <div className="SecondLevelBox">
                        <ul>
                            <li>
                                I applied context research and competitor analysis strategies to think through my code and design choices
                            </li>
                            <li>
                                I learned how to prioritize coding and design work according to the user's expectations and technical expectations
                            </li>

                        </ul>
                    </div>
                </div>

                <div className="SecondLevelRow">
                    <div className="SecondLevelName">
                        <mark> next steps </mark>
                    </div>
                    <div className="SecondLevelBox">
                        I'd get answers to some questions I have, which were beyond the scope of the brief research I did.
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