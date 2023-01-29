# SoccerManagerBELite

A RESTful NodeJS API for a simple application where football/soccer fans will be able to create fantasy teams and will be able to buy or sell players

- Users are able to create an account and log in
- Each user can have only one team (user is identified by email)
- When the user is signed up, they get a team of 20 players (the system generates players)
  - 3 goalkeepers
  - 6 defenders
  - 6 midfielders
  - 5 attackers
- Each player has an initial value of _$1,000,000_
- Each team has an additional _$5,000,000_ to buy other players
- When logged in, a user can see their team and player information
- The team has the following information:

  - _Team name_ and _team country_ (can be edited).
  - _Team value_ (sum of player values)

- The player has the following information

  - _First name, last name, country_ (can be edited by a team owner)
  - _Age_ (random number from 18 to 40) and _market value_

- A team owner can set the player on a transfer list
- When a user places a player on a transfer list, they must set the asking price/value for this player. This value show be list on a market list. When another user/team buys this player, they must be bought for this price.
- Each user can see all the players on a transfer list.
- With each transfer, team budgets are updated.
- When a player is transferred to anothe rteam, their vlaue should be increased between 10 and 100 percent. This is a randomly chosen factor.
- All user actions are performed via RESTful API, including authentication
