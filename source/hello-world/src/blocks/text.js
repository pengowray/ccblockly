/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from "blockly/core";

const sleep = {
  type: "sleep",
  message0: "Wait %1 seconds",
  args0: [
    {
      type: "input_value",
      name: "SEC",
      check: "Number",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 100,
  tooltip: "Wait for some time",
  helpUrl: "",
};
const print = {
  type: "print",
  message0: "Print %1",
  args0: [
    {
      type: "input_value",
      name: "TEXT",
      check: "String",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 100,
  tooltip: "Write text with newline",
  helpUrl: "",
};
const printerror = {
  type: "printerror",
  message0: "Log error: %1",
  args0: [
    {
      type: "input_value",
      name: "TEXT",
      check: "String",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 0,
  tooltip: "Log an error",
  helpUrl: "",
};
const write = {
  type: "write",
  message0: "Write %1",
  args0: [
    {
      type: "input_value",
      name: "TEXT",
      check: "String",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 100,
  tooltip: "Write text without newline",
  helpUrl: "",
};
const read = {
  type: "read",
  message0: "Read",
  colour: 100,
  tooltip: "Read from console",
  helpUrl: "",
  output: "String",
};
const read_completion = {
  type: "read_completion",
  message0: "Read with autocomplete %1",
  args0: [
    {
      type: "input_value",
      check: "Array",
    },
  ],
  colour: 100,
  tooltip: "Read from console",
  helpUrl: "",
  output: "String",
};
const tonumber = {
  type: "tonumber",
  message0: "To number: %1",
  args0: [
    {
      type: "input_value",
      name: "OBJ",
    },
  ],
  colour: 100,
  tooltip: "Convert any object to a number",
  helpUrl: "",
  output: "Number",
};
const tostring = {
  type: "tostring",
  message0: "To string: %1",
  args0: [
    {
      type: "input_value",
      name: "OBJ",
    },
  ],
  colour: 100,
  tooltip: "Convert any object to string",
  helpUrl: "",
  output: "String",
};
const read_replace = {
  type: "read_replace",
  message0: "Read and replace with %1",
  args0: [
    {
      type: "input_value",
      name: "CHAR",
      check: "String",
    },
  ],
  colour: 100,
  tooltip: "Read from console and replace input with a character",
  helpUrl: "",
  output: "String",
};
const fs_open = {
  type: "fs_open",
  message0: "Open for %1 byte mode %2 file: %3",
  args0: [
    {
      type: "field_dropdown",
      name: "MODE",
      options: [
        ["read", "r"],
        ["write (overwrite)", "w"],
        ["write (keep)", "a"],
        ["update (keep)", "r+"],
        ["update (overwrite)", "w+"],
      ],
    },
    {
      type: "field_checkbox",
      name: "ISBYTE",
      checked: false,
    },
    {
      type: "input_value",
      check: "String",
      name: "NAME",
    },
  ],
  colour: 50,
  tooltip: "Open a file",
  helpUrl: "",
  output: "FileHandle",
};
const fs_close = {
  type: "fs_close",
  message0: "Close file %1",
  args0: [
    {
      type: "input_value",
      name: "FILE",
      check: "FileHandle",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 50,
  tooltip: "Close a file",
  helpUrl: "",
};
const fs_read = {
  type: "fs_read",
  message0: "Read %1 bytes from file %2",
  args0: [
    {
      type: "input_value",
      name: "BYTE",
      check: "Number",
    },
    {
      type: "input_value",
      name: "FILE",
      check: "FileHandle",
    },
  ],
  inputsInline: true,
  colour: 50,
  tooltip: "Read bytes from file",
  helpUrl: "",
  output: "String",
};
const fs_readall = {
  type: "fs_readall",
  message0: "Read everything from %1",
  args0: [
    {
      type: "input_value",
      name: "FILE",
      check: "FileHandle",
    },
  ],
  colour: 50,
  tooltip: "Read all remaining contents from file",
  helpUrl: "",
  output: "String",
};
const fs_readline = {
  type: "fs_readline",
  message0: "Read a line from %1",
  args0: [
    {
      type: "input_value",
      name: "FILE",
      check: "FileHandle",
    },
  ],
  colour: 50,
  tooltip: "Read a line from file",
  helpUrl: "",
  output: "String",
};
const fs_seek = {
  colour: 50,
  type: "fs_seek",
  message0: "Offset pointer in file %1 by %2, relative to the %3",
  args0: [
    {
      type: "input_value",
      name: "FILE",
      check: "FileHandle",
    },
    {
      type: "input_value",
      name: "OFFSET",
      check: "Number",
    },
    {
      type: "field_dropdown",
      name: "MODE",
      options: [
        ["current position", "cur"],
        ["beginning of the file", "set"],
        ["end of the file", "end"],
      ],
    },
  ],
};
const fs_seek_pos = {
  colour: 50,
  type: "fs_seek_pos",
  message0: "Pointer position in file %1",
  args0: [
    {
      type: "input_value",
      name: "FILE",
      check: "FileHandle",
    },
  ],
  output: "Number",
};
const fs_getsize = {
  type: "fs_getsize",
  message0: "Get size of file %1",
  args0: [
    {
      type: "input_value",
      name: "FILE",
      check: "String",
    },
  ],
  colour: 100,
  tooltip: "Get the size of a file",
  helpUrl: "",
  output: "Number",
};
const fs_exists = {
  type: "fs_exists",
  message0: "%1 exists?",
  args0: [
    {
      type: "input_value",
      name: "FILE",
      check: "String",
    },
  ],
  colour: 100,
  tooltip: "Checks whether the file exists",
  helpUrl: "",
  output: "Boolean",
};
const fs_isdir = {
  type: "fs_isdir",
  message0: "Is %1 a directory?",
  args0: [
    {
      type: "input_value",
      name: "FILE",
      check: "String",
    },
  ],
  colour: 100,
  tooltip: "Checks whether the path is a directory",
  helpUrl: "",
  output: "Boolean",
};
const fs_isreadonly = {
  type: "fs_isreadonly",
  message0: "Is %1 read-only?",
  args0: [
    {
      type: "input_value",
      name: "FILE",
      check: "String",
    },
  ],
  colour: 100,
  tooltip: "Checks whether the file can only be read",
  helpUrl: "",
  output: "Boolean",
};
const fs_makedir = {
  type: "fs_makedir",
  message0: "Create directory %1",
  args0: [
    {
      type: "input_value",
      name: "TEXT",
      check: "String",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 100,
  tooltip: "Create a directory",
  helpUrl: "",
};
const fs_move = {
  type: "fs_move",
  message0: "Move file %1 to %2",
  args0: [
    {
      type: "input_value",
      name: "FILE",
      check: "String",
    },
    {
      type: "input_value",
      name: "DEST",
      check: "String",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 100,
  tooltip: "Move file to a directory",
  helpUrl: "",
};
const fs_delete = {
  type: "fs_delete",
  message0: "Delete %1",
  args0: [
    {
      type: "input_value",
      name: "TEXT",
      check: "String",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 100,
  tooltip: "Delete a file or directory",
  helpUrl: "",
};
const fs_copy = {
  type: "fs_copy",
  message0: "Copy %1 as %2",
  args0: [
    {
      type: "input_value",
      name: "FILE",
      check: "String",
    },
    {
      type: "input_value",
      name: "DEST",
      check: "String",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 100,
  tooltip: "Copy file to another file",
  helpUrl: "",
};
const fs_getdrive = {
  type: "fs_getdrive",
  message0: "Drive of %1",
  args0: [
    {
      type: "input_value",
      name: "FILE",
      check: "String",
    },
  ],
  colour: 100,
  tooltip: "Checks which drive is file located on",
  helpUrl: "",
  output: "String",
};
const fs_getfreespace = {
  type: "fs_getfreespace",
  message0: "Free space of drive of %1",
  args0: [
    {
      type: "input_value",
      name: "FILE",
      check: "String",
    },
  ],
  colour: 100,
  tooltip: "Returns free space on the drive this file is located on",
  helpUrl: "",
  output: "Number",
};
const fs_getcapacity = {
  type: "fs_getcapacity",
  message0: "Capacity of drive of %1",
  args0: [
    {
      type: "input_value",
      name: "FILE",
      check: "String",
    },
  ],
  colour: 100,
  tooltip: "Returns capacity of the drive this file is located on",
  helpUrl: "",
  output: "Number",
};
const fs_complete = {
  type: "fs_complete",
  message0: "Completions of name %1 from directory %2",
  args0: [
    {
      type: "input_value",
      name: "FILE",
      check: "String",
    },
    {
      type: "input_value",
      name: "DEST",
      check: "String",
    },
  ],
  colour: 100,
  tooltip: "Returns list of filenames that can complete input",
  helpUrl: "",
  output: "Array",
};
const fs_find = {
  type: "fs_find",
  message0: "Find files which match pattern %1",
  args0: [
    {
      type: "input_value",
      name: "FILE",
      check: "String",
    },
  ],
  colour: 100,
  tooltip: "Find all files which can fit in the search string",
  helpUrl: "",
  output: "Array",
};
const fs_isdriveroot = {
  type: "fs_isdriveroot",
  message0: "Is drive of %1 root?",
  args0: [
    {
      type: "input_value",
      name: "FILE",
      check: "String",
    },
  ],
  colour: 100,
  tooltip: "Checks whether the drive is file located on is root",
  helpUrl: "",
  output: "Boolean",
};
const fs_list = {
  type: "fs_list",
  message0: "List dir %1",
  args0: [
    {
      type: "input_value",
      name: "FILE",
      check: "String",
    },
  ],
  colour: 100,
  tooltip: "Return all filepaths in a directory",
  helpUrl: "",
  output: "Array",
};
const fs_attributes = {
  type: "fs_attributes",
  message0: "Attributes of %1",
  args0: [
    {
      type: "input_value",
      name: "FILE",
      check: "String",
    },
  ],
  colour: 100,
  tooltip: "Return all attributes of a file",
  helpUrl: "",
  output: "Array",
};
const list_getkey = {
  type: "list_getkey",
  message0: "Get key %2 of table %1",
  args0: [
    {
      type: "input_value",
      name: "TABLE",
      check: "Array",
    },
    {
      type: "input_value",
      name: "KEY",
      check: null,
    },
  ],
  colour: 100,
  tooltip: "Get element by key",
  helpUrl: "",
  output: null,
};
const fs_combine = {
  type: "fs_combine",
  message0: "Combine paths in table %1",
  args0: [
    {
      type: "input_value",
      name: "PATHS",
      check: "Array",
    },
  ],
  colour: 100,
  tooltip: "Combine paths",
  helpUrl: "",
  output: null,
};
const turtle_dig = {
  type: "turtle_dig",
  message0: "Dig %1",
  args0: [
    {
      type: "field_dropdown",
      name: "DIR",
      options: [
        ["forward", ""],
        ["up", "Up"],
        ["down", "Down"],
      ],
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 230,
  tooltip: "Dig. Rock and stone!",
  helpUrl: "",
};
const turtle_build = {
  type: "turtle_build",
  message0: "Build %1",
  args0: [
    {
      type: "field_dropdown",
      name: "DIR",
      options: [
        ["forward", ""],
        ["up", "Up"],
        ["down", "Down"],
      ],
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 230,
  tooltip: "Place the selected block",
  helpUrl: "",
};
const turtle_move = {
  type: "turtle_move",
  message0: "Move %1 %2 times",
  args0: [
    {
      type: "field_dropdown",
      name: "DIR",
      options: [
        ["forward", "forward"],
        ["up", "up"],
        ["down", "down"],
        ["back", "back"],
        ["left", "turnLeft"],
        ["right", "turnRight"],
      ],
    },
    {
      type: "input_value",
      name: "TIMES",
      check: "Number",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 230,
  tooltip: "I like to move it move it",
  helpUrl: "",
};
const turtle_craft = {
  type: "turtle_craft",
  message0: "Attempt to craft %1 items",
  args0: [
    {
      type: "input_value",
      name: "NUM",
      check: "Number",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 100,
  tooltip: "Anybody actually uses crafting turtles?",
  helpUrl: "",
};
const turtle_drop = {
  type: "turtle_drop",
  message0: "Drop %1 %2 items",
  args0: [
    {
      type: "field_dropdown",
      name: "DIR",
      options: [
        ["forward", ""],
        ["up", "Up"],
        ["down", "Down"],
      ],
    },
    {
      type: "input_value",
      name: "TIMES",
      check: "Number",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 230,
  tooltip: "Drop the selected item",
  helpUrl: "",
};
const turtle_detect = {
  type: "turtle_detect",
  message0: "Is there a block %1?",
  args0: [
    {
      type: "field_dropdown",
      name: "DIR",
      options: [
        ["forward", ""],
        ["up", "Up"],
        ["down", "Down"],
      ],
    },
  ],
  colour: 230,
  tooltip: "Check for a block in given direction",
  helpUrl: "",
  output: "Boolean",
};
const turtle_compare = {
  type: "turtle_compare",
  message0: "Compare %1 to inventory",
  args0: [
    {
      type: "field_dropdown",
      name: "DIR",
      options: [
        ["forward", ""],
        ["up", "Up"],
        ["down", "Down"],
      ],
    },
  ],
  colour: 230,
  tooltip: "Is the block the same as selected?",
  helpUrl: "",
  output: "Boolean",
};
const turtle_attack = {
  type: "turtle_attack",
  message0: "Attack %1",
  args0: [
    {
      type: "field_dropdown",
      name: "DIR",
      options: [
        ["forward", ""],
        ["up", "Up"],
        ["down", "Down"],
      ],
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 230,
  tooltip: "Attack!!!!",
  helpUrl: "",
};
const turtle_suck = {
  type: "turtle_suck",
  message0: "Suck item from %1",
  args0: [
    {
      type: "field_dropdown",
      name: "DIR",
      options: [
        ["forward", ""],
        ["up", "up"],
        ["down", "down"],
      ],
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 230,
  tooltip: "Hmmm...",
  helpUrl: "",
};
const turtle_inspect = {
  type: "turtle_inspect",
  message0: "Inspect the block %1",
  args0: [
    {
      type: "field_dropdown",
      name: "DIR",
      options: [
        ["forward", ""],
        ["up", "up"],
        ["down", "down"],
      ],
    },
  ],
  colour: 230,
  tooltip: "I'm watching...",
  helpUrl: "",
  output: "Array",
};
const turtle_getfuellevel = {
  type: "turtle_getfuellevel",
  message0: "Get fuel level",
  colour: 100,
  tooltip: "Turtle not moving? Check the fuel!",
  helpUrl: "",
  output: "Number",
};
const turtle_getfuellimit = {
  type: "turtle_getfuellimit",
  message0: "Get fuel limit",
  colour: 100,
  tooltip:
    "By default, 20000 for regular turtles and 100000 for advanced ones.",
  helpUrl: "",
  output: "Number",
};
const turtle_refuel_isfuel = {
  type: "turtle_refuel_isfuel",
  message0: "Is selected item combustable?",
  colour: 100,
  tooltip: "Sticks are true, bucket of axolotl is false.",
  helpUrl: "",
  output: "Boolean",
};
const turtle_refuel = {
  type: "turtle_refuel",
  message0: "Refuel, consume at most %1 items",
  args0: [
    {
      type: "input_value",
      name: "NUM",
      check: "Number",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 100,
  tooltip: "Refuel the turtle",
  helpUrl: "",
};
const turtle_compareto = {
  type: "turtle_compareto",
  message0: "Compare to item in slot %1",
  args0: [
    {
      type: "input_value",
      name: "SLOT",
      check: "Number",
    },
  ],
  colour: 100,
  tooltip: "Compares selected item to another one",
  helpUrl: "",
  output: "Boolean",
};
const turtle_transferto = {
  type: "turtle_transferto",
  message0: "Transfer item to slot %1",
  args0: [
    {
      type: "input_value",
      name: "SLOT",
      check: "Number",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 100,
  tooltip: "Moves the item in inventory",
  helpUrl: "",
};
const turtle_equip = {
  type: "turtle_equip",
  message0: "Equip to the %1",
  args0: [
    {
      type: "field_dropdown",
      name: "DIR",
      options: [
        ["left", "Left"],
        ["right", "Right"],
      ],
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 230,
  tooltip: "Equips selected item. If slot is empty, unequip the side.",
  helpUrl: "",
};
const turtle_getitemdetail = {
  type: "turtle_getitemdetail",
  message0: "Item detail in slot %1",
  args0: [
    {
      type: "input_value",
      name: "SLOT",
      check: "Number",
    },
  ],
  colour: 230,
  tooltip:
    "Returns a table with some data about item. If 0, defaults to current slot.",
  helpUrl: "",
  output: "Array",
};
const turtle_getitemdetail_detailed = {
  type: "turtle_getitemdetail_detailed",
  message0: "Item detail in slot %1 (with more details)",
  args0: [
    {
      type: "input_value",
      name: "SLOT",
      check: "Number",
    },
  ],
  colour: 230,
  tooltip:
    "Gives more data at the cost of run time. If slot is 0, defaults to current slot.",
  helpUrl: "",
  output: "Array",
};
const turtle_getselectedslot = {
  type: "turtle_getselectedslot",
  message0: "Selected slot",
  colour: 230,
  tooltip: "Get selected slot number",
  helpUrl: "",
  output: "Number",
};
const turtle_select = {
  type: "turtle_select",
  message0: "Select slot %1",
  args0: [
    {
      type: "input_value",
      name: "NUM",
      check: "Number",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 100,
  tooltip: "Select slot from 1 to 16",
  helpUrl: "",
};
const get_arg = {
  type: "get_arg",
  message0: "Get arg # %1",
  args0: [{ type: "input_value", check: "Number", name: "NUM" }],
  colour: 100,
  tooltip: "Get command line argument",
  helpUrl: "",
  output: null,
};
const shallow_copy = {
  type: "shallow_copy",
  message0: "Shallow copy of table %1",
  args0: [{ type: "input_value", check: "Array", name: "TABLE" }],
  colour: 100,
  tooltip: "Get a copy of a table",
  helpUrl: "",
  output: "Array",
};
const args = {
  type: "args",
  message0: "args",
  colour: 100,
  tooltip: "Argument table",
  helpUrl: "",
  output: "Array",
};
const get_arg_amount = {
  type: "get_arg_amount",
  message0: "Amount of arguments",
  colour: 100,
  tooltip: "Amount of command line arguments",
  helpUrl: "",
  output: "Number",
};

const shell_resolve = {
  type: "shell_resolve",
  message0: "Resolve relative path %1",
  args0: [
    {
      type: "input_value",
      name: "PATH",
      check: "String",
    },
  ],
  colour: 0,
  tooltip: "Convert a relative path to an absolute one",
  helpUrl: "",
  output: "String",
};
const os_pullevent = {
  type: "os_pullevent",
  message0: "Pull event with filter: %1 raw? %2",
  args0: [
    { type: "input_value", check: "String", name: "FILTER" },
    {
      type: "field_checkbox",
      name: "RAW",
      checked: false,
    },
  ],
  colour: 0,
  tooltip:
    "Pull an event and return all data as a table. If raw, will also pull terminate event.",
  helpUrl: "",
  output: "Array",
};
const os_clock = {
  type: "os_clock",
  message0: "Uptime",
  colour: 0,
  tooltip: "Time since computer boot, in seconds",
  helpUrl: "",
  output: "Number",
};
const os_starttimeevent = {
  type: "os_starttimeevent",
  message0: "Start %1 for time %2",
  args0: [
    {
      type: "field_dropdown",
      name: "MODE",
      options: [
        ["alarm", "setAlarm"],
        ["timer", "startTimer"],
      ],
    },
    { type: "input_value", check: "Number", name: "TIME" },
  ],
  colour: 0,
  tooltip:
    "Start a timer for given amount of seconds or set an alarm for ingame time in range [0.0,24.0). Outputs an ID by which event can be cancelled.",
  helpUrl: "",
  output: "Number",
};
const os_time = {
  type: "os_time",
  message0: "Get time in locale %1",
  args0: [
    {
      type: "field_dropdown",
      name: "LOCALE",
      options: [
        ["utc", "utc"],
        ["ingame", "ingame"],
        ["local", "local"],
      ],
    },
  ],
  colour: 0,
  tooltip:
    "Returns milliseconds since 1 Jan 1970 in UTC timezone (utc), in server timezone (local), or since world creation (ingame). Use textutils.formatTime() to turn it into human-readable string",
  helpUrl: "",
  output: "Number",
};
// Create the block definitions for the JSON-only blocks.
// This does not register their definitions with Blockly.
// This file has no side effects!
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  sleep,
  print,
  printerror,
  write,
  read,
  read_completion,
  read_replace,
  tonumber,
  tostring,
  fs_open,
  fs_close,
  fs_read,
  fs_readall,
  fs_readline,
  fs_seek,
  fs_seek_pos,
  list_getkey,
  fs_copy,
  fs_delete,
  fs_exists,
  fs_getdrive,
  fs_getfreespace,
  fs_getcapacity,
  fs_isdir,
  fs_makedir,
  fs_isreadonly,
  fs_getsize,
  fs_move,
  fs_complete,
  fs_attributes,
  fs_list,
  fs_find,
  fs_isdriveroot,
  shell_resolve,
  fs_combine,
  turtle_attack,
  turtle_build,
  turtle_compare,
  turtle_compareto,
  turtle_craft,
  turtle_detect,
  turtle_dig,
  turtle_drop,
  turtle_equip,
  turtle_getfuellevel,
  turtle_getfuellimit,
  turtle_getitemdetail,
  turtle_getitemdetail_detailed,
  turtle_getselectedslot,
  turtle_inspect,
  turtle_move,
  turtle_refuel,
  turtle_refuel_isfuel,
  turtle_select,
  turtle_suck,
  turtle_transferto,
  get_arg,
  get_arg_amount,
  args,
  shallow_copy,
  os_pullevent,
]);
