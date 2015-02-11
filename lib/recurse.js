

//attempt 1: Strategy is to document the parent heirarchy internally, then traverse the tree again and document the lineage externally

// var getLineageFail = function(tree){
//   var level = 0;
//   traverse1(tree);
//   function traverse1(node,parent)
//   {
//       level++;
//       for (var key in node){
//           if (!parent) var parent = key;
//           if (key !== "parent" && key !== "name"){ // because adding keys while traversing said keys == bad
//               node[key].parent = parent;
//               node[key].name = key;
//               traverse1(node[key],key);
//           }
//       }
//       level--;
//       if (level > 1){
//           //I was going to traverse backwards to trace lineage here... but it seems redundant and there is probably a better way - also this method will likely run into namespace issues
//           console.log(node.name,node.parent,level);
//       }
//   }
// }


/**
 * Attempt 2
 *
 * Strategy:
 * 1) start at the beginning of the structure
 * 2) traverse & document the lineage of the structure at the same time
 * 3) remove leaf nodes from the tree once they are reached
 * 4) repeat from beginning of structure
 *
 **/

var getLineage = function(tree){

    var bucket = [];

    //deep copy of object
    var originalNode = $.extend(true, {}, tree);

    traverse2(originalNode);

    function traverse2(node){

        for (var key in node){

            // document the structure as we go
            bucket.push(key);

            // if current key is empty
            if ( _.isEmpty( node[key] ) ){
                // remove leaf node
                delete node[key];

                // format and spit out data,
                var lineage = bucket.join([separator = ' -> ']);
                console.log(lineage);

                // repeat from beginning of structure
                bucket = [];
                traverse2(originalNode);


            }else{

                // keep traversing
                traverse2( node[key] );
            }
        }
    }
}
