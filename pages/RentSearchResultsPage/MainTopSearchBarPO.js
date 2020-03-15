import { Selector } from 'testcafe';

export default class MainTopSearchBarPO {

    static findButton = Selector('[data-automation="searchButton"]');

    static moreOption = Selector('.col-md-2 .btn-more-options');
}

