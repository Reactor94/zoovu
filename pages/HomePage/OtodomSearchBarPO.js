import { Selector } from 'testcafe';


export default class OtodomSearchBarPO {

    static searchingFieldLabel = Selector('#LocationSearchFieldHome label');

    static rentCategoryButton = Selector('.categoryTabs li a').withText('Wynajem');

    static searchField = Selector('#LocationSearchFieldHome li > input#downshift-0-input');

    static showButton = Selector('button[data-tracking="search"]');

    static selectLocation = location => Selector('[role="option"] div').withText(location).with({ visibilityCheck: true });
}