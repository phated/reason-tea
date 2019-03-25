/* TypeScript file generated by genType. */

const $$toRE443305185 = {"Pop": 0};

const $$toJS443305185 = {"0": "Pop"};

// tslint:disable-next-line:no-var-requires
const CreateBucklescriptBlock = require('bs-platform/lib/es6/block.js');

// tslint:disable-next-line:no-var-requires
const Curry = require('bs-platform/lib/es6/curry.js');

// tslint:disable-next-line:no-var-requires
const OolongBS = require('./Oolong.bs');

import {RouterAction_t as Oolong_Internals_RouterAction_t} from './Oolong_Internals.gen';

import {Router_t as Oolong_Internals_Router_t} from './Oolong_Internals.gen';

import {list} from '../src/shims/ReasonPervasives.shim';

// tslint:disable-next-line:interface-over-type-literal
export type self<action,state> = {
  readonly state: state; 
  readonly send: (_1:action) => void; 
  readonly handle: unknown
};

// tslint:disable-next-line:interface-over-type-literal
export type sideEffect<action,state> = (_1:self<action,state>) => void;

// tslint:disable-next-line:interface-over-type-literal
export type routeState<action,state> = 
  | { tag: "State"; value: state }
  | { tag: "StateWithSideEffects"; value: [state, sideEffect<action,state>] };

// tslint:disable-next-line:interface-over-type-literal
export type routerUpdate<action,state> = 
  | "Pop"
  | { tag: "Push"; value: state }
  | { tag: "PushWithSideEffects"; value: [state, sideEffect<action,state>] }
  | { tag: "Replace"; value: state }
  | { tag: "ReplaceWithSideEffects"; value: [state, sideEffect<action,state>] }
  | { tag: "PopWithSideEffects"; value: sideEffect<action,state> };

// tslint:disable-next-line:interface-over-type-literal
export type RouterProgram_t<action,state,view> = {
  readonly debugName: string; 
  readonly serializeState: (_1:state) => string; 
  readonly init: (_1:list<string>, _2:string, _3:string) => routeState<action,state>; 
  readonly fromRoute: (_1:Oolong_Internals_RouterAction_t, _2:state) => routeState<action,state>; 
  readonly toRoute: (_1:action, _2:state) => routerUpdate<action,state>; 
  readonly render: (_1:self<action,state>) => view; 
  readonly subscriptions: (_1:state) => list<sideEffect<action,state>>
};

export const routerProgram: <action,state,view>(_1:{ readonly serializeState: ((_1:state) => string) }, _2:string) => RouterProgram_t<action,state,view> = function <action,state,view>(Arg1: any, Arg2: any) {
  const result = Curry._2(OolongBS.routerProgram, Arg1.serializeState, Arg2);
  return {debugName:result[0], serializeState:result[1], init:function (Arg11: any, Arg21: any, Arg3: any) {
      const result1 = Curry._3(result[2], Arg11, Arg21, Arg3);
      return result1.tag===0
        ? {tag:"State", value:result1[0]}
        : {tag:"StateWithSideEffects", value:[result1.slice()[0], function (Arg12: any) {
          const result2 = result1.slice()[1]([Arg12.state, Arg12.send, Arg12.handle]);
          return result2
        }]}
    }, fromRoute:function (Arg13: any, Arg22: any) {
      const result3 = Curry._2(result[3], Arg13, Arg22);
      return result3.tag===0
        ? {tag:"State", value:result3[0]}
        : {tag:"StateWithSideEffects", value:[result3.slice()[0], function (Arg14: any) {
          const result4 = result3.slice()[1]([Arg14.state, Arg14.send, Arg14.handle]);
          return result4
        }]}
    }, toRoute:function (Arg15: any, Arg23: any) {
      const result5 = Curry._2(result[4], Arg15, Arg23);
      return typeof(result5) === 'object'
        ? result5.tag===0
          ? {tag:"Push", value:result5[0]}
          : result5.tag===1
          ? {tag:"PushWithSideEffects", value:[result5.slice()[0], function (Arg16: any) {
            const result6 = result5.slice()[1]([Arg16.state, Arg16.send, Arg16.handle]);
            return result6
          }]}
          : result5.tag===2
          ? {tag:"Replace", value:result5[0]}
          : result5.tag===3
          ? {tag:"ReplaceWithSideEffects", value:[result5.slice()[0], function (Arg17: any) {
            const result7 = result5.slice()[1]([Arg17.state, Arg17.send, Arg17.handle]);
            return result7
          }]}
          : {tag:"PopWithSideEffects", value:function (Arg18: any) {
            const result8 = result5[0]([Arg18.state, Arg18.send, Arg18.handle]);
            return result8
          }}
        : $$toJS443305185[result5]
    }, render:function (Arg19: any) {
      const result9 = result[5]([Arg19.state, Arg19.send, Arg19.handle]);
      return result9
    }, subscriptions:result[6]}
};

export const run: <action,state,view>(_1:{ readonly router?: Oolong_Internals_Router_t }, _2:RouterProgram_t<action,state,view>, _3:((_1:view) => void)) => void = function <action,state,view>(Arg1: any, Arg2: any, Arg31: any) {
  const result = Curry._3(OolongBS.run, Arg1.router, [Arg2.debugName, Arg2.serializeState, function (Arg11: any, Arg21: any, Arg3: any) {
      const result1 = Arg2.init(Arg11, Arg21, Arg3);
      return result1.tag==="State"
        ? CreateBucklescriptBlock.__(0, [result1.value])
        : CreateBucklescriptBlock.__(1, [result1.value[0], function (Arg12: any) {
          const result2 = result1.value[1]({state:Arg12[0], send:Arg12[1], handle:Arg12[2]});
          return result2
        }])
    }, function (Arg13: any, Arg22: any) {
      const result3 = Arg2.fromRoute(Arg13, Arg22);
      return result3.tag==="State"
        ? CreateBucklescriptBlock.__(0, [result3.value])
        : CreateBucklescriptBlock.__(1, [result3.value[0], function (Arg14: any) {
          const result4 = result3.value[1]({state:Arg14[0], send:Arg14[1], handle:Arg14[2]});
          return result4
        }])
    }, function (Arg15: any, Arg23: any) {
      const result5 = Arg2.toRoute(Arg15, Arg23);
      return typeof(result5) === 'object'
        ? result5.tag==="Push"
          ? CreateBucklescriptBlock.__(0, [result5.value])
          : result5.tag==="PushWithSideEffects"
          ? CreateBucklescriptBlock.__(1, [result5.value[0], function (Arg16: any) {
            const result6 = result5.value[1]({state:Arg16[0], send:Arg16[1], handle:Arg16[2]});
            return result6
          }])
          : result5.tag==="Replace"
          ? CreateBucklescriptBlock.__(2, [result5.value])
          : result5.tag==="ReplaceWithSideEffects"
          ? CreateBucklescriptBlock.__(3, [result5.value[0], function (Arg17: any) {
            const result7 = result5.value[1]({state:Arg17[0], send:Arg17[1], handle:Arg17[2]});
            return result7
          }])
          : CreateBucklescriptBlock.__(4, [function (Arg18: any) {
            const result8 = result5.value({state:Arg18[0], send:Arg18[1], handle:Arg18[2]});
            return result8
          }])
        : $$toRE443305185[result5]
    }, function (Arg19: any) {
      const result9 = Arg2.render({state:Arg19[0], send:Arg19[1], handle:Arg19[2]});
      return result9
    }, Arg2.subscriptions], Arg31);
  return result
};
