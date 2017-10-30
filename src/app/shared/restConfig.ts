import { baseURL } from './baseurl';

// Function for settting the default restangular configuration
export function RestangularConfigFactory (RestangularProvider) {
  RestangularProvider.setBaseUrl(baseURL);
  RestangularProvider.setDefaultRequestParams({
            apikey: '59f773d8741783cb062d8062'                  //key
        });
        RestangularProvider.setRestangularFields({
        id: '_id'   // duplicating id field to _id 
        });
}