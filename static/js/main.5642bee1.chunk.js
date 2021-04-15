(this.webpackJsonpmastermind=this.webpackJsonpmastermind||[]).push([[0],{25:function(e,t,s){},26:function(e,t,s){},36:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),l=s(14),i=s.n(l),r=(s(25),s(26),s(15)),o=s(16),n=s(20),u=s(19),d=s(17),v=s.n(d),j=s(0);function h(e){return Object(j.jsx)("button",{className:v()(e.className,e.active,e.value),onClick:e.onClick})}function b(e){return Object(j.jsx)("button",{disabled:e.disabled,className:e.className,onClick:e.onClick,children:Object(j.jsx)("div",{children:e.value})})}function g(e){return Object(j.jsx)("div",{className:e.className,children:e.value})}var m=["c0","c1","c2","c3","c4","c5"],p="c6",x="c7",O=function(e){Object(n.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).generateSolution=function(){for(var e=Array(a.props.cols).fill(null),t=0;t<e.length;t++)e[t]=m[Math.floor(Math.random()*m.length)];return e},a.renderGuessRow=function(){for(var e=[],t=function(t){e.push(Object(j.jsx)(h,{className:"tile guess",value:a.state.guessRow[t],onClick:function(){return a.guessTileClicked(t)}}))},s=0;s<a.state.guessRow.length;s++)t(s);return Object(j.jsx)("div",{className:"row board",children:e})},a.renderBoard=function(){for(var e=[],t=[],s=a.state.currentRow,c=s+a.props.cols,l=0;l<a.state.board.length;l++)l>=s&&l<c?t.push(a.renderTile(l,"active")):t.push(a.renderTile(l,"inactive")),(l+1)%a.props.cols===0&&(e.push(Object(j.jsx)("div",{className:"row board",children:t})),t=[]);return e},a.renderEvalTiles=function(){for(var e=[],t=[],s=0;s<a.state.evals.length;s++)t.push(Object(j.jsx)(h,{className:"tile eval",value:a.state.evals[s]})),2*(s+1)%a.props.cols===0&&(e.push(Object(j.jsx)("div",{className:"row eval",children:t})),t=[]);return e},a.colorSelected=function(e){a.setState({selectedColor:e})},a.renderColorSelect=function(){for(var e=[],t=function(t){var s=t===a.state.selectedColor?"tile color active":"tile color inactive";e.push(Object(j.jsx)(h,{className:s,value:m[t],onClick:function(){return a.colorSelected(t)}}))},s=0;s<m.length;s++)t(s);return e},a.nextTurn=function(){var e=parseInt(a.state.currentRow)+parseInt(a.props.cols);if(e<=a.state.board.length)return e},a.evaluateMove=function(){for(var e=a.state.guessRow.slice(),t=0,s=[],c=[],l=0;l<e.length;l++)e[l]===a.state.solution[l]?t++:(s.push(a.state.solution[l]),c.push(e[l]));for(var i=0,r=0;r<c.length;r++)if(s.includes(c[r])){i++;var o=s.indexOf(c[r]);-1!==o&&s.splice(o,1)}for(var n=a.state.evals.slice(),u=0;u<t;u++)n[u+a.state.currentRow]=p;for(var d=0;d<i;d++)n[d+a.state.currentRow+t]=x;return n},a.submitMove=function(){var e=a.state.guessRow.slice(),t=a.state.board.slice();if(!e.includes(null)){for(var s=0;s<a.props.cols;s++)t[s+a.state.currentRow]=e[s];var c=a.evaluateMove(),l=a.nextTurn(),i=a.getGameStatus(t,c,a.state.currentRow);a.setState({board:t,evals:c,currentRow:l,dialog:i})}else a.setState({dialog:{message:"Guess is incomplete",messageState:"dialog alert"}})},a.clearDialog=function(){a.setState({dialog:{message:null,messageState:"dialog"}})},a.guessTileClicked=function(e){var t=a.state.guessRow.slice();t[e]=m[a.state.selectedColor],a.setState({guessRow:t})},a.resetGame=function(){a.setState({board:Array(a.props.rows*a.props.cols).fill(null),evals:Array(a.props.rows*a.props.cols).fill(null),guessRow:Array(a.props.cols).fill(null),solution:a.generateSolution(),currentRow:0,color:null,dialog:{message:null,messageState:"dialog"}})},a.getGameStatus=function(e,t,s){var c=t.slice(s,s+a.props.cols);return JSON.stringify(c)===JSON.stringify(Array(a.props.cols).fill(p))?{message:"You won!",messageState:"dialog won"}:s+a.props.cols===e.length?{message:"You lost...",messageState:"dialog lost"}:{message:"",messageState:"dialog"}},a.getTurnNumber=function(){for(var e=0;e<a.props.rows;e++)if(null===a.state.board[e*a.props.cols])return e;return-1},a.clearGuess=function(){a.setState({guessRow:Array(a.props.cols).fill(null)})},a.state={board:Array(e.rows*e.cols).fill(null),evals:Array(e.rows*e.cols).fill(null),solution:a.generateSolution(),guessRow:Array(e.cols).fill(null),currentRow:0,selectedColor:0,dialog:{message:null,messageState:"dialog"}},a}return Object(o.a)(s,[{key:"renderTile",value:function(e,t){return Object(j.jsx)(h,{value:this.state.board[e],active:t,className:"tile board"})}},{key:"render",value:function(){var e=this.state.dialog.messageState.includes("won")||this.state.dialog.messageState.includes("lost");return Object(j.jsxs)("div",{class:"container",children:[Object(j.jsx)(g,{className:this.state.dialog.messageState,value:this.state.dialog.message}),Object(j.jsxs)("div",{className:"game-container board",children:[Object(j.jsx)("div",{className:"board",children:this.renderBoard()}),Object(j.jsx)("div",{className:"evals",children:this.renderEvalTiles()})]}),Object(j.jsxs)("div",{className:"game-container guess",children:[this.renderGuessRow(),Object(j.jsx)(b,{value:"x",className:"button clear-guess",onClick:this.clearGuess})]}),Object(j.jsx)("div",{className:"game-container colors",children:this.renderColorSelect()}),Object(j.jsxs)("div",{className:"game-container buttons",children:[Object(j.jsx)(b,{onClick:this.submitMove,value:"Guess",className:"button guess",disabled:e?"disabled":""}),Object(j.jsx)(b,{onClick:this.resetGame,value:"New Game",className:"button new-game",disabled:""})]})]})}}]),s}(c.a.Component);function f(){return Object(j.jsxs)("div",{className:"help",children:[Object(j.jsx)("p",{children:"The goal of Mastermind is to guess the secret code, a sequence of 4 colored pegs generated by the Mastermind. For example, here's a secret code the Mastermind might think of..."}),Object(j.jsx)(h,{active:"active",className:"tile board",value:"c0"}),Object(j.jsx)(h,{active:"active",className:"tile board",value:"c4"}),Object(j.jsx)(h,{active:"active",className:"tile board",value:"c3"}),Object(j.jsx)(h,{active:"active",className:"tile board",value:"c1"}),Object(j.jsx)("hr",{}),Object(j.jsx)("p",{children:"Using the colors, create a pattern and click 'guess' to see how close you are. This is what we might guess the code is..."}),Object(j.jsx)(h,{active:"active",className:"tile board",value:"c1"}),Object(j.jsx)(h,{active:"active",className:"tile board",value:"c3"}),Object(j.jsx)(h,{active:"active",className:"tile board",value:"c5"}),Object(j.jsx)(h,{active:"active",className:"tile board",value:"c1"}),Object(j.jsx)("hr",{}),Object(j.jsx)("p",{children:"Your guess will be checcked, and the evaluataion will appear in the four small pegs on the right of the board. In this case, the evaluation would be..."}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)(h,{active:"active",className:"tile eval",value:"c6"}),Object(j.jsx)(h,{active:"active",className:"tile eval",value:"c7"})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)(h,{active:"active",className:"tile eval",value:""}),Object(j.jsx)(h,{active:"active",className:"tile eval",value:""})]}),Object(j.jsxs)("p",{children:[Object(j.jsx)(h,{active:"active",className:"tile eval",value:"c6"})," means one peg in our guess is the right color and is in the right place (the 4th tile in our guess)"]}),Object(j.jsxs)("p",{children:[Object(j.jsx)(h,{active:"active",className:"tile eval",value:"c7"})," means one peg in our guess is the right color but is in the wrong place (the 2nd tile)"]}),Object(j.jsxs)("p",{children:[Object(j.jsx)(h,{active:"active",className:"tile eval",value:""})," means one peg in our guess is not the right color and therefore not in the secret code (the 1st and 3rd tiles)"]}),Object(j.jsx)("p",{children:"*Note: the order of the evaluation pegs does not matter"}),Object(j.jsx)("hr",{}),Object(j.jsx)("p",{children:"Try to win before you run out of moves. When you guess the code, the evaluation pegs should look like:"}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)(h,{active:"active",className:"tile eval",value:"c6"}),Object(j.jsx)(h,{active:"active",className:"tile eval",value:"c6"})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)(h,{active:"active",className:"tile eval",value:"c6"}),Object(j.jsx)(h,{active:"active",className:"tile eval",value:"c6"})]}),Object(j.jsx)("br",{})]})}var N=s(9),w=s(2);var S=function(){return Object(j.jsx)(N.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Mastermind"}),Object(j.jsx)("div",{children:Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(N.b,{exact:!0,to:"/",activeClassName:"is-active",children:"play"})}),Object(j.jsx)("li",{children:Object(j.jsx)(N.b,{to:"/help",activeClassName:"is-active",children:"instructions"})})]})})}),Object(j.jsx)(w.a,{exact:!0,path:"/",children:Object(j.jsx)(O,{rows:10,cols:4})}),Object(j.jsx)(w.a,{path:"/help",children:Object(j.jsx)(f,{})})]})})},C=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,37)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,i=t.getTTFB;s(e),a(e),c(e),l(e),i(e)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root")),C()}},[[36,1,2]]]);
//# sourceMappingURL=main.5642bee1.chunk.js.map