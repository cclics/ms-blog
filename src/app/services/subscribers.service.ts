import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  constructor( private afs: AngularFirestore) { }

  addSubs(subData) {
    this.afs.collection('subscribers').add(subData).then(() => {
      console.log('Subscribe has been saved successfully')

    })
  }

  checkSubs( subEmail ) {
    return this.afs.collection('subscribers', ref => ref.where('email', '==', subEmail)).get()
  }
  
}



