# proj_friends

## [Project Vinay's Friends](https://vdanepalli.github.io/proj_friends/)

- This is a simple project to demonstrate the power of React. 
- Although this is developed using Create-React-App, you can use Vite framework too
- It is easy to switch between these two. 


<br/><br/>


- [Components](src/components) are pure functions, deterministic. 
- [Containers](src/containers) have state associated and contain components. 
- [ErrorBoundary](src/components/ErrorBoundary.js) is used to gracefully handle any errors. 
- [Scroll](src/components/Scroll.js) contains [CardList](src/components/CardList.js) which is a list of [Cards](src/components/Card.js)

## To run this proj locally 

1. `git clone https://github.com/vdanepalli/proj_friends.git`
2. `cd proj_friends`
3. `npm install` -- to install node modules
4. `npm start` -- to run react app


<br/><br/>

- `npm update` -- to update node modules to refer latest packages
- `npm audit fix`

## To update the list of friends 

1. Update the [friends.js](src/friends.js) file.


## Note

- Everytime you update the main branch (change in application), run npm run deploy to update the gh-pages branch as well. 
- This automatically deploys the resulting updated production build
