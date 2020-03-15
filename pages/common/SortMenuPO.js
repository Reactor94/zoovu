import { Selector } from 'testcafe';


export default class SortMenuPO {

    static sortMenuButton = Selector('#sortMenu');

    static default = Selector('#sort_default a');

    static qualityScore = Selector('#sort_quality_score a');

    static addingNewest = Selector('#sort_date_adding_newest a');

    static lowestPrice = Selector('#sort_price_lowest a');

    static higherPrice = Selector('#sort_price_highest a');

    static areaHighest = Selector('#sort_area_highest a');

}
