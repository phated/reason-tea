// Generated by BUCKLESCRIPT VERSION 4.0.0, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var BsHistory = require("bs-history/src/BsHistory.bs.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var CreateHashHistory = require("history/createHashHistory");

var historyOpts = {
  basename: ""
};

var router = CreateHashHistory.default(historyOpts);

function path($$location) {
  var pathname = $$location.pathname;
  var match = pathname[pathname.length - 1 | 0];
  var raw = match === "/" ? pathname.slice(0, -1) : pathname;
  return Belt_List.fromArray(raw.split("/"));
}

function search($$location) {
  var raw = $$location.search;
  return raw.slice(1);
}

function hash($$location) {
  var raw = $$location.hash;
  return raw.slice(1);
}

function getRoute($$location) {
  return /* record */[
          /* path */path($$location),
          /* hash */hash($$location),
          /* search */search($$location)
        ];
}

function makeRoute(path, hash, search) {
  return /* record */[
          /* path */path,
          /* hash */hash,
          /* search */search
        ];
}

function fromRouteDefault(_, _$1) {
  return /* NoUpdate */0;
}

function toRouteDefault() {
  return /* NoTransition */1;
}

function updateDefault(_, _$1) {
  return /* NoUpdate */0;
}

function viewDefault() {
  return "View not implemeneted";
}

function program(debug) {
  return /* record */[
          /* debug */debug,
          /* fromRoute */fromRouteDefault,
          /* toRoute */toRouteDefault,
          /* update */updateDefault,
          /* view */viewDefault
        ];
}

function programStateWrapper(initState, looper) {
  var currentState = /* record */[/* contents */initState];
  var runner = function (action) {
    var update = Curry._2(looper[/* dispatch */1], action, currentState[0]);
    var nextState = update ? update[0] : currentState[0];
    Curry._1(looper[/* updateRoute */3], /* record */[
          /* previous */currentState[0],
          /* next */nextState
        ]);
    currentState[0] = nextState;
    Curry._1(looper[/* render */4], /* record */[
          /* state */nextState,
          /* send */runner
        ]);
    return /* () */0;
  };
  BsHistory.listen((function ($$location, action) {
            var routeAction = action !== 4003185 ? (
                action >= 893009402 ? (console.log("listener: push"), /* Push */1) : (console.log("listener: replace"), /* Replace */3)
              ) : (console.log("listener: pop"), /* Pop */2);
            var update = Curry._2(looper[/* getFromRoute */2], routeAction, getRoute($$location));
            var nextState = update ? update[0] : currentState[0];
            currentState[0] = nextState;
            Curry._1(looper[/* render */4], /* record */[
                  /* state */nextState,
                  /* send */runner
                ]);
            return /* () */0;
          }))(router);
  Curry._1(looper[/* start */0], /* record */[
        /* state */currentState[0],
        /* send */runner
      ]);
  return /* () */0;
}

function loop(update, view, toRoute, fromRoute, enqueueRender) {
  return /* record */[
          /* start */(function (self) {
              return Curry._1(enqueueRender, Curry._1(view, self));
            }),
          /* dispatch */Curry.__2(update),
          /* getFromRoute */Curry.__2(fromRoute),
          /* updateRoute */(function (prevAndNextState) {
              var update = Curry._1(toRoute, prevAndNextState);
              if (typeof update === "number") {
                update === 0;
              } else if (update.tag) {
                var url = Belt_List.reduce(update[0][/* path */0], "/", (function (prim, prim$1) {
                        return prim + prim$1;
                      }));
                router.replace(url);
              } else {
                var url$1 = Belt_List.reduce(update[0][/* path */0], "/", (function (prim, prim$1) {
                        return prim + prim$1;
                      }));
                router.push(url$1);
              }
              return /* () */0;
            }),
          /* render */(function (self) {
              return Curry._1(enqueueRender, Curry._1(view, self));
            })
        ];
}

function startup(program, renderer) {
  var $$location = router.location;
  var match = Curry._2(program[/* fromRoute */1], /* Init */0, getRoute($$location));
  var initState = match ? match[0] : Pervasives.failwith("Must init a state");
  var match$1 = Curry._1(program[/* toRoute */2], /* record */[
        /* previous */initState,
        /* next */initState
      ]);
  if (typeof match$1 === "number" && match$1 !== 0) {
    
  } else {
    Pervasives.failwith("toRoute should result in no transition when called with initial state.");
  }
  var looper = loop(program[/* update */3], program[/* view */4], program[/* toRoute */2], program[/* fromRoute */1], renderer);
  programStateWrapper(initState, looper);
  return /* () */0;
}

var routerProgram = program;

var defaultRoute = /* record */[
  /* path : :: */[
    "",
    /* [] */0
  ],
  /* hash */"",
  /* search */""
];

exports.historyOpts = historyOpts;
exports.router = router;
exports.path = path;
exports.search = search;
exports.hash = hash;
exports.getRoute = getRoute;
exports.makeRoute = makeRoute;
exports.defaultRoute = defaultRoute;
exports.fromRouteDefault = fromRouteDefault;
exports.toRouteDefault = toRouteDefault;
exports.updateDefault = updateDefault;
exports.viewDefault = viewDefault;
exports.program = program;
exports.programStateWrapper = programStateWrapper;
exports.loop = loop;
exports.startup = startup;
exports.routerProgram = routerProgram;
/* router Not a pure module */
