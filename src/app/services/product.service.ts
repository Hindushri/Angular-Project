import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
httpOptions:any;
  constructor(private http:HttpClient
    ) { 
      let token =sessionStorage.getItem("token")
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          "Authorization":  "Bearer "+token
        })
      }
    }
  
  overAllTempData:any;


  public getProducts():Observable<any>{
    return this.http.get("http://localhost:4500/products",this.httpOptions);
  }

  public getProducts2(pattern:string):Observable<any>{
    return this.http.get("http://localhost:4500/products?type="+pattern,this.httpOptions);
  }

  public getParticularUserProduct():any{
  return this.http.get("http://localhost:4500/ListForUser",this.httpOptions)
  }

  public addCart(addItem:any):Observable<any>{

    const itemData = {
      name : addItem?.name,
      type: addItem?.type,
      price:addItem?.price,
      image : addItem?.image,
      description: addItem?.description,
      qty : addItem?.qty,
    }
    const data = {
      email : localStorage.getItem("email"),
      OrderData : [itemData],
      WishListData : [],
    }

   return this.http.post("http://localhost:4500/ListForUser",data, this.httpOptions)
  }

  public purchaseListdetails():Observable<any>{
   return this.http.get("http://localhost:4500/ListForUser",this.httpOptions)
  }

  public updateCart(data:any):Observable<any>{
    return this.http.put(`http://localhost:4500/ListForUser/${data.id}`,data, this.httpOptions)
   }
 

   public updateWish(data:any):Observable<any>{
    return this.http.put(`http://localhost:4500/ListForUser/${data.id}`,data, this.httpOptions)
   }

  public addWish(addItem:any):Observable<any>{

    const itemData = {
      name : addItem?.name,
      type: addItem?.type,
      price:addItem?.price,
      image : addItem?.image,
      description: addItem?.description,
      qty : addItem?.qty,
    }
    const data = {
      email : localStorage.getItem("email"),
      OrderData : [],
      WishListData : [itemData],
    }
   return this.http.post("http://localhost:4500/ListForUser",data, this.httpOptions)
  }

  public userList():Observable<any>{
    return this.http.get("http://localhost:4500/users",this.httpOptions)
   }
 




  
    
  //   this.overAllTempData?.map((item:any) => {
  //     if(item.email === localStorage.getItem("email")){
  //       sts = item;
  //     }
  //   })

  //   if(sts){
  //   return this.http.post("http://localhost:4500/ListForUser",addItem,this.httpOptions);
  //   } else {
  //     let data = {
  //       id: sts?.id,
  //       email:sts?.email,
  //       OrderData :{...sts?.OrderData, ...addItem.OrderData},
  //       WishListData : {...sts?.WishListData, ...addItem.WishListData}
  //     }
  //     return this.http.patch(`http://localhost:4500/ListForUser/${sts?.id}`,data)
  //   }
  // } 
}


