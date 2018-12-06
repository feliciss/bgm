'use strict'
var BgmDebugger = require('./src/Bgmdebugger')
var TransactionDebugger = require('./src/debugger/debugger')

var StorageViewer = require('./src/storage/storageViewer')
var StorageResolver = require('./src/storage/storageResolver')

var SolidityDecoder = require('./src/solidity-decoder')

var remixLib = require('remix-lib')
var BreakpointManager = remixLib.code.BreakpointManager

/*
  Use of breakPointManager :

  var breakPointManager = new BreakpointManager(this.debugger, (sourceLocation) => {
    return line/column from offset (sourceLocation)
  })
  this.debugger.setBreakpointManager(breakPointManager)
*/
module.exports = {
  BgmDebugger: BgmDebugger,
  TransactionDebugger: TransactionDebugger,
  /**
   * constructor
   *
   * @param {Object} _debugger - type of BgmDebugger
   * @return {Function} _locationToRowConverter - function implemented by editor which return a column/line position for a char source location
   */
  BreakpointManager: BreakpointManager,
  SolidityDecoder: SolidityDecoder,
  storage: {
    StorageViewer: StorageViewer,
    StorageResolver: StorageResolver
  }
}

