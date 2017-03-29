define([
    'qwery'
], function (
    qwery
) {
    var emptyObj = {};
    var forEach = Array.prototype.forEach;

    return delegate;

    // data DelegateOptions = { live : boolean }

    // delegate(
    //    element : Element,
    //    selector : string,
    //    fn : function,
    //    options : DelegateOptions) : function
    function delegate(element, selector, fn, options) {
        options = options || emptyObj;

        var children = qwery(selector);

        if (options.live) {
            liveUpdateChildren(element, selector, children);
        }

        return function (e) {
            if (children.indexOf(e.target) < 0) {
                return;
            }
            fn(e);
        }
    }

    // updateChildren(element : Element, selector : string, children : Array<Element>) : void
    function liveUpdateChildren(element, selector, children) {
        new MutationObserver(function (records, mo) {
            records.forEach(function (record) {
                if (record.type !== 'childList') {
                    return;
                }
                addChildren(record.addedNodes, selector, children);
                removeChildren(record.removedNodes, selector, children);
            });

            if (children.length === 0) {
                mo.disconnect();
            }
        }).observe(element, { subtree: true });
    }

    // addChildren(nodes : NodeList, selector : string, children : Array<Element>) : void
    function addChildren(nodes, selector, children) {
        if (nodes.length) {
            forEach.call(nodes, function (node) {
                if (node.matches(selector)) {
                    children.push(node);
                }
            });
        }
    }

    // removeChildren(nodes : NodeList, selector : string, children : Array<Element>) : void
    function removeChildren(nodes, selector, children) {
        if (nodes.length) {
            forEach.call(nodes, function (node) {
                var index = children.indexOf(node);
                if (index > -1) {
                    children.splice(index, 1);
                }
            });
        }
    }
});
