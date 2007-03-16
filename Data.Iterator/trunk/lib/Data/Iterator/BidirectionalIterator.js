/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is Data.Iterator code.
 *
 * The Initial Developer of the Original Code is
 * Daisuke Maki.
 * Portions created by the Initial Developer are Copyright (C) 2006
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

//@esmodpp
//@version 0.2.0
//@namespace Data.Iterator

//@require Data.Iterator.Iterator

//@require Data.Error.NotImplementedError
//@with-namespace Data.Error



//@export BidirectionalIterator
function BidirectionalIterator ( ) {
    // This is a kind of abstract class.
    // Sub-classes should implement appropreate methods.
}

var proto = BidirectionalIterator.prototype = new Iterator();
proto.constructor = BidirectionalIterator;

var obj_name = "[object " + NAMESPACE + ".BidirectionalIterator]";

function mustImplement ( method ) {
    throw new NotImplementedError(
        [ "`", method, "' method is not implemented. ",
          "Any ", obj_name, " must implement a proper version of it." ].join(""),
        method );
}


proto.toString = function ( ) {
    return obj_name;
};


// Returns true if this iterator points to the head of a list,
// false othersise.
// The default implementation merely throws NotImplementedError.
// Sub-classes must implement their own version of this method.
proto.isHead = function ( ) {
    mustImplement("isHead");
};


// Returns a new iterator that points to the previous position to 
// the one which this iterator points to.
// The default implementation merely throws NotImplementedError.
// Sub-classes must implement their own version of this method.
proto.previous = function ( ) {
    mustImplement("previous");
};

