import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterFavoriteWebsite'
})
export class FilterFavoriteWebsitePipe implements PipeTransform {

  transform(value: any, filteredKey:string): any {
    if(filteredKey){
      filteredKey = filteredKey.toLowerCase();
      return value.filter( website => {
          return website.name.toLowerCase().indexOf(filteredKey) > -1 || website.url.indexOf(filteredKey) > -1;
      });
    }
    else {
      return value;
    }
  }

}
