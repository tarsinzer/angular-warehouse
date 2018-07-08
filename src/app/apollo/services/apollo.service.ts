import { Injectable } from '@angular/core';
import { MyApolloModule } from '../apollo.module';

import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Order } from '../../shared/interfaces/order.interface';
import { Apparel } from '../../shop/shared/apparel.interface';
import {
  Access,
  User
} from '../../auth/interfaces/user.interface';
import {
  allApparel,
  addOrder,
  allOrders,
  signUp,
  setCatchPhrase
} from '../queries';

@Injectable({ providedIn: MyApolloModule })
export class ApolloService {
  constructor(private apollo: Apollo) {
  }

  public getAllApparel(searchTerm: string): Observable<Apparel[]> {
    return this.apollo
        .watchQuery({
          pollInterval: 500,
          query: allApparel,
          variables: {
            searchTerm
          }
        })
        .valueChanges
        .pipe(map((res: any) => res.data.allApparel));
  }

  public getAllOrders(searchTerm: string = ''): Observable<Order[]> {
    return this.apollo
        .watchQuery({
          pollInterval: 500,
          query: allOrders,
          variables: {
            searchTerm
          }
        })
        .valueChanges
        .pipe(map((res: any) => res.data.allOrders));
  }

  public addOrder({ name, phone, address }: Order): Observable<Order> {
    return this.apollo
        .mutate({
          mutation: addOrder,
          variables: {
            name,
            phone,
            address
          }
        })
        .pipe(map((res: any) => res.data.addOrder));
  }

  public signUp({ email, password }: Access): Observable<User> {
    return this.apollo
        .mutate({
          mutation: signUp,
          variables: {
            email,
            password
          }
        })
        .pipe(map((res: any) => res.data.signUp));
  }

  public setCatchPhrase({ id, catchPhrase }: { id: string, catchPhrase: string }): Observable<User> {
    return this.apollo
        .mutate({
          mutation: setCatchPhrase,
          variables: {
            id,
            catchPhrase
          }
        })
        .pipe(map((res: any) => res.data.setCatchPhrase));
  }
}
