import { DataCollection } from './data-collection';

export class DataStore {
  private collections: DataCollection[];

  /**
   * DataStore constructor
   *
   * @param collections
   */
  constructor(collections: DataCollection[]) {
    this.collections = collections;
  }

  /**
   * Return an specific amount of items by a given position
   *
   * @param _position
   * @param _amount
   */
  getItems(_position: number, _amount: number): number[] {
    // Declare type and inicialize array 
    let ar: number[] = [];

    // Map collection of arrays and generating inside ar the elements from the arrays
    this.collections.map((el)=>{
      ar = ar.concat.apply(ar, el.getItems(0, el.getTotal()))
    })
    // return doing a slice on the ar array based on the params _position, _position+_amount
    return ar.slice(_position, _position + _amount);
  }
}
