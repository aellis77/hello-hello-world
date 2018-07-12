 /* Program : helloWorld1.js. Version 2.0 7/12/2018 
    For some reason this is considered the first program 
    of choice.
    Version 2.0 adds additional messages
    Copyright (C) 2018  Amanda Ellis, wool_neu@gmail.com

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program in this
    directory. If not, see <https://www.gnu.org/licenses/>.
*/
//include Yue ? Might be able to do a window in node
// https://libyue.com/docs/latest/js/guides/getting_started.html
// well, not in production, and more complex than I want to deal with
//
// First with the console.log
console.log("Hello World!");
console.log("-------------------------")
console.log(" |   |   _   |   |   _   ");
console.log(" |---|  |_|  |   |  | |  ");
console.log(" |   |  |_   |   |  |_|  ");
console.log("-------------------------");

// then message boxes  (not an option in node - crashes the system)
// technically should be window.alert, window.confirm
let msg = confirm( "World ? \n Where are you World ? \n O, there you are ..." +
" \n \n Well, Hello World! \n \n Press ok if you like the World. \n" +
"Press cancel if you do not like the World.");

if (msg) {
    alert("Wonderful. It's great to like the World");
} else {
    alert("No, then you must live in the USA.");
}
 

