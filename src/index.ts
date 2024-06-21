"use strict"

import {
    abstractFactory,
    builder,
    decorator,
    fabricMethod,
    singleton,
    state
} from "./patterns"

import {
    array,
    string,
    decorator as standardLibDecorator,
    eventEmitter,
    fsExtra
} from "./standard-library"

state()
fabricMethod()
singleton()
abstractFactory()
builder()
decorator()

standardLibDecorator.add(1, 2)
eventEmitter()
fsExtra()