### work log
1 added scss structure from other project.  checkout <a href="http://localhost:8899/scss_test.html">test new scss styles</a>


### end of work log

Flat structure of redux store.
Open dashboards is stored as separate collection. Its not stored in dashboard configuration collection 
Config collection -> for each dashboard uuid, title,desc, layout json
Open dashboard -> uuid 
current dashoard -> has single uuid
favorite -> list of uuids

separate redux per feature in /services/store

no place to store all action list. actiosn stays per folder in /store with corresponding reducer.

No initial state inside component. Only state in reducer
No logic in component, logic goes in reducer. Later logic will go in middleware logic-middleware


For any reducer on inti state , top level object will always be there , child object may be null
        currentDashboardId: state.CurrentDashboard.dashboardId,

so in this case state.CurrentDashboard I don’t have to check against null. DashboardId is of type string|undefined

if we use anonomous method we don’t have to do bind(this)
    onInputKeyPress = (event: any, fieldType: string):void=> {



### handle event in multiple reducers
also just now i am writing 1 more case. its ok for 1 event to be handled by 2 reducers. for example when user save title , i will have 2 reducer handling it: 1. DashboardConfig to update title of dashboard, 2. EdtingDashboard, which will auto remove this dashboard from editing list

current store json  

http://jsoneditoronline.org/?id=c0eea0ee03434f2da646781ebbec2b94







### documentation and progress tracking
* commit logs: add some short description daily ( no need to add per checkin)
* add daily log in notes.md
<hr/>

### tech stuff
* use yarn
* common commands: yarn install, yarn dev, yarn start
* we need storage per browser tab. 2 tabs should not share storage
* which middleware for react? use redux thunk for now.

**  a local js function will provide data update to react. need pure js <--> react interaction  
* design for desktop/laptop: no media queries
* theme and styling shoud match [this](https://react-shopping-cart-67954.firebaseapp.com/). simple and clean 
* international clients. number should be displayed after formatting using a utility method 
** 1,234,567.89 vs 1234567.89	 vs 1.234.567,89  	
** https://en.wikipedia.org/wiki/Decimal_separator  
* text is always english. user names can be unicode (放)
* small fonts and tight fit.
<hr/>

* **chrome browser** only testing while developing. 
<hr/>

* use material ui  https://material-ui.com
* ![img](https://miro.medium.com/fit/c/256/256/1*5J2noO7t-nMhJNmqvq4wYg.png)
* use google font. https://fonts.google.com/
** small text is 12px. this looks good https://fonts.google.com/specimen/Roboto
* try to edit theme instead of style per component. we are open for suggestions and recommendations.
* if code is not compiling because of material import rerun import
```
yarn add @material-ui/core --save-dev
```


<hr/>

* multiple app/ html pages as entry point. 
* use index.tsx in your app in /ts/apps/
* yarn dev or yarn prod will auto generate js for your module based on index.tsx in your app folder
* eg /ts/apps/admin/.. app folder will generate ./dist/admin.js

<hr/>


###### adding new app process
* add html page for app
* create folder for app in /ts/apps  . example : /ts/apps/admin
* add app's index.tsx
* Link html to this index.tsx, include all needed files
 ```javascript
new HtmlWebpackPlugin({
            template: path.join(sourceRootPath, 'html', 'App1.html'),
            inject: 'body',
            filename: 'multiple-app-render.html',
            title: 'App 1 Test page',
            chunks: ['jqueryMultipleControlsApp'],
		}),
``` 

###### code folders
```
|---framework [framework and business logic goes here]
|---framework-fake [framework fake business logic. code against this folder ]
|---core [ all interfaces used by framework]
|---src [ all react components etc. code against interface in core]
(other folders)
|--- tests
|--- server-mock [ http server folder for fake data  server]
|--- build-tool (anything used by webpack)
|---e2e


````
