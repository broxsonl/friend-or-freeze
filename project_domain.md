**Friend or Freeze**

Ever wake up in the morning and want to have a good handle on what to expect when you walk out the door? Sure, knowing what the weather is like is helpful, and having an idea of current events in the news should help to clue you in...but it leaves out one very important component:

The people!

What are the people feeling and thinking today?

Well, here comes **Friend or Freeze**! **Friend or Freeze** will take the user's input of location, read through recent tweets from Twitter users in that area, and return whether today's local citizens appear to have a positive outlook, or are being a bunch of sourpusses.

From that Twitter sentiment, we will ultimately return a positive or a negative result, depending on the resulting sentiment and whether positivity or negativity are favored. From that, the user will be able to see more specific data of sentiment:sentiment ratios, as well as some specific user tweets themselves.

We're here to do the work for you of answering the day's important first question: **Should I get out of bed today?**

**User Stories**

- As a user, I want to be able to enter my zip code so that only tweets in my local area are analyzed for sentiment, rather than more broadly.

- As a user, I want to have **Friend or Freeze** quickly return to me a positive or negative outlook for the day based on Twitter user sentiment.

- As a user, I want to be able to look at the overall sentiment data and determine from it what % is positive, what % is negative and what % is neutral. (through pie chart, possibly?)

- As a user, I want a clean, mobile-focused interface clear of clutter that I can easily access from my mobile device as soon as I wake up, or whenever else I might need to easily access it.

**Developer Stories**

- As a developer, I want to interact with Twitter's API so that I am able to draw a select # of recent tweets in a specific geographical location.

- As a developer, I want to run the returned tweets against a sentiment dictionary defining positive, negative and neutral words and return from it a % value.

- As a developer, I want to create a result for the user that is either positive or negative based on the returned sentiment analysis of the tweets the user presents.

- As a developer, I want to ideally add multiple ways for the user to describe their geographical location (zip, city, state, etc.).

- As a developer, I want the user to always have their data returned to them based purely upon the most recent tweets, that they will ideally be able to select a # based on. e.g. 10, 25, 100, 200.

- As a developer, I want to ideally create a way for the user to select several different return formats/displays (graphs, stats, etc.) that their resulting data can be displayed in AFTER they are given the binary 'GOOD/BAD' response.

- As a developer, I want to have an attractive results page that is dynamically different depending on the user's result. (e.g. HOT vs COLD/ HEAVEN vs HELL)
