"use strict"

import {
    abstractFactory,
    builder,
    decorator,
    fabricMethod,
    singleton,
    state,
    prototype,
    adapter,
    bridge,
    composite,
} from "./patterns"
import { facade } from "./patterns/facade"

import {
    array,
    string,
    decorator as standardLibDecorator,
    eventEmitter,
    fsExtra,
    promise,
} from "./standard-library"

import {
    blfp,
} from "./test-cases"

standardLibDecorator.add(1, 2)
eventEmitter()
fsExtra()
array()
string()
promise()

state()
fabricMethod()
singleton()
abstractFactory()
builder()
decorator()
prototype()
adapter()
bridge()
composite()
facade()

blfp()