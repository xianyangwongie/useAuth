!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("auth0-js"),require("react")):"function"==typeof define&&define.amd?define(["exports","auth0-js","react"],t):t(e.reactUseAuth={},e.Auth0,e.react)}(this,function(e,t,n){t=t&&t.hasOwnProperty("default")?t.default:t;var o="undefined"!=typeof window?window.location.protocol+"//"+window.location.host:"https://spark-joy.netlify.com/",u=("default"in n?n.default:n).createContext(null);e.AuthProvider=function(e){var i=e.children,a=e.navigate,r=n.useReducer(function(e,t){return e},{}),c=r[0],s=r[1],d=new t.WebAuth({domain:"sparkjoy.auth0.com",clientID:"GGfO12E5R8iHPBPh87bym5b3gzmdaYY9",redirectUri:o+"/auth0_callback",audience:"https://sparkjoy.auth0.com/api/v2/",responseType:"token id_token",scope:"openid profile email"});return console.log({useReducer:n.useReducer}),h(u.Provider,{value:{state:c,dispatch:s,auth0:d,navigate:a}},i)},e.useAuth=function(){var e=n.useContext(u),t=e.state,o=e.dispatch,i=e.auth0,a=e.navigate;return{isAuthenticated:function(){return t.expiresAt&&(new Date).getTime()<t.expiresAt},user:t.user,userId:t.user?t.user.sub:null,login:function(){i.authorize()},logout:function(){o({type:"logout"}),a("/")},handleAuthentication:function(){"undefined"!=typeof window&&i.parseHash(function(e,t){t&&t.accessToken&&t.idToken?function(e){i.client.userInfo(e.accessToken,function(t,n){t?console.log(t):o({type:"login",authResult:e,user:n}),a("/")})}(t):e&&console.log(e)})}}}});
//# sourceMappingURL=index.umd.js.map
