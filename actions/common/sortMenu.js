import { t } from 'testcafe';
import SortMenuPO from '../../pages/common/SortMenuPO';
import { SortType } from '../../enum/sortType';

/**
 * Selects extras type
 * @param {SortType} [type] type of the additional information
 */
export async function selectSortType( type = SortType.DEFAULT ) {
  await t.click(SortMenuPO.sortMenuButton);
  await t.click(getSortType(type));
  }

/*
 * Returns the selector for the given sort type
 * @param {SortType} sort type
 * @returns
 */
function getSortType(type) {
  switch (type) {
    case SortType.DEFAULT:
      return SortMenuPO.default;
    case SortType.QUALITY_SCORE:
      return SortMenuPO.qualityScore;
    case SortType.NEWEST:
      return SortMenuPO.addingNewest;
    case SortType.LOWEST_PRICE:
      return SortMenuPO.lowestPrice;
    case SortType.HIGHER_PRICE:
      return SortMenuPO.higherPrice;
    case SortType.AREA_HIGHEST:
        return SortMenuPO.areaHighest;
    default:
      return SortMenuPO.default;
  }
}