define([
    'qwery',
    'lib/fastdom-promise'
], function (
    qwery,
    fastdom
) {
    var adSlotSelector = '.js-ad-slot';
    var awesomeSlotSelector = '.js-awesome-slot';

    var template = "<p>Lots of people love reading us…</p>" +
    "<p>…but love alone doesn’t keep the lights on</p>" +
    "<p>The love and support of our readers is vital to securing our future. Our fearless, independent journalism takes a lot of time, hard work and money to produce. And it is increasingly funded by our readers. That’s why we need you to help.</p>";

    return {
        init: init
    };

    function init(force) {

        // Get all ad slots
        var adSlots = qwery(adSlotSelector);
        var awesomeSlots = qwery(awesomeSlotSelector);

        if (!force) {
            // remove the ones which should not be there
            adSlots = adSlots.filter(shouldDisableAdSlot);
        }

        return fastdom.write(function () {
            adSlots.forEach(function (adSlot) {
              adSlot.parentNode.removeChild(adSlot);
            });

            awesomeSlots.forEach(function (awesomeSlot) {
              if (hasHiddenSlot(awesomeSlot)) {
                addAwesome(awesomeSlot, template);
              }
            })
        });
    }

    function shouldDisableAdSlot(adSlot) {
        return window.getComputedStyle(adSlot).display === 'none';
    }

    function hasHiddenSlot(awesomeSlot) {
      return window.getComputedStyle(awesomeSlot).height != '0px' && (!awesomeSlot.children[0] || awesomeSlot.children[0].hasAttribute('hidden'));
    }

    function addAwesome(awesomeSlot, template) {
      if (hasHiddenSlot(awesomeSlot)) {
        var span = document.createElement("span");
        span.innerHTML = template;
        awesomeSlot.appendChild(span);
      }
    }
});
