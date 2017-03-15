define([
    'qwery',
    'lib/fastdom-promise'
], function (
    qwery,
    fastdom
) {
    var adSlotSelector = '.js-ad-slot';
    var awesomeSlotSelector = '.js-awesome-slot';


    var supporterText = '<div class="contributions-wrapper"><div><p class="contributions__epic--visual__cta--copy"><span class="awesome-text__message">We notice you are using an adblocker... Can support us another way?</span></p><p><span class="awesome-text__support">For less than the price of a coffee a week, you could help secure the Guardian’s future.</span></p>';

    var supportButton = '<a class="contributions__option-button contributions__contribute contributions__option-button--visual__cta"href="https://membership.theguardian.com/supporter?INTCMP=awesome_banner"><span class="text">Become a Supporter</span></a>';

    var contributeButton = '<a class="contributions__option-button contributions__contribute contributions__option-button--visual__cta"href="https://contribute.theguardian.com?INTCMP=awesome_banner"><span class="text">Make a Contribution</span></a></div></div>';

    var TEMPLATE = supporterText + supportButton + contributeButton;

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
                addAwesome(awesomeSlot);
              }
            });
        });
    }

    function shouldDisableAdSlot(adSlot) {
        return window.getComputedStyle(adSlot).display === 'none';
    }

    function hasHiddenSlot(awesomeSlot) {
      return window.getComputedStyle(awesomeSlot).height != '0px' && (!awesomeSlot.children[0] || awesomeSlot.children[0].hasAttribute('hidden'));
    }

    function addAwesome(awesomeSlot) {
        var span = document.createElement("span");
        span.innerHTML = TEMPLATE;
        awesomeSlot.appendChild(span);
    }
});
