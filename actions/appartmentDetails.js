import AppartmentDetailsPage from '../pages/AppartmentDetailsPage';


/**
 * Prints to the console appartment price from appartment description page
 */
export async function getAppartmentPrice() {
   return await AppartmentDetailsPage.appartmentPrice.innerText;
}