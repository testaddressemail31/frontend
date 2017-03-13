define([
    'common/modules/experiments/tests/generic-email-variants'
], function (
    genericEmailTest
) {
    return new genericEmailTest(
        {
            id: 'GuardianTodayEmailVariants',
            start: '2017-03-14',
            end: '2017-03-31',
            author: 'David Furey',
            audience: 0,
            audienceOffset: 0,
            signupPage: 'info/ng-interactive/2017/feb/23/sign-up-for-the-sleeve-notes-email',
            canonicalListId: 37,
            testIds: [
                { variantId: 'GuardianToday-Control', listId: 0 },
                { variantId: 'GuardianToday-Variant', listId: 0 }
            ]
        }
    );
});
